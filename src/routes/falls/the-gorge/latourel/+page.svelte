<script lang="ts">
	import { onMount } from 'svelte';
	import { currentTheme, chapters } from '$lib/stores';
	import BackButton from '$lib/BackButton.svelte';

	let currentChapter = 0;
	let chapterElements: HTMLElement[] = [];

	$: activeChapter = chapters.find((ch) => ch.id === $currentTheme);

	function formatDateLabel(dateStr: string): string {
		// Supports YYYY, YYYY-MM, YYYY-MM-DD
		if (!dateStr) return '';
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const full = /^\d{4}-\d{2}-\d{2}$/;
		const yearMonth = /^\d{4}-\d{2}$/;
		const yearOnly = /^\d{4}$/;
		if (full.test(dateStr)) {
			const [y, m, d] = dateStr.split('-').map(Number);
			return `${months[m - 1]} ${d}, ${y}`;
		}
		if (yearMonth.test(dateStr)) {
			const [y, m] = dateStr.split('-').map(Number);
			return `${months[m - 1]} ${y}`;
		}
		if (yearOnly.test(dateStr)) return dateStr;
		// Fallback to original string
		return dateStr;
	}

	onMount(() => {
		// Set up intersection observer for chapter detection
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const chapterId = entry.target.id;
						const chapterIndex = chapters.findIndex(ch => ch.id === chapterId);
						if (chapterIndex !== -1) {
							currentChapter = chapterIndex;
							currentTheme.set(chapters[chapterIndex].id);
						}
					}
				});
			},
			{
				threshold: 0.5,
				rootMargin: '-10% 0px -10% 0px'
			}
		);

		// Observe all chapter elements
		chapterElements.forEach(el => {
			if (el) observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="min-h-screen relative">

	{#each chapters as ch, i}
		<section id={ch.id} bind:this={chapterElements[i]} class="min-h-screen relative z-10 flex items-stretch">
			{#if ch.theme.layout === 'hero'}
				<!-- Hero: center-left stacked text with title and photos -->
				<div class="absolute inset-0 opacity-50" style="background-image: url({ch.theme.backgroundImage}); background-size: cover; background-position: center; background-attachment: fixed;"></div>
				<div class="absolute inset-0" style="background: {ch.theme.overlayColor || 'transparent'} opacity-50"></div>
				<div class="container mx-auto px-6 py-16 flex items-center relative z-10">
					<div class="w-full">
						<!-- Title Section -->
						<div class="mb-8 text-center">
							<h1 class="text-5xl md:text-6xl font-bold mb-4" style="color: {ch.theme.textColor};">Latourell Falls</h1>
							<div class="w-24 h-1 mx-auto mb-6" style="background-color: {ch.theme.accentColor};"></div>
						</div>
						
						<!-- Content with Photos -->
						<div class="grid lg:grid-cols-3 gap-8 items-start">
							<!-- Left Photo -->
							<div class="lg:col-span-1 h-100">
								<img src="/images/waterfalls/latourell/5.jpeg" alt="View of Latourell Falls from the trail" class="w-full h-100 object-cover rounded-lg shadow-lg" />
							</div>
							
							<!-- Center Text -->
							<div class="lg:col-span-1 space-y-4 text-lg">
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
							
							<!-- Right Photo -->
							<div class="lg:col-span-1 h-100">
								<img src="/images/waterfalls/latourell/2.jpeg" alt="Moss-covered basalt wall of Latourell Falls" class="w-full h-100 object-cover rounded-lg shadow-lg" />
							</div>
						</div>
						
						<!-- Additional Photos Row -->
						<div class="grid md:grid-cols-3 gap-6 mt-8">
							<div class="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
								<img src="/images/waterfalls/latourell/1.jpeg" alt="Water cascading down the falls" class="w-full h-full object-cover" />
							</div>
							<div class="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
								<img src="/images/waterfalls/latourell/3.jpeg" alt="Trail and forest canopy" class="w-full h-full object-cover" />
							</div>
							<div class="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
								<img src="/images/waterfalls/latourell/6.jpeg" alt="Mist and water at the base" class="w-full h-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			{:else if ch.theme.layout === 'split'}
				<!-- Split: text 5/12 with solid bg; image bleed 7/12; sticky label -->
				<div class="absolute inset-0" style="background-image: url({ch.theme.backgroundImage}); background-size: cover; background-position: center; background-attachment: fixed;"></div>
				<div class="absolute inset-0" style="background: {ch.theme.overlayColor || 'rgba(255,255,255,0.85)'}"></div>
				<div class="grid grid-cols-12 w-full relative z-10">
					<div class="hidden lg:block col-span-1"></div>
					<div class="col-span-12 lg:col-span-5 bg-white/95 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
						<div class="text-xs uppercase tracking-widest text-gray-600 mb-3">Location</div>
						<h2 class="text-4xl font-bold mb-4" style="color: {ch.theme.accentColor};">Guy W. Talbot State Park</h2>
						<div class="h-0.5 mb-6" style="background-color: {ch.theme.ruleColor || ch.theme.accentColor};"></div>
						<p class="text-lg leading-relaxed">Latourell Falls is located in Guy W. Talbot State Park. Guy W. Talbot State Park is named after Guy Webster Talbot, an industrialist and key figure in the rise of electricity in the Northwest. Talbot arrived in Portland in 1906 as vice president and general manager of the Astoria & Columbia River Railroad and the Corvallis & Eastern Railroad, later assuming the same leadership roles with the Oregon Electric Railway. Following the sale of the railway, Talbot transitioned into the burgeoning utility sector: he became president of the Portland Gas & Coke Company and Pacific Power & Light Company, and eventually also led the Northwestern Electric Company and the Deschutes Power & Light Company, cementing himself as a principal architect in the development and distribution of electrical power throughout Oregon and the Northwest.</p>
					</div>
					<div class="col-span-12 lg:col-span-6 relative overflow-hidden opacity-70">
						<!-- Secondary background overlay for right side -->
					</div>
					<div class="hidden lg:block col-span-0 lg:col-span-0"></div>
				</div>
			{:else if ch.theme.layout === 'timeline'}
				<!-- Timeline band: horizontal scroll with cards -->
				<div class="absolute inset-0" style="background-image: url({ch.theme.backgroundImage}); background-size: cover; background-position: center; background-attachment: fixed;"></div>
				<div class="absolute inset-0" style="background: rgba(112, 66, 20, 0.15);"></div>
				<div class="container mx-auto px-6 py-16 relative z-10">
					<p class="text-lg leading-relaxed mb-6">
						As Portland and its surrounding communities expanded and electric technology developed, so too did the demand for light, heat, and electrified transit. In the early 20th century, Talbot’s utilities, including Portland Gas &amp; Coke and Pacific Power &amp; Light, were central figures in a broader competition for control of the Northwest’s energy future. These companies fought for customers, carved out service territories, and helped lay the groundwork for the modern electrical grid. Talbot’s financial success through the expansion of Oregon’s energy infrastructure enabled him to buy a large sector of land in the Columbia River Gorge. The land, which initially served as a private estate, was later donated by the Talbot family to the State of Oregon, becoming what is now Guy W. Talbot State Park.
					</p>
					<div class="overflow-x-auto" style="scroll-snap-type: x mandatory;">
						<div class="flex space-x-6 min-w-max pb-8">
						{#each [
							{ date: '1906-04', dateLabel: '1906-04', title: 'Arrives in Portland; becomes VP and General Manager of the Astoria & Columbia River and Corvallis & Eastern railroads', role: 'Leads day-to-day railroad operations', href: 'https://libraryarchives.metro.net', src: 'L.A. Metro Library & Archive' },
							{ date: '1910-03', dateLabel: '1910-03', title: 'Serving as Vice President and General Manager of the Oregon Electric Railway', role: 'Documented by March 1910', href: 'https://oregonnews.uoregon.edu', src: 'Historic Oregon Newspapers' },
							{ date: '1914', dateLabel: '1914', title: 'Early Talbot gift to the Latourell Falls property noted on-site', role: 'Per park plaque/administrative history', href: 'https://www.npshistory.com/publications/oregon/history/sec5.htm', src: 'NPS Oregon State Parks admin history' },
							{ date: '1915-08', dateLabel: '1915-08', title: 'Named President of Pacific Power & Light (PP&L)', role: 'Documented by August 1915', href: 'https://libraryarchives.metro.net', src: 'L.A. Metro Library & Archive' },
							{ date: '1916-03-09', dateLabel: '1916-03-09', title: 'Holds dual presidencies of Portland Gas & Coke and PP&L', role: 'Concurrent leadership reported', href: 'https://oregonnews.uoregon.edu', src: 'Historic Oregon Newspapers' }, 
							{ date: '1917-11-23', dateLabel: '1917-11-23', title: 'As PP&L president, outlines a financing plan', role: 'Ongoing executive leadership', href: 'https://oregonnews.uoregon.edu', src: 'Historic Oregon Newspapers' },
							{ date: '1929-03-09', dateLabel: '1929-03-09', title: 'First 125-acre state park gift recorded by Oregon State Parks', role: 'Formal record of initial donation', href: 'https://www.npshistory.com/publications/oregon/history/sec5.htm', src: 'NPS Oregon State Parks admin history' }
						] as item}
							<div class="w-80 bg-white/95 p-6 rounded-lg shadow-lg border-l-4" style="border-left-color: {ch.theme.accentColor}; scroll-snap-align: start;">
								<h3 class="font-mono text-sm uppercase mb-2">{formatDateLabel(item.dateLabel)}</h3>
								<h4 class="font-bold mb-2">{item.title}</h4>
								<p class="text-sm mb-2">{item.role}</p>
								<a href={item.href} target="_blank" rel="noopener noreferrer" class="text-xs text-gray-600 underline">Source: {item.src}</a>
							</div>
						{/each}
						</div>
					</div>
				</div>
			{:else if ch.theme.layout === 'narrative'}
				<!-- Two-column narrative with pull-quote -->
				<div class="container mx-auto px-6 py-16">
					<div class="max-w-[65ch] mx-auto">
						<h2 class="text-4xl font-bold mb-8">Guy W. Talbot State Park</h2>
						<div class="grid md:grid-cols-2 gap-10">
							<div>
								<p class="text-lg leading-relaxed mb-6">Talbot's success enabled the purchase of land in the Gorge, later donated to the State of Oregon as Guy W. Talbot State Park.</p>
								<p class="text-lg leading-relaxed">The donation preserved a dramatic landscape and waterfall for public enjoyment and conservation.</p>
							</div>
							<div class="relative">
								<blockquote class="text-2xl italic p-8 border-l" style="border-left-color: {ch.theme.accentColor};">The land was donated to ensure that future generations could experience the same natural wonder.</blockquote>
							</div>
						</div>
					</div>
				</div>
			{:else if ch.theme.layout === 'document'}
				<!-- Document panel look -->
				<div class="absolute inset-0" style="background-image: url({ch.theme.backgroundImage}); background-size: cover; background-position: center; background-attachment: fixed;"></div>
				<div class="absolute inset-0" style="background: rgba(248, 246, 240, 0.85);"></div>
				<div class="container mx-auto px-6 py-16 relative z-10">
					<div class="max-w-4xl mx-auto bg-[#f8f6f0]/95 backdrop-blur-sm p-10 rounded-lg shadow-lg border border-gray-200">
						<h2 class="text-3xl font-bold mb-6">Homesteading and the Latourells</h2>
						<div class="w-full h-px mb-6" style="background-color: {ch.theme.accentColor};"></div>
						<p class="text-lg leading-relaxed mb-6">Talbot likely purchased much of the land from the Latourell Family. Joseph Latourell was able to take over the land surrounding the falls with the support of the Homestead Acts, which were a series of U.S. laws, beginning with the Homestead Act of 1862, that granted 160 acres of public land to applicants who paid a small fee and agreed to live on and improve the land for five years.</p>
						<p class="text-lg leading-relaxed mb-6">After these lands were claimed by the United States, federal land policies took effect. The Homestead Act of 1862 was particularly transformative: it granted 160-acre parcels of public land to individuals, including settlers like Joseph Latourell, provided they paid a nominal fee and improved the property. Its impact was rapid and far-reaching. Opening much of the western United States, including the Columbia River Gorge, to private ownership by Euro-American settlers drastically altered land tenure patterns that had endured for thousands of years.</p>
						<p class="text-lg leading-relaxed mb-6">Over time, additional laws like the Stock-Raising Homestead Act of 1916 further encouraged settlement and exploitation of lands for agriculture or grazing, while large-scale infrastructure developments such as railroads, highways, and, later, hydroelectric projects continued the transformation initiated by earlier dispossession.</p>
						<blockquote class="text-xl italic p-6 border-l mb-6" style="border-left-color: {ch.theme.accentColor};">An Act to secure Homesteads to actual Settlers on the Public Domain.<br/><span class="not-italic text-sm">— official title of the Homestead Act (May 20, 1862) <a href="https://www.archives.gov/milestone-documents/homestead-act" target="_blank" rel="noopener noreferrer">National Archives</a></span></blockquote>
						<div class="text-sm text-gray-600 mt-4"><sup>1</sup> Photo credit: Ian Sane</div>
					</div>
				</div>

			{:else if ch.theme.layout === 'contemplative'}
				<!-- Quiet, contemplative end panel -->
				<div class="absolute inset-0" style="background-image: url({ch.theme.backgroundImage}); background-size: cover; background-position: center; background-attachment: fixed;"></div>
				<div class="absolute inset-0" style="background: {ch.theme.overlayColor || 'rgba(255,255,255,0.7)'}"></div>
				<div class="container mx-auto px-6 py-24 relative z-10">
					<div class="max-w-[70ch] mx-auto text-center bg-white/90 backdrop-blur-sm p-10 rounded-lg shadow-sm">
						<div class="border-t-2 mb-6" style="border-color: {ch.theme.accentColor};"></div>
						<p class="text-xl leading-relaxed">Latourell Falls stands as a testament to the complex relationship between nature and human ambition. From its origins as a sacred place for Indigenous peoples, through its transformation into a site of industrial and recreational development under figures like Guy W. Talbot, to its current status within Guy W. Talbot State Park, the falls embody layers of history, ownership, and meaning. The story of Latourell Falls reflects broader patterns of dispossession, homesteading, and conservation that have shaped the American West, yet it remains deeply rooted in the specific geography of basalt cliffs and cascading water. Today, as visitors approach the falls through ancient forests and feel the cooling mist at its base, they encounter not just a natural wonder, but a landscape that continues to bear witness to the ongoing negotiation between preservation and use, between the rights of different peoples, and between the power of water and the persistence of stone.</p>
					</div>
					<BackButton />
				</div>
			{/if}
		</section>
	{/each}
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
