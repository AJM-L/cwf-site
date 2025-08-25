<script lang="ts">
	import WaterfallMap from '$lib/WaterfallMap.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';


	const waterfalls = [
		{ name: 'Bridal Veil Falls', url: '/falls/the-gorge/bridal-veil', description: 'A stunning two-tiered waterfall with rich industrial history' },
		{ name: 'Latourell Falls', url: '/falls/the-gorge/latourel', description: 'A majestic single-drop fall surrounded by basalt cliffs' },
		{ name: "Shepperd's Dell Falls", url: '/falls/the-gorge/shepards-dell', description: 'A hidden gem accessible via historic stone bridge' },
		{ name: 'Triple Falls (Oneonta Creek)', url: '/falls/the-gorge/triple-falls', description: 'Three distinct cascades in a spectacular gorge setting' },
		{ name: 'Celilo Falls (Historic)', url: '/falls/the-gorge/celilo-falls', description: 'The legendary fishing falls lost beneath The Dalles Dam' }
	];

	type TimelineEvent = {
		year: number;
		title: string;
		subtitle?: string;
	};

	const timelineEvents: TimelineEvent[] = [
		{ year: 1855, title: 'Treaties signed', subtitle: 'Yakama, Warm Springs, Umatilla, and Nez Perce treaties reserve fishing and other rights' },
		{ year: 1915, title: 'Historic Columbia River Highway', subtitle: 'Completion spurred conservation interest' },
		{ year: 1937, title: 'Bonneville Dam completed', subtitle: 'Hydropower and navigation reshape river flow and fish passage' },
		{ year: 1957, title: 'The Dalles Dam', subtitle: 'Celilo Falls and major fisheries inundated' },
		{ year: 1986, title: 'Scenic Area Act', subtitle: 'Signed November 17, 1986' },
		{ year: 1987, title: 'Gorge Commission established', subtitle: 'Bi-state agency and USFS begin implementation' },
		{ year: 2017, title: 'Eagle Creek Fire', subtitle: '~48,800 acres burned; long-term recovery and hazard mitigation' },
		{ year: 2025, title: 'Bi-state funding stress test', subtitle: 'Budget turbulence prompts renewed focus on governance capacity' }
	];

	const minYear: number = timelineEvents[0].year;
	const maxYear: number = timelineEvents[timelineEvents.length - 1].year;
	const yearSpan: number = maxYear - minYear;

	const positionPercent = (year: number): number => {
		if (yearSpan <= 0) return 8;
		const relativePosition = (year - minYear) / yearSpan;
		return 8 + (relativePosition * 84);
	};
</script>

