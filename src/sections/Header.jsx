import '/src/finisher-header.es5.min.js';
import '../styles/header.css';
import profilePic from '../assets/images/profile.jpg';
import ContactIcon from "../components/ContactIcon";
import { useEffect } from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Header() {
  const text = "Welcome";
  const contacts = [
    {
      Icon : FaWhatsapp,
      url: "https://wa.me/+573226867932",
      label: "WhatsApp",
      hoverColor: "green",
    },
    {
      Icon : FaLinkedin,
      url: "https://www.linkedin.com/in/camilo-marín-naranjo-794aa7275",
      label: "LinkedIn",
      hoverColor: "blue",
    },
    {
      Icon : FaGithub,
      url: "https://github.com/camilomarinN",
      label: "GitHub",
      hoverColor: "gray",
    },
  ];
  
   useEffect(() => {
      new window.FinisherHeader({
        count: 150,
        size: { min: 1, max: 10, pulse: 0 },
        speed: { x: { min: 0, max: 0.5 }, y: { min: 0, max: 0.6 } },
        colors: {
          background: "#000000",
          particles: ["#ffffff", "#7f7d7d"],
        },
        blending: "overlay",
        opacity: { center: 1, edge: 0 },
        skew: 0,
        shapes: ["c", "s", "t"],
      });
  }, []);
  return (
   <div className="finisher-header flex flex-col items-center justify-center ">
    <img src={profilePic} className='w-50 h-50 object-cover object-[50%_20%] rounded-full border-4 border-white mx-auto shadow-(--neon) profilepic-animation mb-10'></img>
    <h1 className="welcome">
      {text.split("").map((char, index) => (
        <span key={index} style={{ "--i": index }}>
          {char}
        </span>
      ))}
    </h1>
    <h2 className='animated-text'>to Camilo Marín's Portfolio</h2>
    <div className="mb-5">
       <div className="flex gap-6">
        {contacts.map((contact, index) => (
          <ContactIcon
            key={index}
            Icon={contact.Icon}
            url={contact.url}
            label={contact.label}
            hoverColor={contact.hoverColor}
          />
        ))}
      </div>
    </div>
   </div>
  );
}
