// import slider images
import Avatar1 from "../src/assets/img/avt1.png";
import Avatar2 from "../src/assets/img/avt2.png";
import Avatar3 from "../src/assets/img/avt3.png";

//import icon
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";


export const slider = [
  {
    message:
      "Classes are like magical blueprints that bring our code to life They allow us to create objects with unique characteristics and behaviors making our programs more organized modular and powerful",
    image: Avatar1,
    name: "Laurie Howell",
    email: "la.howell@gmail.com",
  },
  {
    message:
      "After web development, the world is our digital playground. We can explore exciting domains like mobile app development, data science, AI,technologies like blockchain or virtual reality",
    image: Avatar2,
    name: "Christie Ernser",
    email: "chr.ernser@gmail.com",
  },
  {
    message:
      "We can dive into roles like data analyst, data scientist, or even specialize in big data technologies. Were equipped with the skills to shape the future with data-driven insights and innovation.",
    image: Avatar3,
    name: "Frankie Collins",
    email: "frank.collins@gmail.com",
  },
  {
    message:
      "Classes are like a classroom where knowledge comes to life. They provide structure, guidance, and opportunities for growth. Interacting with classmates and teachers creates a dynamic.",
    image: Avatar1,
    name: "Laurie Howell",
    email: "la.howell@gmail.com",
  },
  {
    message:
      "Our sir is truly remarkable. With a wealth of knowledge and a passion for teaching, he brings the subject to life. His guidance, support, and enthusiasm inspire.",
    image: Avatar2,
    name: "Christie Ernser",
    email: "chr.ernser@gmail.com",
  },
  {
    message:
      "The environment is our precious home, deserving our utmost care and protection. It provides us with resources, sustains life, and offers breathtaking beauty.",
    image: Avatar3,
    name: "Frankie Collins",
    email: "frank.collins@gmail.com",
  },
];

export const socialData = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaPinterestP /> },
  { href: "/", icon: <FaDiscord /> },
];

export const footerData = {
  contact: {
    title: "Contact Me",
    address: "3784 kumthekar road, #8 Pune, CA 69000",
    phone: "9898988989",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 AM",
      },
      {
        days: "saturday - sunday",
        hours: "Off-day",
      },
    ],
  },
  social: {
    title: "Contact",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
      { href: "/", icon: <FaDiscord /> },
    ],
  },
};


