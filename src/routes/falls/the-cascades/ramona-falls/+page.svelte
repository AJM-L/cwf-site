<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	
	// Trail photos - walking experience
	const trailPhotos = [
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6217.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6218.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6220.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6223.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/_R5A6234.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/_R5A6236.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/_R5A6237.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6242.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6243.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6244.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6245.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6246.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6247.jpeg`,
		`${base}/images/waterfalls/ramona-falls/trail/8R5A6248.jpeg`
	];

	// Falls photos - full screen experience
	const fallsPhotos = [
		`${base}/images/waterfalls/ramona-falls/falls/8R5A6250.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/8R5A6251.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6254.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6255.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6257.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6258.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6261.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6262.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6263.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6264.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6269.jpeg`,
		`${base}/images/waterfalls/ramona-falls/falls/_R5A6273.jpeg`
	];

	let currentFallsPhoto = 0;
	let showFallsGallery = false;

	function nextFallsPhoto() {
		currentFallsPhoto = (currentFallsPhoto + 1) % fallsPhotos.length;
	}

	function prevFallsPhoto() {
		currentFallsPhoto = currentFallsPhoto === 0 ? fallsPhotos.length - 1 : currentFallsPhoto - 1;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!showFallsGallery) return;
		
		if (event.key === 'ArrowRight' || event.key === ' ') {
			nextFallsPhoto();
		} else if (event.key === 'ArrowLeft') {
			prevFallsPhoto();
		} else if (event.key === 'Escape') {
			showFallsGallery = false;
		}
	}

	function handleScroll() {
		if (showFallsGallery) return;
		
		const scrollPosition = window.scrollY + window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		
		// Trigger falls gallery when user scrolls near the end of trail photos
		if (scrollPosition >= documentHeight - 100) {
			showFallsGallery = true;
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
		window.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>Ramona Falls - CWF</title>
	<meta name="description" content="Walk the trail to Ramona Falls and experience this delicate cascade over columnar basalt formations on Mount Hood." />
</svelte:head>

<!-- Back Button positioned at top left -->
<div class="!mt-0 !text-left absolute top-4 left-4 z-20">
	<BackButton />
</div>

<!-- Main Content -->
<div class="bg-white min-h-screen">
	<!-- Header -->
	<div class="pt-20 pb-16 px-4 text-center">
		<h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Ramona Falls</h1>
	</div>

	<!-- Trail Experience -->
	<div class="max-w-6xl mx-auto px-4 pb-40">
		<!-- Trail Photos with Dynamic Positioning -->
		<div class="space-y-40">
			{#each trailPhotos as photo, index}
				<div class="flex justify-center">
					<div class="relative" style="
						width: {index % 3 === 0 ? '80%' : index % 3 === 1 ? '60%' : '70%'};
						margin-left: {(index % 4 === 0 ? 0 : index % 4 === 1 ? 10 : index % 4 === 2 ? 15 : 20) + (Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random())) * 20}%;
						margin-bottom: {index % 2 === 0 ? '15%' : index % 3 === 0 ? '25%' : '20%'};
					">
						<img 
							src={photo} 
							alt="Ramona Falls Trail - Step {index + 1}" 
							class="w-full h-auto rounded-lg shadow-lg"
							style="
								transform: rotate({index % 2 === 0 ? '0deg' : index % 3 === 0 ? '1deg' : '-1deg'});
								object-fit: cover;
								max-height: {index % 2 === 0 ? '70vh' : index % 3 === 0 ? '60vh' : '80vh'};
							"
							loading="lazy"
						/>
					</div>
				</div>
			{/each}
		</div>
		<!-- Add extra spacer at the bottom to increase scroll distance before falls gallery activates -->
		<div style="height: 400px;"></div>
	</div>
</div>

<!-- Full Screen Falls Gallery -->
{#if showFallsGallery}
	<div class="fixed inset-0 bg-black z-50 flex items-center justify-center">
		<!-- Close Button -->
		<button 
			on:click={() => showFallsGallery = false}
			class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
		>
			✕
		</button>

		<!-- Navigation Buttons -->
		<button 
			on:click={prevFallsPhoto}
			class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
		>
			‹
		</button>
		<button 
			on:click={nextFallsPhoto}
			class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
		>
			›
		</button>

		<!-- Current Photo -->
		<div class="relative w-full h-full flex items-center justify-center">
			<img 
				src={fallsPhotos[currentFallsPhoto]} 
				alt="Ramona Falls - Photo {currentFallsPhoto + 1}" 
				class="max-w-full max-h-full object-contain"
			/>
		</div>


	</div>
{/if}
