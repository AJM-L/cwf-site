// Configuration for external assets (large files stored outside Git)
export const externalAssets = {
  // Cloudflare R2 URLs for large geojson files
  geojson: {
    // Main watershed data files
    cascadeHuc8s: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/cascade-huc8s-complete.geojson',
    watershedCouncilBoundaries: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/Watershed_Council_Boundaries_-816249436229314565.geojson',
    willametteBasin: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/willamette-basin-official.geojson',
    mtHoodCascadeWatersheds: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/mt-hood-cascade-watersheds.geojson',
    sandyRiverBasin: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/sandy-river-basin.geojson',
    
    // Mt. Hood region files (smaller but keeping organized)
    hoodCore: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/hood_core.geojson',
    hoodBuffer: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/hood_buffer.geojson',
  },
  
  // Other large files
  data: {
    // Add other large data files here
  }
};

// Helper function to get external asset URL
export function getExternalAsset(type: keyof typeof externalAssets, name: string): string {
  return externalAssets[type][name as keyof typeof externalAssets[typeof type]] || '';
}
