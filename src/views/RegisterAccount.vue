<template>
    <div class="sign-container">
        <form class="form">
            <div class="items">
                <h1>Create your account</h1>
                <div class="input-container">
                    <input type="text" required="" v-model="email" />
                    <label>Email</label>
                </div>
                <div class="input-container">
                    <input type="password" required="" v-model="password" />
                    <label>Password</label>
                </div>
                <p v-if="errMsg">{{ errMsg }}</p>
            </div>
            <div class="buttons-container">
                <button class="btn btn-outline-light me-2" @click="register">Login</button>
                <div class="or-divider">or</div>
                <button class="btn btn-outline-light me-2" @click="signInWithGoogle">
                    <i class="bi bi-google"></i> Continue with Google
                </button>
                <button class="btn btn-outline-light me-2 mt-3" @click="signInWithGitHub">
                    <i class="bi bi-github"></i> Continue with GitHub
                </button>
            </div>
            <div>
                Already have an account? <router-link to="/sign-in">Sign In</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
/* eslint-disable */

import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");
const verificationMsg = ref()
const errMsg = ref()


const register = (event) => {
    const auth = getAuth();
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            emailVerification(user);
            router.push('/');
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email"
                    break;
                case "auth/email-already-in-use":
                    errMsg.value = "Email already in use"
                    break;
                default:
                    errMsg.value = "Account creation failed"
                    break;
            }
        })
};

const emailVerification = (user) => {
    user.sendEmailVerification()
        .then(() => {
            verificationMsg.value = "Verification email sent successfully."
            console.log("Verification email sent successfully.");
        })
        .catch((error) => {
            verificationMsg.value = "Error sending verification email"
            console.error("Error sending verification email:", error);
        });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then(() => {
            router.push("/")
        })
        .catch((error) => {
            alert(error.message);
        })
};

const signInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then(() => {
            router.push("/")
        })
        .catch((error) => {
            alert(error.message);
        })
}

</script>

<style>
.sign-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    margin-top: 10vh;
}

.form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10vh;
    background-color: #222529;
    border: 1px solid #555;
    border-radius: 10px;
}

.input-container {
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
}

.input-container label {
    position: absolute;
    top: 5px;
    left: 0px;
    font-size: 16px;
    color: #fff;
    transition: all 0.5s ease-in-out;
}

.input-container input {
    border: 0;
    border-bottom: 1px solid #555;
    background: transparent;
    width: 100%;
    min-width: 300px;
    padding: 8px 0 5px 0;
    font-size: 16px;
    color: #fff;
}

.input-container input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #fafafa;
}

.input-container input:focus~label,
.input-container input:valid~label {
    top: -12px;
    font-size: 12px;
}

.buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.or-divider {
    color: #fff;
    margin: 10px 0;
    font-weight: bold;
}
</style>
  