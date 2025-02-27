"use client";
import { useEffect } from "react";

interface CustomHeadProps {
  title: string;
  description: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);

    // Remove any existing canonical links
    document.querySelectorAll('link[rel="canonical"]').forEach((element) => {
      element.remove();
    });

    // Add canonical URL
    const canonicalLink = document.createElement("link");
    const hostName = window.location;

    canonicalLink.rel = "canonical";
    canonicalLink.href = hostName ? hostName.toString() : "/";
    document.head.appendChild(canonicalLink);
  }, [title, description]);

  return null;
};

export default CustomHead;
