#!/usr/bin/env python3
import json
import sys

def is_valid_polygon(feature):
    """Check if a feature is a valid polygon with proper coordinates."""
    if not feature.get('geometry') or feature['geometry'].get('type') != 'Polygon':
        return False
    
    coords = feature['geometry'].get('coordinates', [])
    if not coords or len(coords) == 0:
        return False
    
    # Check outer ring (first array of coordinates)
    outer_ring = coords[0]
    if not outer_ring or len(outer_ring) < 4:
        return False
    
    # Check that all coordinates are valid [lon, lat] pairs
    for coord in outer_ring:
        if not isinstance(coord, list) or len(coord) != 2:
            return False
        if not isinstance(coord[0], (int, float)) or not isinstance(coord[1], (int, float)):
            return False
        if coord[0] == 0 and coord[1] == 0:  # Skip obviously invalid coordinates
            return False
    
    return True

def clean_geojson(input_file, output_file):
    """Clean GeoJSON file by removing invalid features."""
    print(f"Reading {input_file}...")
    
    with open(input_file, 'r') as f:
        data = json.load(f)
    
    if data.get('type') != 'FeatureCollection':
        print("Error: Input file is not a FeatureCollection")
        return
    
    original_count = len(data.get('features', []))
    print(f"Original features: {original_count}")
    
    # Filter out invalid features
    valid_features = []
    invalid_features = []
    
    for feature in data.get('features', []):
        if is_valid_polygon(feature):
            valid_features.append(feature)
        else:
            name = feature.get('properties', {}).get('name', feature.get('properties', {}).get('huc8', 'unknown'))
            invalid_features.append(name)
    
    print(f"Valid features: {len(valid_features)}")
    print(f"Invalid features: {len(invalid_features)}")
    
    if invalid_features:
        print("Removed invalid features:")
        for name in invalid_features:
            print(f"  - {name}")
    
    # Create cleaned GeoJSON
    cleaned_data = {
        'type': 'FeatureCollection',
        'features': valid_features
    }
    
    # Write cleaned file
    print(f"Writing cleaned data to {output_file}...")
    with open(output_file, 'w') as f:
        json.dump(cleaned_data, f, indent=2)
    
    print(f"Successfully cleaned GeoJSON file!")
    print(f"Removed {len(invalid_features)} invalid features")
    print(f"Kept {len(valid_features)} valid features")

if __name__ == "__main__":
    input_file = "cascade-huc8s-complete.geojson"
    output_file = "cascade-huc8s-complete-fixed.geojson"
    
    try:
        clean_geojson(input_file, output_file)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

