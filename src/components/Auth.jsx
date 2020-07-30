import React,{ useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { Divider } from 'rsuite';
import firebaseConfig from '../firebase-config';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

export default (props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState('');
    const firebase = useFirebaseApp();
    
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var displayemail = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          setUser(user);
        } else {
            
         setUser(null);
        }
      });
     const submit = ()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/invalid-password') {
                alert('Password should be at least 6 characters.');
             }
             if (errorCode === 'auth/email-already-in-use') {
                alert('Email in use.');
             }
             if (errorCode === 'auth/invalid-email') {
                alert('Invalid email.');
             }
             console.log(errorCode);
             
        });
     }
    const login = ()=>{
         firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
             // Handle Errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
             }
             if (errorCode === 'auth/user-not-found') {
                alert('Email not exists.');
             }
             if (errorCode === 'auth/invalid-email') {
                alert('Invalid email.');
             }
             
             console.log(errorCode,errorMessage);
          });
        // window.location.href = 'admin2';
     
    }

    const login_gmail = ()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
                 // This gives you a Google Access Token. You can use it to access the Google API.
                 var token = result.credential.accessToken;
                 // The signed-in user info.
                 var user = result.user;
                
                 // ...
               }).catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // The email of the user's account used.
                 var email = error.email;
                 // The firebase.auth.AuthCredential type that was used.
                 var credential = error.credential;
                 // ...
               });
    }

    const logout = async()=>{
        await firebase.auth().signOut();
    }
    return(
        <div>
            { !user&&<div>
                {/* 
                    
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)}/>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="pasword" onChange={(ev)=>setPassword(ev.target.value)}/>
                    <button onClick={submit}>Sing up</button>
                    <button onClick={login}>Sing in</button>
                    <button  className="btn google-btn" onClick={login_gmail}>Sing in with Gmail</button>
                </div> */}
            <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h4 className="dark-grey-text mb-5">
                                <strong>Sign in with</strong>
                                </h4>
                                
                            </div>
                            <div className="row my-3 d-flex justify-content-center">
                                {/* <MDBBtn
                                type="button"
                                color="white"
                                rounded
                                className="mr-md-3 z-depth-1a"
                                >
                                <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                </MDBBtn>
                                <MDBBtn
                                type="button"
                                color="white"
                                rounded
                                className="mr-md-3 z-depth-1a"
                                >
                                <MDBIcon fab icon="twitter" className="blue-text" />
                                </MDBBtn> */}
                                <MDBBtn onClick={login_gmail}
                                type="button"
                                color="white"
                                rounded
                                className="z-depth-1a"
                                >
                                <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                </MDBBtn>
                            </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                                or Sign in with:
                            </p>
                            <MDBInput onChange={(ev)=>setEmail(ev.target.value)}
                                label="Your email"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput onChange={(ev)=>setPassword(ev.target.value)}
                                label="Your password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                            />
                            <p className="font-small blue-text d-flex justify-content-end pb-3">
                                Forgot
                                <a href="#!" className="blue-text ml-1">

                                Password?
                                </a>
                            </p>
                            <div className="text-center mb-3">
                                <MDBBtn onClick={login}
                                type="button"
                                gradient="blue"
                                rounded
                                className="btn-block z-depth-1a"
                                >
                                Sign in
                                </MDBBtn>
                            </div>
                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Not a member?
                            </p>
                            <p className="font-small grey-text d-flex justify-content-end">
                                <a onClick={submit} className="blue-text ml-1">
                                Sign Up
                                </a>
                            </p>
                            </MDBModalFooter>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                </div>}
             {user&&
                <div>
                    Hola {user.email}!!
                    <button onClick={logout}>Cerrar Sesión</button> 
                </div>
             }              
                
            
        </div>
    )
}
