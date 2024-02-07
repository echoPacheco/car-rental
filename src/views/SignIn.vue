<template>
    <div class="sign-container">
        <form class="form">
            <div class="items">
                <h1>Sign In</h1>

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
                Don't have an account? <router-link to="/register">Register now</router-link>
            </div>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Successfully signed in!");
            router.push("/");
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
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
}

.form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  