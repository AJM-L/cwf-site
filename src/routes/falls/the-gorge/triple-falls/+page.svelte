<script lang="ts">
	import ImageCarousel from '$lib/ImageCarousel.svelte';
	import BackButton from '$lib/BackButton.svelte';
	
	// Triple Falls photo gallery
	const tripleFallsImages = [
		'/images/waterfalls/triple-falls/IMG_7165.jpeg',
		'/images/waterfalls/triple-falls/IMG_7167.jpeg',
		'/images/waterfalls/triple-falls/IMG_7168.jpeg',
		'/images/waterfalls/triple-falls/IMG_7169.jpeg',
		'/images/waterfalls/triple-falls/IMG_7171.jpeg',
		'/images/waterfalls/triple-falls/IMG_7174.jpeg',
		'/images/waterfalls/triple-falls/IMG_7175.jpeg',
		'/images/waterfalls/triple-falls/IMG_7179.jpeg',
		'/images/waterfalls/triple-falls/IMG_7180.jpeg',
		'/images/waterfalls/triple-falls/IMG_7181.jpeg',
		'/images/waterfalls/triple-falls/IMG_7183.jpeg',
		'/images/waterfalls/triple-falls/IMG_7188.jpeg',
		'/images/waterfalls/triple-falls/IMG_7189.jpeg',
		'/images/waterfalls/triple-falls/IMG_7190.jpeg',
		'/images/waterfalls/triple-falls/IMG_7191.jpeg',
		'/images/waterfalls/triple-falls/IMG_7192.jpeg',
		'/images/waterfalls/triple-falls/IMG_7193.jpeg',
		'/images/waterfalls/triple-falls/IMG_7196.jpeg',
		'/images/waterfalls/triple-falls/IMG_7197.jpeg',
		'/images/waterfalls/triple-falls/IMG_7198.jpeg'
	];

	const description = 'Triple Falls on Oneonta Creek is a spectacular three-tiered waterfall located in the Columbia River Gorge. This unique cascade features three distinct drops that create a dramatic display of falling water through a narrow, moss-covered canyon. The falls are nestled in one of the most pristine and secluded areas of the Gorge.';
</script>

<svelte:head>
	<title>Triple Falls (Oneonta Creek) - CWF</title>
	<meta name="description" content="Discover Triple Falls on Oneonta Creek, a spectacular three-tiered waterfall in the Columbia River Gorge's most pristine canyon." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
	<!-- Header Section -->
	<div class="max-w-6xl mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Triple Falls</h1>
			<div class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
				Oneonta Creek
			</div>
			<p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
				{description}
			</p>
		</div>

		<!-- Photo Gallery -->
		<ImageCarousel 
			images={tripleFallsImages}
			title="Triple Falls Photo Gallery"
			description="Explore the stunning beauty of Triple Falls through these photographs capturing the three-tiered cascade in Oneonta Creek."
			credits=""
		/>

		<!-- Information Sections -->
		<div class="grid lg:grid-cols-2 gap-8">
			<!-- About Section -->
			<div class="bg-white rounded-lg shadow-lg p-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">About Triple Falls</h2>
				<p class="text-gray-600 leading-relaxed mb-4">
					Triple Falls is one of the most remarkable waterfalls in the Columbia River Gorge, featuring three 
					distinct streams that cascade down through a narrow, vertical canyon.
				</p>
				<p class="text-gray-600 leading-relaxed mb-4">
					The waterfall is formed by Oneonta Creek, which flows through a deep, narrow 
					canyon in the Gorge. The canyon walls are covered in lush moss and ferns, creating an almost 
					otherworldly environment that feels like stepping into an ancient forest cathedral.
				</p>
				<p class="text-gray-600 leading-relaxed">
					The name "Triple Falls" comes from the three distinct drops that the water makes as it descends 
					through the canyon. Each fall has been carved into the basalt bedrock over thousands of years, 
					creating smooth, sculpted pools and cascades.
				</p>
			</div>

			<!-- Access Information -->
			<div class="bg-white rounded-lg shadow-lg p-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">Access & Trail Information</h2>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Location:</span>
						<span class="text-gray-600">Oneonta Creek, Columbia River Gorge</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Access:</span>
						<span class="text-gray-600">Via Oneonta Gorge trail or via Oneonta Loop trail</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Difficulty:</span>
						<span class="text-gray-600">Moderate</span>
					</div>
					<div class="flex items-start">
						<span class="font-semibold text-gray-700 w-24">Distance:</span>
						<span class="text-gray-600">Approximately 0.8 miles through the canyon or 1.2 miles via the Oneonta Loop trail</span>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">Important Considerations</h3>
				<div class="space-y-3 text-sm text-gray-600">
					<p class="text-gray-600">
						Access may be restricted during certain times of year. 
						Check with the Columbia River Gorge National Scenic Area for current conditions.
					</p>
				</div>
				<div class="space-y-3 text-sm text-gray-600">
					<p class="text-gray-600">
						Canyon is very narrow and steep. Be careful when walking through the canyon.
						Water levels can be high and dangerous.
					</p>
				</div>
			</div>
		</div>

		<!-- Oneonta Creek System -->
		<div class="mt-8 bg-white rounded-lg shadow-lg p-8">
			<h2 class="text-2xl font-bold text-gray-800 mb-4">Oneonta Creek Canyon System</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-bold text-gray-800 mb-3">Unique Ecosystem</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						Oneonta Creek creates a unique ecosystem within the Columbia River Gorge. 
						The narrow canyon creates a microclimate that supports rare plants and maintains year-round 
						cool temperatures and high humidity.
					</p>
					<p class="text-gray-600 leading-relaxed">
						The canyon walls are covered in a thick carpet of moss, creating an almost luminescent green 
						environment. The creek is also home to a variety of fish and other wildlife.
					</p>
				</div>
				<div>
					<h3 class="text-lg font-bold text-gray-800 mb-3">Geological Formation</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						The narrow canyon and falls were carved by Oneonta Creek over thousands of years through 
						layers of Columbia River Basalt. The creek's persistent flow has created smooth, sculpted 
						channels and pools in the rock.
					</p>
					<p class="text-gray-600 leading-relaxed">
						The three-tiered structure of the falls reflects different layers of basalt that the creek 
						has encountered, each offering different resistance to erosion.
					</p>
				</div>
			</div>
		</div>

		<!-- References Section -->
		<div class="mt-8 bg-gray-50 rounded-lg p-6">
			<h3 class="text-lg font-bold text-gray-800 mb-3">References</h3>
			<div class="text-sm text-gray-600 space-y-1">
				<p>• Waterfalls Northwest. <a href="https://www.waterfallsnorthwest.com/waterfall/Triple-Falls-3773" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Triple Falls (Oneonta Creek)"</a></p>
				<p>• Oregon Hikers Field Guide. <a href="https://www.oregonhikers.org/field_guide/Oneonta_Gorge_Hike" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Oneonta Gorge Hike"</a></p>
				<p>• Friends of the Columbia Gorge. <a href="https://gorgefriends.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Columbia River Gorge"</a></p>
				<p>• Columbia River Gorge National Scenic Area. <a href="https://www.fs.usda.gov/crgnsa" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Columbia River Gorge NSA"</a></p>
			</div>
		</div>
		
		<BackButton />
	</div>
</div>
