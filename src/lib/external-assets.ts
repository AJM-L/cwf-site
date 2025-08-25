// Configuration for external assets (large files stored outside Git)
export const externalAssets = {
  // Cloudflare R2 URLs for large geojson files
  // Note: These URLs require public access to be enabled in the R2 bucket settings
  geojson: {
    // Main watershed data files
    cascadeHuc8s: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/cascade-huc8s-complete.geojson',
    watershedCouncilBoundaries: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/Watershed_Council_Boundaries_-816249436229314565.geojson',
    willametteBasin: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/willamette-basin-official.geojson',
    mtHoodCascadeWatersheds: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/mt-hood-cascade-watersheds.geojson',
    sandyRiverBasin: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/sandy-river-basin.geojson',
    
    // Mt. Hood region files (smaller but keeping organized)
    hoodCore: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/hood_core.geojson',
    hoodBuffer: 'https://pub-4e7e265cce5d43a8a0902daa59196fba.r2.dev/hood_buffer.geojson',
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
