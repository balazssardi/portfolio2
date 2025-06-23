"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Logo from "../components/Logo";
import contacticon from "../../../public/contact.svg";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactSocials from "../components/ContactSocials";

export default function Contact() {
  return (
    <div className="relative">
      <motion.div
        className="absolute xl:w-[calc(20%-12px)] left-1/2 -translate-x-1/2 h-24 overflow-hidden flex items-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <Image alt="Contact icon" src={contacticon} width={720} height={720} />
      </motion.div>
      <div className="w-full min-h-screen relative pb-24">
        <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3 -z-10 bg-bg">
          <div className="border-l border-lines h-full"></div>
          <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-x xl:mx-2 border-lines h-full"></div>
          <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-r border-lines h-full"></div>
        </div>
        <motion.div
          className="flex flex-row items-center justify-evenly p-8 max-lg:flex-col gap-8 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-8 xl:w-1/5 px-4 py-8">
            <Logo text="Contact" />
            <p className="max-w-sm text-center">
              Feel free to reach out for collaborations, project inquiries, or
              just to connect <br /> I’m always open to new opportunities and
              creative conversations.
            </p>
          </div>
        </motion.div>
        <div className="flex xl:flex-row max-xl:flex-col gap-4 justify-center max-xl:px-4">
          <ContactForm />
          <ContactSocials />
        </div>
        <Navbar />
      </div>
    </div>
  );
}
