/*
 * Import Static Images & Icons
 */
import America from "/svg/america.svg";
import Github from "/svg/Github.svg";
import Instagram from "/svg/Instagram.svg";
import Japan from "/svg/japan.svg";
import Korea from "/svg/korea.svg";
import LinkedIn from "/svg/LinkedIn.svg";

import MyPhoto from "/logo/me.jpg";
import MierCat from "/logo/miercat.jpg";
import GlassMierCat from "/logo/GlassMier.png";

import SONULOGO from "/logo/SONU_LOGO.png";
import TEST_IMAGE from "/img/Testimage.jpeg";

/*
 * Export Static Images & Icons
 */

export const AmericaIcon = America;
export const GithubIcon = Github;
export const InstagramIcon = Instagram;
export const JapanIcon = Japan;
export const KoreaIcon = Korea;
export const LinkedInIcon = LinkedIn;

export const MyPhotoImg = MyPhoto;
export const MierCatImg = MierCat;
export const GlassMierCatImg = GlassMierCat;
export const SONULogo = SONULOGO;
export const IMAGE_TEST = TEST_IMAGE;

/*
 * ============================================================================================================
   Global Variables
 * ============================================================================================================
 */

type TypeCategoryContent = {
  title: string;
  content: string[];
};

export const CategoryContent: TypeCategoryContent[] = [
  {
    title: "Computer Science",
    content: ["OS", "Computer Structure"],
  },
  {
    title: "FrontEnd",
    content: [
      "React",
      "HTML",
      "CSS",
      "Tailwind",
      "styled-components",
      "Next.js",
    ],
  },
  {
    title: "BackEnd",
    content: ["Java", "Java SpringBoot", "Kotlin", "Docker", "Kubernetes"],
  },
  {
    title: "Mobile",
    content: ["Flutter", "Dart"],
  },
  {
    title: "DB",
    content: ["MySQL", "H2 Database"],
  },
];

export const test = {
  id: 0,
  title: "Next.js 에서 Request 가 제대로 들어가지 않는다?",
  description: "Request 가 제대로 들어가지 않는 다는 사실을 알고 계신가요..",
  content: "/test/WebPageDesign.md",
  createdAt: 20250131,
};

export const IntroduceContent = {
  name: "AN SUNWOO",
  country: "Republic Of Korea",
  introduce: "Hi, I am Sunwoo An, a junior frontend developer",
  frontEndTech: [
    "HTML",
    "CSS",
    "React.js",
    "Typescript",
    "Next.js",
    "Tailwind",
    "Styled-components",
  ],
  backEndTech: ["Nest.js"],
  content: "",
  githubLink: "https://www.github.com/Sunja-An",
  emailLink: "sunja1472@gmail.com",
  linkedInLink:
    "https://www.linkedin.com/in/%E3%82%BD%E3%83%8C-%E3%82%A2%E3%83%B3-2293b6342/",
};
