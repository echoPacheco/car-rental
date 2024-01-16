<template>
  <div id="app">
    <header>
      <div class="nav-conteiner">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand" exact>My Car</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link" exact>Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cars" class="nav-link">Book</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about_us" class="nav-link disabled" aria-disabled="true">About Us</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-secondary" style="color: white;" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="d-flex flex-wrap justify-content-between align-middle pt-3 mt-4 border-top">
      <ul class="col-md-4 d-flex align-items-center">
        <a href="https://github.com/echoPacheco" target="_blank" rel="noopener noreferrer" class="text-light">
        <i class="bi bi-github h4 ms-5"></i></a>
        <a href="https://www.linkedin.com/in/mateus-pacheco-174b30185/" target="_blank" rel="noopener noreferrer" class="text-light">

        <i class="bi bi-linkedin h4 ms-3"></i></a>
      </ul>
      <div class="nav col-md-4 justify-content-end list-unstyled d-flex footer-content">
        <span class="mb-3 mb-md-0 footer-content">
          <i class="bi bi-car-front-fill h4 me-2 align-middle"></i> 
          <span class="mb-0">Mateus Pacheco</span>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Car',
    };
  },
};
</script>