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

def get_feature_name(feature):
    """Extract the name from a feature."""
    return feature.get('properties', {}).get('name', feature.get('properties', {}).get('huc8', 'unknown'))

def validate_and_clean_backup():
    """Validate the backup file and create a clean version."""
    
    # Read the backup file
    print("Reading cascade-huc8s-complete.geojson.backup...")
    with open('cascade-huc8s-complete.geojson.backup', 'r') as f:
        backup_data = json.load(f)
    
    backup_features = backup_data.get('features', [])
    print(f"Backup file has {len(backup_features)} features")
    
    # Validate each feature
    valid_features = []
    invalid_features = []
    
    for feature in backup_features:
        name = get_feature_name(feature)
        if is_valid_polygon(feature):
            valid_features.append(feature)
        else:
            invalid_features.append(name)
    
    print(f"\nValid features: {len(valid_features)}")
    print(f"Invalid features: {len(invalid_features)}")
    
    if invalid_features:
        print("Invalid features found:")
        for name in invalid_features:
            print(f"  - {name}")
    
    # Create the cleaned GeoJSON
    cleaned_data = {
        'type': 'FeatureCollection',
        'features': valid_features
    }
    
    # Write the cleaned file
    output_file = 'cascade-huc8s-complete.geojson'
    print(f"\nWriting cleaned data to {output_file}...")
    with open(output_file, 'w') as f:
        json.dump(cleaned_data, f, indent=2)
    
    print(f"Successfully created clean watershed file!")
    print(f"Total valid features: {len(valid_features)}")
    
    # List all watershed names
    all_names = sorted([get_feature_name(f) for f in valid_features])
    print(f"\nAll watersheds in the file:")
    for name in all_names:
        print(f"  - {name}")

if __name__ == "__main__":
    try:
        validate_and_clean_backup()
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

