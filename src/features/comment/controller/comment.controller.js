import {
  deleteComment,
  getComments,
  postComment,
  updateComment,
} from "../model/comment.model.js";

export class CommentController {
  handleGetComments = (req, res) => {
    const { id } = req.params;
    try {
      const commentsOfPost = getComments(id);
      if (commentsOfPost.success) {
        res.status(200).json(commentsOfPost);
      } else {
        res.status(400).json(commentsOfPost);
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "server error" });
    }
  };

  handlePostComments = (req, res) => {
    const { content } = req.body;
    const { id } = req.params;
    const { userId } = req;
    try {
      const isPosted = postComment(userId, id, content);
      if (isPosted.success) {
        res.status(200).json(isPosted);
      } else {
        res.status(400).json(isPosted);
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "server error" });
    }
  };

  handleUpdateComment = (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
      const editedComment = updateComment(id, content);
      if (editedComment.success) {
        res.status(201).json(editedComment);
      } else {
        res.status(401).json(editedComment);
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "server error" });
    }
  };

  handleDeleteComment = (req, res) => {
    const { id } = req.params;
    try {
      const deletedComment = deleteComment(id);
      if (deletedComment.success) {
        res.status(200).json(deletedComment);
      } else {
        res.status(400).json(deletedComment);
      }
    } catch (err) {
      res.status(500).json({ success: false, posts: "Server error" });
    }
  };
}
