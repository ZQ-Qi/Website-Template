! function() {
    "use strict";

    function e(e, i) {
        y.formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }), e.addClass("_MCCLMC_"), y.context = e, "boolean" != typeof i.developmentMode && (i.developmentMode = !0), y.options = $.extend(y.options, i), a() && (o(), n(), r(), c(), l(), t(), f(), v())
    }

    function a() {
        var e = !1,
            a = "";
        return parseFloat(jQuery().jquery) < 3 && M("warning", "jQuery Need Upgrade", "Make sure using jquery version 3.0.0 or later for better performance.\nCurrent JQuery Version " + jQuery().jquery + "\n\nUpgrade JQuery http://jquery.com/download/"), jQuery().DataTable || (e = !0, a += "> Jquery DataTables is missing make sure you add it before magen plugin in your page.\n  https://datatables.net\n"), jQuery().sparkline || (e = !0, a += "> Jquery Sparkline is missing make sure you add it before magen plugin.\n  https://omnipotent.net/jquery.sparkline\n"), jQuery().modal || (e = !0, a += "> Bootstrap is missing make sure you add it before magen plugin.\n http://getbootstrap.com\n"), "undefined" == typeof moment && (e = !0, a += "> momentjs is missing make sure you add it before magen plugin.\n  https://momentjs.com\n"), "undefined" == typeof Chart && (e = !0, a += "> Chart.js is missing make sure you add it before magen plugin.\n  http://chartjs.org/\n"), "undefined" == typeof io && (e = !0, a += "> SocketIO is missing make sure you add it before magen plugin.\n  https://socket.io/\n"), e && M("error", "Plugin Requirements", a), !e
    }

    function t() {
        y.socketIO = io.connect("https://socket.coincap.io"), y.socketIO.on("trades", function(e) {
            C(e)
        })
    }

    function o() {
        null === localStorage.getItem("curr-code") && localStorage.setItem("curr-code", "USD"), y.formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: localStorage.getItem("curr-code"),
            minimumFractionDigits: y.options.setCurrencyMinimumFractionDigits
        })
    }

    function n() {
        try {
            var e = localStorage.getItem("curr-code");
            $.each(y.currenciesList, function(a, t) {
                var o = !1;
                t.code == e && (o = !0), $("<option/>", {
                    html: t.code + " - " + t.title,
                    value: t.code,
                    selected: o
                }).appendTo("#MCCLMC-currencies-select-box")
            }), $("#MCCLMC-currencies-select-box").on("change", function() {
                localStorage.setItem("curr-code", $(this).val()), window.location.reload()
            })
        } catch (e) {
            M("error", "Currencies list", 'Make sure your add the currencies TAG <div id="MCCLMC-currencies-select-box"></div> in your page')
        }
    }

    function r() {
        if (y.options.showTotalMarketSummary) {
            var e;
            e = {
                container: $("<div/>", {
                    class: "market-summary-container row"
                }),
                cards: [{
                    id: "total-market-cap",
                    title: "Market Cap"
                }, {
                    id: "total-market-volume",
                    title: "Market Volume"
                }, {
                    id: "market-dominance",
                    title: "Dominance"
                }]
            }, $.each(e.cards, function(a, t) {
                var o = [];
                o.container = $("<div/>", {
                    id: t.id,
                    class: "col-md-4"
                }), o.card = $("<div/>", {
                    class: "card"
                }), o.title = $("<strong/>", {
                    class: "title",
                    text: t.title
                }), o.value = $("<h1/>", {
                    class: "_value_"
                }), o.card.appendTo(o.container), o.title.appendTo(o.card), o.value.appendTo(o.card), o.container.appendTo(e.container)
            }), e.container.appendTo(y.context), i()
        }
    }

    function i() {
        $.ajax({
            url: "http://coincap.io/global",
            dataType: "json",
            success: function(e) {
                y.context.find(".market-summary-container #total-market-cap ._value_").html(y.formatter.format(h(parseFloat(e.totalCap)))), y.context.find(".market-summary-container #total-market-volume ._value_").html(y.formatter.format(h(parseFloat(e.volumeTotal)))), y.context.find(".market-summary-container #market-dominance ._value_").html(Math.abs(parseFloat(e.dom) / 2) + "%")
            }
        })
    }

    function l() {
        $("<div/>", {
            class: "market-cap-table-container row",
            html: '<div class="col-md-12"><table id="MCCLMC-crypto-data-list" class="order-column market-data-table" cellspacing="1" width="100%"><thead><tr><th>#</th><th>Coin Name</th><th class="MCCLMC-h-s">Market Cap</th><th>Price</th><th class="MCCLMC-h-s">Volume (24hr)</th><th class="MCCLMC-h-s MCCLMC-show-m">Circulating Supply</th><th>Change (24h)</th><th class="MCCLMC-h-s MCCLMC-show-m">Price Graph</th></tr></thead><tbody></tbody></table></div>'
        }).appendTo(y.context), s()
    }

    function s() {
        $.ajax({
            url: "http://coincap.io/front",
            dataType: "json",
            success: function(e) {
                $.each(e, function(e, a) {
                    var t = u(a);
                    t.appendTo("#MCCLMC-crypto-data-list tbody"), t.on("click", function() {
                        p(a.short)
                    })
                }), m(), "function" == typeof y.options.onReady ? y.options.onReady() : M("error", "Event onReady", "Can't callback onReady event function make sure you add Function")
            }
        })
    }

    function c() {
        $("<div/>", {
            id: "MCCLMC-coin-single-page-modal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "MCCLMC-coin-single-page-modal",
            "aria-hidden": "true",
            class: "modal fade",
            html: '<div class="modal-dialog modal-lg" role="document"><div class="modal-content" style="min-height: 500px"><div class="modal-body"></div></div></div>'
        }).appendTo("body")
    }

    function d() {
        $("<div/>", {
            class: "row",
            html: '<div class="col-md-12"><div class="flex-center"><div class="coin-icon-src"></div><div><h1><span class="display_name"></span> (<span class="id"></span>)</h1><p><span class="supply"></span> Circulating <span class="id"></span> Supply</p></div></div></div><div class="col-md-12"><div class="row"><div class="col-md-4"><div class="card"><h5><span class="price"></span> (<span class="cap24hrChange"></span>)</h5>Current Value</div></div><div class="col-md-4"><div class="card"><h5><span class="market_cap"></span></h5>Market Cap</div></div><div class="col-md-4"><div class="card"><h5><span class="_24h_volume"></span></h5>24hr Volume</div></div></div><div class="row"><div class="col-md-12"><div id="MCCLMC-spinner"></div><canvas id="chartContainer" width="400" height="200"></canvas></div></div></div>'
        }).appendTo("#MCCLMC-coin-single-page-modal .modal-body")
    }

    function p(e) {
        var a = $("#MCCLMC-coin-single-page-modal"),
            t = [],
            o = [],
            n = [],
            r = [];
        a.find(".modal-body").html(null), a.modal("show"), $.ajax({
            url: "http://coincap.io/page/" + e,
            success: function(i) {
                d(), a.find(".coin-icon-src").addClass("_" + i.id.toLocaleLowerCase()), a.find(".supply").html(i.supply), a.find(".id").html(i.id), a.find(".display_name").html(i.display_name), a.find(".price").html(y.formatter.format(h(i.price))), a.find(".cap24hrChange").html(i.cap24hrChange + "%"), a.find(".market_cap").html(y.formatter.format(h(i.market_cap))), a.find("._24h_volume").html(y.formatter.format(h(i.volume))), a.find("canvas").hide(), a.find("#MCCLMC-spinner").show(), $.ajax({
                    url: "https://coincap.io/history/" + y.options.coinHistoryDuration + "/" + e,
                    type: "GET",
                    dataType: "json",
                    success: function(e) {
                        $.each(e.price, function(e, a) {
                            r.push(parseFloat(a[1]))
                        }), $.each(e.market_cap, function(e, a) {
                            t.push(a[0]), o.push(parseFloat(a[1]))
                        }), $.each(e.volume, function(e, a) {
                            n.push(parseFloat(a[1]))
                        }), a.find("#MCCLMC-spinner").hide(), a.find("canvas").show(), setTimeout(function() {
                            g(t, i.id, r, n, o)
                        }, 500)
                    }
                })
            }
        })
    }

    function m() {
        $("#MCCLMC-crypto-data-list").DataTable({
            lengthMenu: [
                [10,100, 200, 300, -1],
                [10,100, 200, 300, "All"]
            ],
            order: [
                [2, "desc"]
            ],
            columnDefs: [{
                targets: 0,
                orderable: !1,
                width: "10px"
            }]
        }).column(0, {
            search: "applied",
            order: "applied"
        }).nodes().each(function(e, a) {
            e.innerHTML = a + 1
        })
    }

    function u(e) {
        if (null !== e) {
            var a = [],
                t = parseFloat(e.cap24hrChange) >= 0 ? "MCCLMC-increment" : "MCCLMC-decrement";
            return a.row = $("<tr/>", {
                id: e.short
            }), a.coinRankNo = $("<td/>", {
                class: "coinRank",
                html: ""
            }), a.coinName = $("<td/>", {
                class: "coinName",
                html: '<div class="coin-icon _' + e.short.toLocaleLowerCase() + '"></div><strong class="coin-code">' + e.short + "</strong> " + e.long
            }), a.marketCap = $("<td/>", {
                class: "marketCap MCCLMC-h-s",
                html: y.formatter.format(h(parseFloat(e.mktcap)))
            }), a.marketCap.attr({
                "data-order": parseFloat(e.mktcap)
            }), a.price = $("<td/>", {
                class: "price",
                price: h(e.price),
                html: y.formatter.format(h(parseFloat(e.price)))
            }), a.volume_24hr = $("<td/>", {
                class: "volume_24hr MCCLMC-h-s",
                html: y.formatter.format(h(parseFloat(e.volume)))
            }), a.circulating_supply = $("<td/>", {
                class: "circulating_supply MCCLMC-h-s MCCLMC-show-m",
                html: e.supply + " " + e.short
            }), a.change_24hr = $("<td/>", {
                class: "MCCLMC-show-m-last-border-round change_24hr " + t,
                html: e.cap24hrChange + "%"
            }), a.change_24hr.attr({
                change: e.cap24hrChange
            }), a.price_graph = $("<td/>", {
                class: "price_graph MCCLMC-h-s MCCLMC-show-m",
                price_data: h(parseFloat(e.price)),
                html: ""
            }), parseFloat(e.price) < 0 ? a.price.addClass("MCCLMC-decrement") : a.price.addClass("MCCLMC-increment"), a.coinRankNo.appendTo(a.row), a.coinName.appendTo(a.row), a.marketCap.appendTo(a.row), a.price.appendTo(a.row), a.volume_24hr.appendTo(a.row), a.circulating_supply.appendTo(a.row), a.change_24hr.appendTo(a.row), a.price_graph.appendTo(a.row), a.row
        }
    }

    function C(e) {
        if (void 0 !== e.coin) {
            var a = e.coin,
                t = e.msg,
                o = y.context.find("#MCCLMC-crypto-data-list"),
                n = o.find("tr#" + a),
                r = o.find("tr#" + a + " .price"),
                i = o.find("tr#" + a + " .change_24hr"),
                l = o.find("tr#" + a + " .volume_24hr"),
                s = o.find("tr#" + a + " .marketCap"),
                c = o.find("tr#" + a + " .circulating_supply"),
                d = o.find("tr#" + a + " .price_graph"),
                p = y.formatter.format(h(parseFloat(t.price))),
                m = parseFloat($(r).attr("price"));
            h(parseFloat(t.price)) >= m ? ($(r).html(p).removeClass().addClass("MCCLMC-increment price").attr("price", h(parseFloat(t.price))), $(n).addClass("MCCLMC-row-increment")) : ($(r).html(p).removeClass().addClass("MCCLMC-decrement price").attr("price", h(parseFloat(t.price))), $(n).addClass("MCCLMC-row-decrement"));
            var u = parseFloat(t.cap24hrChange) >= 0 ? "MCCLMC-increment" : "MCCLMC-decrement";
            parseFloat(t.cap24hrChange) >= parseFloat(i.attr("change")) && $(i).html(t.cap24hrChange + "%").removeClass().addClass(u + " change_24hr").attr("change", t.cap24hrChange);
            var C = d.attr("price_data");
            C = C + "," + h(parseFloat(t.price)), d.attr({
                price_data: C
            }), d.sparkline(C.split(","), {
                type: "line",
                width: "150",
                lineColor: "#ff7f00",
                fillColor: "transparent",
                spotRadius: 3,
                drawNormalOnTop: !1
            }), $(l).html(y.formatter.format(h(parseFloat(t.volume)))), $(i).html(t.cap24hrChange + "%"), $(s).html(y.formatter.format(h(parseFloat(t.mktcap)))), $(c).html(t.supply), setTimeout(function() {
                $(n).removeClass("MCCLMC-row-increment MCCLMC-row-decrement")
            }, 300)
        }
    }

    function h(e) {
        var a = y.currenciesList.map(function(e) {
                return e.code
            }).indexOf(localStorage.getItem("curr-code")),
            t = y.currenciesList[a].rate;
        return parseFloat(t * e)
    }

    function f() {
        "" !== y.options.donateWalletAddress && $("#MCCLMC-donate-button").on("click", function() {
            $("#MCCLMC-donate-bitcoin-modal").is(":visible") || $("#MCCLMC-donate-bitcoin-modal").modal("show")
        })
    }

    function v() {
        if ("" !== y.options.donateWalletAddress) {
            var e = $("<div/>", {
                    id: "MCCLMC-donate-bitcoin-modal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "MCCLMC-donate-bitcoin-modal",
                    "aria-hidden": "true",
                    class: "modal fade",
                    html: '<div class="modal-dialog" role="document"><div class="modal-content" style="min-height: 320px"><div class="modal-body"><div class="row"><div class="col-md-12 donate-model-title"></div><div class="col-md-5 __donate-left-side"></div><div class="col-md-7 __donate-right-side"><h3>Scan this QR with your wallet application</h3><p>Or Click on QR to donate direct from your wallet</p></div></div></div></div></div>'
                }),
                a = [];
            a.modalTitle = $("<div/>", {
                class: "model-title",
                html: "Donate Bitcoin"
            }), a.modelContent = $("<div/>", {
                html: ""
            }), a.walletAddressScanner = $("<div/>", {
                class: "donate-wallet-qr"
            }), a.walletAddressScanner.css({
                "background-image": "url(https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + y.options.donateWalletAddress + ")"
            }), a.walletAddressScannerURL = $("<a/>", {
                class: "donate-wallet-address-link",
                html: y.options.donateWalletAddress
            }), a.modalTitle.appendTo(e.find(".donate-model-title")), a.walletAddressScanner.appendTo(e.find(".__donate-left-side")), a.walletAddressScannerURL.appendTo(e.find(".__donate-left-side")), a.modelContent.appendTo(e.find(".__donate-right-side")), e.appendTo("body"), a.walletAddressScanner.on("click", function() {
                window.location = "bitcoin:" + y.options.donateWalletAddress
            }), a.walletAddressScannerURL.on("click", function() {
                window.location = "bitcoin:" + y.options.donateWalletAddress
            })
        } else $("#MCCLMC-donate-button").remove()
    }

    function g(e, a, t, o, n) {
        var r = document.getElementById("chartContainer").getContext("2d"),
            i = {
                type: "line",
                data: {
                    labels: e,
                    datasets: [{
                        label: a + " - Price",
                        borderColor: "rgb(75, 192, 192)",
                        backgroundColor: "rgb(75, 192, 192)",
                        data: t
                    }, {
                        label: a + " - Volume",
                        borderColor: "red",
                        backgroundColor: "red",
                        data: o
                    }, {
                        label: a + " - Market Cap",
                        borderColor: "rgb(255, 159, 64)",
                        backgroundColor: "rgb(255, 159, 64)",
                        data: n
                    }]
                },
                options: {
                    responsive: !0,
                    title: {
                        display: !1
                    },
                    tooltips: {
                        mode: "index",
                        position: "nearest",
                        intersect: !1,
                        callbacks: {
                            title: function(e) {
                                return moment(e[0].xLabel).format("dddd, MMM DD, HH:mm:ss")
                            },
                            label: function(e, a) {
                                return a.datasets[e.datasetIndex].label + ": " + y.formatter.format(h(parseFloat(e.yLabel)))
                            }
                        }
                    },
                    hover: {
                        mode: "index"
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        xAxes: [{
                            type: "time",
                            time: {
                                displayFormats: {
                                    quarter: "MMM YYYY"
                                }
                            }
                        }],
                        yAxes: [{
                            stacked: !0,
                            ticks: {
                                callback: function(e) {
                                    return y.formatter.format(h(parseFloat(e)))
                                }
                            }
                        }]
                    }
                }
            };
        return new Chart(r, i)
    }

    function M(e, a, t) {
        if (y.options.developmentMode) switch (e) {
            case "info":
                console.info("[ " + y.consoleTAG.toUpperCase() + " ]-----------------------------------------\n\n" + a + "\n\n" + t);
                break;
            case "warning":
                console.warn("//// " + y.consoleTAG.toUpperCase() + " //////////////////////////////////////////\n\nWARNING " + a + "\n\n" + t + "\n");
                break;
            case "error":
                console.error("//// " + y.consoleTAG.toUpperCase() + " //////////////////////////////////////////\n\nUncaught Error: " + a.toString().toUpperCase() + "\n\n" + t);
                break;
            default:
                console.log("[ " + y.consoleTAG.toUpperCase() + " ]-----------------------------------------\n\n" + a + "\n\n" + t)
        }
    }
    var y = {
        formatter: {},
        currenciesList: [{
            title: "US Dollar",
            code: "USD",
            rate: 1
        }, {
            title: "Euro",
            code: "EUR",
            rate: .82
        }, {
            title: "British Pound",
            code: "GBP",
            rate: .72
        }, {
            title: "Canadian Dollar",
            code: "CAD",
            rate: 1.23
        }, {
            title: "Danish Krone",
            code: "DKK",
            rate: 6.02
        }, {
            title: "Australian Dollar",
            code: "AUD",
            rate: 1.25
        }, {
            title: "Japanese Yen",
            code: "JPY",
            rate: 110.67
        }, {
            title: "Swiss Franc",
            code: "CHF",
            rate: .96
        }, {
            title: "Brazilian Real",
            code: "BRL",
            rate: 3.21
        }, {
            title: "Chinese Yuan",
            code: "CNY",
            rate: 6.4
        }, {
            title: "Hong Kong Dollar",
            code: "HKD",
            rate: 7.82
        }, {
            title: "Mexican Peso",
            code: "MXN",
            rate: 18.56
        }, {
            title: "Russian Ruble",
            code: "RUB",
            rate: 56.6
        }, {
            title: "South African Rand",
            code: "ZAR",
            rate: 11.86
        }, {
            title: "Saudi Riyal",
            code: "SAR",
            rate: 3.75
        }, {
            title: "Indian Rupee",
            code: "INR",
            rate: 63.59
        }, {
            title: "United Arab Emirates Dirham",
            code: "AED",
            rate: 3.67
        }, {
            title: "Singapore Dollar",
            code: "SGD",
            rate: 1.31
        }, {
            title: "Ukrainian Hryvnia",
            code: "UAH",
            rate: 28.93
        }, {
            title: "Italian Lira",
            code: "ITL",
            rate: 1709.66
        }, {
            title: "Malaysian Ringgit",
            code: "MYR",
            rate: 3.89
        }, {
            title: "Pakistani Rupee",
            code: "PKR",
            rate: 110.55
        }, {
            title: "New Taiwan Dollar",
            code: "TWD",
            rate: 29.2
        }, {
            title: "Philippine Piso",
            code: "PHP",
            rate: 51.35
        }, {
            title: "Israeli New Shekel",
            code: "ILS",
            rate: 3.4
        }, {
            title: "Turkish Lira",
            code: "TRY",
            rate: 3.79
        }, {
            title: "New Zealand Dollar",
            code: "NZD",
            rate: 1.37
        }, {
            title: "Indonesian Rupiah",
            code: "IDR",
            rate: 13384
        }, {
            title: "Chilean Peso",
            code: "CLP",
            rate: 603.5
        }, {
            title: "Thai Baht",
            code: "THB",
            rate: 31.47
        }, {
            title: "Norwegian Krone",
            code: "NOK",
            rate: 7.72
        }, {
            title: "Hungarian Forint",
            code: "HUF",
            rate: 250.51
        }, {
            title: "Swedish Krona",
            code: "SEK",
            rate: 7.89
        }, {
            title: "South Korean Won",
            code: "KRW",
            rate: 1070.26
        }, {
            title: "Polish Zloty",
            code: "PLN",
            rate: 3.35
        }],
        consoleTAG: "Magen Crypto Currency Live Market Cap Console",
        options: {
            developmentMode: !0,
            setCurrencyMinimumFractionDigits: 2,
            showCoinsRankColumn: !0,
            coinHistoryDuration: "365day",
            donateWalletAddress: "",
            showTotalMarketSummary: !0,
            onReady: function() {}
        },
        context: null,
        socketIO: null
    };
    jQuery.fn.extend({
        magenCryptoLiveMarketCap: function(a) {
            e($(this), a)
        }
    })
}();