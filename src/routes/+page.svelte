<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	
	let currentImageIndex = 0;
	const heroImages = [
		`${base}/images/waterfalls/willamette-falls/optimized/8R5A6290.webp`,
		`${base}/images/waterfalls/optimized/silver-falls/my-photos/8R5A6143.webp`,
		`${base}/images/waterfalls/optimized/bridal-veil/_R5A6008 (1).webp`,
		`${base}/images/waterfalls/optimized/latourell/8R5A5911 (1).webp`
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 8000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Columbia River Watershed - CWF</title>
	<meta name="description" content="Explore the majestic waterfalls, diverse ecosystems, and conservation efforts of the Pacific Northwest's most iconic watershed." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<div class="relative h-screen flex items-center justify-center overflow-hidden">
		<!-- Background Image Slideshow -->
		{#each heroImages as image, index}
			<div 
				class="absolute inset-0 transition-opacity duration-3000 {index === currentImageIndex ? 'opacity-100' : 'opacity-0'}"
			>
				<img 
					src={image} 
					alt="Pacific Northwest Waterfall" 
					class="w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-black/20"></div>
			</div>
		{/each}

		<!-- Hero Content -->
		<div class="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
			<h1 class="text-4xl md:text-6xl font-light mb-6 tracking-tight leading-tight">
				Columbia River Watershed
			</h1>
			<p class="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
				Documenting the waterfalls, ecosystems, and conservation efforts of the Pacific Northwest's most vital watershed.
			</p>
			<div class="flex flex-col sm:flex-row gap-3 justify-center">
				<a 
					href={`${base}/conservation`}
					class="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
				>
					Conservation
				</a>
				<a 
					href={`${base}/falls`}
					class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
				>
					Waterfalls
				</a>
				<a 
					href={`${base}/art`}
					class="bg-transparent border border-white/50 hover:border-white text-white px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
				>
					Gallery
				</a>
			</div>
		</div>
	</div>

	<!-- Conservation Section -->
	<div class="py-24 bg-slate-50">
		<div class="max-w-6xl mx-auto px-6">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<!-- Conservation Content -->
				<div>
					<h2 class="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">
						Protecting Our Watershed
					</h2>
					<p class="text-slate-600 mb-8 leading-relaxed text-lg">
						The Columbia River Watershed faces unprecedented challenges from climate change, habitat loss, and human development. Critical conservation efforts are underway to preserve this vital ecosystem.
					</p>
					<div class="space-y-6 mb-8">
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Salmon Recovery</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Restoring salmon runs and removing barriers to fish passage.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Forest Protection</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Preserving old-growth forests and riparian corridors.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Water Quality</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Monitoring and improving water quality across the watershed.</p>
							</div>
						</div>
					</div>
					<a 
						href={`${base}/conservation`}
						class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
					>
						Learn More
						<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>

				<!-- Conservation Image -->
				<div class="relative">
					<img 
						src={`${base}/test-image.jpg`}
						alt="Northern Spotted Owl" 
						class="w-full aspect-[4/3] object-cover"
					/>
					<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
						Northern Spotted Owl
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Featured Content Section -->
	<div class="py-24 bg-white">
		<div class="max-w-6xl mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-light text-slate-900 mb-4">
					Explore the Watershed
				</h2>
				<p class="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
					Discover the natural and cultural heritage of this remarkable region through waterfalls, conservation efforts, and artistic interpretations.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
				<!-- Waterfalls -->
				<div class="group">
					<div class="relative mb-6 overflow-hidden">
						<img 
							src={`${base}/images/waterfalls/optimized/silver-falls/my-photos/8R5A6199.webp`}
							alt="Silver Falls State Park" 
							class="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
							Silver Falls State Park
						</div>
					</div>
					<h3 class="text-xl font-light text-slate-900 mb-3">Waterfalls</h3>
					<p class="text-slate-600 mb-6 leading-relaxed text-sm">
						Discover waterfalls across three distinct regions: the Columbia River Gorge, the Cascade Mountains, and the Willamette Valley.
					</p>
					<a 
						href={`${base}/falls`}
						class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
					>
						Explore
						<svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>

				<!-- Conservation -->
				<div class="group">
					<div class="relative mb-6 overflow-hidden">
						<img 
							src={`${base}/images/the-gorge/3 Chinook salmon.jpg`}
							alt="Chinook Salmon" 
							class="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
							Chinook Salmon
						</div>
					</div>
					<h3 class="text-xl font-light text-slate-900 mb-3">Conservation</h3>
					<p class="text-slate-600 mb-6 leading-relaxed text-sm">
						Learn about ongoing conservation initiatives protecting the watershed's biodiversity, water quality, and ecosystem health.
					</p>
					<a 
						href={`${base}/conservation`}
						class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
					>
						Learn More
						<svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>

				<!-- Art Collection -->
				<div class="group">
					<div class="relative mb-6 overflow-hidden">
						<img 
							src={`${base}/art/8R5A6313.jpeg`}
							alt="oil painting of Willamette Falls" 
							class="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
							Oil Painting of Willamette Falls
						</div>
					</div>
					<h3 class="text-xl font-light text-slate-900 mb-3">Gallery</h3>
					<p class="text-slate-600 mb-6 leading-relaxed text-sm">
						Experience the watershed through artistic interpretations including poetry, paintings, and multimedia works.
					</p>
					<a 
						href={`${base}/art`}
						class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
					>
						View Gallery
						<svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Regional Overview -->
	<div class="py-24 bg-slate-50">
		<div class="max-w-6xl mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-light text-slate-900 mb-4">
					Three Regions
				</h2>
				<p class="text-slate-600 text-lg">Each region offers unique geological features and waterfall experiences</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<!-- Columbia River Gorge -->
				<div class="bg-white overflow-hidden group">
					<div class="relative overflow-hidden">
						<img 
							src={`${base}/images/waterfalls/optimized/bridal-veil/cover.webp`}
							alt="Bridal Veil Falls" 
							class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
							Bridal Veil Falls
						</div>
					</div>
					<div class="p-8">
						<h3 class="text-xl font-light text-slate-900 mb-3">Columbia River Gorge</h3>
						<p class="text-slate-600 mb-6 text-sm leading-relaxed">
							The iconic gorge carved by the Columbia River features dramatic basalt cliffs and world-renowned waterfalls.
						</p>
						<a 
							href={`${base}/falls/the-gorge`}
							class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-xs font-medium tracking-wider uppercase"
						>
							Explore Region
							<svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>

				<!-- Cascade Mountains -->
				<div class="bg-white overflow-hidden group">
					<div class="relative overflow-hidden">
						<img 
							src={`${base}/images/cascades/optimized/mt-hood-ramona-falls.webp`}
							alt="Ramona Falls" 
							class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
							Ramona Falls
						</div>
					</div>
					<div class="p-8">
						<h3 class="text-xl font-light text-slate-900 mb-3">Cascade Mountains</h3>
						<p class="text-slate-600 mb-6 text-sm leading-relaxed">
							High-altitude waterfalls cascading through old-growth forests, including Ramona Falls and Zig Zag Falls.
						</p>
						<a 
							href={`${base}/falls/the-cascades`}
							class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-xs font-medium tracking-wider uppercase"
						>
							Explore Region
							<svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>

				<!-- Willamette Valley -->
				<div class="bg-white overflow-hidden group">
					<div class="relative overflow-hidden">
						<img 
							src={`${base}/images/waterfalls/willamette-falls/optimized/8R5A6297.webp`}
							alt="Willamette Falls" 
							class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
							Willamette Falls
						</div>
					</div>
					<div class="p-8">
						<h3 class="text-xl font-light text-slate-900 mb-3">Willamette Valley</h3>
						<p class="text-slate-600 mb-6 text-sm leading-relaxed">
							Historic waterfalls including Willamette Falls and Silver Falls State Park's "Trail of Ten Falls."
						</p>
						<a 
							href={`${base}/falls/willamette-valley`}
							class="inline-flex items-center text-slate-900 border-b border-slate-300 hover:border-slate-600 pb-1 text-xs font-medium tracking-wider uppercase"
						>
							Explore Region
							<svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer CTA -->
	<div class="py-20 bg-slate-900">
		<div class="max-w-4xl mx-auto px-6 text-center">
			<h2 class="text-2xl md:text-3xl font-light text-white mb-4">
				Conservation and Art
			</h2>
			<p class="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
				Join efforts to protect and preserve the Columbia River Watershed for future generations through research, advocacy, and direct action.
			</p>
			<div class="flex flex-col sm:flex-row gap-3 justify-center">
				<a 
					href={`${base}/conservation`}
					class="bg-white text-slate-900 px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-slate-100 transition-colors duration-200"
				>
					Get Involved
				</a>
				<a 
					href={`${base}/falls`}
					class="border border-slate-600 text-slate-300 px-8 py-3 text-sm font-medium tracking-wide uppercase hover:border-slate-400 hover:text-white transition-colors duration-200"
				>
					Explore
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* Smooth slideshow transition */
	.transition-opacity.duration-3000 {
		transition: opacity 3s ease-in-out;
	}
</style>