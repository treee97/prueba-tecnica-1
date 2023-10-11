import { useEffect, useState } from "react";
import { getMovies } from "../api/getMovies";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Peliculas = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const movies = (await getMovies())
          .filter((movie) => movie.releaseYear >= 2010)
          .slice(0, 20)
          .sort((movie1, movie2) => movie1.title.localeCompare(movie2.title));

        //get all the movies from the json
        //get the movies from 2010 or newer
        //only get the first 20 of them
        //order them alphabetically
        setData(movies);
        setIsLoading(false);

        // items.sort((a, b) => a.localeCompare(b));
      };

      fetchData();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
    console.log("this is the error =>>", error);
  }, []);

  if (error) return <Error />;

  return (
    <>
      <h2>Peliculas</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center flex-wrap relative min-h-screen bg-slate-300">
          {data.map((movie: any, index: number) => (
            <CardItem data={movie} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Peliculas;
