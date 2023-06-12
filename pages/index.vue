<template>
  <div class="hero w-100 mx-0 mx-md-auto py-5">
    <div class="container-lg">
      <div class="row">
        <div class="bg-black bg-opacity-75 col-sm-12 col-lg-7">
          <div class="p-4">
            <h1 class="text-primary">
              WELCOME! <br />
              I’M EARL.
            </h1>
            <p class="text-white mt-4 fs-2">
              <strong>Travel is my life.</strong> Since 1999, I’ve been
              traveling around the world nonstop. If you also love travel,
              you’re in the right place!
            </p>
            <p class="text-white mt-4 fs-2">Let’s get started…</p>
            <div class="row gap-4">
              <button class="btn btn-primary col-lg-5">Browse the blog</button>
              <button class="btn btn-primary col-lg-5">
                Travel the resources
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5"></div>
    </div>
  </div>
  <div class="container">
    <div
      class="d-flex flex-column flex-lg-row gap-3 justify-content-around text-center py-5"
    >
      <div>
        <span class="fs-1">133</span>
        <p class="fw-bold fs-5">Countries Visited</p>
      </div>
      <div>
        <span class="fs-1">USA</span>
        <p class="fw-bold fs-5">Where Am I?</p>
      </div>
      <div>
        <span class="fs-1">8070</span>
        <p class="fw-bold fs-5">Days On The Road</p>
      </div>
    </div>
  </div>
  <div class="map border border-secondary border-start-0 border-end-0">
    <div class="container text-center p-5">
      <h2 class="text-secondary h1 fw-bold">
        Join 22,000+ people and get your weekly travel inspiration.
      </h2>
      <p class="text-body-secondary fs-5 mt-3">
        New blog posts, honest updates from my 21 years of constant travel,
        personal recommendations and the best of travel from around the world.
      </p>
      <form autocomplete="off" class="row my-5">
        <div class="mb-2 col-sm-12 col-lg-4 px-1">
          <input
            type="text"
            class="form-control text-body-secondary"
            id="Name"
            placeholder="Name"
          />
        </div>
        <div class="mb-3 col-sm-12 col-lg-4 px-1">
          <input
            type="email"
            class="form-control"
            id="emailAddress"
            placeholder="Email Address"
          />
        </div>
        <div class="col-sm-12 col-lg-4 px-1">
          <button type="submit" class="btn btn-primary d-block w-100">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="container my-5 text-center px-sm-2">
    <div class="fw-bold display-3 my-5">CHECK IT OUT</div>
    <div class="row gap-0 row-gap-3">
      <div class="col-sm-12 col-lg-4">
        <div class="card border border-black">
          <img
            class="w-100"
            src="/assets/images/checkout/annie-spratt-qyAka7W5uMY-unsplash.jpg"
            alt="travel"
          />
          <div class="card-body bg-tertiary">
            <h2 class="text-primary">Travel Resources</h2>
            <p class="card-text text-white">Planing, working abroad and more</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card border border-black">
          <img
            class="w-100"
            src="/assets/images/checkout/dino-reichmuth-A5rCN8626Ck-unsplash.jpg"
            alt="travel"
          />
          <div class="card-body bg-tertiary">
            <h2 class="text-primary">Blog Posts</h2>
            <p class="card-text text-white">Planing, working abroad and more</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card border border-black">
          <img
            class="w-100"
            src="/assets/images/checkout/jeshoots-com-mSESwdMZr-A-unsplash.jpg"
            alt="travel"
          />
          <div class="card-body bg-tertiary">
            <h2 class="text-primary">The Newsletter</h2>
            <p class="card-text text-white">Planing, working abroad and more</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card border border-black">
          <img
            class="w-100"
            src="/assets/images/checkout/luca-bravo-O453M2Liufs-unsplash.jpg"
            alt="travel"
          />
          <div class="card-body bg-tertiary">
            <h2 class="text-primary">Work on a Cruise Ship</h2>
            <p class="card-text text-white">Planing, working abroad and more</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card border border-black">
          <img
            class="w-100"
            src="/assets/images/checkout/nick-de-partee-VOXoOCAjhVY-unsplash.jpg"
            alt="travel"
          />
          <div class="card-body bg-tertiary">
            <h2 class="text-primary">Travel Advice</h2>
            <p class="card-text text-white">Planing, working abroad and more</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card border border-black">
          <img
            class="w-100"
            src="/assets/images/checkout/nick-seagrave-1tpLdmxki-c-unsplash.jpg"
            alt="travel"
          />
          <div class="card-body bg-tertiary">
            <h2 class="text-primary">Travel Tours</h2>
            <p class="card-text text-white">Planing, working abroad and more</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="mx-3 mt-5 mb-2 text-body-tertiary" />
  <hr class="mx-3 mt-0 text-body-tertiary" />

  <div class="container my-5 px-sm-2">
    <div class="fw-bold display-3 my-3 text-center">POPULAR READS</div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 text-black poplular">
        <h2 class="fw-bold my-5 text-center">Most Viewd</h2>
        <a href="#">42 Ways Can Make Money and Travel the World</a>
        <a href="#">Please Help Me Find A Home</a>
        <a href="#">Please Don’t Be Afraid To Travel On Your Own</a>
        <a href="#">How I Can Afford My Life Of Constant Travel</a>
        <a href="#">How Much Money Do You Need To Start A Life Of Travel?</a>
        <a href="#">Please Help Me Find A Home</a>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 text-black poplular">
        <h2 class="fw-bold my-5 text-center">Most Recent</h2>
        <a href="#">42 Ways Can Make Money and Travel the World</a>
        <a href="#">Please Help Me Find A Home</a>
        <a href="#">Most Scenic Villages in Germany </a>
        <a href="#">Please Help Me Find A Home</a>
        <a href="#">Two Weeks in Kyoto: Everything You Need to Know</a>
        <a href="#">Please Help Me Find A Home</a>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 text-black poplular">
        <h2 class="fw-bold my-5 text-center">Most Recent</h2>
        <a href="#">Most Scenic Villages in Germany </a>
        <a href="#">Please Help Me Find A Home</a>
      </div>
    </div>
  </div>

  <hr class="mx-3 mt-5 mb-2 text-body-tertiary" />
  <hr class="mx-3 mt-0 text-body-tertiary" />

  <div class="my-5 px-sm-2 text-center row">
    <div class="col-sm-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
      <div class="fw-bold display-3 my-4">AS SEEN IN</div>
      <img class="w-100" src="/assets/images/Wandering-Earl-Media.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  background: url("/assets/images/Wandering-Earl-Sahara-Desert.jpg");
  background-size: cover;
  h1 {
    font-size: 4rem;
    line-height: 1;
    font-weight: bolder;
  }
}

.map {
  background: url("/assets/images/Wandering-Earl-mapbg-3.png");
}

.form-control,
form button {
  border: 3px solid black;
  padding: 0.6rem 0.6rem;
  font-weight: bold;
}

.form-control:focus {
  outline: none;
  border-color: lightgray;
}

.poplular a {
  color: black;
  text-decoration: none;
  display: block;
  margin: 1rem auto;
  &:hover {
    color: red !important;
  }
}
</style>
