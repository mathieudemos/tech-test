This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, open project folder:

```bash
cd /tech-test
```
Install NodeJS & yarn.

Download packaged dependencies:

```bash
yarn install
```
Add & Save Your API_KEY in .env file:

```bash
nano .env.local
```
Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

External NEWSAPI routes

This endpoint can be edited in index.js
`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
