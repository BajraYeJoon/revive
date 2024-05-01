import bottle from "@/public/bottle.jpg";
import cotton from "@/public/cotton.jpg";
import fishing from "@/public/nets.jpg";
import ocean from "@/public/ocean.jpg";
import poly from "@/public/poly.jpg";
import textile from "@/public/textile.jpg";
import p1 from "@/public/p1.jpg";
import p2 from "@/public/p2.jpg";
import p3 from "@/public/p3.jpg";
import p4 from "@/public/p4.png";

export const navLists = [
  "Shop",
  "About Us",
  "Sustainability",

  "Impact",
  "Contact",
];

export const materialsLists = [
  {
    title: "Repurposed Plastic Bottles",
    description:
      "Discarded plastic bottles are meticulously cleaned, shredded, and transformed into strong, versatile yarn for laces, straps, and even certain sneaker components.",
    img: bottle,
  },
  {
    title: "Ghost Nets Get a New Mission",
    description:
      "Ghost nets, abandoned fishing gear that harms marine life, are collected and recycled into durable materials for shoe panels.",
    img: fishing,
  },
  {
    title: "Ocean Waste Finds a New Purpose",
    description:
      "Ocean plastic and other waste are collected and repurposed into innovative materials for soles, linings, and various sneaker components.",
    img: ocean,
  },
  {
    title: "Recycled Textiles",
    description:
      "We breathe new life into pre-consumer and post-consumer fabric scraps and old clothing, using them for linings, insoles, and accents.",
    img: textile,
  },
  {
    title: "Recycled Polyester",
    description:
      "Derived from used plastic bottles (and sometimes textiles), this versatile material finds its way into laces, straps, and even uppers.",
    img: poly,
  },
  {
    title: "Sustainable Alternatives",
    description:
      "We explore innovative options like natural cork for breathable linings, organic cotton for some upper materials, and even algae-based materials for lightweight components.",
    img: cotton,
  },
];

export const metrics = [
  {
    title: "Reduced Waste",
    value: "8 bottles recycled",
    impact: "2.4kg less plastic waste",
    icon: "RecycleSymbol",
  },
  {
    title: "Lower Footprint",
    value: "30% less carbon",
    impact: "saves 5kg CO2 per pair",
    icon: "MinusSymbol",
  },
  {
    title: "Cleaner Oceans",
    value: "Removes 0.5kg ocean waste",
    impact: "Less pollution in sea beds",
    icon: "Checkmark",
  },
  {
    title: "Water Conservation",
    value: "Up to 70% less water used",
    impact: "Continues to save water",
    icon: "MinusSymbol",
  },
];

export const products = [
  {
    name: "Trailblazer",
    description: "Ideal for outdoor activities",
    price: "$9.99",
    img: p1,
  },
  {
    name: "Apex",
    description: "Highlights performance and reaching the top",
    price: "$8.99",
    img: p2,
  },
  {
    name: "Groundforce",
    description: "Evokes a sense of durability",
    price: "$7.99",
    img: p3,
  },

  {
    name: "Sustain",
    description: "Evokes a sense of sustainability",
    price: "$6.99",
    img: p4,
  },
];

export const footerLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "Support" },
  { href: "#", text: "Products" },
  { href: "#", text: "Terms & Conditions" },
];
