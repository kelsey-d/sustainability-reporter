export interface gNewsResponse {
  totalArticles: number;
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  lang: string;
  source: Source;
}

interface Source {
  id: string;
  name: string;
  url: string;
  country: string;
}
