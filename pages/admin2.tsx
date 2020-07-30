import Auth from '../src/components/Auth'
import Layout from '../src/components/Layout/index';
import {FirebaseAppProvider} from 'reactfire'
import 'firebase/auth';
import firebaseConfig from '../src/firebase-config';

function Admin(){
  return(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Layout>        
            <h1>I'm the admin page</h1>
            
            <Auth />
        </Layout>
        
    </FirebaseAppProvider>
  )
}

export default Admin