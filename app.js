const figmaImages = {
  logo: "assets/brand/illuminate-logo.png",
  footer: "assets/figma/illuminate-footer-background.jpg",
  pix: "assets/figma/PIX.png",
  csx: "assets/figma/CSX.png",
  elearning: "assets/figma/eLearning.png",
  workshop: "assets/figma/Workshop.png",
  elearningMockups: "assets/figma/e-learning-mockups.png",
  elearningSidebar: "assets/figma/elearning-sidebar-ipad.png",
  elearningCarousel: [
    "assets/figma/elearning-carousel-1.png",
    "assets/figma/elearning-carousel-2.png",
    "assets/figma/elearning-carousel-3.png",
    "assets/figma/elearning-carousel-4.png",
    "assets/figma/elearning-carousel-5.png",
  ],
  productLaunchCard: "assets/figma/frame-45-product-launches.png",
  platforms: "assets/figma/variety-of-platforms.png",
  wordCloud: "assets/figma/word-cloud.png",
  sandbox: "assets/figma/sandbox.png",
  magisterSupport: "assets/figma/magister-white-glove-phone-support.png",
  productLogos: {
    piExplorer: "assets/brand/product-logos/pi-explorer-logo.png",
    csExplorer: "assets/brand/product-logos/cs-explorer-logo.png",
    magister: "assets/brand/product-logos/magister-logo.png",
  },
  clientLogos: {
    madrigal: "assets/brand/client-logos/madrigal.png",
    genentech: "assets/brand/client-logos/genentech.png",
    gilead: "assets/brand/client-logos/gilead.png",
    pfizer: "assets/brand/client-logos/pfizer.png",
    moderna: "assets/brand/client-logos/moderna.png",
  },
  icons: {
    productLaunch: "assets/figma/component-13-product-launches.png",
    nationalMeetings: "assets/figma/component-14-national-meetings.png",
    rareDisease: "assets/figma/component-15-rare-disease-oncology.png",
    foundational: "assets/figma/component-16-foundational-learning.png",
    retention: "assets/figma/component-17-learning-retention.png",
    innovations: "assets/figma/component-18-innovations-training.png",
    productLaunchBlue: "assets/figma/group-986-product-launches-blue.png",
    rareDiseaseBlue: "assets/figma/component-20-rare-disease-blue.png",
    foundationalBlue: "assets/figma/component-21-foundational-blue.png",
    retentionBlue: "assets/figma/component-22-retention-blue.png",
    innovationsBlue: "assets/figma/component-23-innovations-blue.png",
  },
};

const figmaVideos = {
  header: "assets/video/header-video-2025.mp4",
  elearningDemo: "assets/video/elearning-demo-2025-final.mp4",
  ibot: "assets/video/ibot-demo.mp4",
  keyConcepts: "assets/video/key-concepts-video.mp4",
  piExplorerDemo: "assets/video/pi-explorer-demo.mp4",
  csExplorerDemo: "assets/video/cs-explorer-demo.mp4",
  workshopPresentation: "assets/video/workshop-presentation-video-v3.mp4",
};

const clientLogos = [
  { name: "Madrigal Pharmaceuticals", src: figmaImages.clientLogos.madrigal, className: "client-logo-madrigal" },
  { name: "Genentech", src: figmaImages.clientLogos.genentech, className: "client-logo-genentech" },
  { name: "Gilead", src: figmaImages.clientLogos.gilead, className: "client-logo-gilead" },
  { name: "Pfizer", src: figmaImages.clientLogos.pfizer, className: "client-logo-pfizer" },
  { name: "Moderna", src: figmaImages.clientLogos.moderna, className: "client-logo-moderna" },
];

const contact = {
  address: ["477 Harrison Avenue", "Suite 2B", "Boston, MA 02118"],
  phone: "617.423.9300",
  email: "contact@illuminate.net",
};

