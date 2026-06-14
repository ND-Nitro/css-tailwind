# SocialApp - CSS Frameworks Project

## Description

SocialApp is a static social media concept built for a CSS Frameworks assignment. The project is created with HTML, Tailwind CSS and Vite. It focuses on responsive design, page structure, form validation and reusable layout patterns.

The application includes a login/register page, a profile page, a feed page and an about page. The login and register forms use HTML validation and send the user to the profile page as part of the static prototype. No real authentication or backend functionality is included, because the focus of the project is on styling, layout and CSS framework usage.

## Pages

The project contains the following pages:

- `index.html` - Authentication page with login and register forms.
- `profile/index.html` - User profile page with profile information, posts, follower statistics and tech stack tags.
- `feed/index.html` - Social feed page with post cards, images, search, sorting and create-post form.
- `about/index.html` - Informational landing page that explains the purpose of the app and connects the different sections of the project.

## Built With

- HTML
- Tailwind CSS
- Vite
- JavaScript
- GitHub Pages
- gh-pages package

## Project Goals

The goal of this project was to practice using a CSS framework to build a responsive and visually consistent front-end application. I wanted to create a small social media prototype that shows a clear user flow and includes common UI patterns such as navigation, forms, cards, profile sections and content feeds.

The project also helped me understand how modern frontend tools work together. I learned how Vite builds production files, how Tailwind CSS is processed, and how GitHub Pages needs to serve the built `dist` folder instead of the raw source files.

## Features

- Responsive layout using Tailwind CSS utility classes.
- Static login and register forms with HTML validation.
- Password validation using `minlength` and `pattern`.
- Profile page with user information and current tech stack.
- Feed page with post cards and image content.
- About page connected to the app logo.
- Multi-page Vite build setup.
- Deployment using the `gh-pages` package.

## Installation

Clone the repository:

```bash
git clone https://github.com/ND-Nitro/css-tailwind.git
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Deployment

The project is deployed to GitHub Pages using the `gh-pages` package. Vite builds the project into the `dist` folder, and the deploy command publishes the contents of `dist` to the `gh-pages` branch.

The project uses the following base path in `vite.config.js`:

```js
base: "/css-tailwind/";
```

This is required because the project is hosted under the `/css-tailwind/` path on GitHub Pages.

## Reflection

This project helped me improve my understanding of Tailwind CSS, responsive design, static site structure and frontend deployment. I also learned more about debugging build issues, fixing file paths and understanding the difference between development files and production files.

Working through the deployment problems was one of the biggest challenges, but it also gave me a better understanding of how Vite and GitHub Pages work together.
