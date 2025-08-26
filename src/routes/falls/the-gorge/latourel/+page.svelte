<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Latourell Falls - CWF</title>
	<meta name="description" content="Explore Latourell Falls, a towering 200-foot waterfall in Guy W. Talbot State Park within the Columbia River Gorge." />
</svelte:head>

<!-- Back Button -->
<div class="absolute top-4 left-4 z-20">
	<BackButton />
</div>

<!-- Hero Section -->
<div class="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img 
			src={`${base}/images/waterfalls/optimized/latourell/full.webp`} 
			alt="Latourell Falls" 
			class="w-full h-full object-cover opacity-60"
		/>
	</div>
	
	<!-- Content Overlay -->
	<div class="relative z-10 flex items-center justify-center min-h-screen">
		<div class="text-center text-white px-6">
			<h1 class="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Latourell Falls</h1>
			<p class="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
				A towering 200-foot waterfall in Guy W. Talbot State Park, where water crashes onto moss-covered basalt walls
			</p>
		</div>
	</div>
</div>

<!-- Main Content -->
<div class="bg-white">
	<!-- Introduction Section -->
	<section class="py-20 px-6">
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h2 class="text-4xl font-bold text-gray-800 mb-6">The Falls Experience</h2>
					<div class="space-y-4 text-lg text-gray-700">
						<p>
							Latourell Falls is towering and beautiful. It is positioned over a large cliff overhang at the end of a steep valley. You can almost see the falls from the parking lot; it is almost as loud as the cars. You can hear Latourell Falls before you can see it.
						</p>
						<p>
							Entering the valley from the trailhead lets you see the very top of the falls peeking through the leaves. As you get closer, the falls become completely hidden behind the Oaks, Maples, Pines.
						</p>
						<p>
							As you approach the falls, the air cools down, and the sound of water crashing into the rocks swells. Eventually, the trees part to reveal a towering basalt wall, draped in moss, where a steady stream of water drops 200 feet onto the rocks below.
						</p>
						<p>
							The force of the crash launches tiny drops of water into the air, cooling the valley and creating a cloud of mist at the base of the falls.
						</p>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<img 
						src={`${base}/images/waterfalls/optimized/latourell/5.webp`} 
						alt="View of Latourell Falls from the trail" 
						class="w-full h-64 object-cover rounded-lg shadow-lg"
					/>
					<img 
						src={`${base}/images/waterfalls/optimized/latourell/2.webp`} 
						alt="Moss-covered basalt wall of Latourell Falls" 
						class="w-full h-64 object-cover rounded-lg shadow-lg"
					/>
					<img 
						src={`${base}/images/waterfalls/optimized/latourell/1.webp`} 
						alt="Water cascading down the falls" 
						class="w-full h-64 object-cover rounded-lg shadow-lg"
					/>
					<img 
						src={`${base}/images/waterfalls/optimized/latourell/3.webp`} 
						alt="Trail and forest canopy" 
						class="w-full h-64 object-cover rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Guy W. Talbot State Park Section -->
	<section class="py-20 px-6 bg-gray-50">
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="order-2 lg:order-1">
					<img 
						src={`${base}/images/waterfalls/optimized/latourell/old-latourell-house.webp`} 
						alt="Historic Latourell family house" 
						class="w-full h-96 object-cover rounded-lg shadow-lg"
					/>
				</div>
				<div class="order-1 lg:order-2">
					<h2 class="text-4xl font-bold text-gray-800 mb-6">Guy W. Talbot State Park</h2>
					<div class="space-y-4 text-lg text-gray-700">
						<p>
							Latourell Falls is located in Guy W. Talbot State Park. Guy W. Talbot State Park is named after Guy Webster Talbot, an industrialist and key figure in the rise of electricity in the Northwest.
						</p>
						<p>
							Talbot arrived in Portland in 1906 as vice president and general manager of the Astoria & Columbia River Railroad and the Corvallis & Eastern Railroad, later assuming the same leadership roles with the Oregon Electric Railway.
						</p>
						<p>
							Following the sale of the railway, Talbot transitioned into the burgeoning utility sector: he became president of the Portland Gas & Coke Company and Pacific Power & Light Company, and eventually also led the Northwestern Electric Company and the Deschutes Power & Light Company, cementing himself as a principal architect in the development and distribution of electrical power throughout Oregon and the Northwest.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Homesteading Section -->
	<section class="py-20 px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">Homesteading and the Latourells</h2>
			<div class="bg-gray-50 p-8 rounded-lg shadow-lg">
				<div class="space-y-6 text-lg text-gray-700">
					<p>
						Talbot likely purchased much of the land from the Latourell Family. Joseph Latourell was able to take over the land surrounding the falls with the support of the Homestead Acts, which were a series of U.S. laws, beginning with the Homestead Act of 1862, that granted 160 acres of public land to applicants who paid a small fee and agreed to live on and improve the land for five years.
					</p>
					<p>
						After these lands were claimed by the United States, federal land policies took effect. The Homestead Act of 1862 was particularly transformative: it granted 160-acre parcels of public land to individuals, including settlers like Joseph Latourell, provided they paid a nominal fee and improved the property.
					</p>
					<p>
						Its impact was rapid and far-reaching. Opening much of the western United States, including the Columbia River Gorge, to private ownership by Euro-American settlers drastically altered land tenure patterns that had endured for thousands of years.
					</p>
					<blockquote class="text-xl italic p-6 border-l-4 border-green-600 bg-white rounded-r-lg">
						An Act to secure Homesteads to actual Settlers on the Public Domain.
						<br/>
						<span class="not-italic text-sm text-gray-600">— official title of the Homestead Act (May 20, 1862)</span>
					</blockquote>
				</div>
			</div>
		</div>
	</section>

	<!-- Photo Gallery -->
	<section class="py-20 px-6 bg-gray-50">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">The Falls in Detail</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<img 
					src={`${base}/images/waterfalls/optimized/latourell/6.webp`} 
					alt="Mist and water at the base" 
					class="w-full h-80 object-cover rounded-lg shadow-lg"
				/>
				<img 
					src={`${base}/images/waterfalls/optimized/latourell/crashing.webp`} 
					alt="Water crashing at the base of the falls" 
					class="w-full h-80 object-cover rounded-lg shadow-lg"
				/>
				<img 
					src={`${base}/images/waterfalls/optimized/latourell/wall.webp`} 
					alt="Basalt wall with moss" 
					class="w-full h-80 object-cover rounded-lg shadow-lg"
				/>
				<img 
					src={`${base}/images/waterfalls/optimized/latourell/4.webp`} 
					alt="Forest trail near the falls" 
					class="w-full h-80 object-cover rounded-lg shadow-lg"
				/>
				<img 
					src={`${base}/images/waterfalls/optimized/latourell/bridge.webp`} 
					alt="Bridge near Latourell Falls" 
					class="w-full h-80 object-cover rounded-lg shadow-lg"
				/>
				<img 
					src={`${base}/images/waterfalls/optimized/latourell/gorgevalley.webp`} 
					alt="Columbia River Gorge valley" 
					class="w-full h-80 object-cover rounded-lg shadow-lg"
				/>
			</div>
		</div>
	</section>

	<!-- Conclusion Section -->
	<section class="py-20 px-6">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl font-bold text-gray-800 mb-8">A Landscape of History</h2>
			<div class="p-8 rounded-lg">
				<p class="text-xl leading-relaxed text-gray-700">
					Latourell Falls stands as a testament to the complex relationship between nature and human ambition. From its origins as a sacred place for Indigenous peoples, through its transformation into a site of industrial and recreational development under figures like Guy W. Talbot, to its current status within Guy W. Talbot State Park, the falls embody layers of history, ownership, and meaning.
				</p>
				<p class="text-xl leading-relaxed text-gray-700 mt-6">
					Today, as visitors approach the falls through ancient forests and feel the cooling mist at its base, they encounter not just a natural wonder, but a landscape that continues to bear witness to the ongoing negotiation between preservation and use, between the rights of different peoples, and between the power of water and the persistence of stone.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}
</style>
