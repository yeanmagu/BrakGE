(function (d) {
    var e = {
        isMsie: function () {
            return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false
        }, isBlankString: function (t) {
            return !t || /^\s*$/.test(t)
        }, escapeRegExChars: function (t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }, isString: function (t) {
            return typeof t === "string"
        }, isNumber: function (t) {
            return typeof t === "number"
        }, isArray: d.isArray, isFunction: d.isFunction, isObject: d.isPlainObject, isUndefined: function (t) {
            return typeof t === "undefined"
        }, bind: d.proxy, each: function (u, t) {
            d.each(u, v);
            function v(w, x) {
                return t(x, w)
            }
        }, map: d.map, filter: d.grep, every: function (t, v) {
            var u = true;
            if (!t) {
                return u
            } d.each(t, function (w, x) {
                if (!(u = v.call(null, x, w, t))) {
                    return false
                }
            });
            return !!u
        }, some: function (t, v) {
            var u = false;
            if (!t) {
                return u
            } d.each(t, function (w, x) {
                if (u = v.call(null, x, w, t)) {
                    return false
                }
            });
            return !!u
        }, mixin: d.extend, getUniqueId: function () {
            var t = 0;
            return function () {
                return t++
            }
        }(), templatify: function r(t) {
            return d.isFunction(t) ? t : u;
            function u() {
                return String(t)
            }
        }, defer: function (t) {
            setTimeout(t, 0)
        }, debounce: function (t, x, u) {
            var w, v;
            return function () {
                var y = this, A = arguments, z, B;
                z = function () {
                    w = null;
                    if (!u) {
                        v = t.apply(y, A)
                    }
                };
                B = u && !w;
                clearTimeout(w);
                w = setTimeout(z, x);
                if (B) {
                    v = t.apply(y, A)
                } return v
            }
        }, throttle: function (A, x) {
            var z, y, w, v, u, t;
            u = 0;
            t = function () {
                u = new Date();
                w = null;
                v = A.apply(z, y)
            };
            return function () {
                var B = new Date(), C = x - (B - u);
                z = this;
                y = arguments;
                if (C <= 0) {
                    clearTimeout(w);
                    w = null;
                    u = B;
                    v = A.apply(z, y)
                } else {
                    if (!w) {
                        w = setTimeout(t, C)
                    }
                } return v
            }
        }, noop: function () { }
    };
    var c = "0.10.2";
    var s = function (v) {
        return { nonword: u, whitespace: w, obj: { nonword: t(u), whitespace: t(w) } };
        function w(x) {
            return x.split(/\s+/)
        } function u(x) {
            return x.split(/\W+/)
        } function t(y) {
            return function x(A) {
                return function z(B) {
                    return y(B[A])
                }
            }
        }
    }();
    var n = function () {
        function w(A) {
            this.maxSize = A || 100;
            this.size = 0;
            this.hash = {};
            this.list = new v()
        } e.mixin(w.prototype, {
            set: function z(A, D) {
                var C = this.list.tail, B;
                if (this.size >= this.maxSize) {
                    this.list.remove(C);
                    delete this.hash[C.key]
                } if (B = this.hash[A]) {
                    B.val = D;
                    this.list.moveToFront(B)
                } else {
                    B = new x(A, D);
                    this.list.add(B);
                    this.hash[A] = B;
                    this.size++
                }
            }, get: function u(A) {
                var B = this.hash[A];
                if (B) {
                    this.list.moveToFront(B);
                    return B.val
                }
            }
        });
        function v() {
            this.head = this.tail = null
        } e.mixin(v.prototype, {
            add: function t(A) {
                if (this.head) {
                    A.next = this.head;
                    this.head.prev = A
                } this.head = A;
                this.tail = this.tail || A
            }, remove: function y(A) {
                A.prev ? A.prev.next = A.next : this.head = A.next;
                A.next ? A.next.prev = A.prev : this.tail = A.prev
            }, moveToFront: function (A) {
                this.remove(A);
                this.add(A)
            }
        });
        function x(A, B) {
            this.key = A;
            this.val = B;
            this.prev = this.next = null
        } return w
    }();
    var p = function () {
        var w, x;
        try {
            w = window.localStorage;
            w.setItem("~~~", "!");
            w.removeItem("~~~")
        } catch (v) {
            w = null
        } function z(A) {
            this.prefix = ["__", A, "__"].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + this.prefix)
        } if (w && window.JSON) {
            x = {
                _prefix: function (A) {
                    return this.prefix + A
                }, _ttlKey: function (A) {
                    return this._prefix(A) + this.ttlKey
                }, get: function (A) {
                    if (this.isExpired(A)) {
                        this.remove(A)
                    } return t(w.getItem(this._prefix(A)))
                }, set: function (A, C, B) {
                    if (e.isNumber(B)) {
                        w.setItem(this._ttlKey(A), u(y() + B))
                    } else {
                        w.removeItem(this._ttlKey(A))
                    } return w.setItem(this._prefix(A), u(C))
                }, remove: function (A) {
                    w.removeItem(this._ttlKey(A));
                    w.removeItem(this._prefix(A));
                    return this
                }, clear: function () {
                    var A, B, C = [], D = w.length;
                    for (A = 0;
                    A < D;
                    A++) {
                        if ((B = w.key(A)).match(this.keyMatcher)) {
                            C.push(B.replace(this.keyMatcher, ""))
                        }
                    } for (A = C.length;
                    A--;
                    ) {
                        this.remove(C[A])
                    } return this
                }, isExpired: function (A) {
                    var B = t(w.getItem(this._ttlKey(A)));
                    return e.isNumber(B) && y() > B ? true : false
                }
            }
        } else {
            x = { get: e.noop, set: e.noop, remove: e.noop, clear: e.noop, isExpired: e.noop }
        } e.mixin(z.prototype, x);
        return z;
        function y() {
            return new Date().getTime()
        } function u(A) {
            return JSON.stringify(e.isUndefined(A) ? null : A)
        } function t(A) {
            return JSON.parse(A)
        }
    }();
    var a = function () {
        var u = 0, t = {}, A = 6, v = new n(10);
        function x(B) {
            B = B || {};
            this._send = B.transport ? y(B.transport) : d.ajax;
            this._get = B.rateLimiter ? B.rateLimiter(this._get) : this._get
        } x.setMaxPendingRequests = function w(B) {
            A = B
        };
        x.resetCache = function z() {
            v = new n(10)
        };
        e.mixin(x.prototype, {
            _get: function (I, G, C) {
                var H = this, F;
                if (F = t[I]) {
                    F.done(D).fail(E)
                } else {
                    if (u < A) {
                        u++;
                        t[I] = this._send(I, G).done(D).fail(E).always(B)
                    } else {
                        this.onDeckRequestArgs = [].slice.call(arguments, 0)
                    }
                } function D(J) {
                    C && C(null, J);
                    v.set(I, J)
                } function E() {
                    C && C(true)
                } function B() {
                    u--;
                    delete t[I];
                    if (H.onDeckRequestArgs) {
                        H._get.apply(H, H.onDeckRequestArgs);
                        H.onDeckRequestArgs = null
                    }
                }
            }, get: function (E, C, B) {
                var D;
                if (e.isFunction(C)) {
                    B = C;
                    C = {}
                } if (D = v.get(E)) {
                    e.defer(function () {
                        B && B(null, D)
                    })
                } else {
                    this._get(E, C, B)
                } return !!D
            }
        });
        return x;
        function y(C) {
            return function B(H, E) {
                var D = d.Deferred();
                C(H, E, G, F);
                return D;
                function G(I) {
                    e.defer(function () {
                        D.resolve(I)
                    })
                } function F(I) {
                    e.defer(function () {
                        D.reject(I)
                    })
                }
            }
        }
    }();
    var q = function () {
        function A(C) {
            C = C || {};
            if (!C.datumTokenizer || !C.queryTokenizer) {
                d.error("datumTokenizer and queryTokenizer are both required")
            } this.datumTokenizer = C.datumTokenizer;
            this.queryTokenizer = C.queryTokenizer;
            this.reset()
        } e.mixin(A.prototype, {
            bootstrap: function u(C) {
                this.datums = C.datums;
                this.trie = C.trie
            }, add: function (C) {
                var D = this;
                C = e.isArray(C) ? C : [C];
                e.each(C, function (E) {
                    var F, G;
                    F = D.datums.push(E) - 1;
                    G = y(D.datumTokenizer(E));
                    e.each(G, function (K) {
                        var J, I, H;
                        J = D.trie;
                        I = K.split("");
                        while (H = I.shift()) {
                            J = J.children[H] || (J.children[H] = x());
                            J.ids.push(F)
                        }
                    })
                })
            }, get: function v(D) {
                var E = this, F, C;
                F = y(this.queryTokenizer(D));
                e.each(F, function (K) {
                    var J, H, G, I;
                    if (C && C.length === 0) {
                        return false
                    } J = E.trie;
                    H = K.split("");
                    while (J && (G = H.shift())) {
                        J = J.children[G]
                    } if (J && H.length === 0) {
                        I = J.ids.slice(0);
                        C = C ? w(C, I) : I
                    } else {
                        C = [];
                        return false
                    }
                });
                return C ? e.map(t(C), function (G) {
                    return E.datums[G]
                }) : []
            }, reset: function z() {
                this.datums = [];
                this.trie = x()
            }, serialize: function B() {
                return { datums: this.datums, trie: this.trie }
            }
        });
        return A;
        function y(C) {
            C = e.filter(C, function (D) {
                return !!D
            });
            C = e.map(C, function (D) {
                return D.toLowerCase()
            });
            return C
        } function x() {
            return { ids: [], children: {} }
        } function t(C) {
            var E = {}, F = [];
            for (var D = 0;
            D < C.length;
            D++) {
                if (!E[C[D]]) {
                    E[C[D]] = true;
                    F.push(C[D])
                }
            } return F
        } function w(D, E) {
            var C = 0, F = 0, H = [];
            D = D.sort(G);
            E = E.sort(G);
            while (C < D.length && F < E.length) {
                if (D[C] < E[F]) {
                    C++
                } else {
                    if (D[C] > E[F]) {
                        F++
                    } else {
                        H.push(D[C]);
                        C++;
                        F++
                    }
                }
            } return H;
            function G(I, J) {
                return I - J
            }
        }
    }();
    var o = function () {
        return { local: t, prefetch: u, remote: v };
        function t(w) {
            return w.local || null
        } function u(x) {
            var y, w;
            w = { url: null, thumbprint: "", ttl: 24 * 60 * 60 * 1000, filter: null, ajax: {} };
            if (y = x.prefetch || null) {
                y = e.isString(y) ? { url: y } : y;
                y = e.mixin(w, y);
                y.thumbprint = c + y.thumbprint;
                y.ajax.type = y.ajax.type || "GET";
                y.ajax.dataType = y.ajax.dataType || "json";
                !y.url && d.error("prefetch requires url to be set")
            } return y
        } function v(z) {
            var A, y;
            y = { url: null, wildcard: "%QUERY", replace: null, rateLimitBy: "debounce", rateLimitWait: 300, send: null, filter: null, ajax: {} };
            if (A = z.remote || null) {
                A = e.isString(A) ? { url: A } : A;
                A = e.mixin(y, A);
                A.rateLimiter = /^throttle$/i.test(A.rateLimitBy) ? x(A.rateLimitWait) : w(A.rateLimitWait);
                A.ajax.type = A.ajax.type || "GET";
                A.ajax.dataType = A.ajax.dataType || "json";
                delete A.rateLimitBy;
                delete A.rateLimitWait;
                !A.url && d.error("remote requires url to be set")
            } return A;
            function w(B) {
                return function (C) {
                    return e.debounce(C, B)
                }
            } function x(B) {
                return function (C) {
                    return e.throttle(C, B)
                }
            }
        }
    }();
    (function (J) {
        var H, E;
        H = J.Bloodhound;
        E = { data: "data", protocol: "protocol", thumbprint: "thumbprint" };
        J.Bloodhound = v;
        function v(L) {
            if (!L || !L.local && !L.prefetch && !L.remote) {
                d.error("one of local, prefetch, or remote is required")
            } this.limit = L.limit || 5;
            this.sorter = B(L.sorter);
            this.dupDetector = L.dupDetector || C;
            this.local = o.local(L);
            this.prefetch = o.prefetch(L);
            this.remote = o.remote(L);
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
            this.index = new q({ datumTokenizer: L.datumTokenizer, queryTokenizer: L.queryTokenizer });
            this.storage = this.cacheKey ? new p(this.cacheKey) : null
        } v.noConflict = function G() {
            J.Bloodhound = H;
            return v
        };
        v.tokenizers = s;
        e.mixin(v.prototype, {
            _loadPrefetch: function F(L) {
                var P = this, O, M;
                if (O = this._readFromStorage(L.thumbprint)) {
                    this.index.bootstrap(O);
                    M = d.Deferred().resolve()
                } else {
                    M = d.ajax(L.url, L.ajax).done(N)
                } return M;
                function N(Q) {
                    P.clear();
                    P.add(L.filter ? L.filter(Q) : Q);
                    P._saveToStorage(P.index.serialize(), L.thumbprint, L.ttl)
                }
            }, _getFromRemote: function A(N, M) {
                var O = this, Q, P;
                N = N || "";
                P = encodeURIComponent(N);
                Q = this.remote.replace ? this.remote.replace(this.remote.url, N) : this.remote.url.replace(this.remote.wildcard, P);
                return this.transport.get(Q, this.remote.ajax, L);
                function L(R, S) {
                    R ? M([]) : M(O.remote.filter ? O.remote.filter(S) : S)
                }
            }, _saveToStorage: function K(M, N, L) {
                if (this.storage) {
                    this.storage.set(E.data, M, L);
                    this.storage.set(E.protocol, location.protocol, L);
                    this.storage.set(E.thumbprint, N, L)
                }
            }, _readFromStorage: function I(L) {
                var N = {}, M;
                if (this.storage) {
                    N.data = this.storage.get(E.data);
                    N.protocol = this.storage.get(E.protocol);
                    N.thumbprint = this.storage.get(E.thumbprint)
                } M = N.thumbprint !== L || N.protocol !== location.protocol;
                return N.data && !M ? N.data : null
            }, _initialize: function D() {
                var N = this, M = this.local, L;
                L = this.prefetch ? this._loadPrefetch(this.prefetch) : d.Deferred().resolve();
                M && L.done(O);
                this.transport = this.remote ? new a(this.remote) : null;
                return this.initPromise = L.promise();
                function O() {
                    N.add(e.isFunction(M) ? M() : M)
                }
            }, initialize: function D(L) {
                return !this.initPromise || L ? this._initialize() : this.initPromise
            }, add: function u(L) {
                this.index.add(L)
            }, get: function z(O, L) {
                var Q = this, N = [], M = false;
                N = this.index.get(O);
                N = this.sorter(N).slice(0, this.limit);
                if (N.length < this.limit && this.transport) {
                    M = this._getFromRemote(O, P)
                } if (!M) {
                    (N.length > 0 || !this.transport) && L && L(N)
                } function P(S) {
                    var R = N.slice(0);
                    e.each(S, function (U) {
                        var T;
                        T = e.some(R, function (V) {
                            return Q.dupDetector(U, V)
                        });
                        !T && R.push(U);
                        return R.length < Q.limit
                    });
                    L && L(Q.sorter(R))
                }
            }, clear: function w() {
                this.index.reset()
            }, clearPrefetchCache: function x() {
                this.storage && this.storage.clear()
            }, clearRemoteCache: function y() {
                this.transport && a.resetCache()
            }, ttAdapter: function t() {
                return e.bind(this.get, this)
            }
        });
        return v;
        function B(L) {
            return e.isFunction(L) ? N : M;
            function N(O) {
                return O.sort(L)
            } function M(O) {
                return O
            }
        } function C() {
            return false
        }
    })(this);
    var l = { wrapper: '<span class="twitter-typeahead"></span>', dropdown: '<span class="tt-dropdown-menu"></span>', dataset: '<div class="tt-dataset-%CLASS%"></div>', suggestions: '<span class="tt-suggestions"></span>', suggestion: '<div class="tt-suggestion"></div>' };
    var f = { wrapper: { position: "relative", display: "inline-block" }, hint: { position: "absolute", top: "0", left: "0", borderColor: "transparent", boxShadow: "none" }, input: { position: "relative", verticalAlign: "top", backgroundColor: "transparent" }, inputWithNoHint: { position: "relative", verticalAlign: "top" }, dropdown: { position: "absolute", top: "100%", left: "0", zIndex: "99999", display: "none" }, suggestions: { display: "block" }, suggestion: { whiteSpace: "nowrap", cursor: "pointer" }, suggestionChild: { whiteSpace: "normal" }, ltr: { left: "0", right: "auto" }, rtl: { left: "auto", right: " 0" } };
    if (e.isMsie()) {
        e.mixin(f.input, { backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" })
    } if (e.isMsie() && e.isMsie() <= 7) {
        e.mixin(f.input, { marginTop: "-1px" })
    } var i = function () {
        var u = "typeahead:";
        function t(v) {
            if (!v || !v.el) {
                d.error("EventBus initialized without el")
            } this.$el = d(v.el)
        } e.mixin(t.prototype, {
            trigger: function (w) {
                var v = [].slice.call(arguments, 1);
                this.$el.trigger(u + w, v)
            }
        });
        return t
    }();
    var j = function () {
        var w = /\s+/, B = A();
        return { onSync: v, onAsync: u, off: C, trigger: x };
        function t(F, H, D, E) {
            var G;
            if (!D) {
                return this
            } H = H.split(w);
            D = E ? y(D, E) : D;
            this._callbacks = this._callbacks || {};
            while (G = H.shift()) {
                this._callbacks[G] = this._callbacks[G] || { sync: [], async: [] };
                this._callbacks[G][F].push(D)
            } return this
        } function u(F, D, E) {
            return t.call(this, "async", F, D, E)
        } function v(F, D, E) {
            return t.call(this, "sync", F, D, E)
        } function C(E) {
            var D;
            if (!this._callbacks) {
                return this
            } E = E.split(w);
            while (D = E.shift()) {
                delete this._callbacks[D]
            } return this
        } function x(I) {
            var H, F, D, G, E;
            if (!this._callbacks) {
                return this
            } I = I.split(w);
            D = [].slice.call(arguments, 1);
            while ((H = I.shift()) && (F = this._callbacks[H])) {
                G = z(F.sync, this, [H].concat(D));
                E = z(F.async, this, [H].concat(D));
                G() && B(E)
            } return this
        } function z(E, F, D) {
            return G;
            function G() {
                var H;
                for (var I = 0;
                !H && I < E.length;
                I += 1) {
                    H = E[I].apply(F, D) === false
                } return !H
            }
        } function A() {
            var D;
            if (window.setImmediate) {
                D = function E(G) {
                    setImmediate(function () {
                        G()
                    })
                }
            } else {
                D = function F(G) {
                    setTimeout(function () {
                        G()
                    }, 0)
                }
            } return D
        } function y(E, D) {
            return E.bind ? E.bind(D) : function () {
                E.apply(D, [].slice.call(arguments, 0))
            }
        }
    }();
    var k = function (u) {
        var t = { node: null, pattern: null, tagName: "strong", className: null, wordsOnly: false, caseSensitive: false };
        return function w(z) {
            var A;
            z = e.mixin({}, t, z);
            if (!z.node || !z.pattern) {
                return
            } z.pattern = e.isArray(z.pattern) ? z.pattern : [z.pattern];
            A = v(z.pattern, z.caseSensitive, z.wordsOnly);
            x(z.node, y);
            function y(D) {
                var B, C;
                if (B = A.exec(D.data)) {
                    wrapperNode = u.createElement(z.tagName);
                    z.className && (wrapperNode.className = z.className);
                    C = D.splitText(B.index);
                    C.splitText(B[0].length);
                    wrapperNode.appendChild(C.cloneNode(true));
                    D.parentNode.replaceChild(wrapperNode, C)
                } return !!B
            } function x(C, D) {
                var B, F = 3;
                for (var E = 0;
                E < C.childNodes.length;
                E++) {
                    B = C.childNodes[E];
                    if (B.nodeType === F) {
                        E += D(B) ? 1 : 0
                    } else {
                        x(B, D)
                    }
                }
            }
        };
        function v(x, A, z) {
            var B = [], y;
            for (var C = 0;
            C < x.length;
            C++) {
                B.push(e.escapeRegExChars(x[C]))
            } y = z ? "\\b(" + B.join("|") + ")\\b" : "(" + B.join("|") + ")";
            return A ? new RegExp(y) : new RegExp(y, "i")
        }
    }(window.document);
    var m = function () {
        var I;
        I = { 9: "tab", 27: "esc", 37: "left", 39: "right", 13: "enter", 38: "up", 40: "down" };
        function x(T) {
            var Y = this, U, V, X, W;
            T = T || {};
            if (!T.input) {
                d.error("input is missing")
            } U = e.bind(this._onBlur, this);
            V = e.bind(this._onFocus, this);
            X = e.bind(this._onKeydown, this);
            W = e.bind(this._onInput, this);
            this.$hint = d(T.hint);
            this.$input = d(T.input).on("blur.tt", U).on("focus.tt", V).on("keydown.tt", X);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop
            } if (!e.isMsie()) {
                this.$input.on("input.tt", W)
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (Z) {
                    if (I[Z.which || Z.keyCode]) {
                        return
                    } e.defer(e.bind(Y._onInput, Y, Z))
                })
            } this.query = this.$input.val();
            this.$overflowHelper = M(this.$input)
        } x.normalizeQuery = function (T) {
            return (T || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        };
        e.mixin(x.prototype, j, {
            _onBlur: function z() {
                this.resetInputValue();
                this.trigger("blurred")
            }, _onFocus: function A() {
                this.trigger("focused")
            }, _onKeydown: function C(T) {
                var U = I[T.which || T.keyCode];
                this._managePreventDefault(U, T);
                if (U && this._shouldTrigger(U, T)) {
                    this.trigger(U + "Keyed", T)
                }
            }, _onInput: function B() {
                this._checkInputValue()
            }, _managePreventDefault: function y(W, T) {
                var X, U, V;
                switch (W) {
                    case "tab": U = this.getHint();
                        V = this.getInputValue();
                        X = U && U !== V && !J(T);
                        break;
                    case "up": case "down": X = !J(T);
                        break;
                    default: X = false
                } X && T.preventDefault()
            }, _shouldTrigger: function H(U, T) {
                var V;
                switch (U) {
                    case "tab": V = !J(T);
                        break;
                    default: V = true
                } return V
            }, _checkInputValue: function N() {
                var V, T, U;
                V = this.getInputValue();
                T = K(V, this.query);
                U = T ? this.query.length !== V.length : false;
                if (!T) {
                    this.trigger("queryChanged", this.query = V)
                } else {
                    if (U) {
                        this.trigger("whitespaceChanged", this.query)
                    }
                }
            }, focus: function R() {
                this.$input.focus()
            }, blur: function L() {
                this.$input.blur()
            }, getQuery: function v() {
                return this.query
            }, setQuery: function G(T) {
                this.query = T
            }, getInputValue: function t() {
                return this.$input.val()
            }, setInputValue: function F(U, T) {
                this.$input.val(U);
                T ? this.clearHint() : this._checkInputValue()
            }, resetInputValue: function D() {
                this.setInputValue(this.query, true)
            }, getHint: function S() {
                return this.$hint.val()
            }, setHint: function E(T) {
                this.$hint.val(T)
            }, clearHint: function O() {
                this.setHint("")
            }, clearHintIfInvalid: function P() {
                var V, T, W, U;
                V = this.getInputValue();
                T = this.getHint();
                W = V !== T && T.indexOf(V) === 0;
                U = V !== "" && W && !this.hasOverflow();
                !U && this.clearHint()
            }, getLanguageDirection: function u() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            }, hasOverflow: function w() {
                var T = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= T
            }, isCursorAtEnd: function () {
                var V, U, T;
                V = this.$input.val().length;
                U = this.$input[0].selectionStart;
                if (e.isNumber(U)) {
                    return U === V
                } else {
                    if (document.selection) {
                        T = document.selection.createRange();
                        T.moveStart("character", -V);
                        return V === T.text.length
                    }
                } return true
            }, destroy: function Q() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null
            }
        });
        return x;
        function M(T) {
            return d('<pre aria-hidden="true"></pre>').css({ position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: T.css("font-family"), fontSize: T.css("font-size"), fontStyle: T.css("font-style"), fontVariant: T.css("font-variant"), fontWeight: T.css("font-weight"), wordSpacing: T.css("word-spacing"), letterSpacing: T.css("letter-spacing"), textIndent: T.css("text-indent"), textRendering: T.css("text-rendering"), textTransform: T.css("text-transform") }).insertAfter(T)
        } function K(T, U) {
            return x.normalizeQuery(T) === x.normalizeQuery(U)
        } function J(T) {
            return T.altKey || T.ctrlKey || T.metaKey || T.shiftKey
        }
    }();
    var g = function () {
        var t = "ttDataset", F = "ttValue", u = "ttDatum";
        function I(J) {
            J = J || {};
            J.templates = J.templates || {};
            if (!J.source) {
                d.error("missing source")
            } if (J.name && !C(J.name)) {
                d.error("invalid dataset name: " + J.name)
            } this.query = null;
            this.highlight = !!J.highlight;
            this.name = J.name || e.getUniqueId();
            this.source = J.source;
            this.displayFn = y(J.display || J.displayKey);
            this.templates = A(J.templates, this.displayFn);
            this.$el = d(l.dataset.replace("%CLASS%", this.name))
        } I.extractDatasetName = function w(J) {
            return d(J).data(t)
        };
        I.extractValue = function x(J) {
            return d(J).data(F)
        };
        I.extractDatum = function x(J) {
            return d(J).data(u)
        };
        e.mixin(I.prototype, j, {
            _render: function D(O, P) {
                if (!this.$el) {
                    return
                } var Q = this, N;
                this.$el.empty();
                N = P && P.length;
                if (!N && this.templates.empty) {
                    this.$el.html(J()).prepend(Q.templates.header ? M() : null).append(Q.templates.footer ? K() : null)
                } else {
                    if (N) {
                        this.$el.html(L()).prepend(Q.templates.header ? M() : null).append(Q.templates.footer ? K() : null)
                    }
                } this.trigger("rendered");
                function J() {
                    return Q.templates.empty({ query: O, isEmpty: true })
                } function L() {
                    var R, T;
                    R = d(l.suggestions).css(f.suggestions);
                    T = e.map(P, S);
                    R.append.apply(R, T);
                    Q.highlight && k({ node: R[0], pattern: O });
                    return R;
                    function S(V) {
                        var U;
                        U = d(l.suggestion).append(Q.templates.suggestion(V)).data(t, Q.name).data(F, Q.displayFn(V)).data(u, V);
                        U.children().each(function () {
                            d(this).css(f.suggestionChild)
                        });
                        return U
                    }
                } function M() {
                    return Q.templates.header({ query: O, isEmpty: !N })
                } function K() {
                    return Q.templates.footer({ query: O, isEmpty: !N })
                }
            }, getRoot: function z() {
                return this.$el
            }, update: function E(J) {
                var L = this;
                this.query = J;
                this.canceled = false;
                this.source(J, K);
                function K(M) {
                    if (!L.canceled && J === L.query) {
                        L._render(J, M)
                    }
                }
            }, cancel: function G() {
                this.canceled = true
            }, clear: function H() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered")
            }, isEmpty: function B() {
                return this.$el.is(":empty")
            }, destroy: function v() {
                this.$el = null
            }
        });
        return I;
        function y(J) {
            J = J || "value";
            return e.isFunction(J) ? J : K;
            function K(L) {
                return L[J]
            }
        } function A(L, J) {
            return { empty: L.empty && e.templatify(L.empty), header: L.header && e.templatify(L.header), footer: L.footer && e.templatify(L.footer), suggestion: L.suggestion || K };
            function K(M) {
                return "<p>" + J(M) + "</p>"
            }
        } function C(J) {
            return /^[_a-zA-Z0-9-]+$/.test(J)
        }
    }();
    var h = function () {
        function H(R) {
            var V = this, S, T, U;
            R = R || {};
            if (!R.menu) {
                d.error("menu is required")
            } this.isOpen = false;
            this.isEmpty = true;
            this.datasets = e.map(R.datasets, Q);
            S = e.bind(this._onSuggestionClick, this);
            T = e.bind(this._onSuggestionMouseEnter, this);
            U = e.bind(this._onSuggestionMouseLeave, this);
            this.$menu = d(R.menu).on("click.tt", ".tt-suggestion", S).on("mouseenter.tt", ".tt-suggestion", T).on("mouseleave.tt", ".tt-suggestion", U);
            e.each(this.datasets, function (W) {
                V.$menu.append(W.getRoot());
                W.onSync("rendered", V._onRendered, V)
            })
        } e.mixin(H.prototype, j, {
            _onSuggestionClick: function x(R) {
                this.trigger("suggestionClicked", d(R.currentTarget))
            }, _onSuggestionMouseEnter: function z(R) {
                this._removeCursor();
                this._setCursor(d(R.currentTarget), true)
            }, _onSuggestionMouseLeave: function A() {
                this._removeCursor()
            }, _onRendered: function y() {
                this.isEmpty = e.every(this.datasets, R);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function R(S) {
                    return S.isEmpty()
                }
            }, _hide: function () {
                this.$menu.hide()
            }, _show: function () {
                this.$menu.css("display", "block")
            }, _getSuggestions: function O() {
                return this.$menu.find(".tt-suggestion")
            }, _getCursor: function M() {
                return this.$menu.find(".tt-cursor").first()
            }, _setCursor: function D(R, S) {
                R.first().addClass("tt-cursor");
                !S && this.trigger("cursorMoved")
            }, _removeCursor: function C() {
                this._getCursor().removeClass("tt-cursor")
            }, _moveCursor: function u(U) {
                var T, S, V, R;
                if (!this.isOpen) {
                    return
                } S = this._getCursor();
                T = this._getSuggestions();
                this._removeCursor();
                V = T.index(S) + U;
                V = (V + 1) % (T.length + 1) - 1;
                if (V === -1) {
                    this.trigger("cursorRemoved");
                    return
                } else {
                    if (V < -1) {
                        V = T.length - 1
                    }
                } this._setCursor(R = T.eq(V));
                this._ensureVisible(R)
            }, _ensureVisible: function K(R) {
                var T, S, V, U;
                T = R.position().top;
                S = T + R.outerHeight(true);
                V = this.$menu.scrollTop();
                U = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (T < 0) {
                    this.$menu.scrollTop(V + T)
                } else {
                    if (U < S) {
                        this.$menu.scrollTop(V + (S - U))
                    }
                }
            }, close: function G() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed")
                }
            }, open: function B() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened")
                }
            }, setLanguageDirection: function F(R) {
                this.$menu.css(R === "ltr" ? f.ltr : f.rtl)
            }, moveCursorUp: function w() {
                this._moveCursor(-1)
            }, moveCursorDown: function v() {
                this._moveCursor(+1)
            }, getDatumForSuggestion: function N(R) {
                var S = null;
                if (R.length) {
                    S = { raw: g.extractDatum(R), value: g.extractValue(R), datasetName: g.extractDatasetName(R) }
                } return S
            }, getDatumForCursor: function L() {
                return this.getDatumForSuggestion(this._getCursor().first())
            }, getDatumForTopSuggestion: function P() {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            }, update: function E(R) {
                e.each(this.datasets, S);
                function S(T) {
                    T.update(R)
                }
            }, empty: function J() {
                e.each(this.datasets, R);
                this.isEmpty = true;
                function R(S) {
                    S.clear()
                }
            }, isVisible: function t() {
                return this.isOpen && !this.isEmpty
            }, destroy: function I() {
                this.$menu.off(".tt");
                this.$menu = null;
                e.each(this.datasets, R);
                function R(S) {
                    S.destroy()
                }
            }
        });
        return H;
        function Q(R) {
            return new g(R)
        }
    }();
    var b = function () {
        var J = "ttAttrs";
        function M(Z) {
            var Y, ab, aa;
            Z = Z || {};
            if (!Z.input) {
                d.error("missing input")
            } this.isActivated = false;
            this.autoselect = !!Z.autoselect;
            this.minLength = e.isNumber(Z.minLength) ? Z.minLength : 1;
            this.$node = I(Z.input, Z.withHint);
            Y = this.$node.find(".tt-dropdown-menu");
            ab = this.$node.find(".tt-input");
            aa = this.$node.find(".tt-hint");
            ab.on("blur.tt", function (ac) {
                var ad, af, ae;
                ad = document.activeElement;
                af = Y.is(ad);
                ae = Y.has(ad).length > 0;
                if (e.isMsie() && (af || ae)) {
                    ac.preventDefault();
                    ac.stopImmediatePropagation();
                    e.defer(function () {
                        ab.focus()
                    })
                }
            });
            Y.on("mousedown.tt", function (ac) {
                ac.preventDefault()
            });
            this.eventBus = Z.eventBus || new i({ el: ab });
            this.dropdown = new h({ menu: Y, datasets: Z.datasets }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new m({ input: ab, hint: aa }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection()
        } e.mixin(M.prototype, {
            _onSuggestionClicked: function y(Z, aa) {
                var Y;
                if (Y = this.dropdown.getDatumForSuggestion(aa)) {
                    this._select(Y)
                }
            }, _onCursorMoved: function S() {
                var Y = this.dropdown.getDatumForCursor();
                this.input.setInputValue(Y.value, true);
                this.eventBus.trigger("cursorchanged", Y.raw, Y.datasetName)
            }, _onCursorRemoved: function T() {
                this.input.resetInputValue();
                this._updateHint()
            }, _onDatasetRendered: function U() {
                this._updateHint()
            }, _onOpened: function w() {
                this._updateHint();
                this.eventBus.trigger("opened")
            }, _onClosed: function R() {
                this.input.clearHint();
                this.eventBus.trigger("closed")
            }, _onFocused: function x() {
                this.isActivated = true;
                this.dropdown.open()
            }, _onBlurred: function Q() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close()
            }, _onEnterKeyed: function X(Z, aa) {
                var ab, Y;
                ab = this.dropdown.getDatumForCursor();
                Y = this.dropdown.getDatumForTopSuggestion();
                if (ab) {
                    this._select(ab);
                    aa.preventDefault()
                } else {
                    if (this.autoselect && Y) {
                        this._select(Y);
                        aa.preventDefault()
                    }
                }
            }, _onTabKeyed: function t(Z, aa) {
                var Y;
                if (Y = this.dropdown.getDatumForCursor()) {
                    this._select(Y);
                    aa.preventDefault()
                } else {
                    this._autocomplete(true)
                }
            }, _onEscKeyed: function v() {
                this.dropdown.close();
                this.input.resetInputValue()
            }, _onUpKeyed: function H() {
                var Y = this.input.getQuery();
                this.dropdown.isEmpty && Y.length >= this.minLength ? this.dropdown.update(Y) : this.dropdown.moveCursorUp();
                this.dropdown.open()
            }, _onDownKeyed: function V() {
                var Y = this.input.getQuery();
                this.dropdown.isEmpty && Y.length >= this.minLength ? this.dropdown.update(Y) : this.dropdown.moveCursorDown();
                this.dropdown.open()
            }, _onLeftKeyed: function B() {
                this.dir === "rtl" && this._autocomplete()
            }, _onRightKeyed: function E() {
                this.dir === "ltr" && this._autocomplete()
            }, _onQueryChanged: function A(Y, Z) {
                this.input.clearHintIfInvalid();
                Z.length >= this.minLength ? this.dropdown.update(Z) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection()
            }, _onWhitespaceChanged: function C() {
                this._updateHint();
                this.dropdown.open()
            }, _setLanguageDirection: function F() {
                var Y;
                if (this.dir !== (Y = this.input.getLanguageDirection())) {
                    this.dir = Y;
                    this.$node.css("direction", Y);
                    this.dropdown.setLanguageDirection(Y)
                }
            }, _updateHint: function N() {
                var aa, Z, Y, ab, ac, ad;
                aa = this.dropdown.getDatumForTopSuggestion();
                if (aa && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    Z = this.input.getInputValue();
                    Y = m.normalizeQuery(Z);
                    ab = e.escapeRegExChars(Y);
                    ac = new RegExp("^(?:" + ab + ")(.+$)", "i");
                    ad = ac.exec(aa.value);
                    ad ? this.input.setHint(Z + ad[1]) : this.input.clearHint()
                } else {
                    this.input.clearHint()
                }
            }, _autocomplete: function u(ab) {
                var Z, ac, aa, Y;
                Z = this.input.getHint();
                ac = this.input.getQuery();
                aa = ab || this.input.isCursorAtEnd();
                if (Z && ac !== Z && aa) {
                    Y = this.dropdown.getDatumForTopSuggestion();
                    Y && this.input.setInputValue(Y.value);
                    this.eventBus.trigger("autocompleted", Y.raw, Y.datasetName)
                }
            }, _select: function K(Y) {
                this.input.setQuery(Y.value);
                this.input.setInputValue(Y.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", Y.raw, Y.datasetName);
                this.dropdown.close();
                e.defer(e.bind(this.dropdown.empty, this.dropdown))
            }, open: function W() {
                this.dropdown.open()
            }, close: function L() {
                this.dropdown.close()
            }, setVal: function z(Y) {
                if (this.isActivated) {
                    this.input.setInputValue(Y)
                } else {
                    this.input.setQuery(Y);
                    this.input.setInputValue(Y, true)
                } this._setLanguageDirection()
            }, getVal: function G() {
                return this.input.getQuery()
            }, destroy: function D() {
                this.input.destroy();
                this.dropdown.destroy();
                O(this.$node);
                this.$node = null
            }
        });
        return M;
        function I(aa, ab) {
            var ae, Y, ac, ad;
            ae = d(aa);
            Y = d(l.wrapper).css(f.wrapper);
            ac = d(l.dropdown).css(f.dropdown);
            ad = ae.clone().css(f.hint).css(P(ae));
            ad.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", true).attr({ autocomplete: "off", spellcheck: "false" });
            ae.data(J, { dir: ae.attr("dir"), autocomplete: ae.attr("autocomplete"), spellcheck: ae.attr("spellcheck"), style: ae.attr("style") });
            ae.addClass("tt-input").attr({ autocomplete: "off", spellcheck: false }).css(ab ? f.input : f.inputWithNoHint);
            try {
                !ae.attr("dir") && ae.attr("dir", "auto")
            } catch (Z) { } return ae.wrap(Y).parent().prepend(ab ? ad : null).append(ac)
        } function P(Y) {
            return { backgroundAttachment: Y.css("background-attachment"), backgroundClip: Y.css("background-clip"), backgroundColor: Y.css("background-color"), backgroundImage: Y.css("background-image"), backgroundOrigin: Y.css("background-origin"), backgroundPosition: Y.css("background-position"), backgroundRepeat: Y.css("background-repeat"), backgroundSize: Y.css("background-size") }
        } function O(Z) {
            var Y = Z.find(".tt-input");
            e.each(Y.data(J), function (ab, aa) {
                e.isUndefined(ab) ? Y.removeAttr(aa) : Y.attr(aa, ab)
            });
            Y.detach().removeData(J).removeClass("tt-input").insertAfter(Z);
            Z.remove()
        }
    }();
    (function () {
        var z, B, x;
        z = d.fn.typeahead;
        B = "ttTypeahead";
        x = {
            initialize: function w(E, D) {
                D = e.isArray(D) ? D : [].slice.call(arguments, 1);
                E = E || {};
                return this.each(C);
                function C() {
                    var F = d(this), G, H;
                    e.each(D, function (I) {
                        I.highlight = !!E.highlight
                    });
                    H = new b({ input: F, eventBus: G = new i({ el: F }), withHint: e.isUndefined(E.hint) ? true : !!E.hint, minLength: E.minLength, autoselect: E.autoselect, datasets: D });
                    F.data(B, H)
                }
            }, open: function A() {
                return this.each(C);
                function C() {
                    var D = d(this), E;
                    if (E = D.data(B)) {
                        E.open()
                    }
                }
            }, close: function u() {
                return this.each(C);
                function C() {
                    var D = d(this), E;
                    if (E = D.data(B)) {
                        E.close()
                    }
                }
            }, val: function t(D) {
                return !arguments.length ? C(this.first()) : this.each(E);
                function E() {
                    var F = d(this), G;
                    if (G = F.data(B)) {
                        G.setVal(D)
                    }
                } function C(F) {
                    var H, G;
                    if (H = F.data(B)) {
                        G = H.getVal()
                    } return G
                }
            }, destroy: function v() {
                return this.each(C);
                function C() {
                    var D = d(this), E;
                    if (E = D.data(B)) {
                        E.destroy();
                        D.removeData(B)
                    }
                }
            }
        };
        d.fn.typeahead = function (C) {
            if (x[C]) {
                return x[C].apply(this, [].slice.call(arguments, 1))
            } else {
                return x.initialize.apply(this, arguments)
            }
        };
        d.fn.typeahead.noConflict = function y() {
            d.fn.typeahead = z;
            return this
        }
    })()
})(window.jQuery);