<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	
	// Main Ramona Falls photo
	const ramonaFallsPhoto = `${base}/images/cascades/optimized/mt-hood-ramona-falls.webp`;
	
	// Additional photos from cascades (if available)
	const additionalPhotos = [
		`${base}/images/cascades/optimized/_R5A6023.webp`,
		`${base}/images/cascades/optimized/view_from_N_Sister_of_Mt_Wash_3_fingered_jack_mt_jefferson_mt_hoos_022265_s.webp`
	];

	let currentPhoto = 0;
	let showGallery = false;

	function nextPhoto() {
		currentPhoto = (currentPhoto + 1) % additionalPhotos.length;
	}

	function prevPhoto() {
		currentPhoto = currentPhoto === 0 ? additionalPhotos.length - 1 : currentPhoto - 1;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!showGallery) return;
		
		if (event.key === 'ArrowRight' || event.key === ' ') {
			nextPhoto();
		} else if (event.key === 'ArrowLeft') {
			prevPhoto();
		} else if (event.key === 'Escape') {
			showGallery = false;
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
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
		<p class="text-xl text-gray-600 max-w-3xl mx-auto">
			A delicate cascade over columnar basalt formations on Mount Hood, accessible via a scenic trail through old-growth forest.
		</p>
	</div>

	<!-- Main Photo Section -->
	<div class="max-w-6xl mx-auto px-4 pb-20">
		<div class="text-center mb-16">
			<img 
				src={ramonaFallsPhoto} 
				alt="Ramona Falls on Mount Hood" 
				class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
				style="max-height: 80vh; object-fit: cover;"
				loading="lazy"
			/>
		</div>

		<!-- Description -->
		<div class="max-w-4xl mx-auto text-center space-y-6">
			<h2 class="text-3xl font-bold text-gray-800">About Ramona Falls</h2>
			<p class="text-lg text-gray-700 leading-relaxed">
				Ramona Falls is a stunning waterfall located on Mount Hood in the Cascade Range of Oregon. 
				The falls cascade over columnar basalt formations, creating a delicate, fan-like appearance 
				that has made it one of the most photographed waterfalls in the Pacific Northwest.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				The trail to Ramona Falls winds through old-growth forest and offers spectacular views of 
				Mount Hood and the surrounding wilderness. The falls are particularly beautiful in the spring 
				when snowmelt creates the strongest flow, though they remain impressive throughout the year.
			</p>
		</div>

		<!-- Additional Photos -->
		{#if additionalPhotos.length > 0}
			<div class="mt-20">
				<h3 class="text-2xl font-bold text-gray-800 text-center mb-8">Cascade Range Views</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{#each additionalPhotos as photo, index}
						<div class="text-center">
							<img 
								src={photo} 
								alt="Cascade Range view {index + 1}" 
								class="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
								style="max-height: 60vh; object-fit: cover;"
								on:click={() => { currentPhoto = index; showGallery = true; }}
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<!-- Full Screen Gallery -->
{#if showGallery}
	<div class="fixed inset-0 bg-black z-50 flex items-center justify-center">
		<!-- Close Button -->
		<button 
			on:click={() => showGallery = false}
			class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
		>
			✕
		</button>

		<!-- Navigation Buttons -->
		{#if additionalPhotos.length > 1}
			<button 
				on:click={prevPhoto}
				class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
			>
				‹
			</button>
			<button 
				on:click={nextPhoto}
				class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
			>
				›
			</button>
		{/if}

		<!-- Current Photo -->
		<div class="relative w-full h-full flex items-center justify-center">
			<img 
				src={additionalPhotos[currentPhoto]} 
				alt="Cascade Range view {currentPhoto + 1}" 
				class="max-w-full max-h-full object-contain"
			/>
		</div>
	</div>
{/if}
