import React, { useEffect } from "react";

const TvNews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "market",
      isTransparent: false,
      displayMode: "regular",
      width: "400",
      height: "400",
      colorTheme: "dark",
      locale: "en",
      market: "stock",
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
  }, []); // Empty dependency array means this effect runs only once when component mounts

  return (
    <div className="tradingview-widget-container relative">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TvNews;
