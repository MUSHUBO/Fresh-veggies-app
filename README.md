# Fresh Veggies 🍅🥦

--

**Live Link:** [Visit Fresh Veggies Platform](https://fresh-veggies-app.vercel.app/)

---

## Project Overview

**Fresh Veggies** is a simple web application built using **Next.js 15** with the App Router. The app features both public and protected pages with basic authentication handled via **NextAuth.js**. Users can explore the landing page, view product details, and, after logging in, access a protected product management page to add new products.  

This project is ideal for demonstrating Next.js routing, authentication, and protected route handling.

---

## Features

- Landing page with a list of products
- Product detail pages
- User authentication with NextAuth.js
- Protected product management page for logged-in users
- Add new products functionality

---

## Route Summary

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page with product listings |
| `/products/[id]` | Public | View details of a specific product |
| `/auth/signin` | Public | Sign-in page for users |
| `/dashboard` | Protected | Product management dashboard (requires login) |
| `/dashboard/add-product` | Protected | Add new product page (requires login) |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS / Optional CSS frameworks
- **Hosting:** Vercel

---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
