import {
  addPost,
  deletePost,
  getAllPosts,
  getMyPosts,
  getPost,
  updatePost,
} from "../model/post.model.js";

export class PostController {
  handleGetAllPosts = (req, res) => {
    const allPosts = getAllPosts();
    try {
      if (allPosts) {
        res.status(200).json({ success: true, allPosts: allPosts });
      } else {
        res.status(400).json({ success: false, msg: "No posts" });
      }
    } catch (err) {
      res
        .send(500)
        .json({ success: false, msg: "Server Error at @handleGetAllPosts" });
    }
  };

  handleGetPost = (req, res) => {
    const { id } = req.params;
    try {
      const post = getPost(id);
      if (post) {
        res.status(200).json({ success: true, post: post });
      } else {
        res.status(400).json({ success: false, msg: "post not found" });
      }
    } catch (err) {
      res
        .send(500)
        .json({ success: false, msg: "Server Error at @handleGetPost" });
    }
  };
  handleGetMyPosts = (req, res) => {
    const { userId } = req;
    try {
      const myPosts = getMyPosts(userId);
      res.status(200).json({ success: true, myPosts: myPosts });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Error handleGetMyPosts" });
    }
  };
  handleCreatePost = (req, res) => {
    const { userId } = req;
    const { caption, imageUrl } = req.body;
    try {
      const posts = addPost(userId, caption, imageUrl);
      if (posts.success) {
        res.status(201).json({ success: true, myPosts: posts.myPosts });
      } else {
        res.status(400).json({ success: false, msg: posts.msg });
      }
    } catch (err) {
      res.status(500).json({ success: false, posts: "Server error" });
    }
  };
  handleUpdatePost = (req, res) => {
    try {
      const update = updatePost(req.params.id, req.body);
      console.log(update);
      if (update.success) {
        res
          .status(201)
          .json({ success: true, updatedPost: update.updatedPost });
      } else {
        res.status(401).json({ success: false, msg: update.msg });
      }
    } catch (err) {
      res.status(500).json({ success: false, posts: "Server error" });
    }
  };
  handleDeletePost = (req, res) => {
    const { id } = req.params;
    try {
      const postDeleted = deletePost(id);
      if (postDeleted.success) {
        res.status(200).json({ success: true, deletedPost: postDeleted.post });
      } else {
        res.status(400).json({ success: false, msg: "Can't find post" });
      }
    } catch (err) {
      res.status(500).json({ success: false, posts: "Server error" });
    }
  };
}
