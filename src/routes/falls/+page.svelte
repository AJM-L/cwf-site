<script lang="ts">
	import WaterfallMap from '$lib/WaterfallMap.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';

	const regions = [
		{
			name: 'Willamette Valley',
			url: `${base}/falls/willamette-valley`,
			description: 'Historic waterfalls including Willamette Falls and Silver Falls State Park\'s "Trail of Ten Falls."',
			image: `${base}/images/waterfalls/willamette-falls/optimized/8R5A6297.webp`,
			waterfalls: [
				{ name: 'Willamette Falls', url: `${base}/falls/willamette-valley/willamette-falls` },
				{ name: 'Silver Falls State Park', url: `${base}/falls/willamette-valley/silver-falls` }
			]
		},
		{
			name: 'Columbia River Gorge',
			url: `${base}/falls/the-gorge`,
			description: 'The iconic gorge carved by the Columbia River features dramatic basalt cliffs and world-renowned waterfalls.',
			image: `${base}/images/waterfalls/optimized/bridal-veil/_R5A6008 (1).webp`,
			waterfalls: [
				{ name: 'Bridal Veil Falls', url: `${base}/falls/the-gorge/bridal-veil` },
				{ name: 'Latourell Falls', url: `${base}/falls/the-gorge/latourel` },
				{ name: "Shepherd's Dell Falls", url: `${base}/falls/the-gorge/shepards-dell` },
				{ name: 'Triple Falls (Oneonta Creek)', url: `${base}/falls/the-gorge/triple-falls` },
				{ name: 'Celilo Falls (Historic)', url: `${base}/falls/the-gorge/celilo-falls` }
			]
		},
		{
			name: 'Cascade Mountains',
			url: `${base}/falls/the-cascades`,
			description: 'High-altitude waterfalls cascading through old-growth forests, including Ramona Falls and Zig Zag Falls.',
			image: `${base}/images/cascades/optimized/mt-hood-ramona-falls.webp`,
			waterfalls: [
				{ name: 'Ramona Falls', url: `${base}/falls/the-cascades/ramona-falls` },
				{ name: 'Zigzag Falls', url: `${base}/falls/the-cascades/zig-zag-falls` }
			]
		}
	];
</script>

<svelte:head>
	<title>Waterfalls - Columbia River Watershed</title>
	<meta name="description" content="Explore waterfalls across three distinct regions of the Columbia River Watershed: the Columbia River Gorge, Cascade Mountains, and Willamette Valley." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<div class="relative py-24 bg-slate-50">
		<div class="max-w-6xl mx-auto px-6">
			<div class="text-center mb-16">
				<h1 class="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
					Waterfalls of the Columbia River Watershed
				</h1>
				<p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
					Discover waterfalls across three distinct regions, each offering unique geological features and natural experiences.
				</p>
			</div>

			<!-- Interactive Map -->
			<div class="mb-16 h-96 md:h-[500px] w-full bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
				<WaterfallMap />
			</div>
		</div>
	</div>

	<!-- Regional Directory -->
	<div class="py-24 bg-white">
		<div class="max-w-6xl mx-auto px-6">
			<div class="space-y-16">
				{#each regions as region}
					<div class="group">
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<!-- Region Image -->
							<div class="relative overflow-hidden rounded-lg">
								<img 
									src={region.image} 
									alt={region.name}
									class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
									{region.name}
								</div>
							</div>

							<!-- Region Content -->
							<div>
								<h2 class="text-2xl md:text-3xl font-light text-slate-900 mb-4 leading-tight">
									{region.name}
								</h2>
								<p class="text-slate-600 mb-8 leading-relaxed">
									{region.description}
								</p>
								
								<!-- Waterfall List -->
								<div class="space-y-3 mb-8">
									{#each region.waterfalls as waterfall}
										<a 
											href={waterfall.url}
											class="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 group/item"
										>
											<h3 class="font-medium text-slate-900 group-hover/item:text-slate-700 transition-colors duration-200">
												{waterfall.name}
											</h3>
										</a>
									{/each}
								</div>
								
								<!-- Explore Button -->
								<a 
									href={region.url}
									class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
								>
									Explore {region.name}
									<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Footer CTA -->
	<div class="py-20 bg-slate-50">
		<div class="max-w-4xl mx-auto px-6 text-center">
			<h2 class="text-2xl md:text-3xl font-light text-slate-900 mb-4">
				Conservation Through Exploration
			</h2>
			<p class="text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
				Understanding and documenting these natural wonders helps protect them for future generations.
			</p>
			<div class="flex flex-col sm:flex-row gap-3 justify-center">
				<a 
					href={`${base}/conservation`}
					class="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
				>
					Learn About Conservation
				</a>
				<a 
					href={`${base}/art`}
					class="border border-slate-300 text-slate-700 px-8 py-3 text-sm font-medium tracking-wide uppercase hover:border-slate-400 hover:text-slate-900 transition-colors duration-200"
				>
					View Gallery
				</a>
			</div>
		</div>
	</div>

	<!-- Back Button -->
	<div class="py-8 bg-white">
		<div class="max-w-6xl mx-auto px-6">
			<BackButton />
		</div>
	</div>
</div>
