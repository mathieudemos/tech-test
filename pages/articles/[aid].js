import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const API_KEY = process.env.API_KEY;
const Uri = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
const BackToHome = "/";


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps() {

  const res = await fetch(Uri);
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const OneArticle = ({ data }) => {

  const router = useRouter()
  const { aid } = router.query
  const { articles = [] } = data;
  const { content = articles[aid].content, image = articles[aid].urlToImage, publish = articles[aid].publishedAt } = articles
  const back = BackToHome;

  return (
      <div className={styles.container} >
        <img src={ image } alt={ publish } />
          <div className= {styles.grid}>
            <p className={styles.description} >Article: { content } </p>
          </div>
        <Link href="/" >
          <button> Back To Home </button>
        </Link>
      </div>
  )
}

export default OneArticle
