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
            o = n.n(r),
            i = n(379),
            c = n.n(i),
            a = n(990),
            u =
              (c()(a.Z, { insert: 'head', singleton: !1 }),
              a.Z.locals,
              function (e) {
                var t = e.children,
                  n = e.className,
                  i = void 0 === n ? '' : n,
                  c = e.id,
                  a = e.zIndex,
                  u = void 0 === a ? 100 : a,
                  s = function () {
                    var e = document.getElementById(c);
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
                  c
                    ? o().createElement(
                        'div',
                        {
                          id: c,
                          className: 'context-menu '.concat(i),
                          style: {
                            position: 'fixed',
                            zIndex: u,
                            top: 0,
                            left: 0,
                            opacity: 0,
                            pointerEvents: 'none',
                          },
                        },
                        t,
                      )
                    : (console.error('property:id is required'),
                      o().createElement('div', null, 'property:id is required'))
                );
              }),
            s = function (e) {
              var t = e.children,
                n = e.id,
                i = e.className,
                c = void 0 === i ? '' : i,
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
                ? o().createElement(
                    'div',
                    { className: 'context-menu-trigger '.concat(c), onContextMenu: u },
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
                s = n[u] || 0,
                l = ''.concat(u, ' ').concat(s);
              n[u] = s + 1;
              var d = c(l),
                f = { css: a[1], media: a[2], sourceMap: a[3] };
              -1 !== d
                ? (i[d].references++, i[d].updater(f))
                : i.push({ identifier: l, updater: h(f, t), references: 1 }),
                r.push(l);
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
          var s,
            l =
              ((s = []),
              function (e, t) {
                return (s[e] = t), s.filter(Boolean).join('\n');
              });
          function d(e, t, n, r) {
            var o = n ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
            if (e.styleSheet) e.styleSheet.cssText = l(t, o);
            else {
              var i = document.createTextNode(o),
                c = e.childNodes;
              c[t] && e.removeChild(c[t]), c.length ? e.insertBefore(i, c[t]) : e.appendChild(i);
            }
          }
          function f(e, t, n) {
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
              (n = p || (p = u(t))), (r = d.bind(null, n, i, !1)), (o = d.bind(null, n, i, !0));
            } else
              (n = u(t)),
                (r = f.bind(null, n, t)),
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
                for (var u = a(e, t), s = 0; s < n.length; s++) {
                  var l = c(n[s]);
                  0 === i[l].references && (i[l].updater(), i.splice(l, 1));
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
