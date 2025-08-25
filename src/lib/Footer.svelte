<script lang="ts">
	import { base } from '$app/paths';
	
	// Get current year for copyright
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 text-slate-300">
	<div class="max-w-6xl mx-auto px-6 py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Main Info -->
			<div class="md:col-span-2">
				<h3 class="text-white text-lg font-medium mb-4">Columbia River Watershed</h3>
				<p class="text-slate-400 mb-4 leading-relaxed">
					Documenting the waterfalls, ecosystems, and conservation efforts of the Pacific Northwest's most vital watershed.
				</p>
				<div class="flex space-x-4">
					<a href={`${base}/conservation`} class="text-slate-400 hover:text-white transition-colors duration-200">
						Conservation
					</a>
					<a href={`${base}/falls`} class="text-slate-400 hover:text-white transition-colors duration-200">
						Waterfalls
					</a>
					<a href={`${base}/art`} class="text-slate-400 hover:text-white transition-colors duration-200">
						Gallery
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="text-white font-medium mb-4">Regions</h4>
				<ul class="space-y-2 text-sm">
					<li><a href={`${base}/falls/the-gorge`} class="text-slate-400 hover:text-white transition-colors duration-200">Columbia River Gorge</a></li>
					<li><a href={`${base}/falls/the-cascades`} class="text-slate-400 hover:text-white transition-colors duration-200">Cascade Mountains</a></li>
					<li><a href={`${base}/falls/willamette-valley`} class="text-slate-400 hover:text-white transition-colors duration-200">Willamette Valley</a></li>
				</ul>
			</div>

			<!-- Contact/Info -->
			<div>
				<h4 class="text-white font-medium mb-4">About</h4>
				<ul class="space-y-2 text-sm">
					<li><a href={`${base}/conservation`} class="text-slate-400 hover:text-white transition-colors duration-200">Conservation Efforts</a></li>
					<li><a href={`${base}/art`} class="text-slate-400 hover:text-white transition-colors duration-200">Art Collection</a></li>
					<li><a href={`${base}/falls`} class="text-slate-400 hover:text-white transition-colors duration-200">Waterfalls</a></li>
				</ul>
			</div>
		</div>

		<!-- Copyright Bar -->
		<div class="border-t border-slate-800 mt-8 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<div class="text-sm text-slate-400 mb-4 md:mb-0">
					© {currentYear} Columbia River Watershed. All rights reserved.
				</div>
				<div class="text-xs text-slate-500">
					Photography and documentation by A.J. Matheson-Lieber
				</div>
			</div>
		</div>
	</div>
</footer>
