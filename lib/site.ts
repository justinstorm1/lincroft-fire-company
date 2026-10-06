// All site copy lives here, taken from the current lfc10.org.

export const site = {
  name: "Lincroft Fire Company",
  station: "MTFD Station 10",
  town: "Middletown Township, NJ",
  founded: 1932,
  address: {
    street: "601 Newman Springs Road",
    city: "Lincroft, NJ 07738",
  },
  phone: { display: "(732) 747-5295", href: "tel:+17327475295" },
  facebook: "https://www.facebook.com/groups/158099767573973",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=601+Newman+Springs+Road,+Lincroft,+NJ+07738",
  mapEmbed:
    "https://maps.google.com/maps?q=601+Newman+Springs+Road,+Lincroft,+NJ+07738&z=15&output=embed",
  donationEmail: "funddrive@lfc10.org",
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/officers", label: "Officers" },
  { href: "/members", label: "Members" },
  { href: "/recognition", label: "Recognition" },
  { href: "/contact", label: "Contact" },
]

export const mission =
  "At Lincroft Fire Company, we are dedicated to protecting lives and property in our community. We are Station #10 of the 11 stations in the Middletown Township Fire Department, our mission is to provide skilled firefighting and emergency response services with professionalism and compassion."

export const schedule = [
  {
    title: "Business meeting",
    when: "1st Thursday",
    time: "8:00 PM",
  },
  {
    title: "Training drill",
    when: "3rd Thursday",
    time: "7:30 PM",
  },
  {
    title: "Sunday drill",
    when: "Sunday after the business meeting",
    time: "9:00 AM",
  },
]

export const quickFacts = [
  { value: "1932", label: "Organized in May 1932" },
  { value: "10", label: "Station 10 of 11 in the MTFD" },
  { value: "2,400", label: "Residences in our first-due area" },
  { value: "125", label: "Businesses we protect" },
]

export const volunteerPitch =
  "We are all volunteers from the community just like you! Our firefighters are trained to the same standards as the full-time paid professionals. Many of the tasks at the firehouse are administrative and don't require firefighting skills. We welcome new volunteers over the age of 18."

export type Officer = { title: string; name: string | null }

export const officerGroups: {
  title: string
  description: string
  officers: Officer[]
}[] = [
  {
    title: "LFC Line Officers",
    description: "Lead the company on the fireground and in training.",
    officers: [
      { title: "Captain", name: "Sam Fowler" },
      { title: "1st Lieutenant", name: "Anthony Russo" },
      { title: "2nd Lieutenant", name: "Patrick Basil" },
      { title: "3rd Lieutenant", name: "Paul Lenskold" },
      { title: "Chief Engineer", name: "Rob Recker" },
      { title: "1st Asst. Engineer", name: "John E. Fowler" },
      { title: "2nd Asst. Engineer", name: "Erik Pedersen" },
      { title: "3rd Asst. Engineer", name: "Jacob Stoddard" },
      { title: "4th Asst. Engineer", name: null },
    ],
  },
  {
    title: "MTFD Chief Officers",
    description: "Command the Middletown Township Fire Department.",
    officers: [
      { title: "Chief", name: "Daniel Kelly" },
      { title: "Deputy Chief", name: "Kevin Morrissey" },
      { title: "1st Asst. Chief", name: "Jakob Lawrence III" },
      { title: "2nd Asst. Chief", name: "Jim Abbes" },
      { title: "3rd Asst. Chief", name: "Dave D'Arcy" },
    ],
  },
  {
    title: "LFC Executive Officers",
    description: "Run the business side of the fire company.",
    officers: [
      { title: "President", name: "Mike Daneman, Sr." },
      { title: "Vice President", name: "Kristen Clarke" },
      { title: "Recording Secretary", name: "Jordan Davis" },
      { title: "Treasurer", name: "Mike Navarro" },
      { title: "Financial Secretary", name: "Dan Dunn, Sr." },
      { title: "LOSAP Secretary", name: "Mark Sanpietro" },
      { title: "Doc. Secretary", name: "Maria Dunn" },
      { title: "Jr. Member Ex. Board", name: "Jemel Daniels" },
    ],
  },
]

