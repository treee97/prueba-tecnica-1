import { getSeries } from "../api/getSeries";
import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";

const Series = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const series = (await getSeries())
        .slice(0, 21)
        .filter((series) => series.releaseYear >= 2010)
        .sort((series1, series2) => series1.title.localeCompare(series2.title));

      setData(series);
      setIsLoading(false);
    };

    fetchSeries();
  }, []);
  return (
    <div>
      <h2>Series</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center flex-wrap relative min-h-screen bg-slate-300">
          {data.map((series, index: number) => (
            <CardItem data={series} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Series;
