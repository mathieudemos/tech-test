This is a Next.js project bootstrapped with:

`yarn create-next-app`

## Getting Started

- Env Requirements:

If not already installed, install Node.js and yarn.

First, open project folder:

```bash
cd /tech-test
```
Download packaged dependencies:

```bash
yarn install
```
Get your NewsAPI Key :

`http://newsapi.org/`

Open and edit `.env.local` file, replace the `YOUR API KEY` value, then save the file:

`API_KEY=YOUR API KEY`

External NewsAPI endpoint can be edited in index.js:

`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`.

Then, run the development server:

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
