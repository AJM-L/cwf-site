#!/usr/bin/env python3
import json
import sys
import requests
import time

def fetch_from_usgs_api(huc8_code, name):
    """Try different USGS API endpoints to fetch HUC8 data."""
    print(f"Trying to fetch {name} (HUC8: {huc8_code})...")
    
    # Try different USGS API endpoints
    endpoints = [
        "https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer/3/query",
        "https://services.nationalmap.gov/arcgis/rest/services/wbd/MapServer/3/query",
        "https://carto.nationalmap.gov/arcgis/rest/services/wbd/MapServer/3/query"
    ]
    
    for endpoint in endpoints:
        print(f"  Trying endpoint: {endpoint}")
        
        params = {
            'where': f"HUC8='{huc8_code}'",
            'outFields': '*',
            'returnGeometry': 'true',
            'f': 'geojson'
        }
        
        try:
            response = requests.get(endpoint, params=params, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            
            if data.get('features') and len(data['features']) > 0:
                feature = data['features'][0]
                
                # Ensure the feature has the correct properties
                if 'properties' not in feature:
                    feature['properties'] = {}
                
                feature['properties']['name'] = name
                feature['properties']['huc8'] = huc8_code
                
                print(f"  Successfully fetched {name} from {endpoint}")
                return feature
            else:
                print(f"  No data found at {endpoint}")
                
        except Exception as e:
            print(f"  Error with {endpoint}: {e}")
        
        time.sleep(1)  # Be respectful to the API
    
    return None

def fetch_from_epa_api(huc8_code, name):
    """Try EPA's Watershed API."""
    print(f"Trying EPA API for {name} (HUC8: {huc8_code})...")
    
    url = f"https://watersgeo.epa.gov/arcgis/rest/services/OW/IMAP_HUC12/MapServer/2/query"
    
    params = {
        'where': f"HUC8='{huc8_code}'",
        'outFields': '*',
        'returnGeometry': 'true',
        'f': 'geojson'
    }
    
    try:
        response = requests.get(url, params=params, timeout=30)
        response.raise_for_status()
        
        data = response.json()
        
        if data.get('features') and len(data['features']) > 0:
            feature = data['features'][0]
            
            # Ensure the feature has the correct properties
            if 'properties' not in feature:
                feature['properties'] = {}
            
            feature['properties']['name'] = name
            feature['properties']['huc8'] = huc8_code
            
            print(f"Successfully fetched {name} from EPA API")
            return feature
        else:
            print(f"No data found for {name} in EPA API")
            
    except Exception as e:
        print(f"Error with EPA API: {e}")
    
    return None

def fetch_missing_watersheds():
    """Try multiple sources to fetch missing watersheds."""
    
    # Read the current complete file
    print("Reading current cascade-huc8s-complete.geojson...")
    with open('cascade-huc8s-complete.geojson', 'r') as f:
        current_data = json.load(f)
    
    current_features = current_data.get('features', [])
    current_names = {f.get('properties', {}).get('name', '') for f in current_features}
    print(f"Current file has {len(current_features)} features")
    
    # Define the missing watersheds with their HUC8 codes
    missing_watersheds = [
        ("17110007", "Lower Skagit"),
        ("17110015", "Nisqually")
    ]
    
    fetched_features = []
    
    for huc8_code, name in missing_watersheds:
        if name not in current_names:
            print(f"\nAttempting to fetch {name}...")
            
            # Try USGS API first
            feature = fetch_from_usgs_api(huc8_code, name)
            
            # If USGS fails, try EPA API
            if not feature:
                feature = fetch_from_epa_api(huc8_code, name)
            
            if feature:
                fetched_features.append(feature)
            else:
                print(f"Could not fetch {name} from any API")
        else:
            print(f"{name} already exists in the file")
    
    if not fetched_features:
        print("No new watersheds were fetched")
        return
    
    # Add the fetched features to the current data
    all_features = current_features + fetched_features
    
    # Create the final GeoJSON
    final_data = {
        'type': 'FeatureCollection',
        'features': all_features
    }
    
    # Write the final file
    output_file = 'cascade-huc8s-complete.geojson'
    print(f"\nWriting final data to {output_file}...")
    with open(output_file, 'w') as f:
        json.dump(final_data, f, indent=2)
    
    print(f"Successfully added {len(fetched_features)} watersheds from API!")
    print(f"Total features: {len(all_features)}")
    for feature in fetched_features:
        name = feature.get('properties', {}).get('name', 'Unknown')
        print(f"Added: {name}")

if __name__ == "__main__":
    try:
        fetch_missing_watersheds()
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

