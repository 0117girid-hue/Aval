
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface MomentNote {
  id: string;
  text: string;
  author: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}
