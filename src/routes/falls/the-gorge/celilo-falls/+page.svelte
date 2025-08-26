<script lang="ts">
	import ImageCarousel from '$lib/ImageCarousel.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';
	
	// Historic waterfall - no current images as it was submerged in 1957
	const description = 'Celilo Falls was once one of the most significant waterfalls and fishing sites in North America, located on the Columbia River. For thousands of years, it served as the economic and cultural center for Indigenous peoples of the Pacific Northwest. The falls were permanently submerged in 1957 by the construction of The Dalles Dam, marking the end of an era and the loss of a sacred site.';
</script>

<svelte:head>
	<title>Celilo Falls (Historic) - CWF</title>
	<meta name="description" content="Learn about Celilo Falls, the historic waterfall and sacred Indigenous fishing site on the Columbia River, submerged in 1957." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
	<!-- Header Section -->
	<div class="max-w-6xl mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Celilo Falls</h1>
			<p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
				{description}
			</p>
		</div>

		<!-- Historical Timeline -->
		<div class="mb-12 bg-white rounded-lg shadow-lg p-8">
			<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Timeline of Celilo Falls</h2>
			<div class="space-y-6">
				<div class="flex items-start border-l-4 border-blue-500 pl-6">
					<div class="flex-shrink-0 w-20 text-sm font-bold text-blue-600">Ancient Times</div>
					<div class="ml-4">
						<h3 class="font-bold text-gray-800">Indigenous Heritage Begins</h3>
						<p class="text-gray-600">Archaeological evidence shows use of the Celilo Falls area by Indigenous peoples for thousands of years, making it one of the most important fishing and trading sites in North America.</p>
					</div>
				</div>
				
				<div class="flex items-start border-l-4 border-green-500 pl-6">
					<div class="flex-shrink-0 w-20 text-sm font-bold text-green-600">1805</div>
					<div class="ml-4">
						<h3 class="font-bold text-gray-800">Lewis & Clark Expedition</h3>
						<p class="text-gray-600">The Lewis and Clark expedition encounters Celilo Falls and documents the extensive Indigenous fishing operations and trade networks centered around the falls.</p>
					</div>
				</div>

				<div class="flex items-start border-l-4 border-amber-500 pl-6">
					<div class="flex-shrink-0 w-20 text-sm font-bold text-amber-600">1855</div>
					<div class="ml-4">
						<h3 class="font-bold text-gray-800">Treaty Rights Established</h3>
						<p class="text-gray-600">Treaties with regional tribes explicitly guarantee "the right of taking fish at all usual and accustomed places," protecting Indigenous fishing rights at Celilo Falls.</p>
					</div>
				</div>

				<div class="flex items-start border-l-4 border-purple-500 pl-6">
					<div class="flex-shrink-0 w-20 text-sm font-bold text-purple-600">1938-1957</div>
					<div class="ml-4">
						<h3 class="font-bold text-gray-800">Dam Construction</h3>
						<p class="text-gray-600">The Dalles Dam is planned, constructed, and completed despite strong opposition.</p>
					</div>
				</div>

				<div class="flex items-start border-l-4 border-red-500 pl-6">
					<div class="flex-shrink-0 w-20 text-sm font-bold text-red-600">March 10, 1957</div>
					<div class="ml-4">
						<h3 class="font-bold text-gray-800">The Falls Disappear</h3>
						<p class="text-gray-600">Celilo Falls is permanently submerged as The Dalles Dam begins operation, ending 11,000+ years of continuous use by Indigenous peoples.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Historical Images Section -->
		<div class="mb-12 bg-white rounded-lg shadow-lg p-8">
			<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Historical Images of Celilo Falls</h2>
			<p class="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
				These rare photographs capture Celilo Falls as it existed before being submerged by The Dalles Dam in 1957. 
				They document the natural beauty of the falls and the Indigenous fishing practices that had been carried out 
				for thousands of years at this sacred site. These images are from the Oregon Historical Society Research Library, 
				and they are much older than the 1957 dam construction. There are more recent images elsewhere, but I could not access the rights to use them.
				I would suggest exploring the images at <a href="https://critfc.org/salmon-culture/tribal-salmon-culture/celilo-falls/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Critfc.org</a>
			</p>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Image 1: 1910 view -->
				<div class="bg-gray-50 rounded-lg overflow-hidden">
					<img 
						src={`${base}/images/waterfalls/optimized/celilo-falls/Celilo_Falls_1910_OrHi_66878.webp`}
						alt="Celilo Falls in 1910, showing the natural cascades and rapids of the Columbia River" 
						class="w-full h-64 object-cover"
					/>
					<div class="p-4">
						<h3 class="font-semibold text-gray-800 mb-2">Celilo Falls, 1910</h3>
						<p class="text-sm text-gray-600 mb-2">A view of the natural falls and cascades before dam construction.</p>
						<p class="text-xs text-gray-500 italic">Oreg. Hist. Soc. Research Lib.</p>
					</div>
				</div>

				<!-- Image 2: Fishing at Celilo -->
				<div class="bg-gray-50 rounded-lg overflow-hidden">
					<img 
						src={`${base}/images/waterfalls/optimized/celilo-falls/Celilo_Falls_fishing_at_OrHi_83885-1.webp`}
						alt="Indigenous fishing at Celilo Falls using traditional methods" 
						class="w-full h-64 object-cover"
					/>
					<div class="p-4">
						<h3 class="font-semibold text-gray-800 mb-2">Fishing Scene</h3>
						<p class="text-sm text-gray-600 mb-2">Indigenous fishers harvesting salmon.</p>
						<p class="text-xs text-gray-500 italic">Oreg. Hist. Soc. Research Lib.</p>
					</div>
				</div>

				<!-- Image 3: Fishing platforms -->
				<div class="bg-gray-50 rounded-lg overflow-hidden">
					<img 
						src={`${base}/images/waterfalls/optimized/celilo-falls/Celilo_Falls_fishing_at_OrHi_65994_v105_i2_p_198.webp`}
						alt="Fishing platforms and structures at Celilo Falls" 
						class="w-full h-64 object-cover"
					/>
					<div class="p-4">
						<h3 class="font-semibold text-gray-800 mb-2">Fishing Platforms</h3>
						<p class="text-sm text-gray-600 mb-2">Wooden fishing platforms built over the falls.</p>
						<p class="text-xs text-gray-500 italic">Oreg. Hist. Soc. Research Lib.</p>
					</div>
				</div>

				<!-- Image 4: Empty platforms -->
				<div class="bg-gray-50 rounded-lg overflow-hidden">
					<img 
						src={`${base}/images/waterfalls/optimized/celilo-falls/Celilo_Falls_empty_platforms_at_OrHi_65995__v105_i2_p_200.webp`}
						alt="Empty fishing platforms at Celilo Falls during low water" 
						class="w-full h-64 object-cover"
					/>
					<div class="p-4">
						<h3 class="font-semibold text-gray-800 mb-2">Empty Platforms</h3>
						<p class="text-sm text-gray-600 mb-2">Vacant fishing platforms.</p>
						<p class="text-xs text-gray-500 italic">Oreg. Hist. Soc. Research Lib.</p>
					</div>
				</div>

				<!-- Image 5: Fishing activity -->
				<div class="bg-gray-50 rounded-lg overflow-hidden">
					<img 
						src={`${base}/images/waterfalls/optimized/celilo-falls/Celilo_Falls_fishing_at_ba018763.webp`} 
						alt="Active fishing scene at Celilo Falls showing traditional fishing methods" 
						class="w-full h-64 object-cover"
					/>
					<div class="p-4">
						<h3 class="font-semibold text-gray-800 mb-2">Active Fishing Scene</h3>
						<p class="text-sm text-gray-600 mb-2">Indigenous fishers harvesting salmon.</p>
						<p class="text-xs text-gray-500 italic">Oreg. Hist. Soc. Research Lib.</p>
					</div>
				</div>

				<!-- Image 6: Falls view -->
				<div class="bg-gray-50 rounded-lg overflow-hidden">
					<img 
						src={`${base}/images/waterfalls/optimized/celilo-falls/OrHi_42687_Celilo_Falls_copy_4.webp`} 
						alt="Another view of Celilo Falls showing the natural cascades" 
						class="w-full h-64 object-cover"
					/>
					<div class="p-4">
						<h3 class="font-semibold text-gray-800 mb-2">The Falls</h3>
						<p class="text-sm text-gray-600 mb-2">Celilo Falls from the bank.</p>
						<p class="text-xs text-gray-500 italic">Oreg. Hist. Soc. Research Lib.</p>
					</div>
				</div>
			</div>

			<div class="mt-6 text-center">
				<p class="text-sm text-gray-500">
					All images courtesy of the Oregon Historical Society Research Library. 
					These photographs provide a glimpse into the natural beauty and cultural significance 
					of Celilo Falls before its submersion in 1957.
				</p>
			</div>
		</div>

		<!-- Information Sections -->
		<div class="grid lg:grid-cols-2 gap-8">
			<!-- Cultural Significance -->
			<div class="bg-white rounded-lg shadow-lg p-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">Cultural & Economic Significance</h2>
				<p class="text-gray-600 leading-relaxed mb-4">
					Celilo Falls was known by various names to different tribal groups, including "Wy-am" to some Columbia River tribes. 
					The falls created a natural barrier that concentrated salmon runs, making it one of the most productive 
					fishing sites in North America and a major trade center for Indigenous peoples.
				</p>
				<p class="text-gray-600 leading-relaxed mb-4">
					For thousands of years, the falls served as a major trading center where Indigenous peoples from 
					across the region would gather to fish, trade, and maintain cultural connections. During peak salmon 
					runs, thousands of people would camp at Celilo to harvest and process fish for winter sustenance.
				</p>
				<p class="text-gray-600 leading-relaxed">
					The site was also deeply spiritual, with numerous religious and cultural ceremonies taking place 
					at the falls. The loss of Celilo represents not just an environmental tragedy, but a profound 
					cultural and spiritual loss for Pacific Northwest tribes.
				</p>
			</div>

			<!-- The Waterfall Itself -->
			<div class="bg-white rounded-lg shadow-lg p-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">The Falls</h2>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Height:</span>
						<span class="text-gray-600">Approximately 20-40 feet (varied by season)</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Location:</span>
						<span class="text-gray-600">Columbia River, near present-day The Dalles, Oregon</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Type:</span>
						<span class="text-gray-600">Series of cascades and rapids</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Geology:</span>
						<span class="text-gray-600">Basalt formations creating natural fishing platforms</span>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">Natural Features</h3>
				<p class="text-gray-600 text-sm leading-relaxed mb-4">
					Celilo Falls consisted of multiple cascades and rapids created by basalt ledges that crossed the 
					Columbia River. The falls created natural platforms where Indigenous fishers could use dip nets, 
					spears, and fish wheels to harvest salmon during their seasonal runs.
				</p>
				<p class="text-gray-600 text-sm leading-relaxed">
					The water levels and appearance of the falls varied dramatically with the seasons, from thundering 
					torrents during spring floods to accessible fishing platforms during lower water periods.
				</p>
			</div>
		</div>

		<!-- Legacy Section -->
		<div class="mt-8 bg-white rounded-lg shadow-lg p-8">
			<h2 class="text-2xl font-bold text-gray-800 mb-4">Legacy and Remembrance</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-bold text-gray-800 mb-3">Ongoing Impact</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						The submersion of Celilo Falls represents one of the most significant losses in Pacific Northwest 
						history. It displaced entire communities, severed ancient cultural practices, and marked a bleak 
						moment in the relationship between Indigenous peoples and the U.S. government.
					</p>
					<p class="text-gray-600 leading-relaxed">
						Despite compensation payments to affected tribes, no amount of money could replace the cultural, 
						spiritual, and economic value of this sacred site that had sustained Indigenous communities for millennia.
					</p>
				</div>
				<div>
					<h3 class="text-lg font-bold text-gray-800 mb-3">Remembrance Today</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						Today, tribal members and allies work to keep the memory of Celilo Falls alive through oral histories, 
						cultural events, and advocacy for treaty rights. The Celilo Falls Memorial honors those who fished 
						at the falls and educates visitors about the loss and history.
					</p>
					<p class="text-gray-600 leading-relaxed">
						For more information about Celilo Falls and its cultural significance, visit the 
						<a href="https://critfc.org/salmon-culture/tribal-salmon-culture/celilo-falls/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Columbia River Inter-Tribal Fish Commission</a>.
					</p>
				</div>
			</div>
		</div>

		<!-- References Section -->
		<div class="mt-8 bg-gray-50 rounded-lg p-6">
			<h3 class="text-lg font-bold text-gray-800 mb-3">References</h3>
			<div class="text-sm text-gray-600 space-y-1">
				<p>• Wikipedia. <a href="https://en.wikipedia.org/wiki/Celilo_Falls" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Celilo Falls"</a></p>
				<p>• Oregon Historical Society. <a href="https://www.oregonhistory.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Oregon History"</a></p>
				<p>• Columbia River Inter-Tribal Fish Commission. <a href="https://www.critfc.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"CRITFC"</a></p>
				<p>• National Park Service. <a href="https://www.nps.gov/subjects/travelcolumbiariver/celilo-falls.htm" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Celilo Falls - Columbia River"</a></p>
			</div>
		</div>
		<div class="mt-8">
			<BackButton />
		</div>
		
	</div>
</div>
