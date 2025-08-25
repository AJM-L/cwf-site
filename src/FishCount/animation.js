// Global variables
let fishData = [];
let particles = [];
let currentYearIndex = 0;
let lastYearChangeTime = 0;
const YEAR_DURATION = 12000; // 12 seconds per year (1 second = 1 month)
let canvas;
let maxParticlesPerSpecies = 150; // Reduced for smoother migration
let maxFishCount = 0;
let normalizationFactor = 1;
let currentMonth = 3; // Start in March
let monthDuration = 1000; // 1 second per month
let lastMonthTime = 0;
let legendVisible = false; // Track legend visibility

// Each particle represents this many actual fish
const FISH_PER_PARTICLE = 50; // 1 dot = 50 fish
const MAX_PARTICLES_PER_SPAWN = 5; // Limit particles spawned per frame for performance

// Speed control variables
let currentSpeedMultiplier = 1.0; // 1x speed by default
const BASE_MONTH_DURATION = 1000; // Base duration in milliseconds
const SPEED_PRESETS = [0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128]; // Available speed multipliers

// Month names for display
const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Migration seasons for each species (months 1-12)
const MIGRATION_SEASONS = {
  SPRING_CHINOOK: { start: 3, end: 7 }, // March-July
  FALL_CHINOOK: { start: 8, end: 9 },   // August-September  
  COHO: { start: 8, end: 11 },          // August-November
  WINTER_STEELHEAD_NATIVE: { start: 2, end: 5 }, // February-May (native stock)
  WINTER_STEELHEAD_HATCHERY: { start: 12, end: 1 }, // December-January (early-run hatchery)
  SUMMER_STEELHEAD: { start: 3, end: 10 } // March-October
};

// Pastel color palette for fish species (removed Chum)
const SPECIES_COLORS = {
  SPRING_CHINOOK: [255, 179, 217], // Soft Pink
  FALL_CHINOOK: [179, 229, 209],   // Mint Green
  COHO: [209, 196, 233],           // Lavender
  WINTER_STEELHEAD: [255, 204, 153], // Peach
  SUMMER_STEELHEAD: [179, 217, 255]  // Sky Blue
};

