(function(t) {
    function e(e) {
        for (var i, l, r = e[0], o = e[1], c = e[2], h = 0, f = []; h < r.length; h++)
            l = r[h], Object.prototype.hasOwnProperty.call(a, l) && a[l] && f.push(a[l][0]), a[l] = 0;
        for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
        d && d(e);
        while (f.length) f.shift()();
        return n.push.apply(n, c || []), s()
    }

    function s() {
        for (var t, e = 0; e < n.length; e++) {
            for (var s = n[e], i = !0, r = 1; r < s.length; r++) {
                var o = s[r];
                0 !== a[o] && (i = !1)
            }
            i && (n.splice(e--, 1), t = l(l.s = s[0]))
        }
        return t
    }
    var i = {},
        a = {
            index: 0
        },
        n = [];

    function l(e) {
        if (i[e]) return i[e].exports;
        var s = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, l), s.l = !0, s.exports
    }
    l.m = t, l.c = i, l.d = function(t, e, s) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, l.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function(t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (l.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) l.d(s, i, function(e) {
                return t[e]
            }.bind(null, i));
        return s
    }, l.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var d = o;
    n.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "034f": function(t, e, s) {
        "use strict";
        s("85ec")
    },
    1: function(t, e) {},
    "237b": function(t, e, s) {
        "use strict";
        s("3c18")
    },
    2580: function(t, e, s) {
        "use strict";
        s("c1ae")
    },
    "3c18": function(t, e, s) {},
    4678: function(t, e, s) {
        var i = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function a(t) {
            var e = n(t);
            return s(e)
        }

        function n(t) {
            if (!s.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return i[t]
        }
        a.keys = function() {
            return Object.keys(i)
        }, a.resolve = n, t.exports = a, a.id = "4678"
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = s("2b0e"),
            a = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    attrs: {
                        id: "app"
                    }
                }, [s("Home")], 1)
            },
            n = [],
            l = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("section", [s("Header"), s("el-checkbox", {
                    staticStyle: {
                        "padding-top": "10px",
                        width: "33%"
                    },
                    attrs: {
                        indeterminate: t.isIndeterminate
                    },
                    on: {
                        change: t.handleCheckAllChange
                    },
                    model: {
                        value: t.checkAll,
                        callback: function(e) {
                            t.checkAll = e
                        },
                        expression: "checkAll"
                    }
                }, [s("span", {
                    staticStyle: {
                        color: "#666666"
                    }
                }, [t._v("全选")])]), s("el-checkbox-group", {
                    on: {
                        change: t.handleCheckedChange
                    },
                    model: {
                        value: t.checkList,
                        callback: function(e) {
                            t.checkList = e
                        },
                        expression: "checkList"
                    }
                }, t._l(t.subList, (function(e) {
                    return s("el-checkbox", {
                        key: e.sub,
                        staticClass: "boxes",
                        attrs: {
                            size: "medium",
                            label: e.sub
                        }
                    }, [s("span", {
                        staticStyle: {
                            color: "#666666"
                        }
                    }, [t._v(t._s(t.formatSubName(e)))])])
                })), 1), s("el-row", {
                    staticClass: "timezone"
                }, [s("div", {
                    staticStyle: {
                        float: "left"
                    }
                }, [t._v(" Deadlines are shown in " + t._s(t.timeZone) + " time. ")]), s("div", {
                    staticStyle: {
                        float: "left",
                        width: "155px"
                    }
                }, [s("el-input", {
                    attrs: {
                        "prefix-icon": "el-icon-search",
                        size: "mini",
                        placeholder: "search conference"
                    },
                    on: {
                        change: t.handleInputChange
                    },
                    model: {
                        value: t.input,
                        callback: function(e) {
                            t.input = e
                        },
                        expression: "input"
                    }
                })], 1), s("div", {
                    staticStyle: {
                        float: "right"
                    }
                }, [s("el-checkbox-group", {
                    staticClass: "rankbox",
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        change: t.handleRankChange
                    },
                    model: {
                        value: t.rankList,
                        callback: function(e) {
                            t.rankList = e
                        },
                        expression: "rankList"
                    }
                }, t._l(t.rankoptions, (function(e, i) {
                    return s("el-checkbox-button", {
                        key: i,
                        attrs: {
                            label: i
                        }
                    }, [t._v(t._s(e))])
                })), 1)], 1)]), s("el-row", {
                    staticClass: "zonedivider"
                }), s("el-table", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        data: t.showList,
                        "show-header": !1
                    }
                }, [s("el-table-column", {
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(e) {
                            return [s("div", {
                                class: {
                                    "conf-fin": "FIN" === e.row.status
                                }
                            }, [s("el-row", {
                                staticClass: "conf-title"
                            }, [s("a", {
                                attrs: {
                                    href: t.generateDBLP(e.row.dblp)
                                }
                            }, [t._v(t._s(e.row.title))]), t._v(" " + t._s(e.row.year) + " "), !0 === e.row.isLike ? s("i", {
                                staticClass: "el-icon-star-on",
                                staticStyle: {
                                    color: "#FBCA04"
                                },
                                on: {
                                    click: function(s) {
                                        return t.handleClickIcon(e.row, !0)
                                    }
                                }
                            }) : s("i", {
                                staticClass: "el-icon-star-off",
                                on: {
                                    click: function(s) {
                                        return t.handleClickIcon(e.row, !1)
                                    }
                                }
                            })]), s("el-row", [t._v(t._s(e.row.date + " " + e.row.place))]), s("el-row", {
                                staticClass: "conf-des"
                            }, [t._v(t._s(e.row.description))]), s("el-row", [s("el-tag", {
                                attrs: {
                                    size: "mini",
                                    type: "",
                                    effect: "plain"
                                }
                            }, [t._v(t._s(e.row.displayrank))]), t._v(" "), s("span", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.row.comment,
                                    expression: "scope.row.comment"
                                }],
                                staticStyle: {
                                    color: "#409eff"
                                }
                            }, [s("b", [t._v("NOTE:")]), t._v(" " + t._s(e.row.comment))])], 1), s("el-row", {
                                staticStyle: {
                                    "padding-top": "5px"
                                }
                            }, [s("span", {
                                staticClass: "conf-sub"
                            }, [t._v(t._s(e.row.subname))])])], 1)]
                        }
                    }])
                }), s("el-table-column", {
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(e) {
                            return [s("div", {
                                class: {
                                    "conf-fin": "FIN" === e.row.status
                                }
                            }, [s("el-row", {
                                staticClass: "conf-timer"
                            }, ["TBD" === e.row.status ? s("div", {
                                staticStyle: {
                                    color: "black"
                                }
                            }, [t._v("TBD")]) : s("countdown", {
                                staticStyle: {
                                    color: "black"
                                },
                                attrs: {
                                    time: e.row.remain,
                                    transform: t.transform
                                },
                                scopedSlots: t._u([{
                                    key: "default",
                                    fn: function(e) {
                                        return [t._v(t._s(e.days) + " " + t._s(e.hours) + " " + t._s(e.minutes) + " " + t._s(e.seconds))]
                                    }
                                }], null, !0)
                            }), s("el-popover", {
                                attrs: {
                                    placement: "right",
                                    trigger: "click"
                                }
                            }, [s("el-row", [s("img", {
                                staticStyle: {
                                    width: "20px",
                                    height: "20px",
                                    "vertical-align": "middle"
                                },
                                attrs: {
                                    src: "//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png#",
                                    srcset: "//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png 2x, //ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png# 1x",
                                    alt: "",
                                    "aria-hidden": "true"
                                }
                            }), s("span", {
                                staticStyle: {
                                    "padding-left": "5px"
                                }
                            }, ["TBD" === e.row.status ? s("a", [t._v("Not Available")]) : s("a", {
                                attrs: {
                                    href: t.formatGoogleCalendar(e.row),
                                    target: "_blank",
                                    rel: "nofollow"
                                }
                            }, [t._v("Google Calendar")])])]), s("el-row", [s("img", {
                                staticStyle: {
                                    width: "20px",
                                    height: "20px",
                                    "vertical-align": "middle"
                                },
                                attrs: {
                                    src: "https://help.apple.com/assets/61526E8E1494760B754BD308/61526E8F1494760B754BD30F/zh_CN/2162f7d3de310d2b3503c0bbebdc3d56.png",
                                    alt: "",
                                    "aria-hidden": "true"
                                }
                            }), s("span", {
                                staticStyle: {
                                    "padding-left": "5px"
                                }
                            }, ["TBD" === e.row.status ? s("a", [t._v("Not Available")]) : s("a", {
                                attrs: {
                                    href: t.formatiCloudCalendar(e.row),
                                    rel: "nofollow"
                                }
                            }, [t._v("iCloud Calendar")])])]), s("i", {
                                staticClass: "el-icon-date icon",
                                staticStyle: {
                                    "padding-left": "5px"
                                },
                                attrs: {
                                    slot: "reference"
                                },
                                slot: "reference"
                            })], 1)], 1), s("el-row", ["TBD" === e.row.status ? s("div", [t._v(" Deadline: "), s("a", {
                                attrs: {
                                    href: "https://github.com/ccfddl/ccf-deadlines/pulls"
                                }
                            }, [t._v("pull request to update")])]) : s("div", [t._v(" Deadline: " + t._s(e.row.localDDL) + " (" + t._s(e.row.originDDL) + ") ")])]), s("el-row", [t._v("website: "), s("a", {
                                attrs: {
                                    href: e.row.link
                                }
                            }, [t._v(t._s(e.row.link))])]), "RUN" === e.row.status ? s("TimeLine", {
                                attrs: {
                                    ddls: e.row.ddls
                                }
                            }) : t._e()], 1)]
                        }
                    }])
                })], 1), s("el-row", {
                    staticStyle: {
                        "padding-top": "8px"
                    }
                }, [s("div", {
                    staticStyle: {
                        float: "left",
                        color: "#666666",
                        "font-size": "12px"
                    }
                }), s("div", {
                    staticStyle: {
                        float: "right"
                    }
                }, [s("el-pagination", {
                    attrs: {
                        background: "",
                        small: "",
                        layout: "prev, pager, next",
                        "page-size": t.pageSize,
                        "current-page": t.page,
                        total: t.showNumber
                    },
                    on: {
                        "current-change": t.handleCurrentChange
                    }
                })], 1)])], 1)
            },
            r = [],
            o = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("section", [s("el-row", [s("a", {
                    staticClass: "title",
                    attrs: {
                        href: "/"
                    }
                }, [t._v("CCF Rec. Conference Deadlines")])], 1)], 1)
            },
            c = [],
            d = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("iframe", {
                    attrs: {
                        src: "https://ghbtns.com/github-btn.html?user=ccfddl&repo=ccf-deadlines&type=star&count=true&size=large",
                        frameborder: "0",
                        scrolling: "0",
                        width: "170",
                        height: "30",
                        title: "GitHub"
                    }
                })
            },
            h = [],
            f = {
                name: "GithubButton"
            },
            u = f,
            p = s("2877"),
            m = Object(p["a"])(u, d, h, !1, null, "6336978e", null),
            b = m.exports,
            g = {
                name: "Header",
                components: {
                    GithubButton: b
                },
                data() {
                    return {
                        showLatestConf: !1,
                        showStr: ""
                    }
                },
                mounted() {
                    this.$http.get("https://api.github.com/repos/ccfddl/ccf-deadlines/commits?page=1&per_page=10").then(t => {
                        let e = t.body.length;
                        for (let s = 0; s < e; s++) {
                            let e = t.body[s].commit.message,
                                i = e.split(" "),
                                a = e.indexOf("(");
                            if ("update" === i[0].toLowerCase() || "add" === i[0].toLowerCase()) {
                                -1 !== a && (e = e.substr(0, a)), this.showStr = e, this.showLatestConf = !0;
                                break
                            }
                        }
                    })
                }
            },
            _ = g,
            y = (s("2580"), Object(p["a"])(_, o, c, !1, null, "0a0e9f53", null)),
            j = y.exports,
            k = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "time_con"
                }, [s("div", {
                    staticClass: "line_time"
                }, [s("div", {
                    staticClass: "all_line"
                }, [s("div", {
                    ref: "allLineTime",
                    staticClass: "line"
                }, [s("div", {
                    ref: "canLine",
                    staticClass: "can_line"
                }), t._l(t.dateTips, (function(e, i) {
                    return s("div", {
                        key: "tips-" + i,
                        staticClass: "reference",
                        style: t.setLeft(e["timepoint"])
                    }, [0 === i && t.isSingle || t._isMobile() && t.dateTips.length > 6 && (i % 3 === 1 || i % 3 === 2) ? t._e() : s("em", {
                        domProps: {
                            textContent: t._s(t.formatter(e["timepoint"], 1, i))
                        }
                    })])
                })), t._l(t.incre_dates, (function(e, i) {
                    return s("div", {
                        key: i,
                        class: t.formatClass(e["type"]),
                        style: t.setLeft(e["timepoint"], i)
                    }, [s("em", {
                        style: t.setText(i),
                        domProps: {
                            textContent: t._s(t.formatType(e["type"]) + " " + t.formatter(e["timepoint"]))
                        }
                    })])
                })), s("div", {
                    ref: "selDot",
                    staticClass: "dot sel_dot"
                }, [s("em", [t._v("Now: " + t._s(t.selTime))])])], 2)])])])
            },
            w = [];
        const v = s("7f45"),
            L = v.tz.guess();
        var C = {
                name: "TimeLine",
                props: ["ddls"],
                data() {
                    return {
                        fullDate: null,
                        binlogDate: null,
                        selTime: null,
                        start_date: null,
                        end_date: null,
                        timeline: null,
                        incre_dates: [],
                        allIncre: [],
                        dateTips: [],
                        deadlines: [],
                        isSingle: !1,
                        expireIndex: -1
                    }
                },
                created() {},
                mounted() {
                    this.$nextTick(() => {
                        this.getBackupTimeline()
                    })
                },
                methods: {
                    _isMobile() {
                        let t = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                        return t
                    },
                    formatter(t, e, s) {
                        if (e) {
                            if (this.ddls.length > 1 && s < this.ddls.length - 1) {
                                let t = this.dateTips[s],
                                    e = this.dateTips[s + 1];
                                if ((e.timepoint - this.start_date) / (this.end_date - this.start_date) * 100 - (t.timepoint - this.start_date) / (this.end_date - this.start_date) * 100 < 8) return ""
                            }
                            return "" + v(1e3 * t).format("MM/DD")
                        }
                        return "" + v(1e3 * t).format("YYYY/MM/DD HH:mm:ss")
                    },
                    formatType(t) {
                        return 0 === t ? "Registration:" : 1 === t ? "Submission:" : ""
                    },
                    formatClass(t) {
                        return 0 === t ? "square square_all" : 1 === t ? "dot dot_all" : ""
                    },
                    getBackupTimeline() {
                        this.fullDate = null, this.binlogDate = null, this.selTime = null, this.start_date = null, this.end_date = null, this.timeline = null, this.deadlines = [], this.incre_dates = [], this.allIncre = [], this.dateTips = [], this.isSingle = !1, this.expireIndex = -1;
                        let t = v.tz(new Date, L).valueOf(),
                            e = this.ddls.length;
                        1 === e && (this.deadlines.push({
                            timepoint: t / 1e3,
                            type: 1
                        }), this.isSingle = !0);
                        for (let r = 0; r < e; r++) {
                            let t = {
                                timepoint: v(this.ddls[r]["timepoint"]).valueOf() / 1e3,
                                type: this.ddls[r]["type"]
                            };
                            this.deadlines.push(t)
                        }
                        let s = this.deadlines.length;
                        for (let r = 0; r < s; r++) {
                            let e = this.deadlines[r]["timepoint"];
                            if (!(t >= 1e3 * e)) break;
                            this.expireIndex = r
                        }
                        t < 1e3 * this.deadlines[0]["timepoint"] ? this.start_date = 1 * v(t).subtract(7, "d").startOf("day").format("X") : this.start_date = 1 * v(1e3 * this.deadlines[0]["timepoint"]).subtract(7, "d").startOf("day").format("X"), this.end_date = 1 * v(1e3 * this.deadlines[s - 1]["timepoint"]).add(7, "d").endOf("day").format("X"), this.fullDate = t / 1e3, this.binlogDate = this.deadlines[s - 1]["timepoint"];
                        let i = this.$refs.canLine,
                            a = t / 1e3,
                            n = (this.binlogDate - a) / (this.end_date - this.start_date);
                        n > 0 ? (i.style.width = 100 * n + "%", i.style.left = (a - this.start_date) / (this.end_date - this.start_date) * 100 + "%", i.style.maxWidth = 100 - parseFloat(i.style.left) + "%") : i.style.width = "0%";
                        let l = this.deadlines;
                        this.incre_dates = l, this.allIncre = l.concat([{
                            timepoint: this.binlogDate,
                            type: 1
                        }, {
                            timepoint: this.fullDate,
                            type: 1
                        }]), this.clickDot(this.fullDate), this.timeline = l[l.length - 1]["timepoint"], this.dateTips = [];
                        for (let r = 0; r < this.deadlines.length; r++) this.dateTips.push(this.deadlines[r])
                    },
                    lineMouseDown(t) {
                        let e = this.$refs.allLineTime,
                            s = (t.offsetX - 6) / (1 * e.offsetWidth);
                        this.setSelTime(s)
                    },
                    canLineMouseDown(t) {
                        let e = this.$refs.canLine,
                            s = this.$refs.allLineTime,
                            i = t.offsetX / (1 * s.offsetWidth);
                        parseFloat(e.style.left) > 0 && (i = t.offsetX / (1 * s.offsetWidth) + parseFloat(e.style.left) / 100), this.setSelTime(i)
                    },
                    clickDot(t) {
                        let e = (t - this.start_date) / (this.end_date - this.start_date);
                        this.setSelTime(e)
                    },
                    setSelTime(t) {
                        let e = this.$refs.selDot;
                        e.classList.remove("sel_dot_left"), e.classList.remove("sel_dot_right");
                        let s = t;
                        this.timeline = (this.end_date - this.start_date) * s + this.start_date, (this.timeline > this.binlogDate || this.timeline < this.fullDate) && (this.allIncre.sort((t, e) => Math.abs(t - this.timeline) - Math.abs(e - this.timeline)), this.timeline = this.allIncre[0], s = (this.timeline - this.start_date) / (this.end_date - this.start_date)), this.selTime = v(1e3 * this.timeline).format("YYYY-MM-DD HH:mm:ss"), e.style.left = 100 * s + "%", 100 * s < 10 && e.classList.add("sel_dot_left"), 100 * s > 90 && e.classList.add("sel_dot_right")
                    },
                    dragDown(t) {
                        let e = 1 * this.$refs.allLineTime.offsetWidth,
                            s = this.$refs.selDot,
                            i = t.clientX - s.offsetLeft;
                        document.onmousemove = t => {
                            let s = (t.clientX - i) / e * 100;
                            s >= 100 ? s = 100 : s <= 0 && (s = 0), this.setSelTime(s / 100)
                        }, document.onmouseup = () => {
                            document.onmousemove = null, document.onmouseup = null
                        }
                    },
                    setLeft(t, e) {
                        return e <= this.expireIndex ? `left:${(t - this.start_date) / (this.end_date - this.start_date) * 100}%;border: 2px solid #ccc;` : `left:${(t - this.start_date) / (this.end_date - this.start_date) * 100}%;`
                    },
                    setText(t) {
                        if (t <= this.expireIndex) return "color: #ccc;"
                    }
                },
                watch: {
                    ddls() {
                        this.$nextTick(() => {
                            this.getBackupTimeline()
                        })
                    }
                }
            },
            x = C,
            S = (s("e8b5"), Object(p["a"])(x, k, w, !1, null, "17de0d54", null)),
            D = S.exports;
        const T = s("e2c1"),
            z = s("7f45"),
            M = z.tz.guess();
        var A = {
                name: "Home",
                components: {
                    Header: j,
                    TimeLine: D
                },
                data() {
                    return {
                        publicPath: "/ccfddl/",
                        checkAll: !0,
                        isIndeterminate: !1,
                        pageSize: 10,
                        page: 1,
                        checkList: [],
                        subList: [],
                        allconfList: [],
                        showList: [],
                        showNumber: 0,
                        typeMap: new Map,
                        timeZone: "",
                        utcMap: new Map,
                        rankoptions: {
                            A: "CCF A",
                            B: "CCF B",
                            C: "CCF C",
                            N: "Non-CCF"
                        },
                        typesList: [],
                        rankList: [],
                        cachedLikes: [],
                        cachedRanks: [],
                        input: ""
                    }
                },
                methods: {
                    loadFile() {
                        this.timeZone = M, this.$http.get(this.publicPath + "conference/types.yml").then(t => {
                            const e = T.load(t.body);
                            this.subList = e;
                            for (let s = 0; s < this.subList.length; s++) this.checkList.push(this.subList[s].sub), this.typesList.push(this.subList[s].sub), this.typeMap.set(this.subList[s].sub, this.subList[s].name);
                            this.loadCachedTypes(), this.getAllConf()
                        }, () => {
                            alert("sorry your network is not stable!")
                        })
                    },
                    getAllConf() {
                        this.$http.get(this.publicPath + "conference/allconf.yml").then(t => {
                            const e = T.load(t.body);
                            let s = [],
                                i = z.tz(new Date, M);
                            for (let n = 0; n < e.length; n++) {
                                let t = e[n];
                                for (let e = 0; e < t.confs.length; e++) {
                                    let a = t.confs[e];
                                    a.title = t.title, a.description = t.description, a.sub = t.sub, a.rank = t.rank, a.displayrank = this.rankoptions[a.rank], a.dblp = t.dblp;
                                    let n = a.timeline.length;
                                    a.deadline = a.timeline[n - 1].deadline, a.abstract_deadline = a.timeline[n - 1].abstract_deadline, a.comment = a.timeline[n - 1].comment, a.ddls = [];
                                    let l = !1;
                                    for (let t = 0; t < n; t++) {
                                        let e = z(a.timeline[t].deadline + this.utcMap.get(a.timezone)),
                                            s = e.diff(i);
                                        a.timeline[t].abstract_deadline && a.ddls.push({
                                            timepoint: a.timeline[t].abstract_deadline + this.utcMap.get(a.timezone),
                                            type: 0
                                        }), a.ddls.push({
                                            timepoint: a.timeline[t].deadline + this.utcMap.get(a.timezone),
                                            type: 1
                                        }), !l && s >= 0 && (a.deadline = a.timeline[t].deadline, a.abstract_deadline = a.timeline[t].abstract_deadline, a.comment = a.timeline[t].comment, l = !0)
                                    }
                                    s.push(a)
                                }
                            }
                            let a = z.tz(new Date, M);
                            for (let n = 0; n < s.length; n++) {
                                let t = s[n];
                                if (t.subname = this.typeMap.get(t.sub), "TBD" === t.deadline) t.remain = 0, t.status = "TBD";
                                else {
                                    "AoE" === t.timezone ? t.timezone = "UTC-12" : "UTC" === t.timezone && (t.timezone = "UTC+0");
                                    let e = z(t.deadline + this.utcMap.get(t.timezone));
                                    if (t.localDDL = e.tz(this.timeZone).format("ddd MMM Do YYYY HH:mm:ss z"), t.originDDL = t.deadline + " " + t.timezone, t.abstract_deadline) {
                                        let e = z(t.abstract_deadline + this.utcMap.get(t.timezone));
                                        t.comment || (t.comment = "abstract deadline on " + e.tz(this.timeZone).format("MMM D, YYYY") + ".")
                                    }
                                    let s = e.diff(a);
                                    s <= 0 ? (t.remain = 0, t.status = "FIN") : (t.remain = s, t.status = "RUN"), this.cachedLikes && this.cachedLikes.indexOf(t.title + t.id) >= 0 ? t.isLike = !0 : t.isLike = !1
                                }
                                this.allconfList.push(t)
                            }
                            this.showConf(this.typesList, this.rankList, this.input, 1)
                        }, () => {
                            alert("sorry your network is not stable!")
                        })
                    },
                    showConf(t, e, s, i) {
                        let a = this.allconfList;
                        null != t && 0 != t.length && (a = a.filter((function(e) {
                            return t.indexOf(e.sub.toUpperCase()) >= 0
                        }))), null != e && e.length > 0 && (a = a.filter((function(t) {
                            return e.indexOf(t.rank) >= 0
                        }))), null != s && s.length > 0 && (a = a.filter((function(t) {
                            return t.id.toLowerCase().indexOf(s.toLowerCase()) >= 0
                        })));
                        let n = a.filter((function(t) {
                                return "RUN" === t.status
                            })),
                            l = a.filter((function(t) {
                                return "TBD" === t.status
                            })),
                            r = a.filter((function(t) {
                                return "FIN" === t.status
                            }));
                        n.sort((t, e) => e.remain === t.remain ? 0 : t.remain < e.remain ? -1 : 1), r.sort((t, e) => e.year === t.year ? 0 : t.year > e.year ? -1 : 1), this.showList = [];
                        let o = [],
                            c = [];
                        o.push.apply(o, n), o.push.apply(o, l), o.push.apply(o, r);
                        for (let d = o.length - 1; d >= 0; d--) {
                            let t = o[d];
                            !0 === t.isLike && (c.push(t), o.splice(d, 1))
                        }
                        c.reverse(), c.push.apply(c, o), this.showList = c, this.showNumber = this.showList.length, this.showList = this.showList.slice(this.pageSize * (i - 1), this.pageSize * i), this.page = i
                    },
                    transform(t) {
                        return Object.entries(t).forEach(([e, s]) => {
                            const i = s < 10 ? "0" + s : s,
                                a = s < 2 ? e.replace(/s$/, "") : e;
                            "d" === a[0] ? t[e] = `${i} ${a}` : t[e] = `${i} ${a[0]}`
                        }), t
                    },
                    loadUTCMap() {
                        for (let t = -12; t <= 12; t++) t >= 0 ? this.utcMap.set("UTC+" + t, "+" + (Array(2).join(0) + t).slice(-2) + "00") : this.utcMap.set("UTC" + t, "-" + (Array(2).join(0) + -1 * t).slice(-2) + "00");
                        this.utcMap.set("AoE", "-1200"), this.utcMap.set("UTC", "+0000")
                    },
                    handleCheckedChange(t) {
                        this.typesList = t;
                        let e = t.length;
                        this.checkAll = e === this.subList.length, this.isIndeterminate = e > 0 && e < this.subList.length, this.$ls.set("types", Array.from(this.typesList)), this.showConf(this.typesList, this.rankList, this.input, 1)
                    },
                    handleInputChange() {
                        this.showConf(this.typesList, this.rankList, this.input, 1)
                    },
                    handleRankChange(t) {
                        this.rankList = t, this.$ls.set("ranks", Array.from(this.rankList)), this.showConf(this.typesList, this.rankList, this.input, 1)
                    },
                    handleCurrentChange(t) {
                        this.showConf(this.typesList, this.rankList, this.input, t)
                    },
                    handleCheckAllChange() {
                        this.typesList = this.checkList.length === this.subList.length ? [] : this.subList.map(t => t.sub).join(",").split(","), this.checkList = this.typesList, this.isIndeterminate = !1, this.$ls.set("types", Array.from(this.typesList)), this.showConf(this.typesList, this.rankList, this.input, 1)
                    },
                    handleClickIcon(t, e) {
                        if (!0 === e) {
                            t.isLike = !1;
                            let e = this.cachedLikes.indexOf(t.title + t.id);
                            e > -1 && this.cachedLikes.splice(e, 1), this.$ls.set("likes", Array.from(new Set(this.cachedLikes)))
                        } else t.isLike = !0, this.cachedLikes.push(t.title + t.id), this.$ls.set("likes", Array.from(new Set(this.cachedLikes)))
                    },
                    generateDBLP(t) {
                        return "https://dblp.uni-trier.de/db/conf/" + t
                    },
                    formatGoogleCalendar(t) {
                        return "https://www.google.com/calendar/render?action=TEMPLATE&text=" + t.title + "+" + t.year + "&dates=" + z(t.deadline + this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g, "") + "/" + z(t.deadline + this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g, "") + "&details=" + t.comment + "&location=Online&ctz=" + this.timeZone + "&sf=true&output=xml"
                    },
                    formatiCloudCalendar(t) {
                        return "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:https://ccfddl.github.io/%0ADTSTART:" + z(t.deadline + this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g, "") + "%0ADTEND:" + z(t.deadline + this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g, "") + "%0ASUMMARY:" + t.title + " " + t.year + " Deadline %0ADESCRIPTION:" + t.comment + "%0ALOCATION:%0AEND:VEVENT%0AEND:VCALENDAR"
                    },
                    _isMobile() {
                        let t = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                        return t
                    },
                    formatSubName(t) {
                        return this._isMobile() ? t.sub : t.name
                    },
                    loadCachedTypes() {
                        let t = this.$ls.get("types");
                        if (t) {
                            this.typesList = t, this.checkList = this.typesList;
                            let e = this.checkList.length;
                            this.checkAll = e === this.subList.length, this.isIndeterminate = e > 0 && e < this.subList.length
                        }
                    },
                    loadCachedLikes() {
                        this.cachedLikes = this.$ls.get("likes"), this.cachedLikes || (this.cachedLikes = [])
                    },
                    loadCachedRanks() {
                        this.cachedRanks = this.$ls.get("ranks"), this.cachedRanks || (this.cachedRanks = []), this.rankList = this.cachedRanks
                    }
                },
                mounted() {
                    this.loadCachedRanks(), this.loadCachedLikes(), this.loadUTCMap(), this.loadFile()
                }
            },
            O = A,
            I = (s("237b"), Object(p["a"])(O, l, r, !1, null, "495d6134", null)),
            N = I.exports,
            B = {
                name: "App",
                components: {
                    Home: N
                }
            },
            $ = B,
            E = (s("034f"), Object(p["a"])($, a, n, !1, null, null, null)),
            P = E.exports,
            R = s("5c96"),
            F = s.n(R),
            U = (s("0fae"), s("28dd")),
            Y = s("407d"),
            H = s.n(Y),
            G = s("c16e"),
            q = s.n(G);
        i["default"].use(F.a), i["default"].use(U["a"]), i["default"].component(H.a.name, H.a);
        const W = {
            namespace: "vuejs__",
            name: "ls",
            storage: "local"
        };
        i["default"].use(q.a, W), i["default"].config.productionTip = !1, new i["default"]({
            render: t => t(P)
        }).$mount("#app")
    },
    "85ec": function(t, e, s) {},
    c1ae: function(t, e, s) {},
    cd1c: function(t, e, s) {},
    e8b5: function(t, e, s) {
        "use strict";
        s("cd1c")
    }
});
//# sourceMappingURL=index.93819ff0.js.map