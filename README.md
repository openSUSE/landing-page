# The openSUSE landing page

Visit the website at: https://www.opensuse.org/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Additional notes

### Do not use fonts.googleapis.com

These were removed from the page and will not be used due to concerns related to the fonts sending IP info back to Google's hosted server. Don't import any external CDN for API or fonts, JS-Frameworks to avoid legal problems.
