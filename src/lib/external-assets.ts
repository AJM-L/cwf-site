// Configuration for external assets (large files stored outside Git)
export const externalAssets = {
  // Cloudflare R2 URLs for large geojson files
  geojson: {
    cascadeHuc8s: 'https://a52b78b2ef4fd5ff01457d7cde0f117e.r2.cloudflarestorage.com/cascade-huc8s-complete.geojson',
    // Add more as needed
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
