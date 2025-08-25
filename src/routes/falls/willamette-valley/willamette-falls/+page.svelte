<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Willamette Falls - CWF</title>
	<meta name="description" content="The complete story of Willamette Falls: geological formation, Native American cultural significance, industrial transformation, and the ongoing legal battles for tribal sovereignty." />
</svelte:head>

<div class="min-h-screen bg-gray-50 text-gray-900">
	<header class="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
			<h1 class="font-semibold tracking-tight text-gray-800">Willamette Falls</h1>
		</div>
	</header>

	<main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
		<article class="prose prose-gray max-w-none">
			<h1>Understanding Willamette Falls</h1>
			
			<figure class="my-8">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/Willamette_Falls_Panorama_Aerial_View.webp`} alt="Aerial photograph of Willamette Falls" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">
					<span class="italic">Photo credit: <a href="https://commons.wikimedia.org/w/index.php?title=User:Natotornado789&action=edit&redlink=1" target="_blank" rel="noopener noreferrer">Natotornado789</a></span>
				</figcaption>
			</figure>

			<p>Willamette Falls stands as one of North America's most significant natural features, yet remains largely unknown even to many Oregon residents. Located on the Willamette River between Oregon City and West Linn, approximately 26 miles upstream from Portland, the falls rank as the second-largest waterfall by volume in the United States, with only Niagara Falls surpassing its flow rate of 30,850 cubic feet per second. The horseshoe-shaped falls span 1,500 feet in width and drop 40 feet, creating a natural barrier that has profoundly shaped both the geological landscape and human history of the Pacific Northwest.</p>

			<h2>Geological Formation and Environmental History</h2>

			<h3>The Ancient Landscape</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/8R5A6297.webp`} alt="Geological view of Willamette Falls" class="w-full rounded-lg shadow-lg" />
			</figure>

			<p>The geological story of Willamette Falls begins approximately 15 million years ago during the Miocene epoch, when massive flood basalts of the Columbia River Basalt Group covered vast areas of the Pacific Northwest. The falls occur where the Willamette River crosses the uppermost flood basalt sheet of the Sentinel Bluffs Member of the Grande Ronde Basalt. The Bolton Fault, a significant geological feature in the area, may have served as the starting point for the falls' formation, creating the escarpment that the river now cascades over.</p>

			<h3>The Ice Age Floods: Sculpting the Landscape</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/missoula_floods_nps.webp`} alt="Map showing the extent of Glacial Lake Missoula and flood paths" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Area impacted by Glacial Lake Missoula and the Floods from NPS</figcaption>
			</figure>

			<p>Between 15,000 and 13,000 years ago, the landscape of the Willamette Valley underwent dramatic transformation through a series of cataclysmic events known as the Missoula Floods (also called the Bretz Floods). These floods resulted from the periodic rupture of an ice dam on the Clark Fork River in Montana, which had created Glacial Lake Missoula—a body of water containing more than 500 cubic miles of water, equal in size to modern Lakes Ontario and Erie combined.</p>

			<p>When the ice dam failed catastrophically, water burst forth at rates ten times the combined flow of all the world's rivers, reaching speeds of nearly 65 miles per hour. As these floodwaters emerged from the Columbia River Gorge, they encountered a bottleneck at the narrow gap near Kalama, Washington, causing water to back up and flood the entire Willamette Valley to depths of 300-400 feet above current sea level, reaching as far south as Eugene.</p>

			<p>The floods deposited massive amounts of sediment throughout the valley, creating layers of rich alluvial soil that would later make the Willamette Valley one of the most productive agricultural regions in North America. In some places, these deposits reach depths of 300 feet. The floods also transported enormous glacial erratics—boulders carried by ice from as far away as Montana—which can still be found scattered throughout the valley, including the famous Willamette Meteorite, sacred to the Clackamas people.</p>

			<h2>Native American Cultural Significance</h2>

			<h3>The First Peoples of Willamette Falls</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/Indians-Fish-Willamette-Falls-FSDM2.webp`} alt="Historical illustration of Native fishing platforms at the falls" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Historical illustration of Native fishing platforms at Willamette Falls, circa 1800s</figcaption>
			</figure>

			<p>For thousands of years before European contact, Willamette Falls served as one of the most important cultural and economic centers for Native peoples of the Pacific Northwest. The Clackamas Chinook peoples, particularly the Clowewalla band (also known as the Willamette Band of Tumwaters), maintained permanent villages at the falls, including the Charcowah village on the riverbanks.</p>

			<p>The falls held profound spiritual significance, embedded in the creation stories of the Indigenous peoples. According to Clackamas oral tradition, the ancient hero T'allapus (Coyote) and Meadowlark created the falls specifically so that tribal peoples would have fish to eat all winter. This story, "Coyote Builds Willamette Falls the Magic Fish Trap," demonstrates the deep cultural connection between the falls and tribal identity.</p>

			<h3>Economic and Social Hub</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/salmon_jumping_ralph_eddy_53943.webp`} alt="Salmon jumping up Willamette Falls" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Salmon jumping up Willamette Falls</figcaption>
			</figure>

			<p>The abundance of salmon, steelhead, and Pacific lamprey at the falls created a thriving economic center that attracted tribes from throughout the region. The Clackamas people, who controlled access to the falls, built sophisticated fishing platforms using cedar planks that extended over the cascading water, allowing them to harvest fish with dip nets and spears.</p>

			<p>The Clackamas held resource rights to Willamette Falls and collected tribute from visiting tribes—including the Wasco, Multnomah, Yakama, Tualatin, and Molala—who came to fish or trade for the nutritious air-dried salmon. As recorded by U.S. Military Agent William A. Slacum in 1837:</p>

			<blockquote>
				<p>Keowewallahs, alias Tummewatas [Tumwater] or Willhametts. This tribe, now nearly extinct, was formerly very numerous, and live at the falls of the river, 32 miles from its mouth, on the right bank. They claim the right of fishing at the falls, and exact a tribute from other tribes who come hither in the salmon season (from May till October).</p>
			</blockquote>

			<h3>Catastrophic Decline and Forced Removal</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/paul_kane_65600.webp`} alt="Willamette Falls sketch by Paul Kane" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Willamette Falls, sketch by Paul Kane in about 1846. Courtesy Oreg. Hist.</figcaption>
			</figure>

			<p>The arrival of European and American settlers brought devastating consequences for the Native peoples of Willamette Falls. Beginning in 1829, introduced diseases, particularly malaria, swept through the Native populations. Within a single winter (1829-1830), at least nine-tenths of the Clackamas people perished from illness. By 1851, the Clackamas population had been reduced from an estimated 1,800 people in 1806 to merely 88 individuals.</p>

			<p>The Willamette Valley Treaty of 1855 formalized the removal of Native peoples from their ancestral lands. The last Native longhouse at Willamette Falls, built by the Clackamas Clowewalla, was deliberately burned by unknown persons in 1848. In 1856, the federal government forcibly removed the remaining Clackamas people, including Chief Wacheno, the last Clackamas chief to live at the falls, to the newly established Grand Ronde Reservation, located approximately 60 miles west in Oregon's Coast Range.</p>

			<h2>The Confederated Tribes of Grand Ronde</h2>

			<h3>Formation and History</h3>

			<p>The Confederated Tribes of Grand Ronde Community of Oregon represents a confederation of over 30 tribes and bands from western Oregon, northern California, and southwest Washington, including the descendants of the Clackamas and Clowewalla peoples who originally inhabited Willamette Falls. The Grand Ronde Reservation was established by Executive Order on June 30, 1857, originally encompassing 61,000 acres at the headwaters of the South Yamhill River.</p>

			<p>The reservation's land base was quickly diminished through federal actions. The General Allotment Act of 1887 divided the reservation into individual allotments, and by 1901, U.S. Inspector James McLaughlin declared 25,791 acres "surplus," opening them for sale to non-Native buyers.</p>

			<h3>Termination and Restoration</h3>

			<p>The most devastating blow came with the Western Oregon Termination Act of August 13, 1954, which stripped the tribe of its federal recognition and ended the trust relationship with the federal government. For nearly three decades (1954-1983), Grand Ronde tribal members were, in their own words, "a landless people in their own land."</p>

			<p>Despite termination, the Grand Ronde community persevered, maintaining cultural connections and family bonds. Beginning in the early 1970s, tribal leaders initiated efforts to restore federal recognition. Their persistence was rewarded on November 22, 1983, when President Ronald Reagan signed the Grand Ronde Restoration Act (Public Law 98-165). Five years later, the Grand Ronde Reservation Act of 1988 restored 9,811 acres of the original reservation lands.</p>

			<h2>Industrial Transformation of the Falls</h2>

			<h3>Early Industrial Development</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/west_linn_left_oc_on_roght_crown_zellerbach_mill_66102.webp`} alt="Aerial photo of Willamette Falls industrial development" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Aerial photo from Oreg. Hist. Soc.</figcaption>
			</figure>

			<p>The industrial transformation of Willamette Falls began in earnest following Oregon statehood. In 1866, the Oregon City Paper Manufacturing Company established the first paper mill at the falls, though it failed within a year. Despite this setback, the combination of waterpower and abundant timber proved irresistible to industrialists.</p>

			<p>The pace of development accelerated rapidly:</p>
			<ul>
				<li>1873: The Willamette Falls Locks opened, allowing boats to navigate past the falls</li>
				<li>1888: The Willamette Falls Electric Company (predecessor to Portland General Electric) was formed</li>
				<li>1889: The Willamette Falls Pulp and Paper Company opened on the West Linn side</li>
				<li>1889: Crown Paper Company also began operations at West Linn</li>
			</ul>

			<h3>Pioneering Hydroelectric Development</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/early_electric_power_facility_c1890_006684_s.webp`} alt="Early electric power facility" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Early electric power facility on Willamette Falls, c. 1890. Courtesy Oreg. Hist. Soc. Research Library, 006684</figcaption>
			</figure>

			<p>Willamette Falls holds a unique place in American industrial history as the site of the nation's first long-distance transmission of electricity. On June 3, 1889, the Willamette Falls Electric Company successfully transmitted direct current electricity 14 miles to Portland, followed by alternating current transmission in 1890.</p>

			<p>The original Station A was built directly on the falls in 1889, followed by Station B (now the T.W. Sullivan Plant) on the West Linn side in 1895. Designed by engineer Thomas W. Sullivan, Station B continues to operate today with a capacity of 16,000 kilowatts, making it one of the oldest continuously operating hydroelectric facilities in the United States.</p>

			<h3>The Paper Mill Era</h3>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/willamette_pulp_and_paper_co_and_crown_paper_005755_s.webp`} alt="Willamette Pulp and Power and Crown Paper mills" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">Willamette Pulp and Power and Crown Paper. Courtesy Oreg. Hist. Soc. Research Library, 005755</figcaption>
			</figure>

			<p>The paper mills at Willamette Falls became industrial giants that dominated the regional economy for over a century. The mills pioneered several innovations:</p>
			<ul>
				<li>One of the first sulfite mills west of the Mississippi River (1889)</li>
				<li>Introduction of coated paper process by Crown-Zellerbach (1947)</li>
				<li>Production of newsprint shipped as far as Japan, China, New Zealand, and Australia</li>
			</ul>

			<p>By the mid-20th century, the mills employed thousands of workers and produced hundreds of tons of paper daily. However, environmental concerns, global competition, and changing market conditions led to gradual decline. The Blue Heron Paper Mill on the Oregon City side closed in 2011, while the West Linn Paper Company (later Willamette Falls Paper Company) has undergone multiple ownership changes and continued limited operations until 2024.</p>

			<h2>The Trial</h2>

			<p>In 2018, the confederated tribes of the Grande Ronde built a ceremonial fishing platform at the base of Willamette Falls. The Grande Ronde had been granted authorization by the Oregon Department of State Lands to build and operate the platform. However, in 2022, Portland General Electric (PGE) filed a civil case against the Oregon Department of State Lands in order to gain control of the land around Willamette Falls. PGE claims, "Ownership and control of the Property, including the inherent right through ownership to control persons seeking to access the Property, are required for PGE to meet its obligations of the FERC license."</p>

			<p>Grande Ronde asserts that PGE is misusing the Federal Power Act to gain control over public land and interfere with the state-protected rights of the Grande Ronde, in the interest of other tribes that wish to access the falls through a deal with PGE rather than a deal with the state.</p>

			<blockquote>
				<p>Grand Ronde maintains that PGE's true objective is to secure fee title to the Defendant Property in order to void the Registration, which is opposed by a few other tribes, including those with whom PGE has significant business relationships. Further, by acquiring the Defendant Property, PGE intends to provide its own easement to tribes that do not wish to seek a waterway authorization or fishing rule from the state of Oregon. The evidence will show that PGE is misusing its condemnation authority under the FPA by employing it as a substitute for a quiet title action.</p>
			</blockquote>

			<p>The FPA allows companies to assert control over FERC land under the conditions that:</p>
			<ul>
				<li>the land or property must be necessary for construction, operation or maintenance of the licensed project;</li>
				<li>the condemnation is part of an improvement that, in FERC's judgment, is desirable and justified in the public interest for the purpose of improving or developing a waterway or waterways for the use or benefit of interstate or foreign commerce; and</li>
				<li>the licensee cannot acquire the right to use or damage the land or property through contract or pledge.</li>
			</ul>

			<p>Meaning that PGE must show that the condemnation is necessary for the operation or maintenance of the dam, and it must be executed in conjunction with developing the waterways, in the public interest. Grande Ronde denies PGE's use of "public safety" as a valid defense of their public interest, because it is not adequately in conjunction with the FERC-approved public interest of the project, which is to provide electricity to the public. As a result, Grande Ronde argues, the condemnation is not within the bounds of the law and should be dismissed.</p>

			<p>PGE maintains that it will pursue a perpetual cultural practices easement that would allow up to six native nations to build fishing platforms at the site, and has the support of the Confederated Tribes and Bands of the Yakama Nation, the Confederated Tribes of Umatilla Indian Reservation, the Confederated Tribes of Warm Springs, and the Confederated Tribes of Siletz Indians. In a joint statement offered by leaders of the four tribes reads, "These four tribes, deeply connected to the waters and traditions of the region, unequivocally support PGE's efforts to accommodate indigenous cultural practices in the area of its hydroelectric facility at Willamette Falls. This support is not given lightly. We acknowledge that this arises from a genuine commitment by PGE to honor tribal sovereignty and facilitate access for traditional activities for all tribes connected to the Falls, including fishing and ceremonial gatherings, at this site that holds immeasurable spiritual value for our peoples."</p>

			<p>The statement goes on to say that PGE's cultural easement proposal, "contrasts favorably with the perceived alternative of continued state control."</p>

			<p>The Siletz tribe offered a separate brief, as amicus curiae in the case, which further expressed their support for PGE's condemnation. Their brief opens by stating, "The Siletz Tribe supports the legitimate purposes of PGE's condemnation action, seeking to gain ownership and control of necessary areas for safety and operation of its FERC hydropower facility pursuant to the condemnation authority granted under the Federal Power Act. The basis for condemnation stands on its own merits."</p>

			<p>The trial began in earnest in April 2025, with dramatic moments including an unexpected appearance by PGE CEO Maria Pope, who was not on the witness list but appeared to rebut Grand Ronde's version of what the tribe characterized as a pivotal meeting. By May 2025, the federal judge was preparing to issue a written decision in the case that has captured national attention as a test of tribal sovereignty and corporate power.</p>

			<h2>Tumwata Village</h2>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/8R5A6067.webp`} alt="Tumwata village site" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">The tumwata village site showing ongoing restoration work</figcaption>
			</figure>

			<p>At the heart of this legal battle lies a place of profound cultural significance. Tumwata Village, the traditional name for Willamette Falls, represents far more than just a geographic location to the Confederated Tribes of Grand Ronde. It is the physical embodiment of their creation stories, where according to tribal oral history, Coyote and Meadowlark created the falls specifically for tribal peoples.</p>

			<p>For centuries, Willamette Falls served as a vital economic and cultural hub. The Clackamas and Clowwewalla peoples maintained villages at the site, and tribal members traveled from throughout the region to fish for salmon, steelhead, and lamprey, to trade goods, and to participate in ceremonies. Beginning in 1806, Euro-American visitors including William Clark documented the thriving Native communities and the sophisticated fishery that sustained them.</p>

			<p>This ancient way of life was disrupted by the Willamette Valley Treaty of 1855, which forcibly removed tribal populations from the Falls area to the Grand Ronde Reservation. Despite this displacement, the Grand Ronde Tribe's spiritual and cultural connection to the site persisted across generations.</p>

			<h3>The Historic Return</h3>

			<p>In 2019, the Confederated Tribes of Grand Ronde took a monumental step toward healing historical wounds by purchasing a 23-acre property at Willamette Falls that had been home to the Blue Heron Paper Company mill. This acquisition marked the first time since the 1855 treaty that the tribe regained ownership of land at their sacred site.</p>

			<p>The tribe has developed an ambitious vision for the property, now called tumwata village, that includes environmental and cultural restoration alongside new economic development projects and improved public access. The master plan envisions a space where tribal culture can flourish while also serving the broader community through educational programs, public amenities, housing, and hotel space.</p>

			<h2>Willamette Falls Trust</h2>

			<p>Complicating the tribal sovereignty question at Willamette Falls is the involvement of the Willamette Falls Trust, a nonprofit organization that has been working to create public access to the falls from the West Linn side of the Willamette River. The Trust's Inter-Tribal Public Access Project has garnered significant political support and state funding, but has also fueled tension within the tribal community.</p>

			<p>The Trust was formed with the mission of restoring public access to Willamette Falls, which had been largely cut off due to industrial development over the past century and a half. Their vision includes public walkways, interpretive spaces, cultural events, community programming, viewing structures, and other public amenities that would make the second-largest waterfall by volume in the United States accessible to visitors.</p>

			<p>The Trust has worked to develop partnerships with multiple tribal nations, positioning their project as an inter-tribal effort that would honor the cultural significance of the site while providing educational opportunities for the public. However, this approach has created divisions within the tribal community, as not all tribes agree on the best path forward for managing access to the sacred site.</p>

			<p>The Trust's project centers on acquiring over 40 acres on a portion of Moore's Island at Willamette Falls, which would provide a platform for developing public access infrastructure. This acquisition would require significant financial resources and has become a focal point of state political attention.</p>

			<h2>Christmas Tree Bill and Veto Consideration</h2>

			<p>The political stakes around Willamette Falls reached new heights in June 2025 when the Oregon Legislature included $45 million in state bond funding for the Willamette Falls Trust's Inter-Tribal Public Access Project in House Bill 5006, commonly known as the "Christmas tree" bill due to its collection of diverse spending provisions.</p>

			<p>This $45 million allocation represented the largest single step toward realizing the Trust's vision and was celebrated by supporters as a historic investment in both tribal cultural preservation and public access to Oregon's natural heritage. The funding was designed to help the Trust purchase the property necessary for their project and begin developing the infrastructure for public access.</p>

			<p>However, the allocation also drew criticism from some quarters, particularly from those who argued that state investment in Willamette Falls should center the voices and rights of tribal nations with ancestral ties to the site, rather than flowing through a private nonprofit organization. Representative Rob Kennedy voiced concerns, stating, "Any state investment in land at Willamette Falls must center the voices and rights of Tribal nations with ancestral ties to this sacred site, not a private nonprofit."</p>

			<p>As of August 2025, Governor Tina Kotek was weighing whether to sign or veto the Christmas tree bill, with the Willamette Falls funding being one of the most controversial elements under consideration. The governor's decision carries significant implications not only for the Trust's project but also for the broader question of how Oregon approaches tribal sovereignty and cultural preservation at sacred sites.</p>

			<p>The debate over the funding reflects deeper tensions about tribal governance and self-determination. While the Trust's project has the support of four major tribal nations, the Grand Ronde tribe's opposition raises important questions about whose voice should be prioritized when multiple tribal interests conflict over the same sacred site.</p>

			<h2>Future of the Project</h2>

			<figure class="my-6">
				<img src={`${base}/images/waterfalls/willamette-falls/optimized/8R5A6290.webp`} alt="View of Willamette Falls" class="w-full rounded-lg shadow-lg" />
				<figcaption class="text-sm text-gray-600 mt-2">View of the falls from PGE facility</figcaption>
			</figure>

			<p>As the legal battle between PGE and Grand Ronde awaits a federal court decision, and state officials weigh the future of $45 million in public funding, the ultimate fate of Willamette Falls remains uncertain. The outcome will likely set important precedents for tribal sovereignty, corporate power, and public access to culturally significant sites throughout the Pacific Northwest.</p>

			<p>The case has exposed fractures within the broader tribal community, with relationships between tribes appearing to strain under disagreements about the best approach to managing access to the falls. This internal division complicates what might otherwise be a straightforward question of tribal rights versus corporate interests.</p>

			<p>For the Confederated Tribes of Grand Ronde, the stakes could not be higher. Their fishing platform represents not just a practical means of continuing traditional practices—allowing for the harvest of 15 salmon and steelhead per year along with lamprey fishing—but also a powerful symbol of cultural revitalization and connection to ancestral lands. Grand Ronde leaders worry that placing the falls under private corporate control would give PGE the power to determine "who gets to fish, when, and where," fundamentally altering the relationship between tribal peoples and their sacred site.</p>

			<p>PGE, for its part, maintains that its condemnation action is necessary for the safe operation of its hydroelectric facility and that its proposed cultural practices easement would actually provide more secure access for tribal fishing and ceremonial activities than the current state-managed system. The utility company argues that federal oversight through FERC provides stronger protections than state management, and points to the support of four major tribal nations as evidence that its approach serves tribal interests.</p>

			<p>The federal judge's pending decision will determine whether PGE's condemnation action meets the legal requirements of the Federal Power Act, but the broader questions raised by this case will likely persist regardless of the immediate legal outcome. How should competing tribal claims to the same sacred site be resolved? What role should corporate interests play in managing access to culturally significant locations? How can traditional tribal practices be preserved while also providing public access to important natural and cultural resources?</p>

			<p>Meanwhile, the Grand Ronde tribe continues its work on the tumwata village project, including ongoing demolition of the former paper mill and environmental remediation efforts. Their vision for the site represents a holistic approach to healing the landscape and restoring both ecological and cultural health to Willamette Falls. This long-term project proceeds regardless of the immediate legal battle, demonstrating the tribe's commitment to their role as caretakers of the land.</p>

			<h2>Conclusion: A Convergence of Past and Future</h2>

			<p>The resolution of these competing visions for Willamette Falls will ultimately shape not only the future of this particular site, but also establish important precedents for how Oregon and the broader Pacific Northwest navigate the complex intersection of tribal sovereignty, environmental restoration, corporate interests, and public access in the 21st century. As tribal nations continue to reclaim their role in land management and cultural preservation, cases like this one will likely become increasingly common, requiring new frameworks for balancing competing interests while honoring the special government-to-government relationship between tribes and federal and state authorities.</p>

			<p>The story of Willamette Falls is, in many ways, the story of a landscape shaped by centuries of displacement, industrial exploitation, and environmental degradation, but also by persistence, adaptation, and the ongoing fight for justice and recognition. The falls have witnessed the full arc of human history in the region: from the fishing practices of Native peoples spanning millennia, through the industrial transformation that harnessed their power but blocked public access, to the current moment of reckoning with this complex historical legacy.</p>

			<p>Whatever the outcome of the current legal battles, the falls will continue to flow, carrying with them the legacy and struggles of all who share this land. The water that cascades over the ancient basalt today is the same force that drew Native peoples for thousands of years, powered the industrial development of Oregon, and now stands at the center of debates about cultural preservation, environmental restoration, and social justice in the 21st century.</p>
		</article>
	</main>


	<div class="max-w-7xl mx-auto px-6 py-8">
		<BackButton />
	</div>

	<footer class="border-t border-gray-200">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex items-center justify-between">
			<p>© {new Date().getFullYear()} — CWF Website</p>
			<button class="hover:opacity-70" on:click={() => window.scrollTo({top:0, behavior:'smooth'})}>Back to top</button>
		</div>
	</footer>
	

</div>

<style>
	:global(.prose) {
		max-width: none;
	}
	
	:global(.prose h1) {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 1rem;
		color: #1f2937;
	}
	
	:global(.prose h2) {
		font-size: 1.875rem;
		font-weight: 600;
		line-height: 1.3;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		color: #374151;
		border-bottom: 2px solid #e5e7eb;
		padding-bottom: 0.5rem;
	}
	
	:global(.prose h3) {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.4;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		color: #4b5563;
	}
	
	:global(.prose p) {
		line-height: 1.7;
		margin-bottom: 1rem;
		color: #374151;
	}
	
	:global(.prose blockquote) {
		border-left: 4px solid #3b82f6;
		padding-left: 1rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #4b5563;
		background-color: #f8fafc;
		padding: 1rem;
		border-radius: 0.5rem;
	}
	
	:global(.prose ul) {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}
	
	:global(.prose li) {
		margin-bottom: 0.5rem;
		line-height: 1.6;
		color: #374151;
	}
	
	:global(.prose img) {
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
	
	:global(.prose figure) {
		margin: 2rem 0;
	}
	
	:global(.prose figcaption) {
		font-style: italic;
		margin-top: 0.5rem;
	}
</style>