import List from "../models/list.js";
import mongoose from "mongoose";

export const getLists = async (req, res) => {
   try {
      const lists = await List.find({ creator: req.userId });
      res.status(200).json(lists);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getList = async (req, res) => {
   const { id } = req.params;
   try {
      const list = await List.findById(id);
      res.status(200).json(list);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createList = async (req, res) => {
   const list = req.body;
   const newList = new List({
      ...list,
      creator: req.userId,
      createdAt: new Date().toISOString(),
   });
   try {
      await newList.save();
      res.status(201).json(newList);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateList = async (req, res) => {
   const { id: _id } = req.params;
   const newListName = req.body;

   if (!mongoose.Types.ObjectId(_id))
      return res.status(404).send("No List with that id");

   const updatedList = await List.findByIdAndUpdate(
      _id,
      { ...newListName, _id },
      { new: true }
   );
   res.json(updatedList);
};

export const deleteList = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId(id))
      return res.status(404).send("No List with that id");

   await List.findByIdAndRemove(id);
   res.json({ message: "List deleted succesfully" });
};

export const addMedia = async (req, res) => {
   const { id } = req.params;
   const mediaData = req.body;

   if (!mongoose.Types.ObjectId(id))
      return res.status(404).send("No List with that id");

   const updatedList = await List.findByIdAndUpdate(
      id,
      { $push: { items: mediaData } },
      { new: true }
   );
   res.json(updatedList);
};

export const deleteItems = async (req, res) => {
   const { id } = req.params;
   const itemsToDelete = req.body;

   if (!mongoose.Types.ObjectId(id))
      return res.status(404).send("No List with that id");

   const list = await List.findById(id);

   list.items = list.items.filter((el) => {
      return !itemsToDelete.some((f) => {
         return f._id === mongoose.Types.ObjectId(el._id).toHexString();
      });
   });

   const updatedList = await List.findByIdAndUpdate(id, list, { new: true });
   res.json(updatedList);
};