// Fish information for popups
const FISH_INFO = {
  'spring-chinook': {
    title: 'Spring Chinook Salmon',
    image: 'Images/Chinook.png',
    description: `
      <p><strong>Scientific Name:</strong> Oncorhynchus tshawytscha</p>
      <p><strong>Migration Season:</strong> March through July</p>
      <p><strong>Description:</strong> Spring Chinook are the largest Pacific salmon species, also known as King salmon. They migrate upstream in spring to spawn in headwater tributaries. These fish are prized for their large size and excellent eating quality.</p>
      <p><strong>Life Cycle:</strong> Adults return to freshwater to spawn after 3-7 years in the ocean. They die after spawning, providing nutrients to the ecosystem.</p>
      <p><strong>Conservation:</strong> Listed as threatened under the Endangered Species Act in many watersheds due to habitat loss and dam construction.</p>
    `
  },
  'fall-chinook': {
    title: 'Fall Chinook Salmon',
    image: 'Images/Chinook.png',
    description: `
      <p><strong>Scientific Name:</strong> Oncorhynchus tshawytscha</p>
      <p><strong>Migration Season:</strong> August through September</p>
      <p><strong>Description:</strong> Fall Chinook are the same species as Spring Chinook but represent a different run timing. They typically spawn in the mainstem river and lower tributaries rather than traveling as far upstream as spring-run fish.</p>
      <p><strong>Differences from Spring Run:</strong> Generally smaller than spring Chinook, with different genetic adaptations for their shorter freshwater journey and later spawning timing.</p>
      <p><strong>Habitat:</strong> Prefer gravel beds in rivers with good water flow for spawning.</p>
    `
  },
  'coho': {
    title: 'Coho Salmon',
    image: 'Images/Coho.png',
    description: `
      <p><strong>Scientific Name:</strong> Oncorhynchus kisutch</p>
      <p><strong>Migration Season:</strong> August through November</p>
      <p><strong>Description:</strong> Also known as Silver salmon, Coho are distinguished by their bright silver sides and dark backs. They are highly valued by both commercial and recreational fisheries.</p>
      <p><strong>Life Cycle:</strong> Typically spend 1-2 years in freshwater as juveniles, then 1-3 years in the ocean before returning to spawn.</p>
      <p><strong>Behavior:</strong> Known for their acrobatic fighting ability when hooked. They prefer smaller streams and tributaries for spawning.</p>
      <p><strong>Diet:</strong> Feed on insects, crustaceans, and small fish in the ocean, switching to stored energy reserves during their spawning migration.</p>
    `
  },
  'winter-steelhead': {
    title: 'Winter Steelhead',
    image: 'Images/Steelhead.png',
    description: `
      <p><strong>Scientific Name:</strong> Oncorhynchus mykiss</p>
      <p><strong>Migration Seasons:</strong> Native stock (February-May), Hatchery early-run (December-January)</p>
      <p><strong>Description:</strong> Winter steelhead are sea-run rainbow trout that return to freshwater to spawn. Unlike salmon, they can survive spawning and return to the ocean.</p>
      <p><strong>Native vs Hatchery:</strong> Native fish follow natural timing (Feb-May), while hatchery-introduced Big Creek stock arrives earlier (Dec-Jan).</p>
      <p><strong>Spawning:</strong> Spawn from January through April, depending on run timing. Some individuals may spawn multiple times in their lifetime.</p>
      <p><strong>Conservation:</strong> Listed as threatened under the Endangered Species Act. Wild populations have declined significantly due to habitat loss and competition with hatchery fish.</p>
    `
  },
  'summer-steelhead': {
    title: 'Summer Steelhead',
    image: 'Images/Steelhead.png',
    description: `
      <p><strong>Scientific Name:</strong> Oncorhynchus mykiss</p>
      <p><strong>Migration Season:</strong> March through October</p>
      <p><strong>Description:</strong> Summer steelhead are an introduced population that enters freshwater during warmer months but doesn't spawn until winter. Despite the name "summer," they migrate for most of the year.</p>
      <p><strong>Unique Behavior:</strong> They hold in cool, deep pools throughout the summer and fall, waiting for water temperatures to drop before spawning in January-March.</p>
      <p><strong>Origin:</strong> This population was introduced from other river systems and represents a different life history strategy than native winter steelhead.</p>
      <p><strong>Adaptation:</strong> Well-adapted to finding thermal refugia during hot summer months in deep pools and spring-fed areas.</p>
    `
  },
  'lamprey': {
    title: 'Pacific Lamprey',
    image: 'Images/Lamprey.png',
    description: `
      <p><strong>Scientific Name:</strong> Entosphenus tridentatus</p>
      <p><strong>Migration Season:</strong> Year-round (not shown in animation)</p>
      <p><strong>Description:</strong> Pacific lampreys are ancient, jawless fish that have existed for over 400 million years. They are not included in the fish count data but are an important part of the ecosystem.</p>
      <p><strong>Life Cycle:</strong> Spend 3-7 years as filter-feeding larvae (ammocoetes) buried in river sediments, then transform into parasitic adults that migrate to the ocean for 1-3 years before returning to spawn.</p>
      <p><strong>Ecological Role:</strong> Larvae filter water and improve water quality. Adults serve as food for marine mammals, seabirds, and fish. After spawning, their decomposing bodies provide nutrients to freshwater ecosystems.</p>
      <p><strong>Cultural Significance:</strong> Traditionally harvested by Pacific Northwest tribes and considered a delicacy. Called "eel" in many tribal languages.</p>
      <p><strong>Fish Ladders:</strong> Adult lampreys struggle with modern fish ladder designs. They climb using their suction-cup mouths and need rough surfaces and resting areas, leading to specialized lamprey passage structures.</p>
      <p><strong>Conservation:</strong> Populations have declined significantly due to dam construction, habitat loss, and water quality issues. They're considered a species of concern in many watersheds.</p>
    `
  }
};

// Particle class - now with directional swimming
class FishParticle {
  constructor(x, y, species, year, direction = 1) {
    this.x = x;
    this.y = y;
    this.species = species;
    this.year = year;
    this.direction = direction; // 1 = right, -1 = left
    this.size = random(3, 6);
    this.baseSize = this.size;
    this.color = SPECIES_COLORS[species];
    this.alpha = 255;
    this.targetAlpha = 255;
    
    // Constant screen velocity - all fish move at same speed across screen
    const CONSTANT_SCREEN_VELOCITY = 1.2; // pixels per frame
    this.vx = CONSTANT_SCREEN_VELOCITY * direction;
    this.vy = random(-0.2, 0.2); // Gentle vertical drift
    this.baseVx = this.vx;
    this.baseVy = this.vy;
    
    this.pulseOffset = random(TWO_PI);
    this.life = 1.0;
    this.targetLife = 1.0;
    this.swimmingOffset = random(TWO_PI); // For swimming animation
  }
  
