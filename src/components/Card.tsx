import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.png";

const Card = ({ route, category }: { route: any; category: string }) => {
  return (
    <div>
      <Link
        to={route}
        className="min-h-[300px] min-w-[250px] rounded-lg flex items-center justify-center text-3xl uppercase bg-black opacity-80 relative"
      >
        <img src={placeholder} alt="placeholder" />
        <span className="absolute text-white">{category}</span>
      </Link>
      <p>Popular {category}</p>
    </div>
  );
};

export default Card;
