import Link from 'next/link'
import Layout from '../src/components/Layout/index';
import firebaseConfig from '../src/firebase-config';
import {FirebaseAppProvider} from 'reactfire'

const IndexPage = () => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Layout title="Home | Quiz Game Application">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </FirebaseAppProvider>
)

export default IndexPage
