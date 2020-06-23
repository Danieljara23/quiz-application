import Link from 'next/link'
import Layout from '../src/components/Layout/index';

const IndexPage = () => (
  <Layout title="Home | Quiz Game Application">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
