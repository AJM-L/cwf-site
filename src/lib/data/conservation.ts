export interface ConservationOrg {
	name: string;
	url: string;
	description: string;
	waysToGetInvolved: string[];
	newsPage?: string;
	emailList?: string;
	volunteer?: string;
	donate?: string;
	category: string;
	image: string;
}

// CSV data as a string (we'll parse this)
const csvData = `Name,URL,Description,Ways to Get Involved,News Page,Email List,Volunteer,Donate
Western Rivers Conservancy,https://www.westernrivers.org/,"Western Rivers Conservancy buys land along the West's finest rivers and streams to conserve habitat for fish and wildlife, protect key sources of cold water and provide public access for all to enjoy.","Corporate Partnership, Donate, Newsletter",https://www.cascadeforest.org/news/,https://signup.e2ma.net/signup/1917311/1913787/,,https://www.westernrivers.org/give
Columbia Land Trust,https://www.columbialandtrust.org/,"Conserve and care for the vital lands, waters, and wildlife of the Columbia River region through sound science and strong relationships.","Backyard Program, Corporate Partnership, Donate, Donate Land, Volunteer",https://www.columbialandtrust.org/news/,https://www.columbialandtrust.org/newsletter-signup/,https://www.columbialandtrust.org/news/events/,https://www.columbialandtrust.org/ways-to-give/
Cascade Forest Conservancy,https://www.cascadeforest.org/about/,"the cascade forest conservancy protects and sustains the forests, streams, wildlife, and communities in the heart of the cascades through conservation, education, and advocacy.","Corporate Partnership, Donate, Volunteer",https://www.columbialandtrust.org/news/,https://signup.e2ma.net/signup/1965935/1913787/,https://www.cascadeforest.org/volunteer/,https://www.cascadeforest.org/donate/
The Lower Columbia Estuary Partnership,https://www.estuarypartnership.org/,"The Lower Columbia Estuary Partnership is a non-profit, a National Estuary Program, and a collection of dedicated scientists, educators, and community members who are passionate about the Columbia River.
We focus on the lower 146 miles of the Columbia River, from Bonneville Dam to the Pacific Ocean, including the tidally influenced portions of tributaries in that area. The watershed includes 28 cities, nine counties, and 45 school districts within the states of Oregon and Washington.","Corporate Partnership, Donate, Volunteer",https://www.estuarypartnership.org/news,https://estuarypartnership.app.neoncrm.com/np/clients/estuarypartnership/subscribe.jsp?subscription=8,https://www.estuarypartnership.org/get-involved/volunteering,https://estuarypartnership.app.neoncrm.com/forms/donate
Columbia River Fish and Wildlife Conservation Office,https://www.fws.gov/office/columbia-river-fish-and-wildlife-conservation,"It is the mission of the Columbia River Fish and Wildlife Conservation Office (CRFWCO) to assist in determining the status of imperiled natural stocks, to evaluate management measures for recovery and assist in the recovery of these stocks, and to prevent future listings",Volunteer,,,https://www.fws.gov/office/columbia-river-fish-and-wildlife-conservation/get-involved,
Columbia Riverkeeper,https://www.columbiariverkeeper.org/,"It is the mission of the Columbia River Fish and Wildlife Conservation Office (CRFWCO) to assist in determining the status of imperiled natural stocks, to evaluate management measures for recovery and assist in the recovery of these stocks, and to prevent future listings","Attend Events, Donate, Sign Petitions, Volunteer",https://www.columbiariverkeeper.org/news/,,,
Conservation NW,https://conservationnw.org/,"We protect, connect and restore wildlands and wildlife from the Washington Coast to the British Columbia Rockies.","Corporate Partnership, Donate, Donate Land, Volunteer",https://conservationnw.org/news-updates/,https://conservationnw.org/take-action/email-signup/,https://conservationnw.org/take-action/volunteer/,
SOLVE,https://www.solveoregon.org/,"SOLVE is an environmental nonprofit that began as a grassroots initiative and has grown into a nationally recognized model for volunteer-driven stewardship. Each year, SOLVE mobilizes thousands of volunteers across Oregon and Southwest Washington to clean and restore neighborhoods and natural areas, fostering a culture of environmental care and community pride.","Volunteer",https://www.solveoregon.org/news,,https://www.solveoregon.org/volunteer,
Trust for Public Land,https://www.tpl.org/,"We Believe Everyone Should Have Access to the Outdoors
We create parks and protect land for people, ensuring healthy, livable communities for generations to come.","Corporate Partnership, Donate, Donate Land",https://www.tpl.org/stories,https://www.tpl.org/email-signup,,https://www.tpl.org/support
Oregon Environmental Council,https://oeconline.org/,"Oregon Environmental Council champions equitable, innovative, and collaborative solutions to Oregon's environmental challenges for today and future generations.","Donate, Volunteer",https://oeconline.org/our-impact/,https://oeconline.org/take-action/,,
Oregon Department of Fish and Wildlife,https://myodfw.com/articles/current-volunteer-opportunities,"Protecting and enhancing Oregon's fish and wildlife, and the habitats they use, for the use and enjoyment of present and future generations is at the heart of what we do.",Volunteer,https://myodfw.com/news-releases,https://public.govdelivery.com/accounts/ORDFW/subscriber/new,https://myodfw.com/articles/current-volunteer-opportunities,
Washington Department of Fish and Wildlife,https://wdfw.wa.gov/,"The Washington Department of Fish and Wildlife is dedicated to preserving, protecting, and perpetuating the state's fish, wildlife, and ecosystems while providing sustainable fish and wildlife recreational and commercial opportunities.","Backyard Program, Volunteer",,,https://wdfw.wa.gov/get-involved/volunteer,
The Sierra Club,https://www.sierraclub.org/,The Sierra Club is the most enduring and influential grassroots environmental organization in the United States. We amplify the power of our millions of members and supporters to defend everyone's right to a healthy world.,,,,,
Global Alliance for the Rights of Nature,https://www.garn.org/,"Our members are a diverse network of scientists, attorneys, economists, indigenous leaders, authors, spiritual leaders, business leaders, politicians, actors, homemakers, students, activists: people from all walks of life who are looking to transform our human relationship with our planet.",,,,,
`;