  update() {
    // Smooth life/alpha transitions
    this.life = lerp(this.life, this.targetLife, 0.05);
    this.alpha = this.life * 255;
    
    // Constant screen velocity with subtle swimming variations
    this.vx = this.baseVx + sin(millis() * 0.003 + this.swimmingOffset) * 0.2;
    
    // Gentle vertical movement (not scaled with animation speed)
    this.vy += random(-0.05, 0.05); // Random vertical movement
    this.vy = constrain(this.vy, -0.4, 0.4);
    
    // Apply movement
    this.x += this.vx;
    this.y += this.vy;
    
    // Remove particles that swim off screen
    if (this.direction > 0 && this.x > width + 50) {
      this.fadeOut();
    } else if (this.direction < 0 && this.x < -50) {
      this.fadeOut();
    }
    
    // Keep particles within vertical bounds
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
    
    // Swimming animation - size pulses with movement
    let pulse = sin(millis() * 0.004 + this.pulseOffset) * 0.15 + 1;
    this.size = this.baseSize * pulse * this.life;
  }
  
  display() {
    if (this.life <= 0.01) return;
    
    push();
    translate(this.x, this.y);
    
    // Efficient glow effect
    let glowAlpha = this.alpha * 0.3;
    
    // Outer glow
    fill(this.color[0], this.color[1], this.color[2], glowAlpha * 0.2);
    noStroke();
    ellipse(0, 0, this.size * 3, this.size * 3);
    
    // Middle glow
    fill(this.color[0], this.color[1], this.color[2], glowAlpha * 0.5);
    ellipse(0, 0, this.size * 1.8, this.size * 1.8);
    
    // Main particle with slight elongation in swimming direction
    fill(this.color[0], this.color[1], this.color[2], this.alpha);
    ellipse(0, 0, this.size * 1.2, this.size * 0.8);
    
    // Bright core
    fill(255, 255, 255, this.alpha * 0.4);
    ellipse(0, 0, this.size * 0.4, this.size * 0.3);
    
    pop();
  }
  
  fadeOut() {
    this.targetLife = 0;
  }
  
  isDead() {
    return this.life <= 0.01;
  }
}

function preload() {
  // Load CSV data with specific columns (excluding Chum)
  loadTable('annual_counts_1971-2024_corrected.csv', 'csv', 'header', (table) => {
    fishData = table.getRows().map(row => {
      const yearData = {
        year: row.getNum('YEAR'),
        springChinook: row.getNum('SPRING_CHINOOK_TOTAL') || 0,
        fallChinook: row.getNum('FALL_CHINOOK_TOTAL') || 0,
        coho: row.getNum('COHO_TOTAL') || 0,
        winterSteelhead: row.getNum('WINTER_STEELHEAD_TOTAL') || 0,
        summerSteelhead: row.getNum('SUMMER_STEELHEAD') || 0
        // Removed chum
      };
      
      // Track maximum count for reference (no longer used for normalization)
      const counts = [
        yearData.springChinook,
        yearData.fallChinook,
        yearData.coho,
        yearData.winterSteelhead,
        yearData.summerSteelhead
      ];
      
      const yearMax = Math.max(...counts);
      if (yearMax > maxFishCount) {
        maxFishCount = yearMax;
      }
      
      return yearData;
    });
    
    console.log('Fish data loaded:', fishData.length, 'years');
    console.log('Maximum fish count found:', maxFishCount);
    console.log(`Each particle represents ${FISH_PER_PARTICLE} fish`);
    console.log(`Maximum particles for highest count: ${Math.floor(maxFishCount / FISH_PER_PARTICLE)}`);
    
    displayDataStatistics();
  });
}

function displayDataStatistics() {
  // Find some interesting statistics (excluding chum)
  const totalCounts = fishData.map(year => 
    year.springChinook + year.fallChinook + year.coho + 
    year.winterSteelhead + year.summerSteelhead
  );
  
  const maxTotalYear = fishData[totalCounts.indexOf(Math.max(...totalCounts))];
  const minTotalYear = fishData[totalCounts.indexOf(Math.min(...totalCounts))];
  
  console.log('Year with highest total fish count:', maxTotalYear.year, '(', Math.max(...totalCounts), 'fish)');
  console.log('Year with lowest total fish count:', minTotalYear.year, '(', Math.min(...totalCounts), 'fish)');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.body);
  
  lastYearChangeTime = millis();
  lastMonthTime = millis();
  
  // Initialize year and month display
  setTimeout(() => {
    if (fishData.length > 0) {
      updateYear();
      updateMonth();
    }
    
    // Initialize speed display
    updateSpeedDisplay();
    updateActiveSpeedButton();
    
    // Add click handlers for fish names
    const fishNames = document.querySelectorAll('.fish-name-clickable');
    fishNames.forEach(name => {
      name.addEventListener('click', (e) => {
        e.stopPropagation();
        const fishType = e.target.getAttribute('data-fish');
        showFishPopup(fishType);
      });
    });
  }, 100);
}