export const memberPhoto = {
  frontRow: [
    "Jack Fowler",
    "Dennis Fowler",
    "Bill Verange",
    "George Richdale",
    "Mike Daneman, Sr.",
    "Len Hodgins",
  ],
  backRow: [
    "Glen Morehead",
    "Rob Magliulo",
    "Rob Recker",
    "Paul Lenskold",
    "Greg Solari",
    "Ryan Clarke",
    "Mike Nimon",
    "Sam Fowler",
    "Jamie Grampp",
    "Anthony Russo",
    "Patrick Basil",
    "Mike Daneman, Jr.",
    "Ryan DeCarolis",
    "Derrick Doherty",
    "Mike Navarro",
    "Mark Sanpietro",
  ],
}

export const history = {
  intro: [
    "The Lincroft Fire Company was organized in May of 1932 by a group of enthusiastic and persistent individuals who saw the need for fire protection in the growing residential area of greater Lincroft.",
    "This section of Middletown Township is referred to as our primary response area between the Garden State Parkway, Everett Road, the Swimming River and the Swimming River Reservoir. The Lincroft community was previously supported by Middletown Fire Company (MTFD Station 8), River Plaza Hose Company Number 1 (MTFD Station 9), Holmdel Fire Company and the Westside Fire Company of Red Bank.",
    "Robert Cook of Tinton Falls was one of the primary movers in organizing the Lincroft Fire Company. He would later help organize Northside Engine Company of Tinton Falls.",
    "Lincroft Fire Company joined the Middletown Township Fire Department in 1934 as Station 10. The Middletown Township Fire Department (MTFD) is now comprised of eleven fire companies, the MTFD Fire Academy, MTFD Air Unit, MTFD Special Service Unit and MTFD Fire Police Unit. MTFD has over 40 pieces of apparatus, over 400 active firefighters, and is recognized as one of the world's largest all volunteer fire departments.",
  ],
  coverage: [
    "Presently some of the more notable properties that Lincroft Fire Company protect include Brookdale Community College, Christian Brothers Academy, Monmouth County Park System's Thompson Park and Sunnyside Recreation Area, Memorial Sloan Kettering, One River Centre, Luftman Towers and Pavilion, one hundred twenty-five businesses and 2,400 residences.",
    "Since the Lincroft Fire Company was formed in 1932, the community has undergone significant growth in both residential and commercial properties. The response area now includes Brookdale Community College, Christian Brothers Academy, Lincroft Elementary School, St. Leo the Great Elementary School and Oak Hill Academy plus several pre-school facilities.",
    "Corporations such as AT&T, Lucent Technologies, Telcordia Technologies, Avaya and many other office buildings have been built in the Lincroft Fire Company response area over the years. In addition to the commercial properties, Bamm Hollow Country Club, Thompson County Park, Sunnyside Recreation Area along with a few Township parks for youth baseball, soccer and other recreation activities have been developed here.",
    "Over the years, four senior citizen residential facilities have also been constructed in Lincroft. Luftman Towers and De La Salle Hall were built in the 70's and Sunrise Assisted Living and Luftman Pavilion in the 2000's. Combined, they are home to more than three hundred seniors.",
    "The Lincroft Fire Company also responds to vehicle fires and other emergencies on the Garden State Parkway and provides backup support to neighboring communities when needed. We have been dispatched to municipalities throughout the State of New Jersey including Red Bank, Shrewsbury, Holmdel, Colts Neck, Tinton Falls, Sea Bright, Long Branch, Asbury Park, and Woodbridge when requested for mutual aid.",
  ],
  firehouse: [
    "The lot where the firehouse stands was purchased from Jenny E. C. Layton. The original building was built in 1936, and the first mortgage for the building was $5,500.00.",
    "The firehouse was designed by Oscar Silverstone of Brooklyn, and was built by Edward S. Klausner. Additions were added in 1960 for our present engine bay and 1987 for the tower ladder bay.",
  ],
  funding: [
    "Until the purchase of the 1987 Seagrave Aerial truck, all Middletown Township Fire Department companies had to raise the funds to purchase their apparatus. Presently, the Township of Middletown purchases the apparatus and some of our equipment. They also provide funds for the apparatus and equipment maintenance.",
    "For many years, the fire company prepared and served dinners to raise funds. Due to the tremendous efforts to run these events and declining profits, the dinners were canceled in 1986. The fire company now relies on a direct mail fund drive to our residences and a friendly visit for business and residents who had not responded to our fund drive appeal. The fire company also receives a small financial subsidy from the Township of Middletown for general operating costs and insurance.",
  ],
  friends: [
    "The Lincroft Fire Company is fortunate to have a very dedicated Ladies Auxiliary that performs fund raising events, coordinates social activities and supports the firefighters at large structure fires with refreshments. We are very grateful for everything they do!",
    "The fire company interacts regularly with our neighboring companies within the Middletown Township Fire Department and our surrounding communities for mutual aid.",
    "The Lincroft Fire Company has a long time relationship with the Lincroft First Aid & Rescue Squad. We support the squad on motor vehicle crashes, and any rescue situation where we can assist. The squad is also dispatched along with the fire company for all major fire calls. The Lincroft First Aid Squad was originally organized by members of the Lincroft Fire Company in 1953 and have continued a strong bond ever since.",
    "There are notable people in the greater Lincroft area who have been very helpful over the years, three who stand out. Geraldine Thompson was an amazing philanthropist, known for her generosity to charities of which the Lincroft Fire Company was a recipient. Her support over the years helped make our fire company what it is today. Additionally, Martha and Terry Daverio, former owners of the Historic Lincroft Inn. For many years they supported the Lincroft Fire Company through their generous contributions and support of our fund raising efforts. The Lincroft Fire Company held many years of memorable awards dinners at the Lincroft Inn. They were more than gracious hosts; they were true friends of the fire company.",
  ],
}

