#!/bin/bash

# Optimize Shepherd's Dell images using ImageMagick v7
echo "Optimizing Shepherd's Dell images..."

# Create optimized directory
mkdir -p "static/images/waterfalls/shepherd's-dell/optimized"

# Function to optimize a single image
optimize_image() {
    local input_file="$1"
    local output_file="$2"
    
    echo "Optimizing: $input_file"
    
    # Use ImageMagick v7 magick command
    magick "$input_file" -quality 85 -strip -interlace Plane "$output_file"
    
    # Get file sizes
    original_size=$(stat -f%z "$input_file")
    optimized_size=$(stat -f%z "$output_file")
    
    # Calculate savings
    savings=$((original_size - optimized_size))
    savings_percent=$((savings * 100 / original_size))
    
    echo "  Original: ${original_size} bytes"
    echo "  Optimized: ${optimized_size} bytes"
    echo "  Savings: ${savings} bytes (${savings_percent}%)"
    echo ""
}

# Optimize Shepherd's Dell images
for img in "static/images/waterfalls/shepherd's-dell/"*.jpeg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        optimize_image "$img" "static/images/waterfalls/shepherd's-dell/optimized/$filename"
    fi
done

echo "Shepherd's Dell optimization complete!"
