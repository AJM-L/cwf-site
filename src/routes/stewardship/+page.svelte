<script lang="ts">
	import { onMount } from 'svelte';
	import { conservationOrgs, categories, type ConservationOrg } from '$lib/data/conservation';
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';

	
	let selectedCategory = 'All';
	let filteredOrgs = conservationOrgs;

	function filterByCategory(category: string) {
		selectedCategory = category;
		if (category === 'All') {
			filteredOrgs = conservationOrgs;
		} else {
			filteredOrgs = conservationOrgs.filter(org => org.category === category);
		}
	}
</script>

<svelte:head>
	<title>Stewardship - Columbia River Watershed</title>
	<meta name="description" content="Learn about stewardship organizations working to protect the Columbia River Watershed and its diverse ecosystems." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<div class="relative py-24 bg-slate-50">
		<div class="max-w-6xl mx-auto px-6 text-center">
			<h1 class="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
				Environmental Protection and Stewardship Organizations
			</h1>
			<p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
				Organizations working to protect and restore the Columbia River Watershed through research, advocacy, and direct action.
			</p>
		</div>
	</div>

	<!-- Category Filter -->
	<div class="bg-white py-12 border-b border-slate-200">
		<div class="max-w-6xl mx-auto px-6">
			<div class="flex flex-wrap gap-2 justify-center">
				<button 
					on:click={() => filterByCategory('All')}
					class="px-6 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-200 {selectedCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
				>
					All Organizations
				</button>
				{#each categories as category}
					<button 
						on:click={() => filterByCategory(category)}
						class="px-6 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-200 {selectedCategory === category ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Stewardship Organizations Grid -->
	<div class="py-24 bg-white">
		<div class="max-w-6xl mx-auto px-6">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredOrgs as org}
					<div class="bg-slate-50 overflow-hidden group hover:bg-slate-100 transition-colors duration-200">
						<!-- Organization Image -->
						<div class="relative overflow-hidden">
							<img 
								src={`${base}/${org.image}`} 
								alt={org.name} 
								class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute top-4 left-4">
								<span class="bg-slate-900 text-white px-3 py-1 text-xs font-medium tracking-wider uppercase">
									{org.category}
								</span>
							</div>
						</div>

						<!-- Organization Content -->
						<div class="p-8">
							<h3 class="text-xl font-light text-slate-900 mb-4">{org.name}</h3>
							<p class="text-slate-600 mb-6 leading-relaxed text-sm">{org.description}</p>
							
							<!-- Ways to Get Involved -->
							<div class="mb-8">
								<h4 class="text-sm font-medium text-slate-900 uppercase tracking-wider mb-4">Ways to Participate</h4>
								<ul class="space-y-2">
									{#each org.waysToGetInvolved as way}
										<li class="flex items-start gap-3">
											<div class="w-1 h-4 bg-slate-300 flex-shrink-0 mt-1"></div>
											<span class="text-slate-600 text-sm leading-relaxed">{way}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Action Buttons -->
							<div class="space-y-3">
								<!-- Visit Website Button -->
								<a 
									href={org.url} 
									target="_blank" 
									rel="noopener noreferrer"
									class="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-200"
								>
									Visit Website
									<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
									</svg>
								</a>

								<!-- Additional Action Buttons -->
								<div class="grid grid-cols-2 gap-2">
									{#if org.volunteer}
										<a 
											href={org.volunteer} 
											target="_blank" 
											rel="noopener noreferrer"
											class="inline-flex items-center justify-center border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
										>
											Volunteer
										</a>
									{/if}
									{#if org.donate}
										<a 
											href={org.donate} 
											target="_blank" 
											rel="noopener noreferrer"
											class="inline-flex items-center justify-center border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
										>
											Donate
										</a>
									{/if}
									{#if org.newsPage}
										<a 
											href={org.newsPage} 
											target="_blank" 
											rel="noopener noreferrer"
											class="inline-flex items-center justify-center border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
										>
											News
										</a>
									{/if}
									{#if org.emailList}
										<a 
											href={org.emailList} 
											target="_blank" 
											rel="noopener noreferrer"
											class="inline-flex items-center justify-center border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
										>
											Newsletter
										</a>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Impact Section -->
	<div class="py-24 bg-slate-50">
		<div class="max-w-6xl mx-auto px-6">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<!-- Content -->
				<div>
					<h2 class="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">
						Collective Impact
					</h2>
					<p class="text-slate-600 mb-8 leading-relaxed text-lg">
						The health of the Columbia River Watershed depends on coordinated efforts between organizations, communities, and individuals working toward shared environmental goals.
					</p>
					<div class="space-y-6 mb-8">
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Research & Monitoring</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Ongoing scientific research tracking ecosystem health and species populations.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Habitat Restoration</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Active restoration of riparian areas, wetlands, and spawning grounds.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Policy Advocacy</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Advocating for protective policies at local, state, and federal levels.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-1 h-12 bg-slate-300 flex-shrink-0 mt-1"></div>
							<div>
								<h3 class="font-medium text-slate-900 mb-1">Community Education</h3>
								<p class="text-slate-600 text-sm leading-relaxed">Public education programs promoting watershed stewardship.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Image -->
				<div class="relative">
					<img 
						src={`${base}/images/the-gorge/tree-and-river.jpeg`}
						alt="Columbia River and forest" 
						class="w-full aspect-[4/3] object-cover"
					/>
					<div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs">
						Columbia River Gorge
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Call to Action Section -->
	<div class="py-24 bg-slate-900">
		<div class="max-w-4xl mx-auto px-6 text-center">
			<h2 class="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
				Participate in Stewardship
			</h2>
			<p class="text-slate-300 mb-12 leading-relaxed text-lg max-w-3xl mx-auto">
				The success of environmental protection and stewardship requires the participation of individuals, communities, and organizations working together toward shared environmental goals.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="w-12 h-12 bg-slate-700 mx-auto mb-4 flex items-center justify-center">
						<svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
						</svg>
					</div>
					<h3 class="text-lg font-medium text-white mb-2">Volunteer</h3>
					<p class="text-slate-400 text-sm leading-relaxed">Join restoration projects, monitoring programs, and community events.</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-slate-700 mx-auto mb-4 flex items-center justify-center">
						<svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
					<h3 class="text-lg font-medium text-white mb-2">Support</h3>
					<p class="text-slate-400 text-sm leading-relaxed">Provide financial support to stewardship organizations.</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-slate-700 mx-auto mb-4 flex items-center justify-center">
						<svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
						</svg>
					</div>
					<h3 class="text-lg font-medium text-white mb-2">Advocate</h3>
					<p class="text-slate-400 text-sm leading-relaxed">Stay informed and advocate for protective environmental policies.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-slate-900">
		<BackButton />
	</div>
</div>