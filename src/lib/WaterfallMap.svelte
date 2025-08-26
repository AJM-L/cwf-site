<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Map as LeafletMap, LayerGroup, Layer, GeoJSON } from 'leaflet';
	import { base } from '$app/paths';
	import { getExternalAsset } from './external-assets';

	let mapContainer: HTMLDivElement;
	let map: LeafletMap;
	let L: typeof import('leaflet');
	let currentLayerGroup: LayerGroup;
	let hucLayerGroup: LayerGroup;
	let baseLayers: any[] = []; // Track base map layers for style switching

	// External watershed dataset (HUC12s)
	const HUC12_FEATURE_LAYER_URL = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Watershed_Boundary_Dataset_HUC_12s/FeatureServer/0';

	// Define zone interface
	interface Zone {
		name: string;
		url: string;
		description: string;
		color: string;
		bounds: [[number, number], [number, number]];
		center: [number, number];
		featureServiceUrl: string | null;
		dataBasinId?: string;
		staticDataUrl?: string;
		// Control visibility in overview mode
		showInOverview?: boolean;
		// Optional multiple polygon layers for zones like Mt. Hood region
		polygonLayers?: Array<{
			url: string;
			name: string;
			style: {
				color: string;
				weight: number;
				fillColor: string;
				fillOpacity: number;
				opacity?: number;
				dashArray?: string;
			};
		}>;
		waterfalls: Array<{
			name: string;
			lat: number;
			lng: number;
			url: string;
		}>;
	}

	// Define the three zones with their boundaries and metadata
	const zones: Zone[] = [
		{
			name: 'Willamette Valley',
			url: `${base}/falls/willamette-valley`,
			description: 'Agricultural heartland with powerful cascades',
			color: '#059669', // emerald-600
			bounds: [
				[44.5, -123.3],
				[45.6, -122.0]
			] as [[number, number], [number, number]],
			center: [44.9, -122.6] as [number, number],
			featureServiceUrl: null,
			staticDataUrl: getExternalAsset('geojson', 'willametteBasin'), // Official USGS Willamette Basin boundary
			waterfalls: [
				{
					name: 'Silver Falls State Park',
					lat: 44.8512,
					lng: -122.6462,
					url: `${base}/falls/willamette-valley/silver-falls`
				},
				{
					name: 'Willamette Falls',
					lat: 45.3514,
					lng: -122.6191,
					url: `${base}/falls/willamette-valley/willamette-falls`
				}
			]
		},
		{
			name: 'Columbia River Gorge',
			url: `${base}/falls/the-gorge`,
			description: 'World-renowned waterfall corridor',
			color: '#2563eb', // blue-600
			bounds: [
				[45.2, -122.8],
				[45.8, -120.5]
			] as [[number, number], [number, number]],
			center: [45.55, -121.9] as [number, number],
			featureServiceUrl: 'https://services7.arcgis.com/xtfQPw7zwSRPkcfN/arcgis/rest/services/NationalScenicArea/FeatureServer/0', // Official Columbia River Gorge boundary
			waterfalls: [
		{
			name: 'Bridal Veil Falls',
			lat: 45.5545,
			lng: -122.1803,
			url: `${base}/falls/the-gorge/bridal-veil`
		},
		{
			name: 'Latourell Falls',
			lat: 45.537,
			lng: -122.217,
			url: `${base}/falls/the-gorge/latourel`
		},
		{
			name: "Shepperd's Dell Falls",
			lat: 45.5483,
			lng: -122.195,
			url: `${base}/falls/the-gorge/shepards-dell`
		},
		{
					name: 'Triple Falls (Oneonta Creek)',
					lat: 45.5885,
					lng: -122.0807,
					url: `${base}/falls/the-gorge/triple-falls`
				},
				{
					name: 'Celilo Falls (Historic)',
					lat: 45.65147,
					lng: -120.96941,
					url: `${base}/falls/the-gorge/celilo-falls`
				}
			]
		},
		{
			name: 'Cascades / Mt. Hood',
			url: `${base}/falls/the-cascades`,
			description: 'Mountain waterfalls in volcanic landscapes',
			color: '#dc2626', // red-600
			bounds: [
				[44.8, -122.5],
				[45.8, -121.0]
			] as [[number, number], [number, number]],
			center: [45.3, -121.75] as [number, number],
			featureServiceUrl: null,
			staticDataUrl: undefined,
			showInOverview: true, // Show Mt. Hood region in overview mode
			// Mt. Hood polygons for overview mode
			polygonLayers: [
				{
					url: getExternalAsset('geojson', 'hoodBuffer'),
					name: 'Mt. Hood Region (Natural Terrain)',
					style: {
						color: '#dc2626',
						weight: 1,
						fillColor: '#dc2626',
						fillOpacity: 0.10,
						opacity: 0.8
					}
				},
				{
					url: getExternalAsset('geojson', 'hoodCore'),
					name: 'Mt. Hood Core (NF + Wilderness)',
					style: {
						color: '#dc2626',
						weight: 2,
						fillColor: '#dc2626',
						fillOpacity: 0.22,
						opacity: 0.9
					}
				}
			],
			waterfalls: [
		{
			name: 'Ramona Falls',
			lat: 45.37984,
			lng: -121.77591,
			url: `${base}/falls/the-cascades/ramona-falls`
		},
		{
			name: 'Zigzag Falls',
			lat: 45.31301642122849,
			lng: -121.7907918,
			url: `${base}/falls/the-cascades/zig-zag-falls`
				}
			]
		},
		{
			name: 'Cascade Range',
			url: `${base}/falls/the-cascades`,
			description: 'Mountain waterfalls across the volcanic range',
			color: '#dc2626', // red-600
			bounds: [
				[40.3, -123.9],
				[49.1, -116.0]
			] as [[number, number], [number, number]],
			center: [44.7, -120.0] as [number, number],
			featureServiceUrl: null,
			staticDataUrl: undefined, // No boundary overlay - show only watersheds
			showInOverview: false, // Don't show full Cascade Range in overview mode
			waterfalls: [
		{
			name: 'Ramona Falls',
			lat: 45.37984,
			lng: -121.77591,
			url: `${base}/falls/the-cascades/ramona-falls`
		},
		{
			name: 'Zigzag Falls',
			lat: 45.31301642122849,
			lng: -121.7907918,
			url: `${base}/falls/the-cascades/zig-zag-falls`
				}
			]
		}
	];

	// Map mode: 'overview' shows all zones, 'zone' shows specific zone details
	export let mode: 'overview' | 'zone' = 'overview';
	export let selectedZone: string | null = null;
	// Map style controls
	export let mapStyle: 'satellite' | 'rivers' | 'topographic' | 'terrain' | 'hybrid' = 'satellite';

	// Function to load ArcGIS feature layer data using direct REST API
	async function loadArcGISBoundary(featureServiceUrl: string): Promise<any> {
		try {
			// Query the feature service for geometry using GeoJSON format
			const queryUrl = `${featureServiceUrl}/query?f=geojson&where=1=1&outFields=*&returnGeometry=true`;
			console.log('Fetching boundary data from:', queryUrl);
			
			const featureResponse = await fetch(queryUrl);
			if (!featureResponse.ok) {
				throw new Error(`HTTP error! status: ${featureResponse.status}`);
			}
			
			const geoJsonData = await featureResponse.json();
			console.log('Boundary data loaded:', geoJsonData);
			
			return geoJsonData;
		} catch (error) {
			console.warn(`Failed to load ArcGIS boundary from ${featureServiceUrl}:`, error);
			return null;
		}
	}

	// Function to clear existing base map layers
	function clearBaseLayers() {
		if (map && baseLayers.length > 0) {
			baseLayers.forEach(layer => {
				if (map.hasLayer(layer)) {
					map.removeLayer(layer);
				}
			});
			baseLayers = [];
		}
	}

	// Function to apply map style
	function applyMapStyle(style: typeof mapStyle) {
		if (!map || !L) return;
		
		console.log('Switching to map style:', style);
		
		// Clear existing base layers
		clearBaseLayers();
		
		// Apply new style layers
		switch (style) {
			case 'satellite':
				// Satellite imagery with light street overlay
				const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
					maxZoom: 18
				});
				const streetOverlay = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '© OpenStreetMap contributors',
					opacity: 0.3
				});
				satelliteLayer.addTo(map);
				streetOverlay.addTo(map);
				baseLayers = [satelliteLayer, streetOverlay];
				break;

			case 'rivers':
				// Light base with strong river/hydro emphasis
				const lightBase = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
					attribution: '© OpenStreetMap contributors © CARTO',
					maxZoom: 18
				});
				const usgsHydro = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroNHD/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'USGS The National Map: National Hydrography Dataset',
					opacity: 0.95,
					maxZoom: 16
				});
				const esriHydroRef = L.tileLayer('https://hydro.arcgis.com/arcgis/rest/services/WorldHydroReferenceOverlay/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'Esri, HERE, Garmin, FAO, NOAA, USGS',
					opacity: 0.85,
					maxZoom: 16
				});
				const labelOverlay = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
					attribution: '© OpenStreetMap contributors © CARTO',
					opacity: 0.9,
					maxZoom: 18
				});
				lightBase.addTo(map);
				usgsHydro.addTo(map);
				esriHydroRef.addTo(map);
				labelOverlay.addTo(map);
				baseLayers = [lightBase, usgsHydro, esriHydroRef, labelOverlay];
				break;

			case 'topographic':
				// OpenTopoMap - excellent topographic representation
				const topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
					attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)',
					maxZoom: 17
				});
				topoMap.addTo(map);
				baseLayers = [topoMap];
				break;

			case 'terrain':
				// USGS Terrain with shaded relief + topo
				const usgsBase = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'Tiles courtesy of the U.S. Geological Survey',
					maxZoom: 16
				});
				const shadedRelief = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'USGS Shaded Relief',
					opacity: 0.6,
					maxZoom: 16
				});
				usgsBase.addTo(map);
				shadedRelief.addTo(map);
				baseLayers = [usgsBase, shadedRelief];
				break;

			case 'hybrid':
				// Terrain base + river overlays + satellite where detailed
				const terrainBase = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
					attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)',
					maxZoom: 17,
					opacity: 0.8
				});
				const hydroOverlay = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroNHD/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'USGS Hydro',
					opacity: 0.7,
					maxZoom: 16
				});
				const satelliteDetail = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
					attribution: 'Esri Imagery',
					opacity: 0.4,
					maxZoom: 18
				});
				terrainBase.addTo(map);
				hydroOverlay.addTo(map);
				satelliteDetail.addTo(map);
				baseLayers = [terrainBase, hydroOverlay, satelliteDetail];
				break;
		}
	}

	// Reactive statement to handle map style changes
	$: if (map && L) {
		applyMapStyle(mapStyle);
	}

	// Load ArcGIS features within a geographic bounds (lon/lat) and return GeoJSON
	async function loadArcGISWithinBounds(featureLayerUrl: string, bounds: [[number, number], [number, number]]): Promise<any> {
		try {
			const [[south, west], [north, east]] = [[bounds[0][0], bounds[0][1]], [bounds[1][0], bounds[1][1]]];
			// Envelope geometry (XMin,YMin,XMax,YMax) expects lon,lat; set inSR=4326, outSR=4326
			const params = new URLSearchParams({
				f: 'geojson',
				where: '1=1',
				outFields: '*',
				returnGeometry: 'true',
				spatialRel: 'esriSpatialRelIntersects',
				geometryType: 'esriGeometryEnvelope',
				inSR: '4326',
				outSR: '4326',
				geometry: `${west},${south},${east},${north}`
			});
			const queryUrl = `${featureLayerUrl}/query?${params.toString()}`;
			const response = await fetch(queryUrl);
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			return await response.json();
		} catch (error) {
			console.warn('Failed loading ArcGIS within bounds:', error);
			return null;
		}
	}
	
	// Function to load static GeoJSON boundary data with fallback
	async function loadStaticBoundary(staticUrl: string): Promise<any> {
		try {
			console.log('Loading static boundary data from:', staticUrl);
			if (staticUrl.includes('r2.cloudflarestorage.com') || staticUrl.includes('r2.dev')) {
				console.log('🔗 Using R2 URL for boundary data:', staticUrl);
			}
			const response = await fetch(staticUrl);
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			
			const geoJsonData = await response.json();
			console.log('Static boundary data loaded successfully:', geoJsonData);
			return geoJsonData;
		} catch (error) {
			console.warn(`Failed to load static boundary from ${staticUrl}:`, error);
			
			// Try fallback to local file if external URL fails
			if (staticUrl.includes('r2.cloudflarestorage.com')) {
				const localUrl = staticUrl.replace(/^https:\/\/[^\/]+\.r2\.cloudflarestorage\.com\//, '/');
				console.log('Trying fallback to local file:', localUrl);
				
				try {
					const fallbackResponse = await fetch(localUrl);
					if (fallbackResponse.ok) {
						const fallbackData = await fallbackResponse.json();
						console.log('Fallback to local file successful:', localUrl);
						return fallbackData;
					}
				} catch (fallbackError) {
					console.warn(`Fallback to local file also failed:`, fallbackError);
				}
			}
			
			return null;
		}
	}

	// Function to load Data Basin boundary data (keep as fallback)
	async function loadDataBasinBoundary(datasetId: string): Promise<any> {
		try {
			// Data Basin provides WMS services for their datasets
			// Try to access the GeoJSON export API if available
			const exportUrl = `https://databasin.org/datasets/${datasetId}/download.geojson`;
			console.log('Attempting to fetch Data Basin boundary from:', exportUrl);
			
			let response = await fetch(exportUrl);
			
			if (!response.ok) {
				// Fallback: Try the dataset API endpoint
				const apiUrl = `https://databasin.org/api/v1/datasets/${datasetId}/`;
				console.log('Trying Data Basin API endpoint:', apiUrl);
				response = await fetch(apiUrl);
				
				if (response.ok) {
					const datasetInfo = await response.json();
					console.log('Data Basin dataset info:', datasetInfo);
					
					// If the API provides a download URL, use it
					if (datasetInfo.download_url) {
						const downloadResponse = await fetch(datasetInfo.download_url);
						if (downloadResponse.ok) {
							return await downloadResponse.json();
						}
					}
				}
			} else {
				return await response.json();
			}
			
			console.warn(`Could not access Data Basin dataset ${datasetId} directly`);
			return null;
		} catch (error) {
			console.warn(`Failed to load Data Basin boundary for dataset ${datasetId}:`, error);
			return null;
		}
	}

	// Function to search for Willamette Valley boundary service (keeping as fallback)
	async function findWillametteValleyBoundary(): Promise<string | null> {
		console.warn('Using fallback method - Data Basin integration preferred');
		return null;
	}

	// Note: maxAllowableOffsetDegrees function removed since we're using cached local data
	// If client-side geometry simplification is needed, it can be implemented here

	let hucRefreshTimer: any = null;
	let lastHucZoom: number = -1;
	let hucLoaded: boolean = false;
	let cachedHucData: any = null; // Cache the loaded GeoJSON data
	let filteredHucData: any = null; // Cache filtered data for current bounds
	let currentHucLayers: any[] = []; // Track current watershed layers
	let lastMapBounds: any = null; // Track last map bounds to detect meaningful changes
	let isUpdating: boolean = false; // Prevent concurrent updates
	let pendingUpdate: boolean = false; // Track if an update is needed after current one finishes
	let hoveredFeature: any = null; // Track currently hovered watershed
	let lastHoverTime: number = 0; // Throttle hover updates
	let hoverLayerCache: Map<any, any> = new Map(); // Cache for hover layers
	let spatialIndex: any = null; // Spatial index for faster point-in-polygon queries
	
	async function refreshHuc12Dynamic(zone: Zone, forceRefresh: boolean = false) {
		console.log('refreshHuc12Dynamic called with zone:', zone.name, 'forceRefresh:', forceRefresh, 'isUpdating:', isUpdating);
		
		if (!map) {
			console.warn('No map available');
			return;
		}
		if (!hucLayerGroup) {
			console.warn('No hucLayerGroup available');
			return;
		}
		
		// Prevent concurrent updates to avoid flashing
		if (isUpdating) {
			console.log('Update already in progress, marking as pending');
			pendingUpdate = true;
			return;
		}
		
		const currentZoom = map.getZoom();
		const currentBounds = map.getBounds();
		console.log('Current zoom level:', currentZoom, 'hucLoaded:', hucLoaded);
		
		// Clear layers if zoom is too low
		if (currentZoom < 5) {
			if (hucLoaded) {
				console.log(`Zoom level ${currentZoom} too low, clearing HUC8 layers`);
				hucLayerGroup.clearLayers();
				currentHucLayers = [];
				hucLoaded = false;
				lastHucZoom = currentZoom;
			}
			return;
		}
		
		// Check if refresh is actually needed
		const zoomChanged = Math.abs(currentZoom - lastHucZoom) >= 1;
		const boundsChanged = !lastMapBounds || !lastMapBounds.equals(currentBounds);
		
		// For move events (real-time updates), only proceed if there's a significant change
		// or if we haven't loaded data yet
		const significantBoundsChange = boundsChanged && lastMapBounds && (
			Math.abs(currentBounds.getNorth() - lastMapBounds.getNorth()) > 0.05 ||
			Math.abs(currentBounds.getSouth() - lastMapBounds.getSouth()) > 0.05 ||
			Math.abs(currentBounds.getEast() - lastMapBounds.getEast()) > 0.05 ||
			Math.abs(currentBounds.getWest() - lastMapBounds.getWest()) > 0.05
		);
		
		const needsRefresh = forceRefresh || !hucLoaded || zoomChanged || significantBoundsChange;
		
		if (!needsRefresh) {
			console.log('No significant change detected, skipping refresh');
			return;
		}
		
		// Mark as updating to prevent concurrent calls
		isUpdating = true;
		
		if (hucRefreshTimer) clearTimeout(hucRefreshTimer);
		// Reduced timeout for faster response during navigation
		const timeoutDelay = forceRefresh ? 0 : 50;
		hucRefreshTimer = setTimeout(async () => {
			console.log('Starting HUC8 refresh at zoom level:', currentZoom);
			
			// Load data once and cache it with optimizations
			if (!cachedHucData) {
				try {
					console.log('Loading and caching HUC8 data...');
					const r2Url = getExternalAsset('geojson', 'cascadeHuc8s');
					console.log('🔗 Using R2 URL:', r2Url);
					let response = await fetch(r2Url);
					
					// Fallback to local file if external URL fails
					if (!response.ok) {
						console.warn('External HUC8 data failed, trying local fallback...');
						response = await fetch('/SandyRiverBasin/cascade-huc8s-complete.geojson');
						if (!response.ok) {
							throw new Error(`HTTP ${response.status}: ${response.statusText}`);
						}
					}
					
					// Use streaming parser for large files if available
					const geoJsonData = await response.json();
					
					// Pre-filter to only features within expanded zone bounds to reduce data size
					const expandedBounds = L.latLngBounds(zone.bounds).pad(0.5); // Larger padding for smooth experience
					
					// Filter features that intersect with the expanded zone bounds
					const filteredFeatures = geoJsonData.features?.filter((feature: any) => {
						try {
							if (!feature.geometry || !feature.geometry.coordinates) return false;
							
							// Quick bounding box check first (faster than full intersection)
							const coords = feature.geometry.coordinates[0];
							if (!coords || coords.length === 0) return false;
							
							// Calculate feature bounding box
							let minLat = Infinity, maxLat = -Infinity;
							let minLng = Infinity, maxLng = -Infinity;
							
							for (const coord of coords) {
								const [lng, lat] = coord;
								minLat = Math.min(minLat, lat);
								maxLat = Math.max(maxLat, lat);
								minLng = Math.min(minLng, lng);
								maxLng = Math.max(maxLng, lng);
							}
							
							// Check if feature bounding box intersects with expanded zone bounds
							return expandedBounds.intersects(L.latLngBounds([[minLat, minLng], [maxLat, maxLng]]));
						} catch (error) {
							console.warn('Error filtering feature:', error);
							return false;
						}
					}) || [];
					
					cachedHucData = {
						type: 'FeatureCollection',
						features: filteredFeatures
					};
					
					console.log(`Cached ${cachedHucData.features?.length || 0} HUC8 features (filtered from ${geoJsonData.features?.length || 0})`);
					
					// Build spatial index for faster hover queries
					buildSpatialIndex();
				} catch (e) {
					console.error('Failed to load and cache HUC8 data:', e);
					hucLoaded = false;
					isUpdating = false;
					return;
				}
			}
			
			// Clear existing layers
			hucLayerGroup.clearLayers();
			currentHucLayers = [];
			
			if (cachedHucData && cachedHucData.features && cachedHucData.features.length > 0) {
				const zoneExtent = L.latLngBounds(zone.bounds).pad(0.1);
				console.log('Rendering watersheds from HUC8 cache...');
				
				let renderedCount = 0;
				let highlightedCount = 0;
				
				// Filter to only visible features for current map view to reduce rendering load
				const currentMapBounds = map.getBounds().pad(0.1); // Small padding for smooth pan
				const visibleFeatures = cachedHucData.features.filter((feature: any) => {
					try {
						if (!feature.geometry?.coordinates?.[0]) return false;
						
						// Use cached bounds if available
						if (!feature._cachedBounds) {
							const coords = feature.geometry.coordinates[0];
							let minLat = Infinity, maxLat = -Infinity;
							let minLng = Infinity, maxLng = -Infinity;
							
							for (const coord of coords) {
								const [lng, lat] = coord;
								minLat = Math.min(minLat, lat);
								maxLat = Math.max(maxLat, lat);
								minLng = Math.min(minLng, lng);
								maxLng = Math.max(maxLng, lng);
							}
							
							feature._cachedBounds = L.latLngBounds([[minLat, minLng], [maxLat, maxLng]]);
						}
						
						return currentMapBounds.intersects(feature._cachedBounds);
					} catch (error) {
						return false;
					}
				});
				
				console.log(`Rendering ${visibleFeatures.length} visible features out of ${cachedHucData.features.length} total`);
				
				// Use adaptive batch processing - smaller batches for smoother rendering
				const batchSize = Math.max(5, Math.min(15, Math.floor(visibleFeatures.length / 10)));
				let processedCount = 0;
				
				const processBatch = (startIndex: number) => {
					const endIndex = Math.min(startIndex + batchSize, visibleFeatures.length);
					
					for (let index = startIndex; index < endIndex; index++) {
						const feature = visibleFeatures[index];
						let c: any = null;
						
						try {
							// Validate geometry before processing
							if (!feature.geometry || !feature.geometry.coordinates) {
								throw new Error('Missing geometry or coordinates');
							}
							
							// Create a temporary layer to get bounds and center
							const tempLayer = L.geoJSON(feature);
							const bounds = tempLayer.getBounds();
							c = bounds.getCenter();
							
							// Validate that we have valid bounds
							if (!bounds.isValid()) {
								throw new Error('Invalid bounds calculated from geometry');
							}
							
							// Enhanced neutral styling for all watersheds - light tint
							const neutralLayer = L.geoJSON(feature, { 
								style: { 
									color: '#6b7280', 
									fillColor: '#9ca3af', 
									fillOpacity: 0.08, 
									weight: 1.5, 
									opacity: 0.6 
								} 
							}) as any;
							neutralLayer.feature = feature; // Store reference to feature
							neutralLayer.isHighlighted = false; // Track if this is a highlighted watershed
							neutralLayer.addTo(hucLayerGroup);
							currentHucLayers.push(neutralLayer);
							renderedCount++;
						} catch (error) {
							console.error(`Error rendering feature ${index} (${feature.properties?.name || feature.properties?.huc8 || 'unknown'}):`, error, 'Geometry:', feature.geometry?.type, 'Coords length:', feature.geometry?.coordinates?.length);
							continue; // Skip this feature entirely if basic rendering fails
						}
						
						// Enhanced highlight styling for Cascade Range area
						try {
							if (c && zoneExtent.contains(c)) {
								const highlightLayer = L.geoJSON(feature, { 
									style: { 
										color: zone.color, 
										fillColor: zone.color, 
										fillOpacity: 0.08, 
										weight: 2.5, 
										opacity: 0.7, 
										dashArray: '5,5' 
									} 
								}) as any;
								highlightLayer.feature = feature; // Store reference to feature
								highlightLayer.isHighlighted = true; // Track if this is a highlighted watershed
								highlightLayer.addTo(hucLayerGroup);
								currentHucLayers.push(highlightLayer);
								
								const p = feature.properties || {};
								const label = p.name || p.huc8 || 'HUC8';
								
								// Professional cartographic approach: Level of Detail (LOD) labeling
								// Calculate watershed size to determine if it should be labeled
								const tempLayer = L.geoJSON(feature);
								const bounds = tempLayer.getBounds();
								const boundsWidth = map.distance(bounds.getNorthWest(), bounds.getNorthEast());
								const boundsHeight = map.distance(bounds.getNorthWest(), bounds.getSouthWest());
								const watershedArea = boundsWidth * boundsHeight; // rough area in square meters
								
								// Level of Detail thresholds (based on cartographic best practices)
								let shouldShowLabel = false;
								let fontSize = 11;
								let fontWeight = 500;
								
								if (currentZoom >= 8 && watershedArea >= 500000000) { // 500 km² - Major watersheds
									shouldShowLabel = true;
									fontSize = 13;
									fontWeight = 600;
								} else if (currentZoom >= 7 && watershedArea >= 200000000) { // 200 km² - Large watersheds  
									shouldShowLabel = true;
									fontSize = 12;
									fontWeight = 500;
								} else if (currentZoom >= 6 && watershedArea >= 50000000) { // 50 km² - Medium watersheds
									shouldShowLabel = true;
									fontSize = 11;
									fontWeight = 500;
								}
								
								if (shouldShowLabel) {
									// Calculate optimal width based on text length and font size
									const textWidth = label.length * (fontSize * 0.6); // Approximate character width
									const labelWidth = Math.max(textWidth + 10, 60); // Add padding, minimum width
									const labelHeight = fontSize + 4; // Height based on font size
									
									// No truncation - let the text display naturally
									const displayLabel = label;
									
									const labelMarker = L.marker(c, { 
										icon: L.divIcon({ 
											className: 'watershed-label-clean', 
											html: `<div class="watershed-label-text" style="
												width: auto;
												height: auto;
												background: none;
												color: ${zone.color}; 
												border: none;
												border-radius: 0;
												display: flex;
												align-items: center;
												justify-content: center;
												font-family: 'Helvetica Neue', Arial, sans-serif;
												font-size: ${fontSize}px;
												font-weight: ${fontWeight};
												text-shadow: 
													-1px -1px 0 rgba(255,255,255,0.9),
													1px -1px 0 rgba(255,255,255,0.9),
													-1px 1px 0 rgba(255,255,255,0.9),
													1px 1px 0 rgba(255,255,255,0.9),
													0 0 3px rgba(255,255,255,0.8);
												box-shadow: none;
												overflow: visible;
												white-space: nowrap;
												line-height: 1.2;
												letter-spacing: 0.3px;
												padding: 2px 4px;
											">${displayLabel}</div>`, 
											iconSize: [labelWidth, labelHeight], 
											iconAnchor: [labelWidth/2, labelHeight/2] 
										}) 
									});
									labelMarker.addTo(hucLayerGroup);
									currentHucLayers.push(labelMarker);
								}
								highlightedCount++;
							}
						} catch (error) {
							console.error(`Error highlighting feature ${index} (${feature.properties?.name || 'unknown'}):`, error);
						}
					}
					
					processedCount += batchSize;
					
					// Continue processing next batch or finish
					if (endIndex < visibleFeatures.length) {
						// Use requestAnimationFrame for non-blocking batch processing
						requestAnimationFrame(() => processBatch(endIndex));
					} else {
						// All features processed
						console.log(`Rendered ${renderedCount} HUC8 watersheds, highlighted ${highlightedCount}`);
						hucLoaded = true;
						lastHucZoom = currentZoom;
						lastMapBounds = currentBounds;
						
						// Mark update as complete and handle any pending updates
						isUpdating = false;
						if (pendingUpdate) {
							pendingUpdate = false;
							console.log('Processing pending update...');
							// Use a small delay to avoid immediate re-triggering
							setTimeout(() => refreshHuc12Dynamic(zone, false), 200);
						}
					}
				};
				
				// Start batch processing
				processBatch(0);
			} else {
				console.warn('No HUC8 features found in cached data');
				hucLoaded = false;
				isUpdating = false;
			}
		}, timeoutDelay);
	}
	
	// Build spatial index for faster point-in-polygon queries
	function buildSpatialIndex() {
		if (!cachedHucData?.features) return;
		
		spatialIndex = new Map();
		
		// Create a grid-based spatial index
		const gridSize = 0.1; // ~11km at this latitude
		
		for (const feature of cachedHucData.features) {
			try {
				// Calculate bounds if not cached
				if (!feature._cachedBounds) {
					if (!feature.geometry?.coordinates?.[0]) continue;
					
					const coords = feature.geometry.coordinates[0];
					let minLat = Infinity, maxLat = -Infinity;
					let minLng = Infinity, maxLng = -Infinity;
					
					for (const coord of coords) {
						const [lng, lat] = coord;
						minLat = Math.min(minLat, lat);
						maxLat = Math.max(maxLat, lat);
						minLng = Math.min(minLng, lng);
						maxLng = Math.max(maxLng, lng);
					}
					
					feature._cachedBounds = L.latLngBounds([[minLat, minLng], [maxLat, maxLng]]);
				}
				
				const bounds = feature._cachedBounds;
				const minGridX = Math.floor(bounds.getWest() / gridSize);
				const maxGridX = Math.ceil(bounds.getEast() / gridSize);
				const minGridY = Math.floor(bounds.getSouth() / gridSize);
				const maxGridY = Math.ceil(bounds.getNorth() / gridSize);
				
				// Add feature to all grid cells it overlaps
				for (let x = minGridX; x <= maxGridX; x++) {
					for (let y = minGridY; y <= maxGridY; y++) {
						const key = `${x},${y}`;
						if (!spatialIndex.has(key)) {
							spatialIndex.set(key, []);
						}
						spatialIndex.get(key).push(feature);
					}
				}
			} catch (error) {
				console.warn('Error indexing feature:', error);
				continue;
			}
		}
		
		console.log(`Built spatial index with ${spatialIndex.size} grid cells for ${cachedHucData.features.length} features`);
	}
	
	// Optimized function to check and update hover state
	function checkHover(latlng: any) {
		if (!cachedHucData?.features || !map) return;
		
		const now = Date.now();
		if (now - lastHoverTime < 100) return; // Reduced to 10fps for smoother performance
		lastHoverTime = now;
		
		let candidates = [];
		
		// Try spatial index first, fallback to all features if needed
		if (spatialIndex && spatialIndex.size > 0) {
			const gridX = Math.floor(latlng.lng / 0.1);
			const gridY = Math.floor(latlng.lat / 0.1);
			const gridKey = `${gridX},${gridY}`;
			candidates = spatialIndex.get(gridKey) || [];
			
			// If no candidates found, try adjacent grid cells
			if (candidates.length === 0) {
				for (let dx = -1; dx <= 1; dx++) {
					for (let dy = -1; dy <= 1; dy++) {
						const adjacentKey = `${gridX + dx},${gridY + dy}`;
						const adjacentCandidates = spatialIndex.get(adjacentKey) || [];
						candidates.push(...adjacentCandidates);
					}
				}
			}
		}
		
		// Fallback to all features if spatial index fails
		if (candidates.length === 0) {
			candidates = cachedHucData.features;
		}
		
		// Find which feature contains this point using optimized testing
		let newHoveredFeature = null;
		for (const feature of candidates) {
			try {
				// Quick bounds check first if available
				if (feature._cachedBounds) {
					if (!feature._cachedBounds.contains(latlng)) continue;
				}
				
				if (isPointInPolygon(latlng, feature)) {
					newHoveredFeature = feature;
					break; // Found the containing polygon, no need to check others
				}
			} catch (error) {
				// Skip invalid features
				continue;
			}
		}
		
		// Update hover state if changed
		if (newHoveredFeature !== hoveredFeature) {
			updateHoverHighlight(newHoveredFeature);
			hoveredFeature = newHoveredFeature;
		}
	}
	
	// Function to test if a point is inside a polygon using ray casting algorithm
	function isPointInPolygon(point: any, feature: any): boolean {
		if (!feature.geometry || feature.geometry.type !== 'Polygon') {
			return false;
		}
		
		const coordinates = feature.geometry.coordinates[0]; // Outer ring
		const x = point.lng;
		const y = point.lat;
		
		let inside = false;
		for (let i = 0, j = coordinates.length - 1; i < coordinates.length; j = i++) {
			const xi = coordinates[i][0];
			const yi = coordinates[i][1];
			const xj = coordinates[j][0];
			const yj = coordinates[j][1];
			
			if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
				inside = !inside;
			}
		}
		
		return inside;
	}
	
	// Function to update hover highlight
	function updateHoverHighlight(feature: any) {
		if (!hucLayerGroup) return;
		
		// Reset all layers to normal state
		currentHucLayers.forEach(layer => {
			if (layer.feature && layer.feature !== hoveredFeature) {
				// Reset to normal style
				const isHighlighted = layer.isHighlighted;
				layer.setStyle({
					color: isHighlighted ? '#dc2626' : '#6b7280',
					fillColor: isHighlighted ? '#dc2626' : '#9ca3af',
					fillOpacity: isHighlighted ? 0.08 : 0.08,
					weight: isHighlighted ? 2.5 : 1.5,
					opacity: isHighlighted ? 0.7 : 0.6,
					dashArray: isHighlighted ? '5,5' : undefined
				});
			}
		});
		
		// Apply hover style to new feature
		if (feature) {
			const hoveredLayer = currentHucLayers.find(layer => layer.feature === feature);
			if (hoveredLayer) {
				const isHighlighted = hoveredLayer.isHighlighted;
				hoveredLayer.setStyle({
					color: isHighlighted ? '#dc2626' : '#6b7280',
					fillColor: isHighlighted ? '#dc2626' : '#9ca3af',
					fillOpacity: isHighlighted ? 0.25 : 0.20, // Much more opaque on hover
					weight: isHighlighted ? 3.5 : 2.5, // Much thicker border on hover
					opacity: isHighlighted ? 0.9 : 0.8,
					dashArray: isHighlighted ? '5,5' : undefined
				});
			}
		}
	}

	onMount(async () => {
		// Preload Leaflet resources in parallel for faster initialization
		const [leafletModule] = await Promise.all([
			import('leaflet'),
			import('leaflet/dist/leaflet.css')
		]);
		
		L = leafletModule;

		// Try to find Willamette Valley boundary service if not set
		const willametteZone = zones.find(z => z.name === 'Willamette Valley');
		if (willametteZone && !willametteZone.featureServiceUrl) {
			const willametteUrl = await findWillametteValleyBoundary();
			if (willametteUrl) {
				willametteZone.featureServiceUrl = willametteUrl;
			}
		}

		// Initialize the map with optimized settings for performance
		map = L.map(mapContainer, {
			preferCanvas: true, // Use Canvas for better performance with many features
			zoomControl: true,
			maxZoom: 18,
			minZoom: 5,
			zoomAnimation: true,
			fadeAnimation: true,
			markerZoomAnimation: true,
			// Optimize rendering performance
			renderer: L.canvas({ 
				padding: 0.2, // Add padding to reduce edge artifacts during pan
				tolerance: 5  // Increase tolerance for smoother interaction
			})
		}).setView([45.2, -121.8], mode === 'overview' ? 8 : 10);

		// Create layer group for map elements
		currentLayerGroup = L.layerGroup().addTo(map);

		// Apply initial map style (reactive statement will handle subsequent changes)
		applyMapStyle(mapStyle);

		if (mode === 'overview') {
			// Overview mode: show interactive zones
			await renderOverviewMode();
		} else if (mode === 'zone' && selectedZone) {
			// Zone mode: show detailed view of specific zone
			await renderZoneMode();
		}

		// Fix for default marker icons in webpack builds
		delete (L.Icon.Default.prototype as any)._getIconUrl;
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
			iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
		});
	});

	async function renderOverviewMode() {
		// Filter zones to only show those marked for overview mode (or all if not specified)
		const overviewZones = zones.filter(zone => zone.showInOverview !== false);
		
		for (const zone of overviewZones) {
			let zoneLayer: any;

			// Try to load boundary data from different sources (priority order)
			if (zone.polygonLayers && zone.polygonLayers.length > 0) {
				// Load multiple polygon layers with custom styles (highest priority)
				let primaryLayer: any = null;
				for (const polygonLayer of zone.polygonLayers) {
					const boundaryData = await loadStaticBoundary(polygonLayer.url);
					if (boundaryData && (boundaryData.features || boundaryData.type === 'FeatureCollection')) {
						const layer = L.geoJSON(boundaryData, {
							style: polygonLayer.style
						}).addTo(currentLayerGroup);
						
						// Use the first layer as primary for click/hover interactions
						if (!primaryLayer) {
							primaryLayer = layer;
						}
						
						console.log(`Successfully loaded ${zone.name} ${polygonLayer.name} from ${polygonLayer.url}`);
					}
				}
				zoneLayer = primaryLayer;
			} else if (zone.staticDataUrl) {
				// Load from static file (fallback)
				const boundaryData = await loadStaticBoundary(zone.staticDataUrl);
				if (boundaryData && (boundaryData.features || boundaryData.type === 'FeatureCollection')) {
					zoneLayer = L.geoJSON(boundaryData, {
						style: {
							color: zone.color,
							fillColor: zone.color,
							fillOpacity: 0.2,
							weight: 3,
							opacity: 0.8
						}
					}).addTo(currentLayerGroup);
					
					console.log(`Successfully loaded ${zone.name} boundary from static file`);
				}
			} else if (zone.featureServiceUrl) {
				// Load from ArcGIS service
				const boundaryData = await loadArcGISBoundary(zone.featureServiceUrl);
				if (boundaryData && boundaryData.features && boundaryData.features.length > 0) {
					zoneLayer = L.geoJSON(boundaryData, {
						style: {
							color: zone.color,
							fillColor: zone.color,
							fillOpacity: 0.2,
							weight: 3,
							opacity: 0.8
						}
					}).addTo(currentLayerGroup);
					
					console.log(`Successfully loaded ${zone.name} boundary from ArcGIS service`);
				}
			} else if (zone.dataBasinId) {
				// Load from Data Basin
				const boundaryData = await loadDataBasinBoundary(zone.dataBasinId);
				if (boundaryData && (boundaryData.features || boundaryData.type === 'FeatureCollection')) {
					zoneLayer = L.geoJSON(boundaryData, {
						style: {
							color: zone.color,
							fillColor: zone.color,
							fillOpacity: 0.2,
							weight: 3,
							opacity: 0.8
						}
					}).addTo(currentLayerGroup);
					
					console.log(`Successfully loaded ${zone.name} boundary from Data Basin`);
				}
			}
			
			// Fallback to rectangle if no boundary data available
			if (!zoneLayer) {
				console.log(`Using rectangle boundary for ${zone.name}`);
				zoneLayer = L.rectangle(zone.bounds, {
					color: zone.color,
					fillColor: zone.color,
					fillOpacity: 0.2,
					weight: 3,
					opacity: 0.8
				}).addTo(currentLayerGroup);
			}

			// Add zone label
			const zoneLabel = L.marker(zone.center, {
				icon: L.divIcon({
					className: 'zone-label',
					html: `<div class="bg-white px-3 py-2 rounded-lg shadow-lg border-2 border-solid cursor-pointer hover:scale-105 transition-transform" style="border-color: ${zone.color}; color: ${zone.color};">
						<div class="font-bold text-sm">${zone.name}</div>
					</div>`,
					iconSize: [120, 50],
					iconAnchor: [60, 25]
				})
			}).addTo(currentLayerGroup);

			// Make zone clickable
			const clickHandler = () => {
				window.location.href = zone.url;
			};

			zoneLayer.on('click', clickHandler);
			zoneLabel.on('click', clickHandler);

			// Add hover effects
			zoneLayer.on('mouseover', function(this: any) {
				this.setStyle({
					fillOpacity: 0.35,
					weight: 4
				});
			});

			zoneLayer.on('mouseout', function(this: any) {
				this.setStyle({
					fillOpacity: 0.2,
					weight: 3
				});
			});

			// Add individual waterfall markers within zone
			zone.waterfalls.forEach((waterfall) => {
				const marker = L.marker([waterfall.lat, waterfall.lng], {
					icon: L.divIcon({
						className: 'waterfall-marker',
						html: `<div class="w-3 h-3 rounded-full shadow-lg" style="background-color: ${zone.color};"></div>`,
						iconSize: [12, 12],
						iconAnchor: [6, 6]
					})
				}).addTo(currentLayerGroup);

				// Create popup with waterfall info
				const popupContent = `
					<div class="text-center min-w-48">
						<h3 class="font-bold text-lg mb-2" style="color: ${zone.color};">${waterfall.name}</h3>
						<p class="text-sm text-gray-600 mb-3">${zone.name}</p>
						<a href="${waterfall.url}" class="inline-block px-3 py-1 text-sm rounded-lg hover:opacity-90 transition-opacity" style="background-color: ${zone.color}; color: white !important;">
							Visit Waterfall →
						</a>
					</div>
				`;
				
				marker.bindPopup(popupContent);
			});
		}
	}

	async function renderZoneMode() {
		// Map zone names to match the URL patterns
		const zoneMap: Record<string, string> = {
			'willamette-valley': 'Willamette Valley',
			'columbia-river-gorge': 'Columbia River Gorge',
			'cascade-range': 'Cascade Range' // Use full Cascade Range for watersheds page
		};
		
		const zoneName = zoneMap[selectedZone || ''];
		const zone = zones.find(z => z.name === zoneName);
		if (!zone) return;

		console.log('renderZoneMode called for zone:', zone.name, 'selectedZone:', selectedZone);

		// Center map on the selected zone
		map.fitBounds(zone.bounds, { padding: [20, 20] });

		// Try to load and display official boundary from different sources (priority order)
		let boundaryLayer: any = null;
		
		if (zone.polygonLayers && zone.polygonLayers.length > 0) {
			// Load multiple polygon layers with custom styles for zone mode (highest priority)
			for (const polygonLayer of zone.polygonLayers) {
				const boundaryData = await loadStaticBoundary(polygonLayer.url);
				if (boundaryData && (boundaryData.features || boundaryData.type === 'FeatureCollection')) {
					// Create style for zone mode (lighter opacity, dashed for all layers)
					const zoneStyle = {
						...polygonLayer.style,
						fillOpacity: polygonLayer.style.fillOpacity * 0.5, // Reduce opacity for zone mode
						dashArray: '5, 5',
						weight: Math.max(1, polygonLayer.style.weight - 1) // Reduce weight slightly
					};
					
					const layer = L.geoJSON(boundaryData, { style: zoneStyle }).addTo(currentLayerGroup);
					
					// Use the first layer as primary for reference
					if (!boundaryLayer) {
						boundaryLayer = layer;
					}
					
					console.log(`Successfully loaded ${zone.name} ${polygonLayer.name} for zone view from ${polygonLayer.url}`);
				}
			}
		} else if (zone.staticDataUrl) {
			// Load from static file (fallback)
			const boundaryData = await loadStaticBoundary(zone.staticDataUrl);
			if (boundaryData && (boundaryData.features || boundaryData.type === 'FeatureCollection')) {
				boundaryLayer = L.geoJSON(boundaryData, {
					style: {
						color: zone.color,
						fillColor: zone.color,
						fillOpacity: 0.1,
						weight: 2,
						opacity: 0.6,
						dashArray: '5, 5'
					}
				}).addTo(currentLayerGroup);
				
				console.log(`Successfully loaded ${zone.name} boundary for zone view from static file`);
			}
		} else if (zone.featureServiceUrl) {
			// Load from ArcGIS service
			const boundaryData = await loadArcGISBoundary(zone.featureServiceUrl);
			if (boundaryData && boundaryData.features && boundaryData.features.length > 0) {
				boundaryLayer = L.geoJSON(boundaryData, {
					style: {
						color: zone.color,
						fillColor: zone.color,
						fillOpacity: 0.1,
						weight: 2,
						opacity: 0.6,
						dashArray: '5, 5'
					}
				}).addTo(currentLayerGroup);
				
				console.log(`Successfully loaded ${zone.name} boundary for zone view from ArcGIS`);
			}
		} else if (zone.dataBasinId) {
			// Load from Data Basin
			const boundaryData = await loadDataBasinBoundary(zone.dataBasinId);
			if (boundaryData && (boundaryData.features || boundaryData.type === 'FeatureCollection')) {
				boundaryLayer = L.geoJSON(boundaryData, {
					style: {
						color: zone.color,
						fillColor: zone.color,
						fillOpacity: 0.1,
						weight: 2,
						opacity: 0.6,
						dashArray: '5, 5'
					}
				}).addTo(currentLayerGroup);
				
				console.log(`Successfully loaded ${zone.name} boundary for zone view from Data Basin`);
			}
		}
		
		if (boundaryLayer) {
			// Fit bounds to the actual boundary
			map.fitBounds(boundaryLayer.getBounds(), { padding: [20, 20] });
		} else if (zone.name !== 'Cascade Range') {
			// Fallback to rectangle boundary (but not for Cascade Range)
			console.log(`Using rectangle boundary for ${zone.name} in zone view`);
			L.rectangle(zone.bounds, {
				color: zone.color,
				fillColor: zone.color,
				fillOpacity: 0.1,
				weight: 2,
				opacity: 0.6,
				dashArray: '5, 5'
			}).addTo(currentLayerGroup);
		}

		// Add detailed markers for waterfalls in this zone
		zone.waterfalls.forEach((waterfall) => {
			const marker = L.marker([waterfall.lat, waterfall.lng]).addTo(currentLayerGroup);
			
			// Create detailed popup
			const popupContent = `
				<div class="text-center min-w-48">
					<h3 class="font-bold text-lg mb-2" style="color: ${zone.color};">${waterfall.name}</h3>
					<p class="text-sm text-gray-600 mb-3">${zone.description}</p>
					<a href="${waterfall.url}" class="inline-block px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style="background-color: ${zone.color}; color: white !important;">
						Explore Waterfall →
					</a>
				</div>
			`;
			
			marker.bindPopup(popupContent);
		});

		// Cascade Range: dynamic HUC8 overlay based on current view and zoom
		if (zone.name === 'Cascade Range') {
			console.log('Setting up HUC8 for Cascade Range zone');
			if (!hucLayerGroup) {
				hucLayerGroup = L.layerGroup().addTo(map);
				console.log('Created hucLayerGroup');
			}
			console.log('Calling refreshHuc8Dynamic...');
			await refreshHuc12Dynamic(zone, true); // Force initial refresh
			
			// Add a small delay before setting up the move listeners to prevent initial load/unload
			setTimeout(() => {
				let lastMoveTime = 0;
				let lastUpdateTime = 0;
				let isMoving = false;
				let moveUpdateTimer: any = null;
				
				// Optimized real-time updates during navigation
				map.on('move', () => { 
					const now = Date.now();
					isMoving = true;
					
					// Clear existing timer to debounce rapid movements
					if (moveUpdateTimer) {
						clearTimeout(moveUpdateTimer);
					}
					
					// Longer throttle to reduce excessive calls during navigation
					if (now - lastUpdateTime > 500) {
						moveUpdateTimer = setTimeout(() => {
							console.log('Map moving, updating watersheds...');
							refreshHuc12Dynamic(zone, false);
							lastUpdateTime = Date.now();
						}, 150); // Debounced update
					}
				});
				
				// Final update when navigation stops
				map.on('moveend', () => { 
					const now = Date.now();
					isMoving = false;
					
					// Clear any pending move updates
					if (moveUpdateTimer) {
						clearTimeout(moveUpdateTimer);
						moveUpdateTimer = null;
					}
					
					// Always do a final update after movement ends, with slight delay
					setTimeout(() => {
						if (!isMoving) { // Double-check movement has stopped
							console.log('Map move ended, final update...');
							refreshHuc12Dynamic(zone, false);
							lastMoveTime = now;
						}
					}, 200);
				});
			}, 1000);
		}
		
		// Set up hover functionality for any zone that has HUC data
		if (zone.name === 'Cascade Range' && hucLayerGroup) {
			setTimeout(() => {
				// Optimized hover functionality with throttling
				let hoverUpdateTimer: any = null;
				map.on('mousemove', (e) => {
					// Throttle hover updates for better performance
					if (hoverUpdateTimer) return;
					
					hoverUpdateTimer = setTimeout(() => {
						checkHover(e.latlng);
						hoverUpdateTimer = null;
					}, 50); // 20fps max for hover updates
				});
				
				// Clear hover when leaving map
				map.on('mouseout', () => {
					if (hoverUpdateTimer) {
						clearTimeout(hoverUpdateTimer);
						hoverUpdateTimer = null;
					}
					updateHoverHighlight(null);
					hoveredFeature = null;
				});
			}, 1500); // Slightly longer delay to ensure HUC data is loaded
		}
	}

	onDestroy(() => {
		if (map) {
			map.remove();
		}
		// Clean up all state and caches
		hucLoaded = false;
		lastHucZoom = -1;
		cachedHucData = null;
		filteredHucData = null;
		currentHucLayers = [];
		lastMapBounds = null;
		baseLayers = [];
		isUpdating = false;
		pendingUpdate = false;
		hoveredFeature = null;
		lastHoverTime = 0;
		hoverLayerCache.clear();
		spatialIndex = null;
		if (hucRefreshTimer) {
			clearTimeout(hucRefreshTimer);
			hucRefreshTimer = null;
		}
	});
</script>

<div class="w-full h-full min-h-[500px] rounded-lg shadow-lg" bind:this={mapContainer}></div>

<style>
	:global(.zone-label) {
		background: none !important;
		border: none !important;
	}
	
	:global(.waterfall-marker) {
		background: none !important;
		border: none !important;
	}

	:global(.watershed-label) {
		background: none !important;
		border: none !important;
	}
	
	:global(.watershed-label-clean) {
		background: none !important;
		border: none !important;
		pointer-events: none;
	}
	
	:global(.watershed-label-text) {
		pointer-events: auto;
		cursor: default;
		background: none !important;
		border: none !important;
	}
	
	:global(.leaflet-popup-content-wrapper) {
		border-radius: 8px;
	}
	
	:global(.leaflet-popup-tip) {
		background: white;
	}
</style>
