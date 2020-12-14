!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], t)
    : 'object' == typeof exports
    ? (exports.ReactContextMenu = t(require('react')))
    : (e.ReactContextMenu = t(e.React));
})(self, function (e) {
  return (function () {
    'use strict';
    var t = {
        113: function (e, t, n) {
          n.r(t),
            n.d(t, {
              ContextMenu: function () {
                return u;
              },
              ContextMenuTrigger: function () {
                return s;
              },
            });
          var r = n(698),
            o = n(379),
            i = n.n(o),
            c = n(990);
          function a() {
            return (a =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          i()(c.Z, { insert: 'head', singleton: !1 }), c.Z.locals;
          var u = function (e) {
            var t = e.children,
              n = e.className,
              o = void 0 === n ? '' : n,
              i = e.id,
              c = e.zIndex,
              u = void 0 === c ? 100 : c,
              l = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = {},
                      i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]),
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                }
                return o;
              })(e, ['children', 'className', 'id', 'zIndex']),
              s = function () {
                var e = document.getElementById(i);
                (window.onwheel = null),
                  e && ((e.style.opacity = '0'), (e.style.pointerEvents = 'none'));
              };
            return (
              (0, r.useEffect)(function () {
                return (
                  window.addEventListener('click', s),
                  function () {
                    window.removeEventListener('click', s);
                  }
                );
              }, []),
              i
                ? React.createElement(
                    'div',
                    a({ id: i }, l, {
                      className: 'context-menu '.concat(o),
                      style: {
                        position: 'fixed',
                        zIndex: u,
                        top: 0,
                        left: 0,
                        opacity: 0,
                        pointerEvents: 'none',
                      },
                    }),
                    t,
                  )
                : (console.error('property:id is required'),
                  React.createElement('div', null, 'property:id is required'))
            );
          };
          function l() {
            return (l =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          var s = function (e) {
            var t = e.children,
              n = e.id,
              o = e.className,
              i = void 0 === o ? '' : o,
              c = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = {},
                      i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]),
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                }
                return o;
              })(e, ['children', 'id', 'className']),
              a = (0, r.useRef)(null);
            (0, r.useEffect)(function () {
              return (
                window.addEventListener('contextmenu', function (e) {
                  e.preventDefault();
                }),
                function () {
                  window.removeEventListener('contextmenu', function (e) {
                    e.preventDefault();
                  });
                }
              );
            }, []);
            var u = (0, r.useCallback)(function (e) {
              e.persist();
              var t = document.getElementById(n);
              window.onwheel = function (e) {
                e.preventDefault();
              };
              var r = e.clientY,
                o = e.clientX,
                i = t.getBoundingClientRect(),
                c = window.innerWidth,
                u = window.innerHeight;
              i.height
                ? (c - o < i.width && (o -= i.width),
                  u - r < i.height && (r -= i.height),
                  (t.style.top = ''.concat(r, 'px')),
                  (t.style.left = ''.concat(o, 'px')),
                  (t.style.opacity = '1'),
                  (t.style.pointerEvents = 'auto'))
                : (a.current = window.setTimeout(function () {
                    (i = t.getBoundingClientRect()),
                      c - o < i.width && (o -= i.width),
                      u - r < i.height && (r -= i.height),
                      (t.style.top = ''.concat(r, 'px')),
                      (t.style.left = ''.concat(o, 'px')),
                      (t.style.opacity = '1'),
                      (t.style.pointerEvents = 'auto'),
                      clearTimeout(a.current);
                  }, 1e3 / 60));
            }, []);
            return n
              ? React.createElement(
                  'div',
                  l({ className: 'context-menu-trigger '.concat(i), onContextMenu: u }, c),
                  t,
                )
              : console.error('property id is required');
          };
        },
        990: function (e, t, n) {
          var r = n(645),
            o = n.n(r)()(function (e) {
              return e[1];
            });
          o.push([
            e.id,
            '.context-menu {\n  background-color: #ffffff;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n',
            '',
          ]),
            (t.Z = o);
        },
        645: function (e) {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = e(t);
                  return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
                }).join('');
              }),
              (t.i = function (e, n, r) {
                'string' == typeof e && (e = [[null, e, '']]);
                var o = {};
                if (r)
                  for (var i = 0; i < this.length; i++) {
                    var c = this[i][0];
                    null != c && (o[c] = !0);
                  }
                for (var a = 0; a < e.length; a++) {
                  var u = [].concat(e[a]);
                  (r && o[u[0]]) ||
                    (n && (u[2] ? (u[2] = ''.concat(n, ' and ').concat(u[2])) : (u[2] = n)),
                    t.push(u));
                }
              }),
              t
            );
          };
        },
        379: function (e, t, n) {
          var r,
            o = (function () {
              var e = {};
              return function (t) {
                if (void 0 === e[t]) {
                  var n = document.querySelector(t);
                  if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                      n = n.contentDocument.head;
                    } catch (e) {
                      n = null;
                    }
                  e[t] = n;
                }
                return e[t];
              };
            })(),
            i = [];
          function c(e) {
            for (var t = -1, n = 0; n < i.length; n++)
              if (i[n].identifier === e) {
                t = n;
                break;
              }
            return t;
          }
          function a(e, t) {
            for (var n = {}, r = [], o = 0; o < e.length; o++) {
              var a = e[o],
                u = t.base ? a[0] + t.base : a[0],
                l = n[u] || 0,
                s = ''.concat(u, ' ').concat(l);
              n[u] = l + 1;
              var f = c(s),
                d = { css: a[1], media: a[2], sourceMap: a[3] };
              -1 !== f
                ? (i[f].references++, i[f].updater(d))
                : i.push({ identifier: s, updater: h(d, t), references: 1 }),
                r.push(s);
            }
            return r;
          }
          function u(e) {
            var t = document.createElement('style'),
              r = e.attributes || {};
            if (void 0 === r.nonce) {
              var i = n.nc;
              i && (r.nonce = i);
            }
            if (
              (Object.keys(r).forEach(function (e) {
                t.setAttribute(e, r[e]);
              }),
              'function' == typeof e.insert)
            )
              e.insert(t);
            else {
              var c = o(e.insert || 'head');
              if (!c)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                );
              c.appendChild(t);
            }
            return t;
          }
          var l,
            s =
              ((l = []),
              function (e, t) {
                return (l[e] = t), l.filter(Boolean).join('\n');
              });
          function f(e, t, n, r) {
            var o = n ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
            if (e.styleSheet) e.styleSheet.cssText = s(t, o);
            else {
              var i = document.createTextNode(o),
                c = e.childNodes;
              c[t] && e.removeChild(c[t]), c.length ? e.insertBefore(i, c[t]) : e.appendChild(i);
            }
          }
          function d(e, t, n) {
            var r = n.css,
              o = n.media,
              i = n.sourceMap;
            if (
              (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
              i &&
                'undefined' != typeof btoa &&
                (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  ' */',
                )),
              e.styleSheet)
            )
              e.styleSheet.cssText = r;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(r));
            }
          }
          var p = null,
            v = 0;
          function h(e, t) {
            var n, r, o;
            if (t.singleton) {
              var i = v++;
              (n = p || (p = u(t))), (r = f.bind(null, n, i, !1)), (o = f.bind(null, n, i, !0));
            } else
              (n = u(t)),
                (r = d.bind(null, n, t)),
                (o = function () {
                  !(function (e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                  })(n);
                });
            return (
              r(e),
              function (t) {
                if (t) {
                  if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                  r((e = t));
                } else o();
              }
            );
          }
          e.exports = function (e, t) {
            (t = t || {}).singleton ||
              'boolean' == typeof t.singleton ||
              (t.singleton =
                (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
                r));
            var n = a((e = e || []), t);
            return function (e) {
              if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
                for (var r = 0; r < n.length; r++) {
                  var o = c(n[r]);
                  i[o].references--;
                }
                for (var u = a(e, t), l = 0; l < n.length; l++) {
                  var s = c(n[l]);
                  0 === i[s].references && (i[s].updater(), i.splice(s, 1));
                }
                n = u;
              }
            };
          };
        },
        698: function (t) {
          t.exports = e;
        },
      },
      n = {};
    function r(e) {
      if (n[e]) return n[e].exports;
      var o = (n[e] = { id: e, exports: {} });
      return t[e](o, o.exports, r), o.exports;
    }
    return (
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      }),
      (r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      r(113)
    );
  })();
});
