"use client";


import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submitBtn";
import emailjs from "emailjs-com";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const [formData, setFormData] = useState({ senderEmail: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // EmailJS configuration
 

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send the email using EmailJS
    emailjs
      .send("service_9hcj9pf", "template_9nx5odh", {
        senderEmail: formData.senderEmail,  // Pass sender email
        message: formData.message,          // Pass the message
        
      }, "akreZzG01YIIoqy5a")
      .then(() => {
        setStatus("Email sent successfully!");
        setIsSubmitting(false); 
        setFormData({ senderEmail: "", message: "" });  // Reset form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text || error);
        setStatus("Failed to send email. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to contact me directly through this form
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitBtn text={isSubmitting ? "Sending..." : "Submit"} disabled={isSubmitting} />
      </form>

      {status && (
        <p className="mt-4 text-gray-700 dark:text-white/80">{status}</p>
      )}
    </motion.section>
  );
}
