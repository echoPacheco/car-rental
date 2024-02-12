<template>
  <div id="app">
    <header>
      <div class="nav-conteiner">
        <nav class="navbar">
          <router-link to="/" class="ms-3" style="width: 5vw;"> <img src="@/assets/logo_light.png"
              style="width: 100%; height: 100%;"></router-link>
          <div class="menu-items me-3">
            <div class="menu menu-left">
              <router-link to="/cars" class="nav-link">Book</router-link>
            </div>
            <div class="menu menu-left">
              <router-link to="/historic" class="nav-link">Historic</router-link>
            </div>
            <div class="menu menu-left">
              <button v-if="isLoggedIn" @click="handleSignOut" class="nav-link">Sign Out</button>
              <router-link v-if="!isLoggedIn" to="/sign-in" class="nav-link">Sign In</router-link>
            </div>
            <div class="menu menu-left">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="User Profile Photo" class="profile-photo">
              <i v-else class="bi bi-person-circle"></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="pt-2 mt-4 border-top">
      <div class="container mt-4">
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">

          <div class="col-md-3 d-flex align-items-center">
            <a href="https://github.com/echoPacheco" target="_blank" rel="noopener noreferrer" class="text-light">
              <i class="bi bi-github h4"></i>
            </a>
            <a href="https://www.linkedin.com/in/mateus-pacheco-174b30185/" target="_blank" rel="noopener noreferrer"
              class="text-light">
              <i class="bi bi-linkedin h4 ms-3"></i>
            </a>
          </div>

          <div class="col-md-6 text-center">
            <router-link to="/">
              <img src="@/assets/logo_light.png" style="width: 15%;">
            </router-link>
          </div>

          <div class="col-md-3 d-flex justify-content-end align-items-center">
            <span class="mb-md-0">
              <i class="bi bi-car-front-fill h4 me-2 align-middle"></i>
              <span class="mb-0">Mateus Pacheco</span>
            </span>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}

const userPhotoURL = computed(() => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? user.photoURL : null;
});
</script>

<style>
* {
  box-sizing: border-box;
}

nav {
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 60px;
  padding: 0 20px;
  background: #161b22;
}

main {
  z-index: 100;
  padding-top: 60px;
}

nav img {
  width: 30px;
  height: 30px;
}

.burger {
  display: none;
  cursor: pointer;
}

.menu-items,
.menu {
  display: flex;
  gap: 16px;
}

.menu-right {
  position: relative;
  margin-left: auto;
  gap: 6px;
}

.menu-right img {
  width: 30px;
  height: 30px;
  padding: 5px;
}

.menu-right .badge {
  position: absolute;
  top: 0;
  left: 14px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #161b22;
  background: linear-gradient(#54a3ff, #006eed);
}

a,
a:is(:visited, :active) {
  color: #ffffff;
  text-decoration: none;
  line-height: 24px;
}

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding-right: 4px;
}

.search input {
  padding: 4px 10px;
  color: #c9d1d9;
  font-size: 13px;
  font-family: inherit;
  border: 0;
  background: transparent;
}

.search button {
  border: inherit;
  border-radius: inherit;
  background: transparent;
  color: #8b949e;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

@media (width <=580px) {
  .menu-right img:nth-child(n + 3) {
    display: none;
  }

  .menu-items {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 0 20px 20px;
    background: #161b22;
  }

  .menu-left {
    flex-direction: column;
    gap: 12px;
  }

  .menu-left a {
    border-bottom: 1px solid #30363d;
    padding-bottom: 10px;
  }

  .menu-right {
    margin-left: 0;
  }

  .burger {
    display: block;
  }
}

body.open .menu-items {
  display: flex;
}
</style>