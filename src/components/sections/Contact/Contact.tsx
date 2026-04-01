"use client";

import { motion } from "framer-motion";
import { HiMail, HiClipboardCopy, HiCheck } from "react-icons/hi";
import { useState } from "react";
import { socialMedia, socialMediaItem } from "../Skills/utils";
import { useTranslation } from "@/context/LanguageContext";

const CONTACT_EMAIL = "danyzavala@gmail.com";

// Brand glow colors that match each platform's hoverClass
const glowMap: Record<string, string> = {
  Youtube: "hover:shadow-[0_0_20px_rgba(255,0,0,0.25)] hover:border-[#FF0000]/30",
  Instagram: "hover:shadow-[0_0_20px_rgba(212,48,137,0.25)] hover:border-[#D43089]/30",
  Github: "hover:shadow-[0_0_20px_rgba(130,100,255,0.25)] hover:border-[#8264ff]/30",
  Linkedin: "hover:shadow-[0_0_20px_rgba(0,115,177,0.25)] hover:border-[#0073b1]/30",
};

// Per-platform handle/url hints
const handleMap: Record<string, string> = {
  Youtube: "@eldanysaurio",
  Instagram: "@eldanysaurio",
  Github: "Danysaurio",
  Linkedin: "danizavala",
};

// Icon accent color per platform (always visible, brighter on hover)
const iconColorMap: Record<string, string> = {
  Youtube: "text-[#FF0000]/70 group-hover:text-[#FF0000]",
  Instagram: "text-[#D43089]/70 group-hover:text-[#D43089]",
  Github: "text-[#8264ff]/70 group-hover:text-[#8264ff]",
  Linkedin: "text-[#0073b1]/80 group-hover:text-[#0073b1]",
};

// Icon background tint per platform
const iconBgMap: Record<string, string> = {
  Youtube: "group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/20",
  Instagram: "group-hover:bg-[#D43089]/10 group-hover:border-[#D43089]/20",
  Github: "group-hover:bg-[#8264ff]/10 group-hover:border-[#8264ff]/20",
  Linkedin: "group-hover:bg-[#0073b1]/10 group-hover:border-[#0073b1]/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SocialCard = ({ title, url, icon: Icon }: socialMediaItem) => {
  const glow = glowMap[title] ?? "hover:border-white/20";
  const handle = handleMap[title] ?? "";
  const iconColor = iconColorMap[title] ?? "text-gray-400 group-hover:text-[#FFF170]";
  const iconBg = iconBgMap[title] ?? "group-hover:bg-white/10";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className={`group flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:translate-y-[-2px] ${glow}`}
    >
      <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${iconBg}`}>
        <Icon
          className={`text-2xl transition-colors duration-300 ${iconColor}`}
        />
      </div>
      <div className="min-w-0">
        <span className="block text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
          {title}
        </span>
        <span className="block text-xs text-gray-500 truncate group-hover:text-gray-400 transition-colors duration-300">
          {handle}
        </span>
      </div>
      <svg
        className="ml-auto flex-shrink-0 w-4 h-4 text-gray-600 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

const EmailBlock = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: silently fail — the mailto link still works
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#FFF170]/5 border border-[#FFF170]/20 backdrop-blur-sm hover:bg-[#FFF170]/10 hover:border-[#FFF170]/40 hover:shadow-[0_0_24px_rgba(255,241,112,0.12)] transition-all duration-300"
        aria-label={`Send email to ${CONTACT_EMAIL}`}
      >
        <HiMail className="flex-shrink-0 text-xl text-[#FFF170]/70 group-hover:text-[#FFF170] transition-colors duration-300" />
        <span className="text-base font-medium text-white/80 group-hover:text-white transition-colors duration-300 break-all">
          {CONTACT_EMAIL}
        </span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email to clipboard"
        className={`flex-shrink-0 flex items-center gap-2 px-4 py-3.5 rounded-2xl border backdrop-blur-sm text-sm font-medium transition-all duration-300 ${
          copied
            ? "bg-[#FFF170]/10 border-[#FFF170]/40 text-[#FFF170]"
            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
        }`}
      >
        {copied ? (
          <>
            <HiCheck className="text-base" />
            <span>{t("contact.copied")}</span>
          </>
        ) : (
          <>
            <HiClipboardCopy className="text-base" />
            <span>{t("contact.copy")}</span>
          </>
        )}
      </button>
    </div>
  );
};

const Contact = ({ id }: { id: string }) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="min-h-screen flex items-center bg-[#01102d33]"
    >
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-5 gap-4 px-5 sm:px-0 items-center py-20">
          {/* Left column */}
          <div className="col-span-5 md:col-span-3">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-[#FFF170]/10 text-[#FFF170] border border-[#FFF170]/20 mb-5">
                {t("contact.badge")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="accent-serif text-3xl md:text-5xl mb-4 leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {t("contact.heading")}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-gray-400 text-sm md:text-base mb-8 max-w-md leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("contact.tagline")}
            </motion.p>

            {/* Email block */}
            <motion.div
              className="mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                {t("contact.reachLabel")}
              </p>
              <EmailBlock />
            </motion.div>

            {/* Social cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                {t("contact.findLabel")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:pr-8">
              {socialMedia.map((item, i) => (
                <motion.div
                  key={`contact-social-${i}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                >
                  <SocialCard {...item} />
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <motion.div
              className="mt-10 pt-8 border-t border-white/5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
                {t("contact.footerNote")}
              </p>
            </motion.div>
          </div>

          {/* Right column — sticky robot */}
          <div className="col-span-5 md:col-span-2 relative hidden sm:flex items-center justify-center">
            <object
              aria-label="Robot - Contact me now"
              type="image/svg+xml"
              data="/r-6.svg"
              className="sticky top-10 md:max-h-[550px] sm:max-h-[350px] h-full w-full"
            >
              Robot - Contact me now
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