// Image mapping for organizations
const imageMapping: Record<string, string> = {
	'Western Rivers Conservancy': '/images/the-gorge/Columbia_River_(201830373).jpeg',
	'Columbia Land Trust': '/images/the-gorge/tree-and-river.jpeg',
	'Cascade Forest Conservancy': '/images/waterfalls/ramona-falls/trail/8R5A6217.jpeg',
	'The Lower Columbia Estuary Partnership': '/images/the-gorge/COLUMBIA_RIVER_GORGE_BETWEEN_THE_DALLES_AND_THE_HOOD_RIVER_-_NARA_-_548143.jpg',
	'Columbia River Fish and Wildlife Conservation Office': '/images/waterfalls/willamette-falls/july_24/8R5A6295.jpeg',
	'Columbia Riverkeeper': '/images/the-gorge/eastern-gorge.jpg',
	'Conservation NW': '/images/waterfalls/ramona-falls/trail/_R5A6236.jpeg',
	'SOLVE': '/images/waterfalls/bridal-veil/_R5A5986.jpeg',
	'Trust for Public Land': '/images/the-gorge/green.jpeg',
	'Oregon Environmental Council': '/images/waterfalls/shepherds-dell/8R5A5924.jpeg',
	'Oregon Department of Fish and Wildlife': '/images/the-gorge/3 Chinook salmon.jpg',
	'Washington Department of Fish and Wildlife': '/images/the-gorge/tree-wall.jpeg',
	'The Sierra Club': '/images/the-gorge/Deer_and_Pine_Tree-_Columbia_River_Gorge.jpg',
	'Global Alliance for the Rights of Nature': '/images/the-gorge/more-green.jpeg'
};

// Category mapping based on organization focus
const categoryMapping: Record<string, string> = {
	'Western Rivers Conservancy': 'River Protection',
	'Columbia Land Trust': 'Land Conservation',
	'Cascade Forest Conservancy': 'Land Conservation',
	'The Lower Columbia Estuary Partnership': 'River Protection',
	'Columbia River Fish and Wildlife Conservation Office': 'Wildlife Protection',
	'Columbia Riverkeeper': 'River Protection',
	'Conservation NW': 'Wildlife Protection',
	'SOLVE': 'Community Stewardship',
	'Trust for Public Land': 'Land Conservation',
	'Oregon Environmental Council': 'Environmental Advocacy',
	'Oregon Department of Fish and Wildlife': 'Wildlife Protection',
	'Washington Department of Fish and Wildlife': 'Wildlife Protection',
	'The Sierra Club': 'Environmental Advocacy',
	'Global Alliance for the Rights of Nature': 'Environmental Advocacy'
};

function parseCSV(csv: string): ConservationOrg[] {
	// Split by lines but preserve quoted multi-line content
	const lines = csv.trim().split('\n');
	const headers = lines[0].split(',');
	
	// Process data lines, handling multi-line quoted fields
	const organizations: ConservationOrg[] = [];
	let currentLine = '';
	let inQuotes = false;
	let lineIndex = 1; // Start after header
	
	while (lineIndex < lines.length) {
		const line = lines[lineIndex];
		
		if (!inQuotes) {
			// Check if this line starts a quoted field
			const quoteCount = (line.match(/"/g) || []).length;
			if (quoteCount % 2 === 1) {
				// Odd number of quotes means this is a multi-line field
				inQuotes = true;
				currentLine = line;
				lineIndex++;
				continue;
			} else {
				// Single line, process normally
				currentLine = line;
			}
		} else {
			// We're in a multi-line quoted field, append this line
			currentLine += '\n' + line;
			const quoteCount = (line.match(/"/g) || []).length;
			if (quoteCount % 2 === 1) {
				// Odd number of quotes means we're ending the quoted field
				inQuotes = false;
			} else {
				// Still in quoted field, continue to next line
				lineIndex++;
				continue;
			}
		}
		
		// Parse the complete line (single or multi-line)
		const values: string[] = [];
		let current = '';
		let fieldInQuotes = false;
		
		for (let i = 0; i < currentLine.length; i++) {
			const char = currentLine[i];
			if (char === '"') {
				fieldInQuotes = !fieldInQuotes;
			} else if (char === ',' && !fieldInQuotes) {
				values.push(current.trim());
				current = '';
			} else {
				current += char;
			}
		}
		values.push(current.trim());
		
		const name = values[0];
		const waysToGetInvolved = values[3] ? values[3].split(', ').filter(w => w.trim()) : [];
		
		organizations.push({
			name,
			url: values[1] || '',
			description: values[2] || '',
			waysToGetInvolved,
			newsPage: values[4] || undefined,
			emailList: values[5] || undefined,
			volunteer: values[6] || undefined,
			donate: values[7] || undefined,
			category: categoryMapping[name] || 'Environmental Protection',
			image: imageMapping[name] || '/images/the-gorge/Columbia_River_(201830373).jpeg'
		});
		
		lineIndex++;
	}
	
	return organizations.filter(org => org.name && org.url); // Filter out empty entries
}

export const conservationOrgs: ConservationOrg[] = parseCSV(csvData);

export const categories = [...new Set(conservationOrgs.map(org => org.category))];
