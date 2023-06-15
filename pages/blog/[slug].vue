<template>
  <div class="container px-sm-2">
    <div class="fw-bold display-3 my-5 text-center">
      {{ post.title }}
    </div>
    <div
      class="border border-start-0 border-end-0 fs-7 py-2 d-flex flex-wrap gap-2 justify-content-center"
    >
      <span>By {{ post.author }} |</span> <span>{{ post.date }} |</span>
      <span>Categories: {{ post.category }} |</span>
      <span>{{ comments.length }} Comments</span>
    </div>
    <div>
      <img class="w-100 my-4" :src="post.image" :alt="post.title" />
      {{ post.body }}
    </div>

    <div class="my-5">
      <h6 class="fw-bold">{{ comments.length }} Comments</h6>
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
import { CommentService } from "~/dataService/commentService";
import { PostService } from "~/dataService/postService";
import { useCommentStore } from "~/stores/comment";

const { slug } = useRoute().params;
let id = slug.substr(slug.lastIndexOf("-") + 1, slug.length - 1);

const isLoading = ref(false);
// const reply = ref(null);
const newComment = ref(null);

const postService = new PostService();
const commentService = new CommentService();

const response = await postService.getById(id);
const post = response.data;

const commentStore = useCommentStore();
let comments = [];

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

      await this.getComments();
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
  getComments: async function () {
    const comResponse = await commentService.getPostComments(id);
    let commentsRes = comResponse.data;
    comments = [...buildHierarchy(commentsRes)];
  },
};

async function onLoad() {
  commentStore.clearReply();
  commentOp.clear();
  await commentOp.getComments();
}

await onLoad();
</script>

<style lang="scss" scoped></style>
