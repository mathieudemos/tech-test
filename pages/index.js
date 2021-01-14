import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const API_KEY = process.env.API_KEY;
const Uri = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps(){
  const res = await fetch(Uri);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  console.log(data);
  const { articles = [] } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Mathieu TechTest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          News App
        </h1>
          <p className={styles.description}>
            [ DernierCri - TechTest ]
          </p>
          <button>
          <a
            href="https://github.com/mathieudemos/tech-test.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the sources{' '}
            <img src="/logo-github.svg" alt="Github Logo" className={styles.logo} />
          </a>
          </button>
        <ul className={styles.grid}>
          { articles.map( article => {
              const { id = articles.indexOf(article), title, author } = article
              return (
                <li key={ id } className={styles.card}>
                <Link href={`/articles/${ id }`} >
                  <a>
                    <h3> { title } </h3>
                    <p> Written by { author } </p>
                    <p> Take a look... 👉 </p>
                  </a>
                </Link>
                </li>
              )
            }
          ) }
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/mathieudemos/tech-test.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '}Mathieu Diawara
          <img src="/logo-github.svg" alt="Github Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
