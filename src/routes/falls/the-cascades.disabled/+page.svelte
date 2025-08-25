<script lang="ts">
	// import WaterfallMap from '$lib/WaterfallMap.svelte';
	import { base } from '$app/paths';

	const waterfalls = [
		{ name: 'Ramona Falls', url: `${base}/falls/the-cascades/ramona-falls`, description: 'A delicate cascade over columnar basalt on Mount Hood' },
		{ name: 'Zigzag Falls', url: `${base}/falls/the-cascades/zig-zag-falls`, description: 'A powerful waterfall along the Zigzag River on Mount Hood' }
	];

	// Map style state
	let mapStyle: 'satellite' | 'rivers' | 'topographic' | 'terrain' | 'hybrid' = 'topographic';
</script>

<svelte:head>
	<title>Cascade Range - CWF</title>
	<meta name="description" content="Cascade Range - CWF" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8">
	
	<!-- Introduction Section -->
	<section class="text-center mb-12">
		<h1 class="text-4xl font-bold text-black mb-6">Cascade Range</h1>
		<div class="max-w-4xl mx-auto">
			<p class="text-lg text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto">
				The Cascade Range, Oregon's volcanic backbone, hosts waterfalls born from snowmelt and mountain springs. These falls cascade through alpine forests and over ancient lava flows, offering some of the most pristine and wilderness-oriented waterfall experiences in the state.
		</p>
	</div>
	</section>

	<!-- (Map moved to Hydrology section) -->

	<!-- Quick Navigation & Key Facts -->
	<section class="mb-12">
		<div class="bg-white p-4 md:p-6">
			<h2 class="text-xl font-semibold text-black mb-4 text-center">On this page</h2>
			<nav class="flex flex-wrap justify-center gap-2">
				<a href="#overview" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Overview</a>
				<a href="#mount-hood" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Mount Hood</a>
				<a href="#climate" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Climate</a>
				<a href="#wildlife" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Wildlife</a>
				<a href="#hydrology" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Hydrology</a>
				<a href="#landforms" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Landforms</a>
				<a href="#toponymy" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Toponymy</a>
				<a href="#concerns" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">Concerns</a>
				<a href="#references" class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800">References</a>
			</nav>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
				<div class="p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg">
					<p class="text-xs uppercase tracking-wide text-blue-700">Arc length</p>
					<p class="text-2xl font-bold text-blue-900">≈1,300 km</p>
					<p class="text-xs text-gray-600">From British Columbia to Northern California</p>
				</div>
				<div class="p-4 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-lg">
					<p class="text-xs uppercase tracking-wide text-green-700">Mount Hood ice & snow</p>
					<p class="text-2xl font-bold text-green-900">≈13.5 km²</p>
					<p class="text-xs text-gray-600">Perennial cover on Oregon’s highest peak</p>
				</div>
				<div class="p-4 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-lg">
					<p class="text-xs uppercase tracking-wide text-amber-700">Glaciers</p>
					<p class="text-2xl font-bold text-amber-900">300+ (North Cascades)</p>
					<p class="text-xs text-gray-600">Critical seasonal water storage</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Topographic Hero Map -->
	<section class="mb-12">
		<div class="relative overflow-hidden">
			<button 
				type="button"
				class="w-full border-0 p-0 bg-transparent cursor-zoom-in"
				style="max-height: 900px;"
				on:click={(e) => e.currentTarget.parentElement?.classList.toggle('fullscreen')}
			>
				<img 
					src={`${base}/images/cascades/Cascade_Range_major_volcanoes_topographic_map-fr.svg`}
					alt="Topographic map of major Cascade Range volcanoes"
					class="w-full object-cover"
					style="max-height: 500px;"
				/>
			</button>
		</div>
		<p class="text-xs text-gray-600 mt-2 text-right">
			Credit: By Bourrichon (NASA Shuttle Radar Topography Mission)
			<a class="underline" href="https://commons.wikimedia.org/w/index.php?curid=10085152" target="_blank" rel="noopener"> https://commons.wikimedia.org/w/index.php?curid=10085152</a>
		</p>
	</section>

	<!-- Geologic and Geographic Overview -->
	<section class="mb-12" id="overview">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Geologic and Geographic Overview</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					The Cascade Range extends roughly 1,300 km (800 miles) from northern California to southern British Columbia. Its skyline is defined by the Cascade Volcanic Arc—a chain of active and dormant volcanoes produced by subduction of the Juan de Fuca, Gorda, and Explorer plates beneath North America. While the range includes uplifted and glaciated terrain beyond the young volcanic axis, the arc comprises major centers from Mount Baker and Glacier Peak in Washington through Mount Hood and Crater Lake (Mount Mazama) in Oregon to Mount Shasta, Medicine Lake, and Lassen Peak in California.
				</p>
				<p class="text-gray-800 leading-relaxed">
					Most Cascade stratovolcanoes erupt andesite–dacite magmas and commonly experience dome growth and collapses that can generate pyroclastic flows and lahars. Pleistocene–Holocene glaciation carved cirques and U-shaped valleys along the crest, producing today’s alpine landforms. The late-Holocene caldera-forming eruption of Mount Mazama (~7.7 ka) created Crater Lake, while shield-style edifices such as Medicine Lake Volcano illustrate compositional and eruptive diversity within the arc.
				</p>
			</div>
		</div>
	</section>

	<!-- Mount Hood: Setting and Hazards -->
	<section class="mb-12" id="mount-hood">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Mount Hood: Setting and Hazards</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					Mount Hood (Oregon’s highest peak) is a glacier-clad stratovolcano ~80 km east of Portland. Volcanism at Hood spans ~500,000 years, with two prominent late-Holocene eruptive episodes—the Timberline (~1.5 ka) and Old Maid (late 18th–early 19th century)—dominated by lava-dome growth and collapse, generating pyroclastic flows and lahars, especially into the Sandy and White River valleys.
				</p>
				<p class="text-gray-800 leading-relaxed">
					Regionally, Hood sits within the High Cascades volcanic belt. Older Western Cascades rocks and Columbia River Basalt underlie much of the surrounding terrain, while High Cascades volcanism built Hood’s modern andesite–dacite cone and its volcaniclastic aprons. Lahars and debris flows have repeatedly reworked these deposits, shaping valley floors and flood hazards.
				</p>
				<p class="text-gray-800 leading-relaxed">
					The peak’s perennial ice and snow mantle (about 13.5 km²) includes glaciers such as Eliot and Coe (each ~2.5–3 km long); however, recent studies document rapid 21st-century glacial retreat. Summer meltwater sustains downstream flows critical to agriculture (e.g., Hood River Valley) and fish habitat.
				</p>
			</div>
		</div>
	</section>

	<!-- Climate and Ecoregions -->
	<section class="mb-12" id="climate">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Climate and Ecoregions</h2>
			<div class="max-w-5xl mx-auto">
				<p class="text-lg text-gray-800 leading-relaxed">
					Orographic uplift wrings Pacific moisture from westerly storms, creating a sharp west–east gradient: cool, wet conditions on windward flanks transition to a drier rain shadow east of the crest. Across elevations and aspects, the Mount Hood area spans EPA Level III Cascades ecoregions—from low-montane conifer forests through upper-montane belts into subalpine parklands and alpine barrens.
				</p>
			</div>
		</div>
	</section>

	<!-- Native Wildlife -->
	<section class="mb-12" id="wildlife">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Native Wildlife</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					Late-successional and old-growth forests support the <strong>northern spotted owl</strong> (<em>Strix occidentalis caurina</em>, threatened), which typically uses structurally complex stands with multilayered canopies, large trees/snags, and abundant coarse woody debris. The broader forested landscape supports Roosevelt elk, black-tailed deer, black bear, cougar, American marten, and diverse amphibian and bird assemblages.
				</p>
				<p class="text-gray-800 leading-relaxed">
					Cold, clean tributaries support salmonids (e.g., Chinook, coho, steelhead) alongside Pacific lamprey and native trout.
				</p>
			</div>
		</div>
	</section>

	<!-- Hydrology -->
	<section class="mb-12" id="hydrology">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Hydrology & Watersheds</h2>
			<div class="max-w-5xl mx-auto">
				<div class="grid md:grid-cols-2 gap-8 items-center">
					<div>
						<p class="text-lg text-gray-800 leading-relaxed mb-6">
							Radial drainage from Mount Hood feeds major Columbia tributaries: the <strong>Sandy River</strong> (NW), <strong>Hood River</strong> (N), <strong>Clackamas River</strong> (SW), and the <strong>White River</strong> (SE). The White River is a designated component of the National Wild and Scenic Rivers System for nearly its entire length. Summer baseflows are dominated by snowpack and glacier melt; in basins such as the Hood River, late-season flows rely on Mount Hood’s glacial inputs.
						</p>
					</div>
					<div class="flex flex-col items-center">
						<img src={`${base}/images/cascades/WhiteRiverFallsOR.jpg`} alt="White River Falls, Oregon" class="max-w-full h-auto rounded-lg">
						<p class="text-xs text-gray-600 mt-2 text-center">Credit: By Cacophony, <a class="underline" href="https://commons.wikimedia.org/w/index.php?curid=2155637" target="_blank" rel="noopener">https://commons.wikimedia.org/w/index.php?curid=2155637</a></p>
					</div>
				</div>

				<div class="bg-white p-6 mt-8">
					<h3 class="text-xl font-semibold text-black mb-4 text-center">Cascade Range Watersheds</h3>
					<p class="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
						Interactive map of the <strong>Cascade Range</strong> watersheds. Labels indicate watershed names. Try different map styles to emphasize topography and rivers.
					</p>
					
					<!-- Map Style Controls -->
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						<button 
							class="px-3 py-1.5 text-sm rounded-lg border-2 transition-colors duration-200"
							class:bg-blue-600={mapStyle === 'satellite'}
							class:text-white={mapStyle === 'satellite'}
							class:border-blue-600={mapStyle === 'satellite'}
							class:hover:bg-blue-700={mapStyle === 'satellite'}
							class:bg-white={mapStyle !== 'satellite'}
							class:text-gray-700={mapStyle !== 'satellite'}
							class:border-gray-300={mapStyle !== 'satellite'}
							class:hover:border-blue-500={mapStyle !== 'satellite'}
							on:click={() => mapStyle = 'satellite'}
						>
							Satellite
						</button>
						<button 
							class="px-3 py-1.5 text-sm rounded-lg border-2 transition-colors duration-200"
							class:bg-blue-600={mapStyle === 'rivers'}
							class:text-white={mapStyle === 'rivers'}
							class:border-blue-600={mapStyle === 'rivers'}
							class:hover:bg-blue-700={mapStyle === 'rivers'}
							class:bg-white={mapStyle !== 'rivers'}
							class:text-gray-700={mapStyle !== 'rivers'}
							class:border-gray-300={mapStyle !== 'rivers'}
							class:hover:border-blue-500={mapStyle !== 'rivers'}
							on:click={() => mapStyle = 'rivers'}
						>
							Rivers
						</button>
						<button 
							class="px-3 py-1.5 text-sm rounded-lg border-2 transition-colors duration-200"
							class:bg-blue-600={mapStyle === 'topographic'}
							class:text-white={mapStyle === 'topographic'}
							class:border-blue-600={mapStyle === 'topographic'}
							class:hover:bg-blue-700={mapStyle === 'topographic'}
							class:bg-white={mapStyle !== 'topographic'}
							class:text-gray-700={mapStyle !== 'topographic'}
							class:border-gray-300={mapStyle !== 'topographic'}
							class:hover:border-blue-500={mapStyle !== 'topographic'}
							on:click={() => mapStyle = 'topographic'}
						>
							Topographic
						</button>
						<button 
							class="px-3 py-1.5 text-sm rounded-lg border-2 transition-colors duration-200"
							class:bg-blue-600={mapStyle === 'terrain'}
							class:text-white={mapStyle === 'terrain'}
							class:border-blue-600={mapStyle === 'terrain'}
							class:hover:bg-blue-700={mapStyle === 'terrain'}
							class:bg-white={mapStyle !== 'terrain'}
							class:text-gray-700={mapStyle !== 'terrain'}
							class:border-gray-300={mapStyle !== 'terrain'}
							class:hover:border-blue-500={mapStyle !== 'terrain'}
							on:click={() => mapStyle = 'terrain'}
						>
							Terrain
						</button>
						<button 
							class="px-3 py-1.5 text-sm rounded-lg border-2 transition-colors duration-200"
							class:bg-blue-600={mapStyle === 'hybrid'}
							class:text-white={mapStyle === 'hybrid'}
							class:border-blue-600={mapStyle === 'hybrid'}
							class:hover:bg-blue-700={mapStyle === 'hybrid'}
							class:bg-white={mapStyle !== 'hybrid'}
							class:text-gray-700={mapStyle !== 'hybrid'}
							class:border-gray-300={mapStyle !== 'hybrid'}
							class:hover:border-blue-500={mapStyle !== 'hybrid'}
							on:click={() => mapStyle = 'hybrid'}
						>
							Hybrid
						</button>
					</div>
					
					<div class="h-96 md:h-[500px] w-full bg-gray-200 flex items-center justify-center">
						<!-- <WaterfallMap mode="zone" selectedZone="cascade-range" {mapStyle} /> -->
						<p class="text-gray-600">Map temporarily disabled for testing</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Major Landforms and Features -->
	<section class="mb-12" id="landforms">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Major Landforms and Features</h2>
			<div class="max-w-5xl mx-auto">
				<ul class="list-disc list-inside space-y-2 text-gray-800">
					<li><strong>Glaciers & snowfields:</strong> Eliot, Coe, Ladd, Sandy, Reid, Zigzag, Palmer (snowfield), White River, Newton Clark, Langille, Glisan, Coalman, among others, with active proglacial streams and evolving depositional plains.</li>
					<li><strong>Volcanic edifices & deposits:</strong> Crater Rock (Old Maid dome remnant), steep headwalls (Steel Cliff), lahar and debris-avalanche surfaces along Sandy and White rivers, and lava-dominated ridges such as Langille Crags.</li>
					<li><strong>Protected areas:</strong> Mount Hood National Forest (including Mount Hood, Badger Creek, Salmon-Huckleberry, Mark O. Hatfield, and Roaring River wilderness areas) and the adjacent Columbia River Gorge National Scenic Area.</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Toponymy and Naming Politics -->
	<section class="mb-12" id="toponymy">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Toponymy and Naming Politics</h2>
			<div class="max-w-4xl mx-auto">
				<p class="text-gray-800 leading-relaxed">
					The Indigenous label <em>Wy’east</em> is widely popular in contemporary culture but is <strong>poorly attested</strong> in documented Native languages. Scholars trace its modern spread to late-19th/early-20th-century literature and performance associated with Frederic Homer Balch’s <em>The Bridge of the Gods</em>, rather than to verifiable pre-contact usage.
				</p>
				<p class="text-gray-800 leading-relaxed mt-4">
					At the federal level, the politics of place-naming remain active. On January 20, 2025, the President issued Executive Order 14172—“Restoring Names That Honor American Greatness,” directing the Secretary of the Interior to reinstate “Mount McKinley” for the nation’s highest summit while retaining Denali National Park and Preserve for the surrounding unit. The action underscores how official names shape public memory and the interpretive frame through which landscapes are understood.
				</p>
			</div>
		</div>
	</section>

	<!-- Ongoing Environmental Concerns -->
	<section class="mb-12" id="concerns">
		<div class="text-center mb-8">
			<h2 class="text-2xl font-bold mb-4 text-black">Ongoing Environmental Concerns</h2>
			<div class="w-24 h-px mx-auto mb-6 bg-gray-400"></div>
			<p class="text-lg text-gray-800 max-w-3xl mx-auto">
				The Cascade region faces mounting environmental challenges linked to climate change, land use pressures, and biodiversity loss, including rapid glacier retreat, shifting snowpack timing, increased wildfire severity, and habitat fragmentation by roads, dams, and urban expansion.
			</p>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
			<div class="bg-white p-6 text-left">
				<h3 class="font-semibold text-black mb-2">Ice & Water</h3>
				<ul class="list-disc list-inside text-sm text-gray-800 space-y-1">
					<li>Rapid glacier and snowfield retreat</li>
					<li>Earlier melt shifts summer baseflows</li>
					<li>Thermal stress on cold-water fisheries</li>
				</ul>
			</div>
			<div class="bg-white p-6 text-left">
				<h3 class="font-semibold text-black mb-2">Forests & Fire</h3>
				<ul class="list-disc list-inside text-sm text-gray-800 space-y-1">
					<li>Lengthening fire seasons and severity</li>
					<li>Post-fire erosion and debris flows</li>
					<li>Pressure on late-successional habitats</li>
				</ul>
			</div>
			<div class="bg-white p-6 text-left">
				<h3 class="font-semibold text-black mb-2">Habitats & Species</h3>
				<ul class="list-disc list-inside text-sm text-gray-800 space-y-1">
					<li>Fragmentation from roads and development</li>
					<li>Invasive species displacing natives</li>
					<li>Connectivity and migration constraints</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- References -->
	<section class="mb-12" id="references">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">References</h2>
			<div class="max-w-4xl mx-auto text-sm text-gray-800 space-y-2">
				<p>
					Bakken-French, N., Boyer, S. J., Southworth, B. C., Thayne, M., Rood, D. H., & Carlson, A. E. (2024). Unprecedented 21st century glacier loss on Mt. Hood, Oregon, USA. The Cryosphere, 18(9), 4517–4530. <a class="text-blue-700 underline" href="https://doi.org/10.5194/tc-18-4517-2024" target="_blank" rel="noopener">DOI</a>
				</p>
				<p>
					Brand, B. D., Gardner, C. A., & Scott, W. E. (2017). Field-trip guide to Mount Hood, Oregon, highlighting eruptive history and hazards (USGS SIR 2017–5022–G). <a class="text-blue-700 underline" href="https://doi.org/10.3133/sir20175022g" target="_blank" rel="noopener">USGS</a>
				</p>
				<p>
					Crandell, D. R. (1980). Recent eruptive history of Mount Hood, Oregon, and potential hazards from future eruptions (USGS Professional Paper 1492). <a class="text-blue-700 underline" href="https://pubs.usgs.gov/bul/1492/report.pdf" target="_blank" rel="noopener">PDF</a>
				</p>
				<p>
					EPA (2025). Ecoregion download files by state—Region 10. <a class="text-blue-700 underline" href="https://www.epa.gov/eco-research/ecoregion-download-files-state-region-10" target="_blank" rel="noopener">Link</a>
				</p>
				<p>
					Gardner, C. A., Scott, W. E., Major, J. J., & Pierson, T. C. (2000). Mount Hood—History and hazards of Oregon’s most recently active volcano (USGS Fact Sheet 060-00). <a class="text-blue-700 underline" href="https://doi.org/10.3133/fs06000" target="_blank" rel="noopener">USGS</a>
				</p>
				<p>
					Halofsky, J. E., Peterson, D. L., & Gravenmier, R. A. (Eds.). (2022). Climate change vulnerability and adaptation in the CRGNSA, Mount Hood NF, and Willamette NF (PNW-GTR-1001). <a class="text-blue-700 underline" href="https://doi.org/10.2737/PNW-GTR-1001" target="_blank" rel="noopener">USDA Forest Service</a>
				</p>
				<p>
					USGS (2023). Glaciers at Mount Hood; Eruption history; Geology and history summary; Hazards summary. <a class="text-blue-700 underline" href="https://www.usgs.gov/volcanoes/mount-hood" target="_blank" rel="noopener">USGS Mount Hood</a>
				</p>
				<p>
					USFWS (2011, 2024). Northern Spotted Owl recovery and species info. <a class="text-blue-700 underline" href="https://www.fws.gov/species/northern-spotted-owl-strix-occidentalis-caurina" target="_blank" rel="noopener">USFWS</a>
				</p>
				<p>
					Rivers.gov (n.d.). White River (Oregon). <a class="text-blue-700 underline" href="https://rivers.gov/river/white" target="_blank" rel="noopener">Link</a>
				</p>
				<p>
					Washington State Historical Society (n.d.). Frederic Homer Balch: The pioneer novelist. <a class="text-blue-700 underline" href="https://www.washingtonhistory.org/wp-content/uploads/2020/04/frederic-homer-balch.pdf" target="_blank" rel="noopener">PDF</a>
		</p>
	</div>
		</div>
	</section>

	<!-- Waterfall Directory -->
	<div class="p-4 lg:p-6">
		<h2 class="text-2xl font-bold text-black mb-6 text-center">Waterfalls in the Cascade Range</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
			{#each waterfalls as waterfall}
				<a 
					href={waterfall.url}
					class="block p-6 hover:bg-gray-100 transition-colors duration-200"
				>
					<h3 class="font-semibold text-lg text-black hover:text-gray-600 mb-2">{waterfall.name}</h3>
					<p class="text-gray-700 text-sm">{waterfall.description}</p>
				</a>
			{/each}
		</div>
	</div>

	<!-- Navigation -->
	<div class="mt-8 text-center">
		<a 
			href={`${base}/falls`}
			class="inline-flex items-center px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200"
		>
			← Back to All Waterfalls
		</a>
	</div>
</div>
