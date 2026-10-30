export const CATEGORIES = [
  { id: 'all', name: 'All Collections', count: 142 },
  { id: 'competitive', name: 'Competitive Examinations', count: 38 },
  { id: 'academics', name: 'School & Higher Secondary', count: 26 },
  { id: 'tech', name: 'Computer Science & Systems', count: 29 },
  { id: 'business', name: 'Economics & Business Strategy', count: 21 },
  { id: 'humanities', name: 'Humanities, Law & History', count: 18 },
  { id: 'science', name: 'Pure Sciences & Mathematics', count: 24 },
  { id: 'craft', name: 'Research Craft & Skill Development', count: 16 }
];

export const RESOURCES = [
  {
    id: 'res-1',
    title: 'Constitutional Foundations of India: An Analytical Commentary',
    subtitle: 'From the Constituent Assembly Debates to Landmark 21st-Century Precedents',
    author: 'Prof. Raghavan S. Iyengar & Dr. Ananya Sen',
    institution: 'National Law School & Constitutional Research Guild',
    category: 'humanities',
    categoryLabel: 'Humanities, Law & History',
    tier: 'Free Preview',
    isFreePreview: true,
    pages: 420,
    readTime: '8.5 hrs',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#183D32',
    rating: 4.96,
    readersCount: 2840,
    edition: '3rd Revised Monograph (2026)',
    description: 'An authoritative, primary-source synthesis exploring the structural tensions between fundamental rights, directive principles, and basic structure doctrine. Crafted for civil services aspirants, jurisprudence scholars, and independent citizens.',
    tableOfContents: [
      { chapter: 1, title: 'The Philosophical Architecture of the Preamble', pages: '1-38', duration: '45 mins' },
      { chapter: 2, title: 'Federalism in Tension: Union-State Financial Dynamics', pages: '39-84', duration: '55 mins' },
      { chapter: 3, title: 'Evolution of Article 21 & the Right to Digital Privacy', pages: '85-142', duration: '75 mins' },
      { chapter: 4, title: 'Emergency Provisions & Constitutional Safeguards', pages: '143-198', duration: '60 mins' },
      { chapter: 5, title: 'The Judicial Review Doctrine Post-Kesavananda Bharati', pages: '199-286', duration: '90 mins' },
      { chapter: 6, title: 'Constitutional Morality in 21st Century India', pages: '287-420', duration: '110 mins' }
    ],
    tags: ['UPSC Mains', 'Constitutional Law', 'Judiciary', 'Indian Polity', 'Legal Philosophy'],
    keyTakeaways: [
      'Line-by-line textual comparative analysis of original debates',
      'Doctrinal charts detailing basic structure evolution',
      'Primary case notes from Supreme Court constitutional benches'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 1: The Philosophical Architecture of the Preamble',
      openingQuote: '"A Constitution is not merely a lawyer’s document, it is a vehicle of Life, and its spirit is always the spirit of Age." — Dr. B.R. Ambedkar',
      paragraphs: [
        'When the Constituent Assembly gathered in the winter of 1946, the challenge was not merely legal draughtsmanship; it was the metaphysical reconciliation of ancient civilizational pluralism with the egalitarian machinery of an uncompromising democratic republic.',
        'The Preamble serves as the conceptual portal to the entire constitutional edifice. Unlike typical statutory prefaces that perform ornamental introductions, the Indian Preamble operates as an interpretive compass. As Chief Justice Sikri famously noted in the seminal Kesavananda Bharati verdict, the Constitution ought to be read and construed in the luminous light of the grand and noble vision expressed in the Preamble.',
        'Sovereignty in the Indian context is fundamentally popular, locating the fountainhead of all authority in "We, the People." This stands in conscious departure from parliamentary sovereignty in Westminster or monarchical constitutionalism. Here, parliament is a creature of the Constitution, strictly circumscribed by substantive constitutional limitations.',
        'The juxtaposition of "Liberty of thought, expression, belief, faith and worship" alongside "Justice: social, economic and political" establishes a conscious moral hierarchy. Dr. Ambedkar forcefully argued that political democracy could not endure unless it was rooted in the fertile soil of social democracy — recognizing liberty, equality, and fraternity not as isolated gems, but as an indivisible trinity.'
      ],
      commentaryNote: 'Archival Note: The Objective Resolution moved by Pandit Jawaharlal Nehru on December 13, 1946 provided the foundational DNA that would subsequently crystallize into this timeless declaration.'
    }
  },
  {
    id: 'res-2',
    title: 'Distributed Systems & Consensus: Architecture in Practice',
    subtitle: 'Raft, Paxos, Vector Clocks, and Fault-Tolerant System Design',
    author: 'Karthik Balasubramanian',
    institution: 'Bangalore Systems Engineering Circle',
    category: 'tech',
    categoryLabel: 'Computer Science & Systems',
    tier: 'Vault Pass',
    isFreePreview: false,
    pages: 360,
    readTime: '7.2 hrs',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#20251F',
    rating: 4.92,
    readersCount: 3120,
    edition: '2026 Edition',
    description: 'A deeply rigorous dive into distributed consensus, storage topologies, eventual consistency models, and the engineering tradeoffs required to build planetary-scale backend systems from first principles.',
    tableOfContents: [
      { chapter: 1, title: 'The Physics of Latency & Time Synchronization', pages: '1-42', duration: '50 mins' },
      { chapter: 2, title: 'State Machine Replication & Leader Election in Raft', pages: '43-108', duration: '80 mins' },
      { chapter: 3, title: 'Vector Clocks, CRDTs, and Conflict Resolution', pages: '109-174', duration: '70 mins' },
      { chapter: 4, title: 'Partition Tolerance: The Real Meaning of the CAP Theorem', pages: '175-236', duration: '65 mins' },
      { chapter: 5, title: 'Log-Structured Merge Trees & Storage Engines', pages: '237-310', duration: '85 mins' },
      { chapter: 6, title: 'Hardening Distributed Systems Against Network Chaos', pages: '311-360', duration: '55 mins' }
    ],
    tags: ['Distributed Systems', 'Backend Engineering', 'Go / Rust', 'System Design', 'Algorithms'],
    keyTakeaways: [
      'Interactive state machine diagrams with step-by-step consensus flow',
      'Production incident post-mortems from top Indian tech unicorns',
      'Real-world benchmark suite and fault-injection scenarios'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 2: State Machine Replication & Leader Election in Raft',
      openingQuote: '"There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton',
      paragraphs: [
        'At the core of fault-tolerant distributed systems lies the state machine replication paradigm. If identical deterministic state machines process the identical sequence of inputs starting from the identical initial state, they will inevitably arrive at the identical output state.',
        'The difficulty, of course, is that networks are asynchronous, packets are dropped, clocks drift unpredictably, and servers crash without prior warning. The Raft consensus algorithm decomposes this intractable problem into three self-contained sub-problems: leader election, log replication, and safety.',
        'Time in Raft is divided into discrete epochs known as terms. Each term is identified by an monotonically increasing integer. If a follower node receives no communication from the leader within its randomized election timeout (typically 150ms to 300ms), it assumes the leader has perished and transitions to candidate status.',
        'The candidate votes for itself and broadcasts RequestVote RPCs. If it receives a majority quorum, it establishes leadership. The mathematical elegance of the quorum intersection property guarantees that no two leaders can ever be concurrently elected for the identical term.'
      ],
      commentaryNote: 'Production Insight: In multi-region deployments across Mumbai and Hyderabad, network partitions must be insulated with split-brain prevention guards before commit acknowledgements.'
    }
  },
  {
    id: 'res-3',
    title: 'Modern Indian Macroeconomics & Monetary Policy',
    subtitle: 'Inflation Targeting, Fiscal Federalism, and Capital Account Dynamics',
    author: 'Dr. Meenakshi Sundaram & Rajeshwar Rao',
    institution: 'Department of Applied Economics & Policy Guild',
    category: 'business',
    categoryLabel: 'Economics & Business Strategy',
    tier: 'Free Preview',
    isFreePreview: true,
    pages: 310,
    readTime: '6.0 hrs',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#183D32',
    rating: 4.88,
    readersCount: 1980,
    edition: '2026 Academic Monograph',
    description: 'An empirical and analytical evaluation of India’s economic evolution: flexible inflation targeting framework, external sector resilience, public debt sustainability, and banking sector balance sheets.',
    tableOfContents: [
      { chapter: 1, title: 'The Architecture of the Monetary Policy Committee (MPC)', pages: '1-45', duration: '45 mins' },
      { chapter: 2, title: 'Transmission Mechanism: Repo Rate to Bank Lending Rates', pages: '46-95', duration: '50 mins' },
      { chapter: 3, title: 'External Headwinds: Exchange Rates & Forex Reserve Buffers', pages: '96-150', duration: '60 mins' },
      { chapter: 4, title: 'Fiscal Deficit vs Capital Expenditure in Indian Budgets', pages: '151-210', duration: '65 mins' },
      { chapter: 5, title: 'The Digital Public Infrastructure (DPI) Economic Multiplier', pages: '211-265', duration: '55 mins' },
      { chapter: 6, title: 'Pathways to a High-Income Indian Republic', pages: '266-310', duration: '50 mins' }
    ],
    tags: ['RBI Grade B', 'UPSC Indian Economy', 'Monetary Policy', 'Finance', 'Macroeconomics'],
    keyTakeaways: [
      'Comprehensive RBI balance sheet unpacking with visual cashflow waterfalls',
      'Structural comparison between pre-2016 and post-2016 inflation dynamics',
      'Detailed study on India UPI and Digital Rupee velocity impacts'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 1: The Architecture of the Monetary Policy Committee',
      openingQuote: '"Price stability is the best guarantee for sustained growth and social equity in a developing economy."',
      paragraphs: [
        'Prior to the historic monetary policy framework agreement in 2015, the Reserve Bank of India operated under a multiple indicator approach. This multi-objective balancing act frequently resulted in persistent, entrenched retail inflation that eroded the real purchasing power of Indian households.',
        'The transition to a statutory 4% (+/- 2%) Consumer Price Index (CPI) target under the institutional auspices of the Monetary Policy Committee marked a structural paradigm shift. The committee consists of six members: three internal RBI officials including the Governor, and three eminent external scholars appointed by the Union Government.',
        'The beauty of the institutional design lies in its transparency mandate. Following every bi-monthly resolution, the minutes containing individual member statements and voting rationale are placed in the public domain within fourteen days, anchoring market expectations.'
      ],
      commentaryNote: 'Policy Highlight: The core vs headline CPI divergence in India is uniquely vulnerable to seasonal food price shocks (tomatoes, onions, pulses), demanding innovative supply-side monitoring.'
    }
  },
  {
    id: 'res-4',
    title: 'Classical Mechanics & Geometric Relativity',
    subtitle: 'Lagrangian Formalism, Symplectic Geometry, and Spacetime Curvature',
    author: 'Prof. Vikramaditya Sen',
    institution: 'Institute for Theoretical Sciences & Mathematical Guild',
    category: 'science',
    categoryLabel: 'Pure Sciences & Mathematics',
    tier: 'Vault Pass',
    isFreePreview: false,
    pages: 480,
    readTime: '11.0 hrs',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#183D32',
    rating: 4.97,
    readersCount: 1650,
    edition: '4th Edition (2025)',
    description: 'A masterly bridge connecting Newtonian vector mechanics to variational principles, Noether’s theorem, Hamiltonian phase-space flows, and Einstein’s geometric formulation of gravitational spacetime.',
    tableOfContents: [
      { chapter: 1, title: 'The Principle of Least Action & D’Alembert’s Principle', pages: '1-60', duration: '75 mins' },
      { chapter: 2, title: 'Continuous Symmetries & Conservation Laws via Noether', pages: '61-125', duration: '80 mins' },
      { chapter: 3, title: 'Hamiltonian Mechanics & Canonical Transformations', pages: '126-210', duration: '95 mins' },
      { chapter: 4, title: 'Differential Geometry on Smooth Manifolds', pages: '211-300', duration: '110 mins' },
      { chapter: 5, title: 'Riemann Curvature & The Einstein Field Equations', pages: '301-395', duration: '120 mins' },
      { chapter: 6, title: 'Geodesic Deviation, Black Holes & Gravitational Waves', pages: '396-480', duration: '115 mins' }
    ],
    tags: ['Physics', 'GATE Physics', 'Calculus of Variations', 'General Relativity', 'Mathematics'],
    keyTakeaways: [
      'Complete derivation sets with tensor index notation step-by-step',
      'Historical correspondence between Emmy Noether, Einstein, and Hilbert',
      'Phase space vector field visualizations'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 1: The Principle of Least Action',
      openingQuote: '"Nature is thrifty in all its actions." — Pierre Louis Maupertuis',
      paragraphs: [
        'Why does a ray of light bend when traversing from air into water? Why does a pendulum oscillate in an arc rather than an arbitrary contour? Classical mechanics viewed through Newtonian lenses interprets these phenomena through pushing forces and reactive counter-forces.',
        'Yet there exists a vastly deeper, teleological beauty in the Lagrangian framework. A physical system does not merely respond instantaneously to local tensions; it chooses the path that renders the action functional stationary with respect to small variations.',
        'The action S is the time integral of the Lagrangian L = T - V. When we vary the generalized coordinates q(t) with fixed endpoints, the Euler-Lagrange equations emerge not as empirical postulates, but as the inevitable mathematical consequence of stationary action.'
      ],
      commentaryNote: 'Mathematical Note: Symplectic geometry reveals that Hamiltonian time-evolution is a continuous volume-preserving flow in 2n-dimensional phase space, enshrining Liouville theorem.'
    }
  },
  {
    id: 'res-5',
    title: 'Advanced Organic Reaction Mechanisms & Synthesis',
    subtitle: 'Stereochemical Control, Frontier Molecular Orbitals, and Retrosynthesis',
    author: 'Dr. Devika Mukherjee',
    institution: 'Chemical Sciences Academic Alliance',
    category: 'academics',
    categoryLabel: 'School & Higher Secondary',
    tier: 'Free Preview',
    isFreePreview: true,
    pages: 340,
    readTime: '6.8 hrs',
    coverImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#B69A65',
    rating: 4.91,
    readersCount: 4210,
    edition: '2nd Monograph',
    description: 'Built specifically for Class 12 board toppers, advanced chemistry aspirants, and collegiate researchers. Demystifies electron pushing, pericyclic reactions, Woodward-Hoffmann rules, and multi-step retrosynthetic logic.',
    tableOfContents: [
      { chapter: 1, title: 'Frontier Molecular Orbital (FMO) Theory in Practice', pages: '1-50', duration: '55 mins' },
      { chapter: 2, title: 'Stereoelectronic Effects: Anomeric & Felkin-Anh Models', pages: '51-110', duration: '65 mins' },
      { chapter: 3, title: 'Pericyclic Reactions & Woodward-Hoffmann Selection Rules', pages: '111-175', duration: '75 mins' },
      { chapter: 4, title: 'Asymmetric Enolate Chemistry & Catalytic Aldol Additions', pages: '176-240', duration: '70 mins' },
      { chapter: 5, title: 'Cross-Coupling Catalysis: Suzuki, Heck & Buchwald-Hartwig', pages: '241-295', duration: '60 mins' },
      { chapter: 6, title: 'Retrosynthetic Disconnections of Complex Natural Products', pages: '296-340', duration: '55 mins' }
    ],
    tags: ['Class 12 Advanced', 'Organic Chemistry', 'Stereochemistry', 'Synthesis', 'FMO Theory'],
    keyTakeaways: [
      'Over 200 curved-arrow mechanistic steps color-coded for clarity',
      'Step-by-step Felkin-Anh stereochemical prediction heuristics',
      'Syntheses of bioactive alkaloids with disconnection trees'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 2: Stereoelectronic Effects & Felkin-Anh Control',
      openingQuote: '"Structure determines reactivity, but stereochemistry governs destiny."',
      paragraphs: [
        'When a nucleophile approaches a chiral carbonyl compound possessing a stereocenter at the alpha position, simple steric crowding models frequently fail to predict the diastereomeric ratio with fidelity.',
        'The Felkin-Anh model succeeds because it accounts for stereoelectronic orbital stabilization. The largest group (L) at the alpha center aligns perpendicular to the carbonyl pi plane to maximize hyperconjugative overlap between the sigma* C-L orbital and the pi* C=O antibonding orbital.',
        'As the nucleophile attacks along the Dunitz-Bürgi angle of roughly 107 degrees, it encounters minimal torsional strain with the small group (S) rather than the medium group (M), giving rise to overwhelming diastereofacial selectivity.'
      ],
      commentaryNote: 'Laboratory Heuristic: In cases featuring alpha-oxygen or nitrogen substituents, chelation control with divalent metals such as Mg2+ or Ti4+ completely flips stereochemical preference.'
    }
  },
  {
    id: 'res-6',
    title: 'The Art of Rigorous Research: Method, Writing & Argument',
    subtitle: 'From Formulating Research Questions to Peer-Reviewed Scholarly Monographs',
    author: 'Dr. Siddharth Vardharajan & Dr. Rohini Guha',
    institution: 'Scholarly Writing & Academic Research Fellowship',
    category: 'craft',
    categoryLabel: 'Research Craft & Skill Development',
    tier: 'Free Preview',
    isFreePreview: true,
    pages: 290,
    readTime: '5.5 hrs',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#183D32',
    rating: 4.95,
    readersCount: 2310,
    edition: 'New 2026 Edition',
    description: 'An essential primer for independent scholars, graduate students, and young researchers across humanities and sciences. Covers critical reading, bibliographic rigor, quantitative reasoning, and persuasive academic prose.',
    tableOfContents: [
      { chapter: 1, title: 'Dissecting Academic Literature: Reading with a Scalpel', pages: '1-42', duration: '40 mins' },
      { chapter: 2, title: 'Formulating Hypotheses and Defensible Problem Statements', pages: '43-88', duration: '50 mins' },
      { chapter: 3, title: 'Quantitative Evidence vs Qualitative Narrative Consistency', pages: '89-140', duration: '55 mins' },
      { chapter: 4, title: 'The Mechanics of Scholarly Paragraphs: Cohesion & Flow', pages: '141-196', duration: '60 mins' },
      { chapter: 5, title: 'Citation Ethics, Plagiarism & Archival Integrity', pages: '197-242', duration: '45 mins' },
      { chapter: 6, title: 'Navigating Peer Review & Intellectual Resilience', pages: '243-290', duration: '45 mins' }
    ],
    tags: ['Academic Writing', 'Research Methodology', 'Critical Thinking', 'Thesis Preparation', 'Independent Scholars'],
    keyTakeaways: [
      'Annotated examples of winning fellowship proposals',
      'Checklist for eliminating academic fluff, passive voice, and weak verbs',
      'Data visualization ethics and reproducibility guidelines'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 4: The Mechanics of Scholarly Paragraphs',
      openingQuote: '"Clear thinking becomes clear writing; one can’t exist without the other." — William Zinsser',
      paragraphs: [
        'A scholarly paragraph is an unbroken chain of intellectual custody. Every sentence must inherit momentum from the preceding proposition and bestow clarity upon the next.',
        'Academic writers all too frequently confuse obscurity with profundity. True scholarship demands that complex truths be communicated with razor-sharp transparency, stripping away baroque ornamentation while preserving substantive nuance.',
        'We propose the "Claim-Evidence-Mechanism-Limitation" architecture. Every analytical paragraph initiates with a clear assertion, adduces verifiable data or textual citation, explicates the causal linkage, and candidly acknowledges boundary conditions.'
      ],
      commentaryNote: 'Editorial Rule: Read your argument aloud. If your breath gives out before a clause concludes, your reader’s cognitive focus expired three words earlier.'
    }
  },
  {
    id: 'res-7',
    title: 'Modern Quantitative Aptitude & Data Interpretation Masterclass',
    subtitle: 'Algorithmic Speed, Mental Number Theory, and Critical Reasoning',
    author: 'Abhinav Saxena',
    institution: 'Aptitude Sciences & Analytical Guild',
    category: 'competitive',
    categoryLabel: 'Competitive Examinations',
    tier: 'Vault Pass',
    isFreePreview: false,
    pages: 410,
    readTime: '9.0 hrs',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#183D32',
    rating: 4.89,
    readersCount: 5120,
    edition: '2026 Competitive Edition',
    description: 'Crafted for CAT, UPSC CSAT, RBI Grade B, and competitive banking examinations. Replaces mechanical formulas with deep number sense, Vedic arithmetic shortcuts, and graphical intuition.',
    tableOfContents: [
      { chapter: 1, title: 'Number Systems & Modular Arithmetic Shortcuts', pages: '1-65', duration: '60 mins' },
      { chapter: 2, title: 'Percentages, Ratios & The Universal Multiplier Technique', pages: '66-130', duration: '70 mins' },
      { chapter: 3, title: 'Modern Data Interpretation: Complex Radar & Scatter Charts', pages: '131-205', duration: '85 mins' },
      { chapter: 4, title: 'Permutations, Combinations & Bayesian Probability', pages: '206-275', duration: '75 mins' },
      { chapter: 5, title: 'Algebraic Graphs, Maxima-Minima & Coordinate Geometry', pages: '276-345', duration: '80 mins' },
      { chapter: 6, title: 'Speed Strategy & Exam Psychology under Pressure', pages: '346-410', duration: '60 mins' }
    ],
    tags: ['CAT Quant', 'UPSC CSAT', 'Data Interpretation', 'Number Theory', 'Mental Math'],
    keyTakeaways: [
      'Over 350 step-by-step solved institutional examination problems',
      'Elimination heuristics that shave 45 seconds off each calculation',
      'Cross-sectional caselets simulating latest executive test patterns'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 2: Percentages & The Universal Multiplier Technique',
      openingQuote: '"Numbers have a personality; learn to listen to their conversation."',
      paragraphs: [
        'Conventional schooling trains students to calculate percentages through laborious cross-multiplications. In high-stakes examinations where each question must be solved within 75 seconds, mechanical calculation is catastrophic.',
        'The Universal Multiplier technique conceives every percentage shift as a scalar transformation. A 16.66% increase is not 100 + 16.66 divided by 100; it is simply multiplying by 7/6. Successive discounts of 12.5% and 20% become (7/8) * (4/5) = 7/10, yielding an instantaneous 30% aggregate discount without pencil to paper.',
        'When coupled with base-conversion mental splits, complex compound interest and depreciation equations collapse into elementary arithmetic that can be solved before competitors have drafted their first scratch formula.'
      ],
      commentaryNote: 'Examination Heuristic: Never compute final values in multi-step questions until intermediate terms have completed all mutual fractional cancellations.'
    }
  },
  {
    id: 'res-8',
    title: 'Foundations of Modern Indian History: 1757 to 1950',
    subtitle: 'Colonial Economy, Agrarian Struggles, and the Freedom Struggle',
    author: 'Dr. Tanvi Sen & Prof. Bipin Parikh',
    institution: 'Historical Archives Society of India',
    category: 'humanities',
    categoryLabel: 'Humanities, Law & History',
    tier: 'Free Preview',
    isFreePreview: true,
    pages: 450,
    readTime: '9.5 hrs',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80',
    colorAccent: '#183D32',
    rating: 4.94,
    readersCount: 3870,
    edition: 'Archival Monograph (2026)',
    description: 'A nuanced, documentary-rich chronicle of India’s economic drain, peasant rebellions, socio-religious reform movements, revolutionary activism, and the constitutional transition to independence.',
    tableOfContents: [
      { chapter: 1, title: 'The Battle of Plassey & The Mercantilist Drain of Wealth', pages: '1-65', duration: '65 mins' },
      { chapter: 2, title: 'Agrarian Settlements: Zamindari, Ryotwari & Rural Debt', pages: '66-135', duration: '75 mins' },
      { chapter: 3, title: 'The Great Rebellion of 1857: Mutiny or War of Independence?', pages: '136-205', duration: '80 mins' },
      { chapter: 4, title: 'Economic Nationalism: Dadabhai Naoroji & R.C. Dutt', pages: '206-275', duration: '70 mins' },
      { chapter: 5, title: 'Mass Satyagraha, The Congress & Revolutionary Left Formations', pages: '276-365', duration: '95 mins' },
      { chapter: 6, title: 'Partition, Integration of Princely States & The Republic', pages: '366-450', duration: '100 mins' }
    ],
    tags: ['UPSC Mains History', 'Freedom Movement', 'Colonial Economy', 'Modern History', 'Historiography'],
    keyTakeaways: [
      'Original excerpts from 19th-century land revenue settlement surveys',
      'Timeline maps tracing tribal uprisings across Chota Nagpur and Deccan',
      'Comparative ideological matrix of Gandhi, Bose, Ambedkar, and Nehru'
    ],
    sampleExcerpt: {
      chapterTitle: 'Chapter 4: Economic Nationalism: Dadabhai Naoroji & The Drain Theory',
      openingQuote: '"The British rule has been a bleeding of India, and what is bled out of one country into another is lost to it forever." — Dadabhai Naoroji',
      paragraphs: [
        'Before Dadabhai Naoroji published "Poverty and Un-British Rule in India" in 1901, colonial apologists maintained that British governance provided benign modernization, commercial railways, and rule of law in return for modest administrative fees.',
        'Naoroji, alongside Romesh Chunder Dutt and Mahadev Govind Ranade, pioneered the statistical methodology of economic nationalism. They demonstrated that an astronomical portion of India’s national revenue — between 30 and 40 million pounds annually — left Indian shores as "Home Charges," pensions, railway interest guarantees, and unrequited exports without yielding any reciprocal capital inflow.',
        'This systemic hemorrhage systematically starved the domestic economy of capital formation, transforming a fertile civilizational center of global textiles into an impoverished exporter of raw cotton and indigo.'
      ],
      commentaryNote: 'Historiographical Note: Naoroji’s meticulous parliamentary testimony before the Welby Commission fundamentally undermined the moral legitimacy of the British Empire.'
    }
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Scholar Pass',
    tagline: 'Ideal for focused revision, single-term examinations, and targeted research.',
    priceINR: 499,
    billingPeriod: 'per month',
    billingNote: 'Billed monthly. Cancel anytime with one click.',
    popular: false,
    color: '#183D32',
    features: [
      'Full access to 1,200+ curated digital academic vaults',
      'Distraction-free reading sanctuary with font scaling & night mode',
      'Bookmark and personal shelf organization',
      'Up to 3 active offline monograph caches',
      'Standard community discourse access'
    ],
    buttonText: 'Start 14-Day Free Preview',
    tierBadge: 'Flexible Term'
  },
  {
    id: 'annual',
    name: 'Academic Year Vault',
    tagline: 'Our premier plan for serious aspirants, degree students, and dedicated independent scholars.',
    priceINR: 3999,
    billingPeriod: 'per year',
    monthlyEquivalent: '₹333 / month',
    savingsLabel: 'Save 33% vs monthly',
    billingNote: 'Billed annually at ₹3,999. Includes full academic year coverage.',
    popular: true,
    color: '#B69A65',
    features: [
      'All Monthly Scholar Pass features',
      'Unlimited offline monograph reading and margin annotations',
      'Direct BibTeX & APA research citation exports',
      'Priority early-access releases to new research monographs',
      'Search across entire digital vault corpus simultaneously',
      'Personalized study target and progress analytics',
      'Direct contact with monograph authors & research fellows'
    ],
    buttonText: 'Unlock Full Vault (₹3,999/yr)',
    tierBadge: 'Most Popular'
  },
  {
    id: 'patron',
    name: 'Lifetime Scholar Patron',
    tagline: 'Permanent, unhindered knowledge access for lifelong learners and institutional scholars.',
    priceINR: 7999,
    billingPeriod: 'one-time patronage',
    billingNote: 'One-time payment of ₹7,999. Zero recurring fees forever.',
    popular: false,
    color: '#20251F',
    features: [
      'Perpetual lifetime access to all present and future vault archives',
      'Handcrafted gold-embossed digital bookplate on all saved folios',
      'Invitation to private annual digital colloquiums & academic roundtables',
      'Vote on upcoming research monographs and syllabus commissions',
      'Concierge research reference support',
      'Gift 1 full annual membership to an underprivileged student'
    ],
    buttonText: 'Become a Lifetime Patron',
    tierBadge: 'Institutional & Lifetime'
  }
];

