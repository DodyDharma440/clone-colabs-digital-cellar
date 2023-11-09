import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const navMenus = [
  { label: "Services", path: "/services" },
  { label: "About", path: "#" },
  { label: "Our Principles", path: "#" },
  { label: "Community", path: "#" },
  { label: "Contact", path: "#" },
];

export const footerAddresses = [
  {
    address: "CoLabs Coworking 1/306 Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    address: "17/306 Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    address: "20/306 Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    address: "2 Acacia Place, Notting Hill",
    phone: "(03) 9111 2399",
  },
];

export const footerLinks = {
  left: [
    { label: "Services", path: "/services" },
    { label: "Our Principles", path: "#" },
    { label: "About", path: "#" },
    { label: "Community", path: "#" },
    { label: "Contact", path: "#" },
  ],
  right: [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms and Conditions", path: "#" },
  ],
};

export const socialLinks = [
  { href: "https://instagram.com", icon: FaInstagram },
  { href: "https://facebook.com", icon: FaFacebook },
  { href: "https://linkedin.com", icon: FaLinkedin },
  { href: "https://twitter.com", icon: FaTwitter },
];
