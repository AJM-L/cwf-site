<script lang="ts">
    import { onMount } from "svelte";
    import BackButton from '$lib/BackButton.svelte';

    onMount(() => {
        console.log('Art gallery loaded');
    });

    // Art gallery items
    const artItems = [
        {
            title: "Showers",
            filename: "8R5A6321.jpeg",
            type: "image",
            description: "Oil on canvas"
        },
        {
            title: "Synthetic Falls",
            filename: "8R5A6318.jpeg",
            type: "image",
            description: "Oil on canvas"
        },
        {
            title: "Discovery",
            filename: "8R5A6316.jpeg",
            type: "image",
            description: "Oil on canvas"
        },
        {
            title: "Situated Landscapes",
            filename: "8R5A6313.jpeg",
            type: "image",
            description: "Oil on canvas"
        },
        {
            title: "Bats",
            filename: "https://drive.google.com/file/d/1GCP38CXOfUwvbSjsqUQIA0G0Pis7wr4J/view?usp=sharing",
            type: "video",
            description: "Video"
        },
        {
            title: "Journeys",
            filename: "https://drive.google.com/file/d/1YMiaMOov-lFFr8VLvDy8_gLQUOM39qCD/view?usp=sharing",
            type: "video", 
            description: "Video"
        },
        {
            title: "Confessions",
            filename: "confessions.mp3",
            type: "audio",
            description: "Audio"
        },
        {
            title: "Sturdy Ford Explorer Windshield",
            type: "text",
            description: "Poem",
            content: `The broken taillight on the bright blue Subaru Outback in front of me
Is broken. Every time the car brakes,
the red light on the left flashes quickly, then goes black.

I pad the gas, inching closer to their bumper–
Imaging myself passing through their dirty rear windshield
waiting for their signal to engage my breaks.

I am a cat with its claws out, ready to engage all of its muscles
in an instant. At least I think that's what cats are supposed to do.

The Subaru drifts too close to the median, pulls right sharply as it reaches the double yellow
I'd pass, but the trees are completely blocking my vision.
So I am just stuck at the front of this river of steel and gasoline, tailing this dam Subaru.

The road curves left, then right, as I make my approach. Then comes the flashing red light, 
then yellow and black arrows, a retaining wall, cracking trees, crushed metal, 
gasoline and smoke.

And then suddenly, you are about 4 stories above the ground,
Watching a silver Ford explorer jump a retaining barrier, and hurl itself into the forest.
The driver has a bitter look on his face, as if he hadn't yet realized he was going over the falls. 

Having grown accustomed to your own skin, you almost felt sorry for him.
A feeling that was quickly washed away by the Grey Camry shooting off the road. 
And then a black 2017 Volkswagen Jetta and a White Tesla Model Y.

Before long, there was a constant stream of multicolored steel, aluminum, and plastic,
Flowing from the cliff's edge. A stream of ravenous spectators dressed in aluminum.
Dripping like oil from broken exhaust pipes; carving their way through the rocks.`
        },
        {
            title: "Dirt",
            type: "text",
            description: "Poem",
            content: `"You are yelling at the wall again–"
Subtle resignation settled behind her smile.
Grey-blue rocks like words,
tumbling at me.

If I had it my way,
I'd have been a killer.
Brick by brick, I'd dismantle
this house, until my worn hands
returned to the soil.

"Are you listening to me?"
But the words came out
too sharp, a strong hand
pulling me back from the grave.

"You were yelling at the wall again."
I was. I couldn't help it.
"I have the painter coming Sunday."
To stretch grey skin over blue walls.

You once told me about a dream you had.
You were watching us from above,
crying in my arms
as I bled out on the ground.

"But it was in the news," you said–
you didn't want me to go–
it made you feel empty.
But alI I felt was the dirt.`
        },
        {
            title: "My Mothers and Fathers",
            type: "text",
            description: "Poem",
            content: `My Mothers and Fathers gathered cedar branches and willow shoots

They braided grasses into thick mats, boiled berries, 

dried roots, and cut strong vines to lash a sturdy raft

They danced until their feet bled into the tall grass,

kissed my forehead, and sent me down the river.

I floated through swift currents and swirling eddies

Blue herons dropped huckleberries and red larvae

blankets of salmon, thick enough to walk across, pushed their way upstream.

Eventually, the water slowed, and the trees' howls dimmed to whispers.

The forests gave way to grasslands, which quickly turned to farmhouses and wheat fields.

Voices, human voices, rushed over my raft like wind. At first playful, then alarmed.

At some point, a thud hit my raft, and a long branch dragged me slowly to the shore.

The man with a soft voice wrapped me in a cotton blanket.

They knew little more about my past or future than I did,

but they were eager to tell me of their own.

Their stories were hazy and unrealistic, but never quite dull.

In time, I learned to make my own. I filled them with talking beavers and singing trees.

I gave names to the mountains. I sank deep into the mud.

My skin thickened into bark, my feet became roots, and my arms turned to branches. 

I invited termites to bury themselves in my skin. I pushed air 

over tough, knotted vocal chords, fading into the chorus of wind.`
        },
        {
            title: "Spider",
            filename: "https://drive.google.com/file/d/1Kab3Tx5jaODTA87ZiHsLgUYhUSkDi8Vn/view?usp=sharing",
            type: "video",
            description: "Video"
        }
    ];

    function getFileType(filename: string): string {
        const ext = filename.split('.').pop()?.toLowerCase();
        if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return 'image';
        if (['mp4', 'mov', 'avi', 'webm'].includes(ext || '')) return 'video';
        if (['mp3', 'wav', 'ogg', 'aac'].includes(ext || '')) return 'audio';
        return 'unknown';
    }

    function getPreviewUrl(item: any): string {
        if (item.type === 'image') {
            return `/art/${item.filename}`;
        }
        // For Google Drive videos, we can't get a preview, so we'll use a placeholder
        if (item.type === 'video' && item.filename && item.filename.includes('drive.google.com')) {
            return '/art/video-placeholder.jpg'; // This would need to be created or we can handle it differently
        }
        // For video and audio, we'll use a placeholder or first frame
        return `/art/${item.filename}`;
    }
