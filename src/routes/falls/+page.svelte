<script lang="ts">
	import WaterfallMap from '$lib/WaterfallMap.svelte';
	import BackButton from '$lib/BackButton.svelte';

	const regions = [
		{
			name: 'Willamette Valley',
			url: '/falls/willamette-valley',
			description: '',
			waterfalls: [
				{ name: 'Willamette Falls', url: '/falls/willamette-valley/willamette-falls' },
				{ name: 'Silver Falls State Park', url: '/falls/willamette-valley/silver-falls' }
			]
		},
		{
			name: 'Columbia River Gorge',
			url: '/falls/the-gorge',
			description: '',
			waterfalls: [
				{ name: 'Bridal Veil Falls', url: '/falls/the-gorge/bridal-veil' },
				{ name: 'Latourell Falls', url: '/falls/the-gorge/latourel' },
				{ name: "Shepperd's Dell Falls", url: '/falls/the-gorge/shepards-dell' },
				{ name: 'Triple Falls (Oneonta Creek)', url: '/falls/the-gorge/triple-falls' },
				{ name: 'Celilo Falls (Historic)', url: '/falls/the-gorge/celilo-falls' }
			]
		},
		{
			name: 'Cascade Range / Mt Hood',
			url: '/falls/the-cascades',
			description: '',
			waterfalls: [
				{ name: 'Ramona Falls', url: '/falls/the-cascades/ramona-falls' },
				{ name: 'Zigzag Falls', url: '/falls/the-cascades/zig-zag-falls' }
			]
		}
	];
</script>

<svelte:head>
	<title>Waterfall Map - CWF</title>
	<meta name="description" content="Interactive map of waterfalls in Oregon" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-4xl font-bold text-gray-800 mb-4">Oregon Waterfalls</h1>
		<p class="text-lg text-gray-600 max-w-2xl mx-auto">
			Click on an area below to learn more.
		</p>
	</div>

	<!-- Interactive Map -->
	<div class="mb-8 h-96 md:h-[500px] w-full">
		<WaterfallMap />
	</div>

	<!-- Regional Directory -->
	<div class="space-y-8">
		{#each regions as region}
			<div class="bg-white rounded-lg shadow-lg p-6">
				<div class="mb-6">
					<a href={region.url} class="group">
						<h2 class="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 mb-2">
							{region.name}
						</h2>
					</a>
					<p class="text-gray-600">{region.description}</p>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each region.waterfalls as waterfall}
						<a 
							href={waterfall.url}
							class="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
						>
							<h3 class="font-semibold text-gray-800 hover:text-blue-600">{waterfall.name}</h3>
						</a>
					{/each}
				</div>
				
				<div class="mt-4 text-center">
					<a 
						href={region.url}
						class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
					>
						Explore {region.name} →
					</a>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-8">
		<BackButton />
	</div>
</div>
