# Streamify

## Thought Process

The goal was to create a functional and visually appealing dashboard that displays data in an interactive way. The following considerations guided the development:

**Data Visualization**: The dashboard utilizes Recharts library for creating interactive charts (line chart, bar chart and pie chart).

**User Interaction**: The dashboard allows users to interact with the charts by clicking on segments of the pie chart, which updates the search string and filters the data table. This interaction enhances the user experience and provides insights into the data.

**Performance**: To optimize performance, the following techniques were employed:

- **Memoization**: useMemo hook is used to memoize data calculations and prevent unnecessary re-renders.

- **useCallback**: The custom tooltip component is memoized using useCallback to avoid unnecessary re-renders.

- **State Management**: Zustand is used to manage the search string state, which is updated based on user interactions with the pie chart.

**Styling**: Tailwind CSS is used for styling, providing a modern and consistent design language.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Clone the respository:
```bash
git clone https://github.com/Iamsidar07/streamify
```
Install dependencies:
```bash
bun install
```
Lastly, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
