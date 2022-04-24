import express from "express";
import {
   getLists,
   createList,
   updateList,
   getList,
   deleteList,
   addMedia,
   deleteItems,
} from "../controllers/lists.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getLists);
router.post("/", auth, createList);
router.patch("/:id", auth, updateList);
router.get("/:id", auth, getList);
router.delete("/:id", auth, deleteList);
router.patch("/:id/addItem", auth, addMedia);
router.patch("/:id/deleteItems", auth, deleteItems);

export default router;
