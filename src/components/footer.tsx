"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    async function checkAndUpdateVisitorCount() {
      try {
        // Fetch the user's IP address using an external IP API
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        const userIP = data.ip;

        // Retrieve stored IP addresses from localStorage
        const storedIPs = JSON.parse(localStorage.getItem("visitorIPs") || "[]");

        if (!storedIPs.includes(userIP)) {
          // If IP is new, increment the visitor count and store the new IP
          const storedCount = localStorage.getItem("visitorCount");
          let count = storedCount ? parseInt(storedCount) : 0;
          count++;

          setVisitorCount(count); // Update the visitor count in state
          localStorage.setItem("visitorCount", count.toString()); // Save new count
          storedIPs.push(userIP);
          localStorage.setItem("visitorIPs", JSON.stringify(storedIPs)); // Store updated IP list
        } else {
          // If IP already exists, just retrieve the current count
          setVisitorCount(parseInt(localStorage.getItem("visitorCount") || "0"));
        }
      } catch (error) {
        console.error("Error fetching user IP:", error);
      }
    }

    checkAndUpdateVisitorCount();
  }, []);

  return (
    <footer className="mb-5 px-4 text-center text-gray-600">
      <motion.small
        className="mb-2 block text-lg font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &copy; Made by <span className="text-blue-500">Omkar Bhavare</span> 🫶
      </motion.small>
      <motion.p
        className="text-sm text-gray-500"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Unique Visitors: <strong>{visitorCount}</strong>
      </motion.p>
    </footer>
  );
}
