import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "About", path: "/about" },
    { name: "Our Mission", path: "/mission" },
    { name: "Feedback", path: "/feedback" },
    { name: "Instructions", path: "/instructions" },
    { name: "Story", path: "/story" },
    { name: "Policies & Procedures", path: "/policies" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms and Conditions", path: "/terms" },
  ];

  const socialLinks = [
    { name: "Telegram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-space-dark font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-space-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-space-dark font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-space-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-space-dark font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-space-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-space-dark font-bold text-lg mb-4">Contact</h3>
            <p className="text-space-medium">
              For business inquiries:
              <br />
              <a
                href="mailto:contact@example.com"
                className="text-primary hover:underline"
              >
                contact@example.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-space-light/20 text-center text-space-medium">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;