const solutions = [
  {
    id: "elearning",
    type: "Service",
    title: "eLearning",
    navTitle: "eLearning",
    route: "/elearning",
    icon: "eL",
    iconImage: figmaImages.icons.foundational,
    detailIcon: figmaImages.icons.foundationalBlue,
    detailVisualImage: figmaImages.elearningSidebar,
    image: null,
    video: figmaVideos.elearningDemo,
    galleryTitle: "eLearning examples",
    gallery: [
      {
        src: figmaImages.elearningCarousel[0],
        caption: "Responsive eLearning course experiences",
        alt: "eLearning course examples across laptop, tablet, and phone",
      },
      {
        src: figmaImages.elearningCarousel[1],
        caption: "Interactive science and clinical modules",
        alt: "Interactive clinical learning module mockups",
      },
      {
        src: figmaImages.elearningCarousel[2],
        caption: "Scenario-based training across devices",
        alt: "Scenario-based eLearning module displayed across devices",
      },
      {
        src: figmaImages.elearningCarousel[3],
        caption: "Custom module content and assessments",
        alt: "Custom eLearning module and assessment screens",
      },
    ],
    kicker: "OUR SOLUTIONS: eLEARNING",
    headline: "Innovative solutions for every field training need.",
    short:
      "Engaging, interactive programming that adds flexibility, interactivity, and fun to your curriculum.",
    body: [
      "Add life, interactivity, and fun to learning with powerful tools to engage and illuminate your field team. Our team will custom-design eLearning courses to meet your specific training goals, with the right blend of animation, interactive graphics, and informative content.",
    ],
  },
  {
    id: "workshops",
    type: "Service",
    title: "Workshops",
    navTitle: "Workshops",
    route: "/workshops",
    icon: "W",
    iconImage: figmaImages.icons.nationalMeetings,
    detailIcon: figmaImages.icons.productLaunchBlue,
    image: figmaImages.workshop,
    video: figmaVideos.workshopPresentation,
    kicker: "OUR SOLUTIONS: WORKSHOPS",
    headline: "Innovative solutions for every field training need.",
    short: "Team exercises, activities, games, and presentations tailored to your field goals and training needs.",
    body: [
      "Workshops are a key element in most training programs, and we are well versed in the art and science of maximizing their impact. Our team will create a custom program that includes presentation slides, activities, games, and workshop guides tailored to your training goals and field needs.",
      "Our team leverages cutting-edge advancements in adult learning and technology to deliver innovative alternatives to traditional workshops. We foster participation through gamification and modern technologies such Augmented Reality, Virtual Reality and Artificial Intelligence.",
    ],
    bulletsTitle: "Common Workshop include:",
    bullets: [
      "Objection Handling and FAQs",
      "Tailoring messaging to Specific Audiences",
      "Storytelling",
      "Clinical Studies",
      "PI Training",
      "Visual Aid and Marketing Material",
      "Patient Journey",
      "Certification",
    ],
  },
  {
    id: "learning-retention",
    type: "Service",
    title: "Learning Retention",
    navTitle: "Learning Retention",
    route: "/learning-retention",
    icon: "LR",
    iconImage: figmaImages.icons.retention,
    detailIcon: figmaImages.icons.retentionBlue,
    image: figmaImages.platforms,
    kicker: "OUR SOLUTIONS: LEARNING RETENTION",
    headline: "Innovative solutions for every field training need.",
    short:
      "Purposeful games, podcasts, microlearning, and other strategies that reinforce learning and ensure content sticks.",
    body: [
      "For decades, research has shown that 50 to 80 percent of what is taught in courses is not retained. This has been a source of concern and frustration for life science companies seeking to deploy a knowledgeable field team that can deliver results.",
      "However, in reviewing research on the cognitive science behind “how and why” learners retain information, we can conclude that we are in a new, technology-enabled era, the era of continuous learning. As a result, our approach to training needs to be multi-dimensional.",
      "Era 1 in modern corporate training (including life sciences) was dominated by instructor-led courses and training binders, and Era 2 by eLearning and learning management systems (LMS). The current continuous learning era is enabled by mobile devices; cloud computing; and advances in our understanding of how people learn, retain what they have learned, and transfer learning to the job.",
    ],
  },
  {
    id: "pi-explorer",
    type: "Product",
    title: "PI Explorer",
    navTitle: "PI Explorer",
    route: "/pi-explorer",
    icon: "PI",
    iconImage: figmaImages.icons.productLaunch,
    detailIcon: figmaImages.icons.productLaunchBlue,
    logoImage: figmaImages.productLogos.piExplorer,
    image: figmaImages.pix,
    detailVideo: figmaVideos.piExplorerDemo,
    kicker: "OUR SOLUTIONS: PI EXPLORER",
    headline: "Innovative solutions for every sales training need.",
    short:
      "An award-winning, comprehensive, easy-to-grasp method for delivering complex prescribing information quickly and successfully.",
    body: [
      "Illuminate’s PI Explorer is an interactive tool that revolutionizes the way you train on the PI. Employing the latest mobile technology, PI Explorer was designed to be a comprehensive, easy-to-grasp method to deliver complicated data quickly and successfully. PI Explorer is custom-built to your specifications, and it has proven extremely effective in engaging reps.",
    ],
  },
  {
    id: "cs-explorer",
    type: "Product",
    title: "Clinical Study Explorer",
    navTitle: "CS Explorer",
    route: "/cs-explorer",
    icon: "CS",
    iconImage: figmaImages.icons.innovations,
    detailIcon: figmaImages.icons.innovationsBlue,
    logoImage: figmaImages.productLogos.csExplorer,
    image: figmaImages.csx,
    detailVideo: figmaVideos.csExplorerDemo,
    kicker: "OUR SOLUTIONS: Clinical Study Explorer",
    headline: "Innovative solutions for every sales training need.",
    short:
      "Similar to PI Explorer, Clinical Study Explorer is an impactful approach to training on and retaining clinical study information.",
    body: [
      "Illuminate’s Clinical Study Explorer is an interactive and customized program filled with information to help field representatives understand and apply the clinical study in interactions with their clinician customers. Swiping to page through the study in its entirety, learners develop a fluent understanding and knowledge of important information and data by accessing callouts that highlight and explain key concepts, provide clinical context, and link content to selling messages.",
      "The goal of Clinical Study Explorer is to provide a dynamic and consistent learning platform for understanding and working with clinical studies.",
    ],
  },
  {
    id: "magister-lms",
    type: "Product",
    title: "Magister LMS",
    navTitle: "Magister LMS",
    route: "/magister-lms",
    icon: "LMS",
    iconImage: figmaImages.icons.rareDisease,
    detailIcon: figmaImages.icons.rareDiseaseBlue,
    logoImage: figmaImages.productLogos.magister,
    image: figmaImages.elearning,
    kicker: "OUR SOLUTIONS: MAGISTER LMS",
    headline: "Innovative solutions for every field training need.",
    short: "Illuminate’s Magister allows for customization of branding, layout, and content organization.",
    body: [
      "The Magister LMS is an online SaaS platform, which means clients do not need to worry about infrastructure (we own and maintain the hardware and software), software updates (these are transparent to users), or management (IT and/or LMS administration headcounts).",
      "With our concierge service, we address all aspects of day-to-day LMS operations and support, including roster management, content production and publishing, assignments and notifications, and tracking and reporting, ultimately providing a full helpdesk solution to guide and support users in all their activities.",
      "Moreover, Magister is a unique, flexible LMS that allows for customization of branding, layout, and content organization. In addition to supporting all industry standards for automatically importing and publishing content, Magister offers a built-in authoring solution through which clients can quickly and inexpensively create and publish content in several different ways, via easy-to-use, pre-built Excel or PowerPoint templates, or by using the full power of the authoring environment directly in the system.",
      "This facilitates the production of virtually any type of course, assessment, survey, event, and documentation asset, thereby meeting a range of organizational needs.",
      "Finally, Magister’s unique design and implementation make the platform a rare type of solution that can serve organizations of any size and seamlessly grow with each client, from small, vertical businesses to large, worldwide corporations.",
    ],
    closing: "Experience Illuminate. Experience Magister®.",
    external: { label: "Experience Magister®", href: "https://magisterlms.com/" },
    feature: {
      eyebrow: "White glove support",
      title: "White Glove Services, Hands-off Approach",
      image: figmaImages.magisterSupport,
      alt: "Illuminate team member providing Magister LMS white glove support by phone",
      body:
        "Elevate your Magister experience with our white glove concierge service. Enjoy immediate assistance with assignment inquiries, troubleshooting, and a dedicated team that ensures you always receive top-notch service. Illuminate provides white glove service, including our help desk phone center, full roster management, field troubleshooting, assessment validation, report management, and technology troubleshooting.",
    },
  },
];

const leadership = {
  route: "/leadership-bootcamp",
  title: "Babson-Illuminate Leadership Bootcamp",
  headline: "Bringing the Entrepreneurial Mindset to Life Sciences",
  body: [
    "Babson College, ranked the top college for entrepreneurship by U.S. News & World Report and 10th best college by the Wall Street Journal, and Illuminate, an award-winning developer of innovative training programs for the global life sciences industry, have collaborated to offer the Babson-Illuminate Leadership Bootcamp to life science organizations.",
    "The Babson-Illuminate Leadership Bootcamp is a customizable program consisting of a series of either three or seven 90-minute weekly interactive sessions designed to enhance an organization’s business acumen, professional growth, and inclusive and entrepreneurial leadership skills. Sessions are led by senior Babson faculty utilizing “Entrepreneurial Thought & Action®”, Babson’s trademarked solutions-focused teaching methodology, and can be customized to meet your organization's needs.",
    "Through a combination of interactive case studies, class discussions, and team projects, participants will learn new ways of thinking to solve difficult problems, assess and mitigate risk, and lead with empathy and inclusivity.",
    "This program is ideally designed for high-potential life science individuals and leaders who are seeking professional development opportunities to enhance their business acumen, professional development, and leadership skills. Some of the topics offered include business models and metrics, innovation, financial acumen, leadership, and diversity, equity, and inclusion.",
  ],
};

const companyValues = [
  {
    title: "Action",
    text: "We are always ready to act. As proactive self-starters, we embody readiness in every fiber of our being and thrive on surpassing expectations. We welcome new challenges and ventures with unwavering enthusiasm.",
  },
  {
    title: "Respect & Kindness",
    text: "We respect ourselves, each other, our clients, and our vendor partners.",
  },
  {
    title: "Deliver",
    text: "We make things happen. We have a reputation for delivering: every time, on time, and within budget.",
  },
  {
    title: "High Standards",
    text: "We pursue excellence in understanding, anticipating, and fulfilling each client's unique needs. We are genuinely interested in our clients and passionate about helping them achieve their goals.",
  },
  {
    title: "Bold",
    text: "We embrace a culture of empowerment and strive for greatness, endlessly pursuing boldness and innovation while upholding the highest standards of integrity and humility.",
  },
  {
    title: "Inclusive",
    text: "We value diversity and inclusion. We believe in empowering our team to harness their unique perspectives and talents, recognizing that our collective strength is derived from our diverse experiences.",
  },
  {
    title: "Innovative",
    text: "We are relentless in our pursuit of continuous improvement and innovation. We seek opportunities to grow and evolve our products, services, and internal processes to serve our clients better. We stay ahead of industry best practices and strive to learn new ways to achieve better results.",
  },
];