export const INITIAL_USER = {
  name: 'Aarav Sharma',
  email: 'aarav.sharma@studyvault.in',
  city: 'New Delhi',
  tagline: 'UPSC Aspirant & Independent Legal Scholar',
  membershipTier: 'Academic Year Vault',
  memberSince: 'October 2025',
  expiryDate: 'October 2027',
  streakDays: 14,
  hoursReadThisMonth: 38.4,
  booksCompleted: 9,
  notesCount: 64,
  savedResourceIds: ['res-1', 'res-3', 'res-6', 'res-8'],
  recentReads: [
    { resourceId: 'res-1', lastChapter: 'Chapter 1: Philosophical Architecture', progressPercent: 68, lastRead: '2 hours ago' },
    { resourceId: 'res-3', lastChapter: 'Chapter 2: Transmission Mechanism', progressPercent: 42, lastRead: 'Yesterday' },
    { resourceId: 'res-6', lastChapter: 'Chapter 4: Mechanics of Scholarly Paragraphs', progressPercent: 85, lastRead: '3 days ago' },
    { resourceId: 'res-8', lastChapter: 'Chapter 4: Economic Nationalism & Drain Theory', progressPercent: 24, lastRead: '5 days ago' }
  ],
  weeklyActivity: [
    { day: 'Mon', hours: 4.2 },
    { day: 'Tue', hours: 3.8 },
    { day: 'Wed', hours: 5.5 },
    { day: 'Thu', hours: 4.0 },
    { day: 'Fri', hours: 6.2 },
    { day: 'Sat', hours: 7.5 },
    { day: 'Sun', hours: 7.2 }
  ]
};

