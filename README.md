# Article Summarizer Web App

## Overview

This web application allows users to input a URL of an article, which is then summarized using the Article Extractor and Summarizer API. The summarized version of the article is displayed to the user, providing a concise and digestible version of the content.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Input form to submit an article URL.
- Integration with the Article Extractor and Summarizer API for content summarization.
- Display of the summarized article to the user.
- Error handling for invalid URLs or API issues.
- Responsive web design for a seamless user experience on different devices.

## Demo

[Demo](https://ai-article-summarizer-demo.netlify.app/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/timurbuch/ai-summarizer.git
2. Install the required dependencies using npm:
    ```bash
    npm install
3. Configure your API key for the Article Extractor and Summarizer API in a .env file:
     ```bash
    VITE_RAPID_API_ARTICLE_KEY=YOUR_RAPIDAPI_KEY
4. Start the development server:
    ```bash
    npm run dev
## Usage
1. Access the web application using a web browser.

2. Enter the URL of the article you want to summarize into the input form.

3. Click the "Summarize" button.

4. The summarized version of the article will be displayed on the screen.
## API Integration
This project relies on the Article Extractor and Summarizer API for content summarization. Ensure that you have signed up for the API on RapidAPI and obtained an API key. Configure the API key in the .env file as mentioned in the installation steps.

## License
This project is licensed under the MIT Lice




