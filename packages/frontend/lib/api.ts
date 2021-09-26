import { Homepage, Article } from '../models';

function getStrapiURL(path: string) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

// Helper to make GET requests to Strapi
async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function fetchHomepage(): Promise<Homepage> {
  return fetchAPI('/homepage');
}

export async function fetchBlog(): Promise<Homepage> {
  return fetchAPI('/blog');
}

export async function fetchAbout(): Promise<Homepage> {
  return fetchAPI('/about');
}

export async function fetchImpressum(): Promise<Homepage> {
  return fetchAPI('/impressum');
}

export async function fetchArticles(limit?: number, start?:number): Promise<Article[]> {
  return fetchAPI(`/articles?_sort=created_at:DESC${limit ? `&_limit=${limit}` : ''}${start ? `&_start=${start}` : ''}`);
}
