<script lang="ts">
	import ImageCarousel from '$lib/ImageCarousel.svelte';
	import BackButton from '$lib/BackButton.svelte';

	// All available images from the shepherds-dell folder
	const images = [
		'/images/waterfalls/shepherds-dell/_R5A5952.jpeg',
		'/images/waterfalls/shepherds-dell/_R5A5954.jpeg',
		'/images/waterfalls/shepherds-dell/_R5A5956.jpeg',
		'/images/waterfalls/shepherds-dell/8R5A5972.jpeg',
		'/images/waterfalls/shepherds-dell/8R5A5924.jpeg',
		'/images/waterfalls/shepherds-dell/8R5A5927.jpeg',
		'/images/waterfalls/shepherds-dell/_R5A5955.jpeg',
	];

	const description = 'Shepard\'s Dell Falls is a hidden waterfall in the Columbia River Gorge accessible via historic stone bridge.';
</script>

<svelte:head>
	<title>Shepard's Dell Falls - CWF</title>
	<meta name="description" content="Discover Shepard's Dell Falls, a hidden waterfall in the Columbia River Gorge accessible via historic stone bridge." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
	<ImageCarousel 
		{images} 
		title="Shepard's Dell Falls" 
		{description}
	/>
	
	<!-- Additional Information Section -->
	<div class="max-w-4xl mx-auto px-4 py-8">
		<div class="bg-white rounded-lg shadow-lg p-8">
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<h2 class="text-2xl font-bold text-gray-800 mb-4">About the Falls</h2>
					<p class="text-gray-600 leading-relaxed mb-4">
						Shepperds Dell Falls is a graceful two-tiered waterfall tucked into a narrow
						canyon along the Historic Columbia River Highway in Oregon. Fed by Youngs Creek, 
						the upper tier is mostly hidden, while the lower tier drops about 45 feet in a 
						fan-shaped cascade surrounded by mossy basalt walls and lush vegetation. 
						The falls are easily viewed from the historic Shepperds Dell Bridge, which spans the 
						gorge and provides one of the most scenic roadside stops in the Columbia River Gorge.
					</p>
				</div>
				
				<div>
					<h2 class="text-2xl font-bold text-gray-800 mb-4">Visiting Information</h2>
					<div class="space-y-3">
						<div class="flex items-start mb-2">
							<span class="font-semibold text-gray-700 w-24">Location:</span>
							<span class="text-gray-600 text-left flex-1">Historic Columbia River Highway, near milepost 30</span>
						</div>
						<div class="flex items-start mb-2">
							<span class="font-semibold text-gray-700 w-24">Access:</span>
							<span class="text-gray-600 text-left flex-1">Viewable from historic stone bridge</span>
						</div>
						<div class="flex items-start mb-2">
							<span class="font-semibold text-gray-700 w-24">Difficulty:</span>
							<span class="text-gray-600 text-left flex-1">Easy – roadside viewing</span>
						</div>
						<div class="flex items-start">
							<span class="font-semibold text-gray-700 w-24">Best Time:</span>
							<span class="text-gray-600 text-left flex-1">Year-round, peak flow in winter and spring</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- References Section -->
		<div class="mt-8 bg-gray-50 rounded-lg p-6">
			<h3 class="text-lg font-bold text-gray-800 mb-3">References</h3>
			<div class="text-sm text-gray-600 space-y-1">
				<p>• Waterfalls Northwest. <a href="https://www.waterfallsnorthwest.com/waterfall/Shepperds-Dell-Falls-9500" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Shepperd's Dell Falls"</a></p>
				<p>• Travel Oregon. <a href="https://traveloregon.com/things-to-do/destinations/waterfalls/shepperds-dell-falls/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Shepperd's Dell Falls"</a></p>
				<p>• Columbia River Gorge Visitors Association. <a href="https://www.crgva.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Columbia River Gorge"</a></p>
				<p>• Friends of the Columbia Gorge. <a href="https://gorgefriends.org/find-a-hike/shepperds-dell-falls/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"Shepperd's Dell Falls Hike"</a></p>
			</div>
		</div>
		
		<BackButton />
	</div>
</div>
