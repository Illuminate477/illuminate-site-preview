const figmaImages = {
  logo: "assets/brand/illuminate-logo.png",
  footer: "assets/figma/illuminate-footer-background.jpg",
  pix: "assets/figma/PIX.png",
  csx: "assets/figma/CSX.png",
  elearning: "assets/figma/eLearning.png",
  workshop: "assets/figma/Workshop.png",
  elearningMockups: "assets/figma/e-learning-mockups.png",
  productLaunchCard: "assets/figma/frame-45-product-launches.png",
  platforms: "assets/figma/variety-of-platforms.png",
  wordCloud: "assets/figma/word-cloud.png",
  sandbox: "assets/figma/sandbox.png",
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
  keyConcepts: "assets/video/key-concepts-video.mp4",
  workshopPresentation: "assets/video/workshop-presentation-video-v3.mp4",
};

const partnerLogos = ["Madrigal", "Genentech", "Gilead", "Pfizer", "moderna"];

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
    route: "/services/elearning",
    icon: "eL",
    iconImage: figmaImages.icons.foundational,
    detailIcon: figmaImages.icons.foundationalBlue,
    image: figmaImages.elearningMockups,
    video: figmaVideos.elearningDemo,
    kicker: "Our solutions: eLearning",
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
    route: "/services/workshops",
    icon: "W",
    iconImage: figmaImages.icons.nationalMeetings,
    detailIcon: figmaImages.icons.productLaunchBlue,
    image: figmaImages.workshop,
    video: figmaVideos.workshopPresentation,
    kicker: "Our solutions: Workshops",
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
    route: "/services/learning-retention",
    icon: "LR",
    iconImage: figmaImages.icons.retention,
    detailIcon: figmaImages.icons.retentionBlue,
    image: figmaImages.platforms,
    kicker: "Our solutions: Learning Retention",
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
    route: "/products/pi-explorer",
    icon: "PI",
    iconImage: figmaImages.icons.productLaunch,
    detailIcon: figmaImages.icons.productLaunchBlue,
    image: figmaImages.pix,
    kicker: "Our solutions: PI Explorer",
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
    route: "/products/cs-explorer",
    icon: "CS",
    iconImage: figmaImages.icons.innovations,
    detailIcon: figmaImages.icons.innovationsBlue,
    image: figmaImages.csx,
    kicker: "Our solutions: Clinical Study Explorer",
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
    route: "/products/magister-lms",
    icon: "LMS",
    iconImage: figmaImages.icons.rareDisease,
    detailIcon: figmaImages.icons.rareDiseaseBlue,
    image: figmaImages.elearning,
    kicker: "Our solutions: Magister LMS",
    headline: "Innovative solutions for every field training need.",
    short: "Illuminate’s Magister allows for customization of branding, layout, and content organization.",
    body: [
      "The Magister LMS is an online SaaS platform, which means clients do not need to worry about infrastructure (we own and maintain the hardware and software), software updates (these are transparent to users), or management (IT and/or LMS administration headcounts).",
      "With our concierge service, we address all aspects of day-to-day LMS operations and support, including roster management, content production and publishing, assignments and notifications, and tracking and reporting, ultimately providing a full helpdesk solution to guide and support users in all their activities.",
      "Moreover, Magister is a unique, flexible LMS that allows for customization of branding, layout, and content organization. In addition to supporting all industry standards for automatically importing and publishing content, Magister offers a built-in authoring solution through which clients can quickly and inexpensively create and publish content in several different ways, via easy-to-use, pre-built Excel or PowerPoint templates, or by using the full power of the authoring environment directly in the system.",
      "This facilitates the production of virtually any type of course, assessment, survey, event, and documentation asset, thereby meeting a range of organizational needs.",
      "Finally, Magister’s unique design and implementation make the platform a rare type of solution that can serve organizations of any size and seamlessly grow with each client, from small, vertical businesses to large, worldwide corporations.",
    ],
    external: { label: "Experience Magister®", href: "https://magisterlms.com/" },
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

