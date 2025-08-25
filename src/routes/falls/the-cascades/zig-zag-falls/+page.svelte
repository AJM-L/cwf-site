<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';

	const description = 'Zig Zag Falls is a powerful waterfall along the Zigzag River on Mount Hood, located within the Mount Hood National Forest. This impressive cascade tumbles over rocky ledges through old-growth forest, offering a pristine wilderness waterfall experience in the heart of the Cascade Range.';
</script>

<svelte:head>
	<title>Zig Zag Falls - CWF</title>
	<meta name="description" content="." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
	<!-- Video Section -->
	<div class="relative w-full h-screen overflow-hidden">
		<iframe 
			src="https://player.vimeo.com/video/1112734708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1" 
			frameborder="0" 
			allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
			referrerpolicy="strict-origin-when-cross-origin" 
			class="absolute inset-0 w-full h-full object-cover"
			title="IMG_7105_1">
		</iframe>
		<script src="https://player.vimeo.com/api/player.js"></script>
		
		<!-- Title positioned to the side -->
		<div class="absolute inset-0 flex items-end justify-end pr-8 md:pr-16">
			<div class="text-right text-black max-w-md">
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">Zig Zag Falls</h1>
			</div>
		</div>
	</div>
	
	<!-- Additional Information Section -->
	<div class="max-w-5xl mx-auto px-4 py-8">
		<div class="grid lg:grid-cols-2 gap-8">
			<!-- About Section -->
			<div class="bg-white rounded-lg shadow-lg p-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">About Zig Zag Falls</h2>
				<p class="text-gray-600 leading-relaxed mb-4">
					Zig Zag Falls is located along the Zigzag River, which flows down the western slopes of Mount Hood. 
					The waterfall is nestled in pristine old-growth forest, creating a true wilderness experience for visitors 
					willing to venture off the beaten path.
				</p>
				<p class="text-gray-600 leading-relaxed mb-4">
					The falls are fed by snowmelt and springs from Mount Hood's glaciers, ensuring consistent flow throughout 
					most of the year. The name "Zigzag" comes from the winding nature of the river as it makes its way down 
					the mountainside through a series of switchbacks and turns.
				</p>
				<p class="text-gray-600 leading-relaxed">
					This area represents the volcanic landscape of the Cascade Range, where ancient lava flows created the 
					rocky foundations over which these waters now cascade.
				</p>
			</div>

			<!-- Visiting Information -->
			<div class="bg-white rounded-lg shadow-lg p-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">Visiting Information</h2>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Location:</span>
						<span class="text-gray-600">Mount Hood National Forest, Oregon</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">River:</span>
						<span class="text-gray-600">Zigzag River</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Elevation:</span>
						<span class="text-gray-600">Approximately 2,400 feet</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Access:</span>
						<span class="text-gray-600">Hiking trail required</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Difficulty:</span>
						<span class="text-gray-600">Moderate hike through forest</span>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">Trail Notes</h3>
				<p class="text-gray-600 text-sm leading-relaxed mb-4">
					Access to Zig Zag Falls requires hiking through Mount Hood National Forest. The trail passes through 
					beautiful old-growth forest with Douglas fir, Western hemlock, and Western red cedar. 
				</p>
			</div>
		</div>

		<!-- Mount Hood Context Section -->
		<div class="mt-8 bg-white rounded-lg shadow-lg p-8">
			<h2 class="text-2xl font-bold text-gray-800 mb-4">Mount Hood Watershed</h2>
			<p class="text-gray-600 leading-relaxed mb-4">
				Zig Zag Falls is part of the greater Mount Hood watershed system, where glacial meltwater and precipitation 
				combine to create numerous waterfall systems throughout the Cascade Range. The Zigzag River ultimately flows 
				into the Sandy River, which is a major tributary of the Columbia River.
			</p>
			<p class="text-gray-600 leading-relaxed">
				This watershed is crucial for regional water supply and supports diverse ecosystems including old-growth forests, 
				alpine meadows, and riparian habitats that provide refuge for numerous species of plants and wildlife native 
				to the Pacific Northwest.
			</p>
		</div>

		<!-- References Section -->
		<div class="mt-8 bg-gray-50 rounded-lg p-6">
			<h3 class="text-lg font-bold text-gray-800 mb-3">References</h3>
			<div class="text-sm text-gray-600 space-y-1">
				<p>• U.S. Forest Service. <a href="https://www.fs.usda.gov/recarea/mthood/recarea/?recid=53487" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Mount Hood National Forest"</a></p>
				<p>• Oregon Hikers Field Guide. <a href="https://www.oregonhikers.org/field_guide/Mount_Hood_National_Forest" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Mount Hood Hiking"</a></p>
				<p>• AllTrails. <a href="https://www.alltrails.com/trail/us/oregon/zigzag-falls" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Zig Zag Falls Trail"</a></p>
				<p>• Travel Oregon. <a href="https://traveloregon.com/places-to-go/regions/mt-hood-columbia-river-gorge/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Mount Hood Region"</a></p>
			</div>
		</div>
		
		<BackButton />
	</div>
</div>
