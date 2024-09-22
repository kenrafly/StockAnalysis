import React, { useEffect, useRef } from "react";

function TradingViewFinancialsWidget({ stockCode }) {
  const containerRef = useRef();
  const finalStockCode = stockCode || "BBCA";

  useEffect(() => {
    // Clear the container before appending the new widget
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Create the script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: 800,
      height: 550,
      borderRadius: 25,
      colorTheme: "dark",
      symbol: `IDX:${finalStockCode}`,
      locale: "en",
    });

    // Append the script to the container
    containerRef.current.appendChild(script);

    // Clean up previous widget when component unmounts or stock changes
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [finalStockCode]);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ width: 1000, height: 550, borderRadius: 25 }}
    >
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
}

export default TradingViewFinancialsWidget;