const team = [
  {
    name: "Shaun McMahon",
    title: "President, Founder",
    image: "assets/team/shaun-mcmahon.jpg",
    bio: "Shaun’s aim is to ensure the goals and expectations of Illuminate’s clients are understood, realized, and exceeded. Shaun boasts a diverse background in training and development, with over 20 years of experience in the pharmaceutical, computer, and automobile industries. He also holds a BS in marketing and entrepreneurial studies from Babson College. Before founding Illuminate in 2004, Shaun worked as director of project development for pharmaceutical sales training company Total Learning Concepts and as national training manager for Medeva Pharmaceuticals, where he developed training programs for several leaders in the pharmaceutical industry. Shaun oversees the operations of Illuminate and is often the main point of contact between the company and its clients, allowing him to ensure that messages are communicated throughout the teams and that the end product is more than satisfactory to the client.",
  },
  {
    name: "Maria Bocanegra",
    title: "Project Director",
    image: "assets/team/maria-bocanegra.jpg",
    bio: "Maria brings to Illuminate expertise in higher education project management and curriculum development, including experience creating custom academic engagements for adult learners earning graduate degrees. She holds a BA in International Relations from the University of Virginia and an MA in Political Science from Virginia Tech.",
  },
  {
    name: "Nathanael Otañez",
    title: "Project Manager",
    image: "assets/team/nathanael-otanez.jpg",
    bio: "Nathanael is a Project Manager who brings a wealth of expertise from his previous experiences in research project management and higher education. He holds an MS in Health Policy & Economics from Cornell University as well as a BS in Biology and Society, with minors in Business and Health Policy. Nathanael is committed to honing his skills and skilled in delivering creative solutions, making him an asset to our team.",
  },
  {
    name: "Kristian Dawes",
    title: "Learning Platform Specialist",
    image: "assets/team/kristian-dawes.jpg",
    bio: "As a Customer Success Specialist on the Learning Technology Team, Kristian assists our Learning Management System (LMS) clients in the life sciences. His responsibilities include resolving technical issues, optimizing eLearning experiences, and ensuring clients are able to fully utilize our LMS. Kristian's commitment to customer satisfaction and his aptitude for technology position him to make significant contributions to Illuminate and our clients.",
  },
  {
    name: "Faridon Dadrass",
    title: "Vice President of Operations",
    image: "assets/team/faridon-dadrass.jpg",
    bio: "As Vice President of Operations Faridon seizes opportunities to help Illuminate to operate with the utmost efficiency. He oversees all operational aspects of Illuminate’s business, including, finance, facilities, human resources, information technology. Faridon has built upon his experience in the financial services and hospitality management sectors, and co-founded his own company in 2011. Faridon received a BS in business administration and marketing from Southern New Hampshire University.",
  },
  {
    name: "Daniel Goldsmith",
    title: "Project Director",
    image: "assets/team/daniel-goldsmith.jpg",
    bio: "Daniel applies his extensive background in overseeing the production of sales training materials for the life sciences industry to ensure projects stay on time, on budget, and within scope. He has worked in the eLearning industry for 20 years, over half of those as a project manager. During that time, he has shepherded a diverse range of projects to successful completion. He holds a BS in TV and radio broadcasting with a minor in corporate communications from Ithaca College.",
  },
  {
    name: "Mason Jones",
    title: "Business Development Specialist",
    image: "assets/team/mason-jones.jpg",
    bio: "Mason Jones brings over 6 years of B2B sales experience to Illuminate, with a strong track record of building relationships and generating new business across multiple industries. His background spans technology, communications, and life sciences, giving him a well-rounded perspective on the challenges organizations face when developing and enabling their field teams.\n\nA graduate of the University of Georgia with a BS in Biology and a minor in Psychology, Mason combines analytical thinking with a strong understanding of human behavior, allowing him to take a thoughtful, consultative approach to business development and client engagement.",
  },
  {
    name: "William Hwang",
    title: "Sr. Medical Editor",
    modalTitle: "Senior Medical Editor",
    image: "assets/team/william-hwang.jpg",
    bio: "William is a senior medical editor with experience ranging from rebranding a discontinued campus magazine to coordinating career development and learning activities for interns. Prior to joining Illuminate, William worked as an assistant editor at Macmillan Learning. He holds a BA in English Language and Literature from Boston College.",
  },
  {
    name: "Juan Carlos Pinedo",
    title: "Dir, Learning Technology",
    modalTitle: "Director of Learning Technology",
    image: "assets/team/juan-carlos-pinedo.jpg",
    bio: "Juan Carlos brings extensive business management, writing, communications, and sales experience to Illuminate. He started out in the field of journalism as a news writer for a local radio station, then moved into a successful sales career with Moore Business Forms. His business management background includes serving as operations manager for an insurance company and launching/operating a cleaning services company. Born in Maracaibo, Venezuela, Juan Carlos is fluent in Spanish and English. He received a BS in Journalism from the Universidad Cecilio Acosta in Maracaibo and is a firm believer in continuing education and a global approach to learning.",
  },
  {
    name: "Kara Fitzgibbon",
    title: "Sr. Business Dev. Project Mgr.",
    modalTitle: "Senior Business Development Project Manager",
    image: "assets/team/kara-fitzgibbon.jpg",
    bio: "Thanks to previous project management and related client-serving positions, Kara came to Illuminate with a robust understanding of the pharmaceutical industry and the clinical trials process. As a member of Illuminate’s project management team, Kara oversees the production of a range of educational materials, from eLearning courses to workshop content. She has a BS in marketing from Syracuse University’s Whitman School of Management",
  },
  {
    name: "Mike Miedzianowski",
    title: "Business Development Specialist",
    image: "assets/team/mike-miedzianowski.jpg",
    bio: "Mike Miedzianowski brings a rare combination of elite competitive drive and refined business acumen to every professional endeavor. A standout athlete, Mike was drafted by the Baltimore Orioles in 2011. He attended High Point University as a student athlete and finished obtaining his bachelor’s in business administration from Indian River State College.\n\nFor over 9 years, Mike has thrived in the competitive world of high-end jewelry and Swiss timepieces, developing expertise in luxury brand representation, high net-worth client engagement, and consultative sales. Mike leverages his background in high-performance environments with strong business acumen, enabling him to build strategic relationships and drive growth by connecting clients with impactful training solutions.",
  },
  {
    name: "Vrushali Nar",
    title: "eLearning Developer",
    image: "assets/team/vrushali-nar.jpg",
    bio: "With over a decade of experience in eLearning development, Vrushali designs impactful, learner-focused training solutions that drive engagement and retention. She is highly skilled in a wide range of authoring tools and has a proven track record in developing instructor-led, virtual, and blended learning programs. Vrushali combines creativity with instructional design best practices to deliver meaningful learning experiences tailored to life sciences field teams.",
  },
  {
    name: "Carly Commiso",
    title: "Director of Learning Strategy",
    image: "assets/team/carly-commiso.jpg",
    bio: "Carly brings extensive expertise in instructional model and curriculum development to Illuminate, including experience creating outcome-focused online learning materials using science-based instructional design principles. Carly holds a dual BA in human services and international affairs from Northeastern University, along with an MEd in instructional design from the University of Massachusetts Boston.",
  },
  {
    name: "Sarah Looney",
    title: "Sr. Project Manager",
    modalTitle: "Project Manager",
    image: "assets/team/sarah-looney.jpg",
    bio: "Sarah’s years of project management and leadership experience make her a valuable asset at Illuminate. Having previously worked in the pharmaceutical and biotech industry, Sarah has deep understanding of sales training and medical education needs. She enjoys working in a client-faced role and ensuring the timely delivery of high-quality products, excelling at establishing accurate timelines and a consistent workflow. Sarah holds a BA in Communication and a minor in Business Marketing from La Salle University.",
  },
  {
    name: "Janiel Rosario",
    title: "Project Associate",
    image: "assets/team/janiel-rosario.jpg",
    bio: "Janiel Rosario, an ambitious Project Associate intern at Illuminate and a passionate student at Year Up, a program designed to close the opportunity divide by providing young adults with skills, experience, and support, is committed to excelling in project management. With the skills acquired at Year Up, Janiel brings experience in customer-centered roles, with a focus on adaptability, communication, and problem-solving.",
  },
  {
    name: "Prasanna Ranade",
    title: "Sr. Graphic Designer",
    modalTitle: "Senior Graphic Designer",
    image: "assets/team/prasanna-ranade.jpg",
    bio: "As a Graphic Designer, Prasanna applies his graphic design expertise in visual conceptualization, layout design, and branding to create custom digital and print content for eLearning modules, workshops, and marketing collateral. He holds a Bachelor of Arts in Graphic Design from Abhinav College of Art, Pune, India.",
  },
  {
    name: "Ryan Hoke",
    title: "Business Development Director",
    image: "assets/team/ryan-hoke.jpg",
    bio: "With 20+ years in sales, account management, and leadership, Ryan is a steady, client-first partner who helps teams cut through complexity, align quickly, and move from strategy to execution with confidence. Her experience spans healthcare, life sciences, and enterprise organizations, including close partnerships with physicians and specialists and leadership of complex accounts and go-to-market efforts. Ryan is known for clear communication, disciplined follow-through, and thoughtful problem-solving—bringing clients practical, high-impact support that strengthens collaboration and delivers results.",
  },
  {
    name: "Farheen Shaikh",
    title: "Medical Reviewer",
    image: "assets/team/farheen-shaikh.jpg",
    bio: "Farheen is a Medical Reviewer at Illuminate with experience in medical and scientific content review across various therapeutic areas and disease states, including oncology and rare diseases. She is committed to applying her expertise in interpreting clinical trial data and conducting literature reviews to ensure accuracy, clarity, and compliance across a wide range of deliverables. Farheen holds a Doctor of Pharmacy (PharmD) and a Master’s in Regulatory Affairs from MCPHS University in Boston.",
  },
  {
    name: "Lauren McNally",
    title: "Assoc. Dir. of Learning Strategy",
    modalTitle: "Associate Director of Learning Strategy",
    image: "assets/team/lauren-mcnally.jpg",
    bio: "Lauren is an expert in instructional design with extensive experience in creating innovative and impactful training programs for various industries. In her role as Curriculum Design Manager, Lauren uses her expertise in adult learning strategies to design effective and engaging training solutions. She holds a BS in Secondary Education from Pennsylvania State University and is currently pursuing a Master of Education in Learning, Design, and Technology.",
  },
  {
    name: "Rich Daley",
    title: "Graphic Designer",
    image: "assets/team/rich-daley.jpg",
    bio: "With a Bachelor of Fine Arts in Sequential Art from the Savannah College of Art and Design, Rich brings a wealth of experience in visual storytelling, layout design, and corporate brand building. He is a creative problem solver with experience in all aspects of design. The addition of Rich to our creative team ensures that our client’s projects are informative, visually pleasing, and technically sound.",
  },
];

