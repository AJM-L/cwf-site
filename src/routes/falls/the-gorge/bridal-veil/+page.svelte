<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';
  
	const panels = [
	  { title: 'Bridal Veil Falls', bg: `${base}/images/waterfalls/optimized/bridal-veil/cover.webp`, content: 'Bridal Veil Falls' },
	  { title: 'Location', bg: `${base}/images/waterfalls/optimized/bridal-veil/two-falls.webp`, content: 'Located along the Columbia River Gorge in Multnomah County, Oregon, Bridal Veil Falls is a striking two-tiered waterfall that drops approximately 118 to 120 feet over basalt cliffs.' },
	  { title: 'Water Source', bg: `${base}/images/waterfalls/optimized/bridal-veil/8R5A5985.webp`, content: 'The falls are fed by underground springs originating from Larch Mountain, with Bridal Veil Creek serving as the primary water source.' },
	  { title: 'Paper Mill', bg: `${base}/images/waterfalls/optimized/bridal-veil/bridal-veil-paper-mill.webp`, content: 'In the 1880s, one of Oregon\'s earliest paper mills was constructed here, followed by a substantial sawmill operated by the Bridal Veil Falls Lumbering Company.' },
	  { title: 'Company Town', bg: `${base}/images/waterfalls/optimized/bridal-veil/logging-team.webp`, content: 'This industry transformed Downtown Bridal Veil into a bustling company town, marked by clusters of worker cottages, managers\' residences, and communal spaces.' },
	  { title: 'Logging Activity', bg: `${base}/images/waterfalls/optimized/bridal-veil/log-flume.webp`, content: 'Logging activity played a central role; timber from Larch Mountain was transported via a log flume down to Bridal Veil, fostering economic growth but at times reducing the creek to a trickle.' },
	  { title: 'Box Manufacturing', bg: `${base}/images/waterfalls/optimized/bridal-veil/dinner-time.webp`, content: 'After a 1937 fire and depletion of old-growth timber, the site shifted to box manufacturing, producing cheese boxes for Kraft and ammunition boxes during World War II, until mill operations finally ceased in 1960.' },
	  { title: 'Remains', bg: `${base}/images/waterfalls/optimized/bridal-veil/post-office.webp`, content: 'Today, little remains of the original town except the post office and cemetery.' },
	  { title: 'Native Plants', bg: `${base}/images/waterfalls/optimized/bridal-veil/flower.webp`, content: 'The area displays a rich variety of native plants, including camas, lupine, bead lily, trillium, and bleeding heart.' },
	  { title: 'Ecology', bg: `${base}/images/waterfalls/optimized/bridal-veil/plants.webp`, content: 'Despite enduring scars from past logging and the 2017 Eagle Creek Fire, the park remains a haven for diverse flora and fauna typical of the moist, temperate Gorge environment.' },
	  { title: 'Forest', bg: `${base}/images/waterfalls/optimized/bridal-veil/trees.webp`, content: 'The area is covered in a forest of conifers and broadleaf trees. With a beautiful mix of trees, including Douglas-firs, Bigleaf Maples, Western Red Cedar, Western Hemlock, and Red Alder.' },
	  { title: 'Wildlife', bg: `${base}/images/waterfalls/optimized/bridal-veil/cougar.webp`, content: 'A large Cougar lives at the top of the mountain.' },
	  { title: 'Scenic Viewpoint', bg: `${base}/images/waterfalls/optimized/bridal-veil/scenic-viewpoint.webp`, content: 'The falls are located within the Bridal Veil Falls State Scenic Viewpoint, near milepost 28 on the Historic Columbia River Highway, just off Interstate 84 at Exit 28.' },
	  { title: 'Trails', bg: `${base}/images/waterfalls/optimized/bridal-veil/sign.webp`, content: 'The park features both an overlook trail with views of the Columbia River and a lower trail descending to the base of the falls.' },
	  { title: 'Hiking Trail', bg: `${base}/images/waterfalls/optimized/bridal-veil/top.webp`, content: 'There is a partially paved and somewhat steep half-mile trail leading from the parking lot to the falls with plenty of shade, stairs, and switchbacks.' },
	  { title: 'Base of Falls', bg: `${base}/images/waterfalls/optimized/bridal-veil/walls.webp`, content: 'The trail leads directly to the base of the falls, which flow into a small pool surrounded by tall trees and basalt walls.' },
	  { title: 'Mist', bg: `${base}/images/waterfalls/optimized/bridal-veil/crashing.webp`, content: 'The crashing water fills the air with a cold mist, creating a bubble of protection from the summer heat.' }
	];
  
	let scroller: HTMLDivElement;
	let stage: HTMLDivElement;
	let slideEls: HTMLElement[] = [];
  
	let vh = 0;
	let index = 0;           // discrete active index (for controls/ARIA)
	let t = 0;               // fractional progress between index and index+1
	let prefersReducedMotion = false;
  
	// For efficient updates
	let ticking = false;
	let lastScrollTop = -1;
	
	// For wheel event throttling
	let wheelTimeout: number | null = null;
	let wheelDelta = 0;
  
	function getViewportHeight() {
	  // Use visualViewport.height || innerHeight for proper vh calculation
	  return (window.visualViewport?.height ?? window.innerHeight) | 0;
	}
  
	function layout() {
	  vh = getViewportHeight();
	  console.log('Viewport height set to:', vh, 'px');
	  // Re-apply current state after resize
	  scheduleUpdate();
	}
  
	function scheduleUpdate() {
	  if (ticking) return;
	  ticking = true;
	  requestAnimationFrame(update);
	}
  
	function update() {
	  ticking = false;
	  if (!scroller) return;
  
	  const st = scroller.scrollTop;
	  // Debug: log scroll position to verify we're scrolling the right element
	  if (st !== lastScrollTop) {
		console.log('Scroller scrollTop:', st, 'vh:', vh, 'page:', st / vh);
	  }
	  if (st === lastScrollTop && !prefersReducedMotion) return; // nothing changed
	  lastScrollTop = st;
  
	  const page = Math.max(0, Math.min((vh ? st / vh : 0), panels.length - 1));
	  const i = Math.floor(page);
	  const frac = page - i;
  
	  index = i;
	  t = prefersReducedMotion ? 0 : frac;
  
	  // Cross-fade: only current and next are visible
	  for (let j = 0; j < slideEls.length; j++) {
		let opacity = 0;
		if (j === i) opacity = 1 - t;
		else if (j === i + 1) opacity = t;
		slideEls[j].style.opacity = String(opacity);
		// Hit-testing: only the more-visible slide should be interactive (if you need it)
		slideEls[j].style.pointerEvents = opacity >= 0.5 ? 'auto' : 'none';
		slideEls[j].ariaHidden = opacity < 0.05 ? 'true' : 'false'; // don't hide when visually present
	  }
	}
  
	function goTo(target: number) {
	  const clamped = Math.max(0, Math.min(target, panels.length - 1));
	  scroller?.scrollTo({ top: clamped * vh, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
	}
  
	function onKeydown(e: KeyboardEvent) {
	  if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); goTo(index + 1); }
	  else if (['ArrowUp', 'PageUp'].includes(e.key))     { e.preventDefault(); goTo(index - 1); }
	  else if (e.key === 'Home')                          { e.preventDefault(); goTo(0); }
	  else if (e.key === 'End')                           { e.preventDefault(); goTo(panels.length - 1); }
	}
  
	onMount(() => {
	  // Prevent body scrolling - this is crucial for the scroller to work properly
	  document.body.style.overflow = 'hidden';
	  
	  // Build stage slides
	  slideEls = Array.from(stage.querySelectorAll<HTMLElement>('.slide'));
  
	  // Motion pref
	  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
	  prefersReducedMotion = mq.matches;
	  const mqHandler = (ev: MediaQueryListEvent) => { prefersReducedMotion = ev.matches; scheduleUpdate(); };
	  mq.addEventListener?.('change', mqHandler);
  
	  // Initial layout
	  layout();
  
	  // Focus for keyboard control
	  scroller?.focus();
  
	  // Events
	  const onScroll = () => scheduleUpdate();
	  scroller.addEventListener('scroll', onScroll, { passive: true });
	  
	  // Ensure wheel events reach the scroller
	  const onWheel = (e: WheelEvent) => {
		// Prevent default to ensure our scroller handles the wheel event
		e.preventDefault();
		
		// Accumulate wheel delta
		wheelDelta += e.deltaY;
		
		// Clear existing timeout
		if (wheelTimeout) {
		  clearTimeout(wheelTimeout);
		}
		
		// Set threshold for triggering slide change (adjust this value as needed)
		const threshold = 225;
		
		// If we've accumulated enough scroll, trigger the slide change
		if (Math.abs(wheelDelta) >= threshold) {
		  const direction = wheelDelta > 0 ? 1 : -1;
		  const currentPage = Math.round(scroller.scrollTop / vh);
		  const targetPage = currentPage + direction;
		  const clampedTarget = Math.max(0, Math.min(targetPage, panels.length - 1));
		  
		  // Scroll to the target slide
		  scroller.scrollTo({ 
			top: clampedTarget * vh, 
			behavior: prefersReducedMotion ? 'auto' : 'smooth' 
		  });
		  
		  // Reset wheel delta
		  wheelDelta = 0;
		} else {
		  // Set a timeout to reset the wheel delta if no more wheel events
		  wheelTimeout = setTimeout(() => {
			wheelDelta = 0;
			wheelTimeout = null;
		  }, 150);
		}
	  };
	  scroller.addEventListener('wheel', onWheel, { passive: false });
  
	  const onResize = () => layout();
	  window.addEventListener('resize', onResize);
	  window.visualViewport?.addEventListener('resize', onResize);
  
	  // Initial render
	  scheduleUpdate();
  
	  onDestroy(() => {
		// Restore body scrolling when component unmounts
		document.body.style.overflow = '';
		
		// Clear any pending wheel timeout
		if (wheelTimeout) {
		  clearTimeout(wheelTimeout);
		}
		
		scroller.removeEventListener('scroll', onScroll);
		scroller.removeEventListener('wheel', onWheel);
		window.removeEventListener('resize', onResize);
		window.visualViewport?.removeEventListener?.('resize', onResize);
		mq.removeEventListener?.('change', mqHandler);
	  });
	});
  </script>
  
  <style>
	/* Prevent body scrolling - the scroller is the only scrollable area */
	:global(body) {
	  overflow: hidden;
	}
  
	/* Scroller drives the timeline (invisible content) */
	.scroller {
	  position: relative;
	  height: 100vh;
	  height: 100dvh;
	  overflow-y: auto;
	  overscroll-behavior: contain;
	  background: #000; /* behind slides during image loads */
	  outline: none;
	  z-index: 1; /* Ensure scroller is above stage for wheel events */
	  scroll-snap-type: y mandatory;
	}
	.snap-point {
	  width: 1px; /* minimal width, just needs height */
	  scroll-snap-align: start;
	}
  
	/* Fixed stage with stacked slides (no movement, only opacity) */
	.stage {
	  position: fixed;
	  inset: 0;
	  z-index: 0; /* controls will sit above */
	  pointer-events: none;
	}
  
	.slide {
	  position: absolute; inset: 0;
	  display: grid; place-items: end;
	  background-size: cover;
	  background-position: center;
	  opacity: 0;
	  will-change: opacity;
	  contain: paint;
	}
  
	.overlay {
	  position: absolute; inset: 0;
	  background: rgba(0,0,0,.3);
	  pointer-events: none;
	}
  
	.content {
	  position: relative;
	  z-index: 1;
	  max-width: 70ch;
	  padding: 1.5rem;
	  margin: 0 auto 4rem;
	  text-align: center;
	  color: white;
	  text-shadow: 0 2px 12px rgba(0,0,0,.6);
	}
  
	/* Controls */
	.dots {
	  position: fixed; left: 50%; bottom: 1rem; transform: translateX(-50%);
	  display: flex; gap: .5rem;
	  z-index: 10;
	}
	.dots button {
	  width: .6rem; height: .6rem; border-radius: 999px; border: 0; cursor: pointer;
	  background: #cbd5e1; opacity: .8;
	}
	.dots button[aria-current="true"] { background: #fff; opacity: 1; }
  
	.nav {
	  position: fixed; top: 50%; transform: translateY(-50%);
	  border: 0; background: rgba(0,0,0,.25);
	  color: #fff; font-size: 1.5rem; width: 2rem; height: 2rem;
	  line-height: 2rem; text-align: center; border-radius: .5rem; cursor: pointer;
	  z-index: 10;
	  opacity: 0.7;
	  transition: opacity 0.2s ease;
	}
	.nav:hover {
	  opacity: 1;
	  background: rgba(0,0,0,.4);
	}
		.nav.prev { left: 1rem; }
	.nav.next { right: 1rem; }

	.back-button-container {
	  position: fixed;
	  bottom: 1rem;
	  left: 1rem;
	  z-index: 20;
	}

	@media (prefers-reduced-motion: reduce) {
	  .scroller { scroll-behavior: auto; }
	}
  </style>
  
  <!-- The scroll driver -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
	class="scroller"
	bind:this={scroller}
	tabindex="0"
	on:keydown={onKeydown}
	role="application"
	aria-label="Bridal Veil Falls narrative, scroll to progress"
  >
	<!-- Fixed stage with visual slides -->
	<div class="stage" bind:this={stage} aria-live="off">
	  {#each panels as p, i}
		<section
		  class="slide"
		          style={`background-image: url('${p.bg}')`}
        aria-label={p.title}
        aria-hidden="true"
		>
		  <div class="overlay" aria-hidden="true"></div>
		  <div class="content">
			{#if i === 0}
			  <h1 class="text-4xl font-bold">{p.content}</h1>
			{:else}
			  <p class="text-2xl">{p.content}</p>
			{/if}
		  </div>
		</section>
	  {/each}
	</div>
  
	<!-- Snap points for each slide -->
	{#each panels as _, i}
	  <div class="snap-point" style="height: {vh}px;" aria-hidden="true"></div>
	{/each}
  
	

	<!-- Controls (positioned above stage) -->
	<nav class="dots" aria-label="Slides">
	  {#each panels as _, i}
		<button
		  aria-current={i === index ? 'true' : 'false'}
		  aria-label={`Go to slide ${i + 1} of ${panels.length}`}
		  on:click={() => goTo(i)}
		></button>
	  {/each}
	</nav>

	<button class="nav prev" on:click={() => goTo(index - 1)} aria-label="Previous slide" title="Previous slide">‹</button>
	<button class="nav next" on:click={() => goTo(index + 1)} aria-label="Next slide" title="Next slide">›</button>
	
	<!-- Back Button -->
	<div class="back-button-container">
		<BackButton />
	</div>
  </div>
  