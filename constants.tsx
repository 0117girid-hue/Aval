
import { TimelineEvent, MomentNote, GalleryItem } from './types';
import img1 from "./components/Assets/img1 (2).jpeg";
import img2 from "./components/Assets/img2.jpeg";
import img3 from "./components/Assets/img3.jpeg";
import img4 from "./components/Assets/img4.jpeg";
import img5 from "./components/Assets/img5.jpeg";
import img6 from "./components/Assets/img6.jpeg";
import img7 from "./components/Assets/img7.jpeg";
import img8 from "./components/Assets/img8.jpeg";
import img9 from "./components/Assets/img9.jpeg";
import img10 from "./components/Assets/img10.jpeg";

export const COLORS = {
  pink: '#FFD1DC',
  peach: '#FFDAB9',
  lavender: '#E6E6FA',
  white: '#FFFFFF',
  softRed: '#FF6B6B',
  deepPink: '#FF8DA1',
};

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '1',
    date: 'December 2, 2022',
    title: 'Our first Date ',
    description: 'The day our eyes met and the world quietly stood still.',
    image: img3,
  },
  {
    id: '2',
    date: 'December 29, 2022',
    title: 'Our First Alone Picture',
    description: 'A single picture that captured our smiles, our closeness, and our beginning.',
    image: img1,
  },
  {
    id: '3',
    date: 'December 5, 2025',
    title: 'Our First Trip',
    description: 'Chasing sunsets and making memories that will stay with us forever.',
    image: img4,
  },
  {
    id: '4',
    date: 'January 18, 2026',
    title: 'Choosing You, Again',
    description: 'Even though we were already us, I asked you again—just to promise you forever.',
    image: img2,
  },
];


export const GALLERY_DATA: GalleryItem[] = [
  { id: 'g1', url: img5, caption: 'Sweet Laughter' },
  { id: 'g2', url: img6, caption: 'Quiet Moments' },
  { id: 'g3', url: img7, caption: 'Hand in Hand' },
  { id: 'g4', url: img8, caption: 'The Perfect Day' },
  { id: 'g5', url: img9, caption: 'Forever Yours' },
  { id: 'g6', url: img10, caption: 'Pure Joy' },
];


export const MOMENTS_DATA: MomentNote[] = [
  { id: 'm1', text: "The first time I looked into your eyes in the English lab, I felt a love that changed something inside me.", author: "Me", color: "bg-pink-100" },
  { id: 'm2', text: "When I came to your bus stop to surprise you, I loved your reaction, and I loved the way you smiled shyly on the bus.", author: "Always", color: "bg-purple-100" },
  { id: 'm3', text: "Every day, the way you saved a seat for me on the bus, the way we sat together, and the way we listened to songs on one pair of earphones made me really happy.", author: "Love", color: "bg-orange-100" },
  { id: 'm4', text: "Our first bike ride together, the way you asked me so excitedly, and the way we went together— even now it feels like a dream. You were a little scared, but full of love, and it made my heart feel something special.", author: "Forever", color: "bg-red-50" },
];
