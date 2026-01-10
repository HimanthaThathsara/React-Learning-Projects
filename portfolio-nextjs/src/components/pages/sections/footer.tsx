"use client";

import {Logo} from "../../ui/logo";
import {Github, Heart, Linkedin, Mail, Twitter} from "lucide-react";
import dayjs from "dayjs";
import {motion} from "motion/react";
import {siteConfig} from "../../../config/site";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: siteConfig.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: siteConfig.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: siteConfig.twitter,
      label: "X (Twitter)",
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t px-4 py-3.5 md:px-8">
      <div className="text-foreground/70 flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
        <div className="inline-flex items-center gap-4">
          <motion.a href="#home" whileHover={{y: -2}} whileTap={{scale: 0.95}} className="hover:bg-foreground/5 rounded-md border px-2 py-1 transition-all">
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