const team = [
  ["Shaun McMahon", "President, Founder"],
  ["Maria Bocanegra", "Project Director"],
  ["Nathanael Otañez", "Project Manager"],
  ["Kristian Dawes", "Learning Platform Specialist"],
  ["Faridon Dadrass", "Vice President of Operations"],
  ["Daniel Goldsmith", "Project Director"],
  ["Mason Jones", "Business Development Specialist"],
  ["William Hwang", "Sr. Medical Editor"],
  ["Juan Carlos Pinedo", "Dir, Learning Technology"],
  ["Kara Fitzgibbon", "Sr. Business Dev. Project Mgr."],
  ["Mike Miedzianowski", "Business Development Specialist"],
  ["Vrushali Nar", "eLearning Developer"],
  ["Carly Commiso", "Director of Learning Strategy"],
  ["Sarah Looney", "Sr. Project Manager"],
  ["Janiel Rosario", "Project Associate"],
  ["Prasanna Ranade", "Sr. Graphic Designer"],
  ["Ryan Hoke", "Business Development Director"],
  ["Farheen Shaikh", "Medical Reviewer"],
  ["Lauren McNally", "Assoc. Dir. of Learning Strategy"],
  ["Rich Daley", "Graphic Designer / Sr. Graphic Designer"],
];

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
  {
    label: "Services",
    items: solutions.filter((item) => item.type === "Service").map(({ navTitle, route }) => ({ label: navTitle, route })),
  },
  {
    label: "Products",
    items: solutions.filter((item) => item.type === "Product").map(({ navTitle, route }) => ({ label: navTitle, route })),
  },
  { label: "Leadership", route: leadership.route },
  {
    label: "Media",
    items: [
      { label: "News", route: "/news" },
      { label: "Partners", route: "/partners" },
    ],
  },
  { label: "About", route: "/about" },
  { label: "Contact", route: "/contact" },
];

function pathToHash(route) {
  return route === "/" ? "#/" : `#${route}`;
}

