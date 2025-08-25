<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.css';
	import { count } from '$lib/stores';
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
	
	let confessionsAudio: HTMLAudioElement | null = null;
	let audioInitialized = false;

	onMount(() => {
		// Initialize confessions audio element
		confessionsAudio = new Audio('/Audio/confessions.mp3');
		
		// Set initial volume
		confessionsAudio.volume = 0.0;
		
		// Set to loop
		confessionsAudio.loop = true;
		
		// Add error handling for audio loading
		confessionsAudio.addEventListener('error', (e) => {
			console.error('Confessions audio error:', e);
		});
		
		// Add load event listener
		confessionsAudio.addEventListener('canplaythrough', () => {
			console.log('Confessions audio loaded successfully');
		});
		
		// Preload audio file
		confessionsAudio.load();
		
		// Start confessions audio but muted initially
		confessionsAudio.play().catch(e => console.log('Confessions audio autoplay blocked:', e));
		
		audioInitialized = true;
		
		// Subscribe to count changes
		const unsubscribe = count.subscribe((currentCount: number) => {
			if (!audioInitialized || !confessionsAudio) return;
			
			console.log('Count changed to:', currentCount);
			console.log('Confessions volume:', confessionsAudio.volume);
			
			if (currentCount === 0) {
				// Initial state: no audio
				confessionsAudio.volume = 0.0;
			} else if (currentCount >= 8) {
				// Final state: only confessions
				confessionsAudio.volume = 0.6;
				confessionsAudio.play().catch(e => console.log('Audio play failed:', e));
			} else {
				// Transition state: fade in confessions
				const progress = currentCount / 8; // 0 to 1
				confessionsAudio.volume = Math.min(0.6, progress * 0.6); // Scale to max 0.6
				
				console.log('Transition progress:', progress);
				console.log('New confessions volume:', confessionsAudio.volume);
				
				// Ensure confessions is playing during transition
				confessionsAudio.play().catch(e => console.log('Audio play failed:', e));
			}
		});
		
		// Cleanup on unmount
		return () => {
			unsubscribe();
			if (confessionsAudio) {
				confessionsAudio.pause();
				confessionsAudio = null;
			}
		};
	});
</script>

{@render children()}
<Footer />
