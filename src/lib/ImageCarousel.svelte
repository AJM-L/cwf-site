<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let images: string[] = [];
	export let title: string = 'Waterfall Gallery';
	export let description: string = '';
	export let credits: string = '';

	let currentIndex = 0;
	let carouselContainer: HTMLElement;
	let autoplayInterval: number;
	let touchStartX = 0;
	let touchEndX = 0;

	// Auto-advance slides every 5 seconds
	function startAutoplay() {
		autoplayInterval = setInterval(() => {
			nextSlide();
		}, 5000);
	}

	function stopAutoplay() {
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
		}
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}

	// Touch/swipe support
	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].clientX;
		handleSwipe();
	}

	function handleSwipe() {
		const swipeThreshold = 50;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}
	}

	// Keyboard navigation
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prevSlide();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			nextSlide();
		}
	}

	onMount(() => {
		if (images.length > 1) {
			startAutoplay();
		}
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		stopAutoplay();
		document.removeEventListener('keydown', handleKeydown);
	});

	// Pause autoplay on hover
	function handleMouseEnter() {
		stopAutoplay();
	}

	function handleMouseLeave() {
		if (images.length > 1) {
			startAutoplay();
		}
	}
</script>

<div class="carousel-container" bind:this={carouselContainer}>
	<!-- Header -->
	<div class="text-center mb-8">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
		{#if description}
			<p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
		{/if}
	</div>

	{#if images.length > 0}
		<!-- Main Carousel -->
		<div 
			class="relative rounded-lg overflow-hidden shadow-2xl bg-gray-900"
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			on:touchstart={handleTouchStart}
			on:touchend={handleTouchEnd}
			role="region"
			aria-label={`${title} image carousel`}
		>
			<!-- Images -->
			<div class="relative min-h-[500px] max-h-[80vh]">
				{#each images as image, index}
					<div
						class="absolute inset-0 transition-opacity duration-700 ease-in-out {index === currentIndex ? 'opacity-100' : 'opacity-0'}"
					>
						<img 
							src={image} 
							alt={`${title} - Image ${index + 1}`}
							class="w-full h-full object-contain"
							loading={index === 0 ? 'eager' : 'lazy'}
						/>
					</div>
				{/each}

				<!-- Gradient overlay for controls -->
				<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
			</div>

			<!-- Navigation arrows -->
			{#if images.length > 1}
				<button
					class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm group"
					on:click={prevSlide}
					aria-label="Previous image"
				>
					<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
					</svg>
				</button>

				<button
					class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm group"
					on:click={nextSlide}
					aria-label="Next image"
				>
					<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</button>
			{/if}

			<!-- Slide indicators -->
			{#if images.length > 1}
				<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
					{#each images as _, index}
						<button
							class="w-3 h-3 rounded-full transition-all duration-200 {index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}"
							on:click={() => goToSlide(index)}
							aria-label={`Go to image ${index + 1}`}
						></button>
					{/each}
				</div>
			{/if}

			<!-- Image counter -->
			{#if images.length > 1}
				<div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
					{currentIndex + 1} / {images.length}
				</div>
			{/if}
		</div>

		<!-- Thumbnail strip for larger screens -->
		{#if images.length > 1 && images.length <= 8}
			<div class="mt-6 hidden md:block">
				<div class="flex justify-center space-x-2 overflow-x-auto pb-2">
					{#each images as image, index}
						<button
							class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 {index === currentIndex ? 'border-blue-500 opacity-100' : 'border-gray-300 opacity-70'}"
							on:click={() => goToSlide(index)}
						>
							<img 
								src={image} 
								alt={`Thumbnail ${index + 1}`}
								class="w-full h-full object-cover"
								loading="lazy"
							/>
						</button>
					{/each}
				</div>
			</div>
		{/if}
		
		<!-- Credits section -->
		{#if credits}
			<div class="mt-4 text-center">
				<p class="text-sm text-gray-600 italic">{credits}</p>
			</div>
		{/if}
	{:else}
		<!-- No images fallback -->
		<div class="aspect-[16/10] md:aspect-[21/9] bg-gray-200 rounded-lg flex items-center justify-center">
			<p class="text-gray-500 text-lg">No images available</p>
		</div>
	{/if}
</div>

<style>
	.carousel-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	@media (max-width: 768px) {
		.carousel-container {
			padding: 1rem 0.5rem;
		}
	}
</style>
