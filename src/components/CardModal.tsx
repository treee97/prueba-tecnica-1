interface imageData {
  url: string;
}

interface Props {
  state: boolean;
  onClose: () => void;
  data: {
    title: string;
    description: string;
    releaseYear: number;
    images: { "Poster Art": imageData };
  };
  picture: string;
}
const CardModal = ({ onClose, data, picture }: Props) => {
  return (
    <div className="min-h-screen bg-black bg-opacity-75 flex items-center justify-center fixed top-0 left-0 w-full z-20 max-w">
      <div className="flex flex-col border max-w-sm items-center justify-center text-white">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div>{data.releaseYear}</div>
        <img
          src={data.images["Poster Art"].url}
          alt="movie"
          onError={(e) => (e.currentTarget.src = picture)}
        />
      </div>
    </div>
  );
};

export default CardModal;
