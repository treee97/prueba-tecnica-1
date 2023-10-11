import { useState } from "react";
import placeholder from "../assets/placeholder.png";
import CardModal from "./CardModal";
interface imageData {
  url: string;
}
interface Props {
  data: {
    images: { "Poster Art": imageData };
    title: string;
    description: string;
    releaseYear: number;
  };
}
const CardItem = ({ data }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="max-w-[230px] rounded-lg overflow-hidden cursor-pointer hover:border-2 hover:border-white hover:opacity-50 m-2 relative"
        onClick={() => setModalIsOpen((prevState) => !prevState)}
      >
        <img
          src={data.images["Poster Art"].url}
          alt="movie"
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
        <h2>{data.title}</h2>
      </div>
      {modalIsOpen && (
        <CardModal
          state={modalIsOpen}
          onClose={closeModal}
          data={data}
          picture={placeholder}
        />
      )}
    </>
  );
};

export default CardItem;
