<template>
    <h1>Sign In to an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    <router-link to="/register">Create account</router-link>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");
const errMsg = ref()
const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log("Successfully signed in!");
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email"
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found"
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password"
                    break;
                default:
                    errMsg.value = "Email or password was incorrect"
                    break;
            }
        })
};

// const checkEmailVerification = () => {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//         isEmailVerified.value = user.emailVerified;
//     }
// };

const signInWithGoogle = () => {

};

</script>