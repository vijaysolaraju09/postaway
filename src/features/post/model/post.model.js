class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }
}
const posts = [
  new PostModel(
    1,
    1,
    "Enjoying the sunny day!",
    "https://example.com/sunny-day.jpg"
  ),
  new PostModel(2, 2, "My latest artwork", "https://example.com/artwork.jpg"),
  new PostModel(
    3,
    1,
    "Delicious breakfast!",
    "https://example.com/breakfast.jpg"
  ),
  new PostModel(
    4,
    3,
    "Traveling to the mountains",
    "https://example.com/mountains.jpg"
  ),
  new PostModel(5, 4, "Nature is beautiful", "https://example.com/nature.jpg"),
];
