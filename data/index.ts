import config from "@/next.config";

const baseUrl = config.basePath;

export const navItems = [
  { name: "A Propos", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Approches", link: "#approchs" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 h-48 md:h-96",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${baseUrl}/b1.svg`,
  },
  {
    id: 2,
    title: "Qui sommes-nous ?",
    description:
      "Nous sommes spécialisée dans le développement de solutions web, mobiles et numériques innovantes.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
  },
  {
    id: 3,
    title: "Notre Vision",
    description:
      "Faire de chaque idée une solution numérique d'excellence, en offrant des services personnalisés et à la pointe de la technologie.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
  },
  {
    id: 4,
    title: "Accompagnement où que vous soyez",
    description:
      "Où que vous soyez, nous vous accompagnons à chaque étape de votre projet.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: `${baseUrl}/grid.svg`,
  },

  {
    id: 5,
    title: "Notre Stack",
    description:
      "Nous utilisons les technologies les plus modernes et efficaces pour garantir la robustesse et la performance de vos solutions numériques",
    className: "md:col-span-6 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${baseUrl}/grid.svg`,
  },
  {
    id: 6,
    title: "Prêt à concrétiser votre idée ?",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 items-center justify-center ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
  },
];

export const services = [
  {
    id: 0,
    title: "Design UI/UX",
    description: "Créez des interfaces esthétiques et intuitives.",
    content:
      "Nous mettons en place des expériences utilisateur fluides et engageantes, maximisant l'interaction et la satisfaction utilisateur. Chaque interface est conçue pour être à la fois belle et fonctionnelle, garantissant une navigation intuitive.",
    className:
      "bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]",
  },
  {
    id: 1,
    title: "Développement Web et Mobile",
    description: "Développez des solutions robustes et évolutives.",
    content:
      "Nous concevons des applications web et mobiles, utilisant les technologies les plus récentes pour créer des solutions performantes, sécurisées, et faciles à utiliser. Que vous soyez une start-up ou une grande entreprise, nous transformons vos idées en applications prêtes à conquérir le marché.",
    className:
      "bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]",
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Augmentez votre visibilité en ligne.",
    content:
      "Nous gérons vos campagnes sur les réseaux sociaux, optimisons votre SEO, et mettons en œuvre des stratégies efficaces pour maximiser votre retour sur investissement.",
    className:
      "bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))]",
  },
  {
    id: 3,
    title: "Réalisation Multimédia",
    description: "Créez des contenus multimédia captivants.",
    content:
      "Nous produisons des vidéos, animations, et contenus interactifs qui captivent et engagent votre audience. Notre équipe utilise les outils les plus avancés pour réaliser des supports visuels et audiovisuels percutants, racontant votre histoire de manière inoubliable.",
    className: "bg-[linear-gradient(to_bottom_right,#FF0000,#FF6347)]",
  },
  {
    id: 4,
    title: "Suivi & Formations",
    description: "Performance, accompagnement et compétences",
    content:
      "Nous assurons la performance continue de vos solutions grâce à un support technique dédié. En plus, nous proposons des formations spécialisées pour développer vos compétences numériques, vous permettant ainsi de maîtriser pleinement les outils et technologies que nous mettons en place.",
    className:
      "bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))]",
  },
  {
    id: 5,
    title: "Consulting",
    description: "Conseils stratégiques pour transformation",
    content:
      "Profitez de notre expertise pour guider votre transformation numérique. Nos services de consulting stratégique vous aident à identifier les opportunités, surmonter les défis, et mettre en place des solutions digitales efficaces, personnalisées selon vos besoins.",
    className:
      "bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--blue-gray-500))]",
  },
];

export const approchs = [
  {
    id: 0,
    title: "Analyse preliminaire",
    description:
      "Nous commençons par une phase de découverte pour bien saisir vos objectifs, vos attentes, et les enjeux de votre projet. Cette étape est cruciale pour poser les bases d'une solution sur mesure qui correspond parfaitement à vos besoins spécifiques. Cette phase d'analyse permet également d'élaborer une stratégie marketing digitale personnalisée, alignée sur vos ambitions de croissance et d'impact.",
    icon: "",
  },
  {
    id: 1,
    title: "Maquettage & Création Multimédia",
    description:
      "À partir des insights obtenus, nous concevons des solutions originales qui allient esthétique et fonctionnalité. Nos designers et stratèges collaborent étroitement pour développer des maquettes et des prototypes qui incarnent votre vision tout en optimisant l'expérience utilisateur.",
    icon: "",
  },
  {
    id: 2,
    title: "Developpement & Integration",
    description:
      "Nous passons ensuite à la phase de réalisation, où nos développeurs et spécialistes en technologie construisent des plateformes robustes et évolutives. Chaque ligne de code est pensée pour garantir la performance, la sécurité, et la flexibilité, permettant ainsi à votre projet de grandir avec vos besoins.",
    icon: "",
  },
  {
    id: 3,
    title: "Optimisation & Tests",
    description:
      "Avant le lancement, nous effectuons des tests rigoureux pour garantir que chaque aspect de votre solution est optimisé pour la performance, l'ergonomie, et la sécurité.",
    icon: "",
  },
  {
    id: 4,
    title: "Deploiement & Formation",
    description:
      "Une fois les tests validés, nous déployons la solution et offrons une formation complète à votre équipe pour assurer une prise en main rapide et efficace.Notre objectif est de vous rendre autonome, tout en restant à votre disposition pour tout besoin futur.",
    icon: "",
  },
  {
    id: 5,
    title: "Suivi, Analyse & Améliorations",
    description:
      "Post-lancement, nous continuons à suivre la performance de votre projet à travers des outils d'analyse avancés. Nous fournissons au besoins des rapports réguliers et des recommandations pour ajuster la stratégie marketing, tout en assurant la maintenance technique et les mises à jour nécessaires pour garder votre solution à la pointe.",
    icon: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: `${baseUrl}/p1.svg`,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/christ-hope?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: `${baseUrl}/p2.svg`,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/christ-hope?tab=repositories",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: `${baseUrl}/p3.svg`,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/christ-hope?tab=repositories",
  },
  {
    id: 4,
    title: "KwetuLearn",
    description:
      "Système de gestion académique et éducative (En cours de developpement)",
    img: `${baseUrl}/p5.jpg`,
    link: "https://github.com/christ-hope?tab=repositories",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: `${baseUrl}/p4.svg`,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/christ-hope?tab=repositories",
  },
  {
    id: 5,
    title: "HealthConnect",
    description:
      "Plateforme complète de gestion et de suivi médical. (En cours de developpement)",
    img: `${baseUrl}/p3.svg`,
    link: "https://github.com/christ-hope?tab=repositories",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
