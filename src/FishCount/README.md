# Fish Count Animation

A beautiful, interactive visualization of fish count data from 1971-2024 using pastel-colored particles that represent different fish species.

## Features

- **Black canvas animation space** with softly glowing particles
- **Pastel color palette** with unique colors for each fish species:
  - 🌸 Spring Chinook (Soft Pink)
  - 🌿 Fall Chinook (Mint Green)
  - 💜 Coho (Lavender)
  - 🍑 Winter Steelhead (Peach)
  - 💙 Summer Steelhead (Sky Blue)
  - 🌱 Chum (Light Green)
- **Dynamic data visualization** that cycles through years 1971-2024
- **Glowing particle effects** with soft blur and pulsing animations
- **Interactive controls** for navigation and particle creation

## How to Use

1. **Open `index.html`** in a web browser
2. **Watch the animation** as it automatically cycles through years
3. **Interactive controls:**
   - Click anywhere to create a burst of particles
   - Press `SPACE` to pause/resume the year progression
   - Use `LEFT/RIGHT` arrow keys to manually navigate years
   - The info panel shows current year and total fish count

## Technical Details

- Built with **p5.js** for smooth canvas rendering
- Particle system with physics-based movement
- Glow effects using canvas shadow properties
- Responsive design that adapts to window size
- Performance optimized with particle count limits

## Data Source

The animation uses the fish count data from `annual_counts_1971-2024_corrected.csv`, which includes counts for various salmon and steelhead species.

## Files

- `index.html` - Main HTML file with UI and styling
- `animation.js` - p5.js animation script with particle system
- `annual_counts_1971-2024_corrected.csv` - Fish count data
- `README.md` - This documentation

## Performance Notes

- Particle density is automatically scaled for performance
- Maximum particle limit of 5000 for smooth animation
- Particles gradually fade out when transitioning between years 