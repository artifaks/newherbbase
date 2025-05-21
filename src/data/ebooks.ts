
export interface Ebook {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  coverImage?: string;
  pages: number;
  publishDate: string;
}

export const ebooks: Ebook[] = [
  {
    id: 1,
    title: "Herbal Medicine for Beginners",
    author: "Dr. Sophia Green",
    description: "A comprehensive guide to getting started with herbal medicine. Learn about the most common medicinal herbs, their properties, how to prepare them, and basic remedies for everyday ailments.",
    price: 12.99,
    category: "Beginner",
    pages: 184,
    publishDate: "2023-04-15"
  },
  {
    id: 2,
    title: "The Complete Guide to Adaptogens",
    author: "Dr. Michael Chen",
    description: "Explore the world of adaptogenic herbs and learn how they can help your body adapt to stress, boost immunity, and improve overall wellbeing. Includes recipes and preparation methods.",
    price: 15.99,
    category: "Specialized",
    pages: 210,
    publishDate: "2023-02-28"
  },
  {
    id: 3,
    title: "Herbal Remedies for Common Ailments",
    author: "Lisa Johnson",
    description: "A practical guide to treating everyday health issues with herbal preparations. From headaches to digestive problems, learn which herbs can help and how to use them safely.",
    price: 9.99,
    category: "Practical",
    pages: 156,
    publishDate: "2023-06-10"
  },
  {
    id: 4,
    title: "Growing Your Medicinal Herb Garden",
    author: "Thomas Miller",
    description: "Learn how to grow, harvest, and preserve your own medicinal herbs. This guide covers everything from soil preparation to drying and storing your herbs for maximum potency.",
    price: 14.99,
    category: "Gardening",
    pages: 232,
    publishDate: "2022-11-05"
  },
  {
    id: 5,
    title: "Traditional Herbal Wisdom: Ancient Healing Practices",
    author: "Dr. Elena Rodriguez",
    description: "Explore the rich traditions of herbal medicine from cultures around the world. This book delves into ancient healing systems and how they can be incorporated into modern life.",
    price: 18.99,
    category: "Traditional",
    pages: 278,
    publishDate: "2023-01-20"
  },
  {
    id: 6,
    title: "Herbal Formulation: Creating Custom Blends",
    author: "James Wilson",
    description: "Learn the art and science of creating custom herbal formulations for specific health needs. This advanced guide teaches principles of herbal energetics and synergy.",
    price: 19.99,
    category: "Advanced",
    pages: 245,
    publishDate: "2022-09-12"
  }
];
