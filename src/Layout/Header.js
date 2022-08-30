import sortinghat from "../assets/sortinghat.png";

const Header = ({ setPlayButtonClicked }) => {
  const toHomeHandler = () => {
    setPlayButtonClicked(false);
  };
  return (
    <div className="flex bg-custom-teal text-black drop-shadow-xl h-14 w-full items-center justify-center px-16">
      <button
        onClick={toHomeHandler}
        className="text-xl font-bold flex items-center  transition-all hover:bg-custom-yellow px-2 rounded-lg"
      >
        <img src={sortinghat} alt="" className="w-14" />
        HOME
        <img src={sortinghat} alt="" className="w-14" />
      </button>
    </div>
  );
};

export default Header;
