import React, { useEffect } from "react";

const TradingViewWidget = ({ stockCode }) => {
  const finalCode = stockCode ? stockCode : "BBCA";
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `IDX:${finalCode}`,
      width: 350,
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
    });

    const widgetContainer = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    widgetContainer.appendChild(script);

    return () => {
      // Clean up the script when component is unmounted
      widgetContainer.innerHTML = "";
    };
  }, [finalCode]);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default TradingViewWidget;

//HTML version
// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
//   {
//   "symbol": "IDX:BBCA",
//   "width": 350,
//   "isTransparent": false,
//   "colorTheme": "dark",
//   "locale": "en"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->
