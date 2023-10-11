import Card from "../components/Card";

const Inicio = () => {
  return (
    <div className="flex items-start justify-start gap-4 p-8 min-h-screen">
      <Card route="/peliculas" category="Movies" />
      <Card route="/series" category="Series" />
    </div>
  );
};

export default Inicio;
