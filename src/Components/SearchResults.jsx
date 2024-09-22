import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul className="absolute top-24 border-2 w-96 rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 mr-5">
      {results.map((result) => {
        return (
          <li
            key={result.symbol}
            className="flex cursor-pointer p-4 m-2 justify-between items-center hover:bg-neutral-200"
          >
            <span>{result.symbol}</span>
            <span>{result.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
