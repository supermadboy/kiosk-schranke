interface Image {
    name: string;
    alternativeText?: string;
    caption?: string;
    ext: string;
    mime: string;
    size: 7.5;
    url: string;
    previewUrl?: string;

}

interface Author {
  name: string;
  email: string;
  picture?: Image;
}

interface Category {
  name: string;
}

interface Seo {
  metaTitle: string;
  metaDescription: string;
  shareImage?: Image;
}

export interface Homepage {
  content: string;
  seo: Seo;
  popupEnabled: boolean;
  popupText: string;
  newsLetterText: string;
}

export interface Diary {
  seo: Seo;
  content: string;
}

export interface About {
  content: string;
  seo: Seo;
}

export interface Impressum {
  seo: Seo;
}

export interface Article {
  seo: Seo;
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: Image;
  author: Author;
  category: Category;
  content: string;
  // eslint-disable-next-line
  published_at: string;
}
