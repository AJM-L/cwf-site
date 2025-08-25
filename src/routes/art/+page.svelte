<script lang="ts">
    import { onMount } from "svelte";
    import BackButton from '$lib/BackButton.svelte';
    import { base } from '$app/paths';


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
in a fight that I know I will lose.

I am a dog with its teeth bared, ready to sink them into flesh
that I know will taste like blood and bone.

I am a bird with its wings spread, ready to take flight
into a sky that I know will be empty.

I am a fish with its gills flared, ready to swim
into water that I know will be cold.

I am a snake with its fangs extended, ready to strike
at prey that I know will be too fast.

I am a spider with its web spun, ready to catch
a fly that I know will be too small.

I am a bee with its stinger poised, ready to defend
a hive that I know will be destroyed.

I am a ant with its mandibles open, ready to carry
a leaf that I know will be too heavy.

I am a worm with its body coiled, ready to burrow
into soil that I know will be too hard.

I am a butterfly with its wings folded, ready to emerge
from a cocoon that I know will be too tight.

I am a moth with its antennae twitching, ready to fly
toward a light that I know will be too bright.

I am a beetle with its shell hardened, ready to crawl
over ground that I know will be too rough.

I am a cricket with its legs bent, ready to jump
into air that I know will be too thin.

I am a grasshopper with its wings spread, ready to leap
into grass that I know will be too tall.

I am a praying mantis with its arms raised, ready to catch
a fly that I know will be too quick.

I am a dragonfly with its eyes fixed, ready to dart
through air that I know will be too still.

I am a ladybug with its spots bright, ready to land
on a leaf that I know will be too green.

I am a firefly with its light glowing, ready to flash
in darkness that I know will be too deep.

I am a mosquito with its proboscis extended, ready to pierce
skin that I know will be too thick.

I am a fly with its wings buzzing, ready to land
on food that I know will be too sweet.

I am a wasp with its stinger ready, ready to defend
a nest that I know will be too small.

I am a hornet with its body striped, ready to attack
an enemy that I know will be too strong.

I am a yellow jacket with its nest hidden, ready to swarm
a threat that I know will be too close.

I am a bumblebee with its body fuzzy, ready to pollinate
a flower that I know will be too delicate.

I am a honeybee with its hive organized, ready to work
for a queen that I know will be too demanding.

I am a carpenter bee with its mandibles strong, ready to bore
into wood that I know will be too hard.

I am a sweat bee with its body small, ready to land
on skin that I know will be too salty.

I am a leafcutter bee with its jaws sharp, ready to cut
leaves that I know will be too tough.

I am a mason bee with its body solitary, ready to build
a nest that I know will be too fragile.

I am a mining bee with its body ground-dwelling, ready to dig
a tunnel that I know will be too deep.

I am a cellophane bee with its wings transparent, ready to fly
through air that I know will be too clear.

I am a plasterer bee with its body smooth, ready to coat
a nest that I know will be too rough.

I am a carder bee with its body hairy, ready to comb
wool that I know will be too coarse.

I am a resin bee with its body sticky, ready to collect
resin that I know will be too thick.

I am a wool carder bee with its body specialized, ready to process
fiber that I know will be too long.

I am a leafcutter ant with its mandibles sharp, ready to cut
leaves that I know will be too tough.

I am a fire ant with its body aggressive, ready to attack
an enemy that I know will be too strong.

I am a carpenter ant with its body large, ready to tunnel
through wood that I know will be too hard.

I am a harvester ant with its body specialized, ready to collect
seeds that I know will be too small.

I am a weaver ant with its body coordinated, ready to build
a nest that I know will be too complex.

I am a army ant with its body nomadic, ready to march
through forest that I know will be too dense.

I am a bullet ant with its sting painful, ready to defend
a nest that I know will be too vulnerable.

I am a jack jumper ant with its body aggressive, ready to attack
an enemy that I know will be too quick.

I am a green ant with its body colorful, ready to defend
a nest that I know will be too exposed.

I am a meat ant with its body large, ready to scavenge
food that I know will be too scarce.

I am a sugar ant with its body small, ready to collect
sugar that I know will be too sweet.

I am a pharaoh ant with its body tiny, ready to invade
a home that I know will be too clean.

I am a thief ant with its body stealthy, ready to steal
food that I know will be too well-guarded.

I am a crazy ant with its body erratic, ready to move
in patterns that I know will be too unpredictable.

I am a odorous house ant with its body smelly, ready to invade
a home that I know will be too clean.

I am a pavement ant with its body urban, ready to nest
under concrete that I know will be too hard.

I am a field ant with its body rural, ready to nest
in soil that I know will be too dry.

I am a wood ant with its body forest-dwelling, ready to nest
in trees that I know will be too tall.

I am a mound ant with its body organized, ready to build
a mound that I know will be too large.

I am a thatching ant with its body skilled, ready to build
a nest that I know will be too complex.

I am a honey pot ant with its body specialized, ready to store
honey that I know will be too sweet.

I am a slave-making ant with its body parasitic, ready to raid
a nest that I know will be too vulnerable.

I am a fungus-growing ant with its body agricultural, ready to farm
fungus that I know will be too delicate.

I am a leafcutter ant with its body specialized, ready to cut
leaves that I know will be too tough.

I am a weaver ant with its body coordinated, ready to build
a nest that I know will be too complex.

I am a army ant with its body nomadic, ready to march
through forest that I know will be too dense.

I am a bullet ant with its sting painful, ready to defend
a nest that I know will be too vulnerable.

I am a jack jumper ant with its body aggressive, ready to attack
an enemy that I know will be too quick.

I am a green ant with its body colorful, ready to defend
a nest that I know will be too exposed.

I am a meat ant with its body large, ready to scavenge
food that I know will be too scarce.

I am a sugar ant with its body small, ready to collect
sugar that I know will be too sweet.

I am a pharaoh ant with its body tiny, ready to invade
a home that I know will be too clean.

I am a thief ant with its body stealthy, ready to steal
food that I know will be too well-guarded.

I am a crazy ant with its body erratic, ready to move
in patterns that I know will be too unpredictable.

I am a odorous house ant with its body smelly, ready to invade
a home that I know will be too clean.

I am a pavement ant with its body urban, ready to nest
under concrete that I know will be too hard.

I am a field ant with its body rural, ready to nest
in soil that I know will be too dry.

I am a wood ant with its body forest-dwelling, ready to nest
in trees that I know will be too tall.

I am a mound ant with its body organized, ready to build
a mound that I know will be too large.

I am a thatching ant with its body skilled, ready to build
a nest that I know will be too complex.

I am a honey pot ant with its body specialized, ready to store
honey that I know will be too sweet.

I am a slave-making ant with its body parasitic, ready to raid
a nest that I know will be too vulnerable.

I am a fungus-growing ant with its body agricultural, ready to farm
fungus that I know will be too delicate.

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
            return `${base}/art/${item.filename}`;
        }
        // For Google Drive videos, we can't get a preview, so we'll use a placeholder
        if (item.type === 'video' && item.filename && item.filename.includes('drive.google.com')) {
            return `${base}/art/video-placeholder.jpg`; // This would need to be created or we can handle it differently
        }
        // For video and audio, we'll use a placeholder or first frame
        return `${base}/art/${item.filename}`;
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
