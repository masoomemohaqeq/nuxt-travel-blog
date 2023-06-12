<template>
  <nav class="navbar navbar-expand-lg bg-body-white">
    <div class="container-lg">
      <NuxtLink class="navbar-brand" to="/">
        <img
          src="/assets/images/Wandering-Earl-Travel-Blog-Life-of-Travel.png"
          alt="Logo"
          class="d-inline-block align-middle p-2"
        />
      </NuxtLink>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars text-body-tertiary"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav fw-medium">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="/blog"
            >
              Blog
            </a>
            <ul class="dropdown-menu border-0 py-0">
              <li><hr class="dropdown-divider m-0" /></li>
              <li>
                <NuxtLink class="dropdown-item ps-5 py-2" to="/blog"
                  >- Latest Posts</NuxtLink
                >
              </li>
              <!-- <li><hr class="dropdown-divider m-0" /></li>
              <li>
                <NuxtLink class="dropdown-item ps-5 py-2" to="/blog"
                  >- Browse by Category</NuxtLink
                >
              </li> -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Travel Resources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Tours</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-brands fa-facebook text-black fs-5"></i
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-brands fa-twitter text-info fs-5"></i
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-brands fa-youtube text-danger fs-5"></i
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-brands fa-instagram text-info-emphasis fs-5"></i
            ></a>
          </li>
        </ul>
        <button class="btn d-none d-lg-block">
          <i class="fa-solid fa-magnifying-glass text-black fs-5"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
