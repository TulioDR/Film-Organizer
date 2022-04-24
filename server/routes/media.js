import express from "express";
import {
   getHomeMedia,
   getPopularMedia,
   getMediaByGenre,
   getMediaByQuickSearch,
   getMediaBySearch,
   getMediaByAdvancedSearch,
   getMediaLanguages,
   getMediaDetails,
   getSeasonDetails,
} from "../controllers/media.js";

const router = express.Router();

router.get("/home", getHomeMedia);
router.get("/popular/:mediaType/:page", getPopularMedia);
router.get("/genres/:mediaType/:genreId/:page", getMediaByGenre);
router.get("/search/:mediaType/:searchQuery", getMediaByQuickSearch);
router.get("/search/:mediaType/:searchQuery/:page", getMediaBySearch);
router.get("/advanced/:mediaType/:searchQuery/:page", getMediaByAdvancedSearch);
router.get("/languages", getMediaLanguages);
router.get("/details/:mediaType/:id/:certifications", getMediaDetails);
router.get("/tv/:id/season/:seasonNumber", getSeasonDetails);

export default router;
