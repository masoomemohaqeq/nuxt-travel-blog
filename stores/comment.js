export const useCommentStore = defineStore("comment", () => {
  const reply = ref({});

  function clearReply() {
    reply.value = {
      commentId: 0,
      commentName: "",
    };
  }

  function replyComment(id, name) {
    reply.value = {
      commentId: id,
      commentName: name,
    };
  }
  clearReply();
  return { reply, clearReply, replyComment, replyId };
});