function currentPath() {
  return window.location.hash.replace(/^#/, "") || "/";
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
    { pattern: /\b(e ?learning|elearning)\b/, route: "/services/elearning" },
    { pattern: /\bworkshops?\b/, route: "/services/workshops" },
    { pattern: /\blearning retention\b|\bretention\b/, route: "/services/learning-retention" },
    { pattern: /\b(pi explorer|pix|prescribing information)\b/, route: "/products/pi-explorer" },
    { pattern: /\b(cs explorer|clinical study|clinical studies)\b/, route: "/products/cs-explorer" },
    { pattern: /\b(magister|lms)\b/, route: "/products/magister-lms" },
    { pattern: /\b(leadership|bootcamp|babson)\b/, route: leadership.route },
    { pattern: /\babout\b/, route: "/about" },
    { pattern: /\bcontact\b/, route: "/contact" },
    { pattern: /\b(news|media|awards?)\b/, route: "/news" },
    { pattern: /\bpartners?\b/, route: "/partners" },
    { pattern: /\bsolutions?\b/, route: "/solutions" },
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
    <article class="content-card">
      ${renderIcon(item)}
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.short)}</p>
      <a class="button secondary" href="${pathToHash(item.route)}">Learn More</a>
    </article>
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
        <p class="hero-copy">Whether you’re launching a new product, conducting workshops, or developing learning engagement strategies, Illuminate offers innovative clinical learning and development solutions that transform complexity into creative, high-impact learning.</p>
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
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="icon-grid">
          ${solutions
            .map(
              (item) => `
                <a class="icon-card" href="${pathToHash(item.route)}">
                  ${renderIcon(item)}
                  <strong>${escapeHtml(item.navTitle)}</strong>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section cream">
      <div class="container feature-grid">
        <div class="feature-copy">
          <p class="eyebrow">Learning technology</p>
          <h2>Custom products that make complex content easier to grasp.</h2>
          <p>PI Explorer, Clinical Study Explorer, and Magister LMS help field representatives understand critical information, retain clinical study content, and access learning in a platform that can be customized to your brand, layout, and content organization.</p>
          <div class="actions">
            <a class="button" href="#/products/pi-explorer">Product Details</a>
          <a class="button secondary" href="#/products/magister-lms">Explore LMS</a>
          </div>
        </div>
        <div class="visual-panel">
          <img class="asset-image" src="${figmaImages.elearningMockups}" alt="Learning technology mockups from the Figma design" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container feature-grid">
        <div class="visual-panel media-panel">
          <video class="asset-video" controls preload="metadata" playsinline>
            <source src="${figmaVideos.keyConcepts}" type="video/mp4" />
          </video>
        </div>
        <div class="feature-copy">
          <p class="eyebrow">Key concepts</p>
          <h2>Training experiences designed to make knowledge stick.</h2>
          <p>Use video, interactivity, and learning technology to turn complicated clinical content into clear, memorable moments your field team can apply.</p>
          <div class="actions">
            <a class="button" href="#/services/elearning">Explore eLearning</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container split-grid">
        <div class="client-orbit" aria-label="Client logos from the Figma design">
          ${partnerLogos
            .map((name) => `<span class="logo-bubble">${escapeHtml(name)}</span>`)
            .join("")}
        </div>
        <div class="split-copy">
          <p class="eyebrow">Partners</p>
          <h2>Illuminate is a proud partner of life sciences field training and development leaders.</h2>
          <p>Our client-focused, full-service team works as an extension of your internal team, with a thorough understanding of your products and culture.</p>
          <div class="actions">
            <a class="button" href="#/partners">View Partners</a>
            <a class="button secondary" href="#/about">Meet the Team</a>
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
    ${renderHeader("Our Solutions", "Innovative solutions for every commercial and medical training need.")}
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
  return `
    ${renderHeader(item.kicker, item.headline)}
    <section class="section">
      <div class="container detail-layout">
        <aside class="detail-visual">
          ${renderIcon(item, "detail")}
          <h2>${escapeHtml(item.title)}</h2>
          ${item.image ? `<div class="detail-image"><img class="asset-image" src="${item.image}" alt="${escapeHtml(item.title)} visual" /></div>` : ""}
          <a class="button" href="#/contact">Get Started</a>
        </aside>
        <article class="prose">
          <h2>${escapeHtml(item.title)}</h2>
          ${paragraphs(item.body)}
          ${
            item.video
              ? `<div class="inline-media"><video class="asset-video" controls preload="metadata" playsinline><source src="${item.video}" type="video/mp4" /></video></div>`
              : ""
          }
          ${item.bullets ? `<h3>${escapeHtml(item.bulletsTitle)}</h3><ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>` : ""}
          ${
            item.external
              ? `<p><a class="button secondary" href="${item.external.href}" target="_blank" rel="noreferrer">${item.external.label}</a></p>`
              : ""
          }
        </article>
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
    ${renderHeader("About Us", "We consistently earn high marks for the caliber of our work, our thorough understanding of the life sciences marketplace, and the passionate and positive attitude with which we approach every project.")}
    <section class="section compact">
      <div class="container">
        <img class="wide-asset" src="${figmaImages.wordCloud}" alt="Illuminate values word cloud from the Figma design" />
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
            <h2>Current Illuminate team</h2>
          </div>
          <span class="rule" aria-hidden="true"></span>
        </div>
        <div class="team-grid">
          ${team
            .map(([name, title]) => {
              const initials = name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0])
                .join("");
              return `
                <article class="team-card">
                  <div class="avatar" aria-hidden="true">${escapeHtml(initials)}</div>
                  <div>
                    <h3>${escapeHtml(name)}</h3>
                    <p>${escapeHtml(title)}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
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
    ${renderHeader("News", "Here is a a selection of Illuminate’s recent press coverage and awards.")}
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
    ${renderHeader("Partners", "Illuminate is a proud partner of the following life sciences field training and development leaders.")}
    <section class="section">
      <div class="container split-grid">
        <div class="client-orbit" aria-label="Client logos from the Figma design">
          ${partnerLogos
            .map((name) => `<span class="logo-bubble">${escapeHtml(name)}</span>`)
            .join("")}
        </div>
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
    ${renderHeader("Contact Us", "Start a project, schedule a consultation, or connect with the Illuminate team.")}
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

function renderRoute() {
  const path = currentPath();
  const app = document.getElementById("app");
  const solution = solutions.find((item) => item.route === path);

  if (path === "/") app.innerHTML = renderHome();
  else if (path === "/solutions") app.innerHTML = renderSolutionsOverview();
  else if (solution) app.innerHTML = renderDetail(solution);
  else if (path === leadership.route) app.innerHTML = renderLeadership();
  else if (path === "/about") app.innerHTML = renderAbout();
  else if (path === "/news") app.innerHTML = renderNews();
  else if (path === "/partners") app.innerHTML = renderPartners();
  else if (path === "/contact") app.innerHTML = renderContact();
  else app.innerHTML = renderNotFound();

  document.body.classList.remove("menu-open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function init() {
  syncEmbeddedRouteFromParent();
  renderNav();
  renderRoute();

  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("menu-open", !expanded);
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (link) {
      document.body.classList.remove("menu-open");
      document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("hashchange", renderRoute);
}

init();
