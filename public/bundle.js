!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 5));
})([
  function (e, t, n) {
    'use strict';
    e.exports = n(6);
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      return function () {
        return e;
      };
    }
    var o = function () {};
    (o.thatReturns = r),
      (o.thatReturnsFalse = r(!1)),
      (o.thatReturnsTrue = r(!0)),
      (o.thatReturnsNull = r(null)),
      (o.thatReturnsThis = function () {
        return this;
      }),
      (o.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    'use strict';
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable;
    function i(e) {
      if (null == e)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t['_' + String.fromCharCode(n)] = n;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join('')
        )
          return !1;
        var r = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (e) {
            r[e] = e;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, l, u = i(e), c = 1; c < arguments.length; c++) {
            for (var s in (n = Object(arguments[c])))
              o.call(n, s) && (u[s] = n[s]);
            if (r) {
              l = r(n);
              for (var p = 0; p < l.length; p++)
                a.call(n, l[p]) && (u[l[p]] = n[l[p]]);
            }
          }
          return u;
        };
  },
  function (e, t, n) {
    'use strict';
    e.exports = {};
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e, t, n, r, o, a, i, l) {
      if (!e) {
        var u;
        if (void 0 === t)
          u = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          );
        else {
          var c = [n, r, o, a, i, l],
            s = 0;
          (u = new Error(
            t.replace(/%s/g, function () {
              return c[s++];
            })
          )).name = 'Invariant Violation';
        }
        throw ((u.framesToPop = 1), u);
      }
    };
  },
  function (e, t, n) {
    'use strict';
    var r = i(n(0)),
      o = i(n(7)),
      a = i(n(17));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    o.default.render(
      r.default.createElement(a.default, null),
      document.getElementById('app')
    );
  },
  function (e, t, n) {
    'use strict';
    var r = n(2),
      o = n(3);
    n(4);
    var a = n(1);
    function i(e) {
      for (
        var t = arguments.length - 1,
          n =
            'Minified React error #' +
            e +
            '; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=' +
            e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
      throw (
        (((t = Error(
          n +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        )).name = 'Invariant Violation'),
        (t.framesToPop = 1),
        t)
      );
    }
    var l = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    };
    function u(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = o),
        (this.updater = n || l);
    }
    function c(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = o),
        (this.updater = n || l);
    }
    function s() {}
    (u.prototype.isReactComponent = {}),
      (u.prototype.setState = function (e, t) {
        'object' != typeof e && 'function' != typeof e && null != e && i('85'),
          this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (u.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (s.prototype = u.prototype);
    var p = (c.prototype = new s());
    function d(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = o),
        (this.updater = n || l);
    }
    (p.constructor = c), r(p, u.prototype), (p.isPureReactComponent = !0);
    var f = (d.prototype = new s());
    (f.constructor = d),
      r(f, u.prototype),
      (f.unstable_isAsyncReactComponent = !0),
      (f.render = function () {
        return this.props.children;
      });
    var h = { Component: u, PureComponent: c, AsyncComponent: d },
      g = { current: null },
      m = Object.prototype.hasOwnProperty,
      v =
        ('function' == typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103,
      y = { key: !0, ref: !0, __self: !0, __source: !0 };
    function b(e, t, n, r, o, a, i) {
      return { $$typeof: v, type: e, key: t, ref: n, props: i, _owner: a };
    }
    (b.createElement = function (e, t, n) {
      var r,
        o = {},
        a = null,
        i = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (i = t.ref),
        void 0 !== t.key && (a = '' + t.key),
        void 0 === t.__self ? null : t.__self,
        void 0 === t.__source ? null : t.__source,
        t))
          m.call(t, r) && !y.hasOwnProperty(r) && (o[r] = t[r]);
      var l = arguments.length - 2;
      if (1 === l) o.children = n;
      else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        o.children = u;
      }
      if (e && e.defaultProps)
        for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
      return b(e, a, i, 0, 0, g.current, o);
    }),
      (b.createFactory = function (e) {
        var t = b.createElement.bind(null, e);
        return (t.type = e), t;
      }),
      (b.cloneAndReplaceKey = function (e, t) {
        return b(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
      }),
      (b.cloneElement = function (e, t, n) {
        var o = r({}, e.props),
          a = e.key,
          i = e.ref,
          l = (e._self, e._source, e._owner);
        if (null != t) {
          if (
            (void 0 !== t.ref && ((i = t.ref), (l = g.current)),
            void 0 !== t.key && (a = '' + t.key),
            e.type && e.type.defaultProps)
          )
            var u = e.type.defaultProps;
          for (c in t)
            m.call(t, c) &&
              !y.hasOwnProperty(c) &&
              (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) o.children = n;
        else if (1 < c) {
          u = Array(c);
          for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
          o.children = u;
        }
        return b(e.type, a, i, 0, 0, l, o);
      }),
      (b.isValidElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === v;
      });
    var C = 'function' == typeof Symbol && Symbol.iterator,
      E =
        ('function' == typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103;
    var k = /\/+/g,
      w = [];
    function P(e, t, n, r) {
      if (w.length) {
        var o = w.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function T(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > w.length && w.push(e);
    }
    function _(e, t, n, r) {
      var o = typeof e;
      if (
        (('undefined' !== o && 'boolean' !== o) || (e = null),
        null === e ||
          'string' === o ||
          'number' === o ||
          ('object' === o && e.$$typeof === E))
      )
        return n(r, e, '' === t ? '.' + S(e, 0) : t), 1;
      var a = 0;
      if (((t = '' === t ? '.' : t + ':'), Array.isArray(e)))
        for (var l = 0; l < e.length; l++) {
          var u = t + S((o = e[l]), l);
          a += _(o, u, n, r);
        }
      else if ('function' == typeof (u = (C && e[C]) || e['@@iterator']))
        for (e = u.call(e), l = 0; !(o = e.next()).done; )
          a += _((o = o.value), (u = t + S(o, l++)), n, r);
      else
        'object' === o &&
          i(
            '31',
            '[object Object]' === (n = '' + e)
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : n,
            ''
          );
      return a;
    }
    function S(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { '=': '=0', ':': '=2' };
            return (
              '$' +
              ('' + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function x(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function N(e, t, n) {
      var r = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? O(e, r, n, a.thatReturnsArgument)
          : null != e &&
            (b.isValidElement(e) &&
              (e = b.cloneAndReplaceKey(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ''
                    : ('' + e.key).replace(k, '$&/') + '/') +
                  n
              )),
            r.push(e));
    }
    function O(e, t, n, r, o) {
      var a = '';
      null != n && (a = ('' + n).replace(k, '$&/') + '/'),
        (t = P(t, a, r, o)),
        null == e || _(e, '', N, t),
        T(t);
    }
    var I = {
      forEach: function (e, t, n) {
        if (null == e) return e;
        (t = P(null, null, t, n)), null == e || _(e, '', x, t), T(t);
      },
      map: function (e, t, n) {
        if (null == e) return e;
        var r = [];
        return O(e, r, null, t, n), r;
      },
      count: function (e) {
        return null == e ? 0 : _(e, '', a.thatReturnsNull, null);
      },
      toArray: function (e) {
        var t = [];
        return O(e, t, null, a.thatReturnsArgument), t;
      },
    };
    e.exports = {
      Children: {
        map: I.map,
        forEach: I.forEach,
        count: I.count,
        toArray: I.toArray,
        only: function (e) {
          return b.isValidElement(e) || i('143'), e;
        },
      },
      Component: h.Component,
      PureComponent: h.PureComponent,
      unstable_AsyncComponent: h.AsyncComponent,
      createElement: b.createElement,
      cloneElement: b.cloneElement,
      isValidElement: b.isValidElement,
      createFactory: b.createFactory,
      version: '16.0.0',
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentOwner: g,
        assign: r,
      },
    };
  },
  function (e, t, n) {
    'use strict';
    !(function e() {
      if (
        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(8));
  },
  function (e, t, n) {
    'use strict';
    var r = n(0);
    n(4);
    var o = n(9),
      a = n(2),
      i = n(10),
      l = n(1),
      u = n(3),
      c = n(11),
      s = n(12),
      p = n(15),
      d = n(16);
    function f(e) {
      for (
        var t = arguments.length - 1,
          n =
            'Minified React error #' +
            e +
            '; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=' +
            e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
      throw (
        (((t = Error(
          n +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        )).name = 'Invariant Violation'),
        (t.framesToPop = 1),
        t)
      );
    }
    function h(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    r || f('227');
    var g = {
        html: 'http://www.w3.org/1999/xhtml',
        mathml: 'http://www.w3.org/1998/Math/MathML',
        svg: 'http://www.w3.org/2000/svg',
      },
      m = h,
      v = function (e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? h(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      },
      y = null,
      b = {};
    function C() {
      if (y)
        for (var e in b) {
          var t = b[e],
            n = y.indexOf(e);
          if ((-1 < n || f('96', e), !k.plugins[n]))
            for (var r in (t.extractEvents || f('97', e),
            (k.plugins[n] = t),
            (n = t.eventTypes))) {
              var o = void 0,
                a = n[r],
                i = t,
                l = r;
              k.eventNameDispatchConfigs.hasOwnProperty(l) && f('99', l),
                (k.eventNameDispatchConfigs[l] = a);
              var u = a.phasedRegistrationNames;
              if (u) {
                for (o in u) u.hasOwnProperty(o) && E(u[o], i, l);
                o = !0;
              } else
                a.registrationName
                  ? (E(a.registrationName, i, l), (o = !0))
                  : (o = !1);
              o || f('98', r, e);
            }
        }
    }
    function E(e, t, n) {
      k.registrationNameModules[e] && f('100', e),
        (k.registrationNameModules[e] = t),
        (k.registrationNameDependencies[e] = t.eventTypes[n].dependencies);
    }
    var k = {
        plugins: [],
        eventNameDispatchConfigs: {},
        registrationNameModules: {},
        registrationNameDependencies: {},
        possibleRegistrationNames: null,
        injectEventPluginOrder: function (e) {
          y && f('101'), (y = Array.prototype.slice.call(e)), C();
        },
        injectEventPluginsByName: function (e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              (b.hasOwnProperty(t) && b[t] === r) ||
                (b[t] && f('102', t), (b[t] = r), (n = !0));
            }
          n && C();
        },
      },
      w = k,
      P = {
        children: !0,
        dangerouslySetInnerHTML: !0,
        autoFocus: !0,
        defaultValue: !0,
        defaultChecked: !0,
        innerHTML: !0,
        suppressContentEditableWarning: !0,
        style: !0,
      };
    function T(e, t) {
      return (e & t) === t;
    }
    var _ = {
        MUST_USE_PROPERTY: 1,
        HAS_BOOLEAN_VALUE: 4,
        HAS_NUMERIC_VALUE: 8,
        HAS_POSITIVE_NUMERIC_VALUE: 24,
        HAS_OVERLOADED_BOOLEAN_VALUE: 32,
        HAS_STRING_BOOLEAN_VALUE: 64,
        injectDOMPropertyConfig: function (e) {
          var t = _,
            n = e.Properties || {},
            r = e.DOMAttributeNamespaces || {},
            o = e.DOMAttributeNames || {};
          for (var a in ((e = e.DOMMutationMethods || {}), n)) {
            S.properties.hasOwnProperty(a) && f('48', a);
            var i = a.toLowerCase(),
              l = n[a];
            1 >=
              (i = {
                attributeName: i,
                attributeNamespace: null,
                propertyName: a,
                mutationMethod: null,
                mustUseProperty: T(l, t.MUST_USE_PROPERTY),
                hasBooleanValue: T(l, t.HAS_BOOLEAN_VALUE),
                hasNumericValue: T(l, t.HAS_NUMERIC_VALUE),
                hasPositiveNumericValue: T(l, t.HAS_POSITIVE_NUMERIC_VALUE),
                hasOverloadedBooleanValue: T(l, t.HAS_OVERLOADED_BOOLEAN_VALUE),
                hasStringBooleanValue: T(l, t.HAS_STRING_BOOLEAN_VALUE),
              }).hasBooleanValue +
                i.hasNumericValue +
                i.hasOverloadedBooleanValue || f('50', a),
              o.hasOwnProperty(a) && (i.attributeName = o[a]),
              r.hasOwnProperty(a) && (i.attributeNamespace = r[a]),
              e.hasOwnProperty(a) && (i.mutationMethod = e[a]),
              (S.properties[a] = i);
          }
        },
      },
      S = {
        ID_ATTRIBUTE_NAME: 'data-reactid',
        ROOT_ATTRIBUTE_NAME: 'data-reactroot',
        ATTRIBUTE_NAME_START_CHAR:
          ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
        ATTRIBUTE_NAME_CHAR:
          ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
        properties: {},
        shouldSetAttribute: function (e, t) {
          if (
            S.isReservedProp(e) ||
            !(('o' !== e[0] && 'O' !== e[0]) || ('n' !== e[1] && 'N' !== e[1]))
          )
            return !1;
          if (null === t) return !0;
          switch (typeof t) {
            case 'boolean':
              return S.shouldAttributeAcceptBooleanValue(e);
            case 'undefined':
            case 'number':
            case 'string':
            case 'object':
              return !0;
            default:
              return !1;
          }
        },
        getPropertyInfo: function (e) {
          return S.properties.hasOwnProperty(e) ? S.properties[e] : null;
        },
        shouldAttributeAcceptBooleanValue: function (e) {
          if (S.isReservedProp(e)) return !0;
          var t = S.getPropertyInfo(e);
          return t
            ? t.hasBooleanValue ||
                t.hasStringBooleanValue ||
                t.hasOverloadedBooleanValue
            : 'data-' === (e = e.toLowerCase().slice(0, 5)) || 'aria-' === e;
        },
        isReservedProp: function (e) {
          return P.hasOwnProperty(e);
        },
        injection: _,
      },
      x = S,
      N = 0,
      O = 1,
      I = 2,
      A = 3,
      D = 4,
      M = 5,
      F = 6,
      R = 7,
      L = 8,
      U = 9,
      H = 10,
      j = 1,
      V = 3,
      B = 8,
      W = 9,
      z = 11,
      K = M,
      $ = F,
      q = j,
      Q = B,
      Y = x.ID_ATTRIBUTE_NAME,
      G = 1,
      X = Math.random().toString(36).slice(2),
      J = '__reactInternalInstance$' + X,
      Z = '__reactEventHandlers$' + X;
    function ee(e) {
      for (var t; (t = e._renderedComponent); ) e = t;
      return e;
    }
    function te(e, t) {
      ((e = ee(e))._hostNode = t), (t[J] = e);
    }
    function ne(e, t) {
      if (!(e._flags & G)) {
        var n,
          r = e._renderedChildren;
        t = t.firstChild;
        e: for (n in r)
          if (r.hasOwnProperty(n)) {
            var o = r[n],
              a = ee(o)._domID;
            if (0 !== a) {
              for (; null !== t; t = t.nextSibling) {
                var i = t,
                  l = a;
                if (
                  (i.nodeType === q && i.getAttribute(Y) === '' + l) ||
                  (i.nodeType === Q &&
                    i.nodeValue === ' react-text: ' + l + ' ') ||
                  (i.nodeType === Q &&
                    i.nodeValue === ' react-empty: ' + l + ' ')
                ) {
                  te(o, t);
                  continue e;
                }
              }
              f('32', a);
            }
          }
        e._flags |= G;
      }
    }
    function re(e) {
      if (e[J]) return e[J];
      for (var t = []; !e[J]; ) {
        if ((t.push(e), !e.parentNode)) return null;
        e = e.parentNode;
      }
      var n = e[J];
      if (n.tag === K || n.tag === $) return n;
      for (; e && (n = e[J]); e = t.pop()) {
        var r = n;
        t.length && ne(n, e);
      }
      return r;
    }
    var oe = {
        getClosestInstanceFromNode: re,
        getInstanceFromNode: function (e) {
          var t = e[J];
          return t
            ? t.tag === K || t.tag === $ || t._hostNode === e
              ? t
              : null
            : null != (t = re(e)) && t._hostNode === e
            ? t
            : null;
        },
        getNodeFromInstance: function (e) {
          if (e.tag === K || e.tag === $) return e.stateNode;
          if ((void 0 === e._hostNode && f('33'), e._hostNode))
            return e._hostNode;
          for (var t = []; !e._hostNode; )
            t.push(e), e._hostParent || f('34'), (e = e._hostParent);
          for (; t.length; e = t.pop()) ne(e, e._hostNode);
          return e._hostNode;
        },
        precacheChildNodes: ne,
        precacheNode: te,
        uncacheNode: function (e) {
          var t = e._hostNode;
          t && (delete t[J], (e._hostNode = null));
        },
        precacheFiberNode: function (e, t) {
          t[J] = e;
        },
        getFiberCurrentPropsFromNode: function (e) {
          return e[Z] || null;
        },
        updateFiberProps: function (e, t) {
          e[Z] = t;
        },
      },
      ae = function (e) {
        return e._reactInternalFiber;
      },
      ie = function (e) {
        return void 0 !== e._reactInternalFiber;
      },
      le = function (e, t) {
        e._reactInternalFiber = t;
      },
      ue = {
        ReactCurrentOwner:
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
      };
    function ce(e) {
      if ('function' == typeof e.getName) return e.getName();
      if ('number' == typeof e.tag) {
        if ('string' == typeof (e = e.type)) return e;
        if ('function' == typeof e) return e.displayName || e.name;
      }
      return null;
    }
    var se = 0,
      pe = 1,
      de = 2,
      fe = 4,
      he = 6,
      ge = 8,
      me = 16,
      ve = 32,
      ye = 64,
      be = 128,
      Ce = M,
      Ee = A,
      ke = D,
      we = F,
      Pe = se,
      Te = de;
    function _e(e) {
      var t = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        if ((t.effectTag & Te) !== Pe) return 1;
        for (; t.return; ) if (((t = t.return).effectTag & Te) !== Pe) return 1;
      }
      return t.tag === Ee ? 2 : 3;
    }
    function Se(e) {
      2 !== _e(e) && f('188');
    }
    function xe(e) {
      var t = e.alternate;
      if (!t) return 3 === (t = _e(e)) && f('188'), 1 === t ? null : e;
      for (var n = e, r = t; ; ) {
        var o = n.return,
          a = o ? o.alternate : null;
        if (!o || !a) break;
        if (o.child === a.child) {
          for (var i = o.child; i; ) {
            if (i === n) return Se(o), e;
            if (i === r) return Se(o), t;
            i = i.sibling;
          }
          f('188');
        }
        if (n.return !== r.return) (n = o), (r = a);
        else {
          i = !1;
          for (var l = o.child; l; ) {
            if (l === n) {
              (i = !0), (n = o), (r = a);
              break;
            }
            if (l === r) {
              (i = !0), (r = o), (n = a);
              break;
            }
            l = l.sibling;
          }
          if (!i) {
            for (l = a.child; l; ) {
              if (l === n) {
                (i = !0), (n = a), (r = o);
                break;
              }
              if (l === r) {
                (i = !0), (r = a), (n = o);
                break;
              }
              l = l.sibling;
            }
            i || f('189');
          }
        }
        n.alternate !== r && f('190');
      }
      return n.tag !== Ee && f('188'), n.stateNode.current === n ? e : t;
    }
    var Ne = function (e) {
        return 2 === _e(e);
      },
      Oe = function (e) {
        return !!(e = ae(e)) && 2 === _e(e);
      },
      Ie = function (e) {
        if (!(e = xe(e))) return null;
        for (var t = e; ; ) {
          if (t.tag === Ce || t.tag === we) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      },
      Ae = function (e) {
        if (!(e = xe(e))) return null;
        for (var t = e; ; ) {
          if (t.tag === Ce || t.tag === we) return t;
          if (t.child && t.tag !== ke) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      },
      De = {
        _caughtError: null,
        _hasCaughtError: !1,
        _rethrowError: null,
        _hasRethrowError: !1,
        injection: {
          injectErrorUtils: function (e) {
            'function' != typeof e.invokeGuardedCallback && f('197'),
              (Me = e.invokeGuardedCallback);
          },
        },
        invokeGuardedCallback: function (e, t, n, r, o, a, i, l, u) {
          Me.apply(De, arguments);
        },
        invokeGuardedCallbackAndCatchFirstError: function (
          e,
          t,
          n,
          r,
          o,
          a,
          i,
          l,
          u
        ) {
          if (
            (De.invokeGuardedCallback.apply(this, arguments),
            De.hasCaughtError())
          ) {
            var c = De.clearCaughtError();
            De._hasRethrowError ||
              ((De._hasRethrowError = !0), (De._rethrowError = c));
          }
        },
        rethrowCaughtError: function () {
          return Fe.apply(De, arguments);
        },
        hasCaughtError: function () {
          return De._hasCaughtError;
        },
        clearCaughtError: function () {
          if (De._hasCaughtError) {
            var e = De._caughtError;
            return (De._caughtError = null), (De._hasCaughtError = !1), e;
          }
          f('198');
        },
      };
    function Me(e, t, n, r, o, a, i, l, u) {
      (De._hasCaughtError = !1), (De._caughtError = null);
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, c);
      } catch (e) {
        (De._caughtError = e), (De._hasCaughtError = !0);
      }
    }
    function Fe() {
      if (De._hasRethrowError) {
        var e = De._rethrowError;
        throw ((De._rethrowError = null), (De._hasRethrowError = !1), e);
      }
    }
    var Re,
      Le = De;
    function Ue(e, t, n, r) {
      (t = e.type || 'unknown-event'),
        (e.currentTarget = He.getNodeFromInstance(r)),
        Le.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e),
        (e.currentTarget = null);
    }
    var He = {
        isEndish: function (e) {
          return (
            'topMouseUp' === e || 'topTouchEnd' === e || 'topTouchCancel' === e
          );
        },
        isMoveish: function (e) {
          return 'topMouseMove' === e || 'topTouchMove' === e;
        },
        isStartish: function (e) {
          return 'topMouseDown' === e || 'topTouchStart' === e;
        },
        executeDirectDispatch: function (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          return (
            Array.isArray(t) && f('103'),
            (e.currentTarget = t ? He.getNodeFromInstance(n) : null),
            (t = t ? t(e) : null),
            (e.currentTarget = null),
            (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            t
          );
        },
        executeDispatchesInOrder: function (e, t) {
          var n = e._dispatchListeners,
            r = e._dispatchInstances;
          if (Array.isArray(n))
            for (var o = 0; o < n.length && !e.isPropagationStopped(); o++)
              Ue(e, t, n[o], r[o]);
          else n && Ue(e, t, n, r);
          (e._dispatchListeners = null), (e._dispatchInstances = null);
        },
        executeDispatchesInOrderStopAtTrue: function (e) {
          e: {
            var t = e._dispatchListeners,
              n = e._dispatchInstances;
            if (Array.isArray(t)) {
              for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                if (t[r](e, n[r])) {
                  t = n[r];
                  break e;
                }
            } else if (t && t(e, n)) {
              t = n;
              break e;
            }
            t = null;
          }
          return (
            (e._dispatchInstances = null), (e._dispatchListeners = null), t
          );
        },
        hasDispatches: function (e) {
          return !!e._dispatchListeners;
        },
        getFiberCurrentPropsFromNode: function (e) {
          return Re.getFiberCurrentPropsFromNode(e);
        },
        getInstanceFromNode: function (e) {
          return Re.getInstanceFromNode(e);
        },
        getNodeFromInstance: function (e) {
          return Re.getNodeFromInstance(e);
        },
        injection: {
          injectComponentTree: function (e) {
            Re = e;
          },
        },
      },
      je = He,
      Ve = null,
      Be = null,
      We = null;
    function ze(e) {
      if ((e = je.getInstanceFromNode(e)))
        if ('number' == typeof e.tag) {
          (Ve && 'function' == typeof Ve.restoreControlledState) || f('194');
          var t = je.getFiberCurrentPropsFromNode(e.stateNode);
          Ve.restoreControlledState(e.stateNode, e.type, t);
        } else
          'function' != typeof e.restoreControlledState && f('195'),
            e.restoreControlledState();
    }
    var Ke = {
      injection: {
        injectFiberControlledHostComponent: function (e) {
          Ve = e;
        },
      },
      enqueueStateRestore: function (e) {
        Be ? (We ? We.push(e) : (We = [e])) : (Be = e);
      },
      restoreStateIfNeeded: function () {
        if (Be) {
          var e = Be,
            t = We;
          if (((We = Be = null), ze(e), t))
            for (e = 0; e < t.length; e++) ze(t[e]);
        }
      },
    };
    function $e(e, t, n, r, o, a) {
      return e(t, n, r, o, a);
    }
    function qe(e, t) {
      return e(t);
    }
    function Qe(e, t) {
      return qe(e, t);
    }
    var Ye = !1,
      Ge = {
        batchedUpdates: function (e, t) {
          if (Ye) return $e(Qe, e, t);
          Ye = !0;
          try {
            return $e(Qe, e, t);
          } finally {
            (Ye = !1), Ke.restoreStateIfNeeded();
          }
        },
        injection: {
          injectStackBatchedUpdates: function (e) {
            $e = e;
          },
          injectFiberBatchedUpdates: function (e) {
            qe = e;
          },
        },
      },
      Xe = V;
    function Je(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        e.nodeType === Xe ? e.parentNode : e
      );
    }
    var Ze = A,
      et = [];
    function tt(e) {
      var t = e.targetInst;
      do {
        if (!t) {
          e.ancestors.push(t);
          break;
        }
        var n = t;
        if ('number' == typeof n.tag) {
          for (; n.return; ) n = n.return;
          n = n.tag !== Ze ? null : n.stateNode.containerInfo;
        } else {
          for (; n._hostParent; ) n = n._hostParent;
          n = oe.getNodeFromInstance(n).parentNode;
        }
        if (!n) break;
        e.ancestors.push(t), (t = oe.getClosestInstanceFromNode(n));
      } while (t);
      for (n = 0; n < e.ancestors.length; n++)
        (t = e.ancestors[n]),
          nt._handleTopLevel(
            e.topLevelType,
            t,
            e.nativeEvent,
            Je(e.nativeEvent)
          );
    }
    var nt = {
        _enabled: !0,
        _handleTopLevel: null,
        setHandleTopLevel: function (e) {
          nt._handleTopLevel = e;
        },
        setEnabled: function (e) {
          nt._enabled = !!e;
        },
        isEnabled: function () {
          return nt._enabled;
        },
        trapBubbledEvent: function (e, t, n) {
          return n ? i.listen(n, t, nt.dispatchEvent.bind(null, e)) : null;
        },
        trapCapturedEvent: function (e, t, n) {
          return n ? i.capture(n, t, nt.dispatchEvent.bind(null, e)) : null;
        },
        dispatchEvent: function (e, t) {
          if (nt._enabled) {
            var n = Je(t);
            if (
              (null === (n = oe.getClosestInstanceFromNode(n)) ||
                'number' != typeof n.tag ||
                Ne(n) ||
                (n = null),
              et.length)
            ) {
              var r = et.pop();
              (r.topLevelType = e),
                (r.nativeEvent = t),
                (r.targetInst = n),
                (e = r);
            } else
              e = {
                topLevelType: e,
                nativeEvent: t,
                targetInst: n,
                ancestors: [],
              };
            try {
              Ge.batchedUpdates(tt, e);
            } finally {
              (e.topLevelType = null),
                (e.nativeEvent = null),
                (e.targetInst = null),
                (e.ancestors.length = 0),
                10 > et.length && et.push(e);
            }
          }
        },
      },
      rt = nt;
    function ot(e, t) {
      return (
        null == t && f('30'),
        null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t]
      );
    }
    function at(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var it = null;
    function lt(e, t) {
      e &&
        (je.executeDispatchesInOrder(e, t),
        e.isPersistent() || e.constructor.release(e));
    }
    function ut(e) {
      return lt(e, !0);
    }
    function ct(e) {
      return lt(e, !1);
    }
    function st(e, t, n) {
      switch (e) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
          return !(
            !n.disabled ||
            ('button' !== t &&
              'input' !== t &&
              'select' !== t &&
              'textarea' !== t)
          );
        default:
          return !1;
      }
    }
    var pt,
      dt = {
        injection: {
          injectEventPluginOrder: w.injectEventPluginOrder,
          injectEventPluginsByName: w.injectEventPluginsByName,
        },
        getListener: function (e, t) {
          if ('number' == typeof e.tag) {
            var n = e.stateNode;
            if (!n) return null;
            var r = je.getFiberCurrentPropsFromNode(n);
            if (!r) return null;
            if (((n = r[t]), st(t, e.type, r))) return null;
          } else {
            if (
              'string' == typeof (r = e._currentElement) ||
              'number' == typeof r ||
              !e._rootNodeID
            )
              return null;
            if (((n = (e = r.props)[t]), st(t, r.type, e))) return null;
          }
          return n && 'function' != typeof n && f('231', t, typeof n), n;
        },
        extractEvents: function (e, t, n, r) {
          for (var o, a = w.plugins, i = 0; i < a.length; i++) {
            var l = a[i];
            l && (l = l.extractEvents(e, t, n, r)) && (o = ot(o, l));
          }
          return o;
        },
        enqueueEvents: function (e) {
          e && (it = ot(it, e));
        },
        processEventQueue: function (e) {
          var t = it;
          (it = null),
            at(t, e ? ut : ct),
            it && f('95'),
            Le.rethrowCaughtError();
        },
      };
    function ft(e, t) {
      if (!o.canUseDOM || (t && !('addEventListener' in document))) return !1;
      var n = (t = 'on' + e) in document;
      return (
        n ||
          ((n = document.createElement('div')).setAttribute(t, 'return;'),
          (n = 'function' == typeof n[t])),
        !n &&
          pt &&
          'wheel' === e &&
          (n = document.implementation.hasFeature('Events.wheel', '3.0')),
        n
      );
    }
    function ht(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        (n['ms' + e] = 'MS' + t),
        (n['O' + e] = 'o' + t.toLowerCase()),
        n
      );
    }
    o.canUseDOM &&
      (pt =
        document.implementation &&
        document.implementation.hasFeature &&
        !0 !== document.implementation.hasFeature('', ''));
    var gt = {
        animationend: ht('Animation', 'AnimationEnd'),
        animationiteration: ht('Animation', 'AnimationIteration'),
        animationstart: ht('Animation', 'AnimationStart'),
        transitionend: ht('Transition', 'TransitionEnd'),
      },
      mt = {},
      vt = {};
    function yt(e) {
      if (mt[e]) return mt[e];
      if (!gt[e]) return e;
      var t,
        n = gt[e];
      for (t in n) if (n.hasOwnProperty(t) && t in vt) return (mt[e] = n[t]);
      return '';
    }
    o.canUseDOM &&
      ((vt = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete gt.animationend.animation,
        delete gt.animationiteration.animation,
        delete gt.animationstart.animation),
      'TransitionEvent' in window || delete gt.transitionend.transition);
    var bt = {
        topAbort: 'abort',
        topAnimationEnd: yt('animationend') || 'animationend',
        topAnimationIteration: yt('animationiteration') || 'animationiteration',
        topAnimationStart: yt('animationstart') || 'animationstart',
        topBlur: 'blur',
        topCancel: 'cancel',
        topCanPlay: 'canplay',
        topCanPlayThrough: 'canplaythrough',
        topChange: 'change',
        topClick: 'click',
        topClose: 'close',
        topCompositionEnd: 'compositionend',
        topCompositionStart: 'compositionstart',
        topCompositionUpdate: 'compositionupdate',
        topContextMenu: 'contextmenu',
        topCopy: 'copy',
        topCut: 'cut',
        topDoubleClick: 'dblclick',
        topDrag: 'drag',
        topDragEnd: 'dragend',
        topDragEnter: 'dragenter',
        topDragExit: 'dragexit',
        topDragLeave: 'dragleave',
        topDragOver: 'dragover',
        topDragStart: 'dragstart',
        topDrop: 'drop',
        topDurationChange: 'durationchange',
        topEmptied: 'emptied',
        topEncrypted: 'encrypted',
        topEnded: 'ended',
        topError: 'error',
        topFocus: 'focus',
        topInput: 'input',
        topKeyDown: 'keydown',
        topKeyPress: 'keypress',
        topKeyUp: 'keyup',
        topLoadedData: 'loadeddata',
        topLoad: 'load',
        topLoadedMetadata: 'loadedmetadata',
        topLoadStart: 'loadstart',
        topMouseDown: 'mousedown',
        topMouseMove: 'mousemove',
        topMouseOut: 'mouseout',
        topMouseOver: 'mouseover',
        topMouseUp: 'mouseup',
        topPaste: 'paste',
        topPause: 'pause',
        topPlay: 'play',
        topPlaying: 'playing',
        topProgress: 'progress',
        topRateChange: 'ratechange',
        topScroll: 'scroll',
        topSeeked: 'seeked',
        topSeeking: 'seeking',
        topSelectionChange: 'selectionchange',
        topStalled: 'stalled',
        topSuspend: 'suspend',
        topTextInput: 'textInput',
        topTimeUpdate: 'timeupdate',
        topToggle: 'toggle',
        topTouchCancel: 'touchcancel',
        topTouchEnd: 'touchend',
        topTouchMove: 'touchmove',
        topTouchStart: 'touchstart',
        topTransitionEnd: yt('transitionend') || 'transitionend',
        topVolumeChange: 'volumechange',
        topWaiting: 'waiting',
        topWheel: 'wheel',
      },
      Ct = {},
      Et = 0,
      kt = '_reactListenersID' + ('' + Math.random()).slice(2);
    function wt(e) {
      return (
        Object.prototype.hasOwnProperty.call(e, kt) ||
          ((e[kt] = Et++), (Ct[e[kt]] = {})),
        Ct[e[kt]]
      );
    }
    var Pt = a(
        {},
        {
          handleTopLevel: function (e, t, n, r) {
            (e = dt.extractEvents(e, t, n, r)),
              dt.enqueueEvents(e),
              dt.processEventQueue(!1);
          },
        },
        {
          setEnabled: function (e) {
            rt && rt.setEnabled(e);
          },
          isEnabled: function () {
            return !(!rt || !rt.isEnabled());
          },
          listenTo: function (e, t) {
            var n = wt(t);
            e = w.registrationNameDependencies[e];
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              (n.hasOwnProperty(o) && n[o]) ||
                ('topWheel' === o
                  ? ft('wheel')
                    ? rt.trapBubbledEvent('topWheel', 'wheel', t)
                    : ft('mousewheel')
                    ? rt.trapBubbledEvent('topWheel', 'mousewheel', t)
                    : rt.trapBubbledEvent('topWheel', 'DOMMouseScroll', t)
                  : 'topScroll' === o
                  ? rt.trapCapturedEvent('topScroll', 'scroll', t)
                  : 'topFocus' === o || 'topBlur' === o
                  ? (rt.trapCapturedEvent('topFocus', 'focus', t),
                    rt.trapCapturedEvent('topBlur', 'blur', t),
                    (n.topBlur = !0),
                    (n.topFocus = !0))
                  : 'topCancel' === o
                  ? (ft('cancel', !0) &&
                      rt.trapCapturedEvent('topCancel', 'cancel', t),
                    (n.topCancel = !0))
                  : 'topClose' === o
                  ? (ft('close', !0) &&
                      rt.trapCapturedEvent('topClose', 'close', t),
                    (n.topClose = !0))
                  : bt.hasOwnProperty(o) && rt.trapBubbledEvent(o, bt[o], t),
                (n[o] = !0));
            }
          },
          isListeningToAllDependencies: function (e, t) {
            (t = wt(t)), (e = w.registrationNameDependencies[e]);
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              if (!t.hasOwnProperty(r) || !t[r]) return !1;
            }
            return !0;
          },
          trapBubbledEvent: function (e, t, n) {
            return rt.trapBubbledEvent(e, t, n);
          },
          trapCapturedEvent: function (e, t, n) {
            return rt.trapCapturedEvent(e, t, n);
          },
        }
      ),
      Tt = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      _t = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(Tt).forEach(function (e) {
      _t.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tt[t] = Tt[e]);
      });
    });
    var St = {
        isUnitlessNumber: Tt,
        shorthandPropertyExpansions: {
          background: {
            backgroundAttachment: !0,
            backgroundColor: !0,
            backgroundImage: !0,
            backgroundPositionX: !0,
            backgroundPositionY: !0,
            backgroundRepeat: !0,
          },
          backgroundPosition: {
            backgroundPositionX: !0,
            backgroundPositionY: !0,
          },
          border: { borderWidth: !0, borderStyle: !0, borderColor: !0 },
          borderBottom: {
            borderBottomWidth: !0,
            borderBottomStyle: !0,
            borderBottomColor: !0,
          },
          borderLeft: {
            borderLeftWidth: !0,
            borderLeftStyle: !0,
            borderLeftColor: !0,
          },
          borderRight: {
            borderRightWidth: !0,
            borderRightStyle: !0,
            borderRightColor: !0,
          },
          borderTop: {
            borderTopWidth: !0,
            borderTopStyle: !0,
            borderTopColor: !0,
          },
          font: {
            fontStyle: !0,
            fontVariant: !0,
            fontWeight: !0,
            fontSize: !0,
            lineHeight: !0,
            fontFamily: !0,
          },
          outline: { outlineWidth: !0, outlineStyle: !0, outlineColor: !0 },
        },
      },
      xt = St.isUnitlessNumber,
      Nt = !1;
    if (o.canUseDOM) {
      var Ot = document.createElement('div').style;
      try {
        Ot.font = '';
      } catch (e) {
        Nt = !0;
      }
    }
    var It = function (e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
              o = n,
              a = t[n];
            if (
              ((o =
                null == a || 'boolean' == typeof a || '' === a
                  ? ''
                  : r ||
                    'number' != typeof a ||
                    0 === a ||
                    (xt.hasOwnProperty(o) && xt[o])
                  ? ('' + a).trim()
                  : a + 'px'),
              'float' === n && (n = 'cssFloat'),
              r)
            )
              e.setProperty(n, o);
            else if (o) e[n] = o;
            else if ((r = Nt && St.shorthandPropertyExpansions[n]))
              for (var i in r) e[i] = '';
            else e[n] = '';
          }
      },
      At = new RegExp(
        '^[' +
          x.ATTRIBUTE_NAME_START_CHAR +
          '][' +
          x.ATTRIBUTE_NAME_CHAR +
          ']*$'
      ),
      Dt = {},
      Mt = {};
    var Ft = {
        setAttributeForID: function (e, t) {
          e.setAttribute(x.ID_ATTRIBUTE_NAME, t);
        },
        setAttributeForRoot: function (e) {
          e.setAttribute(x.ROOT_ATTRIBUTE_NAME, '');
        },
        getValueForProperty: function () {},
        getValueForAttribute: function () {},
        setValueForProperty: function (e, t, n) {
          var r = x.getPropertyInfo(t);
          if (r && x.shouldSetAttribute(t, n)) {
            var o = r.mutationMethod;
            o
              ? o(e, n)
              : null == n ||
                (r.hasBooleanValue && !n) ||
                (r.hasNumericValue && isNaN(n)) ||
                (r.hasPositiveNumericValue && 1 > n) ||
                (r.hasOverloadedBooleanValue && !1 === n)
              ? Ft.deleteValueForProperty(e, t)
              : r.mustUseProperty
              ? (e[r.propertyName] = n)
              : ((t = r.attributeName),
                (o = r.attributeNamespace)
                  ? e.setAttributeNS(o, t, '' + n)
                  : r.hasBooleanValue ||
                    (r.hasOverloadedBooleanValue && !0 === n)
                  ? e.setAttribute(t, '')
                  : e.setAttribute(t, '' + n));
          } else
            Ft.setValueForAttribute(
              e,
              t,
              x.shouldSetAttribute(t, n) ? n : null
            );
        },
        setValueForAttribute: function (e, t, n) {
          (function (e) {
            return (
              !!Mt.hasOwnProperty(e) ||
              (!Dt.hasOwnProperty(e) &&
                (At.test(e) ? (Mt[e] = !0) : ((Dt[e] = !0), !1)))
            );
          })(t) &&
            (null == n ? e.removeAttribute(t) : e.setAttribute(t, '' + n));
        },
        deleteValueForAttribute: function (e, t) {
          e.removeAttribute(t);
        },
        deleteValueForProperty: function (e, t) {
          var n = x.getPropertyInfo(t);
          n
            ? (t = n.mutationMethod)
              ? t(e, void 0)
              : n.mustUseProperty
              ? (e[n.propertyName] = !n.hasBooleanValue && '')
              : e.removeAttribute(n.attributeName)
            : e.removeAttribute(t);
        },
      },
      Rt = Ft,
      Lt = ue.ReactDebugCurrentFrame;
    function Ut() {
      return null;
    }
    var Ht = {
        current: null,
        phase: null,
        resetCurrentFiber: function () {
          (Lt.getCurrentStack = null), (Ht.current = null), (Ht.phase = null);
        },
        setCurrentFiber: function (e, t) {
          (Lt.getCurrentStack = Ut), (Ht.current = e), (Ht.phase = t);
        },
        getCurrentFiberOwnerName: function () {
          return null;
        },
        getCurrentFiberStackAddendum: Ut,
      },
      jt = Ht,
      Vt = {
        getHostProps: function (e, t) {
          var n = t.value,
            r = t.checked;
          return a(
            { type: void 0, step: void 0, min: void 0, max: void 0 },
            t,
            {
              defaultChecked: void 0,
              defaultValue: void 0,
              value: null != n ? n : e._wrapperState.initialValue,
              checked: null != r ? r : e._wrapperState.initialChecked,
            }
          );
        },
        initWrapperState: function (e, t) {
          var n = t.defaultValue;
          e._wrapperState = {
            initialChecked: null != t.checked ? t.checked : t.defaultChecked,
            initialValue: null != t.value ? t.value : n,
            controlled:
              'checkbox' === t.type || 'radio' === t.type
                ? null != t.checked
                : null != t.value,
          };
        },
        updateWrapper: function (e, t) {
          var n = t.checked;
          null != n && Rt.setValueForProperty(e, 'checked', n || !1),
            null != (n = t.value)
              ? 0 === n && '' === e.value
                ? (e.value = '0')
                : 'number' === t.type
                ? (n != (t = parseFloat(e.value) || 0) ||
                    (n == t && e.value != n)) &&
                  (e.value = '' + n)
                : e.value !== '' + n && (e.value = '' + n)
              : (null == t.value &&
                  null != t.defaultValue &&
                  e.defaultValue !== '' + t.defaultValue &&
                  (e.defaultValue = '' + t.defaultValue),
                null == t.checked &&
                  null != t.defaultChecked &&
                  (e.defaultChecked = !!t.defaultChecked));
        },
        postMountWrapper: function (e, t) {
          switch (t.type) {
            case 'submit':
            case 'reset':
              break;
            case 'color':
            case 'date':
            case 'datetime':
            case 'datetime-local':
            case 'month':
            case 'time':
            case 'week':
              (e.value = ''), (e.value = e.defaultValue);
              break;
            default:
              e.value = e.value;
          }
          '' !== (t = e.name) && (e.name = ''),
            (e.defaultChecked = !e.defaultChecked),
            (e.defaultChecked = !e.defaultChecked),
            '' !== t && (e.name = t);
        },
        restoreControlledState: function (e, t) {
          Vt.updateWrapper(e, t);
          var n = t.name;
          if ('radio' === t.type && null != n) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              n = t.querySelectorAll(
                'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = oe.getFiberCurrentPropsFromNode(r);
                o || f('90'), Vt.updateWrapper(r, o);
              }
            }
          }
        },
      },
      Bt = Vt;
    var Wt = function () {},
      zt = function (e, t) {
        null != t.value && e.setAttribute('value', t.value);
      },
      Kt = function (e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = '';
            return (
              r.Children.forEach(e, function (e) {
                null == e ||
                  ('string' != typeof e && 'number' != typeof e) ||
                  (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      };
    function $t(e, t, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var r = 0; r < n.length; r++) t['$' + n[r]] = !0;
        for (n = 0; n < e.length; n++)
          (r = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== r && (e[n].selected = r);
      } else {
        for (n = '' + n, t = null, r = 0; r < e.length; r++) {
          if (e[r].value === n) return void (e[r].selected = !0);
          null !== t || e[r].disabled || (t = e[r]);
        }
        null !== t && (t.selected = !0);
      }
    }
    var qt = function (e, t) {
        return a({}, t, { value: void 0 });
      },
      Qt = function (e, t) {
        var n = t.value;
        e._wrapperState = {
          initialValue: null != n ? n : t.defaultValue,
          wasMultiple: !!t.multiple,
        };
      },
      Yt = function (e, t) {
        e.multiple = !!t.multiple;
        var n = t.value;
        null != n
          ? $t(e, !!t.multiple, n)
          : null != t.defaultValue && $t(e, !!t.multiple, t.defaultValue);
      },
      Gt = function (e, t) {
        e._wrapperState.initialValue = void 0;
        var n = e._wrapperState.wasMultiple;
        e._wrapperState.wasMultiple = !!t.multiple;
        var r = t.value;
        null != r
          ? $t(e, !!t.multiple, r)
          : n !== !!t.multiple &&
            (null != t.defaultValue
              ? $t(e, !!t.multiple, t.defaultValue)
              : $t(e, !!t.multiple, t.multiple ? [] : ''));
      },
      Xt = function (e, t) {
        var n = t.value;
        null != n && $t(e, !!t.multiple, n);
      },
      Jt = {
        getHostProps: function (e, t) {
          return (
            null != t.dangerouslySetInnerHTML && f('91'),
            a({}, t, {
              value: void 0,
              defaultValue: void 0,
              children: '' + e._wrapperState.initialValue,
            })
          );
        },
        initWrapperState: function (e, t) {
          var n = t.value,
            r = n;
          null == n &&
            ((n = t.defaultValue),
            null != (t = t.children) &&
              (null != n && f('92'),
              Array.isArray(t) && (1 >= t.length || f('93'), (t = t[0])),
              (n = '' + t)),
            null == n && (n = ''),
            (r = n)),
            (e._wrapperState = { initialValue: '' + r });
        },
        updateWrapper: function (e, t) {
          var n = t.value;
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && (e.defaultValue = n)),
            null != t.defaultValue && (e.defaultValue = t.defaultValue);
        },
        postMountWrapper: function (e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && (e.value = t);
        },
        restoreControlledState: function (e, t) {
          Jt.updateWrapper(e, t);
        },
      },
      Zt = Jt,
      en = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
    function tn(e, t) {
      t &&
        (en[e] &&
          (null != t.children || null != t.dangerouslySetInnerHTML) &&
          f('137', e, ''),
        null != t.dangerouslySetInnerHTML &&
          (null != t.children && f('60'),
          ('object' == typeof t.dangerouslySetInnerHTML &&
            '__html' in t.dangerouslySetInnerHTML) ||
            f('61')),
        null != t.style && 'object' != typeof t.style && f('62', ''));
    }
    function nn(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        'input' === e.toLowerCase() &&
        ('checkbox' === t || 'radio' === t)
      );
    }
    var rn = function (e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = nn(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = '' + e[t];
            if (
              !e.hasOwnProperty(t) &&
              'function' == typeof n.get &&
              'function' == typeof n.set
            )
              return (
                Object.defineProperty(e, t, {
                  enumerable: n.enumerable,
                  configurable: !0,
                  get: function () {
                    return n.get.call(this);
                  },
                  set: function (e) {
                    (r = '' + e), n.set.call(this, e);
                  },
                }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
          })(e));
      },
      on = function (e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = '';
        return (
          e && (r = nn(e) ? (e.checked ? 'true' : 'false') : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      };
    function an(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var ln,
      un = g,
      cn = (function (e) {
        return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== un.svg || 'innerHTML' in e) e.innerHTML = t;
        else
          for (
            (ln = ln || document.createElement('div')).innerHTML =
              '<svg>' + t + '</svg>',
              t = ln.firstChild;
            t.firstChild;

          )
            e.appendChild(t.firstChild);
      }),
      sn = /["'&<>]/,
      pn = V;
    function dn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === pn)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    o.canUseDOM &&
      ('textContent' in document.documentElement ||
        (dn = function (e, t) {
          if (e.nodeType === pn) e.nodeValue = t;
          else {
            if ('boolean' == typeof t || 'number' == typeof t) t = '' + t;
            else {
              t = '' + t;
              var n = sn.exec(t);
              if (n) {
                var r,
                  o = '',
                  a = 0;
                for (r = n.index; r < t.length; r++) {
                  switch (t.charCodeAt(r)) {
                    case 34:
                      n = '&quot;';
                      break;
                    case 38:
                      n = '&amp;';
                      break;
                    case 39:
                      n = '&#x27;';
                      break;
                    case 60:
                      n = '&lt;';
                      break;
                    case 62:
                      n = '&gt;';
                      break;
                    default:
                      continue;
                  }
                  a !== r && (o += t.substring(a, r)), (a = r + 1), (o += n);
                }
                t = a !== r ? o + t.substring(a, r) : o;
              }
            }
            cn(e, t);
          }
        }));
    var fn = dn,
      hn = (jt.getCurrentFiberOwnerName, W),
      gn = z,
      mn = Pt.listenTo,
      vn = w.registrationNameModules,
      yn = g.html,
      bn = m;
    function Cn(e, t) {
      mn(t, e.nodeType === hn || e.nodeType === gn ? e : e.ownerDocument);
    }
    var En = {
        topAbort: 'abort',
        topCanPlay: 'canplay',
        topCanPlayThrough: 'canplaythrough',
        topDurationChange: 'durationchange',
        topEmptied: 'emptied',
        topEncrypted: 'encrypted',
        topEnded: 'ended',
        topError: 'error',
        topLoadedData: 'loadeddata',
        topLoadedMetadata: 'loadedmetadata',
        topLoadStart: 'loadstart',
        topPause: 'pause',
        topPlay: 'play',
        topPlaying: 'playing',
        topProgress: 'progress',
        topRateChange: 'ratechange',
        topSeeked: 'seeked',
        topSeeking: 'seeking',
        topStalled: 'stalled',
        topSuspend: 'suspend',
        topTimeUpdate: 'timeupdate',
        topVolumeChange: 'volumechange',
        topWaiting: 'waiting',
      },
      kn = {
        createElement: function (e, t, n, r) {
          return (
            (n = n.nodeType === hn ? n : n.ownerDocument),
            r === yn && (r = bn(e)),
            r === yn
              ? 'script' === e
                ? (((e = n.createElement('div')).innerHTML =
                    '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : (e =
                    'string' == typeof t.is
                      ? n.createElement(e, { is: t.is })
                      : n.createElement(e))
              : (e = n.createElementNS(r, e)),
            e
          );
        },
        createTextNode: function (e, t) {
          return (t.nodeType === hn ? t : t.ownerDocument).createTextNode(e);
        },
        setInitialProperties: function (e, t, n, r) {
          var o = an(t, n);
          switch (t) {
            case 'iframe':
            case 'object':
              Pt.trapBubbledEvent('topLoad', 'load', e);
              var a = n;
              break;
            case 'video':
            case 'audio':
              for (a in En)
                En.hasOwnProperty(a) && Pt.trapBubbledEvent(a, En[a], e);
              a = n;
              break;
            case 'source':
              Pt.trapBubbledEvent('topError', 'error', e), (a = n);
              break;
            case 'img':
            case 'image':
              Pt.trapBubbledEvent('topError', 'error', e),
                Pt.trapBubbledEvent('topLoad', 'load', e),
                (a = n);
              break;
            case 'form':
              Pt.trapBubbledEvent('topReset', 'reset', e),
                Pt.trapBubbledEvent('topSubmit', 'submit', e),
                (a = n);
              break;
            case 'details':
              Pt.trapBubbledEvent('topToggle', 'toggle', e), (a = n);
              break;
            case 'input':
              Bt.initWrapperState(e, n),
                (a = Bt.getHostProps(e, n)),
                Pt.trapBubbledEvent('topInvalid', 'invalid', e),
                Cn(r, 'onChange');
              break;
            case 'option':
              Wt(e, n), (a = Kt(e, n));
              break;
            case 'select':
              Qt(e, n),
                (a = qt(e, n)),
                Pt.trapBubbledEvent('topInvalid', 'invalid', e),
                Cn(r, 'onChange');
              break;
            case 'textarea':
              Zt.initWrapperState(e, n),
                (a = Zt.getHostProps(e, n)),
                Pt.trapBubbledEvent('topInvalid', 'invalid', e),
                Cn(r, 'onChange');
              break;
            default:
              a = n;
          }
          tn(t, a);
          var i,
            u = a;
          for (i in u)
            if (u.hasOwnProperty(i)) {
              var c = u[i];
              'style' === i
                ? It(e, c)
                : 'dangerouslySetInnerHTML' === i
                ? null != (c = c ? c.__html : void 0) && cn(e, c)
                : 'children' === i
                ? 'string' == typeof c
                  ? fn(e, c)
                  : 'number' == typeof c && fn(e, '' + c)
                : 'suppressContentEditableWarning' !== i &&
                  (vn.hasOwnProperty(i)
                    ? null != c && Cn(r, i)
                    : o
                    ? Rt.setValueForAttribute(e, i, c)
                    : null != c && Rt.setValueForProperty(e, i, c));
            }
          switch (t) {
            case 'input':
              rn(e), Bt.postMountWrapper(e, n);
              break;
            case 'textarea':
              rn(e), Zt.postMountWrapper(e, n);
              break;
            case 'option':
              zt(e, n);
              break;
            case 'select':
              Yt(e, n);
              break;
            default:
              'function' == typeof a.onClick && (e.onclick = l);
          }
        },
        diffProperties: function (e, t, n, r, o) {
          var a,
            i,
            u = null;
          switch (t) {
            case 'input':
              (n = Bt.getHostProps(e, n)),
                (r = Bt.getHostProps(e, r)),
                (u = []);
              break;
            case 'option':
              (n = Kt(e, n)), (r = Kt(e, r)), (u = []);
              break;
            case 'select':
              (n = qt(e, n)), (r = qt(e, r)), (u = []);
              break;
            case 'textarea':
              (n = Zt.getHostProps(e, n)),
                (r = Zt.getHostProps(e, r)),
                (u = []);
              break;
            default:
              'function' != typeof n.onClick &&
                'function' == typeof r.onClick &&
                (e.onclick = l);
          }
          for (a in (tn(t, r), (e = null), n))
            if (!r.hasOwnProperty(a) && n.hasOwnProperty(a) && null != n[a])
              if ('style' === a)
                for (i in (t = n[a]))
                  t.hasOwnProperty(i) && (e || (e = {}), (e[i] = ''));
              else
                'dangerouslySetInnerHTML' !== a &&
                  'children' !== a &&
                  'suppressContentEditableWarning' !== a &&
                  (vn.hasOwnProperty(a)
                    ? u || (u = [])
                    : (u = u || []).push(a, null));
          for (a in r) {
            var c = r[a];
            if (
              ((t = null != n ? n[a] : void 0),
              r.hasOwnProperty(a) && c !== t && (null != c || null != t))
            )
              if ('style' === a)
                if (t) {
                  for (i in t)
                    !t.hasOwnProperty(i) ||
                      (c && c.hasOwnProperty(i)) ||
                      (e || (e = {}), (e[i] = ''));
                  for (i in c)
                    c.hasOwnProperty(i) &&
                      t[i] !== c[i] &&
                      (e || (e = {}), (e[i] = c[i]));
                } else e || (u || (u = []), u.push(a, e)), (e = c);
              else
                'dangerouslySetInnerHTML' === a
                  ? ((c = c ? c.__html : void 0),
                    (t = t ? t.__html : void 0),
                    null != c && t !== c && (u = u || []).push(a, '' + c))
                  : 'children' === a
                  ? t === c ||
                    ('string' != typeof c && 'number' != typeof c) ||
                    (u = u || []).push(a, '' + c)
                  : 'suppressContentEditableWarning' !== a &&
                    (vn.hasOwnProperty(a)
                      ? (null != c && Cn(o, a), u || t === c || (u = []))
                      : (u = u || []).push(a, c));
          }
          return e && (u = u || []).push('style', e), u;
        },
        updateProperties: function (e, t, n, r, o) {
          an(n, r), (r = an(n, o));
          for (var a = 0; a < t.length; a += 2) {
            var i = t[a],
              l = t[a + 1];
            'style' === i
              ? It(e, l)
              : 'dangerouslySetInnerHTML' === i
              ? cn(e, l)
              : 'children' === i
              ? fn(e, l)
              : r
              ? null != l
                ? Rt.setValueForAttribute(e, i, l)
                : Rt.deleteValueForAttribute(e, i)
              : null != l
              ? Rt.setValueForProperty(e, i, l)
              : Rt.deleteValueForProperty(e, i);
          }
          switch (n) {
            case 'input':
              Bt.updateWrapper(e, o), on(e);
              break;
            case 'textarea':
              Zt.updateWrapper(e, o);
              break;
            case 'select':
              Gt(e, o);
          }
        },
        diffHydratedProperties: function (e, t, n, r, o) {
          switch (t) {
            case 'iframe':
            case 'object':
              Pt.trapBubbledEvent('topLoad', 'load', e);
              break;
            case 'video':
            case 'audio':
              for (var a in En)
                En.hasOwnProperty(a) && Pt.trapBubbledEvent(a, En[a], e);
              break;
            case 'source':
              Pt.trapBubbledEvent('topError', 'error', e);
              break;
            case 'img':
            case 'image':
              Pt.trapBubbledEvent('topError', 'error', e),
                Pt.trapBubbledEvent('topLoad', 'load', e);
              break;
            case 'form':
              Pt.trapBubbledEvent('topReset', 'reset', e),
                Pt.trapBubbledEvent('topSubmit', 'submit', e);
              break;
            case 'details':
              Pt.trapBubbledEvent('topToggle', 'toggle', e);
              break;
            case 'input':
              Bt.initWrapperState(e, n),
                Pt.trapBubbledEvent('topInvalid', 'invalid', e),
                Cn(o, 'onChange');
              break;
            case 'option':
              Wt(e, n);
              break;
            case 'select':
              Qt(e, n),
                Pt.trapBubbledEvent('topInvalid', 'invalid', e),
                Cn(o, 'onChange');
              break;
            case 'textarea':
              Zt.initWrapperState(e, n),
                Pt.trapBubbledEvent('topInvalid', 'invalid', e),
                Cn(o, 'onChange');
          }
          for (var i in (tn(t, n), (r = null), n))
            n.hasOwnProperty(i) &&
              ((a = n[i]),
              'children' === i
                ? 'string' == typeof a
                  ? e.textContent !== a && (r = ['children', a])
                  : 'number' == typeof a &&
                    e.textContent !== '' + a &&
                    (r = ['children', '' + a])
                : vn.hasOwnProperty(i) && null != a && Cn(o, i));
          switch (t) {
            case 'input':
              rn(e), Bt.postMountWrapper(e, n);
              break;
            case 'textarea':
              rn(e), Zt.postMountWrapper(e, n);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof n.onClick && (e.onclick = l);
          }
          return r;
        },
        diffHydratedText: function (e, t) {
          return e.nodeValue !== t;
        },
        warnForDeletedHydratableElement: function () {},
        warnForDeletedHydratableText: function () {},
        warnForInsertedHydratedElement: function () {},
        warnForInsertedHydratedText: function () {},
        restoreControlledState: function (e, t, n) {
          switch (t) {
            case 'input':
              Bt.restoreControlledState(e, n);
              break;
            case 'textarea':
              Zt.restoreControlledState(e, n);
              break;
            case 'select':
              Xt(e, n);
          }
        },
      },
      wn = void 0;
    if (o.canUseDOM)
      if ('function' != typeof requestIdleCallback) {
        var Pn = null,
          Tn = null,
          _n = !1,
          Sn = !1,
          xn = 0,
          Nn = 33,
          On = 33,
          In = {
            timeRemaining:
              'object' == typeof performance &&
              'function' == typeof performance.now
                ? function () {
                    return xn - performance.now();
                  }
                : function () {
                    return xn - Date.now();
                  },
          },
          An = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
        window.addEventListener(
          'message',
          function (e) {
            e.source === window &&
              e.data === An &&
              ((_n = !1), (e = Tn), (Tn = null), null !== e && e(In));
          },
          !1
        );
        var Dn = function (e) {
          Sn = !1;
          var t = e - xn + On;
          t < On && Nn < On
            ? (8 > t && (t = 8), (On = t < Nn ? Nn : t))
            : (Nn = t),
            (xn = e + On),
            _n || ((_n = !0), window.postMessage(An, '*')),
            (t = Pn),
            (Pn = null),
            null !== t && t(e);
        };
        wn = function (e) {
          return (Tn = e), Sn || ((Sn = !0), requestAnimationFrame(Dn)), 0;
        };
      } else wn = requestIdleCallback;
    else
      wn = function (e) {
        return (
          setTimeout(function () {
            e({
              timeRemaining: function () {
                return 1 / 0;
              },
            });
          }),
          0
        );
      };
    var Mn = { rIC: wn },
      Fn = !0,
      Rn = 0,
      Ln = 1,
      Un = 2,
      Hn = 3,
      jn = 4,
      Vn = 5,
      Bn = ve,
      Wn = Rn,
      zn = Ln,
      Kn = Un,
      $n = I,
      qn = A,
      Qn = void 0,
      Yn = void 0;
    function Gn(e, t) {
      return (e !== Kn && e !== zn) || (t !== Kn && t !== zn)
        ? e === Wn && t !== Wn
          ? -255
          : e !== Wn && t === Wn
          ? 255
          : e - t
        : 0;
    }
    function Xn(e, t, n, r) {
      null !== n ? (n.next = t) : ((t.next = e.first), (e.first = t)),
        null !== r ? (t.next = r) : (e.last = t);
    }
    function Jn(e, t) {
      t = t.priorityLevel;
      var n = null;
      if (null !== e.last && 0 >= Gn(e.last.priorityLevel, t)) n = e.last;
      else
        for (e = e.first; null !== e && 0 >= Gn(e.priorityLevel, t); )
          (n = e), (e = e.next);
      return n;
    }
    function Zn(e, t) {
      var n = e.alternate,
        r = e.updateQueue;
      null === r &&
        (r = e.updateQueue = {
          first: null,
          last: null,
          hasForceUpdate: !1,
          callbackList: null,
        }),
        null !== n
          ? null === (e = n.updateQueue) &&
            (e = n.updateQueue = {
              first: null,
              last: null,
              hasForceUpdate: !1,
              callbackList: null,
            })
          : (e = null);
      var o = (Qn = r);
      n = Yn = e !== r ? e : null;
      var a = Jn(o, t),
        i = null !== a ? a.next : o.first;
      return null === n
        ? (Xn(o, t, a, i), null)
        : ((e = null !== (r = Jn(n, t)) ? r.next : n.first),
          Xn(o, t, a, i),
          (i === e && null !== i) || (a === r && null !== a)
            ? (null === r && (n.first = t), null === e && (n.last = null), null)
            : (Xn(
                n,
                (t = {
                  priorityLevel: t.priorityLevel,
                  partialState: t.partialState,
                  callback: t.callback,
                  isReplace: t.isReplace,
                  isForced: t.isForced,
                  isTopLevelUnmount: t.isTopLevelUnmount,
                  next: null,
                }),
                r,
                e
              ),
              t));
    }
    function er(e, t, n, r) {
      return 'function' == typeof (e = e.partialState) ? e.call(t, n, r) : e;
    }
    var tr = function (e, t, n, r) {
        Zn(e, {
          priorityLevel: r,
          partialState: t,
          callback: n,
          isReplace: !1,
          isForced: !1,
          isTopLevelUnmount: !1,
          next: null,
        });
      },
      nr = function (e, t, n, r) {
        Zn(e, {
          priorityLevel: r,
          partialState: t,
          callback: n,
          isReplace: !0,
          isForced: !1,
          isTopLevelUnmount: !1,
          next: null,
        });
      },
      rr = function (e, t, n) {
        Zn(e, {
          priorityLevel: n,
          partialState: null,
          callback: t,
          isReplace: !1,
          isForced: !0,
          isTopLevelUnmount: !1,
          next: null,
        });
      },
      or = function (e) {
        var t = e.updateQueue;
        return null === t || (e.tag !== $n && e.tag !== qn)
          ? Wn
          : null !== t.first
          ? t.first.priorityLevel
          : Wn;
      },
      ar = function (e, t, n, r) {
        var o = null === t.element;
        (e = Zn(
          e,
          (t = {
            priorityLevel: r,
            partialState: t,
            callback: n,
            isReplace: !1,
            isForced: !1,
            isTopLevelUnmount: o,
            next: null,
          })
        )),
          o &&
            ((n = Yn),
            null !== (o = Qn) &&
              null !== t.next &&
              ((t.next = null), (o.last = t)),
            null !== n &&
              null !== e &&
              null !== e.next &&
              ((e.next = null), (n.last = t)));
      },
      ir = function (e, t, n, r, o, i, l) {
        null !== e &&
          e.updateQueue === n &&
          (n = t.updateQueue = {
            first: n.first,
            last: n.last,
            callbackList: null,
            hasForceUpdate: !1,
          }),
          (e = n.callbackList);
        for (
          var u = n.hasForceUpdate, c = !0, s = n.first;
          null !== s && 0 >= Gn(s.priorityLevel, l);

        ) {
          var p;
          (n.first = s.next),
            null === n.first && (n.last = null),
            s.isReplace
              ? ((o = er(s, r, o, i)), (c = !0))
              : (p = er(s, r, o, i)) &&
                ((o = c ? a({}, o, p) : a(o, p)), (c = !1)),
            s.isForced && (u = !0),
            null === s.callback ||
              (s.isTopLevelUnmount && null !== s.next) ||
              ((e = null !== e ? e : []).push(s.callback), (t.effectTag |= Bn)),
            (s = s.next);
        }
        return (
          (n.callbackList = e),
          (n.hasForceUpdate = u),
          null !== n.first || null !== e || u || (t.updateQueue = null),
          o
        );
      },
      lr = function (e, t, n) {
        if (null !== (e = t.callbackList))
          for (t.callbackList = null, t = 0; t < e.length; t++) {
            var r = e[t];
            'function' != typeof r && f('191', r), r.call(n);
          }
      },
      ur = [],
      cr = -1,
      sr = function (e) {
        return { current: e };
      },
      pr = function (e) {
        0 > cr || ((e.current = ur[cr]), (ur[cr] = null), cr--);
      },
      dr = function (e, t) {
        cr++, (ur[cr] = e.current), (e.current = t);
      },
      fr = function () {
        for (; -1 < cr; ) (ur[cr] = null), cr--;
      },
      hr = Ne,
      gr = I,
      mr = A,
      vr = sr,
      yr = pr,
      br = dr,
      Cr = vr(u),
      Er = vr(!1),
      kr = u;
    function wr(e, t, n) {
      ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = n);
    }
    function Pr(e) {
      return e.tag === gr && null != e.type.childContextTypes;
    }
    function Tr(e, t) {
      var n = e.stateNode,
        r = e.type.childContextTypes;
      if ('function' != typeof n.getChildContext) return t;
      for (var o in (n = n.getChildContext()))
        o in r || f('108', ce(e) || 'Unknown', o);
      return a({}, t, n);
    }
    var _r = function (e) {
        return Pr(e) ? kr : Cr.current;
      },
      Sr = wr,
      xr = function (e, t) {
        var n = e.type.contextTypes;
        if (!n) return u;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var o,
          a = {};
        for (o in n) a[o] = t[o];
        return r && wr(e, t, a), a;
      },
      Nr = function () {
        return Er.current;
      },
      Or = function (e) {
        return e.tag === gr && null != e.type.contextTypes;
      },
      Ir = Pr,
      Ar = function (e) {
        Pr(e) && (yr(Er, e), yr(Cr, e));
      },
      Dr = function (e) {
        yr(Er, e), yr(Cr, e);
      },
      Mr = function (e, t, n) {
        null != Cr.cursor && f('168'), br(Cr, t, e), br(Er, n, e);
      },
      Fr = Tr,
      Rr = function (e) {
        if (!Pr(e)) return !1;
        var t = e.stateNode;
        return (
          (t = (t && t.__reactInternalMemoizedMergedChildContext) || u),
          (kr = Cr.current),
          br(Cr, t, e),
          br(Er, Er.current, e),
          !0
        );
      },
      Lr = function (e, t) {
        var n = e.stateNode;
        if ((n || f('169'), t)) {
          var r = Tr(e, kr);
          (n.__reactInternalMemoizedMergedChildContext = r),
            yr(Er, e),
            yr(Cr, e),
            br(Cr, r, e);
        } else yr(Er, e);
        br(Er, t, e);
      },
      Ur = function () {
        (kr = u), (Cr.current = u), (Er.current = !1);
      },
      Hr = function (e) {
        for ((hr(e) && e.tag === gr) || f('170'); e.tag !== mr; ) {
          if (Pr(e))
            return e.stateNode.__reactInternalMemoizedMergedChildContext;
          (e = e.return) || f('171');
        }
        return e.stateNode.context;
      },
      jr = 1,
      Vr = N,
      Br = I,
      Wr = A,
      zr = M,
      Kr = F,
      $r = D,
      qr = R,
      Qr = U,
      Yr = H,
      Gr = Rn,
      Xr = 0,
      Jr = se;
    function Zr(e, t, n) {
      (this.tag = e),
        (this.key = t),
        (this.stateNode = this.type = null),
        (this.sibling = this.child = this.return = null),
        (this.index = 0),
        (this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null),
        (this.internalContextTag = n),
        (this.effectTag = Jr),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.pendingWorkPriority = Gr),
        (this.alternate = null);
    }
    function eo(e, t, n) {
      var r = void 0;
      return (
        'function' == typeof e
          ? ((r =
              e.prototype && e.prototype.isReactComponent
                ? new Zr(Br, t, n)
                : new Zr(Vr, t, n)).type = e)
          : 'string' == typeof e
          ? ((r = new Zr(zr, t, n)).type = e)
          : 'object' == typeof e && null !== e && 'number' == typeof e.tag
          ? (r = e)
          : f('130', null == e ? e : typeof e, ''),
        r
      );
    }
    var to,
      no,
      ro = function (e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = new Zr(e.tag, e.key, e.internalContextTag)).type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.effectTag = Jr),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.pendingWorkPriority = t),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      },
      oo = function (e, t, n) {
        return (
          ((t = eo(e.type, e.key, t)).pendingProps = e.props),
          (t.pendingWorkPriority = n),
          t
        );
      },
      ao = function (e, t, n) {
        return (
          ((t = new Zr(Yr, null, t)).pendingProps = e),
          (t.pendingWorkPriority = n),
          t
        );
      },
      io = function (e, t, n) {
        return (
          ((t = new Zr(Kr, null, t)).pendingProps = e),
          (t.pendingWorkPriority = n),
          t
        );
      },
      lo = function () {
        var e = new Zr(zr, null, Xr);
        return (e.type = 'DELETED'), e;
      },
      uo = function (e, t, n) {
        return (
          ((t = new Zr(qr, e.key, t)).type = e.handler),
          (t.pendingProps = e),
          (t.pendingWorkPriority = n),
          t
        );
      },
      co = function (e, t) {
        return new Zr(Qr, null, t);
      },
      so = function (e, t, n) {
        return (
          ((t = new Zr($r, e.key, t)).pendingProps = e.children || []),
          (t.pendingWorkPriority = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            implementation: e.implementation,
          }),
          t
        );
      },
      po = function (e, t) {
        return e !== Gr && (t === Gr || t > e) ? e : t;
      },
      fo = function () {
        return new Zr(Wr, null, Xr);
      },
      ho = N,
      go = O,
      mo = I,
      vo = M;
    'function' == typeof Symbol && Symbol.for
      ? ((to = Symbol.for('react.coroutine')), (no = Symbol.for('react.yield')))
      : ((to = 60104), (no = 60105));
    var yo = {
        createCoroutine: function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: to,
            key: null == r ? null : '' + r,
            children: e,
            handler: t,
            props: n,
          };
        },
        createYield: function (e) {
          return { $$typeof: no, value: e };
        },
        isCoroutine: function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === to;
        },
        isYield: function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === no;
        },
        REACT_YIELD_TYPE: no,
        REACT_COROUTINE_TYPE: to,
      },
      bo =
        ('function' == typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.portal')) ||
        60106,
      Co = {
        createPortal: function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: bo,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        },
        isPortal: function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === bo;
        },
        REACT_PORTAL_TYPE: bo,
      },
      Eo = yo.REACT_COROUTINE_TYPE,
      ko = yo.REACT_YIELD_TYPE,
      wo = Co.REACT_PORTAL_TYPE,
      Po = ro,
      To = oo,
      _o = ao,
      So = io,
      xo = uo,
      No = co,
      Oo = so,
      Io = Array.isArray,
      Ao = O,
      Do = I,
      Mo = F,
      Fo = D,
      Ro = R,
      Lo = U,
      Uo = H,
      Ho = se,
      jo = de,
      Vo = ge,
      Bo = 'function' == typeof Symbol && Symbol.iterator,
      Wo =
        ('function' == typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103;
    function zo(e) {
      return null == e
        ? null
        : 'function' == typeof (e = (Bo && e[Bo]) || e['@@iterator'])
        ? e
        : null;
    }
    function Ko(e, t) {
      var n = t.ref;
      if (null !== n && 'function' != typeof n) {
        if (t._owner) {
          t = t._owner;
          var r = void 0;
          t &&
            ('number' == typeof t.tag
              ? (t.tag !== Do && f('110'), (r = t.stateNode))
              : (r = t.getPublicInstance())),
            r || f('147', n);
          var o = '' + n;
          return null !== e && null !== e.ref && e.ref._stringRef === o
            ? e.ref
            : (((e = function (e) {
                var t = r.refs === u ? (r.refs = {}) : r.refs;
                null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              e);
        }
        'string' != typeof n && f('148'), t._owner || f('149', n);
      }
      return n;
    }
    function $o(e, t) {
      'textarea' !== e.type &&
        f(
          '31',
          '[object Object]' === Object.prototype.toString.call(t)
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : t,
          ''
        );
    }
    function qo(e, t) {
      function n(n, r) {
        if (t) {
          if (!e) {
            if (null === r.alternate) return;
            r = r.alternate;
          }
          var o = n.lastEffect;
          null !== o
            ? ((o.nextEffect = r), (n.lastEffect = r))
            : (n.firstEffect = n.lastEffect = r),
            (r.nextEffect = null),
            (r.effectTag = Vo);
        }
      }
      function r(e, r) {
        if (!t) return null;
        for (; null !== r; ) n(e, r), (r = r.sibling);
        return null;
      }
      function o(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(t, n) {
        return e
          ? (((t = Po(t, n)).index = 0), (t.sibling = null), t)
          : ((t.pendingWorkPriority = n),
            (t.effectTag = Ho),
            (t.index = 0),
            (t.sibling = null),
            t);
      }
      function i(e, n, r) {
        return (
          (e.index = r),
          t
            ? null !== (r = e.alternate)
              ? (r = r.index) < n
                ? ((e.effectTag = jo), n)
                : r
              : ((e.effectTag = jo), n)
            : n
        );
      }
      function l(e) {
        return t && null === e.alternate && (e.effectTag = jo), e;
      }
      function u(e, t, n, r) {
        return null === t || t.tag !== Mo
          ? (((n = So(n, e.internalContextTag, r)).return = e), n)
          : (((t = a(t, r)).pendingProps = n), (t.return = e), t);
      }
      function c(e, t, n, r) {
        return null === t || t.type !== n.type
          ? (((r = To(n, e.internalContextTag, r)).ref = Ko(t, n)),
            (r.return = e),
            r)
          : (((r = a(t, r)).ref = Ko(t, n)),
            (r.pendingProps = n.props),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return null === t || t.tag !== Ro
          ? (((n = xo(n, e.internalContextTag, r)).return = e), n)
          : (((t = a(t, r)).pendingProps = n), (t.return = e), t);
      }
      function p(e, t, n, r) {
        return null === t || t.tag !== Lo
          ? (((t = No(n, e.internalContextTag, r)).type = n.value),
            (t.return = e),
            t)
          : (((t = a(t, r)).type = n.value), (t.return = e), t);
      }
      function d(e, t, n, r) {
        return null === t ||
          t.tag !== Fo ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((n = Oo(n, e.internalContextTag, r)).return = e), n)
          : (((t = a(t, r)).pendingProps = n.children || []),
            (t.return = e),
            t);
      }
      function h(e, t, n, r) {
        return null === t || t.tag !== Uo
          ? (((n = _o(n, e.internalContextTag, r)).return = e), n)
          : (((t = a(t, r)).pendingProps = n), (t.return = e), t);
      }
      function g(e, t, n) {
        if ('string' == typeof t || 'number' == typeof t)
          return ((t = So('' + t, e.internalContextTag, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case Wo:
              return (
                ((n = To(t, e.internalContextTag, n)).ref = Ko(null, t)),
                (n.return = e),
                n
              );
            case Eo:
              return ((t = xo(t, e.internalContextTag, n)).return = e), t;
            case ko:
              return (
                ((n = No(t, e.internalContextTag, n)).type = t.value),
                (n.return = e),
                n
              );
            case wo:
              return ((t = Oo(t, e.internalContextTag, n)).return = e), t;
          }
          if (Io(t) || zo(t))
            return ((t = _o(t, e.internalContextTag, n)).return = e), t;
          $o(e, t);
        }
        return null;
      }
      function m(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ('string' == typeof n || 'number' == typeof n)
          return null !== o ? null : u(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case Wo:
              return n.key === o ? c(e, t, n, r) : null;
            case Eo:
              return n.key === o ? s(e, t, n, r) : null;
            case ko:
              return null === o ? p(e, t, n, r) : null;
            case wo:
              return n.key === o ? d(e, t, n, r) : null;
          }
          if (Io(n) || zo(n)) return null !== o ? null : h(e, t, n, r);
          $o(e, n);
        }
        return null;
      }
      function v(e, t, n, r, o) {
        if ('string' == typeof r || 'number' == typeof r)
          return u(t, (e = e.get(n) || null), '' + r, o);
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case Wo:
              return c(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                o
              );
            case Eo:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                o
              );
            case ko:
              return p(t, (e = e.get(n) || null), r, o);
            case wo:
              return d(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                o
              );
          }
          if (Io(r) || zo(r)) return h(t, (e = e.get(n) || null), r, o);
          $o(t, r);
        }
        return null;
      }
      function y(e, a, l, u) {
        for (
          var c = null, s = null, p = a, d = (a = 0), f = null;
          null !== p && d < l.length;
          d++
        ) {
          p.index > d ? ((f = p), (p = null)) : (f = p.sibling);
          var h = m(e, p, l[d], u);
          if (null === h) {
            null === p && (p = f);
            break;
          }
          t && p && null === h.alternate && n(e, p),
            (a = i(h, a, d)),
            null === s ? (c = h) : (s.sibling = h),
            (s = h),
            (p = f);
        }
        if (d === l.length) return r(e, p), c;
        if (null === p) {
          for (; d < l.length; d++)
            (p = g(e, l[d], u)) &&
              ((a = i(p, a, d)),
              null === s ? (c = p) : (s.sibling = p),
              (s = p));
          return c;
        }
        for (p = o(e, p); d < l.length; d++)
          (f = v(p, e, d, l[d], u)) &&
            (t && null !== f.alternate && p.delete(null === f.key ? d : f.key),
            (a = i(f, a, d)),
            null === s ? (c = f) : (s.sibling = f),
            (s = f));
        return (
          t &&
            p.forEach(function (t) {
              return n(e, t);
            }),
          c
        );
      }
      function b(e, a, l, u) {
        var c = zo(l);
        'function' != typeof c && f('150'), null == (l = c.call(l)) && f('151');
        for (
          var s = (c = null), p = a, d = (a = 0), h = null, y = l.next();
          null !== p && !y.done;
          d++, y = l.next()
        ) {
          p.index > d ? ((h = p), (p = null)) : (h = p.sibling);
          var b = m(e, p, y.value, u);
          if (null === b) {
            p || (p = h);
            break;
          }
          t && p && null === b.alternate && n(e, p),
            (a = i(b, a, d)),
            null === s ? (c = b) : (s.sibling = b),
            (s = b),
            (p = h);
        }
        if (y.done) return r(e, p), c;
        if (null === p) {
          for (; !y.done; d++, y = l.next())
            null !== (y = g(e, y.value, u)) &&
              ((a = i(y, a, d)),
              null === s ? (c = y) : (s.sibling = y),
              (s = y));
          return c;
        }
        for (p = o(e, p); !y.done; d++, y = l.next())
          null !== (y = v(p, e, d, y.value, u)) &&
            (t && null !== y.alternate && p.delete(null === y.key ? d : y.key),
            (a = i(y, a, d)),
            null === s ? (c = y) : (s.sibling = y),
            (s = y));
        return (
          t &&
            p.forEach(function (t) {
              return n(e, t);
            }),
          c
        );
      }
      return function (e, t, o, i) {
        var u = 'object' == typeof o && null !== o;
        if (u)
          switch (o.$$typeof) {
            case Wo:
              e: {
                var c = o.key;
                for (u = t; null !== u; ) {
                  if (u.key === c) {
                    if (u.type === o.type) {
                      r(e, u.sibling),
                        ((t = a(u, i)).ref = Ko(u, o)),
                        (t.pendingProps = o.props),
                        (t.return = e),
                        (e = t);
                      break e;
                    }
                    r(e, u);
                    break;
                  }
                  n(e, u), (u = u.sibling);
                }
                ((i = To(o, e.internalContextTag, i)).ref = Ko(t, o)),
                  (i.return = e),
                  (e = i);
              }
              return l(e);
            case Eo:
              e: {
                for (u = o.key; null !== t; ) {
                  if (t.key === u) {
                    if (t.tag === Ro) {
                      r(e, t.sibling),
                        ((t = a(t, i)).pendingProps = o),
                        (t.return = e),
                        (e = t);
                      break e;
                    }
                    r(e, t);
                    break;
                  }
                  n(e, t), (t = t.sibling);
                }
                ((o = xo(o, e.internalContextTag, i)).return = e), (e = o);
              }
              return l(e);
            case ko:
              e: {
                if (null !== t) {
                  if (t.tag === Lo) {
                    r(e, t.sibling),
                      ((t = a(t, i)).type = o.value),
                      (t.return = e),
                      (e = t);
                    break e;
                  }
                  r(e, t);
                }
                ((t = No(o, e.internalContextTag, i)).type = o.value),
                  (t.return = e),
                  (e = t);
              }
              return l(e);
            case wo:
              e: {
                for (u = o.key; null !== t; ) {
                  if (t.key === u) {
                    if (
                      t.tag === Fo &&
                      t.stateNode.containerInfo === o.containerInfo &&
                      t.stateNode.implementation === o.implementation
                    ) {
                      r(e, t.sibling),
                        ((t = a(t, i)).pendingProps = o.children || []),
                        (t.return = e),
                        (e = t);
                      break e;
                    }
                    r(e, t);
                    break;
                  }
                  n(e, t), (t = t.sibling);
                }
                ((o = Oo(o, e.internalContextTag, i)).return = e), (e = o);
              }
              return l(e);
          }
        if ('string' == typeof o || 'number' == typeof o)
          return (
            (o = '' + o),
            null !== t && t.tag === Mo
              ? (r(e, t.sibling),
                ((t = a(t, i)).pendingProps = o),
                (t.return = e),
                (e = t))
              : (r(e, t),
                ((o = So(o, e.internalContextTag, i)).return = e),
                (e = o)),
            l(e)
          );
        if (Io(o)) return y(e, t, o, i);
        if (zo(o)) return b(e, t, o, i);
        if ((u && $o(e, o), void 0 === o))
          switch (e.tag) {
            case Do:
            case Ao:
              f('152', (o = e.type).displayName || o.name || 'Component');
          }
        return r(e, t);
      };
    }
    var Qo = {
        reconcileChildFibers: qo(!0, !0),
        reconcileChildFibersInPlace: qo(!1, !0),
        mountChildFibersInPlace: qo(!1, !1),
        cloneChildFibers: function (e, t) {
          if (
            (null !== e && t.child !== e.child && f('153'), null !== t.child)
          ) {
            e = t.child;
            var n = Po(e, e.pendingWorkPriority);
            for (
              n.pendingProps = e.pendingProps, t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Po(e, e.pendingWorkPriority)).pendingProps =
                  e.pendingProps),
                (n.return = t);
            n.sibling = null;
          }
        },
      },
      Yo = fe,
      Go = jr,
      Xo = Sr,
      Jo = xr,
      Zo = _r,
      ea = Or,
      ta = tr,
      na = nr,
      ra = rr,
      oa = ir,
      aa = Nr,
      ia = Oe;
    var la = Qo.mountChildFibersInPlace,
      ua = Qo.reconcileChildFibers,
      ca = Qo.reconcileChildFibersInPlace,
      sa = Qo.cloneChildFibers,
      pa = ir,
      da = xr,
      fa = _r,
      ha = Nr,
      ga = Rr,
      ma = Mr,
      va = Lr,
      ya = N,
      ba = O,
      Ca = I,
      Ea = A,
      ka = M,
      wa = F,
      Pa = D,
      Ta = R,
      _a = L,
      Sa = U,
      xa = H,
      Na = Rn,
      Oa = Vn,
      Ia = pe,
      Aa = de,
      Da = me,
      Ma = ye,
      Fa = be,
      Ra = ue.ReactCurrentOwner;
    function La(e, t, n, r, o) {
      function a(e, t, n) {
        i(e, t, n, t.pendingWorkPriority);
      }
      function i(e, t, n, r) {
        t.child =
          null === e
            ? la(t, t.child, n, r)
            : e.child === t.child
            ? ua(t, t.child, n, r)
            : ca(t, t.child, n, r);
      }
      function l(e, t) {
        var n = t.ref;
        null === n || (e && e.ref === n) || (t.effectTag |= Fa);
      }
      function s(e, t, n, r) {
        if ((l(e, t), !n)) return r && va(t, !1), d(e, t);
        (n = t.stateNode), (Ra.current = t);
        var o = n.render();
        return (
          (t.effectTag |= Ia),
          a(e, t, o),
          (t.memoizedState = n.state),
          (t.memoizedProps = n.props),
          r && va(t, !0),
          t.child
        );
      }
      function p(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ma(e, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ma(e, t.context, !1),
          b(e, t.containerInfo);
      }
      function d(e, t) {
        return sa(e, t), t.child;
      }
      function h(e, t) {
        switch (t.tag) {
          case Ea:
            p(t);
            break;
          case Ca:
            ga(t);
            break;
          case Pa:
            b(t, t.stateNode.containerInfo);
        }
        return null;
      }
      var g = e.shouldSetTextContent,
        m = e.useSyncScheduling,
        v = e.shouldDeprioritizeSubtree,
        y = t.pushHostContext,
        b = t.pushHostContainer,
        C = n.enterHydrationState,
        E = n.resetHydrationState,
        k = n.tryToClaimNextHydratableInstance,
        w = (e = (function (e, t, n, r) {
          function o(e, t) {
            (t.updater = a), (e.stateNode = t), le(t, e);
          }
          var a = {
            isMounted: ia,
            enqueueSetState: function (n, r, o) {
              n = ae(n);
              var a = t(n, !1);
              ta(n, r, void 0 === o ? null : o, a), e(n, a);
            },
            enqueueReplaceState: function (n, r, o) {
              n = ae(n);
              var a = t(n, !1);
              na(n, r, void 0 === o ? null : o, a), e(n, a);
            },
            enqueueForceUpdate: function (n, r) {
              n = ae(n);
              var o = t(n, !1);
              ra(n, void 0 === r ? null : r, o), e(n, o);
            },
          };
          return {
            adoptClassInstance: o,
            constructClassInstance: function (e, t) {
              var n = e.type,
                r = Zo(e),
                a = ea(e),
                i = a ? Jo(e, r) : u;
              return o(e, (t = new n(t, i))), a && Xo(e, r, i), t;
            },
            mountClassInstance: function (e, t) {
              var n = e.alternate,
                r = e.stateNode,
                o = r.state || null,
                i = e.pendingProps;
              i || f('158');
              var l = Zo(e);
              (r.props = i),
                (r.state = o),
                (r.refs = u),
                (r.context = Jo(e, l)),
                Fn &&
                  null != e.type &&
                  null != e.type.prototype &&
                  !0 === e.type.prototype.unstable_isAsyncReactComponent &&
                  (e.internalContextTag |= Go),
                'function' == typeof r.componentWillMount &&
                  ((l = r.state),
                  r.componentWillMount(),
                  l !== r.state && a.enqueueReplaceState(r, r.state, null),
                  null !== (l = e.updateQueue) &&
                    (r.state = oa(n, e, l, r, o, i, t))),
                'function' == typeof r.componentDidMount && (e.effectTag |= Yo);
            },
            updateClassInstance: function (e, t, o) {
              var i = t.stateNode;
              (i.props = t.memoizedProps), (i.state = t.memoizedState);
              var l = t.memoizedProps,
                u = t.pendingProps;
              u || (null == (u = l) && f('159'));
              var s = i.context,
                p = Zo(t);
              if (
                ((p = Jo(t, p)),
                'function' != typeof i.componentWillReceiveProps ||
                  (l === u && s === p) ||
                  ((s = i.state),
                  i.componentWillReceiveProps(u, p),
                  i.state !== s && a.enqueueReplaceState(i, i.state, null)),
                (s = t.memoizedState),
                (o =
                  null !== t.updateQueue
                    ? oa(e, t, t.updateQueue, i, s, u, o)
                    : s),
                !(
                  l !== u ||
                  s !== o ||
                  aa() ||
                  (null !== t.updateQueue && t.updateQueue.hasForceUpdate)
                ))
              )
                return (
                  'function' != typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= Yo),
                  !1
                );
              var d = u;
              if (
                null === l ||
                (null !== t.updateQueue && t.updateQueue.hasForceUpdate)
              )
                d = !0;
              else {
                var h = t.stateNode,
                  g = t.type;
                d =
                  'function' == typeof h.shouldComponentUpdate
                    ? h.shouldComponentUpdate(d, o, p)
                    : !g.prototype ||
                      !g.prototype.isPureReactComponent ||
                      !c(l, d) ||
                      !c(s, o);
              }
              return (
                d
                  ? ('function' == typeof i.componentWillUpdate &&
                      i.componentWillUpdate(u, o, p),
                    'function' == typeof i.componentDidUpdate &&
                      (t.effectTag |= Yo))
                  : ('function' != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= Yo),
                    n(t, u),
                    r(t, o)),
                (i.props = u),
                (i.state = o),
                (i.context = p),
                d
              );
            },
          };
        })(
          r,
          o,
          function (e, t) {
            e.memoizedProps = t;
          },
          function (e, t) {
            e.memoizedState = t;
          }
        )).adoptClassInstance,
        P = e.constructClassInstance,
        T = e.mountClassInstance,
        _ = e.updateClassInstance;
      return {
        beginWork: function (e, t, n) {
          if (t.pendingWorkPriority === Na || t.pendingWorkPriority > n)
            return h(0, t);
          switch (t.tag) {
            case ya:
              null !== e && f('155');
              var r = t.type,
                o = t.pendingProps,
                i = fa(t);
              return (
                (r = r(o, (i = da(t, i)))),
                (t.effectTag |= Ia),
                'object' == typeof r &&
                null !== r &&
                'function' == typeof r.render
                  ? ((t.tag = Ca),
                    (o = ga(t)),
                    w(t, r),
                    T(t, n),
                    (t = s(e, t, !0, o)))
                  : ((t.tag = ba),
                    a(e, t, r),
                    (t.memoizedProps = o),
                    (t = t.child)),
                t
              );
            case ba:
              e: {
                if (
                  ((o = t.type),
                  (n = t.pendingProps),
                  (r = t.memoizedProps),
                  ha())
                )
                  null === n && (n = r);
                else if (null === n || r === n) {
                  t = d(e, t);
                  break e;
                }
                (r = fa(t)),
                  (o = o(n, (r = da(t, r)))),
                  (t.effectTag |= Ia),
                  a(e, t, o),
                  (t.memoizedProps = n),
                  (t = t.child);
              }
              return t;
            case Ca:
              return (
                (o = ga(t)),
                (r = void 0),
                null === e
                  ? t.stateNode
                    ? f('153')
                    : (P(t, t.pendingProps), T(t, n), (r = !0))
                  : (r = _(e, t, n)),
                s(e, t, r, o)
              );
            case Ea:
              return (
                p(t),
                null !== (r = t.updateQueue)
                  ? (o = t.memoizedState) ===
                    (r = pa(e, t, r, null, o, null, n))
                    ? (E(), (t = d(e, t)))
                    : ((o = r.element),
                      (null !== e && null !== e.child) || !C(t)
                        ? (E(), a(e, t, o))
                        : ((t.effectTag |= Aa),
                          (t.child = la(t, t.child, o, n))),
                      (t.memoizedState = r),
                      (t = t.child))
                  : (E(), (t = d(e, t))),
                t
              );
            case ka:
              y(t), null === e && k(t), (o = t.type);
              var u = t.memoizedProps;
              return (
                null === (r = t.pendingProps) && null === (r = u) && f('154'),
                (i = null !== e ? e.memoizedProps : null),
                ha() || (null !== r && u !== r)
                  ? ((u = r.children),
                    g(o, r) ? (u = null) : i && g(o, i) && (t.effectTag |= Da),
                    l(e, t),
                    n !== Oa && !m && v(o, r)
                      ? ((t.pendingWorkPriority = Oa), (t = null))
                      : (a(e, t, u), (t.memoizedProps = r), (t = t.child)))
                  : (t = d(e, t)),
                t
              );
            case wa:
              return (
                null === e && k(t),
                null === (e = t.pendingProps) && (e = t.memoizedProps),
                (t.memoizedProps = e),
                null
              );
            case _a:
              t.tag = Ta;
            case Ta:
              return (
                (n = t.pendingProps),
                ha()
                  ? null === n &&
                    null === (n = e && e.memoizedProps) &&
                    f('154')
                  : (null !== n && t.memoizedProps !== n) ||
                    (n = t.memoizedProps),
                (o = n.children),
                (r = t.pendingWorkPriority),
                (t.stateNode =
                  null === e
                    ? la(t, t.stateNode, o, r)
                    : e.child === t.child
                    ? ua(t, t.stateNode, o, r)
                    : ca(t, t.stateNode, o, r)),
                (t.memoizedProps = n),
                t.stateNode
              );
            case Sa:
              return null;
            case Pa:
              e: {
                if (
                  (b(t, t.stateNode.containerInfo),
                  (n = t.pendingWorkPriority),
                  (o = t.pendingProps),
                  ha())
                )
                  null === o && null == (o = e && e.memoizedProps) && f('154');
                else if (null === o || t.memoizedProps === o) {
                  t = d(e, t);
                  break e;
                }
                null === e ? (t.child = ca(t, t.child, o, n)) : a(e, t, o),
                  (t.memoizedProps = o),
                  (t = t.child);
              }
              return t;
            case xa:
              e: {
                if (((n = t.pendingProps), ha()))
                  null === n && (n = t.memoizedProps);
                else if (null === n || t.memoizedProps === n) {
                  t = d(e, t);
                  break e;
                }
                a(e, t, n), (t.memoizedProps = n), (t = t.child);
              }
              return t;
            default:
              f('156');
          }
        },
        beginFailedWork: function (e, t, n) {
          switch (t.tag) {
            case Ca:
              ga(t);
              break;
            case Ea:
              p(t);
              break;
            default:
              f('157');
          }
          return (
            (t.effectTag |= Ma),
            null === e
              ? (t.child = null)
              : t.child !== e.child && (t.child = e.child),
            t.pendingWorkPriority === Na || t.pendingWorkPriority > n
              ? h(0, t)
              : ((t.firstEffect = null),
                (t.lastEffect = null),
                i(e, t, null, n),
                t.tag === Ca &&
                  ((e = t.stateNode),
                  (t.memoizedProps = e.props),
                  (t.memoizedState = e.state)),
                t.child)
          );
        },
      };
    }
    var Ua = Qo.reconcileChildFibers,
      Ha = Ar,
      ja = Dr,
      Va = N,
      Ba = O,
      Wa = I,
      za = A,
      Ka = M,
      $a = F,
      qa = D,
      Qa = R,
      Ya = L,
      Ga = U,
      Xa = H,
      Ja = de,
      Za = be,
      ei = fe,
      ti = Vn;
    var ni = null,
      ri = null;
    function oi(e) {
      return function (t) {
        try {
          return e(t);
        } catch (e) {}
      };
    }
    var ai = function (e) {
        if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (ni = oi(function (e) {
            return t.onCommitFiberRoot(n, e);
          })),
            (ri = oi(function (e) {
              return t.onCommitFiberUnmount(n, e);
            }));
        } catch (e) {}
        return !0;
      },
      ii = I,
      li = A,
      ui = M,
      ci = F,
      si = D,
      pi = R,
      di = lr,
      fi = function (e) {
        'function' == typeof ri && ri(e);
      },
      hi = de,
      gi = fe,
      mi = ve,
      vi = me;
    var yi = sr,
      bi = pr,
      Ci = dr,
      Ei = {};
    var ki = M,
      wi = F,
      Pi = A,
      Ti = ge,
      _i = de,
      Si = lo;
    var xi = Ar,
      Ni = fr,
      Oi = ue.ReactCurrentOwner,
      Ii = ro,
      Ai = po,
      Di = function (e) {
        'function' == typeof ni && ni(e);
      },
      Mi = Rn,
      Fi = Ln,
      Ri = Un,
      Li = Hn,
      Ui = jn,
      Hi = Vn,
      ji = jr,
      Vi = pe,
      Bi = de,
      Wi = fe,
      zi = he,
      Ki = ge,
      $i = me,
      qi = ve,
      Qi = ye,
      Yi = be,
      Gi = A,
      Xi = M,
      Ji = D,
      Zi = I,
      el = or,
      tl = Ur;
    function nl(e) {
      function t() {
        for (; null !== K && K.current.pendingWorkPriority === Mi; ) {
          K.isScheduled = !1;
          var e = K.nextScheduledRoot;
          if (((K.nextScheduledRoot = null), K === $))
            return ($ = K = null), (B = Mi), null;
          K = e;
        }
        e = K;
        for (var t = null, n = Mi; null !== e; )
          e.current.pendingWorkPriority !== Mi &&
            (n === Mi || n > e.current.pendingWorkPriority) &&
            ((n = e.current.pendingWorkPriority), (t = e)),
            (e = e.nextScheduledRoot);
        null !== t
          ? ((B = n),
            Ni(),
            tl(),
            E(),
            (V = Ii(t.current, n)),
            t !== re && ((ne = 0), (re = t)))
          : ((B = Mi), (re = V = null));
      }
      function n(n) {
        (Z = !0), (z = null);
        var r = n.stateNode;
        if (
          (r.current === n && f('177'),
          (B !== Fi && B !== Ri) || ne++,
          (Oi.current = null),
          n.effectTag > Vi)
        )
          if (null !== n.lastEffect) {
            n.lastEffect.nextEffect = n;
            var o = n.firstEffect;
          } else o = n;
        else o = n.firstEffect;
        for (M(), W = o; null !== W; ) {
          var a = !1,
            i = void 0;
          try {
            for (; null !== W; ) {
              var l = W.effectTag;
              if ((l & $i && e.resetTextContent(W.stateNode), l & Yi)) {
                var u = W.alternate;
                null !== u && I(u);
              }
              switch (l & ~(qi | Qi | $i | Yi | Vi)) {
                case Bi:
                  _(W), (W.effectTag &= ~Bi);
                  break;
                case zi:
                  _(W), (W.effectTag &= ~Bi), x(W.alternate, W);
                  break;
                case Wi:
                  x(W.alternate, W);
                  break;
                case Ki:
                  (ee = !0), S(W), (ee = !1);
              }
              W = W.nextEffect;
            }
          } catch (e) {
            (a = !0), (i = e);
          }
          a &&
            (null === W && f('178'), s(W, i), null !== W && (W = W.nextEffect));
        }
        for (F(), r.current = n, W = o; null !== W; ) {
          (r = !1), (o = void 0);
          try {
            for (; null !== W; ) {
              var c = W.effectTag;
              if ((c & (Wi | qi) && N(W.alternate, W), c & Yi && O(W), c & Qi))
                switch (
                  ((a = W),
                  (i = void 0),
                  null !== Q &&
                    ((i = Q.get(a)),
                    Q.delete(a),
                    null == i &&
                      null !== a.alternate &&
                      ((a = a.alternate), (i = Q.get(a)), Q.delete(a))),
                  null == i && f('184'),
                  a.tag)
                ) {
                  case Zi:
                    a.stateNode.componentDidCatch(i.error, {
                      componentStack: i.componentStack,
                    });
                    break;
                  case Gi:
                    null === X && (X = i.error);
                    break;
                  default:
                    f('157');
                }
              var p = W.nextEffect;
              (W.nextEffect = null), (W = p);
            }
          } catch (e) {
            (r = !0), (o = e);
          }
          r &&
            (null === W && f('178'), s(W, o), null !== W && (W = W.nextEffect));
        }
        (Z = !1),
          'function' == typeof Di && Di(n.stateNode),
          G && (G.forEach(m), (G = null)),
          t();
      }
      function r(e) {
        for (;;) {
          var t = T(e.alternate, e, B),
            n = e.return,
            r = e.sibling,
            o = e;
          if (!(o.pendingWorkPriority !== Mi && o.pendingWorkPriority > B)) {
            for (var a = el(o), i = o.child; null !== i; )
              (a = Ai(a, i.pendingWorkPriority)), (i = i.sibling);
            o.pendingWorkPriority = a;
          }
          if (null !== t) return t;
          if (
            (null !== n &&
              (null === n.firstEffect && (n.firstEffect = e.firstEffect),
              null !== e.lastEffect &&
                (null !== n.lastEffect &&
                  (n.lastEffect.nextEffect = e.firstEffect),
                (n.lastEffect = e.lastEffect)),
              e.effectTag > Vi &&
                (null !== n.lastEffect
                  ? (n.lastEffect.nextEffect = e)
                  : (n.firstEffect = e),
                (n.lastEffect = e))),
            null !== r)
          )
            return r;
          if (null === n) {
            z = e;
            break;
          }
          e = n;
        }
        return null;
      }
      function o(e) {
        var t = w(e.alternate, e, B);
        return null === t && (t = r(e)), (Oi.current = null), t;
      }
      function a(e) {
        var t = P(e.alternate, e, B);
        return null === t && (t = r(e)), (Oi.current = null), t;
      }
      function i(e) {
        c(Hi, e);
      }
      function l() {
        if (null !== Q && 0 < Q.size && B === Ri)
          for (; null !== V; ) {
            var e = V;
            if (
              null ===
                (V =
                  null !== Q &&
                  (Q.has(e) || (null !== e.alternate && Q.has(e.alternate)))
                    ? a(V)
                    : o(V)) &&
              (null === z && f('179'),
              (R = Ri),
              n(z),
              (R = B),
              null === Q || 0 === Q.size || B !== Ri)
            )
              break;
          }
      }
      function u(e, r) {
        if (
          (null !== z ? ((R = Ri), n(z), l()) : null === V && t(),
          !(B === Mi || B > e))
        ) {
          R = B;
          e: for (;;) {
            if (B <= Ri)
              for (
                ;
                null !== V &&
                !(
                  null === (V = o(V)) &&
                  (null === z && f('179'),
                  (R = Ri),
                  n(z),
                  (R = B),
                  l(),
                  B === Mi || B > e || B > Ri)
                );

              );
            else if (null !== r)
              for (; null !== V && !U; )
                if (1 < r.timeRemaining()) {
                  if (null === (V = o(V)))
                    if ((null === z && f('179'), 1 < r.timeRemaining())) {
                      if (
                        ((R = Ri),
                        n(z),
                        (R = B),
                        l(),
                        B === Mi || B > e || B < Li)
                      )
                        break;
                    } else U = !0;
                } else U = !0;
            switch (B) {
              case Fi:
              case Ri:
                if (B <= e) continue e;
                break e;
              case Li:
              case Ui:
              case Hi:
                if (null === r) break e;
                if (!U && B <= e) continue e;
                break e;
              case Mi:
                break e;
              default:
                f('181');
            }
          }
        }
      }
      function c(e, t) {
        L && f('182'), (L = !0);
        var n = R,
          r = !1,
          o = null;
        try {
          u(e, t);
        } catch (e) {
          (r = !0), (o = e);
        }
        for (; r; ) {
          if (J) {
            X = o;
            break;
          }
          var l = V;
          if (null === l) J = !0;
          else {
            var c = s(l, o);
            if ((null === c && f('183'), !J)) {
              try {
                (r = c), (o = e), (c = t);
                for (var p = r; null !== l; ) {
                  switch (l.tag) {
                    case Zi:
                      xi(l);
                      break;
                    case Xi:
                      C(l);
                      break;
                    case Gi:
                      b(l);
                      break;
                    case Ji:
                      b(l);
                  }
                  if (l === p || l.alternate === p) break;
                  l = l.return;
                }
                (V = a(r)), u(o, c);
              } catch (e) {
                (r = !0), (o = e);
                continue;
              }
              break;
            }
          }
        }
        if (
          ((R = n),
          null !== t && (q = !1),
          B > Ri && !q && (A(i), (q = !0)),
          (e = X),
          (J = U = L = !1),
          (re = Y = Q = X = null),
          (ne = 0),
          null !== e)
        )
          throw e;
      }
      function s(e, t) {
        var n = (Oi.current = null),
          r = !1,
          o = !1,
          a = null;
        if (e.tag === Gi) (n = e), p(e) && (J = !0);
        else
          for (var i = e.return; null !== i && null === n; ) {
            if (
              (i.tag === Zi
                ? 'function' == typeof i.stateNode.componentDidCatch &&
                  ((r = !0), (a = ce(i)), (n = i), (o = !0))
                : i.tag === Gi && (n = i),
              p(i))
            ) {
              if (
                ee ||
                (null !== G &&
                  (G.has(i) || (null !== i.alternate && G.has(i.alternate))))
              )
                return null;
              (n = null), (o = !1);
            }
            i = i.return;
          }
        if (null !== n) {
          null === Y && (Y = new Set()), Y.add(n);
          var l = '';
          i = e;
          do {
            e: switch (i.tag) {
              case ho:
              case go:
              case mo:
              case vo:
                var u = i._debugOwner,
                  c = i._debugSource,
                  s = ce(i),
                  d = null;
                u && (d = ce(u)),
                  (s =
                    '\n    in ' +
                    (s || 'Unknown') +
                    ((u = c)
                      ? ' (at ' +
                        u.fileName.replace(/^.*[\\\/]/, '') +
                        ':' +
                        u.lineNumber +
                        ')'
                      : d
                      ? ' (created by ' + d + ')'
                      : ''));
                break e;
              default:
                s = '';
            }
            (l += s), (i = i.return);
          } while (i);
          (i = l),
            (e = ce(e)),
            null === Q && (Q = new Map()),
            (t = {
              componentName: e,
              componentStack: i,
              error: t,
              errorBoundary: r ? n.stateNode : null,
              errorBoundaryFound: r,
              errorBoundaryName: a,
              willRetry: o,
            }),
            Q.set(n, t);
          try {
            console.error(t.error);
          } catch (e) {
            console.error(e);
          }
          return Z ? (null === G && (G = new Set()), G.add(n)) : m(n), n;
        }
        return null === X && (X = t), null;
      }
      function p(e) {
        return (
          null !== Y &&
          (Y.has(e) || (null !== e.alternate && Y.has(e.alternate)))
        );
      }
      function d(e, t) {
        return h(e, t);
      }
      function h(e, t) {
        ne > te && ((J = !0), f('185')), !L && t <= B && (V = null);
        for (var n = !0; null !== e && n; ) {
          if (
            ((n = !1),
            (e.pendingWorkPriority === Mi || e.pendingWorkPriority > t) &&
              ((n = !0), (e.pendingWorkPriority = t)),
            null !== e.alternate &&
              (e.alternate.pendingWorkPriority === Mi ||
                e.alternate.pendingWorkPriority > t) &&
              ((n = !0), (e.alternate.pendingWorkPriority = t)),
            null === e.return)
          ) {
            if (e.tag !== Gi) break;
            var r = e.stateNode;
            if (
              (t === Mi ||
                r.isScheduled ||
                ((r.isScheduled = !0),
                $ ? ($.nextScheduledRoot = r) : (K = r),
                ($ = r)),
              !L)
            )
              switch (t) {
                case Fi:
                  c(j ? Fi : Ri, null);
                  break;
                case Ri:
                  H || f('186');
                  break;
                default:
                  q || (A(i), (q = !0));
              }
          }
          e = e.return;
        }
      }
      function g(e, t) {
        var n = R;
        return (
          n === Mi && (n = !D || e.internalContextTag & ji || t ? Ui : Fi),
          n === Fi && (L || H) ? Ri : n
        );
      }
      function m(e) {
        h(e, Ri);
      }
      var v = (function (e) {
          function t(e) {
            return e === Ei && f('174'), e;
          }
          var n = e.getChildHostContext,
            r = e.getRootHostContext,
            o = yi(Ei),
            a = yi(Ei),
            i = yi(Ei);
          return {
            getHostContext: function () {
              return t(o.current);
            },
            getRootHostContainer: function () {
              return t(i.current);
            },
            popHostContainer: function (e) {
              bi(o, e), bi(a, e), bi(i, e);
            },
            popHostContext: function (e) {
              a.current === e && (bi(o, e), bi(a, e));
            },
            pushHostContainer: function (e, t) {
              Ci(i, t, e), (t = r(t)), Ci(a, e, e), Ci(o, t, e);
            },
            pushHostContext: function (e) {
              var r = t(i.current),
                l = t(o.current);
              l !== (r = n(l, e.type, r)) && (Ci(a, e, e), Ci(o, r, e));
            },
            resetHostContainer: function () {
              (o.current = Ei), (i.current = Ei);
            },
          };
        })(e),
        y = (function (e) {
          function t(e, t) {
            var n = Si();
            (n.stateNode = t),
              (n.return = e),
              (n.effectTag = Ti),
              null !== e.lastEffect
                ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
                : (e.firstEffect = e.lastEffect = n);
          }
          function n(e, t) {
            switch (e.tag) {
              case ki:
                return a(t, e.type, e.pendingProps);
              case wi:
                return i(t, e.pendingProps);
              default:
                return !1;
            }
          }
          function r(e) {
            for (e = e.return; null !== e && e.tag !== ki && e.tag !== Pi; )
              e = e.return;
            h = e;
          }
          var o = e.shouldSetTextContent,
            a = e.canHydrateInstance,
            i = e.canHydrateTextInstance,
            l = e.getNextHydratableSibling,
            u = e.getFirstHydratableChild,
            c = e.hydrateInstance,
            s = e.hydrateTextInstance,
            p = e.didNotHydrateInstance,
            d = e.didNotFindHydratableInstance;
          if (
            ((e = e.didNotFindHydratableTextInstance),
            !(a && i && l && u && c && s && p && d && e))
          )
            return {
              enterHydrationState: function () {
                return !1;
              },
              resetHydrationState: function () {},
              tryToClaimNextHydratableInstance: function () {},
              prepareToHydrateHostInstance: function () {
                f('175');
              },
              prepareToHydrateHostTextInstance: function () {
                f('176');
              },
              popHydrationState: function () {
                return !1;
              },
            };
          var h = null,
            g = null,
            m = !1;
          return {
            enterHydrationState: function (e) {
              return (g = u(e.stateNode.containerInfo)), (h = e), (m = !0);
            },
            resetHydrationState: function () {
              (g = h = null), (m = !1);
            },
            tryToClaimNextHydratableInstance: function (e) {
              if (m) {
                var r = g;
                if (r) {
                  if (!n(e, r)) {
                    if (!(r = l(r)) || !n(e, r))
                      return (e.effectTag |= _i), (m = !1), void (h = e);
                    t(h, g);
                  }
                  (e.stateNode = r), (h = e), (g = u(r));
                } else (e.effectTag |= _i), (m = !1), (h = e);
              }
            },
            prepareToHydrateHostInstance: function (e, t, n) {
              return (
                (t = c(e.stateNode, e.type, e.memoizedProps, t, n, e)),
                (e.updateQueue = t),
                null !== t
              );
            },
            prepareToHydrateHostTextInstance: function (e) {
              return s(e.stateNode, e.memoizedProps, e);
            },
            popHydrationState: function (e) {
              if (e !== h) return !1;
              if (!m) return r(e), (m = !0), !1;
              var n = e.type;
              if (
                e.tag !== ki ||
                ('head' !== n && 'body' !== n && !o(n, e.memoizedProps))
              )
                for (n = g; n; ) t(e, n), (n = l(n));
              return r(e), (g = h ? l(e.stateNode) : null), !0;
            },
          };
        })(e),
        b = v.popHostContainer,
        C = v.popHostContext,
        E = v.resetHostContainer,
        k = La(e, v, y, d, g),
        w = k.beginWork,
        P = k.beginFailedWork,
        T = (function (e, t, n) {
          var r = e.createInstance,
            o = e.createTextInstance,
            a = e.appendInitialChild,
            i = e.finalizeInitialChildren,
            l = e.prepareUpdate,
            u = t.getRootHostContainer,
            c = t.popHostContext,
            s = t.getHostContext,
            p = t.popHostContainer,
            d = n.prepareToHydrateHostInstance,
            h = n.prepareToHydrateHostTextInstance,
            g = n.popHydrationState;
          return {
            completeWork: function (e, t, n) {
              var m = t.pendingProps;
              switch (
                (null === m
                  ? (m = t.memoizedProps)
                  : (t.pendingWorkPriority === ti && n !== ti) ||
                    (t.pendingProps = null),
                t.tag)
              ) {
                case Ba:
                  return null;
                case Wa:
                  return Ha(t), null;
                case za:
                  return (
                    p(t),
                    ja(t),
                    (m = t.stateNode).pendingContext &&
                      ((m.context = m.pendingContext),
                      (m.pendingContext = null)),
                    (null !== e && null !== e.child) ||
                      (g(t), (t.effectTag &= ~Ja)),
                    null
                  );
                case Ka:
                  c(t), (n = u());
                  var v = t.type;
                  if (null !== e && null != t.stateNode) {
                    var y = e.memoizedProps,
                      b = t.stateNode,
                      C = s();
                    (m = l(b, v, y, m, n, C)),
                      (t.updateQueue = m) && (t.effectTag |= ei),
                      e.ref !== t.ref && (t.effectTag |= Za);
                  } else {
                    if (!m) return null === t.stateNode && f('166'), null;
                    if (((e = s()), g(t))) d(t, n, e) && (t.effectTag |= ei);
                    else {
                      e = r(v, m, n, e, t);
                      e: for (y = t.child; null !== y; ) {
                        if (y.tag === Ka || y.tag === $a) a(e, y.stateNode);
                        else if (y.tag !== qa && null !== y.child) {
                          y = y.child;
                          continue;
                        }
                        if (y === t) break e;
                        for (; null === y.sibling; ) {
                          if (null === y.return || y.return === t) break e;
                          y = y.return;
                        }
                        y = y.sibling;
                      }
                      i(e, v, m, n) && (t.effectTag |= ei), (t.stateNode = e);
                    }
                    null !== t.ref && (t.effectTag |= Za);
                  }
                  return null;
                case $a:
                  if (e && null != t.stateNode)
                    e.memoizedProps !== m && (t.effectTag |= ei);
                  else {
                    if ('string' != typeof m)
                      return null === t.stateNode && f('166'), null;
                    (e = u()),
                      (n = s()),
                      g(t)
                        ? h(t) && (t.effectTag |= ei)
                        : (t.stateNode = o(m, e, n, t));
                  }
                  return null;
                case Qa:
                  (m = t.memoizedProps) || f('165'), (t.tag = Ya), (n = []);
                  e: for ((v = t.stateNode) && (v.return = t); null !== v; ) {
                    if (v.tag === Ka || v.tag === $a || v.tag === qa) f('164');
                    else if (v.tag === Ga) n.push(v.type);
                    else if (null !== v.child) {
                      (v.child.return = v), (v = v.child);
                      continue;
                    }
                    for (; null === v.sibling; ) {
                      if (null === v.return || v.return === t) break e;
                      v = v.return;
                    }
                    (v.sibling.return = v.return), (v = v.sibling);
                  }
                  return (
                    (m = (v = m.handler)(m.props, n)),
                    (t.child = Ua(
                      t,
                      null !== e ? e.child : null,
                      m,
                      t.pendingWorkPriority
                    )),
                    t.child
                  );
                case Ya:
                  return (t.tag = Qa), null;
                case Ga:
                case Xa:
                  return null;
                case qa:
                  return (t.effectTag |= ei), p(t), null;
                case Va:
                  f('167');
                default:
                  f('156');
              }
            },
          };
        })(e, v, y).completeWork,
        _ = (v = (function (e, t) {
          function n(e) {
            var n = e.ref;
            if (null !== n)
              try {
                n(null);
              } catch (n) {
                t(e, n);
              }
          }
          function r(e) {
            return e.tag === ui || e.tag === li || e.tag === si;
          }
          function o(e) {
            for (var t = e; ; )
              if ((i(t), null !== t.child && t.tag !== si))
                (t.child.return = t), (t = t.child);
              else {
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) return;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
          }
          function a(e) {
            for (var t = e, n = !1, r = void 0, a = void 0; ; ) {
              if (!n) {
                n = t.return;
                e: for (;;) {
                  switch ((null === n && f('160'), n.tag)) {
                    case ui:
                      (r = n.stateNode), (a = !1);
                      break e;
                    case li:
                    case si:
                      (r = n.stateNode.containerInfo), (a = !0);
                      break e;
                  }
                  n = n.return;
                }
                n = !0;
              }
              if (t.tag === ui || t.tag === ci)
                o(t), a ? v(r, t.stateNode) : m(r, t.stateNode);
              else if (
                (t.tag === si ? (r = t.stateNode.containerInfo) : i(t),
                null !== t.child)
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return;
                (t = t.return).tag === si && (n = !1);
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          function i(e) {
            switch (('function' == typeof fi && fi(e), e.tag)) {
              case ii:
                n(e);
                var r = e.stateNode;
                if ('function' == typeof r.componentWillUnmount)
                  try {
                    (r.props = e.memoizedProps),
                      (r.state = e.memoizedState),
                      r.componentWillUnmount();
                  } catch (n) {
                    t(e, n);
                  }
                break;
              case ui:
                n(e);
                break;
              case pi:
                o(e.stateNode);
                break;
              case si:
                a(e);
            }
          }
          var l = e.commitMount,
            u = e.commitUpdate,
            c = e.resetTextContent,
            s = e.commitTextUpdate,
            p = e.appendChild,
            d = e.appendChildToContainer,
            h = e.insertBefore,
            g = e.insertInContainerBefore,
            m = e.removeChild,
            v = e.removeChildFromContainer,
            y = e.getPublicInstance;
          return {
            commitPlacement: function (e) {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (r(t)) {
                    var n = t;
                    break e;
                  }
                  t = t.return;
                }
                f('160'), (n = void 0);
              }
              var o = (t = void 0);
              switch (n.tag) {
                case ui:
                  (t = n.stateNode), (o = !1);
                  break;
                case li:
                case si:
                  (t = n.stateNode.containerInfo), (o = !0);
                  break;
                default:
                  f('161');
              }
              n.effectTag & vi && (c(t), (n.effectTag &= ~vi));
              e: t: for (n = e; ; ) {
                for (; null === n.sibling; ) {
                  if (null === n.return || r(n.return)) {
                    n = null;
                    break e;
                  }
                  n = n.return;
                }
                for (
                  n.sibling.return = n.return, n = n.sibling;
                  n.tag !== ui && n.tag !== ci;

                ) {
                  if (n.effectTag & hi) continue t;
                  if (null === n.child || n.tag === si) continue t;
                  (n.child.return = n), (n = n.child);
                }
                if (!(n.effectTag & hi)) {
                  n = n.stateNode;
                  break e;
                }
              }
              for (var a = e; ; ) {
                if (a.tag === ui || a.tag === ci)
                  n
                    ? o
                      ? g(t, a.stateNode, n)
                      : h(t, a.stateNode, n)
                    : o
                    ? d(t, a.stateNode)
                    : p(t, a.stateNode);
                else if (a.tag !== si && null !== a.child) {
                  (a.child.return = a), (a = a.child);
                  continue;
                }
                if (a === e) break;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === e) return;
                  a = a.return;
                }
                (a.sibling.return = a.return), (a = a.sibling);
              }
            },
            commitDeletion: function (e) {
              a(e),
                (e.return = null),
                (e.child = null),
                e.alternate &&
                  ((e.alternate.child = null), (e.alternate.return = null));
            },
            commitWork: function (e, t) {
              switch (t.tag) {
                case ii:
                  break;
                case ui:
                  var n = t.stateNode;
                  if (null != n) {
                    var r = t.memoizedProps;
                    e = null !== e ? e.memoizedProps : r;
                    var o = t.type,
                      a = t.updateQueue;
                    (t.updateQueue = null), null !== a && u(n, a, o, e, r, t);
                  }
                  break;
                case ci:
                  null === t.stateNode && f('162'),
                    (n = t.memoizedProps),
                    s(t.stateNode, null !== e ? e.memoizedProps : n, n);
                  break;
                case li:
                case si:
                  break;
                default:
                  f('163');
              }
            },
            commitLifeCycles: function (e, t) {
              switch (t.tag) {
                case ii:
                  var n = t.stateNode;
                  if (t.effectTag & gi)
                    if (null === e)
                      (n.props = t.memoizedProps),
                        (n.state = t.memoizedState),
                        n.componentDidMount();
                    else {
                      var r = e.memoizedProps;
                      (e = e.memoizedState),
                        (n.props = t.memoizedProps),
                        (n.state = t.memoizedState),
                        n.componentDidUpdate(r, e);
                    }
                  t.effectTag & mi &&
                    null !== t.updateQueue &&
                    di(t, t.updateQueue, n);
                  break;
                case li:
                  null !== (e = t.updateQueue) &&
                    di(t, e, t.child && t.child.stateNode);
                  break;
                case ui:
                  (n = t.stateNode),
                    null === e &&
                      t.effectTag & gi &&
                      l(n, t.type, t.memoizedProps, t);
                  break;
                case ci:
                case si:
                  break;
                default:
                  f('163');
              }
            },
            commitAttachRef: function (e) {
              var t = e.ref;
              if (null !== t) {
                var n = e.stateNode;
                switch (e.tag) {
                  case ui:
                    t(y(n));
                    break;
                  default:
                    t(n);
                }
              }
            },
            commitDetachRef: function (e) {
              null !== (e = e.ref) && e(null);
            },
          };
        })(e, s)).commitPlacement,
        S = v.commitDeletion,
        x = v.commitWork,
        N = v.commitLifeCycles,
        O = v.commitAttachRef,
        I = v.commitDetachRef,
        A = e.scheduleDeferredCallback,
        D = e.useSyncScheduling,
        M = e.prepareForCommit,
        F = e.resetAfterCommit,
        R = Mi,
        L = !1,
        U = !1,
        H = !1,
        j = !1,
        V = null,
        B = Mi,
        W = null,
        z = null,
        K = null,
        $ = null,
        q = !1,
        Q = null,
        Y = null,
        G = null,
        X = null,
        J = !1,
        Z = !1,
        ee = !1,
        te = 1e3,
        ne = 0,
        re = null;
      return {
        scheduleUpdate: d,
        getPriorityContext: g,
        batchedUpdates: function (e, t) {
          var n = H;
          H = !0;
          try {
            return e(t);
          } finally {
            (H = n), L || H || c(Ri, null);
          }
        },
        unbatchedUpdates: function (e) {
          var t = j,
            n = H;
          (j = H), (H = !1);
          try {
            return e();
          } finally {
            (H = n), (j = t);
          }
        },
        flushSync: function (e) {
          var t = H,
            n = R;
          (H = !0), (R = Fi);
          try {
            return e();
          } finally {
            (H = t), (R = n), L && f('187'), c(Ri, null);
          }
        },
        deferredUpdates: function (e) {
          var t = R;
          R = Ui;
          try {
            return e();
          } finally {
            R = t;
          }
        },
      };
    }
    function rl() {
      f('196');
    }
    function ol(e) {
      return e
        ? 'number' == typeof (e = ae(e)).tag
          ? rl(e)
          : e._processChildContext(e._context)
        : u;
    }
    ol._injectFiber = function (e) {
      rl = e;
    };
    var al = ar,
      il = Hr,
      ll = Ir,
      ul = Fr,
      cl = M,
      sl = Ie,
      pl = Ae;
    ol._injectFiber(function (e) {
      var t = il(e);
      return ll(e) ? ul(e, t, !1) : t;
    });
    var dl = V;
    function fl(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function hl(e, t) {
      var n,
        r = fl(e);
      for (e = 0; r; ) {
        if (r.nodeType === dl) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = fl(r);
      }
    }
    var gl = null;
    function ml() {
      return (
        !gl &&
          o.canUseDOM &&
          (gl =
            'textContent' in document.documentElement
              ? 'textContent'
              : 'innerText'),
        gl
      );
    }
    var vl = function (e) {
        var t = window.getSelection && window.getSelection();
        if (!t || 0 === t.rangeCount) return null;
        var n = t.anchorNode,
          r = t.anchorOffset,
          o = t.focusNode,
          a = t.focusOffset,
          i = t.getRangeAt(0);
        try {
          i.startContainer.nodeType, i.endContainer.nodeType;
        } catch (e) {
          return null;
        }
        t =
          t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
            ? 0
            : i.toString().length;
        var l = i.cloneRange();
        return (
          l.selectNodeContents(e),
          l.setEnd(i.startContainer, i.startOffset),
          (i =
            (e =
              l.startContainer === l.endContainer &&
              l.startOffset === l.endOffset
                ? 0
                : l.toString().length) + t),
          (t = document.createRange()).setStart(n, r),
          t.setEnd(o, a),
          { start: (n = t.collapsed) ? i : e, end: n ? e : i }
        );
      },
      yl = function (e, t) {
        if (window.getSelection) {
          var n = window.getSelection(),
            r = e[ml()].length,
            o = Math.min(t.start, r);
          if (
            ((t = void 0 === t.end ? o : Math.min(t.end, r)),
            !n.extend && o > t && ((r = t), (t = o), (o = r)),
            (r = hl(e, o)),
            (e = hl(e, t)),
            r && e)
          ) {
            var a = document.createRange();
            a.setStart(r.node, r.offset),
              n.removeAllRanges(),
              o > t
                ? (n.addRange(a), n.extend(e.node, e.offset))
                : (a.setEnd(e.node, e.offset), n.addRange(a));
          }
        }
      },
      bl = j,
      Cl = {
        hasSelectionCapabilities: function (e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t && 'text' === e.type) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        },
        getSelectionInformation: function () {
          var e = d();
          return {
            focusedElem: e,
            selectionRange: Cl.hasSelectionCapabilities(e)
              ? Cl.getSelection(e)
              : null,
          };
        },
        restoreSelection: function (e) {
          var t = d(),
            n = e.focusedElem;
          if (
            ((e = e.selectionRange), t !== n && s(document.documentElement, n))
          ) {
            for (
              Cl.hasSelectionCapabilities(n) && Cl.setSelection(n, e),
                t = [],
                e = n;
              (e = e.parentNode);

            )
              e.nodeType === bl &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (p(n), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        },
        getSelection: function (e) {
          return (
            ('selectionStart' in e
              ? { start: e.selectionStart, end: e.selectionEnd }
              : vl(e)) || { start: 0, end: 0 }
          );
        },
        setSelection: function (e, t) {
          var n = t.start,
            r = t.end;
          void 0 === r && (r = n),
            'selectionStart' in e
              ? ((e.selectionStart = n),
                (e.selectionEnd = Math.min(r, e.value.length)))
              : yl(e, t);
        },
      },
      El = Cl,
      kl = j;
    function wl() {
      f('211');
    }
    function Pl() {
      f('212');
    }
    function Tl(e) {
      if (null == e) return null;
      if (e.nodeType === kl) return e;
      var t = ae(e);
      if (t) return 'number' == typeof t.tag ? wl(t) : Pl(t);
      'function' == typeof e.render ? f('188') : f('213', Object.keys(e));
    }
    (Tl._injectFiber = function (e) {
      wl = e;
    }),
      (Tl._injectStack = function (e) {
        Pl = e;
      });
    var _l = M;
    function Sl(e) {
      if (void 0 !== e._hostParent) return e._hostParent;
      if ('number' == typeof e.tag) {
        do {
          e = e.return;
        } while (e && e.tag !== _l);
        if (e) return e;
      }
      return null;
    }
    function xl(e, t) {
      for (var n = 0, r = e; r; r = Sl(r)) n++;
      r = 0;
      for (var o = t; o; o = Sl(o)) r++;
      for (; 0 < n - r; ) (e = Sl(e)), n--;
      for (; 0 < r - n; ) (t = Sl(t)), r--;
      for (; n--; ) {
        if (e === t || e === t.alternate) return e;
        (e = Sl(e)), (t = Sl(t));
      }
      return null;
    }
    var Nl = function (e) {
        return Sl(e);
      },
      Ol = function (e, t, n) {
        for (var r = []; e; ) r.push(e), (e = Sl(e));
        for (e = r.length; 0 < e--; ) t(r[e], 'captured', n);
        for (e = 0; e < r.length; e++) t(r[e], 'bubbled', n);
      },
      Il = function (e, t, n, r, o) {
        for (var a = e && t ? xl(e, t) : null, i = []; e && e !== a; )
          i.push(e), (e = Sl(e));
        for (e = []; t && t !== a; ) e.push(t), (t = Sl(t));
        for (t = 0; t < i.length; t++) n(i[t], 'bubbled', r);
        for (t = e.length; 0 < t--; ) n(e[t], 'captured', o);
      },
      Al = dt.getListener;
    function Dl(e, t, n) {
      (t = Al(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = ot(n._dispatchListeners, t)),
        (n._dispatchInstances = ot(n._dispatchInstances, e)));
    }
    function Ml(e) {
      e && e.dispatchConfig.phasedRegistrationNames && Ol(e._targetInst, Dl, e);
    }
    function Fl(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        var t = e._targetInst;
        (t = t ? Nl(t) : null), Ol(t, Dl, e);
      }
    }
    function Rl(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = Al(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = ot(n._dispatchListeners, t)),
        (n._dispatchInstances = ot(n._dispatchInstances, e)));
    }
    function Ll(e) {
      e && e.dispatchConfig.registrationName && Rl(e._targetInst, null, e);
    }
    var Ul = {
        accumulateTwoPhaseDispatches: function (e) {
          at(e, Ml);
        },
        accumulateTwoPhaseDispatchesSkipTarget: function (e) {
          at(e, Fl);
        },
        accumulateDirectDispatches: function (e) {
          at(e, Ll);
        },
        accumulateEnterLeaveDispatches: function (e, t, n, r) {
          Il(n, r, Rl, e, t);
        },
      },
      Hl = { _root: null, _startText: null, _fallbackText: null },
      jl = {
        initialize: function (e) {
          return (Hl._root = e), (Hl._startText = jl.getText()), !0;
        },
        reset: function () {
          (Hl._root = null), (Hl._startText = null), (Hl._fallbackText = null);
        },
        getData: function () {
          if (Hl._fallbackText) return Hl._fallbackText;
          var e,
            t,
            n = Hl._startText,
            r = n.length,
            o = jl.getText(),
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (
            (Hl._fallbackText = o.slice(e, 1 < t ? 1 - t : void 0)),
            Hl._fallbackText
          );
        },
        getText: function () {
          return 'value' in Hl._root ? Hl._root.value : Hl._root[ml()];
        },
      },
      Vl = jl,
      Bl = 'dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances'.split(
        ' '
      ),
      Wl = {
        type: null,
        target: null,
        currentTarget: l.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      };
    function zl(e, t, n, r) {
      for (var o in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(o) &&
          ((t = e[o])
            ? (this[o] = t(n))
            : 'target' === o
            ? (this.target = r)
            : (this[o] = n[o]));
      return (
        (this.isDefaultPrevented = (
          null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue
        )
          ? l.thatReturnsTrue
          : l.thatReturnsFalse),
        (this.isPropagationStopped = l.thatReturnsFalse),
        this
      );
    }
    function Kl(e, t, n, r) {
      if (this.eventPool.length) {
        var o = this.eventPool.pop();
        return this.call(o, e, t, n, r), o;
      }
      return new this(e, t, n, r);
    }
    function $l(e) {
      e instanceof this || f('223'),
        e.destructor(),
        10 > this.eventPool.length && this.eventPool.push(e);
    }
    function ql(e) {
      (e.eventPool = []), (e.getPooled = Kl), (e.release = $l);
    }
    function Ql(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function Yl(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    a(zl.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = l.thatReturnsTrue));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = l.thatReturnsTrue));
      },
      persist: function () {
        this.isPersistent = l.thatReturnsTrue;
      },
      isPersistent: l.thatReturnsFalse,
      destructor: function () {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        for (t = 0; t < Bl.length; t++) this[Bl[t]] = null;
      },
    }),
      (zl.Interface = Wl),
      (zl.augmentClass = function (e, t) {
        function n() {}
        n.prototype = this.prototype;
        var r = new n();
        a(r, e.prototype),
          (e.prototype = r),
          (e.prototype.constructor = e),
          (e.Interface = a({}, this.Interface, t)),
          (e.augmentClass = this.augmentClass),
          ql(e);
      }),
      ql(zl),
      zl.augmentClass(Ql, { data: null }),
      zl.augmentClass(Yl, { data: null });
    var Gl,
      Xl = [9, 13, 27, 32],
      Jl = o.canUseDOM && 'CompositionEvent' in window,
      Zl = null;
    if (
      (o.canUseDOM &&
        'documentMode' in document &&
        (Zl = document.documentMode),
      (Gl = o.canUseDOM && 'TextEvent' in window && !Zl))
    ) {
      var eu = window.opera;
      Gl = !(
        'object' == typeof eu &&
        'function' == typeof eu.version &&
        12 >= parseInt(eu.version(), 10)
      );
    }
    var tu = Gl,
      nu = o.canUseDOM && (!Jl || (Zl && 8 < Zl && 11 >= Zl)),
      ru = String.fromCharCode(32),
      ou = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture',
          },
          dependencies: [
            'topCompositionEnd',
            'topKeyPress',
            'topTextInput',
            'topPaste',
          ],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture',
          },
          dependencies: 'topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown'.split(
            ' '
          ),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture',
          },
          dependencies: 'topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown'.split(
            ' '
          ),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture',
          },
          dependencies: 'topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown'.split(
            ' '
          ),
        },
      },
      au = !1;
    function iu(e, t) {
      switch (e) {
        case 'topKeyUp':
          return -1 !== Xl.indexOf(t.keyCode);
        case 'topKeyDown':
          return 229 !== t.keyCode;
        case 'topKeyPress':
        case 'topMouseDown':
        case 'topBlur':
          return !0;
        default:
          return !1;
      }
    }
    function lu(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
    }
    var uu = !1;
    var cu = {
        eventTypes: ou,
        extractEvents: function (e, t, n, r) {
          var o;
          if (Jl)
            e: {
              switch (e) {
                case 'topCompositionStart':
                  var a = ou.compositionStart;
                  break e;
                case 'topCompositionEnd':
                  a = ou.compositionEnd;
                  break e;
                case 'topCompositionUpdate':
                  a = ou.compositionUpdate;
                  break e;
              }
              a = void 0;
            }
          else
            uu
              ? iu(e, n) && (a = ou.compositionEnd)
              : 'topKeyDown' === e &&
                229 === n.keyCode &&
                (a = ou.compositionStart);
          return (
            a
              ? (nu &&
                  (uu || a !== ou.compositionStart
                    ? a === ou.compositionEnd && uu && (o = Vl.getData())
                    : (uu = Vl.initialize(r))),
                (a = Ql.getPooled(a, t, n, r)),
                o ? (a.data = o) : null !== (o = lu(n)) && (a.data = o),
                Ul.accumulateTwoPhaseDispatches(a),
                (o = a))
              : (o = null),
            (e = tu
              ? (function (e, t) {
                  switch (e) {
                    case 'topCompositionEnd':
                      return lu(t);
                    case 'topKeyPress':
                      return 32 !== t.which ? null : ((au = !0), ru);
                    case 'topTextInput':
                      return (e = t.data) === ru && au ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (uu)
                    return 'topCompositionEnd' === e || (!Jl && iu(e, t))
                      ? ((e = Vl.getData()), Vl.reset(), (uu = !1), e)
                      : null;
                  switch (e) {
                    case 'topPaste':
                      return null;
                    case 'topKeyPress':
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case 'topCompositionEnd':
                      return nu ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = Yl.getPooled(ou.beforeInput, t, n, r)).data = e),
                Ul.accumulateTwoPhaseDispatches(t))
              : (t = null),
            [o, t]
          );
        },
      },
      su = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function pu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return 'input' === t ? !!su[e.type] : 'textarea' === t;
    }
    var du = {
      change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture',
        },
        dependencies: 'topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange'.split(
          ' '
        ),
      },
    };
    function fu(e, t, n) {
      return (
        ((e = zl.getPooled(du.change, e, t, n)).type = 'change'),
        Ke.enqueueStateRestore(n),
        Ul.accumulateTwoPhaseDispatches(e),
        e
      );
    }
    var hu = null,
      gu = null;
    function mu(e) {
      dt.enqueueEvents(e), dt.processEventQueue(!1);
    }
    function vu(e) {
      var t = oe.getNodeFromInstance(e);
      if (on(t)) return e;
    }
    function yu(e, t) {
      if ('topChange' === e) return t;
    }
    var bu = !1;
    function Cu() {
      hu && (hu.detachEvent('onpropertychange', Eu), (gu = hu = null));
    }
    function Eu(e) {
      'value' === e.propertyName &&
        vu(gu) &&
        ((e = fu(gu, e, Je(e))), Ge.batchedUpdates(mu, e));
    }
    function ku(e, t, n) {
      'topFocus' === e
        ? (Cu(), (gu = n), (hu = t).attachEvent('onpropertychange', Eu))
        : 'topBlur' === e && Cu();
    }
    function wu(e) {
      if ('topSelectionChange' === e || 'topKeyUp' === e || 'topKeyDown' === e)
        return vu(gu);
    }
    function Pu(e, t) {
      if ('topClick' === e) return vu(t);
    }
    function Tu(e, t) {
      if ('topInput' === e || 'topChange' === e) return vu(t);
    }
    o.canUseDOM &&
      (bu =
        ft('input') && (!document.documentMode || 9 < document.documentMode));
    var _u = {
      eventTypes: du,
      _isInputEventSupported: bu,
      extractEvents: function (e, t, n, r) {
        var o = t ? oe.getNodeFromInstance(t) : window,
          a = o.nodeName && o.nodeName.toLowerCase();
        if ('select' === a || ('input' === a && 'file' === o.type)) var i = yu;
        else if (pu(o))
          if (bu) i = Tu;
          else {
            i = wu;
            var l = ku;
          }
        else
          !(a = o.nodeName) ||
            'input' !== a.toLowerCase() ||
            ('checkbox' !== o.type && 'radio' !== o.type) ||
            (i = Pu);
        if (i && (i = i(e, t))) return fu(i, n, r);
        l && l(e, o, t),
          'topBlur' === e &&
            null != t &&
            (e = t._wrapperState || o._wrapperState) &&
            e.controlled &&
            'number' === o.type &&
            ((e = '' + o.value),
            o.getAttribute('value') !== e && o.setAttribute('value', e));
      },
    };
    function Su(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    zl.augmentClass(Su, {
      view: function (e) {
        return e.view
          ? e.view
          : (e = Je(e)).window === e
          ? e
          : (e = e.ownerDocument)
          ? e.defaultView || e.parentWindow
          : window;
      },
      detail: function (e) {
        return e.detail || 0;
      },
    });
    var xu = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
    function Nu(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = xu[e]) && !!t[e];
    }
    function Ou() {
      return Nu;
    }
    function Iu(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    Su.augmentClass(Iu, {
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: Ou,
      button: null,
      buttons: null,
      relatedTarget: function (e) {
        return (
          e.relatedTarget ||
          (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        );
      },
    });
    var Au = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: ['topMouseOut', 'topMouseOver'],
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: ['topMouseOut', 'topMouseOver'],
        },
      },
      Du = {
        eventTypes: Au,
        extractEvents: function (e, t, n, r) {
          if (
            ('topMouseOver' === e && (n.relatedTarget || n.fromElement)) ||
            ('topMouseOut' !== e && 'topMouseOver' !== e)
          )
            return null;
          var o =
            r.window === r
              ? r
              : (o = r.ownerDocument)
              ? o.defaultView || o.parentWindow
              : window;
          if (
            ('topMouseOut' === e
              ? ((e = t),
                (t = (t = n.relatedTarget || n.toElement)
                  ? oe.getClosestInstanceFromNode(t)
                  : null))
              : (e = null),
            e === t)
          )
            return null;
          var a = null == e ? o : oe.getNodeFromInstance(e);
          o = null == t ? o : oe.getNodeFromInstance(t);
          var i = Iu.getPooled(Au.mouseLeave, e, n, r);
          return (
            (i.type = 'mouseleave'),
            (i.target = a),
            (i.relatedTarget = o),
            ((n = Iu.getPooled(Au.mouseEnter, t, n, r)).type = 'mouseenter'),
            (n.target = o),
            (n.relatedTarget = a),
            Ul.accumulateEnterLeaveDispatches(i, n, e, t),
            [i, n]
          );
        },
      },
      Mu = W,
      Fu =
        o.canUseDOM &&
        'documentMode' in document &&
        11 >= document.documentMode,
      Ru = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture',
          },
          dependencies: 'topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange'.split(
            ' '
          ),
        },
      },
      Lu = null,
      Uu = null,
      Hu = null,
      ju = !1,
      Vu = Pt.isListeningToAllDependencies;
    function Bu(e, t) {
      if (ju || null == Lu || Lu !== d()) return null;
      var n = Lu;
      return (
        'selectionStart' in n && El.hasSelectionCapabilities(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : window.getSelection
          ? (n = {
              anchorNode: (n = window.getSelection()).anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })
          : (n = void 0),
        Hu && c(Hu, n)
          ? null
          : ((Hu = n),
            ((e = zl.getPooled(Ru.select, Uu, e, t)).type = 'select'),
            (e.target = Lu),
            Ul.accumulateTwoPhaseDispatches(e),
            e)
      );
    }
    var Wu = {
      eventTypes: Ru,
      extractEvents: function (e, t, n, r) {
        var o =
          r.window === r ? r.document : r.nodeType === Mu ? r : r.ownerDocument;
        if (!o || !Vu('onSelect', o)) return null;
        switch (((o = t ? oe.getNodeFromInstance(t) : window), e)) {
          case 'topFocus':
            (pu(o) || 'true' === o.contentEditable) &&
              ((Lu = o), (Uu = t), (Hu = null));
            break;
          case 'topBlur':
            Hu = Uu = Lu = null;
            break;
          case 'topMouseDown':
            ju = !0;
            break;
          case 'topContextMenu':
          case 'topMouseUp':
            return (ju = !1), Bu(n, r);
          case 'topSelectionChange':
            if (Fu) break;
          case 'topKeyDown':
          case 'topKeyUp':
            return Bu(n, r);
        }
        return null;
      },
    };
    function zu(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function Ku(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function $u(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function qu(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        32 <= e || 13 === e ? e : 0
      );
    }
    zl.augmentClass(zu, {
      animationName: null,
      elapsedTime: null,
      pseudoElement: null,
    }),
      zl.augmentClass(Ku, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Su.augmentClass($u, { relatedTarget: null });
    var Qu = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      Yu = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      };
    function Gu(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function Xu(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function Ju(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function Zu(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    function ec(e, t, n, r) {
      return zl.call(this, e, t, n, r);
    }
    Su.augmentClass(Gu, {
      key: function (e) {
        if (e.key) {
          var t = Qu[e.key] || e.key;
          if ('Unidentified' !== t) return t;
        }
        return 'keypress' === e.type
          ? 13 === (e = qu(e))
            ? 'Enter'
            : String.fromCharCode(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? Yu[e.keyCode] || 'Unidentified'
          : '';
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: Ou,
      charCode: function (e) {
        return 'keypress' === e.type ? qu(e) : 0;
      },
      keyCode: function (e) {
        return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return 'keypress' === e.type
          ? qu(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? e.keyCode
          : 0;
      },
    }),
      Iu.augmentClass(Xu, { dataTransfer: null }),
      Su.augmentClass(Ju, {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Ou,
      }),
      zl.augmentClass(Zu, {
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      Iu.augmentClass(ec, {
        deltaX: function (e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      });
    var tc = {},
      nc = {};
    'abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel'
      .split(' ')
      .forEach(function (e) {
        var t = e[0].toUpperCase() + e.slice(1),
          n = 'on' + t;
        (n = {
          phasedRegistrationNames: { bubbled: n, captured: n + 'Capture' },
          dependencies: [(t = 'top' + t)],
        }),
          (tc[e] = n),
          (nc[t] = n);
      });
    var rc = {
      eventTypes: tc,
      extractEvents: function (e, t, n, r) {
        var o = nc[e];
        if (!o) return null;
        switch (e) {
          case 'topAbort':
          case 'topCancel':
          case 'topCanPlay':
          case 'topCanPlayThrough':
          case 'topClose':
          case 'topDurationChange':
          case 'topEmptied':
          case 'topEncrypted':
          case 'topEnded':
          case 'topError':
          case 'topInput':
          case 'topInvalid':
          case 'topLoad':
          case 'topLoadedData':
          case 'topLoadedMetadata':
          case 'topLoadStart':
          case 'topPause':
          case 'topPlay':
          case 'topPlaying':
          case 'topProgress':
          case 'topRateChange':
          case 'topReset':
          case 'topSeeked':
          case 'topSeeking':
          case 'topStalled':
          case 'topSubmit':
          case 'topSuspend':
          case 'topTimeUpdate':
          case 'topToggle':
          case 'topVolumeChange':
          case 'topWaiting':
            var a = zl;
            break;
          case 'topKeyPress':
            if (0 === qu(n)) return null;
          case 'topKeyDown':
          case 'topKeyUp':
            a = Gu;
            break;
          case 'topBlur':
          case 'topFocus':
            a = $u;
            break;
          case 'topClick':
            if (2 === n.button) return null;
          case 'topDoubleClick':
          case 'topMouseDown':
          case 'topMouseMove':
          case 'topMouseUp':
          case 'topMouseOut':
          case 'topMouseOver':
          case 'topContextMenu':
            a = Iu;
            break;
          case 'topDrag':
          case 'topDragEnd':
          case 'topDragEnter':
          case 'topDragExit':
          case 'topDragLeave':
          case 'topDragOver':
          case 'topDragStart':
          case 'topDrop':
            a = Xu;
            break;
          case 'topTouchCancel':
          case 'topTouchEnd':
          case 'topTouchMove':
          case 'topTouchStart':
            a = Ju;
            break;
          case 'topAnimationEnd':
          case 'topAnimationIteration':
          case 'topAnimationStart':
            a = zu;
            break;
          case 'topTransitionEnd':
            a = Zu;
            break;
          case 'topScroll':
            a = Su;
            break;
          case 'topWheel':
            a = ec;
            break;
          case 'topCopy':
          case 'topCut':
          case 'topPaste':
            a = Ku;
        }
        return (
          a || f('86', e),
          (e = a.getPooled(o, t, n, r)),
          Ul.accumulateTwoPhaseDispatches(e),
          e
        );
      },
    };
    rt.setHandleTopLevel(Pt.handleTopLevel),
      dt.injection.injectEventPluginOrder(
        'ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
          ' '
        )
      ),
      je.injection.injectComponentTree(oe),
      dt.injection.injectEventPluginsByName({
        SimpleEventPlugin: rc,
        EnterLeaveEventPlugin: Du,
        ChangeEventPlugin: _u,
        SelectEventPlugin: Wu,
        BeforeInputEventPlugin: cu,
      });
    var oc = x.injection.MUST_USE_PROPERTY,
      ac = x.injection.HAS_BOOLEAN_VALUE,
      ic = x.injection.HAS_NUMERIC_VALUE,
      lc = x.injection.HAS_POSITIVE_NUMERIC_VALUE,
      uc = x.injection.HAS_STRING_BOOLEAN_VALUE,
      cc = {
        Properties: {
          allowFullScreen: ac,
          allowTransparency: uc,
          async: ac,
          autoPlay: ac,
          capture: ac,
          checked: oc | ac,
          cols: lc,
          contentEditable: uc,
          controls: ac,
          default: ac,
          defer: ac,
          disabled: ac,
          download: x.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
          draggable: uc,
          formNoValidate: ac,
          hidden: ac,
          loop: ac,
          multiple: oc | ac,
          muted: oc | ac,
          noValidate: ac,
          open: ac,
          playsInline: ac,
          readOnly: ac,
          required: ac,
          reversed: ac,
          rows: lc,
          rowSpan: ic,
          scoped: ac,
          seamless: ac,
          selected: oc | ac,
          size: lc,
          start: ic,
          span: lc,
          spellCheck: uc,
          style: 0,
          itemScope: ac,
          acceptCharset: 0,
          className: 0,
          htmlFor: 0,
          httpEquiv: 0,
          value: uc,
        },
        DOMAttributeNames: {
          acceptCharset: 'accept-charset',
          className: 'class',
          htmlFor: 'for',
          httpEquiv: 'http-equiv',
        },
        DOMMutationMethods: {
          value: function (e, t) {
            if (null == t) return e.removeAttribute('value');
            ('number' !== e.type ||
              !1 === e.hasAttribute('value') ||
              (e.validity &&
                !e.validity.badInput &&
                e.ownerDocument.activeElement !== e)) &&
              e.setAttribute('value', '' + t);
          },
        },
      },
      sc = x.injection.HAS_STRING_BOOLEAN_VALUE,
      pc = 'http://www.w3.org/1999/xlink',
      dc = 'http://www.w3.org/XML/1998/namespace',
      fc = {
        Properties: {
          autoReverse: sc,
          externalResourcesRequired: sc,
          preserveAlpha: sc,
        },
        DOMAttributeNames: {
          autoReverse: 'autoReverse',
          externalResourcesRequired: 'externalResourcesRequired',
          preserveAlpha: 'preserveAlpha',
        },
        DOMAttributeNamespaces: {
          xlinkActuate: pc,
          xlinkArcrole: pc,
          xlinkHref: pc,
          xlinkRole: pc,
          xlinkShow: pc,
          xlinkTitle: pc,
          xlinkType: pc,
          xmlBase: dc,
          xmlLang: dc,
          xmlSpace: dc,
        },
      },
      hc = /[\-\:]([a-z])/g;
    function gc(e) {
      return e[1].toUpperCase();
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(hc, gc);
        (fc.Properties[t] = 0), (fc.DOMAttributeNames[t] = e);
      }),
      x.injection.injectDOMPropertyConfig(cc),
      x.injection.injectDOMPropertyConfig(fc);
    var mc = ai,
      vc = j,
      yc = V,
      bc = B,
      Cc = W,
      Ec = z,
      kc = x.ROOT_ATTRIBUTE_NAME,
      wc = v,
      Pc = kn.createElement,
      Tc = kn.createTextNode,
      _c = kn.setInitialProperties,
      Sc = kn.diffProperties,
      xc = kn.updateProperties,
      Nc = kn.diffHydratedProperties,
      Oc = kn.diffHydratedText,
      Ic = kn.warnForDeletedHydratableElement,
      Ac = kn.warnForDeletedHydratableText,
      Dc = kn.warnForInsertedHydratedElement,
      Mc = kn.warnForInsertedHydratedText,
      Fc = oe.precacheFiberNode,
      Rc = oe.updateFiberProps;
    Ke.injection.injectFiberControlledHostComponent(kn),
      Tl._injectFiber(function (e) {
        return jc.findHostInstance(e);
      });
    var Lc = null,
      Uc = null;
    function Hc(e) {
      return !(
        !e ||
        (e.nodeType !== vc &&
          e.nodeType !== Cc &&
          e.nodeType !== Ec &&
          (e.nodeType !== bc || ' react-mount-point-unstable ' !== e.nodeValue))
      );
    }
    var jc = (function (e) {
      var t = e.getPublicInstance,
        n = (e = nl(e)).scheduleUpdate,
        r = e.getPriorityContext;
      return {
        createContainer: function (e) {
          var t = fo();
          return (
            (e = {
              current: t,
              containerInfo: e,
              isScheduled: !1,
              nextScheduledRoot: null,
              context: null,
              pendingContext: null,
            }),
            (t.stateNode = e)
          );
        },
        updateContainer: function (e, t, o, a) {
          var i = t.current;
          (o = ol(o)),
            null === t.context ? (t.context = o) : (t.pendingContext = o),
            (t = a),
            (a = r(
              i,
              Fn &&
                null != e &&
                null != e.type &&
                null != e.type.prototype &&
                !0 === e.type.prototype.unstable_isAsyncReactComponent
            )),
            al(i, (e = { element: e }), void 0 === t ? null : t, a),
            n(i, a);
        },
        batchedUpdates: e.batchedUpdates,
        unbatchedUpdates: e.unbatchedUpdates,
        deferredUpdates: e.deferredUpdates,
        flushSync: e.flushSync,
        getPublicRootInstance: function (e) {
          if (!(e = e.current).child) return null;
          switch (e.child.tag) {
            case cl:
              return t(e.child.stateNode);
            default:
              return e.child.stateNode;
          }
        },
        findHostInstance: function (e) {
          return null === (e = sl(e)) ? null : e.stateNode;
        },
        findHostInstanceWithNoPortals: function (e) {
          return null === (e = pl(e)) ? null : e.stateNode;
        },
      };
    })({
      getRootHostContext: function (e) {
        if (e.nodeType === Cc)
          e = (e = e.documentElement) ? e.namespaceURI : wc(null, '');
        else {
          var t = e.nodeType === bc ? e.parentNode : e;
          (e = t.namespaceURI || null), (t = t.tagName), (e = wc(e, t));
        }
        return e;
      },
      getChildHostContext: function (e, t) {
        return wc(e, t);
      },
      getPublicInstance: function (e) {
        return e;
      },
      prepareForCommit: function () {
        (Lc = Pt.isEnabled()),
          (Uc = El.getSelectionInformation()),
          Pt.setEnabled(!1);
      },
      resetAfterCommit: function () {
        El.restoreSelection(Uc), (Uc = null), Pt.setEnabled(Lc), (Lc = null);
      },
      createInstance: function (e, t, n, r, o) {
        return (e = Pc(e, t, n, r)), Fc(o, e), Rc(e, t), e;
      },
      appendInitialChild: function (e, t) {
        e.appendChild(t);
      },
      finalizeInitialChildren: function (e, t, n, r) {
        _c(e, t, n, r);
        e: {
          switch (t) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              e = !!n.autoFocus;
              break e;
          }
          e = !1;
        }
        return e;
      },
      prepareUpdate: function (e, t, n, r, o) {
        return Sc(e, t, n, r, o);
      },
      commitMount: function (e) {
        e.focus();
      },
      commitUpdate: function (e, t, n, r, o) {
        Rc(e, o), xc(e, t, n, r, o);
      },
      shouldSetTextContent: function (e, t) {
        return (
          'textarea' === e ||
          'string' == typeof t.children ||
          'number' == typeof t.children ||
          ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            'string' == typeof t.dangerouslySetInnerHTML.__html)
        );
      },
      resetTextContent: function (e) {
        e.textContent = '';
      },
      shouldDeprioritizeSubtree: function (e, t) {
        return !!t.hidden;
      },
      createTextInstance: function (e, t, n, r) {
        return (e = Tc(e, t)), Fc(r, e), e;
      },
      commitTextUpdate: function (e, t, n) {
        e.nodeValue = n;
      },
      appendChild: function (e, t) {
        e.appendChild(t);
      },
      appendChildToContainer: function (e, t) {
        e.nodeType === bc ? e.parentNode.insertBefore(t, e) : e.appendChild(t);
      },
      insertBefore: function (e, t, n) {
        e.insertBefore(t, n);
      },
      insertInContainerBefore: function (e, t, n) {
        e.nodeType === bc
          ? e.parentNode.insertBefore(t, n)
          : e.insertBefore(t, n);
      },
      removeChild: function (e, t) {
        e.removeChild(t);
      },
      removeChildFromContainer: function (e, t) {
        e.nodeType === bc ? e.parentNode.removeChild(t) : e.removeChild(t);
      },
      canHydrateInstance: function (e, t) {
        return e.nodeType === vc && t === e.nodeName.toLowerCase();
      },
      canHydrateTextInstance: function (e, t) {
        return '' !== t && e.nodeType === yc;
      },
      getNextHydratableSibling: function (e) {
        for (e = e.nextSibling; e && e.nodeType !== vc && e.nodeType !== yc; )
          e = e.nextSibling;
        return e;
      },
      getFirstHydratableChild: function (e) {
        for (e = e.firstChild; e && e.nodeType !== vc && e.nodeType !== yc; )
          e = e.nextSibling;
        return e;
      },
      hydrateInstance: function (e, t, n, r, o, a) {
        return Fc(a, e), Rc(e, n), Nc(e, t, n, o, r);
      },
      hydrateTextInstance: function (e, t, n) {
        return Fc(n, e), Oc(e, t);
      },
      didNotHydrateInstance: function (e, t) {
        1 === t.nodeType ? Ic(e, t) : Ac(e, t);
      },
      didNotFindHydratableInstance: function (e, t, n) {
        Dc(e, t, n);
      },
      didNotFindHydratableTextInstance: function (e, t) {
        Mc(e, t);
      },
      scheduleDeferredCallback: Mn.rIC,
      useSyncScheduling: !0,
    });
    function Vc(e, t, n, r, o) {
      Hc(n) || f('200');
      var a = n._reactRootContainer;
      if (a) jc.updateContainer(t, a, e, o);
      else {
        if (
          !r &&
          !(function (e) {
            return !(
              !(e = e
                ? e.nodeType === Cc
                  ? e.documentElement
                  : e.firstChild
                : null) ||
              e.nodeType !== vc ||
              !e.hasAttribute(kc)
            );
          })(n)
        )
          for (r = void 0; (r = n.lastChild); ) n.removeChild(r);
        var i = jc.createContainer(n);
        (a = n._reactRootContainer = i),
          jc.unbatchedUpdates(function () {
            jc.updateContainer(t, i, e, o);
          });
      }
      return jc.getPublicRootInstance(a);
    }
    function Bc(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      return Hc(t) || f('200'), Co.createPortal(e, t, null, n);
    }
    Ge.injection.injectFiberBatchedUpdates(jc.batchedUpdates);
    var Wc = {
      createPortal: Bc,
      hydrate: function (e, t, n) {
        return Vc(null, e, t, !0, n);
      },
      render: function (e, t, n) {
        return Vc(null, e, t, !1, n);
      },
      unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
        return (null != e && ie(e)) || f('38'), Vc(e, t, n, !1, r);
      },
      unmountComponentAtNode: function (e) {
        return (
          Hc(e) || f('40'),
          !!e._reactRootContainer &&
            (jc.unbatchedUpdates(function () {
              Vc(null, null, e, !1, function () {
                e._reactRootContainer = null;
              });
            }),
            !0)
        );
      },
      findDOMNode: Tl,
      unstable_createPortal: Bc,
      unstable_batchedUpdates: Ge.batchedUpdates,
      unstable_deferredUpdates: jc.deferredUpdates,
      flushSync: jc.flushSync,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        EventPluginHub: dt,
        EventPluginRegistry: w,
        EventPropagators: Ul,
        ReactControlledComponent: Ke,
        ReactDOMComponentTree: oe,
        ReactDOMEventListener: rt,
      },
    };
    mc({
      findFiberByHostInstance: oe.getClosestInstanceFromNode,
      findHostInstanceByFiber: jc.findHostInstance,
      bundleType: 0,
      version: '16.0.0',
      rendererPackageName: 'react-dom',
    }),
      (e.exports = Wc);
  },
  function (e, t, n) {
    'use strict';
    var r = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      o = {
        canUseDOM: r,
        canUseWorkers: 'undefined' != typeof Worker,
        canUseEventListeners:
          r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r,
      };
    e.exports = o;
  },
  function (e, t, n) {
    'use strict';
    var r = n(1),
      o = {
        listen: function (e, t, n) {
          return e.addEventListener
            ? (e.addEventListener(t, n, !1),
              {
                remove: function () {
                  e.removeEventListener(t, n, !1);
                },
              })
            : e.attachEvent
            ? (e.attachEvent('on' + t, n),
              {
                remove: function () {
                  e.detachEvent('on' + t, n);
                },
              })
            : void 0;
        },
        capture: function (e, t, n) {
          return e.addEventListener
            ? (e.addEventListener(t, n, !0),
              {
                remove: function () {
                  e.removeEventListener(t, n, !0);
                },
              })
            : { remove: r };
        },
        registerDefault: function () {},
      };
    e.exports = o;
  },
  function (e, t, n) {
    'use strict';
    var r = Object.prototype.hasOwnProperty;
    function o(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    e.exports = function (e, t) {
      if (o(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        a = Object.keys(t);
      if (n.length !== a.length) return !1;
      for (var i = 0; i < n.length; i++)
        if (!r.call(t, n[i]) || !o(e[n[i]], t[n[i]])) return !1;
      return !0;
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(13);
    e.exports = function e(t, n) {
      return (
        !(!t || !n) &&
        (t === n ||
          (!r(t) &&
            (r(n)
              ? e(t, n.parentNode)
              : 'contains' in t
              ? t.contains(n)
              : !!t.compareDocumentPosition &&
                !!(16 & t.compareDocumentPosition(n)))))
      );
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(14);
    e.exports = function (e) {
      return r(e) && 3 == e.nodeType;
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e) {
      var t = (e ? e.ownerDocument || e : document).defaultView || window;
      return !(
        !e ||
        !('function' == typeof t.Node
          ? e instanceof t.Node
          : 'object' == typeof e &&
            'number' == typeof e.nodeType &&
            'string' == typeof e.nodeName)
      );
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e) {
      try {
        e.focus();
      } catch (e) {}
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    };
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = c(n(0)),
      a = c(n(18)),
      i = c(n(19)),
      l = c(n(21)),
      u = c(n(22));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    var p = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var n = (function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
          (n.handleDeleteOptions = n.handleDeleteOptions.bind(n)),
          (n.handleAddOption = n.handleAddOption.bind(n)),
          (n.handlePick = n.handlePick.bind(n)),
          (n.handleDeleteOption = n.handleDeleteOption.bind(n)),
          (n.state = { options: [], answer: '' }),
          n
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, e),
        r(t, [
          {
            key: 'componentDidMount',
            value: function () {
              try {
                var e = localStorage.getItem('options'),
                  t = JSON.parse(e);
                t &&
                  this.setState(function () {
                    return { options: t };
                  });
              } catch (e) {}
            },
          },
          {
            key: 'componentDidUpdate',
            value: function (e, t) {
              if (t.options.length != this.state.options.length) {
                var n = JSON.stringify(this.state.options);
                localStorage.setItem('options', n);
              }
            },
          },
          {
            key: 'handlePick',
            value: function () {
              var e = Math.floor(Math.random() * this.state.options.length),
                t = this.state.options[e];
              this.setState(function () {
                return { answer: t };
              });
            },
          },
          {
            key: 'handleDeleteOptions',
            value: function () {
              this.setState(function () {
                return { options: [] };
              });
            },
          },
          {
            key: 'handleDeleteOption',
            value: function (e) {
              this.setState(function (t) {
                return {
                  options: t.options.filter(function (t) {
                    return e !== t;
                  }),
                };
              });
            },
          },
          {
            key: 'handleAddOption',
            value: function (e) {
              return e
                ? this.state.options.indexOf(e) > -1
                  ? 'This option already exists.'
                  : void this.setState(function (t) {
                      return { options: [].concat(s(t.options), [e]) };
                    })
                : 'Enter valid option.';
            },
          },
          {
            key: 'render',
            value: function () {
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(l.default, {
                  title: 'Indecision',
                  subtitle: 'Put your life in the hands of a computer',
                }),
                o.default.createElement(u.default, {
                  hasOptions: this.state.options.length > 0,
                  handlePick: this.handlePick,
                  answer: this.state.answer,
                }),
                o.default.createElement(i.default, {
                  options: this.state.options,
                  handleDeleteOptions: this.handleDeleteOptions,
                  handleDeleteOption: this.handleDeleteOption,
                }),
                o.default.createElement(a.default, {
                  options: this.state.options,
                  handleAddOption: this.handleAddOption,
                })
              );
            },
          },
        ]),
        t
      );
    })(o.default.Component);
    o.default.createElement(
      'div',
      null,
      o.default.createElement(l.default, null),
      o.default.createElement(u.default, null),
      o.default.createElement(i.default, null),
      o.default.createElement(a.default, null)
    );
    t.default = p;
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = n(0),
      i = (r = a) && r.__esModule ? r : { default: r };
    var l = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var n = (function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
          (n.handleAddOption = n.handleAddOption.bind(n)),
          (n.state = { error: void 0 }),
          n
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, e),
        o(t, [
          {
            key: 'handleAddOption',
            value: function (e) {
              e.preventDefault();
              var t = e.target.elements.option.value.trim(),
                n = this.props.handleAddOption(t);
              this.setState(function () {
                return { error: n };
              }),
                n || (e.target.elements.option.value = '');
            },
          },
          {
            key: 'render',
            value: function () {
              return i.default.createElement(
                'div',
                null,
                i.default.createElement(
                  'form',
                  { onSubmit: this.handleAddOption },
                  i.default.createElement('input', {
                    type: 'text',
                    name: 'option',
                  }),
                  i.default.createElement('button', null, 'Submit'),
                  this.state.error &&
                    i.default.createElement('p', null, this.state.error)
                )
              );
            },
          },
        ]),
        t
      );
    })(i.default.Component);
    t.default = l;
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = a(n(0)),
      o = a(n(20));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return r.default.createElement(
        'div',
        null,
        r.default.createElement(
          'button',
          { onClick: e.handleDeleteOptions },
          'Remove All'
        ),
        0 === e.options.length &&
          r.default.createElement(
            'p',
            null,
            'Please add an option to get started.'
          ),
        e.options.map(function (t) {
          return r.default.createElement(o.default, {
            key: t,
            optionText: t,
            handleDeleteOption: e.handleDeleteOption,
          });
        })
      );
    };
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      o = n(0),
      a = (r = o) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return a.default.createElement(
        'div',
        null,
        a.default.createElement('p', null, e.optionText),
        a.default.createElement(
          'button',
          {
            onClick: function (t) {
              e.handleDeleteOption(e.optionText);
            },
          },
          'remove'
        )
      );
    };
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      o = n(0),
      a = (r = o) && r.__esModule ? r : { default: r };
    var i = function (e) {
      return a.default.createElement(
        'div',
        null,
        a.default.createElement('h1', null, e.title),
        e.subtitle && a.default.createElement('h2', null, e.subtitle)
      );
    };
    (i.defaultProps = { title: 'Default' }), (t.default = i);
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      o = n(0),
      a = (r = o) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return a.default.createElement(
        'div',
        null,
        a.default.createElement(
          'button',
          { onClick: e.handlePick, disabled: !e.hasOptions },
          'What Should I Do'
        ),
        console.log(e),
        a.default.createElement('h3', null, e.answer)
      );
    };
  },
]);
//# sourceMappingURL=bundle.js.map
