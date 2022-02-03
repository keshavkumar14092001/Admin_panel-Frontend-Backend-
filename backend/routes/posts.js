import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

// Setting our Router:
const router = express.Router();

// Setting our Routes;
router.get('/', getPosts);
router.post('/', createPost);

export default router;