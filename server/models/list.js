import mongoose from "mongoose";

const listSchema = mongoose.Schema({
   name: String,
   creator: String,
   items: [
      {
         item_id: Number,
         item_type: String,
         item_poster: String,
         item_title: String,
      },
   ],
   createdAt: {
      type: Date,
      default: new Date(),
   },
});

const List = mongoose.model("List", listSchema);

export default List;
