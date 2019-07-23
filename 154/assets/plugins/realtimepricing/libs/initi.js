! function() {
    "use strict";
    $(document).ready(function() {
        $("#magen-plugin").magenCryptoLiveMarketCap({
            developmentMode: !0,
            setCurrencyMinimumFractionDigits: 2,
            coinHistoryDuration: "365day",
            showTotalMarketSummary: !0,
            showCoinsRankColumn: !0,
            onReady: function() {
                $(".loading-screen").remove()
            }
        })
    })
}();