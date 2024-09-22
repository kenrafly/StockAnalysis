import React, { useEffect } from "react";

const TvProfile = ({ stockCode }) => {
  const finalStockCode = stockCode || "BBCA";
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 400,
      height: 400,
      isTransparent: false,
      colorTheme: "dark",
      symbol: stockCode ? stockCode : `IDX:${finalStockCode}`, // Use stockCode prop or default to "IDX:BBCA"
      locale: "en",
    });

    const widgetContainer = document.querySelector(
      ".tradingview-widget-container__widget"
    );

    if (widgetContainer) {
      widgetContainer.innerHTML = ""; // Clear previous widget before adding a new one
      widgetContainer.appendChild(script);
    }

    return () => {
      // Cleanup on component unmount
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, [finalStockCode]); // Re-run effect if stockCode changes

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default TvProfile;
