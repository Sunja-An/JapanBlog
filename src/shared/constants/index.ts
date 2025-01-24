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
