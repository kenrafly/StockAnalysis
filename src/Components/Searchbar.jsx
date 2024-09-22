import { searchResults } from "../constants/mock";
import { RxCross2 } from "react-icons/rx";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const clear = () => {
    setSearchTerm("");
    setBestMatches([]);
  };

  const updateResults = () => {
    setBestMatches(searchResults.result);
  };

  return (
    <div className="flex justify-start  relative">
      <input
        type="text"
        className=" bg-slate-100 m-10 p-3 mt-0  rounded-3xl text-center text-xl font-bold mb-10 mr-3 uppercase tracking-wider"
        value={searchTerm}
        placeholder="Search stock..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateResults();
          }
        }}
      />

      {searchTerm && (
        <button onClick={clear} className="w-10 ">
          <RxCross2 />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