function draw() {
  background(0, 20); // Slight trail effect for swimming paths
  
  // Update month progression
  if (millis() - lastMonthTime > monthDuration) {
    currentMonth++;
    if (currentMonth > 12) {
      currentMonth = 1;
      // Move to next year
      currentYearIndex = (currentYearIndex + 1) % fishData.length;
      updateYear(); // Update the year display
    }
    updateMonth(); // Update month display
    lastMonthTime = millis();
    console.log(`Year ${fishData[currentYearIndex]?.year || 'Loading'}, Month ${MONTH_NAMES[currentMonth]} (${currentMonth})`);
  }
  
  // Spawn fish based on current month and migration seasons
  if (fishData.length > 0) {
    spawnSeasonalFish();
  }
  
  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
  
  // Update particle count display less frequently (optional console logging)
  if (frameCount % 300 === 0) { // Every 5 seconds
    const activeParticles = particles.filter(p => p.life > 0.1).length;
    const representedFish = activeParticles * FISH_PER_PARTICLE;
    console.log(`Active particles: ${activeParticles} (representing ~${representedFish} fish), Year: ${fishData[currentYearIndex]?.year || 'Loading'}, Month: ${MONTH_NAMES[currentMonth]}`);
  }
}

function spawnSeasonalFish() {
  if (!fishData[currentYearIndex]) return;
  
  const yearData = fishData[currentYearIndex];
  
  // Spring Chinook (March-July)
  if (isInSeason('SPRING_CHINOOK')) {
    spawnFish('SPRING_CHINOOK', yearData.springChinook);
  }
  
  // Fall Chinook (August-September)
  if (isInSeason('FALL_CHINOOK')) {
    spawnFish('FALL_CHINOOK', yearData.fallChinook);
  }
  
  // Coho (August-November)
  if (isInSeason('COHO')) {
    spawnFish('COHO', yearData.coho);
  }
  
  // Summer Steelhead (March-October)
  if (isInSeason('SUMMER_STEELHEAD')) {
    spawnFish('SUMMER_STEELHEAD', yearData.summerSteelhead, 1); // Upstream
  }
  
  // Winter Steelhead - Native Stock (February-May)
  if (isInSeason('WINTER_STEELHEAD_NATIVE')) {
    spawnFish('WINTER_STEELHEAD', yearData.winterSteelhead, 1); // Upstream
  }
  
  // Winter Steelhead - Hatchery Early-run (December-January)
  if (isInSeason('WINTER_STEELHEAD_HATCHERY')) {
    spawnFish('WINTER_STEELHEAD', yearData.winterSteelhead, 1); // Upstream
  }
}

function isInSeason(species) {
  const season = MIGRATION_SEASONS[species];
  if (!season) return false;
  
  if (season.start <= season.end) {
    return currentMonth >= season.start && currentMonth <= season.end;
  } else {
    // Handle seasons that wrap around year (like December-January)
    return currentMonth >= season.start || currentMonth <= season.end;
  }
}

function spawnFish(species, populationSize, direction = 1) {
  if (!populationSize || populationSize === 0) return;
  
  // Calculate how many particles should represent this population
  const particlesNeeded = Math.floor(populationSize / FISH_PER_PARTICLE);
  
  // Don't spawn too many particles at once for performance
  const particlesToSpawn = Math.min(particlesNeeded, MAX_PARTICLES_PER_SPAWN);
  
  // Distribute spawning across the migration season to avoid all particles appearing at once
  const seasonLength = getMigrationSeasonLength(species);
  // Adjust spawn rate based on current speed - faster speeds need higher spawn rates per frame
  const baseSpawnRate = particlesToSpawn / (seasonLength * 30); // Base rate assuming 30 fps
  const adjustedSpawnRate = baseSpawnRate * currentSpeedMultiplier; // Scale with speed
  
  // Use probabilistic spawning to spread particles over time
  if (random() < adjustedSpawnRate) {
    // Spawn from left side (or right side for downstream) - fish swim naturally onto screen
    const startX = direction > 0 ? -20 : width + 20;
    const y = random(height * 0.2, height * 0.8); // Middle portion of screen
    
    const particle = new FishParticle(startX, y, species, fishData[currentYearIndex].year, direction);
    particles.push(particle);
  }
}

