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
    var t = {
        802: function (e, t, n) {
          'use strict';
          n.r(t),
            n.d(t, {
              ContextMenu: function () {
                return c;
              },
              ContextMenuTrigger: function () {
                return u;
              },
            });
          var o = n(698),
            r = n.n(o),
            i =
              (n(638),
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
                      e && ((e.style.opacity = 0), (e.style.pointerEvents = 'none'));
                  };
                return (
                  (0, o.useEffect)(function () {
                    return (
                      window.addEventListener('click', s),
                      function () {
                        window.removeEventListener('click', s);
                      }
                    );
                  }, []),
                  c
                    ? r().createElement(
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
                    : console.error('property:id is required')
                );
              }),
            c = (0, o.memo)(i),
            a = function (e) {
              var t = e.children,
                n = e.id,
                i = e.className,
                c = void 0 === i ? '' : i,
                a = (0, o.useRef)(null);
              (0, o.useEffect)(function () {
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
              var u = (0, o.useCallback)(function (e) {
                e.persist();
                var t = document.getElementById(n);
                window.onwheel = function (e) {
                  e.preventDefault();
                };
                var o = e.clientY,
                  r = e.clientX,
                  i = t.getBoundingClientRect(),
                  c = window.innerWidth,
                  u = window.innerHeight;
                i.height
                  ? (c - r < i.width && (r -= i.width),
                    u - o < i.height && (o -= i.height),
                    (t.style.top = ''.concat(o, 'px')),
                    (t.style.left = ''.concat(r, 'px')),
                    (t.style.opacity = 1),
                    (t.style.pointerEvents = 'auto'))
                  : (a.current = window.setTimeout(function () {
                      (i = t.getBoundingClientRect()),
                        c - r < i.width && (r -= i.width),
                        u - o < i.height && (o -= i.height),
                        (t.style.top = ''.concat(o, 'px')),
                        (t.style.left = ''.concat(r, 'px')),
                        (t.style.opacity = 1),
                        (t.style.pointerEvents = 'auto'),
                        clearTimeout(a.current);
                    }, 1e3 / 60));
              }, []);
              return n
                ? r().createElement(
                    'div',
                    { className: 'context-menu-trigger '.concat(c), onContextMenu: u },
                    t,
                  )
                : console.error('property id is required');
            },
            u = (0, o.memo)(a);
        },
        990: function (e, t, n) {
          'use strict';
          n.r(t);
          var o = n(645),
            r = n.n(o)()(!1);
          r.push([
            e.id,
            '.context-menu {\n  background-color: #ffffff;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n',
            '',
          ]),
            (t.default = r);
        },
        645: function (e) {
          'use strict';
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = (function (e, t) {
                    var n,
                      o,
                      r,
                      i = e[1] || '',
                      c = e[3];
                    if (!c) return i;
                    if (t && 'function' == typeof btoa) {
                      var a =
                          ((n = c),
                          (o = btoa(unescape(encodeURIComponent(JSON.stringify(n))))),
                          (r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o,
                          )),
                          '/*# '.concat(r, ' */')),
                        u = c.sources.map(function (e) {
                          return '/*# sourceURL='.concat(c.sourceRoot || '').concat(e, ' */');
                        });
                      return [i].concat(u).concat([a]).join('\n');
                    }
                    return [i].join('\n');
                  })(t, e);
                  return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
                }).join('');
              }),
              (t.i = function (e, n, o) {
                'string' == typeof e && (e = [[null, e, '']]);
                var r = {};
                if (o)
                  for (var i = 0; i < this.length; i++) {
                    var c = this[i][0];
                    null != c && (r[c] = !0);
                  }
                for (var a = 0; a < e.length; a++) {
                  var u = [].concat(e[a]);
                  (o && r[u[0]]) ||
                    (n && (u[2] ? (u[2] = ''.concat(n, ' and ').concat(u[2])) : (u[2] = n)),
                    t.push(u));
                }
              }),
              t
            );
          };
        },
        638: function (e, t, n) {
          var o = n(379),
            r = n(990);
          'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, '']]);
          o(r, { insert: 'head', singleton: !1 }), (e.exports = r.locals || {});
        },
        379: function (e, t, n) {
          'use strict';
          var o,
            r = (function () {
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
            for (var n = {}, o = [], r = 0; r < e.length; r++) {
              var a = e[r],
                u = t.base ? a[0] + t.base : a[0],
                s = n[u] || 0,
                f = ''.concat(u, ' ').concat(s);
              n[u] = s + 1;
              var l = c(f),
                d = { css: a[1], media: a[2], sourceMap: a[3] };
              -1 !== l
                ? (i[l].references++, i[l].updater(d))
                : i.push({ identifier: f, updater: m(d, t), references: 1 }),
                o.push(f);
            }
            return o;
          }
          function u(e) {
            var t = document.createElement('style'),
              o = e.attributes || {};
            if (void 0 === o.nonce) {
              var i = n.nc;
              i && (o.nonce = i);
            }
            if (
              (Object.keys(o).forEach(function (e) {
                t.setAttribute(e, o[e]);
              }),
              'function' == typeof e.insert)
            )
              e.insert(t);
            else {
              var c = r(e.insert || 'head');
              if (!c)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                );
              c.appendChild(t);
            }
            return t;
          }
          var s,
            f =
              ((s = []),
              function (e, t) {
                return (s[e] = t), s.filter(Boolean).join('\n');
              });
          function l(e, t, n, o) {
            var r = n ? '' : o.media ? '@media '.concat(o.media, ' {').concat(o.css, '}') : o.css;
            if (e.styleSheet) e.styleSheet.cssText = f(t, r);
            else {
              var i = document.createTextNode(r),
                c = e.childNodes;
              c[t] && e.removeChild(c[t]), c.length ? e.insertBefore(i, c[t]) : e.appendChild(i);
            }
          }
          function d(e, t, n) {
            var o = n.css,
              r = n.media,
              i = n.sourceMap;
            if (
              (r ? e.setAttribute('media', r) : e.removeAttribute('media'),
              i &&
                btoa &&
                (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  ' */',
                )),
              e.styleSheet)
            )
              e.styleSheet.cssText = o;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(o));
            }
          }
          var p = null,
            v = 0;
          function m(e, t) {
            var n, o, r;
            if (t.singleton) {
              var i = v++;
              (n = p || (p = u(t))), (o = l.bind(null, n, i, !1)), (r = l.bind(null, n, i, !0));
            } else
              (n = u(t)),
                (o = d.bind(null, n, t)),
                (r = function () {
                  !(function (e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                  })(n);
                });
            return (
              o(e),
              function (t) {
                if (t) {
                  if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                  o((e = t));
                } else r();
              }
            );
          }
          e.exports = function (e, t) {
            (t = t || {}).singleton ||
              'boolean' == typeof t.singleton ||
              (t.singleton =
                (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)),
                o));
            var n = a((e = e || []), t);
            return function (e) {
              if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
                for (var o = 0; o < n.length; o++) {
                  var r = c(n[o]);
                  i[r].references--;
                }
                for (var u = a(e, t), s = 0; s < n.length; s++) {
                  var f = c(n[s]);
                  0 === i[f].references && (i[f].updater(), i.splice(f, 1));
                }
                n = u;
              }
            };
          };
        },
        698: function (t) {
          'use strict';
          t.exports = e;
        },
      },
      n = {};
    function o(e) {
      if (n[e]) return n[e].exports;
      var r = (n[e] = { id: e, exports: {} });
      return t[e](r, r.exports, o), r.exports;
    }
    return (
      (o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return o.d(t, { a: t }), t;
      }),
      (o.d = function (e, t) {
        for (var n in t)
          o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      o(802)
    );
  })();
});
