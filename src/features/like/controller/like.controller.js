import { getLikes, toggleLike } from "../model/like.model.js";

export default class LikeController {
  handleGetLikes = (req, res) => {
    const { postId } = req.params;
    try {
      const fetchLikes = getLikes(postId);
      if (fetchLikes.success) {
        res.status(200).json(fetchLikes);
      } else {
        res.status(400).json(fetchLikes);
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "server error" });
    }
  };
  handleToggleLikes = (req, res) => {
    const { postId } = req.params;
    const { userId } = req;
    try {
      const fetchLikes = toggleLike(userId, postId);
      res.status(200).json(fetchLikes);
    } catch (err) {
      res.status(500).json({ success: false, msg: "server error" });
    }
  };
}
