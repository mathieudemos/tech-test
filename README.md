This is a Next.js project bootstrapped with:

`yarn create-next-app`

# Getting Started

Environment requirements:

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


# Deploy on Vercel

Clone these sources in your GitHub Repository:

`git clone https://github.com/mathieudemos/tech-test.git`

Connect your GiHub account To Vercel

- Deployment settings:

Build command:

`yarn build`

Environment variables:

input: VARIABLE = `API_KEY`

input: VALUE  = `yourxxxapixxxkeyxxxxxxxxxxxx`
