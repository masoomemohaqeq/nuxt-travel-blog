<template>
  <Head>
    <Title>Travel | {{ post.title }}</Title>
    <Meta name="description" :content="post.brief" />
  </Head>
  <div class="container px-sm-2">
    <Error v-if="errorMsg !== ''" :text="errorMsg" />
    <div v-else>
      <div class="fw-bold display-3 my-5 text-center">
        {{ post.title }}
      </div>
      <div
        class="border border-start-0 border-end-0 fs-7 py-2 d-flex flex-wrap gap-2 justify-content-center"
      >
        <span>By {{ post.author }} |</span>
        <span>{{ toShortDate(post.date) }} |</span>
        <span>Categories: {{ post.category }} |</span>
        <span
          >{{ comments.length }}
          <a href="#comments" class="text-info">Comments</a></span
        >
      </div>
      <div>
        <img class="w-100 my-4" :src="post.image" :alt="post.title" />
        {{ post.body }}
      </div>
    </div>

    <div class="my-5" id="comments">
      <h6 class="fw-bold">{{ commentsRes.length }} Comments</h6>
      <Error v-if="getCommentsErrorMsg" :text="getCommentsErrorMsg" />
      <div v-for="comment in comments" :key="comment.value.id">
        <Comment :comment="comment" />
      </div>
    </div>

    <div class="my-2">
      <h3 class="fw-bold">
        {{
          commentStore.reply.commentId == 0
            ? "Leave A Comment"
            : "Reply To " + commentStore.reply.commentName
        }}
        <button
          v-show="commentStore.reply.commentId !== 0"
          class="btn text-info"
          @click="commentStore.clearReply"
        >
          Cancel reply
        </button>
      </h3>
      <form @submit.prevent="commentOp.add" id="addComment">
        <div class="my-3 row">
          <div class="mb-2">
            <textarea
              class="form-control"
              placeholder="Comment"
              rows="6"
              v-model="newComment.body"
            ></textarea>
          </div>
          <div class="mb-2 col-lg-4">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              v-model="newComment.name"
            />
          </div>
          <div class="mb-2 col-lg-4">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="newComment.email"
            />
          </div>
          <div class="mb-4 col-lg-4">
            <input
              type="text"
              class="form-control"
              placeholder="Website"
              v-model="newComment.website"
            />
          </div>
          <div>
            <button
              type="submit"
              class="btn btn-primary d-flex justify-content-center gap-2 align-items-center"
            >
              <span>POST COMMENT</span>
              <Loading v-show="isLoading" class="spinner-border-sm"></Loading>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { nanoid } from "nanoid";

import buildHierarchy from "~/helper/hierachy";
import { toShortDate } from "~/helper/date";

import { CommentService } from "~/dataService/commentService";
import { PostService } from "~/dataService/postService";
import { useCommentStore } from "~/stores/comment";

const errorMsg = ref("");
const getCommentsErrorMsg = ref("");

const { slug } = useRoute().params;
let id = slug.substr(slug.lastIndexOf("-") + 1, slug.length - 1);

const isLoading = ref(false);
const newComment = ref(null);

const postService = new PostService();
const commentService = new CommentService();

let post = [];
try {
  errorMsg.value = "";
  const response = await postService.getById(id);
  post = response.data;
} catch (error) {
  if ((error.code = 404)) {
    showError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
  errorMsg.value = error.message;
}

const commentStore = useCommentStore();
let comments = [];
let commentsRes = [];

const commentOp = {
  clear: function () {
    newComment.value = {
      postId: 0,
      id: 0,
      parentId: 0,
      name: "",
      date: "",
      email: "",
      body: "",
    };
  },
  add: async function () {
    isLoading.value = true;

    newComment.value = {
      ...newComment.value,
      postId: id,
      id: nanoid(),
      parentId: commentStore.reply.commentId,
      date: new Date(),
    };

    try {
      const res = await commentService.create(newComment.value);

      await this.get();
      setTimeout(() => {
        isLoading.value = false;
        this.clear();
        commentStore.clearReply();
      }, 2000);
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  },
  get: async function () {
    try {
      const comResponse = await commentService.getPostComments(id);
      commentsRes = comResponse.data;

      comments = [...buildHierarchy(commentsRes)];
    } catch (error) {
      getCommentsErrorMsg.value = error;
    }
  },
};

async function init() {
  commentStore.clearReply();
  commentOp.clear();
  await commentOp.get();
}

await init();
</script>

<style lang="scss" scoped></style>
