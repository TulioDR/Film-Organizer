import fetch from "node-fetch";

export const getHomeMedia = async (req, res) => {
   const url1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`;
   const url2 = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`;
   const url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&region=US&page=1`;
   try {
      const homeMedia = await Promise.all([
         fetch(url1).then((res) => res.json()),
         fetch(url2).then((res) => res.json()),
         fetch(url3).then((res) => res.json()),
      ]);
      res.status(200).json(homeMedia);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getPopularMedia = async (req, res) => {
   const { mediaType, page } = req.params;
   const url = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getMediaByGenre = async (req, res) => {
   const { mediaType, page, genreId } = req.params;
   const url = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&with_genres=${genreId}&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error });
   }
};

export const getMediaByQuickSearch = async (req, res) => {
   const { mediaType, searchQuery } = req.params;
   const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getMediaBySearch = async (req, res) => {
   const { mediaType, page, searchQuery } = req.params;
   const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.API_KEY}&language=en-US&query=${searchQuery}&include_adult=false&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getMediaByAdvancedSearch = async (req, res) => {
   const { mediaType, page, searchQuery } = req.params;
   const url = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.API_KEY}&language=en-US&${searchQuery}&include_adult=false&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getMediaLanguages = async (req, res) => {
   const url = `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.API_KEY}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getMediaDetails = async (req, res) => {
   const { mediaType, id, certifications } = req.params;
   const url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,credits,similar,${certifications}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getSeasonDetails = async (req, res) => {
   const url = `https://api.themoviedb.org/3/tv/${req.params.id}/season/${req.params.seasonNumber}?api_key=${process.env.API_KEY}&language=en-US`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
