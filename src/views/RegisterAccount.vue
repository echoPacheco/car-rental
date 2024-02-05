<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="verificationMsg">{{ verificationMsg }}</p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
/* eslint-disable */

import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");
const verificationMsg = ref()
const errMsg = ref()


const register = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Successfully registered!");
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

</script>