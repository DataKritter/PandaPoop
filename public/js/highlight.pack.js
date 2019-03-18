/*! highlight.js v9.15.6 | BSD3 License | git.io/hljslicense */ ! function(e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
        return n.hljs
    }))
}(function(a) {
    var E = [],
        u = Object.keys,
        N = {},
        g = {},
        n = /^(no-?highlight|plain|text)$/i,
        R = /\blang(?:uage)?-([\w-]+)\b/i,
        t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        r = {
            case_insensitive: "cI",
            lexemes: "l",
            contains: "c",
            keywords: "k",
            subLanguage: "sL",
            className: "cN",
            begin: "b",
            beginKeywords: "bK",
            end: "e",
            endsWithParent: "eW",
            illegal: "i",
            excludeBegin: "eB",
            excludeEnd: "eE",
            returnBegin: "rB",
            returnEnd: "rE",
            relevance: "r",
            variants: "v",
            IDENT_RE: "IR",
            UNDERSCORE_IDENT_RE: "UIR",
            NUMBER_RE: "NR",
            C_NUMBER_RE: "CNR",
            BINARY_NUMBER_RE: "BNR",
            RE_STARTERS_RE: "RSR",
            BACKSLASH_ESCAPE: "BE",
            APOS_STRING_MODE: "ASM",
            QUOTE_STRING_MODE: "QSM",
            PHRASAL_WORDS_MODE: "PWM",
            C_LINE_COMMENT_MODE: "CLCM",
            C_BLOCK_COMMENT_MODE: "CBCM",
            HASH_COMMENT_MODE: "HCM",
            NUMBER_MODE: "NM",
            C_NUMBER_MODE: "CNM",
            BINARY_NUMBER_MODE: "BNM",
            CSS_NUMBER_MODE: "CSSNM",
            REGEXP_MODE: "RM",
            TITLE_MODE: "TM",
            UNDERSCORE_TITLE_MODE: "UTM",
            COMMENT: "C",
            beginRe: "bR",
            endRe: "eR",
            illegalRe: "iR",
            lexemesRe: "lR",
            terminators: "t",
            terminator_end: "tE"
        },
        b = "</span>",
        h = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        };

    function _(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function d(e) {
        return e.nodeName.toLowerCase()
    }

    function v(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index
    }

    function p(e) {
        return n.test(e)
    }

    function l(e) {
        var n, t = {},
            r = Array.prototype.slice.call(arguments, 1);
        for (n in e) t[n] = e[n];
        return r.forEach(function(e) {
            for (n in e) t[n] = e[n]
        }), t
    }

    function M(e) {
        var a = [];
        return function e(n, t) {
            for (var r = n.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? t += r.nodeValue.length : 1 === r.nodeType && (a.push({
                event: "start",
                offset: t,
                node: r
            }), t = e(r, t), d(r).match(/br|hr|img|input/) || a.push({
                event: "stop",
                offset: t,
                node: r
            }));
            return t
        }(e, 0), a
    }

    function i(e) {
        if (r && !e.langApiRestored) {
            for (var n in e.langApiRestored = !0, r) e[n] && (e[r[n]] = e[n]);
            (e.c || []).concat(e.v || []).forEach(i)
        }
    }

    function m(c) {
        function s(e) {
            return e && e.source || e
        }

        function o(e, n) {
            return new RegExp(s(e), "m" + (c.cI ? "i" : "") + (n ? "g" : ""))
        }! function n(t, e) {
            if (!t.compiled) {
                if (t.compiled = !0, t.k = t.k || t.bK, t.k) {
                    var r = {},
                        a = function(t, e) {
                            c.cI && (e = e.toLowerCase()), e.split(" ").forEach(function(e) {
                                var n = e.split("|");
                                r[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                            })
                        };
                    "string" == typeof t.k ? a("keyword", t.k) : u(t.k).forEach(function(e) {
                        a(e, t.k[e])
                    }), t.k = r
                }
                t.lR = o(t.l || /\w+/, !0), e && (t.bK && (t.b = "\\b(" + t.bK.split(" ").join("|") + ")\\b"), t.b || (t.b = /\B|\b/), t.bR = o(t.b), t.endSameAsBegin && (t.e = t.b), t.e || t.eW || (t.e = /\B|\b/), t.e && (t.eR = o(t.e)), t.tE = s(t.e) || "", t.eW && e.tE && (t.tE += (t.e ? "|" : "") + e.tE)), t.i && (t.iR = o(t.i)), null == t.r && (t.r = 1), t.c || (t.c = []), t.c = Array.prototype.concat.apply([], t.c.map(function(e) {
                    return (n = "self" === e ? t : e).v && !n.cached_variants && (n.cached_variants = n.v.map(function(e) {
                        return l(n, {
                            v: null
                        }, e)
                    })), n.cached_variants || n.eW && [l(n)] || [n];
                    var n
                })), t.c.forEach(function(e) {
                    n(e, t)
                }), t.starts && n(t.starts, e);
                var i = t.c.map(function(e) {
                    return e.bK ? "\\.?(?:" + e.b + ")\\.?" : e.b
                }).concat([t.tE, t.i]).map(s).filter(Boolean);
                t.t = i.length ? o(function(e, n) {
                    for (var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, r = 0, a = "", i = 0; i < e.length; i++) {
                        var c = r,
                            o = s(e[i]);
                        for (0 < i && (a += n); 0 < o.length;) {
                            var u = t.exec(o);
                            if (null == u) {
                                a += o;
                                break
                            }
                            a += o.substring(0, u.index), o = o.substring(u.index + u[0].length), "\\" == u[0][0] && u[1] ? a += "\\" + String(Number(u[1]) + c) : (a += u[0], "(" == u[0] && r++)
                        }
                    }
                    return a
                }(i, "|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }(c)
    }

    function C(e, n, o, t) {
        function u(e, n, t, r) {
            var a = '<span class="' + (r ? "" : h.classPrefix);
            return (a += e + '">') + n + (t ? "" : b)
        }

        function s() {
            g += null != E.sL ? function() {
                var e = "string" == typeof E.sL;
                if (e && !N[E.sL]) return _(R);
                var n = e ? C(E.sL, R, !0, i[E.sL]) : O(R, E.sL.length ? E.sL : void 0);
                return 0 < E.r && (d += n.r), e && (i[E.sL] = n.top), u(n.language, n.value, !1, !0)
            }() : function() {
                var e, n, t, r, a, i, c;
                if (!E.k) return _(R);
                for (r = "", n = 0, E.lR.lastIndex = 0, t = E.lR.exec(R); t;) r += _(R.substring(n, t.index)), a = E, i = t, c = f.cI ? i[0].toLowerCase() : i[0], (e = a.k.hasOwnProperty(c) && a.k[c]) ? (d += e[1], r += u(e[0], _(t[0]))) : r += _(t[0]), n = E.lR.lastIndex, t = E.lR.exec(R);
                return r + _(R.substr(n))
            }(), R = ""
        }

        function l(e) {
            g += e.cN ? u(e.cN, "", !0) : "", E = Object.create(e, {
                parent: {
                    value: E
                }
            })
        }

        function r(e, n) {
            if (R += e, null == n) return s(), 0;
            var t = function(e, n) {
                var t, r, a;
                for (t = 0, r = n.c.length; t < r; t++)
                    if (v(n.c[t].bR, e)) return n.c[t].endSameAsBegin && (n.c[t].eR = (a = n.c[t].bR.exec(e)[0], new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m"))), n.c[t]
            }(n, E);
            if (t) return t.skip ? R += n : (t.eB && (R += n), s(), t.rB || t.eB || (R = n)), l(t), t.rB ? 0 : n.length;
            var r, a, i = function e(n, t) {
                if (v(n.eR, t)) {
                    for (; n.endsParent && n.parent;) n = n.parent;
                    return n
                }
                if (n.eW) return e(n.parent, t)
            }(E, n);
            if (i) {
                var c = E;
                for (c.skip ? R += n : (c.rE || c.eE || (R += n), s(), c.eE && (R = n)); E.cN && (g += b), E.skip || E.sL || (d += E.r), (E = E.parent) !== i.parent;);
                return i.starts && (i.endSameAsBegin && (i.starts.eR = i.eR), l(i.starts)), c.rE ? 0 : n.length
            }
            if (r = n, a = E, !o && v(a.iR, r)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
            return R += n, n.length || 1
        }
        var f = S(e);
        if (!f) throw new Error('Unknown language: "' + e + '"');
        m(f);
        var a, E = t || f,
            i = {},
            g = "";
        for (a = E; a !== f; a = a.parent) a.cN && (g = u(a.cN, "", !0) + g);
        var R = "",
            d = 0;
        try {
            for (var c, p, M = 0; E.t.lastIndex = M, c = E.t.exec(n);) p = r(n.substring(M, c.index), c[0]), M = c.index + p;
            for (r(n.substr(M)), a = E; a.parent; a = a.parent) a.cN && (g += b);
            return {
                r: d,
                value: g,
                language: e,
                top: E
            }
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                r: 0,
                value: _(n)
            };
            throw e
        }
    }

    function O(t, e) {
        e = e || h.languages || u(N);
        var r = {
                r: 0,
                value: _(t)
            },
            a = r;
        return e.filter(S).filter(s).forEach(function(e) {
            var n = C(e, t, !1);
            n.language = e, n.r > a.r && (a = n), n.r > r.r && (a = r, r = n)
        }), a.language && (r.second_best = a), r
    }

    function B(e) {
        return h.tabReplace || h.useBR ? e.replace(t, function(e, n) {
            return h.useBR && "\n" === e ? "<br>" : h.tabReplace ? n.replace(/\t/g, h.tabReplace) : ""
        }) : e
    }

    function c(e) {
        var n, t, r, a, i, c, o, u, s, l, f = function(e) {
            var n, t, r, a, i = e.className + " ";
            if (i += e.parentNode ? e.parentNode.className : "", t = R.exec(i)) return S(t[1]) ? t[1] : "no-highlight";
            for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
                if (p(a = i[n]) || S(a)) return a
        }(e);
        p(f) || (h.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, i = n.textContent, r = f ? C(f, i, !0) : O(i), (t = M(n)).length && ((a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = r.value, r.value = function(e, n, t) {
            var r = 0,
                a = "",
                i = [];

            function c() {
                return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
            }

            function o(e) {
                a += "<" + d(e) + E.map.call(e.attributes, function(e) {
                    return " " + e.nodeName + '="' + _(e.value).replace('"', "&quot;") + '"'
                }).join("") + ">"
            }

            function u(e) {
                a += "</" + d(e) + ">"
            }

            function s(e) {
                ("start" === e.event ? o : u)(e.node)
            }
            for (; e.length || n.length;) {
                var l = c();
                if (a += _(t.substring(r, l[0].offset)), r = l[0].offset, l === e) {
                    for (i.reverse().forEach(u); s(l.splice(0, 1)[0]), (l = c()) === e && l.length && l[0].offset === r;);
                    i.reverse().forEach(o)
                } else "start" === l[0].event ? i.push(l[0].node) : i.pop(), s(l.splice(0, 1)[0])
            }
            return a + _(t.substr(r))
        }(t, M(a), i)), r.value = B(r.value), e.innerHTML = r.value, e.className = (c = e.className, o = f, u = r.language, s = o ? g[o] : u, l = [c.trim()], c.match(/\bhljs\b/) || l.push("hljs"), -1 === c.indexOf(s) && l.push(s), l.join(" ").trim()), e.result = {
            language: r.language,
            re: r.r
        }, r.second_best && (e.second_best = {
            language: r.second_best.language,
            re: r.second_best.r
        }))
    }

    function o() {
        if (!o.called) {
            o.called = !0;
            var e = document.querySelectorAll("pre code");
            E.forEach.call(e, c)
        }
    }

    function S(e) {
        return e = (e || "").toLowerCase(), N[e] || N[g[e]]
    }

    function s(e) {
        var n = S(e);
        return n && !n.disableAutodetect
    }
    return a.highlight = C, a.highlightAuto = O, a.fixMarkup = B, a.highlightBlock = c, a.configure = function(e) {
        h = l(h, e)
    }, a.initHighlighting = o, a.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", o, !1), addEventListener("load", o, !1)
    }, a.registerLanguage = function(n, e) {
        var t = N[n] = e(a);
        i(t), t.aliases && t.aliases.forEach(function(e) {
            g[e] = n
        })
    }, a.listLanguages = function() {
        return u(N)
    }, a.getLanguage = S, a.autoDetection = s, a.inherit = l, a.IR = a.IDENT_RE = "[a-zA-Z]\\w*", a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?", a.CNR = a.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)", a.RSR = a.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a.BE = a.BACKSLASH_ESCAPE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, a.ASM = a.APOS_STRING_MODE = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [a.BE]
    }, a.QSM = a.QUOTE_STRING_MODE = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [a.BE]
    }, a.PWM = a.PHRASAL_WORDS_MODE = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    }, a.C = a.COMMENT = function(e, n, t) {
        var r = a.inherit({
            cN: "comment",
            b: e,
            e: n,
            c: []
        }, t || {});
        return r.c.push(a.PWM), r.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), r
    }, a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$"), a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/"), a.HCM = a.HASH_COMMENT_MODE = a.C("##", "#", "$"), a.NM = a.NUMBER_MODE = {
        cN: "number",
        b: a.NR,
        r: 0
    }, a.CNM = a.C_NUMBER_MODE = {
        cN: "number",
        b: a.CNR,
        r: 0
    }, a.BNM = a.BINARY_NUMBER_MODE = {
        cN: "number",
        b: a.BNR,
        r: 0
    }, a.CSSNM = a.CSS_NUMBER_MODE = {
        cN: "number",
        b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, a.RM = a.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [a.BE]
        }]
    }, a.TM = a.TITLE_MODE = {
        cN: "title",
        b: a.IR,
        r: 0
    }, a.UTM = a.UNDERSCORE_TITLE_MODE = {
        cN: "title",
        b: a.UIR,
        r: 0
    }, a.METHOD_GUARD = {
        b: "\\.\\s*" + a.UIR,
        r: 0
    }, a
});
hljs.registerLanguage("python", function(e) {
    var r = {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
            built_in: "Ellipsis NotImplemented",
            literal: "False None True"
        },
        b = {
            cN: "meta",
            b: /^(>>>|\.\.\.) /
        },
        c = {
            cN: "subst",
            b: /\{/,
            e: /\}/,
            k: r,
            i: /#/
        },
        a = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: /(u|b)?r?'''/,
                e: /'''/,
                c: [e.BE, b],
                r: 10
            }, {
                b: /(u|b)?r?"""/,
                e: /"""/,
                c: [e.BE, b],
                r: 10
            }, {
                b: /(fr|rf|f)'''/,
                e: /'''/,
                c: [e.BE, b, c]
            }, {
                b: /(fr|rf|f)"""/,
                e: /"""/,
                c: [e.BE, b, c]
            }, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {
                b: /(u|r|ur)"/,
                e: /"/,
                r: 10
            }, {
                b: /(b|br)'/,
                e: /'/
            }, {
                b: /(b|br)"/,
                e: /"/
            }, {
                b: /(fr|rf|f)'/,
                e: /'/,
                c: [e.BE, c]
            }, {
                b: /(fr|rf|f)"/,
                e: /"/,
                c: [e.BE, c]
            }, e.ASM, e.QSM]
        },
        i = {
            cN: "number",
            r: 0,
            v: [{
                b: e.BNR + "[lLjJ]?"
            }, {
                b: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                b: e.CNR + "[lLjJ]?"
            }]
        },
        l = {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: ["self", b, i, a]
        };
    return c.c = [a, i, b], {
        aliases: ["py", "gyp", "ipython"],
        k: r,
        i: /(<\/|->|\?)|=>/,
        c: [b, i, a, e.HCM, {
            v: [{
                cN: "function",
                bK: "def"
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, l, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        }, {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("r", function(e) {
    var r = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
    return {
        c: [e.HCM, {
            b: r,
            l: r,
            k: {
                keyword: "abbreviate abline abs accumulate accumulate_right acf acf2AR acos acosh add_case add_column add_count add_count_ add_row add_rownames add_tally add_tally_ add_with_rollback add.scope add1 addmargins addNA addNextMethod addTaskCallback adist adjustcolor aes aes_ aes_all aes_auto aes_q aes_string aggregate aggregate.data.frame aggregate.ts agrep agrepl AIC alarm alias alist all all_equal all_vars all.equal all.equal.character all.equal.default all.equal.environment all.equal.envRefClass all.equal.factor all.equal.formula all.equal.language all.equal.list all.equal.numeric all.equal.POSIXt all.equal.raw all.names all.vars allGenerics allNames allowInterrupts alpha am annotate annotation_custom annotation_logticks annotation_map annotation_raster anova ansari.test anti_join any any_vars anyDuplicated anyDuplicated.array anyDuplicated.data.frame anyDuplicated.default anyDuplicated.matrix anyNA anyNA.numeric_version anyNA.POSIXlt aov aperm aperm.default aperm.table append apply approx approxfun apropos ar ar.burg ar.mle ar.ols ar.yw aregexec Arg args argsAnywhere arima arima.sim arima0 arima0.diag Arith ARMAacf ARMAtoMA arrange arrange_ arrange_all arrange_at arrange_if array array_branch array_tree arrayInd arrow arrows as as_data_frame as_date as_datetime as_factor as_function as_labeller as_mapper as_tibble as_vector as.array as.array.default as.call as.character as.character.condition as.character.Date as.character.default as.character.error as.character.factor as.character.hexmode as.character.numeric_version as.character.octmode as.character.POSIXt as.character.srcref as.complex as.data.frame as.data.frame.array as.data.frame.AsIs as.data.frame.character as.data.frame.complex as.data.frame.data.frame as.data.frame.Date as.data.frame.default as.data.frame.difftime as.data.frame.factor as.data.frame.integer as.data.frame.list as.data.frame.logical as.data.frame.matrix as.data.frame.model.matrix as.data.frame.noquote as.data.frame.numeric as.data.frame.numeric_version as.data.frame.ordered as.data.frame.POSIXct as.data.frame.POSIXlt as.data.frame.raw as.data.frame.table as.data.frame.ts as.data.frame.vector as.Date as.Date.character as.Date.default as.Date.factor as.Date.numeric as.Date.POSIXct as.Date.POSIXlt as.dendrogram as.difftime as.dist as.double as.double.difftime as.double.POSIXlt as.duration as.environment as.expression as.expression.default as.factor as.formula as.function as.function.default as.graphicsAnnot as.hclust as.hexmode as.integer as.interval as.list as.list.data.frame as.list.Date as.list.default as.list.environment as.list.factor as.list.function as.list.numeric_version as.list.POSIXct as.list.POSIXlt as.logical as.logical.factor as.matrix as.matrix.data.frame as.matrix.default as.matrix.noquote as.matrix.POSIXlt as.name as.null as.null.default as.numeric as.numeric_version as.octmode as.ordered as.package_version as.pairlist as.period as.person as.personList as.POSIXct as.POSIXct.Date as.POSIXct.default as.POSIXct.numeric as.POSIXct.POSIXlt as.POSIXlt as.POSIXlt.character as.POSIXlt.Date as.POSIXlt.default as.POSIXlt.factor as.POSIXlt.numeric as.POSIXlt.POSIXct as.qr as.raster as.raw as.relistable as.roman as.single as.single.default as.stepfun as.symbol as.table as.table.default as.tbl as.tbl_cube as.tibble as.ts as.vector as.vector.factor as<- asDateBuilt asin asinh askYesNo asMethodDefinition asNamespace asOneSidedFormula aspell aspell_package_C_files aspell_package_R_files aspell_package_Rd_files aspell_package_vignettes aspell_write_personal_dictionary_file asS3 asS4 assign assignClassDef assignInMyNamespace assignInNamespace assignMethodsMetaData assocplot at_depth atan atan2 atanh attach attachNamespace attr attr_getter attr.all.equal attr<- attributes attributes<- auto_browse auto_copy autolayer autoload autoloader autoplot available.packages ave axis axis.Date axis.POSIXct axisTicks axTicks backsolve balanceMethodsList bandwidth.kernel barplot barplot.default bartlett.test baseenv basename bench_tbls benchplot besselI besselJ besselK besselY beta between bibentry BIC bind_cols bind_rows bindingIsActive bindingIsLocked bindtextdomain binom.test binomial biplot bitmap bitwAnd bitwNot bitwOr bitwShiftL bitwShiftR bitwXor bmp body body<- borders boundary box Box.test boxplot boxplot.default boxplot.matrix boxplot.stats bquote break browseEnv browser browserCondition browserSetDebug browserText browseURL browseVignettes bug.report builtins bw.bcv bw.nrd bw.nrd0 bw.SJ bw.ucv bxp by by.data.frame by.default bzfile C c.Date c.difftime c.noquote c.numeric_version c.POSIXct c.POSIXlt c.warnings cacheGenericsMetaData cacheMetaData cacheMethod cairo_pdf cairo_ps calc_element call callCC callGeneric callNextMethod canCoerce cancor capabilities capture.output case_when case.names casefold cat cbind cbind.data.frame cbind2 ccf cdplot ceiling ceiling_date changedFiles changes char.expand character charmatch charToRaw chartr check_dbplyr check_tzones check.options checkAtAssignment checkCRAN checkSlotAssignment chisq.test chkDots chol chol.default chol2inv choose chooseBioCmirror chooseCRANmirror chull CIDFont citation cite citeNatbib citEntry citFooter citHeader class class<- classesToAM classLabel classMetaName className clearPushBack clip close close.connection close.screen close.socket close.srcfile close.srcfilealias closeAllConnections cm cm.colors cmdscale co.intervals coalesce coef coefficients coerce coerce<- col col_character col_date col_datetime col_double col_factor col_guess col_integer col_logical col_number col_skip col_time col2rgb coll collapse collect colMeans colnames colnames<- colorConverter colorRamp colorRampPalette colors colours cols cols_condense cols_only colSums column_to_rownames combine combine_vars combn commandArgs comment comment<- common_by compact Compare compare_tbls compare_tbls2 compareVersion complete complete_ complete.cases completeClassDefinition completeExtends completeSubclasses Complex compose compute computeRestarts conditionCall conditionCall.condition conditionMessage conditionMessage.condition confint confint.default confint.lm conflicts conformMethod Conj constrOptim contains continuous_scale contour contour.default contourLines contr.helmert contr.poly contr.SAS contr.sum contr.treatment contrasts contrasts<- contrib.url contributors convertColor convolve cooks.distance coord_cartesian coord_equal coord_fixed coord_flip coord_map coord_munch coord_polar coord_quickmap coord_sf coord_trans cophenetic coplot copy_to cor cor.test cos cosh cospi count count_ count_fields count.fields cov cov.wt cov2cor covratio cpgram CRAN.packages create.post cross cross_d cross_df cross_n cross2 cross3 crossing crossing_ crossprod Cstack_info cumall cumany cume_dist cummax cummean cummin cumprod cumsum curlGetHeaders current_vars curve cut cut_interval cut_number cut_width cut.Date cut.default cut.POSIXt cutree cycle D data data_frame data_frame_ data.class data.entry data.frame data.matrix dataentry datasource date date_decimal date_names date_names_lang date_names_langs date<- day day<- days days_in_month db_analyze db_begin db_commit db_create_index db_create_indexes db_create_table db_data_type db_desc db_drop_table db_explain db_has_table db_insert_into db_list_tables db_query_fields db_query_rows db_rollback db_save_query db_write_table dbeta dbinom dcauchy dchisq ddays de de.ncols de.restore de.setup debug debugcall debugger debuggingState debugonce decimal_date decompose default_locale default.stringsAsFactors defaultDumpName defaultPrototype deframe delayedAssign delete.response deltat demo dendrapply densCols dense_rank density density.default deparse deriv deriv3 derive desc det detach detect detect_index determinant determinant.matrix dev.capabilities dev.capture dev.control dev.copy dev.copy2eps dev.copy2pdf dev.cur dev.flush dev.hold dev.interactive dev.list dev.new dev.next dev.off dev.prev dev.print dev.set dev.size dev2bitmap devAskNewPage deviance deviceIsInteractive dexp df df.kernel df.residual dfbeta dfbetas dffits dgamma dgeom dget dhours dhyper diag diag<- diff diff.Date diff.default diff.difftime diff.POSIXt diffinv difftime digamma dim dim_desc dim.data.frame dim<- dimnames dimnames.data.frame dimnames<- dimnames<-.data.frame dir dir.create dir.exists dirname discard discrete_scale dist distinct distinct_ dlnorm dlogis dmicroseconds dmilliseconds dminutes dmultinom dmy dmy_h dmy_hm dmy_hms dnanoseconds dnbinom dnorm do do_ do.call dontCheck doPrimitiveMethod dotchart double download.file download.packages dpicoseconds dpois dput dQuote dr_dplyr draw_key_abline draw_key_blank draw_key_boxplot draw_key_crossbar draw_key_dotplot draw_key_label draw_key_path draw_key_point draw_key_pointrange draw_key_polygon draw_key_rect draw_key_smooth draw_key_text draw_key_vline draw_key_vpath drop drop_na drop_na_ drop.scope drop.terms drop1 droplevels droplevels.data.frame droplevels.factor dseconds dsignrank dst dt dummy.coef dummy.coef.lm dump dump.frames dumpMethod dumpMethods dunif dup_axis duplicated duplicated.array duplicated.data.frame duplicated.default duplicated.matrix duplicated.numeric_version duplicated.POSIXlt duplicated.warnings duration dweeks dweibull dwilcox dyears dym dyn.load dyn.unload dynGet eapply ecdf edays edit eff.aovlist effects ehours eigen el el<- element_blank element_grob element_line element_rect element_text elNamed elNamed<- else emacs embed embedFonts emicroseconds emilliseconds eminutes empty.dump emptyenv emptyMethodsList enanoseconds enc2native enc2utf8 encodeString Encoding Encoding<- end ends_with endsWith enexpr enexprs enframe enquo enquos enquote ensym ensyms env.profile environment environment<- environmentIsLocked environmentName epicoseconds epiweek epiyear erase.screen eseconds estVar eval eval_tbls eval_tbls2 eval.parent evalOnLoad evalq evalqOnLoad evalSource every everything eweeks example exists existsFunction existsMethod exp expand expand_ expand_limits expand_scale expand.grid expand.model.frame explain expm1 expr expression extendrange extends externalRefMethod extract extract_ extract_numeric extractAIC extSoftVersion eyears F facet_grid facet_null facet_wrap factanal factor factor.scope factorial failwith family fast_strptime fct_anon fct_c fct_collapse fct_count fct_drop fct_expand fct_explicit_na fct_infreq fct_inorder fct_lump fct_other fct_recode fct_relabel fct_relevel fct_reorder fct_reorder2 fct_rev fct_shift fct_shuffle fct_unify fct_unique fft fifo file file_test file.access file.append file.choose file.copy file.create file.edit file.exists file.info file.link file.mode file.mtime file.path file.remove file.rename file.show file.size file.symlink fileSnapshot fill fill_ filled.contour filter filter_ filter_all filter_at filter_if finalDefaultMethod find find_panel find.package findClass findFunction findInterval findLineNum findMethod findMethods findMethodSignatures findPackageEnv findRestart findUnique first fisher.test fit_to_timeline fitted fitted.values fivenum fix fixed fixInNamespace fixPre1.8 flatten flatten_chr flatten_dbl flatten_df flatten_dfc flatten_dfr flatten_int flatten_lgl fligner.test floor floor_date flush flush.connection flush.console for force force_tz force_tzs forceAndCall formalArgs formals formals<- format format_csv format_delim format_tsv format.AsIs format.data.frame format.Date format.default format.difftime format.factor format.hexmode format.info format.libraryIQR format.numeric_version format.octmode format.packageInfo format.POSIXct format.POSIXlt format.pval format.summaryDefault formatC formatDL formatOL formatUL formula fortify forwardsolve fourfoldplot frame frame_data frame_matrix frequency friedman.test ftable full_join full_seq function functionBody functionBody<- funs funs_ fwf_cols fwf_empty fwf_positions fwf_widths Gamma gather gather_ gaussian gc gc.time gcinfo gctorture gctorture2 generic.skeleton geom_abline geom_area geom_bar geom_bin2d geom_blank geom_boxplot geom_col geom_contour geom_count geom_crossbar geom_curve geom_density geom_density_2d geom_density2d geom_dotplot geom_errorbar geom_errorbarh geom_freqpoly geom_hex geom_histogram geom_hline geom_jitter geom_label geom_line geom_linerange geom_map geom_path geom_point geom_pointrange geom_polygon geom_qq geom_qq_line geom_quantile geom_raster geom_rect geom_ribbon geom_rug geom_segment geom_sf geom_smooth geom_spoke geom_step geom_text geom_tile geom_violin geom_vline get get_all_vars get0 getAccess getAllConnections getAllMethods getAllSuperClasses getAnywhere getCall getCallingDLL getCallingDLLe getClass getClassDef getClasses getClassName getClassPackage getConnection getCRANmirrors getDataPart getDLLRegisteredRoutines getDLLRegisteredRoutines.character getDLLRegisteredRoutines.DLLInfo getElement geterrmessage getExportedValue getExtends getFromNamespace getFunction getGeneric getGenerics getGraphicsEvent getGraphicsEventEnv getGroup getGroupMembers getHook getInitial getLoadActions getLoadedDLLs getMethod getMethods getMethodsForDispatch getMethodsMetaData getNamespace getNamespaceExports getNamespaceImports getNamespaceInfo getNamespaceName getNamespaceUsers getNamespaceVersion getNativeSymbolInfo getOption getPackageName getParseData getParseText getProperties getPrototype getRefClass getRversion getS3method getSlots getSrcDirectory getSrcFilename getSrcLines getSrcLocation getSrcref getSubclasses getTaskCallbackNames gettext gettextf getTxtProgressBar getValidity getVirtual getwd gg_dep ggplot ggplot_add ggplot_build ggplot_gtable ggplotGrob ggproto ggproto_parent ggsave ggtitle gl glimpse glm glm.control glm.fit glob2rx globalenv globalVariables graphics.off gray gray.colors grconvertX grconvertY gregexpr grep grepl grepRaw grey grey.colors grid group_by group_by_ group_by_all group_by_at group_by_if group_by_prepare group_indices group_indices_ group_size group_vars grouped_df grouping groups grSoftVersion gsub guess_encoding guess_formats guess_parser guide_colorbar guide_colourbar guide_gengrob guide_geom guide_legend guide_merge guide_train guides gzcon gzfile has_element has_name has_rownames hasArg hasLoadAction hasMethod hasMethods hasName hasTsp hat hatvalues hcl hclust head head_while head.matrix heat.colors heatmap help help.request help.search help.start here hist hist.default history hm hms HoltWinters hour hour<- hours hsearch_db hsearch_db_concepts hsearch_db_keywords hsv I iconv iconvlist icuGetCollate icuSetCollate id ident identical identify identity if if_else ifelse Im image image.default imap imap_chr imap_dbl imap_dfc imap_dfr imap_int imap_lgl implicitGeneric importIntoEnv in influence influence.measures inheritedSlotNames inherits initFieldArgs initialize initRefFields inner_join insertClassMethods insertMethod insertSource install.packages installed.packages int_aligns int_diff int_end int_end<- int_flip int_length int_overlaps int_shift int_standardize int_start int_start<- integer integrate interaction interaction.plot interactive intersect interval intToBits intToUtf8 inverse.gaussian inverse.rle invert_match invisible invoke invoke_map invoke_map_chr invoke_map_dbl invoke_map_df invoke_map_dfc invoke_map_dfr invoke_map_int invoke_map_lgl invokeRestart invokeRestartInteractively IQR is is_atomic is_bare_atomic is_bare_character is_bare_double is_bare_integer is_bare_list is_bare_logical is_bare_numeric is_bare_vector is_character is_double is_empty is_formula is_function is_grouped_df is_integer is_list is_logical is_null is_numeric is_scalar_atomic is_scalar_character is_scalar_double is_scalar_integer is_scalar_list is_scalar_logical is_scalar_numeric is_scalar_vector is_tibble is_vector is_vector_s3 is.array is.atomic is.call is.character is.complex is.Coord is.data.frame is.Date is.difftime is.double is.duration is.element is.empty.model is.environment is.expression is.facet is.factor is.finite is.function is.ggplot is.ggproto is.grouped_df is.infinite is.instant is.integer is.interval is.language is.leaf is.list is.loaded is.logical is.matrix is.mts is.na is.na.data.frame is.na.numeric_version is.na.POSIXlt is.na<- is.na<-.default is.na<-.factor is.na<-.numeric_version is.name is.nan is.null is.numeric is.numeric_version is.numeric.Date is.numeric.difftime is.numeric.POSIXt is.object is.ordered is.package_version is.pairlist is.period is.POSIXct is.POSIXlt is.POSIXt is.primitive is.qr is.R is.raster is.raw is.recursive is.relistable is.single is.src is.stepfun is.symbol is.table is.tbl is.theme is.tibble is.timepoint is.timespan is.ts is.tskernel is.unsorted is.vector isatty isBaseNamespace isClass isClassDef isClassUnion isdebugged isFALSE isGeneric isGrammarSymbol isGroup isIncomplete isNamespace isNamespaceLoaded ISOdate ISOdatetime isOpen isoreg isoweek isoyear isRematched isRestart isS3method isS3stdGeneric isS4 isSealedClass isSealedMethod isSeekable isSymmetric isSymmetric.matrix isTRUE isVirtualClass isXS3Class iwalk jitter jpeg julian julian.Date julian.POSIXt KalmanForecast KalmanLike KalmanRun KalmanSmooth kappa kappa.default kappa.lm kappa.qr keep kernapply kernel kmeans knit_print.trunc_mat knots kronecker kruskal.test ks.test ksmooth l10n_info La_library La_version La.svd label_both label_bquote label_context label_parsed label_value label_wrap_gen labeller labels labels.default labs lag lag.plot languageEl languageEl<- lapply last last_plot last2 layer layer_data layer_grob layer_scales layout layout.show lazyLoad lazyLoadDBexec lazyLoadDBfetch lbeta lchoose lcm lead leap_year left_join legend length length.POSIXlt length<- length<-.Date length<-.difftime length<-.factor length<-.POSIXct length<-.POSIXlt lengths LETTERS levels levels.default levels<- levels<-.factor lfactorial lgamma libcurlVersion library library.dynam library.dynam.unload licence license lift lift_dl lift_dv lift_ld lift_lv lift_vd lift_vl limitedLabels lims line linearizeMlist lines lines.default list list_along list_merge list_modify list.dirs list.files list2env listFromMethods listFromMlist lm lm.fit lm.influence lm.wfit lmap lmap_at lmap_if load loadedNamespaces loadhistory loadingNamespaceInfo loadings loadMethod loadNamespace local local_time locale localeToCharset location locator lockBinding lockEnvironment loess loess.control loess.smooth log log10 log1p log2 logb Logic logical logLik loglin lower.tri lowess ls ls.diag ls.print ls.str lsf.str lsfit lst lst_ lvls_expand lvls_reorder lvls_revalue lvls_union lxw_version mad mahalanobis maintainer make_date make_datetime make_difftime make_tbl make.link make.names make.packages.html make.rgb make.socket make.unique makeActiveBinding makeARIMA makeClassRepresentation makeExtends makeGeneric makeMethodsList makepredictcall makePrototypeFromClassDef makeRweaveLatexCodeRunner makeStandardGeneric manova mantelhaen.test map map_at map_call map_chr map_data map_dbl map_df map_dfc map_dfr map_if map_int map_lgl map2 map2_chr map2_dbl map2_df map2_dfc map2_dfr map2_int map2_lgl mapply margin margin.table mat.or.vec match match.arg match.call match.fun matches matchSignature Math Math.data.frame Math.Date Math.difftime Math.factor Math.POSIXt Math2 matlines matplot matpoints matrix mauchly.test max max_height max_width max.col mcnemar.test mday mday<- mdy mdy_h mdy_hm mdy_hms mean mean_cl_boot mean_cl_normal mean_sdl mean_se mean.Date mean.default mean.difftime mean.POSIXct mean.POSIXlt median median_hilow median.default medpolish mem.limits memCompress memDecompress memory.limit memory.profile memory.size menu merge merge_element merge.data.frame merge.default mergeMethods message metaNameUndo method.skeleton MethodAddCoerce methods methodSignatureMatrix MethodsList MethodsListSelect methodsPackageMetaName mget microseconds milliseconds min min_rank minute minute<- minutes mirror2html missing missingArg mlistMetaName Mod mode mode<- model.extract model.frame model.frame.default model.matrix model.matrix.default model.matrix.lm model.offset model.response model.tables model.weights modify modify_at modify_depth modify_if modifyList month month.abb month.name month<- monthplot months months.Date months.POSIXt mood.test mosaicplot mostattributes<- ms mtext multipleClasses mutate mutate_ mutate_all mutate_at mutate_each mutate_each_ mutate_if mvfft myd n n_distinct n_groups n2mfrow na_if na.action na.contiguous na.exclude na.fail na.omit na.pass names names.POSIXlt names<- names<-.POSIXlt namespaceExport namespaceImport namespaceImportClasses namespaceImportFrom namespaceImportMethods nanoseconds napredict naprint naresid nargs nchar nclass.FD nclass.scott nclass.Sturges ncol near negate nest nest_ nesting nesting_ new new_difftime new_duration new_interval new_period new_tibble new.env new.packages newBasic newClassRepresentation newEmptyObject news next NextMethod nextn ngettext nlevels nlm nlminb nls nls.control NLSstAsymptotic NLSstClosestX NLSstLfAsymptote NLSstRtAsymptote nobs noquote norm normalizePath now nrow nsl nth ntile num_range numeric numeric_version numericDeriv nzchar obj_sum object.size objects offset old.packages oldClass oldClass<- olson_time_zones OlsonNames on.exit one_of oneway.test open open.connection open.srcfile open.srcfilealias open.srcfilecopy Ops Ops.data.frame Ops.Date Ops.difftime Ops.factor Ops.numeric_version Ops.ordered Ops.POSIXt optim optimHess optimise optimize options order order_by order.dendrogram ordered outer output_column p.adjust pacf package_version package.skeleton packageDate packageDescription packageEvent packageHasNamespace packageName packageSlot packageSlot<- packageStartupMessage packageStatus packageVersion packBits page pairlist pairs pairs.default pairwise.prop.test pairwise.t.test pairwise.table pairwise.wilcox.test palette panel_cols panel_rows panel.smooth par parent.env parent.env<- parent.frame parse parse_character parse_date parse_date_time parse_date_time2 parse_datetime parse_double parse_factor parse_guess parse_integer parse_logical parse_number parse_time parse_vector parseNamespaceFile partial paste paste0 path.expand path.package pbeta pbinom pbirthday pcauchy pchisq pcre_config pdf pdf.options pdfFonts percent_rank period period_to_seconds person personList persp pexp pf pgamma pgeom phyper pi pico picoseconds pictex pie pipe plclust plnorm plogis plot plot.default plot.design plot.ecdf plot.function plot.new plot.spec.coherency plot.spec.phase plot.stepfun plot.ts plot.window plot.xy pluck pm pmap pmap_chr pmap_dbl pmap_df pmap_dfc pmap_dfr pmap_int pmap_lgl pmatch pmax pmax.int pmin pmin.int pnbinom png pnorm points points.default poisson poisson.test poly polygon polym polypath polyroot pos.to.env Position position_dodge position_dodge2 position_fill position_identity position_jitter position_jitterdodge position_nudge position_stack possibleExtends possibly postscript postscriptFonts power power.anova.test power.prop.test power.t.test PP.test ppoints ppois ppr prcomp predict predict.glm predict.lm prepend preplot pretty pretty_dates pretty.default prettyNum princomp print print.AsIs print.by print.condition print.connection print.data.frame print.Date print.default print.difftime print.Dlist print.DLLInfo print.DLLInfoList print.DLLRegisteredRoutines print.eigen print.factor print.function print.hexmode print.libraryIQR print.listof print.NativeRoutineList print.noquote print.numeric_version print.octmode print.packageInfo print.POSIXct print.POSIXlt print.proc_time print.restart print.rle print.simple.list print.srcfile print.srcref print.summary.table print.summary.warnings print.summaryDefault print.table print.warnings printCoefmat prmatrix problems proc.time process.events prod profile progress_estimated prohibitGeneric proj promax prompt promptClass promptData promptImport promptMethods promptPackage prop.table prop.test prop.trend.test prototype provideDimnames ps.options psigamma psignrank pt ptukey pull punif pushBack pushBackLength pwalk pweibull pwilcox q qbeta qbinom qbirthday qcauchy qchisq qday qday<- qexp qf qgamma qgeom qhyper qlnorm qlogis qnbinom qnorm qplot qpois qqline qqnorm qqplot qr qr.coef qr.default qr.fitted qr.Q qr.qty qr.qy qr.R qr.resid qr.solve qr.X qsignrank qt qtukey quade.test quantile quarter quarters quarters.Date quarters.POSIXt quartz quartz.options quartz.save quartzFont quartzFonts quasi quasibinomial quasipoisson quickplot quietly quit qunif quo quo_name quos Quote qweibull qwilcox R_system_version R.home R.Version R.version.string r2dtable rainbow range range.default rank rapply rasterImage raw rawConnection rawConnectionValue rawShift rawToBits rawToChar rbernoulli rbeta rbind rbind_all rbind_list rbind.data.frame rbind2 rbinom rc.getOption rc.options rc.settings rc.status rcauchy rchisq rcond rdunif Re read_csv read_csv_chunked read_csv2 read_csv2_chunked read_delim read_delim_chunked read_file read_file_raw read_fwf read_lines read_lines_chunked read_lines_raw read_log read_rds read_table read_table2 read_tsv read_tsv_chunked read.csv read.csv2 read.dcf read.delim read.delim2 read.DIF read.fortran read.ftable read.fwf read.socket read.table readBin readChar readCitationFile readline readLines readr_example readRDS readRenviron Recall reclass_date reclass_timespan recode recode_factor reconcilePropertiesAndPrototype recordGraphics recordPlot recover rect rect.hclust reduce reduce_right reduce2 reduce2_right reformulate reg.finalizer regex regexec regexpr registerImplicitGenerics registerS3method registerS3methods regmatches regmatches<- rel relevel relist rematchDefinition remove remove_missing remove_rownames remove.packages removeClass removeGeneric removeMethod removeMethods removeMethodsObject removeSource removeTaskCallback rename rename_ rename_all rename_at rename_if rename_vars rename_vars_ render_axes render_strips reorder rep rep_along rep_len rep.Date rep.factor rep.int rep.numeric_version rep.POSIXct rep.POSIXlt repair_names repeat replace replace_na replayPlot replicate replications representation require requireMethods requireNamespace rerun resetClass resetGeneric reshape resid residuals residuals.glm residuals.lm resolution restartDescription restartFormals retracemem return returnValue rev rev.default rexp rf rgamma rgb rgb2hsv rgeom rhyper right_join rle rlnorm rlogis rm rmultinom rnbinom RNGkind RNGversion rnorm rollback round round_date round.Date round.POSIXt row row_number row.names row.names.data.frame row.names.default row.names<- row.names<-.data.frame row.names<-.default rowid_to_column rowMeans rownames rownames_to_column rownames<- rowsum rowsum.data.frame rowsum.default rowSums rowwise rpois Rprof Rprofmem RShowDoc rsignrank RSiteSearch rstandard rstudent rt rtags Rtangle RtangleSetup RtangleWritedoc rug runif runmed RweaveChunkPrefix RweaveEvalWithOpt RweaveLatex RweaveLatexFinish RweaveLatexOptions RweaveLatexSetup RweaveLatexWritedoc RweaveTryStop rweibull rwilcox rWishart S3Class S3Class<- S3Part S3Part<- safely same_src sample sample_frac sample_n sample.int sapply save save.image savehistory savePlot saveRDS scale scale_alpha scale_alpha_continuous scale_alpha_date scale_alpha_datetime scale_alpha_discrete scale_alpha_identity scale_alpha_manual scale_alpha_ordinal scale_color_brewer scale_color_continuous scale_color_discrete scale_color_distiller scale_color_gradient scale_color_gradient2 scale_color_gradientn scale_color_grey scale_color_hue scale_color_identity scale_color_manual scale_color_viridis_c scale_color_viridis_d scale_colour_brewer scale_colour_continuous scale_colour_date scale_colour_datetime scale_colour_discrete scale_colour_distiller scale_colour_gradient scale_colour_gradient2 scale_colour_gradientn scale_colour_grey scale_colour_hue scale_colour_identity scale_colour_manual scale_colour_ordinal scale_colour_viridis_c scale_colour_viridis_d scale_continuous_identity scale_discrete_identity scale_discrete_manual scale_fill_brewer scale_fill_continuous scale_fill_date scale_fill_datetime scale_fill_discrete scale_fill_distiller scale_fill_gradient scale_fill_gradient2 scale_fill_gradientn scale_fill_grey scale_fill_hue scale_fill_identity scale_fill_manual scale_fill_ordinal scale_fill_viridis_c scale_fill_viridis_d scale_linetype scale_linetype_continuous scale_linetype_discrete scale_linetype_identity scale_linetype_manual scale_radius scale_shape scale_shape_continuous scale_shape_discrete scale_shape_identity scale_shape_manual scale_shape_ordinal scale_size scale_size_area scale_size_continuous scale_size_date scale_size_datetime scale_size_discrete scale_size_identity scale_size_manual scale_size_ordinal scale_type scale_x_continuous scale_x_date scale_x_datetime scale_x_discrete scale_x_log10 scale_x_reverse scale_x_sqrt scale_x_time scale_y_continuous scale_y_date scale_y_datetime scale_y_discrete scale_y_log10 scale_y_reverse scale_y_sqrt scale_y_time scale.default scan scatter.smooth screen screeplot sd se.contrast sealClass search searchpaths sec_axis second second<- seconds seconds_to_period seek seek.connection seemsS4Object segments select select_ select_all select_at select_if select_var select_vars select_vars_ select.list selectMethod selectSuperClasses selfStart semester semi_join separate separate_ separate_rows separate_rows_ seq seq_along seq_len seq.Date seq.default seq.int seq.POSIXt sequence serialize sessionInfo set_last_plot set_names set_tidy_names set.seed setAs setBreakpoint setClass setClassUnion setDataPart setdiff setEPS setequal setGeneric setGenericImplicit setGraphicsEventEnv setGraphicsEventHandlers setGroupGeneric setHook setIs setLoadAction setLoadActions setMethod setNames setNamespaceInfo setOldClass setPackageName setPrimitiveMethods setPS setRefClass setReplaceMethod setRepositories setSessionTimeLimit setTimeLimit setTxtProgressBar setValidity setwd shapiro.test should_stop show show_query showClass showConnections showDefault showExtends showMethods showMlist shQuote sigma sign signalCondition signature SignatureMethod signif sigToEnv simpleCondition simpleError simpleMessage simpleWarning simplify simplify_all simplify2array simulate sin single sinh sink sink.number sinpi slice slice_ slice.index slot slot<- slotNames slotsFromS3 smooth smooth.spline smoothEnds smoothScatter socketConnection socketSelect solve solve.default solve.qr some sort sort.default sort.int sort.list sort.POSIXlt sortedXyData source spec spec_csv spec_csv2 spec_delim spec_table spec_tsv spec.ar spec.pgram spec.taper spectrum spineplot splice spline splinefun splinefunH split split.data.frame split.Date split.default split.POSIXct split.screen split<- split<-.data.frame split<-.default spread spread_ sprintf sql sql_escape_ident sql_escape_string sql_join sql_select sql_semi_join sql_set_op sql_subquery sql_translate_env sqrt sQuote src src_df src_local src_mysql src_postgres src_sqlite src_tbls srcfile srcfilealias srcfilecopy srcref SSasymp SSasympOff SSasympOrig SSbiexp SSD SSfol SSfpl SSgompertz SSlogis SSmicmen SSweibull stack stamp stamp_date stamp_time standardGeneric Stangle stars start starts_with startsWith stat stat_bin stat_bin_2d stat_bin_hex stat_bin2d stat_binhex stat_boxplot stat_contour stat_count stat_density stat_density_2d stat_density2d stat_ecdf stat_ellipse stat_function stat_identity stat_qq stat_qq_line stat_quantile stat_sf stat_smooth stat_spoke stat_sum stat_summary stat_summary_2d stat_summary_bin stat_summary_hex stat_summary2d stat_unique stat_ydensity stat.anova stderr stdin stdout stem step stepfun stl stop stop_for_problems stopifnot storage.mode storage.mode<- str str_c str_conv str_count str_detect str_dup str_extract str_extract_all str_flatten str_glue str_glue_data str_interp str_length str_locate str_locate_all str_match str_match_all str_order str_pad str_remove str_remove_all str_replace str_replace_all str_replace_na str_sort str_split str_split_fixed str_squish str_sub str_sub<- str_subset str_to_lower str_to_title str_to_upper str_trim str_trunc str_view str_view_all str_which str_wrap strcapture strftime strheight stripchart strOptions strptime strrep strsplit strtoi strtrim StructTS structure strwidth strwrap sub subset subset.data.frame subset.default subset.matrix substitute substituteDirect substituteFunctionArgs substr substr<- substring substring<- sum summarise summarise_ summarise_all summarise_at summarise_coord summarise_each summarise_each_ summarise_if summarise_layers summarise_layout summarize summarize_ summarize_all summarize_at summarize_each summarize_each_ summarize_if Summary summary.aov summary.connection summary.data.frame summary.Date summary.default Summary.difftime summary.factor summary.glm summary.lm summary.manova summary.matrix Summary.numeric_version Summary.ordered summary.POSIXct summary.POSIXlt summary.proc_time summary.srcfile summary.srcref summary.stepfun summary.table summary.warnings summaryRprof sunflowerplot superClassDepth suppressForeignCheck suppressMessages suppressPackageStartupMessages suppressWarnings supsmu suspendInterrupts svd svg Sweave SweaveHooks SweaveSyntConv sweep switch sym symbols symnum syms sys.call sys.calls Sys.chmod Sys.Date sys.frame sys.frames sys.function Sys.getenv Sys.getlocale Sys.getpid Sys.glob Sys.info sys.load.image Sys.localeconv sys.nframe sys.on.exit sys.parent sys.parents Sys.readlink sys.save.image Sys.setenv Sys.setFileTime Sys.setlocale Sys.sleep sys.source sys.status Sys.time Sys.timezone Sys.umask Sys.unsetenv Sys.which system system.file system.time system2 t t.data.frame t.default t.test table tabulate tail tail_while tail.matrix tally tally_ tan tanh tanpi tapply tar taskCallbackManager tbl tbl_cube tbl_df tbl_nongroup_vars tbl_sum tbl_vars tcrossprod tempdir tempfile termplot terms terms.formula terrain.colors testInheritedMethods testPlatformEquivalence testVirtual text text.default textConnection textConnectionValue theme theme_bw theme_classic theme_dark theme_get theme_gray theme_grey theme_light theme_linedraw theme_minimal theme_replace theme_set theme_test theme_update theme_void tibble tibble_ tidy_names tidyverse_conflicts tidyverse_deps tidyverse_logo tidyverse_packages tidyverse_update tiff time time_length timestamp title toBibtex today toeplitz tokenize tokenizer_csv tokenizer_delim tokenizer_fwf tokenizer_line tokenizer_log tokenizer_tsv tokenizer_ws toLatex tolower top_n topenv topo.colors toString toString.default toupper trace traceback tracemem traceOff traceOn tracingState trans3d transform transform_position transform.data.frame transform.default transmute transmute_ transmute_all transmute_at transmute_if transpose tribble trigamma trimws trunc trunc_mat trunc.Date trunc.POSIXt truncate truncate.connection try tryCatch tryNew ts ts.intersect ts.plot ts.union tsdiag tsp tsp<- tsSmooth TukeyHSD txtProgressBar type_convert type_sum type.convert Type1Font typeof tz tz<- unclass uncount undebug undebugcall ungroup union union_all unique unique.array unique.data.frame unique.default unique.matrix unique.numeric_version unique.POSIXlt unique.warnings uniroot unit unite unite_ units units.difftime units<- units<-.difftime unix.time unlink unlist unloadNamespace unlockBinding unname unnest unnest_ unRematchDefinition unserialize unsplit unstack untar untrace untracemem unz unzip update update_geom_defaults update_labels update_list update_stat_defaults update.default update.formula update.packages upgrade upper.tri url url.show URLdecode URLencode UseMethod utf8ToInt validEnc validObject validSlotNames validUTF8 vapply var var.test variable.names varimax vars vcov vec_depth vector Vectorize version vi View vignette waiver walk walk2 warnErrList warning warnings wday wday<- week week<- weekdays weekdays.Date weekdays.POSIXt weeks weighted.mean weighted.residuals weights when which which.max which.min while wilcox.test window window<- with with_order with_tz with.default withAutoprint withCallingHandlers within within.data.frame within.list withRestarts withVisible word wrap_dbplyr_obj wrap_dims write write_csv write_delim write_excel_csv write_file write_lines write_rds write_tsv write_xlsx write.csv write.csv2 write.dcf write.ftable write.socket write.table writeBin writeChar writeLines x11 X11.options X11Font X11Fonts xedit xemacs xfig xinch xl_formula xl_hyperlink xlab xlim xor xpdrows.data.frame xspline xtabs xtfrm xtfrm.AsIs xtfrm.Date xtfrm.default xtfrm.difftime xtfrm.factor xtfrm.numeric_version xtfrm.POSIXct xtfrm.POSIXlt xtfrm.Surv xy.coords xyinch xyTable xyz.coords xzfile yday yday<- ydm ydm_h ydm_hm ydm_hms year year<- years yinch ylab ylim ymd ymd_h ymd_hm ymd_hms yq zapsmall zeroGrob zip ",
                literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
            },
            r: 0
        }, {
            cN: "number",
            b: "0[xX][0-9a-fA-F]+[Li]?\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\d+\\.(?!\\d)(?:i\\b)?",
            r: 0
        }, {
            cN: "number",
            b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
            r: 0
        }, {
            b: "`",
            e: "`",
            r: 0
        }, {
            cN: "string",
            c: [e.BE],
            v: [{
                b: '"',
                e: '"'
            }, {
                b: "'",
                e: "'"
            }]
        }]
    }
});