export const timeline = [
  { year: "1932", text: "Lincroft Fire Company organized in May." },
  {
    year: "1934",
    text: "Joins the Middletown Township Fire Department as Station 10.",
  },
  {
    year: "1936",
    text: "Original firehouse built at 601 Newman Springs Road.",
  },
  {
    year: "1953",
    text: "Members organize the Lincroft First Aid & Rescue Squad.",
  },
  { year: "1960", text: "Present engine bay added." },
  { year: "1987", text: "Tower ladder bay added." },
]

export const apparatus = [
  "1933 Brockway Engine",
  "193? Packard Hose Car",
  "1941 Pirsch Engine on White Chassis",
  "1954 Great Eastern Engine",
  "1954 Oren Engine on White Chassis",
  "1966 Mack Engine",
  "1966 Dodge Brush Truck",
  "1974 Young Engine",
  "1979 Dodge Brush Truck",
  "1987 Seagrave 100' Aerial Ladder Truck",
  "1991 Pierce Engine",
  "2002 E-One Quint Tower Ladder",
  "2003 Ford F450 Brush Truck",
  "2022 E-One Typhoon Engine",
]

export const chiefs = [
  {
    year: "1944",
    name: "James Hennehand",
    note: "The first chief officer from Lincroft, who replaced Henry Carney when he was called up to the armed services.",
  },
  {
    year: "1954",
    name: "Garrett Corson",
    note: "Replaced Gerald Dominion, who died in the line of duty.",
  },
  {
    year: "1963",
    name: "John C. Fowler",
    note: "Credited with saving the old Leonardo High School when one wing was destroyed in March of 1963.",
  },
  {
    year: "1974",
    name: "George C. Richdale",
    note: "One of the founders of the Middletown Township Fire Academy, now considered one of the premier emergency services training facilities in the State.",
  },
  {
    year: "1985",
    name: "Austin B. (Bud) McKnight",
    note: "Our fifth chief from Lincroft.",
  },
  {
    year: "1996",
    name: "Dennis W. Fowler",
    note: "The third generation in his family to serve as chief of the department.",
  },
  {
    year: "2007",
    name: "William D. Kennelly, Jr.",
    note: "Served proudly while also working as a police officer in Middletown.",
  },
  {
    year: "2018",
    name: "Ryan M. Clarke",
    note: "Completed his term and was later elected as a township committeeman.",
  },
]

export const donation =
  "Your support and contributions will enable us to maintain our training and equipment. Your generous donation will go a long way to fund our mission."
