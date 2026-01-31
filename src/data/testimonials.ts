export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  title: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    company: 'DataFlow AI',
    image: '/assets/testimonial_1.jpg',
    title: '$5M Seed Closed in 3 Weeks',
    quote: 'We were getting ignored by every VC we reached out to. Happy Pitch completely rewrote our narrative. Three weeks later, we had term sheets from top-tier firms fighting to lead our round.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'GreenTech Solutions',
    image: '/assets/testimonial_2.jpg',
    title: '$12M Series A Oversubscribed',
    quote: 'Our technical complexity was killing investor interest. They distilled our vision into a story that made the opportunity undeniable. Our round was oversubscribed within days.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer Walsh',
    role: 'Managing Partner',
    company: 'Horizon Ventures',
    image: '/assets/testimonial_3.jpg',
    title: 'VCs Notice The Difference',
    quote: 'I review 200+ decks a month. Happy Pitch decks are immediately recognizable—they cut through the noise and answer every question before I even ask it. I actively seek out their clients now.',
    rating: 5,
  },
];
