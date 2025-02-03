import express from "express";
import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { signUp, signIn } from "../../controllers/user-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";
import { createComment, getCommentsForTweet, getRepliesForComment } from "../../controllers/comment-controller.js";



const router = express.Router()

router.post('/tweet',createTweet)

router.get('/tweet/:id', getTweet) //:id is a route parameter. Whatever value you provide in place of :id in the URL will be captured and made available in the req.params object inside the route handler.

router.post("/signUp", signUp);

router.post("/signIn",signIn);

router.post("/likes/toggle",authenticate,toggleLike)

router.post("/comment", authenticate, createComment);
router.get("/tweet/:id/comments", getCommentsForTweet);
router.get("/comment/:id/replies", getRepliesForComment);



export default router;