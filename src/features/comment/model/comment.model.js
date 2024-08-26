class CommentModel {
  constructor(id, userId, postId, content) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }
}

const comments = [
  new CommentModel(1, 2, 1, "Looks like you're having a great time!"),
  new CommentModel(2, 3, 1, "Beautiful weather!"),
  new CommentModel(3, 1, 2, "This artwork is amazing!"),
  new CommentModel(4, 4, 3, "Yum! That breakfast looks delicious."),
  new CommentModel(5, 2, 4, "I love the mountains too!"),
  new CommentModel(6, 3, 5, "Nature always inspires me."),
];
