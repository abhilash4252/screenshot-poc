!(function () {
  "use strict";
  var u = function () {
    return (u =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
  function e(t, a, u, c) {
    return new (u = u || Promise)(function (n, e) {
      function r(t) {
        try {
          i(c.next(t));
        } catch (t) {
          e(t);
        }
      }
      function o(t) {
        try {
          i(c.throw(t));
        } catch (t) {
          e(t);
        }
      }
      function i(t) {
        var e;
        t.done
          ? n(t.value)
          : ((e = t.value) instanceof u
              ? e
              : new u(function (t) {
                  t(e);
                })
            ).then(r, o);
      }
      i((c = c.apply(t, a || [])).next());
    });
  }
  function c(n, r) {
    var o,
      i,
      a,
      u = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      t = { next: e(0), throw: e(1), return: e(2) };
    return (
      "function" == typeof Symbol &&
        (t[Symbol.iterator] = function () {
          return this;
        }),
      t
    );
    function e(e) {
      return function (t) {
        return (function (e) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; u; )
            try {
              if (((o = 1), i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done)) return a;
              switch (((i = 0), a && (e = [2 & e[0], a.value]), e[0])) {
                case 0:
                case 1:
                  a = e;
                  break;
                case 4:
                  return u.label++, { value: e[1], done: !1 };
                case 5:
                  u.label++, (i = e[1]), (e = [0]);
                  continue;
                case 7:
                  (e = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    u = 0;
                    continue;
                  }
                  if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                    u.label = e[1];
                    break;
                  }
                  if (6 === e[0] && u.label < a[1]) {
                    (u.label = a[1]), (a = e);
                    break;
                  }
                  if (a && u.label < a[2]) {
                    (u.label = a[2]), u.ops.push(e);
                    break;
                  }
                  a[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              e = r.call(n, u);
            } catch (t) {
              (e = [6, t]), (i = 0);
            } finally {
              o = a = 0;
            }
          if (5 & e[0]) throw e[1];
          return { value: e[0] ? e[1] : void 0, done: !0 };
        })([e, t]);
      };
    }
  }
  function T(t) {
    var e = t.getBoundingClientRect();
    return { width: e.width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top };
  }
  function S(t) {
    if ("[object Window]" === t.toString()) return t;
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function b(t) {
    var e = S(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function k(t) {
    return t instanceof S(t).Element || t instanceof Element;
  }
  function x(t) {
    return t instanceof S(t).HTMLElement || t instanceof HTMLElement;
  }
  function s(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function A(t) {
    return (k(t) ? t.ownerDocument : t.document).documentElement;
  }
  function O(t) {
    return T(A(t)).left + b(t).scrollLeft;
  }
  function j(t) {
    return S(t).getComputedStyle(t);
  }
  function l(t) {
    var e = j(t),
      n = e.overflow,
      r = e.overflowX,
      o = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function m(t, e, n) {
    void 0 === n && (n = !1);
    var r,
      o,
      i = A(e),
      a = T(t),
      u = x(e),
      c = { scrollLeft: 0, scrollTop: 0 },
      f = { x: 0, y: 0 };
    return (
      (!u && (u || n)) || (("body" === s(e) && !l(i)) || (c = (r = e) !== S(r) && x(r) ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop } : b(r)), x(e) ? (((f = T(e)).x += e.clientLeft), (f.y += e.clientTop)) : i && (f.x = O(i))),
      { x: a.left + c.scrollLeft - f.x, y: a.top + c.scrollTop - f.y, width: a.width, height: a.height }
    );
  }
  function tt(t) {
    return { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight };
  }
  function p(t) {
    return "html" === s(t) ? t : t.assignedSlot || t.parentNode || t.host || A(t);
  }
  function v(t, e) {
    void 0 === e && (e = []);
    var n = (function t(e) {
        return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : x(e) && l(e) ? e : t(p(e));
      })(t),
      r = "body" === s(n),
      o = S(n),
      i = r ? [o].concat(o.visualViewport || [], l(n) ? n : []) : n,
      a = e.concat(i);
    return r ? a : a.concat(v(p(i)));
  }
  function r(t) {
    if (!x(t) || "fixed" === j(t).position) return null;
    var e = t.offsetParent;
    if (e) {
      var n = A(e);
      if ("body" === s(e) && "static" === j(e).position && "static" !== j(n).position) return n;
    }
    return e;
  }
  function et(t) {
    for (var e = S(t), n = r(t); n && 0 <= ["table", "td", "th"].indexOf(s(n)) && "static" === j(n).position; ) n = r(n);
    return (
      ((!n || "body" !== s(n) || "static" !== j(n).position) &&
        (n ||
          (function (t) {
            for (var e = p(t); x(e) && ["html", "body"].indexOf(s(e)) < 0; ) {
              var n = j(e);
              if ("none" !== n.transform || "none" !== n.perspective || (n.willChange && "auto" !== n.willChange)) return e;
              e = e.parentNode;
            }
            return null;
          })(t))) ||
      e
    );
  }
  window.process = { env: "production" };
  var nt = "top",
    rt = "bottom",
    ot = "right",
    it = "left",
    C = "auto",
    I = [nt, rt, ot, it],
    at = "start",
    d = "end",
    M = "clippingParents",
    W = "viewport",
    F = "popper",
    L = "reference",
    R = I.reduce(function (t, e) {
      return t.concat([e + "-" + at, e + "-" + d]);
    }, []),
    N = [].concat(I, [C]).reduce(function (t, e) {
      return t.concat([e, e + "-" + at, e + "-" + d]);
    }, []),
    y = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  function g(t) {
    var r = new Map(),
      o = new Set(),
      e = [];
    return (
      t.forEach(function (t) {
        r.set(t.name, t);
      }),
      t.forEach(function (t) {
        o.has(t.name) ||
          !(function n(t) {
            o.add(t.name),
              [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                var e;
                o.has(t) || ((e = r.get(t)) && n(e));
              }),
              e.push(t);
          })(t);
      }),
      e
    );
  }
  function ut(t) {
    return t.split("-")[0];
  }
  function h(t, e) {
    var n = Boolean(e.getRootNode && e.getRootNode().host);
    if (t.contains(e)) return !0;
    if (n) {
      var r = e;
      do {
        if (r && t.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function $(t) {
    return Object.assign(Object.assign({}, t), {}, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
  }
  function w(t, e) {
    return e === W
      ? $(
          ((d = S((p = t))),
          (h = A(p)),
          (m = d.visualViewport),
          (v = h.clientWidth),
          (y = h.clientHeight),
          (w = g = 0),
          m && ((v = m.width), (y = m.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((g = m.offsetLeft), (w = m.offsetTop))),
          { width: v, height: y, x: g + O(p), y: w })
        )
      : x(e)
      ? (((l = T((s = e))).top = l.top + s.clientTop),
        (l.left = l.left + s.clientLeft),
        (l.bottom = l.top + s.clientHeight),
        (l.right = l.left + s.clientWidth),
        (l.width = s.clientWidth),
        (l.height = s.clientHeight),
        (l.x = l.left),
        (l.y = l.top),
        l)
      : $(
          ((n = A(t)),
          (r = A(n)),
          (o = b(n)),
          (i = n.ownerDocument.body),
          (a = Math.max(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0)),
          (u = Math.max(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0)),
          (c = -o.scrollLeft + O(n)),
          (f = -o.scrollTop),
          "rtl" === j(i || r).direction && (c += Math.max(r.clientWidth, i ? i.clientWidth : 0) - a),
          { width: a, height: u, x: c, y: f })
        );
    var n, r, o, i, a, u, c, f, s, l, p, d, h, m, v, y, g, w;
  }
  function q(r, t, e) {
    var n,
      o,
      i,
      a =
        "clippingParents" === t
          ? ((o = v(p((n = r)))),
            k((i = 0 <= ["absolute", "fixed"].indexOf(j(n).position) && x(n) ? et(n) : n))
              ? o.filter(function (t) {
                  return k(t) && h(t, i) && "body" !== s(t);
                })
              : [])
          : [].concat(t),
      u = [].concat(a, [e]),
      c = u[0],
      f = u.reduce(function (t, e) {
        var n = w(r, e);
        return (t.top = Math.max(n.top, t.top)), (t.right = Math.min(n.right, t.right)), (t.bottom = Math.min(n.bottom, t.bottom)), (t.left = Math.max(n.left, t.left)), t;
      }, w(r, c));
    return (f.width = f.right - f.left), (f.height = f.bottom - f.top), (f.x = f.left), (f.y = f.top), f;
  }
  function ct(t) {
    return t.split("-")[1];
  }
  function ft(t) {
    return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y";
  }
  function D(t) {
    var e,
      n = t.reference,
      r = t.element,
      o = t.placement,
      i = o ? ut(o) : null,
      a = o ? ct(o) : null,
      u = n.x + n.width / 2 - r.width / 2,
      c = n.y + n.height / 2 - r.height / 2;
    switch (i) {
      case nt:
        e = { x: u, y: n.y - r.height };
        break;
      case rt:
        e = { x: u, y: n.y + n.height };
        break;
      case ot:
        e = { x: n.x + n.width, y: c };
        break;
      case it:
        e = { x: n.x - r.width, y: c };
        break;
      default:
        e = { x: n.x, y: n.y };
    }
    var f = i ? ft(i) : null;
    if (null != f) {
      var s = "y" === f ? "height" : "width";
      switch (a) {
        case at:
          e[f] = Math.floor(e[f]) - Math.floor(n[s] / 2 - r[s] / 2);
          break;
        case d:
          e[f] = Math.floor(e[f]) + Math.ceil(n[s] / 2 - r[s] / 2);
      }
    }
    return e;
  }
  function st() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function H(t) {
    return Object.assign(Object.assign({}, st()), t);
  }
  function P(n, t) {
    return t.reduce(function (t, e) {
      return (t[e] = n), t;
    }, {});
  }
  function lt(t, e) {
    void 0 === e && (e = {});
    var r,
      n = e.placement,
      o = void 0 === n ? t.placement : n,
      i = e.boundary,
      a = void 0 === i ? M : i,
      u = e.rootBoundary,
      c = void 0 === u ? W : u,
      f = e.elementContext,
      s = void 0 === f ? F : f,
      l = e.altBoundary,
      p = void 0 !== l && l,
      d = e.padding,
      h = void 0 === d ? 0 : d,
      m = H("number" != typeof h ? h : P(h, I)),
      v = s === F ? L : F,
      y = t.elements.reference,
      g = t.rects.popper,
      w = t.elements[p ? v : s],
      b = q(k(w) ? w : w.contextElement || A(t.elements.popper), a, c),
      x = T(y),
      O = D({ reference: x, element: g, strategy: "absolute", placement: o }),
      j = $(Object.assign(Object.assign({}, g), O)),
      S = s === F ? j : x,
      _ = { top: b.top - S.top + m.top, bottom: S.bottom - b.bottom + m.bottom, left: b.left - S.left + m.left, right: S.right - b.right + m.right },
      E = t.modifiersData.offset;
    return (
      s === F &&
        E &&
        ((r = E[o]),
        Object.keys(_).forEach(function (t) {
          var e = 0 <= [ot, rt].indexOf(t) ? 1 : -1,
            n = 0 <= [nt, rt].indexOf(t) ? "y" : "x";
          _[t] += r[n] * e;
        })),
      _
    );
  }
  var o = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function _() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function t(t) {
    void 0 === t && (t = {});
    var e = t.defaultModifiers,
      d = void 0 === e ? [] : e,
      n = t.defaultOptions,
      h = void 0 === n ? o : n;
    return function (a, u, e) {
      void 0 === e && (e = h);
      var n,
        r,
        f = { placement: "bottom", orderedModifiers: [], options: Object.assign(Object.assign({}, o), h), modifiersData: {}, elements: { reference: a, popper: u }, attributes: {}, styles: {} },
        c = [],
        s = !1,
        l = {
          state: f,
          setOptions: function (t) {
            p(), (f.options = Object.assign(Object.assign(Object.assign({}, h), f.options), t)), (f.scrollParents = { reference: k(a) ? v(a) : a.contextElement ? v(a.contextElement) : [], popper: v(u) });
            var e,
              n,
              r,
              o,
              i =
                ((r = [].concat(d, f.options.modifiers)),
                (o = r.reduce(function (t, e) {
                  var n = t[e.name];
                  return (t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, { options: Object.assign(Object.assign({}, n.options), e.options), data: Object.assign(Object.assign({}, n.data), e.data) }) : e), t;
                }, {})),
                (e = Object.keys(o).map(function (t) {
                  return o[t];
                })),
                (n = g(e)),
                y.reduce(function (t, e) {
                  return t.concat(
                    n.filter(function (t) {
                      return t.phase === e;
                    })
                  );
                }, []));
            return (
              (f.orderedModifiers = i.filter(function (t) {
                return t.enabled;
              })),
              f.orderedModifiers.forEach(function (t) {
                var e,
                  n = t.name,
                  r = t.options,
                  o = void 0 === r ? {} : r,
                  i = t.effect;
                "function" == typeof i && ((e = i({ state: f, name: n, instance: l, options: o })), c.push(e || function () {}));
              }),
              l.update()
            );
          },
          forceUpdate: function () {
            if (!s) {
              var t = f.elements,
                e = t.reference,
                n = t.popper;
              if (_(e, n)) {
                (f.rects = { reference: m(e, et(n), "fixed" === f.options.strategy), popper: tt(n) }),
                  (f.reset = !1),
                  (f.placement = f.options.placement),
                  f.orderedModifiers.forEach(function (t) {
                    return (f.modifiersData[t.name] = Object.assign({}, t.data));
                  });
                for (var r, o, i, a, u, c = 0; c < f.orderedModifiers.length; c++) {
                  !0 !== f.reset
                    ? ((o = (r = f.orderedModifiers[c]).fn), (a = void 0 === (i = r.options) ? {} : i), (u = r.name), "function" == typeof o && (f = o({ state: f, options: a, name: u, instance: l }) || f))
                    : ((f.reset = !1), (c = -1));
                }
              }
            }
          },
          update:
            ((n = function () {
              return new Promise(function (t) {
                l.forceUpdate(), t(f);
              });
            }),
            function () {
              return (r =
                r ||
                new Promise(function (t) {
                  Promise.resolve().then(function () {
                    (r = void 0), t(n());
                  });
                }));
            }),
          destroy: function () {
            p(), (s = !0);
          },
        };
      if (!_(a, u)) return l;
      function p() {
        c.forEach(function (t) {
          return t();
        }),
          (c = []);
      }
      return (
        l.setOptions(e).then(function (t) {
          !s && e.onFirstUpdate && e.onFirstUpdate(t);
        }),
        l
      );
    };
  }
  var E = { passive: !0 };
  var B = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function f(t) {
    var e,
      n,
      r,
      o,
      i,
      a,
      u = t.popper,
      c = t.popperRect,
      f = t.placement,
      s = t.offsets,
      l = t.position,
      p = t.gpuAcceleration,
      d = t.adaptive,
      h = ((r = (n = s).x), (o = n.y), (i = window.devicePixelRatio || 1), { x: Math.round(r * i) / i || 0, y: Math.round(o * i) / i || 0 }),
      m = h.x,
      v = h.y,
      y = s.hasOwnProperty("x"),
      g = s.hasOwnProperty("y"),
      w = it,
      b = nt,
      x = window;
    d && ((a = et(u)) === S(u) && (a = A(u)), f === nt && ((b = rt), (v -= a.clientHeight - c.height), (v *= p ? 1 : -1)), f === it && ((w = ot), (m -= a.clientWidth - c.width), (m *= p ? 1 : -1)));
    var O,
      j = Object.assign({ position: l }, d && B);
    return p
      ? Object.assign(Object.assign({}, j), {}, (((O = {})[b] = g ? "0" : ""), (O[w] = y ? "0" : ""), (O.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)"), O))
      : Object.assign(Object.assign({}, j), {}, (((e = {})[b] = g ? v + "px" : ""), (e[w] = y ? m + "px" : ""), (e.transform = ""), e));
  }
  var n = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function z(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return n[t];
    });
  }
  var i = { start: "end", end: "start" };
  function U(t) {
    return t.replace(/start|end/g, function (t) {
      return i[t];
    });
  }
  function pt(t, e, n) {
    return Math.max(t, Math.min(e, n));
  }
  function J(t, e, n) {
    return void 0 === n && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
  }
  function V(e) {
    return [nt, ot, rt, it].some(function (t) {
      return 0 <= e[t];
    });
  }
  var a = t({
    defaultModifiers: [
      {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            n = t.instance,
            r = t.options,
            o = r.scroll,
            i = void 0 === o || o,
            a = r.resize,
            u = void 0 === a || a,
            c = S(e.elements.popper),
            f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            i &&
              f.forEach(function (t) {
                t.addEventListener("scroll", n.update, E);
              }),
            u && c.addEventListener("resize", n.update, E),
            function () {
              i &&
                f.forEach(function (t) {
                  t.removeEventListener("scroll", n.update, E);
                }),
                u && c.removeEventListener("resize", n.update, E);
            }
          );
        },
        data: {},
      },
      {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            n = t.name;
          e.modifiersData[n] = D({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
        },
        data: {},
      },
      {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            a = void 0 === i || i,
            u = { placement: ut(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o };
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), f(Object.assign(Object.assign({}, u), {}, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), f(Object.assign(Object.assign({}, u), {}, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1 })))),
            (e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, { "data-popper-placement": e.placement }));
        },
        data: {},
      },
      {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var o = t.state;
          Object.keys(o.elements).forEach(function (t) {
            var e = o.styles[t] || {},
              n = o.attributes[t] || {},
              r = o.elements[t];
            x(r) &&
              s(r) &&
              (Object.assign(r.style, e),
              Object.keys(n).forEach(function (t) {
                var e = n[t];
                !1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e);
              }));
          });
        },
        effect: function (t) {
          var o = t.state,
            i = { popper: { position: o.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return (
            Object.assign(o.elements.popper.style, i.popper),
            o.elements.arrow && Object.assign(o.elements.arrow.style, i.arrow),
            function () {
              Object.keys(o.elements).forEach(function (t) {
                var e = o.elements[t],
                  n = o.attributes[t] || {},
                  r = Object.keys(o.styles.hasOwnProperty(t) ? o.styles[t] : i[t]).reduce(function (t, e) {
                    return (t[e] = ""), t;
                  }, {});
                x(e) &&
                  s(e) &&
                  (Object.assign(e.style, r),
                  Object.keys(n).forEach(function (t) {
                    e.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      },
      {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var s = t.state,
            e = t.options,
            n = t.name,
            r = e.offset,
            l = void 0 === r ? [0, 0] : r,
            o = N.reduce(function (t, e) {
              var n, r, o, i, a, u, c, f;
              return (
                (t[e] =
                  ((n = e),
                  (r = s.rects),
                  (o = l),
                  (i = ut(n)),
                  (a = 0 <= [it, nt].indexOf(i) ? -1 : 1),
                  (u = "function" == typeof o ? o(Object.assign(Object.assign({}, r), {}, { placement: n })) : o),
                  (c = (c = u[0]) || 0),
                  (f = ((f = u[1]) || 0) * a),
                  0 <= [it, ot].indexOf(i) ? { x: f, y: c } : { x: c, y: f })),
                t
              );
            }, {}),
            i = o[s.placement],
            a = i.x,
            u = i.y;
          null != s.modifiersData.popperOffsets && ((s.modifiersData.popperOffsets.x += a), (s.modifiersData.popperOffsets.y += u)), (s.modifiersData[n] = o);
        },
      },
      {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var n = t.state,
            e = t.options,
            r = t.name;
          if (!n.modifiersData[r]._skip) {
            for (
              var o = e.mainAxis,
                i = void 0 === o || o,
                a = e.altAxis,
                u = void 0 === a || a,
                c = e.fallbackPlacements,
                f = e.padding,
                s = e.boundary,
                l = e.rootBoundary,
                p = e.altBoundary,
                d = e.flipVariations,
                h = void 0 === d || d,
                m = e.allowedAutoPlacements,
                v = n.options.placement,
                y = ut(v),
                g =
                  c ||
                  (y === v || !h
                    ? [z(v)]
                    : (function (t) {
                        if (ut(t) === C) return [];
                        var e = z(t);
                        return [U(t), e, U(e)];
                      })(v)),
                w = [v].concat(g).reduce(function (t, e) {
                  return t.concat(
                    ut(e) === C
                      ? (function (n, t) {
                          void 0 === t && (t = {});
                          var e = t.placement,
                            r = t.boundary,
                            o = t.rootBoundary,
                            i = t.padding,
                            a = t.flipVariations,
                            u = t.allowedAutoPlacements,
                            c = void 0 === u ? N : u,
                            f = ct(e),
                            s = f
                              ? a
                                ? R
                                : R.filter(function (t) {
                                    return ct(t) === f;
                                  })
                              : I,
                            l = s.filter(function (t) {
                              return 0 <= c.indexOf(t);
                            });
                          0 === l.length && (l = s);
                          var p = l.reduce(function (t, e) {
                            return (t[e] = lt(n, { placement: e, boundary: r, rootBoundary: o, padding: i })[ut(e)]), t;
                          }, {});
                          return Object.keys(p).sort(function (t, e) {
                            return p[t] - p[e];
                          });
                        })(n, { placement: e, boundary: s, rootBoundary: l, padding: f, flipVariations: h, allowedAutoPlacements: m })
                      : e
                  );
                }, []),
                b = n.rects.reference,
                x = n.rects.popper,
                O = new Map(),
                j = !0,
                S = w[0],
                _ = 0;
              _ < w.length;
              _++
            ) {
              var E = w[_],
                T = ut(E),
                k = ct(E) === at,
                A = 0 <= [nt, rt].indexOf(T),
                M = A ? "width" : "height",
                W = lt(n, { placement: E, boundary: s, rootBoundary: l, altBoundary: p, padding: f }),
                F = A ? (k ? ot : it) : k ? rt : nt;
              b[M] > x[M] && (F = z(F));
              var L = z(F),
                $ = [];
              if (
                (i && $.push(W[T] <= 0),
                u && $.push(W[F] <= 0, W[L] <= 0),
                $.every(function (t) {
                  return t;
                }))
              ) {
                (S = E), (j = !1);
                break;
              }
              O.set(E, $);
            }
            if (j)
              for (var q = h ? 3 : 1; 0 < q; q--) {
                if (
                  "break" ===
                  (function (n) {
                    var t = w.find(function (t) {
                      var e = O.get(t);
                      if (e)
                        return e.slice(0, n).every(function (t) {
                          return t;
                        });
                    });
                    if (t) return (S = t), "break";
                  })(q)
                )
                  break;
              }
            n.placement !== S && ((n.modifiersData[r]._skip = !0), (n.placement = S), (n.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      },
      {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            n,
            r,
            o,
            i,
            a,
            u,
            c,
            f,
            s,
            l,
            p,
            d,
            h,
            m,
            v,
            y,
            g,
            w,
            b,
            x,
            O,
            j,
            S,
            _,
            E,
            T,
            k = t.state,
            A = t.options,
            M = t.name,
            W = A.mainAxis,
            F = void 0 === W || W,
            L = A.altAxis,
            $ = void 0 !== L && L,
            q = A.boundary,
            C = A.rootBoundary,
            I = A.altBoundary,
            R = A.padding,
            N = A.tether,
            D = void 0 === N || N,
            H = A.tetherOffset,
            P = void 0 === H ? 0 : H,
            B = lt(k, { boundary: q, rootBoundary: C, padding: R, altBoundary: I }),
            z = ut(k.placement),
            U = ct(k.placement),
            J = !U,
            V = ft(z),
            Q = "x" === V ? "y" : "x",
            G = k.modifiersData.popperOffsets,
            X = k.rects.reference,
            Y = k.rects.popper,
            K = "function" == typeof P ? P(Object.assign(Object.assign({}, k.rects), {}, { placement: k.placement })) : P,
            Z = { x: 0, y: 0 };
          G &&
            (F &&
              ((e = "y" === V ? nt : it),
              (n = "y" === V ? rt : ot),
              (r = "y" === V ? "height" : "width"),
              (o = G[V]),
              (i = G[V] + B[e]),
              (a = G[V] - B[n]),
              (u = D ? -Y[r] / 2 : 0),
              (c = U === at ? X[r] : Y[r]),
              (f = U === at ? -Y[r] : -X[r]),
              (s = k.elements.arrow),
              (l = D && s ? tt(s) : { width: 0, height: 0 }),
              (d = (p = k.modifiersData["arrow#persistent"] ? k.modifiersData["arrow#persistent"].padding : st())[e]),
              (h = p[n]),
              (m = pt(0, X[r], l[r])),
              (v = J ? X[r] / 2 - u - m - d - K : c - m - d - K),
              (y = J ? -X[r] / 2 + u + m + h + K : f + m + h + K),
              (w = (g = k.elements.arrow && et(k.elements.arrow)) ? ("y" === V ? g.clientTop || 0 : g.clientLeft || 0) : 0),
              (b = k.modifiersData.offset ? k.modifiersData.offset[k.placement][V] : 0),
              (x = G[V] + v - b - w),
              (O = G[V] + y - b),
              (j = pt(D ? Math.min(i, x) : i, o, D ? Math.max(a, O) : a)),
              (G[V] = j),
              (Z[V] = j - o)),
            $ && ((S = "x" === V ? nt : it), (_ = "x" === V ? rt : ot), (T = pt((E = G[Q]) + B[S], E, E - B[_])), (G[Q] = T), (Z[Q] = T - E)),
            (k.modifiersData[M] = Z));
        },
        requiresIfExists: ["offset"],
      },
      {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            n,
            r,
            o,
            i,
            a,
            u,
            c,
            f,
            s,
            l,
            p,
            d,
            h,
            m = t.state,
            v = t.name,
            y = m.elements.arrow,
            g = m.modifiersData.popperOffsets,
            w = ut(m.placement),
            b = ft(w),
            x = 0 <= [it, ot].indexOf(w) ? "height" : "width";
          y &&
            g &&
            ((n = m.modifiersData[v + "#persistent"].padding),
            (r = tt(y)),
            (o = "y" === b ? nt : it),
            (i = "y" === b ? rt : ot),
            (a = m.rects.reference[x] + m.rects.reference[b] - g[b] - m.rects.popper[x]),
            (u = g[b] - m.rects.reference[b]),
            (f = (c = et(y)) ? ("y" === b ? c.clientHeight || 0 : c.clientWidth || 0) : 0),
            (s = a / 2 - u / 2),
            (l = n[o]),
            (p = f - r[x] - n[i]),
            (h = pt(l, (d = f / 2 - r[x] / 2 + s), p)),
            (m.modifiersData[v] = (((e = {})[b] = h), (e.centerOffset = h - d), e)));
        },
        effect: function (t) {
          var e = t.state,
            n = t.options,
            r = t.name,
            o = n.element,
            i = void 0 === o ? "[data-popper-arrow]" : o,
            a = n.padding,
            u = void 0 === a ? 0 : a;
          null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && h(e.elements.popper, i) && ((e.elements.arrow = i), (e.modifiersData[r + "#persistent"] = { padding: H("number" != typeof u ? u : P(u, I)) }));
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            n = t.name,
            r = e.rects.reference,
            o = e.rects.popper,
            i = e.modifiersData.preventOverflow,
            a = lt(e, { elementContext: "reference" }),
            u = lt(e, { altBoundary: !0 }),
            c = J(a, r),
            f = J(u, o, i),
            s = V(c),
            l = V(f);
          (e.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: f, isReferenceHidden: s, hasPopperEscaped: l }),
            (e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, { "data-popper-reference-hidden": s, "data-popper-escaped": l }));
        },
      },
    ],
  });
  function Q(t, e, n) {
    return (
      t(
        (n = {
          path: e,
          exports: {},
          require: function (t, e) {
            return (function () {
              throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
            })(null == e && n.path);
          },
        }),
        n.exports
      ),
      n.exports
    );
  }
  var G = Q(function (t) {
      function e(t) {
        return null != t && null != t.constructor && t.constructor.prototype !== t && "string" == typeof t[n] ? t[n] : Object.prototype.toString.call(t).slice("[object ".length, -"]".length);
      }
      var n, i;
      t.exports =
        ((n = "@@type"),
        (i = new RegExp("^([\\s\\S]+)/([\\s\\S]+?)(?:@([0-9]+))?$")),
        (e.parse = function (t) {
          var e = null,
            n = t,
            r = 0,
            o = i.exec(t);
          return null != o && ((e = o[1]), (n = o[2]), null != o[3] && (r = Number(o[3]))), { namespace: e, name: n, version: r };
        }),
        e);
    }),
    X = { alt: "fantasy-land/alt", ap: "fantasy-land/ap", bimap: "fantasy-land/bimap", chain: "fantasy-land/chain", chainRec: "fantasy-land/chainRec", map: "fantasy-land/map", of: "fantasy-land/of", zero: "fantasy-land/zero" },
    Y = ["first", "second", "third", "fourth", "fifth"],
    K = "fluture",
    Z = "Future",
    dt = 5,
    ht = K + "/" + Z + "@" + dt;
  function mt(t, e) {
    (this.head = t), (this.tail = e);
  }
  mt.prototype.toJSON = function () {
    return bt(this);
  };
  var vt = new mt(null, null);
  function yt(t) {
    return t.tail === t;
  }
  function gt(t, e) {
    return new mt(t, e);
  }
  function wt(t) {
    for (var e = vt, n = t; !yt(n); ) (e = gt(n.head, e)), (n = n.tail);
    return e;
  }
  function bt(t) {
    for (var e = t, n = []; !yt(e); ) n.push(e.head), (e = e.tail);
    return n;
  }
  vt.tail = vt;
  var xt =
      Error.captureStackTrace ||
      function (t) {
        var e = new Error();
        "string" == typeof e.stack ? (t.stack = t.name + "\n" + e.stack.split("\n").slice(1).join("\n")) : (t.stack = t.name);
      },
    Ot = function (t) {
      return t;
    };
  function jt(t) {
    return Ot(t);
  }
  function St(t) {
    return jt(t);
  }
  var _t = Q(function (t) {
      function e(e) {
        return function (t) {
          return r(t) + ": " + r(e[t]);
        };
      }
      function n(t) {
        return Object.keys(t).sort();
      }
      function r(t) {
        if (0 <= i.indexOf(t)) return "<Circular>";
        switch (Object.prototype.toString.call(t)) {
          case "[object Boolean]":
            return "object" == typeof t ? "new Boolean (" + r(t.valueOf()) + ")" : t.toString();
          case "[object Number]":
            return "object" == typeof t ? "new Number (" + r(t.valueOf()) + ")" : 1 / t == -1 / 0 ? "-0" : t.toString(10);
          case "[object String]":
            return "object" == typeof t ? "new String (" + r(t.valueOf()) + ")" : JSON.stringify(t);
          case "[object Date]":
            return "new Date (" + r(isNaN(t.valueOf()) ? NaN : t.toISOString()) + ")";
          case "[object Error]":
            return "new " + t.name + " (" + r(t.message) + ")";
          case "[object Arguments]":
            return "function () { return arguments; } (" + Array.prototype.map.call(t, r).join(", ") + ")";
          case "[object Array]":
            i.push(t);
            try {
              return (
                "[" +
                t
                  .map(r)
                  .concat(
                    n(t)
                      .filter(function (t) {
                        return !/^\d+$/.test(t);
                      })
                      .map(e(t))
                  )
                  .join(", ") +
                "]"
              );
            } finally {
              i.pop();
            }
          case "[object Object]":
            i.push(t);
            try {
              return o in t && (null == t.constructor || t.constructor.prototype !== t) ? t[o]() : "{" + n(t).map(e(t)).join(", ") + "}";
            } finally {
              i.pop();
            }
          case "[object Set]":
            i.push(t);
            try {
              return "new Set (" + r(Array.from(t.values())) + ")";
            } finally {
              i.pop();
            }
          case "[object Map]":
            i.push(t);
            try {
              return "new Map (" + r(Array.from(t.entries())) + ")";
            } finally {
              i.pop();
            }
          default:
            return String(t);
        }
      }
      var o, i;
      t.exports = ((o = "@@show"), (i = []), r);
    }),
    Et =
      void 0 === Et
        ? function (t, e) {
            return setTimeout(t, 0, e);
          }
        : Et;
  function Tt() {}
  function kt(t, e) {
    return t(e);
  }
  function At(t) {
    Et(function () {
      throw t;
    });
  }
  function Mt(t) {
    return _t(t) + " :: " + G.parse(G(t)).name;
  }
  function Wt(t) {
    return new Error(t);
  }
  function Ft(t) {
    return new TypeError(t);
  }
  function Lt(t, e, n, r) {
    return Ft(t + "() expects its " + Y[e] + " argument to " + n + ".\n  Actual: " + Mt(r));
  }
  function $t(r) {
    return function (t, e, n) {
      return Lt(t, e, r, n);
    };
  }
  function qt(t, e, n) {
    var r,
      o = G.parse(G(e));
    return Ft(
      t +
        " to be a valid Future." +
        (o.name === Z
          ? "\n" +
            (o.namespace !== K
              ? ((r = o.namespace),
                "The Future was not created by " +
                  K +
                  ". Make sure you transform other Futures to " +
                  K +
                  " Futures. Got " +
                  (r ? "a Future from " + r : "an unscoped Future") +
                  ".\n  See: https://github.com/fluture-js/Fluture#casting-futures")
              : o.version !== dt
              ? "The Future was created by " +
                (o.version < dt ? "an older" : "a newer") +
                " version of " +
                K +
                ". This means that one of the sources which creates Futures is outdated. Update this source, or transform its created Futures to be compatible.\n  See: https://github.com/fluture-js/Fluture#casting-futures"
              : "Nothing seems wrong. Contact the Fluture maintainers.")
          : "") +
        "\n  Actual: " +
        _t(e) +
        " :: " +
        o.name +
        (n || "")
    );
  }
  function Ct(t, e, n, r) {
    return qt(t + "() expects its " + Y[e] + " argument", n, r);
  }
  function It(t, e, n) {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  }
  function Rt(t, e) {
    var n = (function (t, e) {
        var n;
        try {
          if (t instanceof Error) return t;
          n = "A Non-Error was thrown from a Future: " + _t(t);
        } catch (t) {
          n = "Something was thrown from a Future, but it could not be converted to String";
        }
        var r = Wt(n);
        return xt(r, e), r;
      })(t, Rt),
      r = (function (t, e) {
        for (var n = e, r = wt(t); !yt(r); ) (n = gt(r.head, n)), (r = r.tail);
        return n;
      })(n.context || vt, e.context),
      o = Wt(n.message);
    return It(o, "future", n.future || e), It(o, "reason", n.reason || n), It(o, "stack", o.reason.stack), Nt(o, r);
  }
  function Nt(t, e) {
    return (
      It(t, "context", e),
      It(
        t,
        "stack",
        t.stack +
          (function (t) {
            var e = "",
              n = t;
            for (; n !== vt; ) (e = e + "\n" + n.head.stack), (n = n.tail);
            return e;
          })(e)
      ),
      t
    );
  }
  function Dt(t) {
    return "function" == typeof t;
  }
  function Ht(t) {
    return null !== t && "object" == typeof t;
  }
  function Pt(t, e) {
    return null != e && Dt(e[t]);
  }
  function Bt(t) {
    return Pt(X.map, t);
  }
  function zt(t) {
    return Bt(t) && Pt(X.ap, t);
  }
  function Ut(t) {
    return { done: !1, value: t };
  }
  function Jt(t) {
    return { done: !0, value: t };
  }
  function Vt(t) {
    for (var e = new Array(t.arity), n = 1; n <= t.arity; n++) e[n - 1] = t["$" + String(n)];
    return e;
  }
  function Qt(t) {
    return " (" + _t(t) + ")";
  }
  var Gt = {
      pred: function () {
        return !0;
      },
      error: $t("be anything"),
    },
    Xt = { pred: Dt, error: $t("be a Function") },
    Yt = { pred: ne, error: Ct },
    Kt = {
      pred: function (t) {
        return t === 1 / 0 || ("number" == typeof t && 0 < t && t % 1 == 0);
      },
      error: $t("be a positive Integer"),
    };
  function Zt(t, e, n, r, o) {
    if (r.length < 2 && n.pred(r[0])) return jt(o);
    var i,
      a =
        1 < r.length
          ? ((i = r),
            new TypeError(
              e.name +
                "() expects to be called with a single argument per invocation\n  Saw: " +
                i.length +
                " arguments" +
                Array.prototype.slice
                  .call(i)
                  .map(function (t, e) {
                    return "\n  " + (Y[e] ? Y[e].charAt(0).toUpperCase() + Y[e].slice(1) : "Argument " + String(e + 1)) + ": " + Mt(t);
                  })
                  .join("")
            ))
          : n.error(e.name, t - 1, r[0]);
    throw (xt(a, e), Nt(a, o));
  }
  function te(t, e, n) {
    return Zt(1, t, e, n, vt);
  }
  function ee(t) {
    var e = te(ee, Xt, arguments);
    return new oe(e, t);
  }
  function ne(t) {
    return t instanceof ee || G(t) === ht;
  }
  function re(t, e, n) {
    function r(t, e, n, r) {
      (this.context = t), (this.$1 = e), (this.$2 = n), (this.$3 = r);
    }
    return ((r.prototype = Object.create(ee.prototype)).arity = t), (r.prototype.name = e), (r.prototype._interpret = n), r;
  }
  (ee["@@type"] = ht),
    (ee.constructor = { prototype: ee }),
    (ee[X.of] = pe),
    (ee[X.chainRec] = function (n, t) {
      return pe(Ut(t))._transform(
        new xe(vt, function t(e) {
          return e.done ? pe(e.value) : n(Ut, Jt, e.value)._transform(new xe(vt, t));
        })
      );
    }),
    (ee.prototype["@@type"] = ht),
    (ee.prototype["@@show"] = function () {
      return this.toString();
    }),
    (ee.prototype.pipe = function (t) {
      if (!Dt(t)) throw Lt("Future#pipe", 0, "be a Function", t);
      return t(this);
    }),
    (ee.prototype[X.ap] = function (t) {
      var e = St(vt);
      return t._transform(new ye(e, this));
    }),
    (ee.prototype[X.map] = function (t) {
      var e = St(vt);
      return this._transform(new we(e, t));
    }),
    (ee.prototype[X.bimap] = function (t, e) {
      var n = St(vt);
      return this._transform(new be(n, t, e));
    }),
    (ee.prototype[X.chain] = function (t) {
      var e = St(vt);
      return this._transform(new xe(e, t));
    }),
    (ee.prototype[X.alt] = function (t) {
      var e = St(vt);
      return this._transform(new ge(e, t));
    }),
    (ee.prototype.extractLeft = function () {
      return [];
    }),
    (ee.prototype.extractRight = function () {
      return [];
    }),
    (ee.prototype._transform = function (t) {
      return new de(t.context, this, gt(t, vt));
    }),
    (ee.prototype.isTransformer = !1),
    (ee.prototype.context = vt),
    (ee.prototype.arity = 0),
    (ee.prototype.name = "future"),
    (ee.prototype.toString = function () {
      return this.name + Vt(this).map(Qt).join("");
    }),
    (ee.prototype.toJSON = function () {
      return { $: ht, kind: "interpreter", type: this.name, args: Vt(this) };
    });
  var oe = re(1, "Future", function (e, n, r) {
      var t = this.$1,
        o = !1,
        i = Tt,
        a = function () {
          o = !0;
        };
      try {
        i = t(
          function (t) {
            (a = function () {
              (o = !1), n(t);
            }),
              o && a();
          },
          function (t) {
            (a = function () {
              (o = !1), r(t);
            }),
              o && a();
          }
        );
      } catch (t) {
        return e(Rt(t, this)), Tt;
      }
      return Dt(i) && 0 === i.length
        ? (a(),
          function () {
            o && ((o = !1), i && i());
          })
        : (e(Rt(Ft("The computation was expected to return a nullary cancellation function\n  Actual: " + _t(i)), this)), Tt);
    }),
    ie = re(0, "never", function () {
      return Tt;
    });
  ie.prototype._isNever = !0;
  var ae = new ie(vt),
    ue = re(1, "crash", function (t) {
      return t(this.$1), Tt;
    });
  function ce(t) {
    return new ue(te(ce, Gt, arguments), t);
  }
  var fe = re(1, "reject", function (t, e) {
    return e(this.$1), Tt;
  });
  function se(t) {
    return new fe(te(se, Gt, arguments), t);
  }
  fe.prototype.extractLeft = function () {
    return [this.$1];
  };
  var le = re(1, "resolve", function (t, e, n) {
    return n(this.$1), Tt;
  });
  function pe(t) {
    return new le(te(pe, Gt, arguments), t);
  }
  le.prototype.extractRight = function () {
    return [this.$1];
  };
  var de = re(2, "transform", function (n, r, o) {
    var i,
      a,
      u,
      c,
      f = vt,
      s = vt,
      l = Tt,
      p = !0;
    function d() {
      var t = s.head;
      return (s = s.tail), t;
    }
    function h(t) {
      if (((u = !0), (i = t).isTransformer)) {
        for (var e = i.$2; !yt(e); ) (f = gt(e.head, f)), (e = e.tail);
        i = i.$1;
      }
      p &&
        (function () {
          p = !1;
          for (;;) {
            if (
              ((u = !1),
              (a = (function () {
                var t = f.head;
                return (f = f.tail), t;
              })()))
            )
              (l = i._interpret(w, m, v)),
                u ||
                  (function () {
                    f = wt(f);
                    for (; f !== vt; ) {
                      if (((c = f.head.run(y)), u)) return;
                      (s = gt(c, s)), (f = f.tail);
                    }
                    a = a.run(y);
                  })();
            else {
              if (!(a = d())) break;
              l = i._interpret(w, m, v);
            }
            if (!u) return (p = !0);
          }
          l = i._interpret(w, r, o);
        })();
    }
    function m(t) {
      h(a.rejected(t));
    }
    function v(t) {
      h(a.resolved(t));
    }
    function y(t, e) {
      if ((l(), (f = vt), p && a !== e)) for (a.cancel(); (c = d()) && c !== e; ) c.cancel();
      h(t);
    }
    function g() {
      for (l(), a && a.cancel(); (c = d()); ) c.cancel();
    }
    function w(t) {
      g(), (u = !0), (f = s = vt);
      var e = Rt(t, i);
      (i = ae), n(e);
    }
    return h(this), g;
  });
  (de.prototype.isTransformer = !0),
    (de.prototype._transform = function (t) {
      return new de(t.context, this.$1, gt(t, this.$2));
    }),
    (de.prototype.toString = function () {
      return bt(wt(this.$2)).reduce(function (t, e) {
        return e.name + Vt(e).map(Qt).join("") + " (" + t + ")";
      }, this.$1.toString());
    });
  var he = {
    rejected: function (t) {
      return this.cancel(), new fe(this.context, t);
    },
    resolved: function (t) {
      return this.cancel(), new le(this.context, t);
    },
    run: function () {
      return this;
    },
    cancel: Tt,
    context: vt,
    arity: 0,
    name: "transform",
    toJSON: function () {
      return { $: ht, kind: "transformation", type: this.name, args: Vt(this) };
    },
  };
  function me(n) {
    return function (t) {
      var e;
      try {
        e = n.call(this, t);
      } catch (t) {
        return new ue(this.context, t);
      }
      return ne(e) ? e : new ue(this.context, qt(this.name + " expects the return value from the function it's given", e, "\n  When called with: " + _t(t)));
    };
  }
  function ve(t, e, n) {
    function r(t, e, n) {
      (this.context = t), (this.$1 = e), (this.$2 = n);
    }
    return (
      ((r.prototype = Object.create(he)).arity = t),
      (r.prototype.name = e),
      "function" == typeof n.rejected && (r.prototype.rejected = me(n.rejected)),
      "function" == typeof n.resolved && (r.prototype.resolved = me(n.resolved)),
      "function" == typeof n.run && (r.prototype.run = n.run),
      r
    );
  }
  var ye = ve(1, "ap", {
      resolved: function (t) {
        if (Dt(t)) return this.$1._transform(new we(this.context, t));
        throw Ft("ap expects the second Future to resolve to a Function\n  Actual: " + _t(t));
      },
    }),
    ge = ve(1, "alt", {
      rejected: function () {
        return this.$1;
      },
    }),
    we = ve(1, "map", {
      resolved: function (t) {
        return new le(this.context, kt(this.$1, t));
      },
    }),
    be = ve(2, "bimap", {
      rejected: function (t) {
        return new fe(this.context, kt(this.$1, t));
      },
      resolved: function (t) {
        return new le(this.context, kt(this.$2, t));
      },
    }),
    xe = ve(1, "chain", {
      resolved: function (t) {
        return kt(this.$1, t);
      },
    });
  re(2, "after", function (t, e, n) {
    var r = setTimeout(n, this.$1, this.$2);
    return function () {
      clearTimeout(r);
    };
  }).prototype.extractRight = function () {
    return [this.$2];
  };
  var Oe = {
    pred: function (t) {
      return Bt(t) && Pt(X.alt, t);
    },
    error: $t("have Alt implemented"),
  };
  function je(r) {
    if (ne(r)) {
      var o = te(je, Yt, arguments);
      return function t(e) {
        var n = Zt(2, t, Yt, arguments, o);
        return e._transform(new ge(n, r));
      };
    }
    var n = te(je, Oe, arguments);
    return function t(e) {
      return Zt(2, t, Oe, arguments, n), r[X.alt](e);
    };
  }
  var Se = ve(1, "and", {
      resolved: function () {
        return this.$1;
      },
    }),
    _e = { pred: zt, error: $t("have Apply implemented") };
  function Ee(r) {
    if (ne(r)) {
      var o = te(Ee, Yt, arguments);
      return function t(e) {
        var n = Zt(2, t, Yt, arguments, o);
        return e._transform(new ye(n, r));
      };
    }
    var n = te(Ee, _e, arguments);
    return function t(e) {
      return Zt(2, t, _e, arguments, n), r[X.ap](e);
    };
  }
  var Te = re(2, "encaseP", function (e, n, r) {
    var t,
      o,
      i,
      a,
      u = !0,
      c = this.$1,
      f = this.$2;
    try {
      t = c(f);
    } catch (t) {
      return e(Rt(t, this)), Tt;
    }
    return (a = t) instanceof Promise || (null != a && Dt(a.then))
      ? (t.then(
          function (t) {
            u && ((u = !1), r(t));
          },
          function (t) {
            u && ((u = !1), n(t));
          }
        ),
        function () {
          u = !1;
        })
      : (e(Rt(((o = c), (i = f), Ft("encaseP() expects the function it's given to return a Promise/Thenable\n  Actual: " + _t(t) + "\n  From calling: " + _t(o) + "\n  With: " + _t(i))), this)), Tt);
  });
  function ke(r) {
    var o = te(ke, Xt, arguments);
    return function t(e) {
      var n = Zt(2, t, Gt, arguments, o);
      return new Te(n, r, e);
    };
  }
  var Ae = re(2, "encase", function (t, e, n) {
    var r,
      o = this.$1;
    try {
      r = o(this.$2);
    } catch (t) {
      return e(t), Tt;
    }
    return n(r), Tt;
  });
  function Me(r) {
    var o = te(Me, Xt, arguments);
    return function t(e) {
      var n = Zt(2, t, Gt, arguments, o);
      return new Ae(n, r, e);
    };
  }
  var We = {
    pred: function (t) {
      return Bt(t) && Pt(X.bimap, t);
    },
    error: $t("have Bifunctor implemented"),
  };
  function Fe(i) {
    var e = te(Fe, Xt, arguments);
    return function t(r) {
      var o = Zt(2, t, Xt, arguments, e);
      return function t(e) {
        var n = Zt(3, t, We, arguments, o);
        return ne(e) ? e._transform(new be(n, i, r)) : e[X.bimap](i, r);
      };
    };
  }
  ve(2, "bichain", {
    rejected: function (t) {
      return kt(this.$1, t);
    },
    resolved: function (t) {
      return kt(this.$2, t);
    },
  });
  function Le(t) {
    var e = this;
    (e.rec = Tt),
      (e.rej = Tt),
      (e.res = Tt),
      (e.crashed = !1),
      (e.rejected = !1),
      (e.resolved = !1),
      (e.value = null),
      (e.cancel = t._interpret(
        function (t) {
          (e.value = t), (e.crashed = !0), (e.cancel = Tt), e.rec(t);
        },
        function (t) {
          (e.value = t), (e.rejected = !0), (e.cancel = Tt), e.rej(t);
        },
        function (t) {
          (e.value = t), (e.resolved = !0), (e.cancel = Tt), e.res(t);
        }
      ));
  }
  function $e(t, e) {
    t(ce(e));
  }
  function qe(t, e) {
    t(se(e));
  }
  function Ce(t, o, i, a, e) {
    var u = ve(
      1,
      t,
      Object.assign(
        {
          run: function (e) {
            var t = new Le(this.$1),
              n = new u(this.context, t);
            function r(t) {
              e(t, n);
            }
            return (
              (n.cancel = t._interpret(
                function (t) {
                  o(r, t);
                },
                function (t) {
                  i(r, t);
                },
                function (t) {
                  a(r, t);
                }
              )),
              n
            );
          },
        },
        e
      )
    );
    return u;
  }
  (Le.prototype = Object.create(ee.prototype))._interpret = function (t, e, n) {
    return this.crashed ? t(this.value) : this.rejected ? e(this.value) : this.resolved ? n(this.value) : ((this.rec = t), (this.rej = e), (this.res = n)), this.cancel;
  };
  var Ie = ve(1, "pair", {
      resolved: function (t) {
        return new le(this.context, [t, this.$1]);
      },
    }),
    Re = Ce("both", $e, qe, Tt, {
      resolved: function (t) {
        return this.$1._transform(new Ie(this.context, t));
      },
    });
  function Ne(r) {
    var o = te(Ne, Yt, arguments);
    return function t(e) {
      var n = Zt(2, t, Yt, arguments, o);
      return e._transform(new Re(n, r));
    };
  }
  function De(t, e, n) {
    (this[2] = t), (this[3] = e), (this[4] = n);
  }
  var He = re(1, "cache", function (t, e, n) {
    var r = Tt;
    switch (this._state) {
      case 1:
        r = this._addToQueue(t, e, n);
        break;
      case 2:
        t(this._value);
        break;
      case 3:
        e(this._value);
        break;
      case 4:
        n(this._value);
        break;
      default:
        (this._queue = []), (r = this._addToQueue(t, e, n)), this.run();
    }
    return r;
  });
  (He.prototype._cancel = Tt),
    (He.prototype._queue = null),
    (He.prototype._queued = 0),
    (He.prototype._value = void 0),
    (He.prototype._state = 0),
    (He.prototype.extractLeft = function () {
      return 3 === this._state ? [this._value] : [];
    }),
    (He.prototype.extractRight = function () {
      return 4 === this._state ? [this._value] : [];
    }),
    (He.prototype._addToQueue = function (t, e, n) {
      var r = this;
      if (1 < r._state) return Tt;
      var o = r._queue.push(new De(t, e, n)) - 1;
      return (
        (r._queued = r._queued + 1),
        function () {
          1 < r._state || ((r._queue[o] = void 0), (r._queued = r._queued - 1), 0 === r._queued && r.reset());
        }
      );
    }),
    (He.prototype._drainQueue = function () {
      if (!(this._state <= 1) && 0 !== this._queued) {
        for (var t = this._queue, e = t.length, n = this._state, r = this._value, o = 0; o < e; o++) t[o] && t[o][n](r), (t[o] = void 0);
        (this._queue = void 0), (this._queued = 0);
      }
    }),
    (He.prototype.crash = function (t) {
      1 < this._state || ((this._value = t), (this._state = 2), this._drainQueue());
    }),
    (He.prototype.reject = function (t) {
      1 < this._state || ((this._value = t), (this._state = 3), this._drainQueue());
    }),
    (He.prototype.resolve = function (t) {
      1 < this._state || ((this._value = t), (this._state = 4), this._drainQueue());
    }),
    (He.prototype.run = function () {
      var e = this;
      0 < e._state ||
        ((e._state = 1),
        (e._cancel = e.$1._interpret(
          function (t) {
            e.crash(t);
          },
          function (t) {
            e.reject(t);
          },
          function (t) {
            e.resolve(t);
          }
        )));
    }),
    (He.prototype.reset = function () {
      0 !== this._state && (1 === this._state && this._cancel(), (this._cancel = Tt), (this._queue = []), (this._queued = 0), (this._value = void 0), (this._state = 0));
    });
  ve(1, "chainRej", {
    rejected: function (t) {
      return kt(this.$1, t);
    },
  });
  var Pe = {
    pred: function (t) {
      return zt(t) && Pt(X.chain, t);
    },
    error: $t("have Chain implemented"),
  };
  function Be(r) {
    var o = te(Be, Xt, arguments);
    return function t(e) {
      var n = Zt(2, t, Pe, arguments, o);
      return ne(e) ? e._transform(new xe(n, r)) : e[X.chain](r);
    };
  }
  var ze = ve(2, "coalesce", {
    rejected: function (t) {
      return new le(this.context, kt(this.$1, t));
    },
    resolved: function (t) {
      return new le(this.context, kt(this.$2, t));
    },
  });
  function Ue(i) {
    var e = te(Ue, Xt, arguments);
    return function t(r) {
      var o = Zt(2, t, Xt, arguments, e);
      return function t(e) {
        var n = Zt(3, t, Yt, arguments, o);
        return e._transform(new ze(n, i, r));
      };
    };
  }
  function Je(o) {
    var e = te(Je, Xt, arguments);
    return function t(n) {
      var r = Zt(2, t, Xt, arguments, e);
      return function t(e) {
        return Zt(3, t, Yt, arguments, r), e._interpret(At, o, n);
      };
    };
  }
  re(1, "go", function (e, n, r) {
    var o,
      i,
      a,
      t,
      u = this,
      c = 0,
      f = Tt;
    function s(t) {
      e(Rt(t, u));
    }
    try {
      a = u.$1();
    } catch (t) {
      return s(t), Tt;
    }
    if (!Ht((t = a)) || !Dt(t.next)) return s(Lt("go", 0, 'return an iterator, maybe you forgot the "*"', a)), Tt;
    function l(t) {
      if (((i = t), 2 === c)) return p();
      c = 1;
    }
    function p() {
      for (;;) {
        try {
          o = a.next(i);
        } catch (t) {
          return s(t);
        }
        if (!Ht((t = o)) || "boolean" != typeof t.done) return s(Ft("The iterator did not return a valid iteration from iterator.next()\n  Actual: " + _t(o)));
        if (o.done) break;
        if (!ne(o.value)) return s(qt("go() expects the value produced by the iterator", o.value, "\n  Tip: If you're using a generator, make sure you always yield a Future"));
        if (((c = 0), (f = o.value._interpret(s, n, l)), 0 === c)) return (c = 2);
      }
      var t;
      r(o.value);
    }
    return (
      p(),
      function () {
        f();
      }
    );
  });
  re(3, "hook", function (e, n, r) {
    var o,
      i,
      a = this,
      t = this.$1,
      u = this.$2,
      c = this.$3,
      f = Tt,
      s = Tt;
    function l() {
      s(i);
    }
    function p(t) {
      e(Rt(t, a));
    }
    function d() {
      var t, e;
      try {
        t = u(o);
      } catch (t) {
        return p(t), 0;
      }
      if (!ne(t)) return p(((e = o), qt("hook() expects the return value from the first function it's given", t, "\n  From calling: " + _t(u) + "\n  With: " + _t(e)))), 0;
      (x = m), t._interpret(p, v, l);
    }
    function h() {
      f(), d(), m();
    }
    function m() {
      s = Tt;
    }
    function v(t) {
      p(new Error("The disposal Future rejected with " + _t(t)));
    }
    function y(t) {
      (s = p), (i = t), d();
    }
    function g(t) {
      (s = n), (i = t), d();
    }
    function w(t) {
      (s = r), (i = t), d();
    }
    var b = t._interpret(p, n, function (t) {
        var e, n;
        o = t;
        try {
          e = c(o);
        } catch (t) {
          return y(t);
        }
        if (!ne(e)) return y(((n = o), qt("hook() expects the return value from the second function it's given", e, "\n  From calling: " + _t(c) + "\n  With: " + _t(n))));
        (x = h), (f = e._interpret(y, g, w));
      }),
      x = x || b;
    return function () {
      (e = At), x();
    };
  }),
    ve(1, "lastly", {
      rejected: function (t) {
        return this.$1._transform(new Se(this.context, new fe(this.context, t)));
      },
      resolved: function (t) {
        return this.$1._transform(new Se(this.context, new le(this.context, t)));
      },
    });
  var Ve = ve(1, "mapRej", {
    rejected: function (t) {
      return new fe(this.context, kt(this.$1, t));
    },
  });
  function Qe(r) {
    var o = te(Qe, Xt, arguments);
    return function t(e) {
      var n = Zt(2, t, Yt, arguments, o);
      return e._transform(new Ve(n, r));
    };
  }
  var Ge = { pred: Bt, error: $t("have Functor implemented") };
  function Xe(r) {
    var o = te(Xe, Xt, arguments);
    return function t(e) {
      var n = Zt(2, t, Ge, arguments, o);
      return ne(e) ? e._transform(new we(n, r)) : e[X.map](r);
    };
  }
  re(1, "node", function (e, n, r) {
    var o = !1,
      i = function () {
        o = !0;
      };
    try {
      kt(this.$1, function (t, e) {
        (i = t
          ? function () {
              (o = !1), n(t);
            }
          : function () {
              (o = !1), r(e);
            }),
          o && i();
      });
    } catch (t) {
      return e(Rt(t, this)), (o = !1), Tt;
    }
    return (
      i(),
      function () {
        o = !1;
      }
    );
  });
  var Ye = Ce("pap", $e, qe, Tt, {
    resolved: function (t) {
      if (Dt(t)) return this.$1._transform(new we(this.context, t));
      throw Ft("pap expects the second Future to resolve to a Function\n  Actual: " + _t(t));
    },
  });
  var Ke = {
      pred: function (t) {
        if (((e = t), !Array.isArray(e))) return !1;
        for (var e, n = 0; n < t.length; n++) if (!ne(t[n])) return !1;
        return !0;
      },
      error: $t("be an Array of valid Futures"),
    },
    Ze = re(2, "parallel", function (n, r, o) {
      var i = this,
        t = this.$2,
        a = t.length,
        e = Math.min(this.$1, a),
        u = new Array(a),
        c = new Array(a),
        f = 0,
        s = 0,
        l = !1,
        p = Tt;
      function d() {
        (o = r = n = Tt), (f = a);
        for (var t = 0; t < a; t++) u[t] && u[t]();
      }
      function h() {
        for (l = !1; f < a && s < e; )
          !(function (e) {
            s++,
              (u[e] = t[e]._interpret(
                function (t) {
                  (p = n), (u[e] = Tt), d(), p(Rt(t, i));
                },
                function (t) {
                  (p = r), (u[e] = Tt), d(), p(t);
                },
                function (t) {
                  (u[e] = Tt), (c[e] = t), s--, f === a && 0 === s ? o(c) : l && h();
                }
              ));
          })(f++);
        l = !0;
      }
      return h(), d;
    }),
    tn = pe([]);
  var en = Ce(
    "race",
    $e,
    qe,
    function (t, e) {
      t(pe(e));
    },
    {}
  );
  function nn(r) {
    var o = te(nn, Yt, arguments);
    return function t(e) {
      var n = Zt(2, t, Yt, arguments, o);
      return e._transform(new en(n, r));
    };
  }
  function rn(t) {
    this.sequential = t;
  }
  function on(t) {
    if (!ne(t)) throw Ct(on.name, 0, t);
    return new rn(t);
  }
  rn.prototype = Object.create(on.prototype);
  var an = K + "/ConcurrentFuture@" + dt,
    un = new rn(ae);
  (on["@@type"] = an),
    (on.constructor = { prototype: on }),
    (on[X.of] = function (t) {
      return new rn(pe(t));
    }),
    (on[X.zero] = function () {
      return un;
    }),
    (on.prototype["@@type"] = an),
    (on.prototype["@@show"] = function () {
      return this.toString();
    }),
    (on.prototype.toString = function () {
      return "Par (" + this.sequential.toString() + ")";
    }),
    (on.prototype[X.map] = function (t) {
      var e = St(vt);
      return new rn(this.sequential._transform(new we(e, t)));
    }),
    (on.prototype[X.ap] = function (t) {
      var e = St(vt);
      return new rn(t.sequential._transform(new Ye(e, this.sequential)));
    }),
    (on.prototype[X.alt] = function (t) {
      var e = St(vt);
      return new rn(t.sequential._transform(new en(e, this.sequential)));
    }),
    (re(2, "rejectAfter", function (t, e) {
      var n = setTimeout(e, this.$1, this.$2);
      return function () {
        clearTimeout(n);
      };
    }).prototype.extractLeft = function () {
      return [this.$2];
    });
  ve(0, "swap", {
    resolved: function (t) {
      return new fe(this.context, t);
    },
    rejected: function (t) {
      return new le(this.context, t);
    },
  });
  function cn(t) {
    return t;
  }
  function fn(t) {
    return "Left" === t._tag;
  }
  function sn(t) {
    return { _tag: "Left", left: t };
  }
  function ln(t) {
    return { _tag: "Right", right: t };
  }
  function pn(r) {
    return function (t) {
      return (n = r), fn((e = t)) ? e : ln(n(e.right));
      var e, n;
    };
  }
  var dn = function (t, e, n, r, o, i, a, u, c, f) {
    switch (arguments.length) {
      case 1:
        return t;
      case 2:
        return e(t);
      case 3:
        return n(e(t));
      case 4:
        return r(n(e(t)));
      case 5:
        return o(r(n(e(t))));
      case 6:
        return i(o(r(n(e(t)))));
      case 7:
        return a(i(o(r(n(e(t))))));
      case 8:
        return u(a(i(o(r(n(e(t)))))));
      case 9:
        return c(u(a(i(o(r(n(e(t))))))));
      case 10:
        return f(c(u(a(i(o(r(n(e(t)))))))));
    }
  };
  var hn,
    mn,
    vn = {
      URI: "Fluture/Future",
      map: function (t, e) {
        return Xe(e)(t);
      },
      of: pe,
      ap: function (t, e) {
        return Ee(e)(t);
      },
      chain: function (t, e) {
        return Be(e)(t);
      },
      bimap: function (t, e, n) {
        return Fe(e)(n)(t);
      },
      mapLeft: function (t, e) {
        return Qe(e)(t);
      },
      alt: function (t, e) {
        return je(e())(t);
      },
      chainRec: function (t, o) {
        return (function t(e) {
          return vn.chain(
            o(e),
            ((n = t),
            (r = pe),
            function (t) {
              return fn(t) ? n(t.left) : r(t.right);
            })
          );
          var n, r;
        })(t);
      },
      throwError: se,
      fromTask: function (t) {
        return ke.apply(this, arguments)(void 0);
      },
      fromIO: function (t) {
        return Me.apply(this, arguments)(void 0);
      },
    },
    yn = ((mn = {}),
    "function" == typeof (hn = vn).map &&
      (mn.map = function (e) {
        return function (t) {
          return hn.map(t, e);
        };
      }),
    "function" == typeof hn.contramap &&
      (mn.contramap = function (e) {
        return function (t) {
          return hn.contramap(t, e);
        };
      }),
    "function" == typeof hn.mapWithIndex &&
      (mn.mapWithIndex = function (e) {
        return function (t) {
          return hn.mapWithIndex(t, e);
        };
      }),
    "function" == typeof hn.ap &&
      ((mn.ap = function (e) {
        return function (t) {
          return hn.ap(t, e);
        };
      }),
      (mn.apFirst = function (e) {
        return function (t) {
          return hn.ap(
            hn.map(t, function (t) {
              return function () {
                return t;
              };
            }),
            e
          );
        };
      }),
      (mn.apSecond = function (e) {
        return function (t) {
          return hn.ap(
            hn.map(t, function () {
              return function (t) {
                return t;
              };
            }),
            e
          );
        };
      })),
    "function" == typeof hn.chain &&
      ((mn.chain = function (e) {
        return function (t) {
          return hn.chain(t, e);
        };
      }),
      (mn.chainFirst = function (e) {
        return function (t) {
          return hn.chain(t, function (t) {
            return hn.map(e(t), function () {
              return t;
            });
          });
        };
      }),
      (mn.flatten = function (t) {
        return hn.chain(t, cn);
      })),
    "function" == typeof hn.bimap &&
      ((mn.bimap = function (e, n) {
        return function (t) {
          return hn.bimap(t, e, n);
        };
      }),
      (mn.mapLeft = function (e) {
        return function (t) {
          return hn.mapLeft(t, e);
        };
      })),
    "function" == typeof hn.extend &&
      ((mn.extend = function (e) {
        return function (t) {
          return hn.extend(t, e);
        };
      }),
      (mn.duplicate = function (t) {
        return hn.extend(t, cn);
      })),
    "function" == typeof hn.reduce &&
      ((mn.reduce = function (e, n) {
        return function (t) {
          return hn.reduce(t, e, n);
        };
      }),
      (mn.foldMap = function (t) {
        var n = hn.foldMap(t);
        return function (e) {
          return function (t) {
            return n(t, e);
          };
        };
      }),
      (mn.reduceRight = function (e, n) {
        return function (t) {
          return hn.reduceRight(t, e, n);
        };
      })),
    "function" == typeof hn.reduceWithIndex &&
      ((mn.reduceWithIndex = function (e, n) {
        return function (t) {
          return hn.reduceWithIndex(t, e, n);
        };
      }),
      (mn.foldMapWithIndex = function (t) {
        var n = hn.foldMapWithIndex(t);
        return function (e) {
          return function (t) {
            return n(t, e);
          };
        };
      }),
      (mn.reduceRightWithIndex = function (e, n) {
        return function (t) {
          return hn.reduceRightWithIndex(t, e, n);
        };
      })),
    "function" == typeof hn.alt &&
      (mn.alt = function (e) {
        return function (t) {
          return hn.alt(t, e);
        };
      }),
    "function" == typeof hn.compact && ((mn.compact = hn.compact), (mn.separate = hn.separate)),
    "function" == typeof hn.filter &&
      ((mn.filter = function (e) {
        return function (t) {
          return hn.filter(t, e);
        };
      }),
      (mn.filterMap = function (e) {
        return function (t) {
          return hn.filterMap(t, e);
        };
      }),
      (mn.partition = function (e) {
        return function (t) {
          return hn.partition(t, e);
        };
      }),
      (mn.partitionMap = function (e) {
        return function (t) {
          return hn.partitionMap(t, e);
        };
      })),
    "function" == typeof hn.filterWithIndex &&
      ((mn.filterWithIndex = function (e) {
        return function (t) {
          return hn.filterWithIndex(t, e);
        };
      }),
      (mn.filterMapWithIndex = function (e) {
        return function (t) {
          return hn.filterMapWithIndex(t, e);
        };
      }),
      (mn.partitionWithIndex = function (e) {
        return function (t) {
          return hn.partitionWithIndex(t, e);
        };
      }),
      (mn.partitionMapWithIndex = function (e) {
        return function (t) {
          return hn.partitionMapWithIndex(t, e);
        };
      })),
    "function" == typeof hn.promap &&
      (mn.promap = function (e, n) {
        return function (t) {
          return hn.promap(t, e, n);
        };
      }),
    "function" == typeof hn.compose &&
      (mn.compose = function (e) {
        return function (t) {
          return hn.compose(t, e);
        };
      }),
    "function" == typeof hn.throwError &&
      ((mn.fromOption = function (e) {
        return function (t) {
          return "None" === t._tag ? hn.throwError(e()) : hn.of(t.value);
        };
      }),
      (mn.fromEither = function (t) {
        return "Left" === t._tag ? hn.throwError(t.left) : hn.of(t.right);
      }),
      (mn.fromPredicate = function (e, n) {
        return function (t) {
          return e(t) ? hn.of(t) : hn.throwError(n(t));
        };
      }),
      (mn.filterOrElse = function (e, n) {
        return function (t) {
          return hn.chain(t, function (t) {
            return e(t) ? hn.of(t) : hn.throwError(n(t));
          });
        };
      })),
    mn).fromEither;
  var gn = function (t, e, n) {
      for (var r = t.length, o = e, i = 0; i < r; i++) o = n(i, o, t[i]);
      return o;
    },
    wn = function (t) {
      for (var e = 0, n = t.length, r = 0; r < n; r++) e += t[r].length;
      for (var o = Array(e), i = 0, r = 0; r < n; r++) {
        for (var a = t[r], u = a.length, c = 0; c < u; c++) o[c + i] = a[c];
        i += u;
      }
      return o;
    },
    bn = function (t) {
      for (var e = [], n = t.length, r = 0; r < n; r++) {
        var o = t[r];
        "Left" === o._tag && e.push(o.left);
      }
      return e;
    },
    xn = function e(n, t) {
      return void 0 === t
        ? function (t) {
            return e(t, n);
          }
        : (function (t, e, n) {
            for (var r = [], o = Math.min(t.length, e.length), i = 0; i < o; i++) r[i] = n(t[i], e[i]);
            return r;
          })(n, t, function (t, e) {
            return [t, e];
          });
    },
    On = function (n) {
      return function (t) {
        return (
          (e = n),
          t.map(function (t) {
            return e(t);
          })
        );
        var e;
      };
    },
    jn = function (n) {
      return function (t) {
        return (e = n), t.filter(e);
        var e;
      };
    },
    Sn = function (e, n) {
      return function (t) {
        return (
          (r = n),
          gn(t, e, function (t, e, n) {
            return r(e, n);
          })
        );
        var r;
      };
    },
    _n = function (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        o,
        i = n.call(t),
        a = [];
      try {
        for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; ) a.push(r.value);
      } catch (t) {
        o = { error: t };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    },
    En = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(_n(arguments[e]));
      return t;
    },
    Tn = function (t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
      if (n) return n.call(t);
      if (t && "number" == typeof t.length)
        return {
          next: function () {
            return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
          },
        };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    kn = "picocloneid";
  function An(t) {
    return t instanceof HTMLElement;
  }
  function Mn(t) {
    return t instanceof HTMLElement || t instanceof SVGElement;
  }
  function Wn(e) {
    return function (t) {
      return isNaN(t) ? e : t;
    };
  }
  function Fn(t) {
    return Array.from(t.querySelectorAll("*"))
      .filter(function (t) {
        return 0 !== t.scrollTop || 0 !== t.scrollLeft;
      })
      .filter(An);
  }
  function Ln(t) {
    var e, n;
    try {
      for (var r = Tn(En(t.querySelectorAll("input"), t.querySelectorAll("textarea"), t.querySelectorAll("canvas"), Fn(t))), o = r.next(); !o.done; o = r.next()) {
        o.value.dataset[kn] = Math.random().toString(32).substring(2);
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        o && !o.done && (n = r.return) && n.call(r);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  function $n(t) {
    var e, n;
    try {
      for (var r = Tn(Fn(t.parentWindow.html)), o = r.next(); !o.done; o = r.next()) {
        var i,
          a = o.value,
          u = a.dataset[kn];
        void 0 !== u
          ? (i = t.tree.html.querySelector("[data-" + kn + ' = "' + u + '"]')) instanceof HTMLElement
            ? (function (t, e) {
                var n,
                  r,
                  o = e.dataset[kn];
                if (void 0 !== o) {
                  var i = t.parentWindow.document.querySelector("[data-" + kn + ' = "' + o + '"]');
                  if (i instanceof HTMLElement) {
                    (e.style.position = "absolute" === e.style.position ? "absolute" : "relative"), (e.style.overflow = "hidden"), (e.style.width = i.offsetWidth + "px"), (e.style.height = i.offsetHeight + "px");
                    var a = Array.from(e.children).filter(Mn),
                      u = Array.from(i.children).filter(Mn);
                    if (a.length === u.length) {
                      var c,
                        f = xn(u, a),
                        s = i.scrollTop,
                        l = i.scrollLeft;
                      try {
                        for (var p = Tn(f), d = p.next(); !d.done; d = p.next()) {
                          var h,
                            m = _n(d.value, 2),
                            v = m[0],
                            y = m[1],
                            g = t.parentWindow.window.getComputedStyle(v);
                          "relative" !== t.parentWindow.window.getComputedStyle(i).position || "absolute" !== g.position
                            ? ((y.style.position = "absolute"),
                              (y.style.width = g.width),
                              (y.style.height = g.height),
                              void 0 !== c && ((h = c.getBoundingClientRect()), (s -= v.getBoundingClientRect().top - h.top), (l -= v.getBoundingClientRect().left - h.left)),
                              (y.style.top = -s + "px"),
                              (y.style.left = -l + "px"),
                              (c = v))
                            : ((y.style.top = Wn(0)(parseInt(g.top)) - i.scrollTop + "px"), (y.style.left = Wn(0)(parseInt(g.left)) - i.scrollLeft + "px"), (y.style.zIndex = (Wn(0)(parseInt(g.zIndex)) + 1).toString()));
                        }
                      } catch (t) {
                        n = { error: t };
                      } finally {
                        try {
                          d && !d.done && (r = p.return) && r.call(p);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                    } else console.warn("Scrolled element has a different amount of children than its clone, skipping scroll emulation", i);
                  } else console.warn("Failed to find original element for scrolled element", e);
                } else console.warn("Failed to get clone id from cloned scrolled element", e);
              })(t, i)
            : console.warn("Failed to find cloned element for original scrolled element", a)
          : console.warn("Failed to get clone id from scrolled element", a);
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        o && !o.done && (n = r.return) && n.call(r);
      } finally {
        if (e) throw e.error;
      }
    }
    return (t.tree.html.style.transform += " translate(-" + t.parentWindow.html.scrollLeft + "px, -" + t.parentWindow.html.scrollTop + "px)"), t;
  }
  function qn(r) {
    return function (t) {
      Ln(t.parentWindow.html),
        (t.tree.html.className = t.parentWindow.html.className),
        (t.tree.html.style.cssText = t.parentWindow.html.style.cssText),
        (t.tree.svg.style.fontSize = t.parentWindow.window.getComputedStyle(t.parentWindow.html).fontSize);
      var e,
        n = t.parentWindow.body.cloneNode(!0);
      return (
        (e = r),
        (function (i) {
          i instanceof Element &&
            e.forEach(function (t) {
              var e, n;
              try {
                for (var r = Tn(i.querySelectorAll(t)), o = r.next(); !o.done; o = r.next()) o.value.remove();
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
            });
        })(n),
        t.tree.html.appendChild(n),
        (function (o) {
          var e, t;
          try {
            for (var n = Tn(En(o.tree.html.querySelectorAll("input"), o.tree.html.querySelectorAll("textarea"))), r = n.next(); !r.done; r = n.next()) {
              !(function (t) {
                var e = t.dataset[kn];
                if (void 0 === e) return console.warn("Failed to get clone id from cloned input or textarea", t);
                var n,
                  r = En(o.parentWindow.document.querySelectorAll("input"), o.parentWindow.document.querySelectorAll("textarea")).find(function (t) {
                    return t.dataset[kn] === e;
                  });
                if (void 0 === r) return console.warn("Failed to find original input or textarea for cloned input or textarea", t);
                r instanceof HTMLInputElement && t instanceof HTMLInputElement
                  ? ("checkbox" !== t.type && "radio" !== t.type) || !r.checked
                    ? -1 !== ["number", "text", "range"].indexOf(t.type) && t.setAttribute("value", r.value)
                    : t.setAttribute("checked", "checked")
                  : r instanceof HTMLTextAreaElement && t instanceof HTMLTextAreaElement && ((n = o.parentWindow.document.createTextNode(r.value)), (t.innerHTML = ""), t.appendChild(n));
              })(r.value);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        })(t),
        (function (i) {
          var e, t;
          try {
            for (var n = Tn(i.tree.html.querySelectorAll("canvas")), r = n.next(); !r.done; r = n.next()) {
              !(function (t) {
                var e = t.dataset[kn];
                if (void 0 === e) return console.warn("Failed to get clone id from cloned canvas", t);
                var n = Array.from(i.parentWindow.document.querySelectorAll("canvas")).find(function (t) {
                  return t.dataset[kn] === e;
                });
                if (void 0 === n) return console.warn("Failed to find original canvas for cloned canvas", t);
                var r = i.parentWindow.document.createElement("img");
                (r.style.cssText = i.parentWindow.window.getComputedStyle(n).cssText), (r.src = n.toDataURL());
                var o = t.parentNode;
                if (!o) return console.warn("Failed to get parent of node", t);
                o.replaceChild(r, t);
              })(r.value);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        })(t),
        $n(t),
        n instanceof HTMLBodyElement && (t.tree.html.style.margin = "0"),
        (function (t) {
          var e, n;
          try {
            for (var r = Tn(t.querySelectorAll("[data-" + kn + "]")), o = r.next(); !o.done; o = r.next()) {
              var i = o.value;
              i instanceof HTMLElement ? i.removeAttribute("data-" + kn) : console.warn("Element that had a pico clone id attached was not an HTMLElement during cleanup", i);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
        })(t.parentWindow.html),
        t
      );
    };
  }
  function Cn(r) {
    return function (t, e) {
      void 0 === e && (e = {});
      var n = r.createElement(t);
      return Object.assign(n, e), n;
    };
  }
  function In(t) {
    return { reason: t, error: new Error(t) };
  }
  function Rn(t) {
    var n,
      e,
      r,
      o,
      i = t.window,
      a = i.innerWidth,
      u = i.innerHeight,
      c = Cn(t.document),
      f =
        ((n = t.document),
        function (t, e) {
          void 0 === e && (e = {});
          var o = n.createElementNS("http://www.w3.org/2000/svg", t);
          return (
            Object.entries(e).forEach(function (t) {
              var e = Zn(t, 2),
                n = e[0],
                r = e[1];
              return o.setAttribute(n, r);
            }),
            o
          );
        }),
      s = c("iframe", { width: a + "px", height: u + "px" }),
      l = f("svg", { width: a + "px", height: u + "px" });
    l.style.backgroundColor = ((e = t.window), (r = t.body), "transparent" === (o = e.getComputedStyle(r).backgroundColor) || "rgba(0, 0, 0, 0)" === o ? "white" : o);
    var p = f("foreignObject", { x: "0", y: "0", width: a + "px", height: u + "px" }),
      d = c("html");
    d.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    var h = c("head");
    return d.appendChild(h), d.appendChild(h), p.appendChild(d), l.appendChild(p), s.appendChild(l), { html: d, head: h, svg: l };
  }
  function Nn(t) {
    return dn(
      ((n = (e = t).document),
      (r = n.head),
      (o = n.body),
      (i = n.querySelector("html")) instanceof HTMLHtmlElement
        ? o instanceof HTMLBodyElement
          ? ln({ window: e, document: n, html: i, head: r, body: o })
          : sn(In("Failed to get HTMLBodyElement"))
        : sn(In("Failed to get HTMLHtmlElement"))),
      pn(function (t) {
        return { parentWindow: t, tree: Rn(t) };
      })
    );
    var e, n, r, o, i;
  }
  function Dn(t) {
    return { _tag: tr, errors: [], value: t };
  }
  function Hn(e) {
    return function (t) {
      return er(e)([t]);
    };
  }
  function Pn(t) {
    return t.value;
  }
  function Bn(t) {
    return t.errors;
  }
  function zn() {}
  function Un(t) {
    try {
      return ln(t.toDataURL("image/png", 1));
    } catch (t) {
      return sn(In("Failed to get data url from canvas (the canvas is most likely tainted)"));
    }
  }
  function Jn(o) {
    var n,
      i = o.parentWindow.window.devicePixelRatio || 1,
      a = Cn(o.parentWindow.document)("canvas", { width: o.parentWindow.window.innerWidth * i, height: o.parentWindow.window.innerHeight * i }),
      u = a.getContext("2d");
    return null === u
      ? se(In("Failed to obtain 2d canvas context"))
      : ((n = 2e3),
        (function (t) {
          return nn(
            ee(function (t) {
              var e = setTimeout(function () {
                return t(In("Timed out waiting for promise (" + n + "ms)"));
              }, n);
              return function () {
                return clearTimeout(e);
              };
            })
          )(t);
        })(
          ee(function (t, e) {
            var n,
              r = new Image();
            return (
              (r.onerror = function () {
                return t(In("Failed to load exported <img> onto canvas"));
              }),
              (r.onload = function () {
                u.setTransform(i, 0, 0, i, 0, 0), u.drawImage(r, 0, 0), e(a);
              }),
              (r.src = ((n = o.tree.svg), "data:image/svg+xml;charset=utf-8," + window.encodeURIComponent(new XMLSerializer().serializeToString(n)))),
              r.remove
            );
          })
        ));
  }
  function Vn(t) {
    return dn(
      Jn(t),
      Be(
        (function (t, e, n, r, o, i, a, u, c) {
          switch (arguments.length) {
            case 1:
              return t;
            case 2:
              return function () {
                return e(t.apply(this, arguments));
              };
            case 3:
              return function () {
                return n(e(t.apply(this, arguments)));
              };
            case 4:
              return function () {
                return r(n(e(t.apply(this, arguments))));
              };
            case 5:
              return function () {
                return o(r(n(e(t.apply(this, arguments)))));
              };
            case 6:
              return function () {
                return i(o(r(n(e(t.apply(this, arguments))))));
              };
            case 7:
              return function () {
                return a(i(o(r(n(e(t.apply(this, arguments)))))));
              };
            case 8:
              return function () {
                return u(a(i(o(r(n(e(t.apply(this, arguments))))))));
              };
            case 9:
              return function () {
                return c(u(a(i(o(r(n(e(t.apply(this, arguments)))))))));
              };
          }
        })(Un, yn)
      )
    );
  }
  function Qn(r) {
    return ee(function (e, n) {
      return (
        fetch(r, { cache: "force-cache" })
          .then(function (t) {
            t.ok ? n(t) : e({ _tag: "HTTPError", url: r, status: t.status, statusText: t.statusText });
          })
          .catch(function (t) {
            e({ _tag: "NetworkError", url: r });
          }),
        zn
      );
    });
  }
  function Gn(n) {
    return ee(function (e, t) {
      return (
        n
          .text()
          .then(t)
          .catch(function (t) {
            return e({ error: t, reason: "Failed to convert response to text (" + n.url + ")" });
          }),
        zn
      );
    });
  }
  function Xn(n) {
    return ee(function (e, t) {
      return (
        n
          .blob()
          .then(t)
          .catch(function (t) {
            return e({ error: t, reason: "Failed to convert response to text (" + n.url + ")" });
          }),
        zn
      );
    });
  }
  function Yn(r) {
    return ee(function (t, e) {
      var n = new FileReader();
      return (
        (n.onloadend = function () {
          return "string" == typeof n.result ? e(n.result) : t(In("Got invalid type when reading blob (" + typeof n.result + ")"));
        }),
        (n.onerror = function () {
          return t(In("Failed to load data url for blob"));
        }),
        n.readAsDataURL(r),
        n.abort
      );
    });
  }
  function Kn(t) {
    var e = "Failed to download resource at " + t.url + " " + ("NetworkError" === t._tag ? "(Network Error, most likely a CORS issue)" : "(Status: " + t.status + " - " + t.statusText + ")");
    return { reason: e, error: new Error(e) };
  }
  var Zn = function (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        o,
        i = n.call(t),
        a = [];
      try {
        for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; ) a.push(r.value);
      } catch (t) {
        o = { error: t };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    },
    tr = Symbol(),
    er = function (e) {
      return function (t) {
        return { _tag: tr, errors: t, value: e };
      };
    },
    nr = function (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        o,
        i = n.call(t),
        a = [];
      try {
        for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; ) a.push(r.value);
      } catch (t) {
        o = { error: t };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    },
    rr = function (t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
      if (n) return n.call(t);
      if (t && "number" == typeof t.length)
        return {
          next: function () {
            return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
          },
        };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    or = (function t(r) {
      var o = te(t, Kt, arguments);
      return function t(e) {
        var n = Zt(2, t, Ke, arguments, o);
        return 0 === e.length ? tn : new Ze(n, r, e);
      };
    })(1 / 0);
  function ir(t) {
    return t instanceof CSSStyleSheet;
  }
  function ar(o) {
    return function (t) {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(t)), document.implementation.createHTMLDocument().head.appendChild(e);
      var n = e.sheet;
      if (n instanceof CSSStyleSheet) return Ar(n.cssRules, o);
      var r = "Failed to initialize CSSStyleSheet";
      return se({ reason: r, error: new Error(r) });
    };
  }
  function ur(n) {
    return Tr(kr, function (t) {
      if (0 === t.indexOf("data:")) return pe('url("' + t + '")');
      var e = new URL(t, n).toString();
      return dn(
        Qn(e),
        Qe(Kn),
        Be(Xn),
        Be(Yn),
        Xe(function (t) {
          return "url(" + t + ")";
        })
      );
    });
  }
  function cr(t, e) {
    return dn(
      Array.from(t),
      jn(ir),
      On(
        ((n = e),
        function (t) {
          return dn(
            t.href
              ? dn(Qn(t.href), Qe(Kn), Be(Gn))
              : pe(
                  Array.from(t.cssRules)
                    .map(function (t) {
                      return t.cssText;
                    })
                    .join("\n")
                ),
            Be(ar(t.href || n))
          );
        })
      ),
      On(Ue(Hn(""))(cn)),
      or
    );
    var n;
  }
  function fr(t) {
    return dn(
      Array.from(t.tree.html.querySelectorAll("img")),
      On(function (e) {
        return dn(
          Qn(e.src),
          Qe(Kn),
          Be(Xn),
          Be(Yn),
          Xe(function (t) {
            return (e.src = t);
          }),
          Ue(sn)(ln)
        );
      }),
      or,
      Xe(
        ((e = t),
        function (t) {
          return { _tag: tr, errors: bn(t), value: e };
        })
      )
    );
    var e;
  }
  function sr(t) {
    return dn(
      fr(t),
      Be(function (e) {
        return dn(
          ((c = Pn(e)),
          dn(
            cr(c.parentWindow.document.styleSheets, c.parentWindow.window.location.href),
            Xe(function (t) {
              var e, n;
              try {
                for (var r = rr(dn(t, On(Pn))), o = r.next(); !o.done; o = r.next()) {
                  var i = o.value,
                    a = c.parentWindow.document.createElement("style");
                  a.appendChild(c.parentWindow.document.createTextNode(i)), c.tree.head.appendChild(a);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              var u = dn(t, On(Bn), wn);
              return er(c)(u);
            })
          )),
          Xe(function (t) {
            return er(Pn(t))(wn([Bn(e), Bn(t)]));
          })
        );
        var c;
      })
    );
  }
  function lr(t) {
    if ("string" == typeof t) {
      var e = t.match(/\?pid=(\w*)/);
      return e ? e[1] : null;
    }
  }
  var pr,
    dr,
    hr,
    mr,
    vr,
    yr,
    gr,
    wr,
    br,
    xr,
    Or,
    jr,
    Sr,
    _r,
    Er,
    Tr = function (u, c) {
      return function (t) {
        if (u.global || u.sticky) throw new TypeError("Only non-global and non-sticky (without the /g or /y flags) regex' can be used");
        var e = u.exec(t);
        if (null === e) return pe(Dn(t));
        var n = e[0],
          r = e[1];
        if ("string" != typeof e[1]) return pe(Dn(t));
        var o = t.substring(0, e.index),
          i = dn(c(r), Ue(Hn(r))(Dn)),
          a = Tr(u, c)(t.substring(e.index + n.length));
        return dn(
          Ne(i)(a),
          Xe(function (t) {
            var e = nr(t, 2),
              n = e[0],
              r = e[1];
            return er(o + n.value + r.value)(wn([n.errors, r.errors]));
          })
        );
      };
    },
    kr = /url\(['"]?(.+?)['"]?\)/,
    Ar = function (t, e) {
      return dn(
        Array.from(t),
        On(
          ((i = e),
          function (o) {
            return o instanceof CSSStyleRule
              ? dn(
                  ["background", "backgroundImage", "listStyle", "listStyleImage", "content", "cursor", "border", "borderImage", "borderImageSource", "mask", "maskImage"].map(function (r) {
                    var t = o.style[r];
                    return "" === t || void 0 === t
                      ? pe([])
                      : dn(
                          ur(i)(t),
                          Xe(function (t) {
                            var e = t.errors,
                              n = t.value;
                            return (o.style[r] = n), e;
                          })
                        );
                  }),
                  or,
                  Xe(wn),
                  Xe(function (t) {
                    return er(o.cssText)(t);
                  })
                )
              : o instanceof CSSFontFaceRule
              ? ur(i)(o.cssText)
              : o instanceof CSSMediaRule
              ? window.matchMedia(o.media.mediaText).matches
                ? Ar(o.cssRules, i)
                : pe(Dn(""))
              : o instanceof CSSImportRule
              ? dn(Qn(o.href), Qe(Kn), Be(Gn), Be(ar(o.href)))
              : (CSSPageRule, pe(Dn(o.cssText)));
          })
        ),
        On(
          Ue(function (t) {
            return er("")([t]);
          })(cn)
        ),
        or,
        Xe(
          ((n = function (t, e) {
            return t + "\n" + e;
          }),
          (r = ""),
          function (t) {
            return {
              _tag: tr,
              errors: dn(
                t,
                On(function (t) {
                  return t.errors;
                }),
                wn
              ),
              value: dn(
                t,
                On(function (t) {
                  return t.value;
                }),
                Sn(r, n)
              ),
            };
          })
        )
      );
      var n, r, i;
    },
    Mr = { ignore: [] },
    Wr =
      ((pr = function (t, e) {
        return dn(
          ((n = e), dn(Nn(t), yn, Xe(qn(n.ignore)), Be(sr))),
          Be(function (t) {
            var e = t.value,
              n = t.errors;
            return dn(
              Vn(e),
              Xe(function (t) {
                return er(t)(n);
              })
            );
          })
        );
        var n;
      }),
      function (r, o) {
        return (
          void 0 === o && (o = {}),
          new Promise(function (t, e) {
            return dn(
              pr(r, ((n = o), Object.assign({}, Mr, n))),
              Je(function (t) {
                return e(t.error);
              })(t)
            );
            var n;
          })
        );
      }),
    Fr = process.env.FF_INTERNAL_DEV ? "https://localhost:8000" : "https://feedback.fish";
  function Lr(t) {
    var o;
    t.preventDefault(),
      "none" === vr.style.display
        ? ((o = t.currentTarget),
          e(void 0, void 0, void 0, function () {
            var e, n, r;
            return c(this, function (t) {
              return (
                (e = Or(o)),
                (n = lr(o.getAttribute("href"))),
                (r = lr(vr.getAttribute("src"))),
                n !== r && (n ? vr.setAttribute("src", Fr + "/widget?pid=" + n + "&lang=" + (mr || "en")) : hr !== r && vr.setAttribute("src", Fr + "/widget?pid=" + hr + "&lang=" + (mr || "en"))),
                vr.contentWindow.postMessage(JSON.stringify({ metadata: e, feedbackFishEvent: "metadata" }), Fr),
                (vr.style.display = "block"),
                a(o, vr, {
                  placement: "bottom",
                  modifiers: [
                    { name: "offset", options: { offset: [0, 10] } },
                    { name: "flip", options: { padding: 10 } },
                    { name: "preventOverflow", options: { padding: 8 } },
                  ],
                }),
                setTimeout(function () {
                  vr.style.opacity = "1";
                }, 0),
                [2]
              );
            });
          }),
          setTimeout(function () {
            document.addEventListener("keydown", xr, !1), document.addEventListener("click", jr, !1);
          }, 0))
        : "block" === vr.style.display && jr();
  }
  (_r = document.currentScript)
    ? ((dr = _r.getAttribute("src")),
      (hr = lr(dr)),
      (mr = document.querySelector("html").lang),
      (yr = Fr + "/widget?pid=" + hr + "&lang=" + (mr || "en")),
      (gr = document.createElement("iframe")).setAttribute("src", yr),
      gr.setAttribute("frameborder", "0"),
      gr.setAttribute("marginheight", "0"),
      gr.setAttribute("marginwidth", "0"),
      gr.setAttribute("scrolling", "no"),
      (vr = gr),
      window.addEventListener("message", function (a) {
        return e(void 0, void 0, void 0, function () {
          var e, n, r, o, i;
          return c(this, function (t) {
            switch (t.label) {
              case 0:
                return 0 !== a.origin.indexOf(Fr) ? [3, 3] : "close" === a.data ? (jr(), [2]) : "screenshot" !== JSON.parse(a.data).type ? [3, 2] : [4, Wr(window, { ignore: ["#feedback-fish", ".feedback-flash"] })];
              case 1:
                return (
                  (e = t.sent()),
                  ((n = document.createElement("div")).className = "feedback-flash"),
                  document.body.appendChild(n),
                  setTimeout(n.remove, 1e3),
                  vr.contentWindow.postMessage(JSON.stringify({ type: "screenshot", data: e.value }), Fr),
                  [2]
                );
              case 2:
                if (((r = JSON.parse(a.data)), (o = r.width), (i = r.height), !o || !i)) return [2];
                if (i === vr.height && o === vr.width) return [2];
                (vr.height = i), (vr.width = o), (t.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (vr.style =
        Er ||
        ((wr = ["\n    display: none;\n    opacity: 0;\n    transition: opacity 150ms ease-out;\n    border-radius: 16px;\n    box-shadow: 0 18px 50px -10px rgba(0, 0, 0, 0.2);\n    z-index: 999999;\n    border: none;\n  "]),
        (br = ["\n    display: none;\n    opacity: 0;\n    transition: opacity 150ms ease-out;\n    border-radius: 16px;\n    box-shadow: 0 18px 50px -10px rgba(0, 0, 0, 0.2);\n    z-index: 999999;\n    border: none;\n  "]),
        Object.defineProperty ? Object.defineProperty(wr, "raw", { value: br }) : (wr.raw = br),
        (Er = wr))),
      document.body.appendChild(vr),
      (xr = function (t) {
        27 === t.keyCode && jr();
      }),
      (Or = function (a) {
        return Object.keys(a.dataset)
          .filter(function (t) {
            return /^feedbackFish[\w\d]+/g.test(t);
          })
          .reduce(function (t, e) {
            var n,
              r,
              o = a.dataset[e],
              i = (r = e.replace("feedbackFish", "")).charAt(0).toLowerCase() + r.slice(1);
            return u(u({}, t), (((n = {})[i] = o), n));
          }, {});
      }),
      (jr = function () {
        document.removeEventListener("keydown", xr, !1),
          document.removeEventListener("click", jr, !1),
          (vr.style.opacity = "0"),
          setTimeout(function () {
            vr.style.display = "none";
          }, 150);
      }),
      setInterval(function () {
        (function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
          for (var r = Array(t), o = 0, e = 0; e < n; e++) for (var i = arguments[e], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
          return r;
        })(Array.from(document.querySelectorAll("[data-feedback-fish]")), Array.from(document.querySelectorAll('[href^="https://feedback.fish"]'))).forEach(function (t) {
          t.addEventListener("click", Lr, !1);
        });
      }, 1e3),
      ((Sr = document.createElement("style")).innerHTML =
        "\n  .feedback-flash {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: white;\n    opacity: 0;\n    animation-name: ff-flash;\n    animation-duration: 1s;\n    pointer-events: none;\n  }\n  @keyframes ff-flash {\n    from {opacity: 1;}\n    to {opacity: 0;}\n  }\n  "),
      document.head.appendChild(Sr))
    : console.warn("Cannot determine Feedback Fish project ID. Please contact support with error code NO_SCRIPT.");
})();
