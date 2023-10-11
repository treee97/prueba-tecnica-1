import data from "../data/sample.json";

export const getSeries = async () => {
  const series = data.entries.filter(
    (series) => series.programType === "series"
  );

  return series;
};