const teamDisplayOrder = [
  "Shaun McMahon",
  "Faridon Dadrass",
  "Juan Carlos Pinedo",
  "Carly Commiso",
  "Ryan Hoke",
  "Maria Bocanegra",
  "Daniel Goldsmith",
  "Kara Fitzgibbon",
  "Sarah Looney",
  "Farheen Shaikh",
  "Nathanael Otañez",
  "Mason Jones",
  "Mike Miedzianowski",
  "Janiel Rosario",
  "Lauren McNally",
  "Kristian Dawes",
  "William Hwang",
  "Vrushali Nar",
  "Prasanna Ranade",
  "Rich Daley",
];

const teamDisplayRank = new Map(teamDisplayOrder.map((name, index) => [name, index]));
team.sort((a, b) => (teamDisplayRank.get(a.name) ?? 999) - (teamDisplayRank.get(b.name) ?? 999));

const news = [
  {
    date: "February 28, 2024",
    title:
      "Reflecting on Rare Diseases: Insights and Innovations: Illuminate's President, Shaun McMahon, and rare disease advocate, Leah Mendoza, explore the complex world of rare diseases.",
    label: "View video",
    href: "https://vimeo.com/",
  },
  {
    date: "October 20, 2023",
    title: "Unlocking Effective Learning: The Application of Key Instructional Design Concepts in Illuminate’s PI Explorer™",
    label: "View article",
    href: "https://www.linkedin.com/",
  },
  {
    date: "August 16, 2023",
    title: "The Top Learning Trends You Need to Know",
    label: "View article",
    href: "https://www.linkedin.com/pulse/top-learning-trends-you-need-know-illuminate-3",
  },
  {
    date: "August 1, 2023",
    title: "Empowering Young Adults: Year Up Interns Kickstart Careers with Illuminate",
    label: "View article",
    href: "https://www.linkedin.com/",
  },
  {
    date: "July, 2023",
    title: 'LTEN Focus: "Regional Field Trainers: A Unique Training Opportunity" by Shaun McMahon',
    label: "View article",
    href: "https://read.nxtbook.com/",
  },
  {
    date: "June 2, 2023",
    title: "Day One Dreams Podcast: Interview with Shaun McMahon, Founder of Illuminate",
    label: "Tune in to the podcast",
    href: "https://day-one-dreams-podcast.simplecast.com/",
  },
  {
    date: "August 1, 2022",
    title:
      "ELBX Online 2022 - The Top Learning Trends You Need to Know. Shaun McMahon, President & Founder, Illuminate Lauren McNally, Curriculum Design Manager, Illuminate Immersive learning, augmented reality, virtual reality, and social learning are all hot topics in the training industry.",
    label: "View video",
    href: "https://www.youtube.com/",
  },
  {
    date: "June 15, 2022",
    title: "ILLUMINATE AND BABSON COLLEGE COLLABORATE WITH B-AGILE PROGRAM - Bringing The Entrepreneurial Mindset to the Life Science Industry",
    label: "View article",
    href: "https://www.l-ten.org/",
  },
  {
    date: "June 3, 2022",
    title: "An LGBTQ+ Leader, Shaun McMahon Takes Pride in Creating Change",
    label: "View article",
    href: "https://entrepreneurship.babson.edu/",
  },
  {
    date: "April 5, 2022",
    title: "LTEN Focus: “Amping Up the Role of Field Trainers” by Shaun McMahon",
    label: "View article",
    href: "https://read.nxtbook.com/",
  },
  {
    date: "Jan. 29, 2022",
    title: 'Training Industry: "The Power of Creativity in Learning" by Shaun McMahon',
    label: "View article",
    href: "https://trainingindustry.com/",
  },
  {
    date: "Jan. 24, 2022",
    title: "ILLUMINATE INTRODUCES NEW BRANDING: Energetic and streamlined logo reflects company’s agility and innovation",
    label: "View article",
    href: "https://www.illuminate.net/news",
  },
  {
    date: "Jan. 26, 2021",
    title: 'Training Industry: "A Sales Training View From the Life Sciences: Reflecting on 2020 and Planning for 2021" by Shaun McMahon',
    label: "View article",
    href: "https://trainingindustry.com/",
  },
  {
    date: "Nov. 4, 2020",
    title: 'Training Magazine: "Going Virtual" by Shaun McMahon',
    label: "View article",
    href: "https://trainingmag.com/",
  },
  {
    date: "June 9, 2020",
    title: "Training Industry: “Illuminate Announces Expansion”",
    label: "View article",
    href: "https://trainingindustry.com/",
  },
  {
    date: "May 21, 2020",
    title: "LTEN Focus: “Beyond Training: Focusing on Learning and Development” by Shaun McMahon",
    label: "View article",
    href: "https://www.l-ten.org/",
  },
  {
    date: "April 29, 2020",
    title: "LTEN Focus: “Illuminate Joins National LGBT Chamber of Commerce”",
    label: "View article",
    href: "https://www.l-ten.org/",
  },
  {
    date: "April 14, 2020",
    title: "Training Industry: “In Uncertain Times, Sustainment Training Engages and Supports Sales Representatives” by Shaun McMahon",
    label: "View article",
    href: "https://trainingindustry.com/",
  },
  {
    date: "February 11, 2020",
    title: "LTEN Focus: “Shaun McMahon to Join LTEN Board of Directors”",
    label: "View article",
    href: "https://www.l-ten.org/",
  },
];

