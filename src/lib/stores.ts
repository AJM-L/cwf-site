import { writable } from 'svelte/store';

// Global theme store for chapter system
export const currentTheme = writable('chapter-1');

// Chapter configuration
export const chapters = [
    {
        id: 'chapter-1',
        title: 'Latourell Falls: A Towering Cascade in the Columbia Gorge',
        theme: {
            layout: 'hero',
            background: 'bg-white',
            backgroundImage: '/images/waterfalls/optimized/latourell/crashing.webp',
            alt: 'Mist rising at the base of Latourell Falls.',
            textColor: 'text-black',
            accentColor: '#1B4D3E',
            overlayColor: 'white',
            gradientOverlay: true,
            letterSpacing: '0.01em',
            parallax: true
        }
    },
    {
        id: 'chapter-2',
        title: 'Place: Guy W. Talbot State Park',
        theme: {
            layout: 'split',
            background: 'bg-white',
            backgroundImage: '/images/waterfalls/optimized/latourell/8R5A5744 (1).webp',
            alt: 'Trail and canopy near Latourell Falls.',
            textColor: 'text-black',
            accentColor: '#0E3B2E',
            ruleColor: '#0E3B2E'
        }
    },
    {
        id: 'chapter-3',
        title: 'Power & Progress: Guy W. Talbot\'s Career',
        theme: {
            layout: 'timeline',
            background: 'bg-white',
            backgroundImage: '/images/waterfalls/optimized/latourell/Seaside_train_crossing_youngs_bay_1912_OSU_willliamsg_cr.webp',
            alt: 'Passenger train crossing Youngs Bay, 1912.',
            textColor: 'text-black',
            accentColor: '#8B4513',
            sepia: true
        }
    },
    {
        id: 'chapter-5',
        title: 'Homesteads & Latourell Family',
        theme: {
            layout: 'document',
            background: 'bg-gray-50',
            backgroundImage: '/images/waterfalls/optimized/latourell/old-latourell-house.webp',
            alt: 'Historic Latourell family house.',
            textColor: 'text-black',
            accentColor: '#4A5568'
        }
    },

    {
        id: 'chapter-6',
        title: 'Synthesis: Latourell Falls in Context',
        theme: {
            layout: 'contemplative',
            background: 'bg-white',
            backgroundImage: '/images/waterfalls/optimized/latourell/wall.webp',
            alt: 'Basalt wall, moss-draped.',
            textColor: 'text-black',
            accentColor: '#1B4D3E',
            overlayColor: 'rgba(0,0,0,0.2)'
        }
    }
];

// Store for tracking count
export const count = writable<number>(0);

// Store for tracking stop clicks
export const stopClicks = writable<number>(0);
