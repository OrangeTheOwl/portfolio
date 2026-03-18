import { GalleryCategory, GalleryItem } from "@/types/galleryItem";

export const galleryItems: GalleryItem[] = [
	{
		id: "gallery-1",
		title: "Junction 2nd place win",
		description: "One of the winning teams at the Junction hackathon for the Wolt challenge.",
		category: GalleryCategory.Award,
		image: "/images/projects/junctionWinners.jpg",
		date: "2025-11-17",
		tags: ["AI", "Award", "Hackathon"],
	},
	{
		id: "gallery-2",
		title: "Successful bouldering",
		description: "Working on my puzzle solving skills in the climbing gym.",
		category: GalleryCategory.Fitness,
		image: "/images/gallery/hobby02.jpg",
		tags: ["Hobby", "Climbing"],
	},
	{
		id: "gallery-3",
		title: "Motorcycling",
		description: "Stranded in the middle of nowhere because my spark plug decided to explode.",
		category: GalleryCategory.Other,
		image: "/images/gallery/hobby04.jpg",
		tags: ["Hobby", "Travel"],
	},
	{
		id: "gallery-4",
		title: "Hand embroidery",
		description: "A small hand-embroidered piece made as practice.",
		category: GalleryCategory.Creative,
		image: "/images/gallery/hobby03.jpg",
		tags: ["Hobby", "Arts & Crafts"],
	},
	{
		id: "gallery-5",
		title: "Failed bouldering attempt",
		description: "Discovering fall damage.",
		category: GalleryCategory.Fitness,
		image: "/images/gallery/hobby01.gif",
		tags: ["Hobby", "Climbing"],
	},
	{
		id: "gallery-6",
		title: "Masterchef",
		description: "A culinary masterpiece that I prepared for my friends.",
		category: GalleryCategory.Other,
		image: "/images/gallery/hobby06.jpg",
		tags: ["Hobby", "Cooking"],
	},
	{
		id: "gallery-7",
		title: "Being a tourist",
		description: "Saying hello to the reindeer.",
		category: GalleryCategory.Other,
		image: "/images/gallery/hobby05.jpg",
		tags: ["Hobby", "Tourism"],
	},
	{
		id: "gallery-8",
		title: "Lapinkansa article",
		description: "Featured in Laplands leading newspaper as a member of a growing startup.",
		category: GalleryCategory.Article,
		image: "/images/gallery/article01.png",
		date: "2026-01-15",
		externalLink: "https://www.lapinkansa.fi/sallan-lukiosta-valmistunut-zachary-burda-elaa-une/12478118",
		tags: ["Professional", "Article", "Lapinkansa"],
	}
	
	
];