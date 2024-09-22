import React from "react";
import Card from "../Components/Card";
import { companyProfile } from "../constants/mock";
import Searchbar from "../Components/Searchbar";
import Details from "../Components/Details";
import TradingView from "../Components/TradingView";
import { useState } from "react";
import TvFundamental from "../Components/TvFundamental";
import TvProvile from "../Components/TvProfile";
import TvPrice from "../Components/TvPrice";
import TradingViewTechnicalAnalysis from "../Components/TvTechnicals";
import TvNews from "../Components/TvNews";
import { ReactTyped } from "react-typed";

const Analyze = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="max-h-full bg-maincolor">
      <div className="relative pt-0 h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 md:grid-rows-7 xl:grid-rows-2 auto-rows-fr gap-6 p-10">
        <div className="col-start-3 col-end-4">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TvProvile stockCode={searchTerm} />
        </div>
        <div className="border-spacing-0">
          <TvPrice stockCode={searchTerm} />
        </div>
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <TradingView stockCode={searchTerm} />
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
          <TvFundamental stockCode={searchTerm} />
        </div>
        <div className="col-start-3 h-1/2  bg-black rounded-xl">
          <h1 className="text-white pt-6">
            <ReactTyped
              className="text-7xl"
              strings={["Do Your Own Research."]}
              typeSpeed={100}
              loop
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
