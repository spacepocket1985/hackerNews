# Hacker News Interface

## Project Overview

The Hacker News Interface aims to provide an engaging user experience by displaying the latest news from Hacker News (https://news.ycombinator.com/news). This project consists of two primary pages: the Main Page and the News Detail Page.

## API -> https://github.com/HackerNews/API

## Product Requirements

### Main Page

The Main Page displays the latest 100 news articles in a list format, sorted by date with the most recent articles at the top. Each news article includes the following information:

- **Title**: The title of the news article.
- **Score**: The rating of the article.
- **Author**: The username of the author who posted the article.
- **Publication Date**: The date when the article was published.

#### Features:

- Clicking on a news article redirects the user to the News Detail Page.
- A button to forcefully refresh the list of news articles.

### News Detail Page

The News Detail Page provides an in-depth view of a selected news article. It includes the following components:

- **Link to the Article**: A clickable link that directs users to the original news source.
- **Article Title**: Displays the headline of the news article.
- **Date**: Shows when the article was published.
- **Author**: Displays the username of the article's author.
- **Comment Count**: A counter indicating the number of comments on the article.
- **Comment List**: A tree-structured display of comments.
  - Root comments are loaded immediately upon entering the page.
  - Nested comments are loaded when a user clicks on a root comment.

#### Features:

- A button to forcefully refresh the list of comments.
- A button to return to the Main Page.

## Conclusion

This project will create a user-friendly interface for browsing and interacting with the latest news on Hacker News, providing essential features for news consumption and discussion.

# Getting Started with HackerNews

To get started with the HackerNews project, follow these steps:

1. Clone the repository to your local machine:
   git clone https://github.com/spacepocket1985/hackerNews.git

2. Navigate into the project directory:
   cd hackerNews

3. Switch to the develop branch:
   git checkout develop

4. Install the required packages:
   npm install

## Then run Scripts

Run `npm run ...`:

- `dev`: to launch the development server;
- `build`: to compile the application in a "dist" folder;

## Technologies

- React
- Typescript
- React Router
- Redux, RTK query
- Mui/material
- Html-react-parser
