class LikeModel {
  constructor(id, userId, postId) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
  }
}
const likes = [
  new LikeModel(1, 1, 1),
  new LikeModel(2, 2, 2),
  new LikeModel(3, 3, 3),
  new LikeModel(4, 4, 4),
  new LikeModel(5, 1, 2),
  new LikeModel(6, 2, 3),
  new LikeModel(7, 3, 4),
  new LikeModel(8, 4, 1),
];
