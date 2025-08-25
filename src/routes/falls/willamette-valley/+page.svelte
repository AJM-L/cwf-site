<script lang="ts">
	import WaterfallMap from '$lib/WaterfallMap.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';

	const waterfalls = [
		{ name: 'Willamette Falls', url: `${base}/falls/willamette-valley/willamette-falls`, description: 'One of the largest waterfalls in the Pacific Northwest by volume' },
		{ name: 'Silver Falls State Park', url: `${base}/falls/willamette-valley/silver-falls`, description: 'Trail of Ten Falls featuring spectacular behind-the-falls experiences' }
	];
</script>

<svelte:head>
	<title>Willamette Valley Waterfalls - CWF</title>
	<meta name="description" content="Explore waterfalls in Oregon's Willamette Valley, the state's largest river valley and most densely populated ecoregion, spanning 150 miles between the Coast and Cascade Ranges" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8">
	<!-- Introduction Section -->
	<section class="text-center mb-12">
		<h1 class="text-4xl font-bold text-black mb-6">Willamette Valley Waterfalls</h1>
		<div class="max-w-4xl mx-auto">
			<p class="text-lg text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto">
				The Willamette Valley is Oregon's largest river valley and most densely populated ecoregion (Oregon Department of Fish and Wildlife, 2025). Bounded by the Coast Range to the west, the Cascade Range to the east, the Columbia River to the north, and the Calapooya Mountains/Divide to the south, it spans roughly 150 miles (240 km) in length and approximately 5,360 square miles (13,882 km²) when defined as the Oregon Conservation Strategy ecoregion (Oregon Department of Fish and Wildlife, 2025).
		</p>
	</div>
	</section>

	<!-- Satellite Map Section -->
	<section class="mb-12">
		<div class="bg-white rounded-lg shadow-lg p-6">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Willamette Valley Satellite Map</h2>
			<p class="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
				Discover the Willamette Valley from above. This aerial view shows Oregon's fertile agricultural heartland, where powerful waterfalls cut through rolling hills and ancient lava flows, creating spectacular cascades amid farmland and forests.
			</p>
			<div class="h-96 md:h-[500px] w-full">
				<WaterfallMap mode="zone" selectedZone="willamette-valley" />
			</div>
		</div>
	</section>

	<!-- Geologic Setting & History -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Geologic Setting & History</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					The valley lies between two mountain ranges: the Coast Range to the west and the Cascade Range to the east. The Coast Range formed from tectonic plates colliding, while the Cascades form a volcanic arc. The valley floor is made up of different layers of soil and rock: some from ancient oceans, some from land, and some from volcanic activity. The newer, top layer of soil (called alluvium) creates today's floodplain (Glenn, 1965). In the Portland area and northern valley, the layers of rock and soil are even more complex because of the mix of ancient lava flows from the Columbia River and newer deposits of material (Glenn, 1965).
				</p>
				<p class="text-gray-800 leading-relaxed">
					Between ~15,000 and 12,700 years ago, repeated Missoula Floods surged down the Columbia River and back-flooded nearly 200 km up the Willamette Valley, forming temporary Lake Allison (Waitt, 1985). These events laid widespread silts and sands ("Willamette Silt") that help explain the valley's fertile soils today (Waitt, 1985).
				</p>
			</div>
		</div>
	</section>

	<!-- Hydrology -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Hydrology</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					The Willamette River flows the length of the valley, joined by major tributaries including the Coast and Middle Forks, McKenzie, Santiam, Molalla, Tualatin, Yamhill, Long Tom, Luckiamute, and Clackamas Rivers (O'Connor et al., 2013).
				</p>
				<p class="text-gray-800 leading-relaxed">
					The U.S. Army Corps of Engineers operates 13 multipurpose dams and reservoirs within the Willamette Valley System (U.S. Army Corps of Engineers, 2023). These facilities provide flood-risk management, hydropower, water quality, irrigation, navigation, recreation, and fish and wildlife support (U.S. Army Corps of Engineers, 2023).
				</p>
				<p class="text-gray-800 leading-relaxed">
					Over the last 150 years, bank protection and flow regulation have simplified formerly braided reaches and disconnected large areas of floodplain and off-channel habitats (O'Connor et al., 2013). Current restoration emphasizes side channels, alcoves, and riparian forest recovery (O'Connor et al., 2013).
				</p>
			</div>
		</div>
	</section>

	<!-- Climate -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Climate</h2>
			<div class="max-w-5xl mx-auto">
				<p class="text-lg text-gray-800 leading-relaxed">
					The Willamette Valley has a warm-summer Mediterranean (Csb) climate: cool-wet late fall through spring and dry, warm summers, with precipitation increasing toward both mountain fronts (NOAA National Centers for Environmental Information, 2021).
				</p>
			</div>
		</div>
	</section>

	<!-- Ecology & Key Habitats -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Ecology & Key Habitats</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					Historically, much of the valley floor supported a mosaic of wet and upland prairies, oak savanna and woodland (<em>Quercus garryana</em>), riparian forests, and extensive wetlands maintained by frequent Indigenous burning (Oregon Department of Fish and Wildlife, 2025). Conversion to agriculture and urban uses, fire suppression, and floodplain modification have sharply reduced these habitats (Oregon Department of Fish and Wildlife, 2025). Today, less than 1–2% of native prairies and less than 5–10% of oak habitats remain, mostly in small, fragmented patches (Vesely & Rosenberg, 2010).
				</p>
				<p class="text-gray-800 leading-relaxed">
					Representative prairie–oak specialists include Kincaid's lupine (<em>Lupinus oreganus</em> var. <em>kincaidii</em>) and Fender's blue butterfly (<em>Icaricia icarioides fenderi</em>) (Vesely & Rosenberg, 2010). Large-river floodplains support Oregon ash, black cottonwood, willow, and gallery forests crucial for birds, amphibians, and salmonids (Oregon Department of Fish and Wildlife, 2025). Notably, the Oregon chub (<em>Oregonichthys crameri</em>) became the first fish ever delisted from the U.S. Endangered Species Act (2015) after successful habitat recovery (U.S. Fish & Wildlife Service, 2015).
				</p>
			</div>
		</div>
	</section>

	<!-- Human History & Toponymy -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Human History & Toponymy</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					The Willamette Valley is the homeland of the Kalapuyan peoples, along with neighboring Clackamas Chinookan and Molalla groups (Oregon Encyclopedia, 2021). Kalapuyans used cultural burning to sustain prairies, camas meadows, and oak groves (Oregon Encyclopedia, 2021). Mid-19th century treaties—especially the Kalapuya Treaty of 1855—ceded vast territories, with descendants today primarily in the Confederated Tribes of Grand Ronde and the Confederated Tribes of Siletz Indians (Mackey, 2010).
				</p>
				<p class="text-gray-800 leading-relaxed">
					The name <em>Willamette</em> likely derives from a Clackamas Chinookan place-name (McArthur, 2003). Contemporary local usage pronounces it "wi-LAM-it" (McArthur, 2003).
				</p>
			</div>
		</div>
	</section>

	<!-- Land Use & Economy -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Land Use & Economy</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					Thanks to deep alluvium and flood silts, the valley is among the Pacific Northwest's most productive farm regions (Robbins, 2021). Major crops include nursery and greenhouse products, grass seed, wine grapes, Christmas trees, berries, vegetables, hazelnuts, and hops (Oregon Department of Fish and Wildlife, 2025).
				</p>
				<p class="text-gray-800 leading-relaxed">
					The Willamette Valley American Viticultural Area (AVA), at 5,360 square miles, is the largest AVA in Oregon, with multiple nested AVAs, and is globally recognized for cool-climate grape varieties, especially Pinot noir, shaped by marine sediments, volcanic soils, and Missoula-flood silts (Oregon Wine Board, 2023).
				</p>
				<p class="text-gray-800 leading-relaxed">
					The valley also contains nine of Oregon's ten largest cities, including Portland, Salem, and Eugene, placing pressure on ecosystems through land conversion and urban growth (Oregon Department of Fish and Wildlife, 2025).
				</p>
			</div>
		</div>
	</section>

	<!-- Conservation & Management -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Conservation & Management</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<p class="text-gray-800 leading-relaxed">
					The Oregon Conservation Strategy identifies key challenges: land-use change, disrupted disturbance regimes (fire and floodplain function), invasive species, and fragmentation (Oregon Department of Fish and Wildlife, 2025). Collaborative work with private landowners is crucial, since ~96% of the ecoregion is privately owned (Oregon Department of Fish and Wildlife, 2025).
				</p>
				<p class="text-gray-800 leading-relaxed">
					Key protected areas include the Willamette Valley National Wildlife Refuge Complex—William L. Finley, Ankeny, and Baskett Slough National Wildlife Refuges—which safeguard some of the largest remaining wet prairie and oak savanna tracts (U.S. Fish & Wildlife Service, 2023). Ongoing USACE programs also aim to balance fish passage, flow management, and flood safety (U.S. Army Corps of Engineers, 2023).
		</p>
	</div>
		</div>
	</section>

	<!-- References -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">References</h2>
			<div class="max-w-4xl mx-auto text-sm text-gray-800 space-y-2">
				<p>Glenn, J. L. (1965). <em>Late Quaternary sedimentation and geologic history of the north Willamette Valley, Oregon</em>. U.S. Geological Survey Professional Paper 443. <a href="https://doi.org/10.3133/pp443" class="text-blue-600 hover:underline">https://doi.org/10.3133/pp443</a></p>
				
				<p>Mackey, H. (2010). <em>The Kalapuya Treaty of 1855</em>. Oregon Historical Society.</p>
				
				<p>McArthur, L. A. (2003). <em>Oregon geographic names</em> (7th ed.). Oregon Historical Society Press.</p>
				
				<p>NOAA National Centers for Environmental Information. (2021). <em>U.S. climate normals (1991–2020)</em>. National Oceanic and Atmospheric Administration. <a href="https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals" class="text-blue-600 hover:underline">https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals</a></p>
				
				<p>O'Connor, J. E., Duda, J. J., & Grant, G. E. (2013). <em>Geomorphic and vegetation processes of the Willamette River floodplain, Oregon</em> (U.S. Geological Survey Scientific Investigations Report 2013–1246). U.S. Geological Survey. <a href="https://doi.org/10.3133/sir20131246" class="text-blue-600 hover:underline">https://doi.org/10.3133/sir20131246</a></p>
				
				<p>Oregon Department of Fish and Wildlife. (2025). <em>Oregon Conservation Strategy: Willamette Valley Ecoregion</em>. <a href="https://www.oregonconservationstrategy.org" class="text-blue-600 hover:underline">https://www.oregonconservationstrategy.org</a></p>
				
				<p>Oregon Encyclopedia. (2021). <em>Kalapuya</em>. Oregon Historical Society. <a href="https://www.oregonencyclopedia.org" class="text-blue-600 hover:underline">https://www.oregonencyclopedia.org</a></p>
				
				<p>Oregon Wine Board. (2023). <em>Willamette Valley AVA overview</em>. <a href="https://www.oregonwine.org" class="text-blue-600 hover:underline">https://www.oregonwine.org</a></p>
				
				<p>Robbins, W. G. (2021). <em>Willamette Valley</em>. In <em>The Oregon Encyclopedia</em>. Oregon Historical Society.</p>
				
				<p>U.S. Army Corps of Engineers. (2023). <em>Willamette Valley Project: Dams and reservoirs</em>. Portland District. <a href="https://www.nwp.usace.army.mil" class="text-blue-600 hover:underline">https://www.nwp.usace.army.mil</a></p>
				
				<p>U.S. Fish & Wildlife Service. (2015). <em>Oregon chub (Oregonichthys crameri) delisting</em>. <a href="https://www.fws.gov/oregon-chub" class="text-blue-600 hover:underline">https://www.fws.gov/oregon-chub</a></p>
				
				<p>U.S. Fish & Wildlife Service. (2023). <em>Willamette Valley National Wildlife Refuge Complex</em>. <a href="https://www.fws.gov/refuge" class="text-blue-600 hover:underline">https://www.fws.gov/refuge</a></p>
				
				<p>Vesely, D. G., & Rosenberg, D. K. (2010). <em>Population viability of prairie–oak species in the Willamette Valley</em>. Northwest Science, 84(2), 119–130. <a href="https://doi.org/10.3955/046.084.0202" class="text-blue-600 hover:underline">https://doi.org/10.3955/046.084.0202</a></p>
				
				<p>Waitt, R. B. (1985). Case for periodic, colossal jökulhlaups from Pleistocene glacial Lake Missoula. <em>Geological Society of America Bulletin, 96</em>(10), 1271–1286. <a href="https://doi.org/10.1130/0016-7606(1985)96<1271:CFPCJF>2.0.CO;2" class="text-blue-600 hover:underline">https://doi.org/10.1130/0016-7606(1985)96&lt;1271:CFPCJF&gt;2.0.CO;2</a></p>
			</div>
		</div>
	</section>

	<!-- Waterfall Directory -->
	<div class="p-4 lg:p-6">
		<h2 class="text-2xl font-bold text-black mb-6 text-center">Waterfalls in the Willamette Valley</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
	<BackButton />
</div>