export const FAQ_ITEMS = [
  {
    q: 'How does StudyVault differ from coaching platforms and online course portals?',
    a: 'StudyVault is an independent knowledge sanctuary and reading library, not an instructor-led coaching factory. We do not sell recorded lectures, aggressive test series, or gimmicky animations. Instead, we curate deep, peer-reviewed monographs, annotated commentaries, and rigorous problem treatises that students study at their own pace with professional workspace tools.'
  },
  {
    q: 'What payment methods are supported for Indian learners?',
    a: 'We support all prominent Indian payment rails via secure architecture: UPI (Google Pay, PhonePe, Paytm, BHIM, Cred), RuPay / Visa / Mastercard credit and debit cards, and Indian NetBanking across 50+ banks. Pricing is strictly transparent in Indian Rupees (INR) with no hidden foreign transaction fees.'
  },
  {
    q: 'Can I read and annotate resources on mobile or offline?',
    a: 'Yes. StudyVault is engineered mobile-first with high-contrast typographic rendering. Members can cache monographs locally for uninterrupted study during commutes or in low-connectivity environments without losing bookmark progress.'
  },
  {
    q: 'Can I preview materials before purchasing a membership?',
    a: 'Every monograph in StudyVault provides a generous Free Preview comprising complete introductory chapters, full table of contents, and scholarly commentary notes so you can inspect depth and rigor before committing.'
  },
  {
    q: 'Can institutions or college departments subscribe in bulk?',
    a: 'Yes. We partner with Indian universities, independent reading rooms, and civil society libraries for institutional campus access. Reach out through our Institutional Patron desk for custom multi-seat access.'
  }
];
