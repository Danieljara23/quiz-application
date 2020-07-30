import Auth from '../src/components/Auth'
import Layout from '../src/components/Layout/index';
import {FirebaseAppProvider} from 'reactfire'
import firebaseConfig from '../src/firebase-config';

function Admin(){
  return(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Layout>
        <Auth />
      </Layout>
    </FirebaseAppProvider>
  )
}

export default Admin