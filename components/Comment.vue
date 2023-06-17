<template>
  <div>
    <div class="row border-bottom py-4">
      <div class="col-2">
        <img src="/assets/images/user.png" alt="user" />
      </div>
      <div class="col-10">
        <div>
          <span class="text-info me-1">{{ comment.value.name }}</span>
          <span class="fs-7 me-1">{{ toLongDate(comment.value.date) }}</span>
          <a
            href="#addComment"
            class="btn text-info fs-7"
            @click="
              commentStore.replyComment(comment.value.id, comment.value.name)
            "
          >
            - Reply
          </a>
          <p>{{ comment.value.body }}</p>
        </div>
      </div>
    </div>
    <div v-if="comment.children?.length" class="replies">
      <Comment
        v-for="child in comment.children"
        :comment="child"
        :key="child.value.id"
      />
    </div>
  </div>
</template>

<script setup>
import { useCommentStore } from "~/stores/comment";
import { toLongDate } from "~/helper/date";

defineProps(["comment"]);

const commentStore = useCommentStore();
</script>

<style lang="scss">
.replies > * {
  margin-left: 2rem;
}
</style>
