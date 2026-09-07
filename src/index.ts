import { getArticleUrls } from "./services/newsApi.ts";
import { createDigest } from "./services/aiService.ts";
import { postToSlack } from "./services/slackService.ts";

async function main() { 
    postToSlack(await createDigest(await getArticleUrls) ?? "");
}

main();