<svelte:head>
	<title>Columbia River Gorge</title>
	<meta name="description" content="Explore the magnificent waterfalls of the Columbia River Gorge" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8">
	<!-- Introduction Section -->
	<section class="text-center mb-12">
		<h1 class="text-4xl font-bold text-black mb-6">Columbia River Gorge</h1>
		<div class="max-w-4xl mx-auto">
			<p class="text-lg text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto">
				The Columbia River Gorge (CRG) is an 80-mile canyon up to ~4,000 ft deep that slices through the Cascade Range along the Oregon–Washington border. It is protected as the Columbia River Gorge National Scenic Area (CRGNSA), a mosaic of steep volcanic cliffs, waterfalls, river ecosystems, oak savannas, and dry grasslands—an east–west transect where Pacific Northwest rainforests grade rapidly into Columbia Plateau shrub-steppe.
			</p>
		</div>
	</section>

	<!-- Satellite Map Section -->
	<section class="mb-12">
		<div class="bg-white rounded-lg shadow-lg p-6">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Columbia River Gorge Satellite Map</h2>
			<p class="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
				Explore the Columbia River Gorge from above. This satellite view reveals the dramatic landscape carved by ice-age floods, showing the basalt cliffs, waterfall amphitheaters, and the distinct vegetation gradients from west to east.
			</p>
			<div class="h-96 md:h-[500px] w-full">
				<WaterfallMap mode="zone" selectedZone="columbia-river-gorge" />
			</div>
		</div>
	</section>

	<!-- Landscape Gallery Section -->
	<section class="mb-12">
		<div class="relative overflow-hidden rounded-lg mb-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
				<div class="relative overflow-hidden rounded-lg shadow-lg group">
					<img src={`${base}/images/the-gorge/COLUMBIA_RIVER_GORGE_BETWEEN_THE_DALLES_AND_THE_HOOD_RIVER_-_NARA_-_548143.jpg`} alt="Historic view of Columbia River Gorge between The Dalles and Hood River" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>
				<div class="relative overflow-hidden rounded-lg shadow-lg group">
					<img src={`${base}/images/the-gorge/Columbia_River_(201830373).jpeg`} alt="Lush green vegetation in the Columbia River Gorge" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>
				<div class="relative overflow-hidden rounded-lg shadow-lg group">
					<img src={`${base}/images/the-gorge/tree-and-river.jpeg`} alt="Trees along the Columbia River" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Geologic Setting Section -->
	<section class="mb-12">
		<div class="p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Geologic Setting</h2>
			<div class="max-w-4xl mx-auto space-y-6">
				<div class="grid md:grid-cols-2 gap-8 items-center mb-8">
					<div>
						<div class="pl-6">
							<h3 class="text-lg font-bold text-black mb-2">Basalt Foundation</h3>
							<p class="text-gray-800 leading-relaxed">
								The Gorge's sheer walls are built mostly from Miocene flood basalts of the Columbia River Basalt Group; these thick lava flows form the columnar cliffs so visible along the river.
							</p>
						</div>
						<div class="pl-6 mt-6">
							<h3 class="text-lg font-bold text-black mb-2">Ice-Age Floods Sculpted the Canyon</h3>
							<p class="text-gray-800 leading-relaxed">
								Repeated late-Pleistocene outburst floods from glacial Lake Missoula (the "Ice Age Floods") roared down the Columbia, scouring bedrock, plucking out alcoves that became waterfall amphitheaters, and leaving giant bars and coulees.
							</p>
						</div>
					</div>
					<div class="flex justify-center">
						<img src={`${base}/images/the-gorge/rock.jpeg`} alt="Basalt rock formations in the Columbia River Gorge" class="max-w-full h-auto rounded-lg shadow-lg">
					</div>
				</div>
				<div class="pl-6">
					<h3 class="text-lg font-bold text-black mb-2">Active Landslopes</h3>
					<p class="text-gray-800 leading-relaxed">
						The Gorge remains landslide-prone. The <strong>Bonneville (Bridge of the Gods) landslide</strong>—within the last ~600 years—temporarily dammed the river, an event preserved in Native oral histories and evident in today's constricted reach near Cascade Locks. <strong>Beacon Rock</strong>, a prominent monolith upriver, is the eroded volcanic plug of a ~55–57 ka volcano of the Boring Volcanic Field, its softer surroundings stripped away by floods and erosion.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Climate and Winds Section -->
	<section class="mb-12">
		<div class="p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Climate and Winds</h2>
			<div class="max-w-5xl mx-auto">
				<div class="grid md:grid-cols-2 gap-8 items-center">
					<div>
						<p class="text-lg text-gray-800 leading-relaxed">
							Marine air funnels through the Gorge, producing persistent gap winds (especially in winter) and a sharp precipitation gradient—from wet temperate rainforest in the west to semi-arid grasslands and shrub-steppe by The Dalles. The western gorge can receive several feet of rain annually, while eastern slopes may see 15 inches or below.
						</p>
					</div>
					<div class="flex justify-center">
						<img src={`${base}/images/the-gorge/more-green.jpeg`} alt="Lush vegetation showing the wet climate of the western Columbia River Gorge" class="max-w-full h-auto rounded-lg shadow-lg">
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Habitats and Vegetation Section -->
	<section class="mb-12">
		<div class="p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Habitats and Native Vegetation</h2>
			<div class="max-w-5xl mx-auto space-y-8">
				<div class="grid md:grid-cols-2 gap-8 items-center pb-4 border-b border-gray-300">
					<div>
						<h3 class="text-lg font-bold text-black mb-3">Conifer–Hardwood Forests (Western Gorge)</h3>
						<p class="text-gray-800 leading-relaxed">
							Stands dominated by Douglas-fir (<em>Pseudotsuga menziesii</em>), western hemlock (<em>Tsuga heterophylla</em>), and western redcedar (<em>Thuja plicata</em>), with bigleaf maple (<em>Acer macrophyllum</em>) and red alder (<em>Alnus rubra</em>), occupy cooler, wetter slopes and canyon bottoms.
						</p>
					</div>
					<div class="flex justify-center">
						<img src={`${base}/images/the-gorge/tree-wall.jpeg`} alt="Dense forest canopy in the Columbia River Gorge" class="max-w-full h-auto rounded-lg shadow-lg">
					</div>
				</div>
				<div class="grid md:grid-cols-2 gap-8 items-center pb-4 border-b border-gray-300">
					<div class="flex justify-center md:order-first">
						<img src={`${base}/images/the-gorge/9 arrowleaf balsamroot.jpg`} alt="Arrowleaf balsamroot wildflowers in the Columbia River Gorge" class="max-w-full h-auto rounded-lg shadow-lg">
					</div>
					<div>
						<h3 class="text-lg font-bold text-black mb-3">Oak Savanna & Open Woodlands (Central–Eastern Gorge)</h3>
						<p class="text-gray-800 leading-relaxed">
							Breezy benches and south-facing slopes support <strong>Oregon white oak</strong> (<em>Quercus garryana</em>) woodlands intergrading with ponderosa pine (<em>Pinus ponderosa</em>) and native bunchgrasses. Tom McCall Preserve (Rowena Plateau) is a showcase for spring wildflowers.
						</p>
					</div>
				</div>
				<div class="grid md:grid-cols-2 gap-8 items-center pb-4 border-b border-gray-300">
					<div>
						<h3 class="text-lg font-bold text-black mb-3">Shrub-Steppe & Scabland Grasslands (Eastern Margins)</h3>
						<p class="text-gray-800 leading-relaxed">
							Dry, shallow-soiled plateaus and scablands feature bluebunch wheatgrass, Idaho fescue, and forbs adapted to windy, thin-soil conditions.
						</p>
					</div>
					<div class="flex justify-center">
						<img src={`${base}/images/the-gorge/eastern-gorge.jpg`} alt="Native grasslands and vegetation in the Columbia River Gorge" class="max-w-full h-auto rounded-lg shadow-lg">
					</div>
				</div>
				<div class="border-b border-gray-300 pb-5">
					<h3 class="text-lg font-bold text-black mb-3">Endemism & Rare Flora</h3>
					<p class="text-gray-800 leading-relaxed">
						The CRG harbors multiple local endemics including <strong>Barrett's penstemon</strong> (<em>Penstemon barrettiae</em>), <strong>Oregon sullivantia</strong> (<em>Sullivantia oregana</em>), and <strong>Oregon fleabane</strong> (<em>Erigeron oreganus</em>). At least <strong>16 plant species are endemic</strong> to the Gorge region.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Wildlife Section -->
	<section class="mb-12">
		<div class="p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Wildlife</h2>
			<div class="max-w-5xl mx-auto space-y-6">
				<div class="pb-4">
					<div class="grid md:grid-cols-2 gap-6 items-center">
						<div>
							<h3 class="text-lg font-bold text-black mb-2">Fish</h3>
							<p class="text-2xl font-bold text-black mb-2">44+ species in the Scenic Area</p>
							<p class="text-gray-800 leading-relaxed">
								Including large seasonal runs of Chinook, coho, sockeye salmon, and steelhead, plus Pacific lamprey. Passage at Bonneville Dam is monitored and facilitated with fish ladders.
							</p>
						</div>
						<div class="flex justify-center">
							<img src={`${base}/images/the-gorge/3 Chinook salmon.jpg`} alt="Chinook salmon in the Columbia River Gorge" class="max-w-full h-auto">
						</div>
					</div>
				</div>
				<div class="pb-4">
					<div class="grid md:grid-cols-2 gap-6 items-center">
						<div class="flex justify-center">
							<img src={`${base}/images/the-gorge/NorthernSpottedOwl.jpg`} alt="Northern Spotted Owl in the Columbia River Gorge" class="max-w-full h-auto">
						</div>
						<div>
							<h3 class="text-lg font-bold text-black mb-2">Birds</h3>
							<p class="text-2xl font-bold text-black mb-2">200+ species recorded</p>
							<p class="text-gray-800 leading-relaxed">
								From riparian songbirds to cliff-nesting peregrine falcons at Cape Horn. Spring wildflower areas host Lewis's woodpecker and hunting raptors.
							</p>
						</div>
					</div>
				</div>
				<div>
					<div class="grid md:grid-cols-2 gap-6 items-center">
						<div>
							<h3 class="text-lg font-bold text-black mb-2">Mammals & More</h3>
							<p class="text-2xl font-bold text-black mb-2">Diverse terrestrial fauna</p>
							<p class="text-gray-800 leading-relaxed">
								Black-tailed deer, beaver, black bear, yellow-bellied marmot, and notably American pikas persisting in low-elevation talus. Northwestern pond turtle is of conservation concern.
							</p>
						</div>
						<div class="flex justify-center">
							<img src={`${base}/images/the-gorge/Deer_and_Pine_Tree-_Columbia_River_Gorge.jpg`} alt="Deer and pine tree in the Columbia River Gorge" class="max-w-full h-auto">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Disturbance and Recovery Section -->
	<section class="mb-12">
		<div class="p-4 lg:p-8">
			<h2 class="text-2xl font-bold text-black mb-6 text-center">Disturbance and Change: Wildfire, Landslides, and Recovery</h2>
			<div class="max-w-4xl mx-auto">
				<p class="text-lg text-gray-800 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
					Fire, floods, and landslides shape the Gorge. The 2017 Eagle Creek Fire burned ~48,800 acres, triggering a large BAER (Burned Area Emergency Response) assessment and years of trail stabilization and habitat recovery work; post-fire hazards included debris-flow risk and rockfall on steep, burned slopes.
				</p>
				<div class="pt-4">
					<p class="text-center text-gray-800 italic max-w-2xl mx-auto">
						Ecologically, mixed-severity fire can reset understories and create early-seral habitats even as it impacts infrastructure and access.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Treaties and Dispossession -->
	<section class="mb-12">
		<div class="relative overflow-hidden mb-8">
			<div class="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
			<img src={`${base}/images/waterfalls/latourell/Columbia_drainage_basin_blank_map.png`} alt="Columbia River drainage basin" class="w-full h-64 object-cover">
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="text-center text-white px-6">
					<h2 class="text-3xl font-bold mb-4">Treaties and Dispossession</h2>
					<p class="text-lg max-w-4xl">
						In the 19th century, the Gorge was violently colonized by european American  Settlers. These white settlers were backed by racist laws, deadly diseases, and the threat of violence. These laws were passed as part of a broader effort by the US government to systematically colonize the land that has become the Western United States. The Columbia River Gorge, and the area around the waterfalls have been continuously inhabited for at least 12,800 years.
					</p>
				</div>
			</div>
		</div>
		
		<div class="bg-white p-4 lg:p-8 mb-8">
			<p class="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
				The area's deep history was abruptly altered by a patchwork of treaties and federal laws that systematically dispossessed Native peoples, whihch ceded much of the willamette valley. Among the most consequential were the 1855 treaties signed by bands of the Kalapuya and Mollala Peoples, the confederated tribes of Warm Springs, the Confederated Tribes of the Umatilla Indian Reservation, and the Confederated Tribes and Bands of the Yakama Nation, and the Nez Perce Tribes. Through coercive negotiations, these nations ceded millions of acres, including the Columbia River Gorge and waterfall regions, while reserving the right to fish, hunt, and gather at their "usual and accustomed places." These treaty rights continue to underpin Native efforts to access and steward traditional territories, though they have been repeatedly challenged and reasserted in federal courts.
			</p>
			
			<div class="grid md:grid-cols-2 gap-8 p-6 rounded-lg">
				<div class="p-6 rounded-lg border-l-4 border-gray-300 bg-gray-100">
					<h3 class="text-lg font-bold mb-2">1855 Treaties</h3>
					<p class="text-sm"><a href="https://yakama.com/about/treaty/" target="_blank">Yakama</a>, <a href="https://warmsprings-nsn.gov/treaty-documents/treaty-of-1855/" target="_blank">Warm Springs</a>, <a href="https://ctuir.org/about/history-culture/" target="_blank">Umatilla</a>, <a href="https://nezperce.org/about/history/" target="_blank">Nez Perce</a></p>
				</div>
				<div class="p-6 rounded-lg border-l-4 border-gray-300 bg-gray-100">
					<h3 class="text-lg font-bold mb-2">Reserved Rights</h3>
					<p class="text-sm">Fish, hunt, and gather at "usual and accustomed places"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Columbia River Gorge National Scenic Area Act -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Columbia River Gorge National Scenic Area Act</h2>
			
			<p class="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
				By the late twentieth century, concern for the region's natural and cultural heritage led to the passage of the Columbia River Gorge National Scenic Area Act in 1986. The legislation emerged from decades of mounting concern over development pressures threatening the scenic and natural integrity of the Columbia River corridor.
			</p>
			
			<p class="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
				The legislation's roots trace back to the early 20th century when the completion of the Historic Columbia River Highway in 1915 first sparked systematic conservation interest in the region. In the late 1970s, architect John Yeon recruited Nancy Russell to combat what he perceived as an existential threat to the landscape. Russell's response was to establish Friends of the Columbia Gorge in 1980, an organization that would become the primary advocacy force behind federal protection legislation.
			</p>
			
			<div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg mb-6 border border-gray-200">
				<h3 class="text-2xl font-bold mb-8 text-center text-gray-800">Key Timeline</h3>
				<div class="relative w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
					<div class="relative min-w-[2400px] lg:min-w-[2800px] h-96 md:h-[28rem] px-6 md:px-12">
						<!-- Main timeline line with gradient -->
						<div class="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-sm" style="left: 8%; right: 8%;"></div>
						
						<!-- Year markers on the timeline -->
						<div class="absolute top-1/2 -translate-y-1/2 flex justify-between text-xs text-gray-500 font-medium" style="left: 8%; right: 8%;">
							<div class="bg-white px-2 py-1 rounded shadow-sm">{minYear}</div>
							<div class="bg-white px-2 py-1 rounded shadow-sm">{maxYear}</div>
						</div>
						
						{#each timelineEvents as event, i}
							{@const leftPosition = positionPercent(event.year)}
							<div class="absolute group cursor-pointer" style="left: {leftPosition}%; top: 50%;">
								<div class="flex flex-col items-center -translate-x-1/2">
									{#if i % 2 === 0}
										<!-- Events above the line -->
										<div class="flex flex-col items-center" style="position: absolute; bottom: 8px; transform: translateX(0);">
											<div class="bg-white border border-gray-300 shadow-lg rounded-lg p-2 md:p-3 mb-2 w-44 md:w-52 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-300">
												<div class="text-xs font-bold text-blue-800 mb-1 md:mb-2 bg-blue-50 px-2 py-1 rounded-full inline-block">{event.year}</div>
												<div class="text-xs md:text-sm font-bold text-gray-900 mb-1 md:mb-2 leading-tight">{event.title}</div>
												{#if event.subtitle}
													<div class="text-xs text-gray-600 leading-relaxed">{event.subtitle}</div>
												{/if}
											</div>
											<div class="h-8 md:h-10 w-0.5 bg-gradient-to-b from-blue-300 to-blue-500"></div>
										</div>
										<div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600 border-2 md:border-3 border-white shadow-lg group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 -translate-y-1/2"></div>
									{:else}
										<!-- Events below the line -->
										<div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600 border-2 md:border-3 border-white shadow-lg group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 -translate-y-1/2"></div>
										<div class="h-8 md:h-10 w-0.5 bg-gradient-to-t from-blue-300 to-blue-500"></div>
										<div class="bg-white border border-gray-300 shadow-lg rounded-lg p-2 md:p-3 mt-2 w-44 md:w-52 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-300">
											<div class="text-xs font-bold text-blue-800 mb-1 md:mb-2 bg-blue-50 px-2 py-1 rounded-full inline-block">{event.year}</div>
											<div class="text-xs md:text-sm font-bold text-gray-900 mb-1 md:mb-2 leading-tight">{event.title}</div>
											{#if event.subtitle}
												<div class="text-xs text-gray-600 leading-relaxed">{event.subtitle}</div>
											{/if}
										</div>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="text-center mt-4">
					<p class="text-sm text-gray-600 italic">Scroll horizontally to explore the timeline</p>
				</div>
			</div>
		</div>
	</section>

	<!-- The Dual Mandate -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-3xl font-bold mb-6 text-center text-gray-800">The Dual Mandate: Protection & Development</h2>
			
			<p class="text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
				The Act employs a three-tiered land use framework designed to implement its dual purposes across the 85-mile, 292,500-acre National Scenic Area. The legislation divides the Gorge into three distinct categories, each subject to different management standards and development restrictions.
			</p>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-green-50 p-6 rounded-lg border-t-4 border-green-600">
					<h3 class="text-xl font-bold mb-3 text-green-800">Special Management Areas</h3>
					<p class="text-gray-700 mb-2"><strong>114,600 acres</strong></p>
					<p class="text-sm text-gray-600">Highest level of protection with severe restrictions on development. Includes Gates of the Columbia River Gorge, Wind Mountain, Burdoin Mountain, and Rowena.</p>
				</div>
				<div class="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600">
					<h3 class="text-xl font-bold mb-3 text-blue-800">General Management Areas</h3>
					<p class="text-gray-700 mb-2"><strong>149,400 acres</strong></p>
					<p class="text-sm text-gray-600">Balanced protection with managed development. Allows compatible residential and commercial development while maintaining scenic and resource protection guidelines.</p>
				</div>
				<div class="bg-orange-50 p-6 rounded-lg border-t-4 border-orange-600">
					<h3 class="text-xl font-bold mb-3 text-orange-800">Urban Areas</h3>
					<p class="text-gray-700 mb-2"><strong>28,500 acres</strong></p>
					<p class="text-sm text-gray-600">Thirteen designated areas largely exempt from land use regulations, serving as preferred locations for intensive development and economic growth.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Treaty Rights in Practice -->
	<section class="mb-12">
		<div class="bg-white p-4 lg:p-8">
			<h2 class="text-3xl font-bold mb-6 text-gray-800">Treaty Rights & Consultation in Practice</h2>
			
			<p class="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
				The Columbia River Gorge National Scenic Area Act contains provisions protecting Native American treaty rights and establishing tribal consultation processes. Section 17(a)(1) explicitly states that nothing in the Act shall "affect or modify any treaty or other rights of any Indian tribe". This protection extends to the four Treaty Tribes: the Nez Perce Tribe, Confederated Tribes of the Warm Springs Reservation of Oregon, Confederated Tribes of the Umatilla Indian Reservation, and Confederated Tribes and Bands of the Yakama Indian Nation.
			</p>
			
			<p class="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
				The Act requires both the U.S. Secretary of Agriculture and the Gorge Commission to "exercise their responsibilities . . . in consultation with . . . Indian tribes," establishing government-to-government consultation as a fundamental requirement for all management decisions.
			</p>
			
			<div class="bg-gray-50 p-6 rounded-lg">
				<h3 class="text-lg font-bold mb-4">Key Provisions</h3>
				<ol class="space-y-2 list-decimal list-inside">
					<li>Section 17(a)(1): Consultation with tribal nations on decisions affecting traditional lands</li>
					<li>Prohibitions on affecting treaty rights to fish, hunt, and gather at "usual and accustomed places"</li>
					<li>Government-to-government consultation to respect tribal sovereignty</li>
				</ol>
			</div>
		</div>
	</section>

	<!-- Ongoing Challenges -->
	<section class="mb-12">
		<div class="text-center mb-8">
			<h2 class="text-2xl font-bold mb-4 text-black">Ongoing Challenges</h2>
			<div class="w-24 h-px mx-auto mb-6 bg-gray-400"></div>
			<p class="text-lg text-gray-800 max-w-3xl mx-auto">
				Two immediate tests define the Scenic Area today: sustaining stable bi-state funding and adapting management to accelerating climate risks.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6 lg:gap-8">
			<!-- Funding Challenge -->
			<div class="p-4 lg:p-8">
				<h3 class="text-xl font-bold text-black mb-4">Funding</h3>
				<p class="mb-6 text-gray-800 leading-relaxed">
					Funding turbulence has stressed the bi-state compact that underpins Gorge governance. In 2025, a vote in Washington's House to zero-out funding for the Gorge Commission jeopardized the Act's matching-contribution requirement and the Commission's capacity to meet federal obligations.
				</p>
				<div class="space-y-3">
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
						<p class="text-sm text-gray-800">Matching contributions: reductions in one state force equal cuts in the other</p>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
						<p class="text-sm text-gray-800">Final outcome (2025–27): negotiated 27% budget reduction</p>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
						<p class="text-sm text-gray-800">Operational risks: staffing, enforcement, plan updates, and consultation timelines</p>
					</div>
				</div>
			</div>

			<!-- Climate Challenge -->
			<div class="bg-gray-100 p-4 lg:p-8">
				<h3 class="text-xl font-bold text-black mb-4">Climate</h3>
				<p class="mb-6 text-gray-800 leading-relaxed">
					The 2020 Management Plan introduced the Scenic Area's first climate action requirements, shifting implementation toward adaptation and resilience.
				</p>
				<div class="space-y-3">
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
						<p class="text-sm text-gray-800">Adaptation strategies: wildfire resilience, water resources, habitat connectivity</p>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
						<p class="text-sm text-gray-800">Implementation: integrated into local ordinances and resource review criteria</p>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
						<p class="text-sm text-gray-800">Emerging pressures: shifting precipitation, extreme heat, species redistribution</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Synthesis -->
	<section class="mb-12">
		<div class="p-4 lg:p-8 text-center">
			<div class="max-w-4xl mx-auto">
				<div class="mb-6 w-24 mx-auto"></div>
				<p class="text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto">
					The Columbia River Gorge highlights the layered histories, contested politics, and evolving environmental challenges that have shaped, and continue to shape, the Pacific Northwest. From the deep Indigenous presence that has been continually disrupted and challenged since 19th-century federal land policies, to the legislative negotiations culminating in the Columbia River Gorge National Scenic Area Act of 1986, the story of this landscape is one of continual negotiation between people and land. The Act's dual mandate, born of compromise, has allowed both economic development and environmental preservation, yet continued disputes and mounting pressures of climate change underscore the area's vulnerability to shifting political priorities and environmental realities.
				</p>
			</div>
		</div>
	</section>

	<!-- Waterfall Directory -->
	<div class="p-4 lg:p-6">
		<h2 class="text-2xl font-bold text-black mb-6 text-center">Waterfalls in the Columbia River Gorge</h2>
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
