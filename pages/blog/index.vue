<template>
  <Head>
    <Title>Travel | Blog</Title>
    <Meta name="description" content="My app description" />
  </Head>
  <div class="container px-sm-2">
    <div class="fw-bold display-3 my-5 text-center">LATESTS BLOG POSTS</div>
    <div class="d-grid gap-5">
      <Error :text="errorMsg" v-if="errorMsg" />

      <div class="row" v-for="post in paginatedPosts" :key="post.id">
        <div class="col-md-4 my-2">
          <NuxtLink :to="urlGenerator.blogPost(post.title, post.id)">
            <img class="w-100" :src="post.image" alt="" />
          </NuxtLink>
        </div>
        <div class="col-md-8 my-2">
          <NuxtLink
            class="link-underline link-underline-opacity-0"
            :to="urlGenerator.blogPost(post.title, post.id)"
          >
            <h2 class="my-2 text-black">
              {{ post.title }}
            </h2>
          </NuxtLink>
          <p>
            {{ post.brief }}
          </p>
        </div>
        <div class="col-12">
          <div
            class="border border-start-0 border-end-0 fs-7 py-2 d-flex flex-wrap gap-2"
          >
            <span>By {{ post.author }} |</span> <span>{{ post.date }} |</span>
            <span>Categories: {{ post.category }} |</span>
            <span>{{ post.comments }} Comments |</span>
            <NuxtLink
              :to="urlGenerator.blogPost(post.title, post.id)"
              class="text-info"
              >Read More
              <i class="fa-solid fa-chevron-right fs-8"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-grid btn-container"
      :class="{ 'placeholder-glow': isLoading }"
    >
      <button
        @click="loadMore"
        class="btn my-5 bg-dark-subtle text-uppercase fw-bold fs-6 text-center p-3"
        :class="{ placeholder: isLoading }"
      >
        Load more posts
      </button>
    </div>
  </div>
</template>

<script setup>
import { PostService } from "~/dataService/postService";
import { urlGenerator } from "~/helper/urlGenerator";

const postService = new PostService();
const paginatedPosts = ref([]);
const errorMsg = ref("");
const isLoading = ref(false);

let paging = {
  pageIndex: 1,
  pageSize: 3,
};
let array = [];

try {
  const response = await postService.getAll();
  const posts = response.data;
  array = posts.sort((a, b) => a.id - b.id);
  paginatedPosts.value = [...array.slice(0, paging.pageSize)];
} catch (error) {
  console.error(error);
  errorMsg.value = error.message;
}

function loadMore() {
  isLoading.value = true;
  const arr = [
    ...array.slice(
      paging.pageSize * paging.pageIndex,
      paging.pageSize * ++paging.pageIndex
    ),
  ];

  setTimeout(() => {
    paginatedPosts.value = paginatedPosts.value.concat(arr);
    isLoading.value = false;
  }, 4000);
}
</script>
