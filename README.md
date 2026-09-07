# Sustainability News Digest

A Slack bot that posts a daily digest of sustainability news, summarized by Google AI.

## What It Does

- Fetches the latest sustainability news from a free News API
- Uses Google AI (Gemini) to generate a concise, insightful summary
- Posts the digest to a Slack channel via webhook
- Runs automatically on a schedule using GitHub Actions

## Tech Stack

- Language: TypeScript
- Runtime: Node.js
- AI: Google Gemini
- News Source: GNews API
- Slack: Incoming Webhooks
- Automation: GitHub Actions (scheduled cron)

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/yourusername/sustainability-news-digest.git
cd sustainability-news-digest
```

### 2. Set up environment variables

Create a `.env` file in the root of the project:

```
NEWS_API_KEY=your_news_api_key
GOOGLE_AI_API_KEY=your_google_ai_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

## Run on a Schedule (GitHub Actions)

This repository includes a GitHub Actions workflow (`.github/workflows/scheduled-digest.yml`) that runs the bot daily. To enable it:

1. Fork this repository
2. Add your secrets (`NEWS_API_KEY`, `GOOGLE_AI_API_KEY`, `SLACK_WEBHOOK_URL`) in the repo Settings > Secrets and variables > Actions
3. The bot will run automatically at 9:00 AM UTC

## Demo

<img width="1930" height="1074" alt="image" src="https://github.com/user-attachments/assets/24284baa-a5a6-4f0c-a392-d4517806e984" />


## Hackathon Submission

[Built for the Dev.to Weekend Challenge (September 2026)](https://dev.to/challenges/weekend-2026-09-03).

## Next Steps / Future Ideas

- Add audio summaries using ElevenLabs
- Support multiple channels
- Add a "topic" filter for more specific digests