// Helper function to get migration season length in months
function getMigrationSeasonLength(species) {
  const season = MIGRATION_SEASONS[species];
  if (!season) return 1;
  
  if (season.start <= season.end) {
    return season.end - season.start + 1;
  } else {
    // Handle seasons that wrap around year
    return (12 - season.start + 1) + season.end;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Interactive features
function mousePressed() {
  // Mouse no longer controls legend
  return false;
}

function mouseReleased() {
  // Mouse no longer controls legend
  return false;
}

function toggleLegend() {
  const infoPanel = document.getElementById('info-panel');
  if (infoPanel) {
    legendVisible = !legendVisible;
    if (legendVisible) {
      infoPanel.classList.add('visible');
    } else {
      infoPanel.classList.remove('visible');
    }
  }
}

function showFishPopup(fishType) {
  const popup = document.getElementById('fish-popup');
  const title = document.getElementById('popup-title');
  const image = document.getElementById('popup-image');
  const description = document.getElementById('popup-description');
  
  if (FISH_INFO[fishType]) {
    title.textContent = FISH_INFO[fishType].title;
    
    // Handle image display
    if (FISH_INFO[fishType].image && FISH_INFO[fishType].image !== '') {
      image.src = FISH_INFO[fishType].image;
      image.alt = FISH_INFO[fishType].title;
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
    
    description.innerHTML = FISH_INFO[fishType].description;
    popup.classList.add('visible');
  }
}

function closeFishPopup() {
  const popup = document.getElementById('fish-popup');
  popup.classList.remove('visible');
}

function keyPressed() {
  if (key === ' ') {
    // Space bar to toggle legend
    toggleLegend();
  }
  
  // Speed controls
  if (key === '-' || key === '_') {
    adjustSpeed(-1); // Slow down
  }
  
  if (key === '+' || key === '=') {
    adjustSpeed(1); // Speed up
  }
  
  // Number keys for direct speed selection
  if (key >= '1' && key <= '5') {
    const speedIndex = parseInt(key) - 1;
    if (speedIndex < SPEED_PRESETS.length) {
      setSpeed(SPEED_PRESETS[speedIndex]);
    }
  }
  
  if (keyCode === LEFT_ARROW && currentYearIndex > 0) {
    currentYearIndex--;
    currentMonth = 3; // Reset to March
    updateYear();
    updateMonth();
  }
  
  if (keyCode === RIGHT_ARROW && currentYearIndex < fishData.length - 1) {
    currentYearIndex++;
    currentMonth = 3; // Reset to March
    updateYear();
    updateMonth();
  }
  
  if (keyCode === ESCAPE) {
    // ESC to close popup
    closeFishPopup();
  }
}

function updateYear() {
  if (!fishData[currentYearIndex]) return;
  
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = fishData[currentYearIndex].year;
  }
}

function updateMonth() {
  const monthElement = document.getElementById('current-month');
  if (monthElement) {
    monthElement.textContent = MONTH_NAMES[currentMonth];
  }
}

// Speed control functions
function setSpeed(multiplier) {
  currentSpeedMultiplier = multiplier;
  monthDuration = BASE_MONTH_DURATION / multiplier; // Faster speed = shorter duration
  updateSpeedDisplay();
  updateActiveSpeedButton();
  console.log(`Speed set to ${multiplier}x`);
}

function updateSpeedDisplay() {
  const speedElement = document.getElementById('current-speed');
  const durationElement = document.getElementById('year-duration');
  
  if (speedElement) {
    speedElement.textContent = `${currentSpeedMultiplier}x`;
  }
  
  if (durationElement) {
    const yearDurationSeconds = (BASE_MONTH_DURATION * 12) / (currentSpeedMultiplier * 1000);
    durationElement.textContent = yearDurationSeconds.toFixed(1);
  }
}

function updateActiveSpeedButton() {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.speed-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to current speed button
  const activeButton = [...buttons].find(btn => 
    parseFloat(btn.textContent) === currentSpeedMultiplier
  );
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

function adjustSpeed(direction) {
  const currentIndex = SPEED_PRESETS.indexOf(currentSpeedMultiplier);
  let newIndex;
  
  if (direction > 0) { // Speed up
    newIndex = Math.min(currentIndex + 1, SPEED_PRESETS.length - 1);
  } else { // Slow down
    newIndex = Math.max(currentIndex - 1, 0);
  }
  
  if (newIndex !== currentIndex) {
    setSpeed(SPEED_PRESETS[newIndex]);
  }
}

// Make speed control functions globally accessible for HTML onclick handlers
window.setSpeed = setSpeed;
window.updateSpeedDisplay = updateSpeedDisplay;
window.updateActiveSpeedButton = updateActiveSpeedButton;
window.adjustSpeed = adjustSpeed; 