import data from "../data/sample.json";

export const getMovies = async () => {
  const movies = data.entries.filter((movie) => movie.programType === "movie");

  return movies;
};
