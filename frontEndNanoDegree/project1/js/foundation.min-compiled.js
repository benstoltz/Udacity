/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
"use strict";

!(function (t, e, i, n) {
   "use strict";function s(t) {
      return (("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t);
   }function a(t) {
      this.selector = t, this.query = "";
   }var o = function o(e) {
      var i = t("head");i.prepend(t.map(e, function (t) {
         return 0 === i.has("." + t).length ? '<meta class="' + t + '" />' : void 0;
      }));
   };o(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
      "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body);
   });var r = function r(e, n) {
      if ("string" == typeof e) {
         if (n) {
            var s;if (n.jquery) {
               if ((s = n[0], !s)) return n;
            } else s = n;return t(s.querySelectorAll(e));
         }return t(i.querySelectorAll(e));
      }return t(e, n);
   },
       l = function l(t) {
      var e = [];return (t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-"));
   },
       d = function d(t) {
      for (var e = t.split("-"), i = e.length, n = []; i--;) 0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);return n.reverse().join("-");
   },
       u = function u(e, i) {
      var n = this,
          s = function s() {
         var s = r(this),
             a = !s.data(n.attr_name(!0) + "-init");s.data(n.attr_name(!0) + "-init", t.extend({}, n.settings, i || e, n.data_options(s))), a && n.events(this);
      };return (r(this.scope).is("[" + this.attr_name() + "]") ? s.call(this.scope) : r("[" + this.attr_name() + "]", this.scope).each(s), "string" == typeof e ? this[e].call(this, i) : void 0);
   },
       h = function h(t, e) {
      function i() {
         e(t[0]);
      }function n() {
         if ((this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent))) {
            var t = this.attr("src"),
                e = t.match(/\?/) ? "&" : "?";e += "random=" + new Date().getTime(), this.attr("src", t + e);
         }
      }return t.attr("src") ? void (t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i();
   }; /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
   e.matchMedia || (e.matchMedia = (function () {
      var t = e.styleMedia || e.media;if (!t) {
         var n = i.createElement("style"),
             s = i.getElementsByTagName("script")[0],
             a = null;n.type = "text/css", n.id = "matchmediajs-test", s.parentNode.insertBefore(n, s), a = "getComputedStyle" in e && e.getComputedStyle(n, null) || n.currentStyle, t = { matchMedium: function matchMedium(t) {
               var e = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";return (n.styleSheet ? n.styleSheet.cssText = e : n.textContent = e, "1px" === a.width);
            } };
      }return function (e) {
         return { matches: t.matchMedium(e || "all"), media: e || "all" };
      };
   })()), /*
          * jquery.requestAnimationFrame
          * https://github.com/gnarf37/jquery-requestAnimationFrame
          * Requires jQuery 1.8+
          *
          * Copyright (c) 2012 Corey Frang
          * Licensed under the MIT license.
          */
   (function (t) {
      function i() {
         n && (o(i), l && t.fx.tick());
      }for (var n, s = 0, a = ["webkit", "moz"], o = e.requestAnimationFrame, r = e.cancelAnimationFrame, l = "undefined" != typeof t.fx; s < a.length && !o; s++) o = e[a[s] + "RequestAnimationFrame"], r = r || e[a[s] + "CancelAnimationFrame"] || e[a[s] + "CancelRequestAnimationFrame"];o ? (e.requestAnimationFrame = o, e.cancelAnimationFrame = r, l && (t.fx.timer = function (e) {
         e() && t.timers.push(e) && !n && (n = !0, i());
      }, t.fx.stop = function () {
         n = !1;
      })) : (e.requestAnimationFrame = function (t) {
         var i = new Date().getTime(),
             n = Math.max(0, 16 - (i - s)),
             a = e.setTimeout(function () {
            t(i + n);
         }, n);return (s = i + n, a);
      }, e.cancelAnimationFrame = function (t) {
         clearTimeout(t);
      });
   })(t), a.prototype.toString = function () {
      return this.query || (this.query = r(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""));
   }, e.Foundation = { name: "Foundation", version: "5.5.3", media_queries: { small: new a(".foundation-mq-small"), "small-only": new a(".foundation-mq-small-only"), medium: new a(".foundation-mq-medium"), "medium-only": new a(".foundation-mq-medium-only"), large: new a(".foundation-mq-large"), "large-only": new a(".foundation-mq-large-only"), xlarge: new a(".foundation-mq-xlarge"), "xlarge-only": new a(".foundation-mq-xlarge-only"), xxlarge: new a(".foundation-mq-xxlarge") }, stylesheet: t("<style></style>").appendTo("head")[0].sheet, global: { namespace: n }, init: function init(t, i, n, s, a) {
         var o = [t, n, s, a],
             l = [];if ((this.rtl = /rtl/i.test(r("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), i && "string" == typeof i && !/reflow/i.test(i))) this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, o));else for (var d in this.libs) l.push(this.init_lib(d, i));return (r(e).load(function () {
            r(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider");
         }), t);
      }, init_lib: function init_lib(e, i) {
         return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]), this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i), this.libs[e].init.apply(this.libs[e], i))) : function () {};
      }, patch: function patch(t) {
         t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = l, t.add_namespace = d, t.bindings = u, t.S = this.utils.S;
      }, inherit: function inherit(t, e) {
         for (var i = e.split(" "), n = i.length; n--;) this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]]);
      }, set_namespace: function set_namespace() {
         var e = this.global.namespace === n ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;this.global.namespace = e === n || /false/i.test(e) ? "" : e;
      }, libs: {}, utils: { S: r, throttle: function throttle(t, e) {
            var i = null;return function () {
               var n = this,
                   s = arguments;null == i && (i = setTimeout(function () {
                  t.apply(n, s), i = null;
               }, e));
            };
         }, debounce: function debounce(t, e, i) {
            var n, s;return function () {
               var a = this,
                   o = arguments,
                   r = function r() {
                  n = null, i || (s = t.apply(a, o));
               },
                   l = i && !n;return (clearTimeout(n), n = setTimeout(r, e), l && (s = t.apply(a, o)), s);
            };
         }, data_options: function data_options(e, i) {
            function n(t) {
               return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0;
            }function s(e) {
               return "string" == typeof e ? t.trim(e) : e;
            }i = i || "options";var a,
                o,
                r,
                l = {},
                d = function d(t) {
               var e = Foundation.global.namespace;return t.data(e.length > 0 ? e + "-" + i : i);
            },
                u = d(e);if ("object" == typeof u) return u;for (r = (u || ":").split(";"), a = r.length; a--;) o = r[a].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), n(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (l[s(o[0])] = s(o[1]));return l;
         }, register_media: function register_media(e, i) {
            Foundation.media_queries[e] === n && (t("head").append('<meta class="' + i + '"/>'), Foundation.media_queries[e] = s(t("." + i).css("font-family")));
         }, add_custom_rule: function add_custom_rule(t, e) {
            if (e === n && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);else {
               var i = Foundation.media_queries[e];i !== n && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }", Foundation.stylesheet.cssRules.length);
            }
         }, image_loaded: function image_loaded(t, e) {
            function i(t) {
               for (var e = t.length, i = e - 1; i >= 0; i--) if (t.attr("height") === n) return !1;return !0;
            }var s = this,
                a = t.length;(0 === a || i(t)) && e(t), t.each(function () {
               h(s.S(this), function () {
                  a -= 1, 0 === a && e(t);
               });
            });
         }, random_str: function random_str() {
            return (this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date()).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36));
         }, match: function match(t) {
            return e.matchMedia(t).matches;
         }, is_small_up: function is_small_up() {
            return this.match(Foundation.media_queries.small);
         }, is_medium_up: function is_medium_up() {
            return this.match(Foundation.media_queries.medium);
         }, is_large_up: function is_large_up() {
            return this.match(Foundation.media_queries.large);
         }, is_xlarge_up: function is_xlarge_up() {
            return this.match(Foundation.media_queries.xlarge);
         }, is_xxlarge_up: function is_xxlarge_up() {
            return this.match(Foundation.media_queries.xxlarge);
         }, is_small_only: function is_small_only() {
            return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up());
         }, is_medium_only: function is_medium_only() {
            return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
         }, is_large_only: function is_large_only() {
            return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
         }, is_xlarge_only: function is_xlarge_only() {
            return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
         }, is_xxlarge_only: function is_xxlarge_only() {
            return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
         } } }, t.fn.foundation = function () {
      var t = Array.prototype.slice.call(arguments, 0);return this.each(function () {
         return (Foundation.init.apply(Foundation, [this].concat(t)), this);
      });
   };
})(jQuery, window, window.document), (function (t, e, i) {
   "use strict";Foundation.libs.dropdown = { name: "dropdown", version: "5.5.3", settings: { active_class: "open", disabled_class: "disabled", mega_class: "mega", align: "bottom", is_hover: !1, hover_timeout: 150, opened: function opened() {}, closed: function closed() {} }, init: function init(e, i, n) {
         Foundation.inherit(this, "throttle"), t.extend(!0, this.settings, i, n), this.bindings(i, n);
      }, events: function events() {
         var n = this,
             s = n.S;s(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (e) {
            var i = s(this).data(n.attr_name(!0) + "-init") || n.settings;(!i.is_hover || Modernizr.touch) && (e.preventDefault(), s(this).parent("[data-reveal-id]").length && e.stopPropagation(), n.toggle(t(this)));
         }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (t) {
            var e,
                i,
                a = s(this);clearTimeout(n.timeout), a.data(n.data_attr()) ? (e = s("#" + a.data(n.data_attr())), i = a) : (e = a, i = s("[" + n.attr_name() + '="' + e.attr("id") + '"]'));var o = i.data(n.attr_name(!0) + "-init") || n.settings;s(t.currentTarget).data(n.data_attr()) && o.is_hover && n.closeall.call(n), o.is_hover && n.open.apply(n, [e, i]);
         }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function () {
            var t,
                e = s(this);if (e.data(n.data_attr())) t = e.data(n.data_attr(!0) + "-init") || n.settings;else var i = s("[" + n.attr_name() + '="' + s(this).attr("id") + '"]'),
                t = i.data(n.attr_name(!0) + "-init") || n.settings;n.timeout = setTimeout((function () {
               e.data(n.data_attr()) ? t.is_hover && n.close.call(n, s("#" + e.data(n.data_attr()))) : t.is_hover && n.close.call(n, e);
            }).bind(this), t.hover_timeout);
         }).on("click.fndtn.dropdown", function (e) {
            var a = s(e.target).closest("[" + n.attr_name() + "-content]"),
                o = a.find("a");return (o.length > 0 && "false" !== a.attr("aria-autoclose") && n.close.call(n, s("[" + n.attr_name() + "-content]")), e.target !== i && !t.contains(i.documentElement, e.target) || s(e.target).closest("[" + n.attr_name() + "]").length > 0 ? void 0 : !s(e.target).data("revealId") && a.length > 0 && (s(e.target).is("[" + n.attr_name() + "-content]") || t.contains(a.first()[0], e.target)) ? void e.stopPropagation() : void n.close.call(n, s("[" + n.attr_name() + "-content]")));
         }).on("opened.fndtn.dropdown", "[" + n.attr_name() + "-content]", function () {
            n.settings.opened.call(this);
         }).on("closed.fndtn.dropdown", "[" + n.attr_name() + "-content]", function () {
            n.settings.closed.call(this);
         }), s(e).off(".dropdown").on("resize.fndtn.dropdown", n.throttle(function () {
            n.resize.call(n);
         }, 50)), this.resize();
      }, close: function close(e) {
         var i = this;e.each(function (n) {
            var s = t("[" + i.attr_name() + "=" + e[n].id + "]") || t("aria-controls=" + e[n].id + "]");s.attr("aria-expanded", "false"), i.S(this).hasClass(i.settings.active_class) && (i.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(i.settings.active_class).prev("[" + i.attr_name() + "]").removeClass(i.settings.active_class).removeData("target"), i.S(this).trigger("closed.fndtn.dropdown", [e]));
         }), e.removeClass("f-open-" + this.attr_name(!0));
      }, closeall: function closeall() {
         var e = this;t.each(e.S(".f-open-" + this.attr_name(!0)), function () {
            e.close.call(e, e.S(this));
         });
      }, open: function open(t, e) {
         this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus(), t.addClass("f-open-" + this.attr_name(!0));
      }, data_attr: function data_attr() {
         return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name;
      }, toggle: function toggle(t) {
         if (!t.hasClass(this.settings.disabled_class)) {
            var e = this.S("#" + t.data(this.data_attr()));0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t));
         }
      }, resize: function resize() {
         var e = this.S("[" + this.attr_name() + "-content].open"),
             i = t(e.data("target"));e.length && i.length && this.css(e, i);
      }, css: function css(t, e) {
         var i = Math.max((e.width() - t.width()) / 2, 8),
             n = e.data(this.attr_name(!0) + "-init") || this.settings,
             s = t.parent().css("overflow-y") || t.parent().css("overflow");if ((this.clear_idx(), this.small())) {
            var a = this.dirs.bottom.call(t, e, n);t.attr("style", "").removeClass("drop-left drop-right drop-top").css({ position: "absolute", width: "95%", "max-width": "none", top: a.top }), t.css(Foundation.rtl ? "right" : "left", i);
         } else if ("visible" !== s) {
            var o = e[0].offsetTop + e[0].offsetHeight;t.attr("style", "").css({ position: "absolute", top: o }), t.css(Foundation.rtl ? "right" : "left", i);
         } else this.style(t, e, n);return t;
      }, style: function style(e, i, n) {
         var s = t.extend({ position: "absolute" }, this.dirs[n.align].call(e, i, n));e.attr("style", "").css(s);
      }, dirs: { _base: function _base(t, n) {
            var s = this.offsetParent(),
                a = s.offset(),
                o = t.offset();o.top -= a.top, o.left -= a.left, o.missRight = !1, o.missTop = !1, o.missLeft = !1, o.leftRightFlag = !1;var r,
                l = e.innerWidth;r = i.getElementsByClassName("row")[0] ? i.getElementsByClassName("row")[0].clientWidth : l;var d = (l - r) / 2,
                u = r;if (!this.hasClass("mega") && !n.ignore_repositioning) {
               var h = this.outerWidth(),
                   f = t.offset().left;t.offset().top <= this.outerHeight() && (o.missTop = !0, u = l - d, o.leftRightFlag = !0), f + h > f + d && f - d > h && (o.missRight = !0, o.missLeft = !1), 0 >= f - h && (o.missLeft = !0, o.missRight = !1);
            }return o;
         }, top: function top(t, e) {
            var i = Foundation.libs.dropdown,
                n = i.dirs._base.call(this, t, e);return (this.addClass("drop-top"), 1 == n.missTop && (n.top = n.top + t.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == n.missRight && (n.left = n.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), Foundation.rtl ? { left: n.left - this.outerWidth() + t.outerWidth(), top: n.top - this.outerHeight() } : { left: n.left, top: n.top - this.outerHeight() });
         }, bottom: function bottom(t, e) {
            var i = Foundation.libs.dropdown,
                n = i.dirs._base.call(this, t, e);return (1 == n.missRight && (n.left = n.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), i.rtl ? { left: n.left - this.outerWidth() + t.outerWidth(), top: n.top + t.outerHeight() } : { left: n.left, top: n.top + t.outerHeight() });
         }, left: function left(t, e) {
            var i = Foundation.libs.dropdown.dirs._base.call(this, t, e);return (this.addClass("drop-left"), 1 == i.missLeft && (i.left = i.left + this.outerWidth(), i.top = i.top + t.outerHeight(), this.removeClass("drop-left")), { left: i.left - this.outerWidth(), top: i.top });
         }, right: function right(t, e) {
            var i = Foundation.libs.dropdown.dirs._base.call(this, t, e);this.addClass("drop-right"), 1 == i.missRight ? (i.left = i.left - this.outerWidth(), i.top = i.top + t.outerHeight(), this.removeClass("drop-right")) : i.triggeredRight = !0;var n = Foundation.libs.dropdown;return ((t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), { left: i.left + t.outerWidth(), top: i.top });
         } }, adjust_pip: function adjust_pip(t, e, i, n) {
         var s = Foundation.stylesheet,
             a = 8;t.hasClass(i.mega_class) ? a = n.left + e.outerWidth() / 2 - 8 : this.small() && (a += n.left - 8), this.rule_idx = s.cssRules.length;var o = ".f-dropdown.open:before",
             r = ".f-dropdown.open:after",
             l = "left: " + a + "px;",
             d = "left: " + (a - 1) + "px;";1 == n.missRight && (a = t.outerWidth() - 23, o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left: " + a + "px;", d = "left: " + (a - 1) + "px;"), 1 == n.triggeredRight && (o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left:-12px;", d = "left:-14px;"), s.insertRule ? (s.insertRule([o, "{", l, "}"].join(" "), this.rule_idx), s.insertRule([r, "{", d, "}"].join(" "), this.rule_idx + 1)) : (s.addRule(o, l, this.rule_idx), s.addRule(r, d, this.rule_idx + 1));
      }, clear_idx: function clear_idx() {
         var t = Foundation.stylesheet;"undefined" != typeof this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx);
      }, small: function small() {
         return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
      }, off: function off() {
         this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown");
      }, reflow: function reflow() {} };
})(jQuery, window, window.document);

//# sourceMappingURL=foundation.min-compiled.js.map