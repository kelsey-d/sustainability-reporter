import type { gNewsResponse } from '../types.js';
const url = 'https://gnews.io/api/v4/search?q=(sustainability OR climate) AND new york AND NOT (invest OR stocks)&country=us&max=5&apikey=' + process.env.G_NEWS_API_KEY;
export const getArticleUrls = fetch(url).then(function (response) {
    return response.json();
}).then(function (data: gNewsResponse) {
    return data.articles.map(article => article.url);
});

export async function getArticleContent(articleUrl: string): Promise<string> {
    const articleResponse = await fetch(articleUrl);
    return await articleResponse.text();
}