</script>

<div class="min-h-screen bg-gray-50">
    <!-- Art Gallery Section -->
    <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Art Collection</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                A curated collection of visual and audio works exploring themes of nature, water, and reflection.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each artItems as item}
                <div 
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onclick={() => {
                        if (item.type === 'video') {
                            // Check if it's a Google Drive link
                            if (item.filename && item.filename.includes('drive.google.com')) {
                                // Open Google Drive link directly in new tab
                                window.open(item.filename, '_blank');
                            } else if (item.filename && item.filename.includes('vimeo.com')) {
                                // Open Vimeo link directly in new tab
                                window.open(item.filename, '_blank');
                            } else {
                                // Open local video in a new tab with video player
                                const videoUrl = `/art/${item.filename}`;
                                const newWindow = window.open('', '_blank');
                                if (newWindow) {
                                    newWindow.document.write(`
                                        <!DOCTYPE html>
                                        <html>
                                        <head>
                                            <title>${item.title}</title>
                                            <style>
                                                body { margin: 0; padding: 20px; background: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                                                video { max-width: 100%; max-height: 90vh; }
                                            </style>
                                        </head>
                                        <body>
                                            <video controls autoplay>
                                                <source src="${videoUrl}" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        </body>
                                        </html>
                                    `);
                                    newWindow.document.close();
                                }
                            }
                        } else if (item.type === 'text') {
                            // Open text in a new tab with formatted display
                            const newWindow = window.open('', '_blank');
                            if (newWindow) {
                                newWindow.document.write(`
                                    <!DOCTYPE html>
                                    <html>
                                    <head>
                                        <title>${item.title}</title>
                                        <style>
                                            body { 
                                                margin: 0; 
                                                padding: 40px; 
                                                background: #f8f9fa; 
                                                font-family: 'Georgia', serif;
                                                line-height: 1.8;
                                                color: #333;
                                            }
                                            .container {
                                                max-width: 800px;
                                                margin: 0 auto;
                                                background: white;
                                                padding: 60px;
                                                border-radius: 8px;
                                                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                                            }
                                            h1 {
                                                text-align: center;
                                                margin-bottom: 40px;
                                                color: #2d3748;
                                                font-size: 2.5em;
                                                font-weight: 300;
                                            }
                                            .poem {
                                                white-space: pre-line;
                                                font-size: 1.1em;
                                                text-align: left;
                                            }
                                        </style>
                                    </head>
                                    <body>
                                        <div class="container">
                                            <h1>${item.title}</h1>
                                            <div class="poem">${item.content}</div>
                                        </div>
                                    </body>
                                    </html>
                                `);
                                newWindow.document.close();
                            }
                        } else {
                            // For images and audio, open directly
                            window.open(`/art/${item.filename}`, '_blank');
                        }
                    }}
                >
                    <div class="aspect-square bg-gray-100 relative overflow-hidden">
                        {#if item.type === 'image'}
                            <img 
                                src={getPreviewUrl(item)} 
                                alt={item.title}
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        {:else if item.type === 'video'}
                            {#if item.filename && item.filename.includes('drive.google.com')}
                                <!-- Google Drive video - show embedded preview -->
                                <div class="w-full h-full relative">
                                    <iframe 
                                        src={item.filename.replace('/view?usp=sharing', '/preview')}
                                        class="w-full h-full pointer-events-none"
                                        frameborder="0"
                                        allowfullscreen
                                    ></iframe>
                                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div class="bg-black bg-opacity-30 rounded-full p-2">
                                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l8-5-8-5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            {:else}
                                <!-- Local video -->
                                <video 
                                    src={getPreviewUrl(item)}
                                    class="w-full h-full object-cover"
                                    preload="metadata"
                                    muted
                                >
                                    <track kind="captions" />
                                </video>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="bg-black bg-opacity-50 rounded-full p-3">
                                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 5v10l8-5-8-5z"/>
                                        </svg>
                                    </div>
                                </div>
                            {/if}
                        {:else if item.type === 'audio'}
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.617a1 1 0 011.617.794zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                    </svg>
                                    <p class="text-sm text-gray-600">Audio File</p>
                                </div>
                            </div>
                        {:else if item.type === 'text'}
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
                                <div class="text-center p-4">
                                    <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                                    </svg>
                                    <p class="text-sm text-gray-600">Poem</p>
                                </div>
                            </div>
                        {/if}
                    </div>
                    
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                        <p class="text-gray-600 text-sm">{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 py-8">
        <BackButton />
    </div>
</div>
