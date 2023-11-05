export const METADATA = {
  author: "YingHongLu",
  title: "Portfolio | YingHong Lu",
  description:
    "YingHong Lu is a Frontend Developer from Taiwan, interested in crafting beautiful and functional applications.",
  siteUrl: "https://github.com/lumislu",
  keywords: [
    "YingHong Lu",
    "Frontend Developer",
    "Web Developer",
    "Designer",
    "Portfolio",
    "Folio",
  ].join(", "),
  // image:
  //   "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English,Chinese",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "#hero",
  },
  {
    name: "Skills",
    ref: "#skills",
  },
  {
    name: "Projects",
    ref: "#projects",
  },
  {
    name: "Work",
    ref: "#work",
  },
  {
    name: "Contact",
    ref: "#contact",
  },
];

export const TYPED_STRINGS = [
  "I build things for the web",
  "A UI/UX Designer ",
  "I'm Frontend Developer",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: hope95123@gmail.com",
  },
  {
    name: "github",
    url: "https://github.com/lumislu",
  },
];

export const SKILLS = {
  languagesAndTools: ["html", "css", "javascript", "sass", "firebase", "figma"],
  librariesAndFrameworks: ["react", "nextjs", "tailwindcss", "bootstrap"],
  databases: ["mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "TastyVoyage",
    image: "/myProjects/tasty.png",
    description:
      "TastyVoyage是一個餐廳網站，它包含了商品管理、用戶管理、訂單管理等功能。",
    url: "https://fir-test-fd255.web.app",
    vedio:
      "https://file.doc.104.com.tw/ee7/929/c10/e33535ddf6c1409a97cd4b1c643042b903_v1_720p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231105T090041Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518398&X-Amz-Credential=AKIAJGHVGAPDLEXZK2EA%2F20231105%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=8b10f3e4a6d54f7bb0e4208acb95c546d316270733fa37cfb439f15436f388a1",
    func: "React、Boostrap、FireBase",
    github: "https://github.com/lumislu/foodweb-firebase",
  },
  {
    name: "Monsters",
    image: "/myProjects/monsters.png",
    description:
      "嗨！這個網頁是一個介紹怪獸電力公司的網站，提供角色介紹和故事大綱。",
    url: "https://lumislu.github.io/monsters-web-design/",
    vedio:
      "https://file.doc.104.com.tw/734/70d/117/021d3a3122444c03bdfc4b029e98cddb03_v1_720p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231105T090041Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518398&X-Amz-Credential=AKIAJGHVGAPDLEXZK2EA%2F20231105%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=e9fe70dfa61f53273a9c3df59bcd97331661475b42bf852f8068333d68d126a6",
    func: "HTML、CSS、JavaScript",
    github: "https://github.com/lumislu/monsters-web-design",
  },
  {
    name: "CineVerse",
    image: "/myProjects/cineverse.png",
    description:
      "可以使用Google或是本地註冊新用戶，你將會得到個人備忘錄，可以針對留言做新增、修改、刪除等動作。 這個網站使用EJS、MongoDB、Passport.js、Authentication、OAuth(Google Login Setup)等技術 。",
    url: "https://cine-verse-movieswebsite.vercel.app/",
    vedio:
      "https://user-images.githubusercontent.com/117718655/280532340-5cb54fd3-3d9f-45eb-9e13-fd641b924405.mp4",
    func: "Next.js、TMDB",
    github: "https://github.com/lumislu/CineVerse-movieswebsite",
  },
  {
    name: "Tarveler",
    image: "/myProjects/travel.png",
    description:
      "以Figma進行網頁設計的互動網頁，並運用Next.js和TaiwanCSS來實現前端功能。",
    url: "https://traveler-website-seven.vercel.app/",
    vedio:
      "https://user-images.githubusercontent.com/117718655/280534789-f28421dd-a8cc-4dba-935b-695839ddea1e.mp4",
    func: "Figma、Next.js、TaiwanCSS",
    github: "https://github.com/lumislu/traveler-website",
  },
  {
    name: "todo",
    image: "/myProjects/todo.png",
    description:
      "可以使用Google或是本地註冊新用戶，你將會得到個人備忘錄，可以針對留言做新增、修改、刪除等動作。 這個網站使用EJS、MongoDB、Passport.js、Authentication、OAuth(Google Login Setup)等技術 。",
    url: "https://todo-lumislu.vercel.app",
    vedio:
      "https://user-images.githubusercontent.com/117718655/280530826-f5de6398-cc4d-4db1-8872-3430604a2f50.mov",
    func: "EJS、MongoDB",
    github: "https://github.com/lumislu/todo/tree/main",
  },

  {
    name: "Midnight-dinner",
    image: "/myProjects/midnight.png",
    description: "單頁式網站，運用html、css及AOS動畫效果製作。",
    url: "https://lumislu.github.io/Midnight-Diner/",
    vedio:
      "https://user-images.githubusercontent.com/117718655/280527813-c5142787-443f-4609-9c60-f32c42a3c364.mov",
    func: "HTML、CSS、AOS",
    github: "https://github.com/lumislu/Midnight-Diner",
  },

  {
    name: "keyboard",
    image: "/myProjects/keyboard.png",
    description: "A singal page，運用Raect及3D spline製作。",
    url: "https://lumislu.github.io/keyboard-react/",
    vedio:
      "https://user-images.githubusercontent.com/117718655/280028413-479fa87f-fd65-4691-8606-7bcbf4ff2b86.mp4",
    func: "React + Boostrap + Spline",
    github: "https://github.com/lumislu/keyboard-react",
  },
  {
    name: "U-shaped-pipe",
    image: "/myProjects/pipe.png",
    description: "A singal page，運用Raect及3D spline製作。",
    url: "https://lumislu.github.io/pipe-balls/",
    vedio:
      "https://user-images.githubusercontent.com/117718655/279713829-87c87c9f-abd4-4373-b5e4-2ba84940750c.mov",
    func: "React + Boostrap + Spline",
    github: "https://github.com/lumislu/pipe-balls",
  },
  {
    name: "Fox-css",
    image: "/myProjects/fox.png",
    description: "單頁式網站，運用html、css及AOS動畫效果製作。",
    url: "https://lumislu.github.io/css-fox/",
    vedio:
      "https://user-images.githubusercontent.com/117718655/280529030-ea0b4e51-d17b-4d9d-a9c6-6cff9552d292.mov",
    func: "HTML、CSS",
    github: "https://github.com/lumislu/css-fox",
  },
];

export const WORK = [
  {
    id: 1,
    company: "Dukaan",
    title: "Frontend Developer",
    location: "Bangalore, Karnataka",
    range: "December - Current",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Aviate",
    title: "Frontend Developer Intern",
    location: "Goa",
    range: "May - October 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
