interface Image {
    name: string,
    alternativeText?: string,
    caption?: string,
    ext: string,
    mime: string,
    size: 7.5,
    url: string,
    previewUrl?: string,

}

interface Author {
  name: string,
  email: string,
  picture?: Image
}

interface Category {
  name: string,
}

interface Seo {
  metaTitle: string,
  metaDescription: string,
  shareImage?: Image
}

interface ArticleContent {
  title: string,
  content: string,
  image?: Image
}

export interface Homepage {
  description: string;
  seo: Seo
}

export interface Blog {
  seo: Seo
}

export interface About {
  content: string;
  seo: Seo
}

export interface Impressum {
  impressum: string;
  seo: Seo
}

export interface Article {
  id: number,
  title: string,
  description: string,
  image: Image,
  author: Author,
  category: Category,
  content: ArticleContent[],
}
