#!/bin/bash

# Image Optimization Script for CWF Website
# This script optimizes images for web use by converting to WebP and optimizing existing formats

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
QUALITY=85
WEBP_QUALITY=80
MAX_WIDTH=1920
MAX_HEIGHT=1080

echo -e "${BLUE}Starting image optimization for CWF Website...${NC}"

# Function to optimize a single image
optimize_image() {
    local input_file="$1"
    local output_dir="$2"
    local filename=$(basename "$input_file")
    local name_without_ext="${filename%.*}"
    local extension="${filename##*.}"
    
    # Create output directory if it doesn't exist
    mkdir -p "$output_dir"
    
    # Get image dimensions
    local dimensions=$(identify -format "%wx%h" "$input_file" 2>/dev/null || echo "unknown")
    echo -e "${YELLOW}Processing: $filename ($dimensions)${NC}"
    
    # Convert to WebP for better compression
    local webp_output="$output_dir/${name_without_ext}.webp"
    if [[ "$extension" =~ ^(jpg|jpeg|png)$ ]]; then
        echo -e "  ${BLUE}Converting to WebP...${NC}"
        convert "$input_file" -quality $WEBP_QUALITY -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" "$webp_output"
        
        # Get file sizes
        local original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
        local webp_size=$(stat -f%z "$webp_output" 2>/dev/null || stat -c%s "$webp_output" 2>/dev/null)
        local savings=$(( (original_size - webp_size) * 100 / original_size ))
        
        echo -e "  ${GREEN}WebP created: $webp_output (${savings}% smaller)${NC}"
    fi
    
    # Optimize original format
    case "$extension" in
        jpg|jpeg)
            echo -e "  ${BLUE}Optimizing JPEG...${NC}"
            jpegoptim --strip-all --max=$QUALITY "$input_file"
            ;;
        png)
            echo -e "  ${BLUE}Optimizing PNG...${NC}"
            optipng -o2 -strip all "$input_file"
            ;;
    esac
}

# Function to process a directory recursively
process_directory() {
    local dir="$1"
    local output_dir="$2"
    
    echo -e "${BLUE}Processing directory: $dir${NC}"
    
    # Find all image files
    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
        # Skip if file is already in an optimized directory
        if [[ "$file" == *"/optimized/"* ]]; then
            continue
        fi
        
        # Create corresponding output path
        local relative_path="${file#$dir}"
        local output_path="$output_dir${relative_path%/*}"
        
        optimize_image "$file" "$output_path"
    done
}

# Main optimization process
main() {
    local images_dir="static/images"
    
    if [[ ! -d "$images_dir" ]]; then
        echo -e "${RED}Error: Images directory not found: $images_dir${NC}"
        exit 1
    fi
    
    # Process each subdirectory
    for subdir in "$images_dir"/*; do
        if [[ -d "$subdir" ]]; then
            local dirname=$(basename "$subdir")
            local optimized_dir="$images_dir/${dirname}/optimized"
            
            echo -e "${GREEN}Processing $dirname...${NC}"
            process_directory "$subdir" "$optimized_dir"
        fi
    done
    
    echo -e "${GREEN}Image optimization completed!${NC}"
    echo -e "${YELLOW}Optimized images are saved in 'optimized' subdirectories.${NC}"
    echo -e "${YELLOW}You can now update your Svelte components to use the optimized versions.${NC}"
}

# Run the script
main "$@"
