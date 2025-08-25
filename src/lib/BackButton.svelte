<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	
	// Determine the appropriate back URL based on current path
	$: backUrl = getBackUrl($page.url.pathname);
	
	function getBackUrl(currentPath: string): string {
		// Remove trailing slash if present
		const path = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
		
		// Split path into segments
		const segments = path.split('/').filter(segment => segment !== '');
		
		// Handle different page types
		if (segments.length === 0) {
			// Home page - no back button needed
			return '';
		}
		
		if (segments.length === 1) {
			// Top level pages like /falls, /the-labyrinth
			return `${base}/`;
		}
		
		if (segments.length === 2) {
			// Second level pages like /falls/the-gorge
			return `${base}/${segments[0]}`;
		}
		
		if (segments.length === 3) {
			// Third level pages like /falls/the-gorge/bridal-veil
			return `${base}/${segments[0]}/${segments[1]}`;
		}
		
		if (segments.length === 4) {
			// Fourth level pages like /the-labyrinth/excellence/stop
			return `${base}/${segments[0]}/${segments[1]}/${segments[2]}`;
		}
		
		// Default fallback
		return `${base}/`;
	}
	
	// Custom label based on current page
	$: backLabel = getBackLabel($page.url.pathname);
	
	function getBackLabel(currentPath: string): string {
		const path = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
		const segments = path.split('/').filter(segment => segment !== '');
		
		if (segments.length === 0) return '';
		
		// Handle specific cases
		if (segments[0] === 'falls') {
			if (segments.length === 1) return '← Back to Home';
			if (segments.length === 2) return '← Back to All Waterfalls';
			if (segments.length === 3) {
				const region = segments[1];
				if (region === 'the-gorge') return '← Back to Columbia River Gorge';
				if (region === 'the-cascades') return '← Back to Cascade Range';
				if (region === 'willamette-valley') return '← Back to Willamette Valley';
			}
		}
		
		if (segments[0] === 'the-labyrinth') {
			if (segments.length === 1) return '← Back to Home';
			if (segments.length === 2) return '← Back to The Labyrinth';
			if (segments.length === 3) return '← Back to Excellence';
		}
		
		if (segments[0] === 'conservation') {
			return '← Back to Home';
		}
		
		// Default fallback
		return '← Back';
	}
</script>

{#if backUrl && backUrl !== $page.url.pathname}
	<div class="text-center">
		<a 
			href={backUrl}
			class="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
		>
			{backLabel}
		</a>
	</div>
{/if}