const awards = [
  ["2023", ["LTEN Excellence Award Learning Content finalist"]],
  ["2022", ["LTEN Excellence Award Learning Content winner", "LTEN Excellence Award for Innovation finalist"]],
  [
    "2021",
    [
      "Illuminate named to Inc 5000 for third year in a row (Inc.'s annual guide to the fastest growing private companies in the US)",
      "LTEN Excellence Award for Innovation finalist",
    ],
  ],
  [
    "2020",
    [
      "Illuminate named to Inc 5000 for second year in a row (Inc.'s annual guide to the fastest growing private companies in the US)",
      "LTEN Excellence Award for Learning Content finalist",
    ],
  ],
];

const navGroups = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about-us" },
  {
    label: "Solutions",
    items: solutions.map(({ navTitle, route }) => ({ label: navTitle, route })),
  },
  { label: "Leadership Bootcamp", route: leadership.route },
  { label: "News", route: "/news" },
  { label: "Partners", route: "/partners" },
  { label: "Contact", route: "/contact" },
];

function pathToHash(route) {
  return route === "/" ? "#/" : `#${route}`;
}

function currentPath() {
  return window.location.hash.replace(/^#/, "") || "/";
}

function canonicalPath(path) {
  const aliases = {
    "/about": "/about-us",
    "/solutions": "/our-solutions",
    "/services/elearning": "/elearning",
    "/services/workshops": "/workshops",
    "/services/learning-retention": "/learning-retention",
    "/products/pi-explorer": "/pi-explorer",
    "/products/cs-explorer": "/cs-explorer",
    "/products/magister-lms": "/magister-lms",
  };

  return aliases[path] || path;
}

function isEmbedded() {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function routeFromText(value) {
  const source = decodeURIComponent(String(value || ""))
    .toLowerCase()
    .replace(/[-_+]+/g, " ");

  const matches = [
    { pattern: /\b(e ?learning|elearning)\b/, route: "/elearning" },
    { pattern: /\bworkshops?\b/, route: "/workshops" },
    { pattern: /\blearning retention\b|\bretention\b/, route: "/learning-retention" },
    { pattern: /\b(pi explorer|pix|prescribing information)\b/, route: "/pi-explorer" },
    { pattern: /\b(cs explorer|clinical study|clinical studies)\b/, route: "/cs-explorer" },
    { pattern: /\b(magister|lms)\b/, route: "/magister-lms" },
    { pattern: /\b(leadership|bootcamp|babson)\b/, route: leadership.route },
    { pattern: /\babout\b/, route: "/about-us" },
    { pattern: /\bcontact\b/, route: "/contact" },
    { pattern: /\b(news|media|awards?)\b/, route: "/news" },
    { pattern: /\bpartners?\b/, route: "/partners" },
    { pattern: /\bsolutions?\b/, route: "/our-solutions" },
  ];

  return matches.find((item) => item.pattern.test(source))?.route || null;
}

function syncEmbeddedRouteFromParent() {
  if (!isEmbedded()) return;

  const parentRoute = routeFromText(document.referrer);
  if (parentRoute && currentPath() !== parentRoute) {
    window.history.replaceState(null, "", pathToHash(parentRoute));
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function paragraphs(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function renderIcon(item, variant = "default") {
  if (item.logoImage) {
    return `
      <span class="product-logo-icon" aria-hidden="true">
        <img src="${item.logoImage}" alt="" />
      </span>
    `;
  }

  const src = variant === "detail" && item.detailIcon ? item.detailIcon : item.iconImage;
  if (src) {
    return `
      <span class="figma-icon ${variant === "detail" ? "detail-icon" : ""}" aria-hidden="true">
        <img src="${src}" alt="" />
      </span>
    `;
  }

  return `
    <span class="icon-orb" data-icon="${escapeHtml(item.icon)}" aria-hidden="true"></span>
  `;
}

function renderGallery(item) {
  if (!item.gallery || !item.gallery.length) return "";

  const carouselId = `${item.id}-gallery`;
  return `
    <div class="asset-carousel" aria-label="${escapeHtml(item.galleryTitle || `${item.title} gallery`)}">
      <div class="carousel-heading">
        <h3>${escapeHtml(item.galleryTitle || "Examples")}</h3>
      </div>
      <div class="carousel-shell" data-carousel="${carouselId}">
        <button class="carousel-control carousel-control-prev" type="button" data-carousel-control="prev" aria-controls="${carouselId}" aria-label="Previous slide">&lt;</button>
        <div class="carousel-track" id="${carouselId}" tabindex="0">
          ${item.gallery
            .map(
              (slide) => `
                <figure class="carousel-slide">
                  <img src="${slide.src}" alt="${escapeHtml(slide.alt || slide.caption || item.title)}" loading="lazy" />
                  <figcaption>${escapeHtml(slide.caption || item.title)}</figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
        <button class="carousel-control carousel-control-next" type="button" data-carousel-control="next" aria-controls="${carouselId}" aria-label="Next slide">&gt;</button>
      </div>
    </div>
  `;
}

function renderDetailMedia(item) {
  if (!item.image && !item.detailVideo) return "";

  if (item.detailVideo) {
    return `
      <figure class="solution-media solution-video-media">
        <video class="asset-video" muted loop controls preload="metadata" playsinline data-autoplay-on-view${item.image ? ` poster="${item.image}"` : ""}>
          <source src="${item.detailVideo}" type="video/mp4" />
        </video>
      </figure>
    `;
  }

  return `
    <figure class="solution-media">
      <img class="asset-image" src="${item.image}" alt="${escapeHtml(item.title)} visual" />
    </figure>
  `;
}

function renderFeatureHighlight(item) {
  if (!item.feature) return "";

  return `
    <section class="solution-feature-highlight">
      <figure class="solution-feature-visual">
        <img src="${item.feature.image}" alt="${escapeHtml(item.feature.alt || item.feature.title)}" />
      </figure>
      <article class="solution-feature-copy">
        <p class="eyebrow">${escapeHtml(item.feature.eyebrow || item.type)}</p>
        <h2>${escapeHtml(item.feature.title)}</h2>
        <p>${escapeHtml(item.feature.body)}</p>
      </article>
    </section>
  `;
}

function renderNav() {
  const nav = document.getElementById("nav-menu");
  nav.innerHTML = navGroups
    .map((item) => {
      if (!item.items) {
        return `
          <div class="nav-item">
            <a class="nav-link" href="${pathToHash(item.route)}">${item.label}</a>
          </div>
        `;
      }
      return `
        <div class="nav-item">
          <button class="nav-trigger" type="button">${item.label}</button>
          <div class="dropdown">
            ${item.items.map((child) => `<a href="${pathToHash(child.route)}">${child.label}</a>`).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderHeader(title, subtitle, eyebrow = "Innovative solutions for all learner types") {
  return `
    <section class="interior-hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
        ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer" style="--footer-image: url('${figmaImages.footer}')">
      <div class="container">
        <div class="footer-main">
          <a class="brand-mark footer-brand" href="#/" aria-label="Illuminate home"><img src="${figmaImages.logo}" alt="Illuminate" /></a>
          <div>
            <h2>Contact:</h2>
            <p><a href="mailto:${contact.email}">${contact.email}</a></p>
            <p><a href="tel:16174239300">${contact.phone}</a></p>
          </div>
          <div>
            <p>${contact.address[0]}, ${contact.address[1]}</p>
            <p>${contact.address[2]}</p>
            <div class="footer-actions">
              <a class="button secondary" href="#/contact">Contact Us</a>
              <a class="button secondary" href="https://www.linkedin.com/company/illuminate-ltd/" target="_blank" rel="noreferrer">Stay Connected</a>
            </div>
          </div>
        </div>
        <form class="newsletter" action="mailto:${contact.email}" method="post" enctype="text/plain">
          <strong>Stay informed:</strong>
          <input type="email" name="email" aria-label="Email address" placeholder="youremail@gmail.com" />
          <button class="button" type="submit">Subscribe</button>
        </form>
        <div class="copyright">© 2026 Illuminate</div>
      </div>
    </footer>
  `;
}

function renderSolutionCard(item) {
  return `
    <article class="content-card ${item.logoImage ? "has-logo" : ""}">
      ${renderIcon(item)}
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.short)}</p>
      <a class="button secondary" href="${pathToHash(item.route)}">Learn More</a>
    </article>
  `;
}

function renderHomeSolutionCard(item) {
  const actionLabel = item.type === "Product" ? "View Product" : "View Service";

  return `
    <a class="solution-overview-card ${item.logoImage ? "has-logo" : ""}" href="${pathToHash(item.route)}">
      <span class="solution-overview-icon">${renderIcon(item)}</span>
      <span class="solution-overview-copy">
        <span class="solution-overview-type">${escapeHtml(item.type)}</span>
        <strong>${escapeHtml(item.navTitle)}</strong>
        <span>${escapeHtml(item.short)}</span>
        <em>${actionLabel}</em>
      </span>
    </a>
  `;
}

function renderClientLogoShowcase() {
  return `
    <div class="client-logo-showcase" aria-label="Client logos from the Figma design">
      <div class="client-logo-grid">
        ${clientLogos
          .map(
            (client) => `
              <span class="client-logo-tile ${client.className}">
                <img src="${client.src}" alt="${escapeHtml(client.name)}" />
              </span>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderIbotSpotlight() {
  return `
    <section class="section ibot-section">
      <div class="container ibot-grid">
        <div class="ibot-copy">
          <p class="eyebrow">AI learning support</p>
          <h2>Meet iBot, Illuminate’s custom AI chatbot for life sciences training.</h2>
          <p>iBot supports learners by answering questions and clarifying approved training content in real time. It gives field teams a guided way to revisit key concepts, reinforce understanding, and stay engaged between formal learning moments.</p>
          <div class="actions">
            <a class="button" href="#/contact">Explore iBot</a>
          </div>
        </div>
        <div class="ibot-visual ibot-video-panel" aria-label="iBot video preview">
          <video class="ibot-video" muted loop playsinline controls preload="metadata" data-autoplay-on-view>
            <source src="${figmaVideos.ibot}" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <video class="hero-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
        <source src="${figmaVideos.header}" type="video/mp4" />
      </video>
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-inner">
        <p class="eyebrow">Innovative solutions for all learner types</p>
        <h1>Innovative, <strong>high-impact</strong> learning for your field teams.</h1>
        <div class="hero-tags" aria-label="Training focus areas">
          <span>Workshops</span>
          <span>eLearning</span>
          <span>Learning Technology</span>
          <span>Sustainment</span>
        </div>
        <div class="hero-actions">
          <a class="button" href="#/contact">Start a Project</a>
          <a class="button secondary" href="#/contact">Schedule a Consultation</a>
        </div>
      </div>
    </section>

    <section class="icon-strip">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Our Solutions</p>
            <h2>Innovative solutions for every field training need.</h2>
            <p class="home-solutions-intro">Whether you’re launching a new product, conducting workshops, or developing learning engagement strategies, Illuminate offers innovative clinical learning and development solutions that transform complexity into creative, high-impact learning.</p>
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="solutions-overview-grid">
          ${solutions.map(renderHomeSolutionCard).join("")}
        </div>
      </div>
    </section>

    <section class="section cream technology-section">
      <div class="container feature-grid technology-showcase">
        <div class="feature-copy technology-copy">
          <p class="eyebrow">Learning technology</p>
          <h2>Custom products that make complex content easier to grasp.</h2>
          <p>PI Explorer, Clinical Study Explorer, and Magister LMS help field representatives understand critical information, retain clinical study content, and access learning in a platform that can be customized to your brand, layout, and content organization.</p>
          <div class="actions">
            <a class="button" href="#/pi-explorer">Product Details</a>
            <a class="button secondary" href="#/magister-lms">Explore LMS</a>
          </div>
          <div class="tech-stack" aria-label="Learning technology products">
            <a class="tech-platform" href="#/pi-explorer">
              <img src="${figmaImages.productLogos.piExplorer}" alt="PI Explorer" />
              <span>Complex prescribing information made easier to explore, discuss, and retain.</span>
            </a>
            <a class="tech-platform" href="#/cs-explorer">
              <img src="${figmaImages.productLogos.csExplorer}" alt="CS Explorer" />
              <span>Clinical study content organized into an interactive learning experience.</span>
            </a>
            <a class="tech-platform" href="#/magister-lms">
              <img src="${figmaImages.productLogos.magister}" alt="Magister LMS" />
              <span>A configurable LMS for branded learning, content delivery, and support.</span>
            </a>
          </div>
        </div>
        <div class="visual-panel technology-visual">
          <img class="asset-image" src="${figmaImages.elearningMockups}" alt="Learning technology mockups from the Figma design" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container feature-grid">
        <div class="visual-panel media-panel">
          <video class="asset-video" controls muted preload="metadata" playsinline data-autoplay-on-view>
            <source src="${figmaVideos.keyConcepts}" type="video/mp4" />
          </video>
        </div>
        <div class="feature-copy">
          <p class="eyebrow">Key concepts</p>
          <h2>Training experiences designed to make knowledge stick.</h2>
          <p>Use video, interactivity, and learning technology to turn complicated clinical content into clear, memorable moments your field team can apply.</p>
          <div class="actions">
            <a class="button" href="#/elearning">Explore eLearning</a>
          </div>
        </div>
      </div>
    </section>

    ${renderIbotSpotlight()}

    <section class="section soft">
      <div class="container split-grid">
        ${renderClientLogoShowcase()}
        <div class="split-copy">
          <p class="eyebrow">Partners</p>
          <h2>Illuminate is a proud partner of life sciences field training and development leaders.</h2>
          <p>Our client-focused, full-service team works as an extension of your internal team, with a thorough understanding of your products and culture.</p>
          <div class="actions">
            <a class="button" href="#/partners">View Partners</a>
            <a class="button secondary" href="#/about-us">Meet the Team</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-grid">
        <div class="split-copy">
          <p class="eyebrow">Illuminate in the news</p>
          <h2>Recent press coverage and awards.</h2>
          <p>From rare disease insights to learning trends, Illuminate shares practical perspectives on building memorable, effective training experiences.</p>
          <div class="actions">
            <a class="button" href="#/news">Read More</a>
          </div>
        </div>
        <div class="visual-panel">
          <img class="asset-image" src="${figmaImages.productLaunchCard}" alt="Product launch workshop visual from the Figma design" />
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderSolutionsOverview() {
  return `
    ${renderHeader("OUR SOLUTIONS", "Innovative solutions for every commercial and medical training need.")}
    <section class="section">
      <div class="container">
        <div class="prose">
          <p>Illuminate offers an array of options to support your field training goals with a comprehensive curriculum that addresses the subject matter most important to you, from disease state and market access to competitive landscape and prescribing information.</p>
        </div>
        <div class="cards-grid" style="margin-top: 44px">
          ${solutions.map(renderSolutionCard).join("")}
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderDetail(item) {
  const hasDetailMedia = item.image || item.detailVideo;

  return `
    ${renderHeader(item.kicker, item.headline)}
    <section class="section solution-detail">
      <div class="container">
        <div class="solution-cta-row">
          <a class="button solution-cta-tab" href="#/contact">Get Started</a>
        </div>
        <div class="solution-detail-grid ${hasDetailMedia ? "" : "solution-detail-grid-full"}">
          <article class="prose solution-copy">
          ${paragraphs(item.body)}
          ${item.closing ? `<p class="solution-closing">${escapeHtml(item.closing)}</p>` : ""}
          ${item.bullets ? `<h3>${escapeHtml(item.bulletsTitle)}</h3><ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>` : ""}
          ${
            item.external
              ? `<p class="solution-actions"><a class="button secondary" href="${item.external.href}" target="_blank" rel="noreferrer">${item.external.label}</a></p>`
              : ""
          }
          </article>
          ${renderDetailMedia(item)}
        </div>
        ${renderFeatureHighlight(item)}
        ${renderGallery(item)}
        ${
          item.video
            ? `<div class="inline-media"><video class="asset-video" controls muted preload="metadata" playsinline data-autoplay-on-view><source src="${item.video}" type="video/mp4" /></video></div>`
            : ""
        }
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderLeadership() {
  return `
    ${renderHeader(leadership.title, leadership.headline)}
    <section class="section">
      <div class="container detail-layout">
        <aside class="detail-visual">
          ${renderIcon({ icon: "LB" })}
          <h2>Leadership Bootcamp</h2>
          <a class="button" href="https://www.babson.edu/" target="_blank" rel="noreferrer">Learn More</a>
        </aside>
        <article class="prose">
          <h2>${escapeHtml(leadership.headline)}</h2>
          ${paragraphs(leadership.body)}
        </article>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderAbout() {
  return `
    ${renderHeader("ABOUT US", "We consistently earn high marks for the caliber of our work, our thorough understanding of the life sciences marketplace, and the passionate and positive attitude with which we approach every project.")}
    <section class="section compact values-section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Our Values</p>
            <h2>The principles that guide how we work.</h2>
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="values-grid">
          ${companyValues
            .map(
              (value) => `
                <article class="value-card">
                  <h3>${escapeHtml(value.title)}</h3>
                  <p>${escapeHtml(value.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split-grid">
        <article class="prose">
          <h2>Our Values</h2>
          <p>Illuminate is a client-focused, full-service training and development firm founded by industry veteran Shaun McMahon in 2004. Our client roster includes many global life science leaders.</p>
          <p>Our success is built upon a shared commitment to always place our clients' needs first. We function as an extension of your internal team, with a thorough understanding of your products and culture.</p>
          <p>Our clients count on us when they need a job done right and completed on time.</p>
        </article>
        <article class="prose">
          <h2>Our Pledge</h2>
          <ul>
            <li>We respect your time, honor your deadlines, and go above and beyond to meet your needs.</li>
            <li>We study your business, your products, and your brand so that we can seamlessly achieve your mission and goals.</li>
            <li>We always adhere to the highest standards of writing and design excellence.</li>
            <li>We deliver creative, well-considered solutions.</li>
            <li>We never tell you that something can’t be done or deliver a sub-standard product.</li>
          </ul>
          <p>These are the principles that Illuminate was built upon, and they remain firmly embedded in our DNA today.</p>
        </article>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Our Team</p>
            <h2>Our Team</h2>
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="team-grid">
          ${team
            .map((member, index) => {
              return `
                <button class="team-card team-card-button" type="button" data-team-index="${index}" aria-label="Read bio for ${escapeHtml(member.name)}">
                  <img class="avatar" src="${member.image}" alt="${escapeHtml(member.name)}" loading="lazy" />
                  <div>
                    <h3>${escapeHtml(member.name)}</h3>
                    <p>${escapeHtml(member.title)}</p>
                  </div>
                  <span class="text-link">Read Bio</span>
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="team-modal" id="team-modal" hidden>
          <div class="team-modal-backdrop" data-close-team-modal></div>
          <article class="team-modal-card" role="dialog" aria-modal="true" aria-labelledby="team-modal-name">
            <button class="team-modal-close" type="button" data-close-team-modal aria-label="Close bio">X</button>
            <img class="team-modal-image" id="team-modal-image" src="${team[0].image}" alt="${escapeHtml(team[0].name)}" />
            <div class="team-modal-copy">
              <p class="eyebrow">Our Team</p>
              <h2 id="team-modal-name"></h2>
              <p class="team-modal-title" id="team-modal-title"></p>
              <p class="team-modal-bio" id="team-modal-bio"></p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="section compact">
      <div class="container">
        <div class="content-card">
          <h3>Want to work with us?</h3>
          <p>We value diversity and inclusion, and aim to create a workplace where employees feel valued, respected, and empowered to contribute their unique perspectives and talents.</p>
          <a class="button" href="#/contact">Submit</a>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderNews() {
  return `
    ${renderHeader("NEWS", "Here is a a selection of Illuminate’s recent press coverage and awards.")}
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Media</p>
            <h2>Illuminate in the news</h2>
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="news-list">
          ${news
            .map(
              (item) => `
                <article class="news-item">
                  <div class="news-date">${escapeHtml(item.date)}</div>
                  <p>${escapeHtml(item.title)}</p>
                  <a class="text-link" href="${item.href}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Awards</p>
            <h2>Recognition</h2>
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="award-grid">
          ${awards
            .map(
              ([year, items]) => `
                <article class="award-year">
                  <strong>${year}</strong>
                  <ul>
                    ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderPartners() {
  return `
    ${renderHeader("PARTNERS", "Illuminate is a proud partner of the following life sciences field training and development leaders.")}
    <section class="section">
      <div class="container split-grid">
        ${renderClientLogoShowcase()}
        <article class="prose">
          <h2>Clients</h2>
          <p>Illuminate is a proud partner of the following life sciences field training and development leaders.</p>
          <h3>Partners</h3>
          <p>Our team works closely with organizations that need thoughtful, creative, and reliable training solutions for field teams.</p>
          <a class="button" href="#/contact">Start a Project</a>
        </article>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderContact() {
  return `
    ${renderHeader("CONTACT US", "Start a project, schedule a consultation, or connect with the Illuminate team.")}
    <section class="section">
      <div class="container contact-layout">
        <aside class="contact-panel">
          <h2 class="interior-title">Illuminate</h2>
          <p>${contact.address[0]}</p>
          <p>${contact.address[1]}</p>
          <p>${contact.address[2]}</p>
          <p>tel: <a class="text-link" href="tel:16174239300">${contact.phone}</a></p>
          <p>email: <a class="text-link" href="mailto:${contact.email}">${contact.email}</a></p>
          <p style="margin-top: 28px">We value diversity and inclusion, and aim to create a workplace where employees feel valued, respected, and empowered to contribute their unique perspectives and talents.</p>
        </aside>
        <form class="contact-form" action="mailto:${contact.email}" method="post" enctype="text/plain">
          <div class="field-grid">
            <label>First Name<input name="firstName" autocomplete="given-name" /></label>
            <label>Last Name<input name="lastName" autocomplete="family-name" /></label>
          </div>
          <div class="field-grid">
            <label>Email<input type="email" name="email" autocomplete="email" /></label>
            <label>Phone<input name="phone" autocomplete="tel" /></label>
          </div>
          <label>Message<textarea name="message"></textarea></label>
          <button class="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderNotFound() {
  return `
    ${renderHeader("Page not found", "This preview route does not exist yet.")}
    <section class="section">
      <div class="container">
        <a class="button" href="#/">Return Home</a>
      </div>
    </section>
    ${renderFooter()}
  `;
}

let activeTeamTrigger = null;
let carouselTimers = [];
let viewportVideoObserver = null;

function openTeamModal(index) {
  const member = team[index];
  const modal = document.getElementById("team-modal");
  if (!member || !modal) return;

  activeTeamTrigger = document.activeElement;
  document.getElementById("team-modal-image").src = member.image;
  document.getElementById("team-modal-image").alt = member.name;
  document.getElementById("team-modal-name").textContent = member.name;
  document.getElementById("team-modal-title").textContent = member.modalTitle || member.title;
  document.getElementById("team-modal-bio").textContent = member.bio;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".team-modal-close")?.focus();
}

function closeTeamModal() {
  const modal = document.getElementById("team-modal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (activeTeamTrigger && typeof activeTeamTrigger.focus === "function") {
    activeTeamTrigger.focus();
  }
  activeTeamTrigger = null;
}

function clearCarouselTimers() {
  carouselTimers.forEach((timer) => window.clearInterval(timer));
  carouselTimers = [];
}

function moveCarousel(shell, direction) {
  const track = shell?.querySelector(".carousel-track");
  const slides = track ? Array.from(track.querySelectorAll(".carousel-slide")) : [];
  if (!track || slides.length < 2) return;

  const currentIndex = Number(shell.dataset.slideIndex || 0);
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;
  shell.dataset.slideIndex = String(nextIndex);
  track.scrollTo({ left: nextIndex * track.clientWidth, behavior: "smooth" });
}

function startCarousel(shell) {
  const track = shell?.querySelector(".carousel-track");
  if (!track || track.querySelectorAll(".carousel-slide").length < 2) return;

  if (shell.dataset.timerId) window.clearInterval(Number(shell.dataset.timerId));
  const timer = window.setInterval(() => moveCarousel(shell, 1), 5000);
  shell.dataset.timerId = String(timer);
  carouselTimers.push(timer);
}

function initCarousels() {
  clearCarouselTimers();
  document.querySelectorAll("[data-carousel]").forEach((shell) => {
    shell.dataset.slideIndex = "0";
    startCarousel(shell);
  });
}

function pauseViewportVideo(video) {
  video.dataset.autoPaused = "true";
  video.pause();
  window.setTimeout(() => {
    delete video.dataset.autoPaused;
  }, 0);
}

function initViewportVideos() {
  if (viewportVideoObserver) {
    viewportVideoObserver.disconnect();
    viewportVideoObserver = null;
  }

  const videos = Array.from(document.querySelectorAll("video[data-autoplay-on-view]"));
  if (!videos.length) return;

  videos.forEach((video) => {
    video.muted = true;
    video.playsInline = true;
    video.addEventListener("pause", () => {
      if (!video.dataset.autoPaused && !video.ended) video.dataset.userPaused = "true";
    });
    video.addEventListener("play", () => {
      delete video.dataset.userPaused;
    });
  });

  if (!("IntersectionObserver" in window)) {
    videos.forEach((video) => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
    });
    return;
  }

  viewportVideoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          if (video.dataset.userPaused === "true") return;
          const playPromise = video.play();
          if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
        } else if (!video.paused) {
          pauseViewportVideo(video);
        }
      });
    },
    { threshold: [0, 0.35, 0.7] }
  );

  videos.forEach((video) => viewportVideoObserver.observe(video));
}

function scrollCarousel(button) {
  const shell = button.closest("[data-carousel]");
  const direction = button.dataset.carouselControl === "prev" ? -1 : 1;
  moveCarousel(shell, direction);
  startCarousel(shell);
}

function renderRoute() {
  const path = canonicalPath(currentPath());
  const app = document.getElementById("app");
  const solution = solutions.find((item) => item.route === path);

  closeTeamModal();
  clearCarouselTimers();

  if (path === "/") app.innerHTML = renderHome();
  else if (path === "/our-solutions") app.innerHTML = renderSolutionsOverview();
  else if (solution) app.innerHTML = renderDetail(solution);
  else if (path === leadership.route) app.innerHTML = renderLeadership();
  else if (path === "/about-us") app.innerHTML = renderAbout();
  else if (path === "/news") app.innerHTML = renderNews();
  else if (path === "/partners") app.innerHTML = renderPartners();
  else if (path === "/contact") app.innerHTML = renderContact();
  else app.innerHTML = renderNotFound();

  document.body.classList.remove("menu-open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
  initCarousels();
  initViewportVideos();
}

function init() {
  syncEmbeddedRouteFromParent();
  renderNav();
  renderRoute();

  const navMenu = document.getElementById("nav-menu");

  function clearDismissedDropdowns() {
    document.querySelectorAll(".nav-item.is-dropdown-dismissed").forEach((item) => {
      item.classList.remove("is-dropdown-dismissed");
    });
  }

  navMenu?.addEventListener("pointerleave", clearDismissedDropdowns);
  navMenu?.addEventListener("focusin", (event) => {
    const trigger = event.target.closest(".nav-trigger");
    if (trigger) trigger.closest(".nav-item")?.classList.remove("is-dropdown-dismissed");
  });

  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("menu-open", !expanded);
  });

  document.addEventListener("click", (event) => {
    const navTrigger = event.target.closest(".nav-trigger");
    if (navTrigger) {
      navTrigger.closest(".nav-item")?.classList.remove("is-dropdown-dismissed");
      return;
    }

    const teamButton = event.target.closest("[data-team-index]");
    if (teamButton) {
      openTeamModal(Number(teamButton.dataset.teamIndex));
      return;
    }

    const carouselButton = event.target.closest("[data-carousel-control]");
    if (carouselButton) {
      scrollCarousel(carouselButton);
      return;
    }

    if (event.target.closest("[data-close-team-modal]")) {
      closeTeamModal();
      return;
    }

    const link = event.target.closest("a[href^='#']");
    if (link) {
      document.body.classList.remove("menu-open");
      document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
      if (link.closest(".dropdown")) {
        link.closest(".nav-item")?.classList.add("is-dropdown-dismissed");
        link.blur();
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTeamModal();
  });

  window.addEventListener("hashchange", renderRoute);
}

init();
