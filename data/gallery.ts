import { GalleryCategory, GalleryItem } from "@/types/galleryItem";

export const galleryItems: GalleryItem[] = [
	{
		id: "gallery-1",
		title: "SweatAI landing flow",
		description: "Early product views from the Agentic Era hackathon studio management concept.",
		category: GalleryCategory.Professional,
		image: "/images/projects/sweatAI.png",
		date: "2026-11-07",
		tags: ["AI", "Product", "Hackathon"],
		externalLink: "https://my-fitness-ai-nine.vercel.app",
	},
	{
		id: "gallery-2",
		title: "Studio dashboard concept",
		description: "Operational dashboard explorations for scheduling and resource planning.",
		category: GalleryCategory.Creative,
		image: "/images/projects/test1.png",
		date: "2026-11-07",
		tags: ["Dashboard", "UI", "Operations"],
	},
	{
		id: "gallery-3",
		title: "Agent workflow view",
		description: "A closer look at the automation-oriented workflow interface used during the hackathon build.",
		category: GalleryCategory.Professional,
		image: "/images/projects/test3.png",
		date: "2026-11-07",
		tags: ["Automation", "UX", "Prototype"],
	},
	{
		id: "gallery-4",
		title: "Valji identity",
		description: "A simple brand asset used alongside the infrastructure and support experience timeline.",
		category: GalleryCategory.Professional,
		image: "/images/logos/valji.png",
		date: "2020-05-04",
		tags: ["Operations", "IT", "Support"],
	},
];
