/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders */ \"./src/assets/js/sliders.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/assets/js/modules/maskPhone.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_maskPhone__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction initHeader() {\r\n  $('.burger').click(function (event) {\r\n      $('.mobileMenu').toggleClass('show')\r\n      $(this).toggleClass('active')\r\n      $('.window').toggleClass('active')\r\n      $('html').toggleClass('block')\r\n    }\r\n  )\r\n\r\n  $('.header__center span').click(function (e) {\r\n    $(this).parent().toggleClass('showHidden')\r\n    $('.window').toggleClass('active')\r\n    $('html').toggleClass('block')\r\n  })\r\n\r\n  $('.header nav a').click(function (e) {\r\n    e.preventDefault()\r\n\r\n    $('.burger').removeClass('active')\r\n    $('.mobileMenu').removeClass('show')\r\n    $('.window').removeClass('active')\r\n  })\r\n\r\n  $('.pageInfo__dropItem').click(function (e) {\r\n    $(this).toggleClass('active')\r\n    $('.pageInfo__hidden').slideToggle()\r\n  })\r\n\r\n  $('.window').click(function (e) {\r\n      e.preventDefault()\r\n      if (e.target.classList.contains('window')) {\r\n        $('.burger').removeClass('active')\r\n        $('.mobileMenu').removeClass('show')\r\n        $('.window').removeClass('active')\r\n        $('html').toggleClass('block')\r\n        $('.header__center nav > ul > li').removeClass('showHidden')\r\n      }\r\n    }\r\n  )\r\n  $('.callMe__r a').click(function (e) {\r\n    e.preventDefault()\r\n    $('.callMe__modal').addClass('active')\r\n  })\r\n  $('.callMe__modal').click(function (e) {\r\n\r\n    if (e.target.classList.contains('close')) {\r\n      e.preventDefault()\r\n      $(this).removeClass('active')\r\n    }\r\n  })\r\n\r\n  // $('.MAP__wrp').click(function (e) {\r\n  //   console.log('$(this).hasClass(\\'active\\')', $(this).hasClass('active'))\r\n  //   console.log('$(this)', $(this))\r\n  //   if (!$(this).hasClass('active')){\r\n  //     $(this).addClass('active')\r\n  //     scrollTo({\r\n  //       top: $('.MAP').offset().top,\r\n  //       behavior: \"smooth\"\r\n  //     })\r\n  //   }\r\n  // })\r\n  $('.MAP__btn').click(function (e) {\r\n    $('.MAP__wrp').toggleClass('active')\r\n    scrollTo({\r\n      top: $('.MAP').offset().top,\r\n      behavior: \"smooth\"\r\n    })\r\n  })\r\n}\r\n\r\nfunction accordionInit() {\r\n  $('.accord-head, .accord-footer-head, .accord-desc-head').click(function (e) {\r\n    e.preventDefault()\r\n    console.log($(this))\r\n    if ($(this).hasClass('mob') && window.innerWidth > 1200) {\r\n      return null\r\n    }\r\n\r\n    $(this).toggleClass('active')\r\n    $(this).next().slideToggle()\r\n  })\r\n}\r\n\r\nfunction StarsInit() {\r\n  const starOutline = 'assets/images/icons/StarOutline.svg'\r\n  const starFill = 'assets/images/icons/StarFill.svg'\r\n  $('.Stars').each(function (e) {\r\n    const el = $(this)\r\n    const rate = el.data('rate')\r\n    for (let i = 1; i <= 5; i++) {\r\n      if (rate >= i) {\r\n        el.append(`<img src=\"${starFill}\" />`)\r\n      } else {\r\n        el.append(`<img src=\"${starOutline}\" />`)\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\nfunction tabOnItemSpan() {\r\n  $('.viewItem__c span').click(function (e) {\r\n    if (window.innerWidth > 700) {\r\n      return null\r\n    }\r\n    const index = $(this).text()\r\n    const left = $(this).parent().prev()\r\n    const parent = $(this).parent().parent()\r\n    const right = $(this).parent().next()\r\n    const leftElems = left.find('.viewItem__it')\r\n    const rightElems = right.find('.viewItem__it')\r\n    const lenghtLeft = left.find('.viewItem__it').length\r\n\r\n    parent.find('.viewItem__it').removeClass('active')\r\n    parent.find('.viewItem__c span').removeClass('active')\r\n    $(this).addClass('active')\r\n    if (index <= lenghtLeft){\r\n      const el = leftElems[+index - 1]\r\n      el.classList.add('active')\r\n    }else{\r\n      const el = rightElems[+index - 1 - lenghtLeft]\r\n      el.classList.add('active')\r\n    }\r\n  })\r\n}\r\n\r\n// INIT\r\n$(document).ready(function () {\r\n  $(\".phone\").mask(\"+7 (999) 99-99-999\");\r\n  $('select').customSelect();\r\n  // Sliders\r\n  (0,_sliders__WEBPACK_IMPORTED_MODULE_0__.initSliders)()\r\n\r\n  initHeader()\r\n  accordionInit()\r\n  StarsInit()\r\n  tabOnItemSpan()\r\n\r\n  $('.items__it').click(e => {\r\n    e.preventDefault()\r\n  })\r\n\r\n  $('.head-search-btn').click(e => {\r\n    e.preventDefault()\r\n    $('.search-head').removeClass('d-none')\r\n    $('.header__phone').addClass('d-none')\r\n    $('.head-search-btn').addClass('d-none')\r\n  })\r\n  $('.close-search-head').click(e => {\r\n    e.preventDefault()\r\n    $('.search-head').addClass('d-none')\r\n    $('.header__phone').removeClass('d-none')\r\n    $('.head-search-btn').removeClass('d-none')\r\n  })\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/modules/maskPhone.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/maskPhone.js ***!
  \********************************************/
/***/ (function() {

eval("/*\r\n\tMasked Input plugin for jQuery\r\n\tCopyright (c) 2007-2013 Josh Bush (digitalbush.com)\r\n\tLicensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)\r\n\tVersion: 1.3.1\r\n*/\r\n(function(e){function t(){var e=document.createElement(\"input\"),t=\"onpaste\";return e.setAttribute(t,\"\"),\"function\"==typeof e[t]?\"paste\":\"input\"}var n,a=t()+\".mask\",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:\"[0-9]\",a:\"[A-Za-z]\",\"*\":\"[A-Za-z0-9]\"},dataName:\"rawMaskFn\",placeholder:\"_\"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(\":hidden\"))return\"number\"==typeof e?(t=\"number\"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd(\"character\",t),n.moveStart(\"character\",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart(\"character\",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger(\"unmask\")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(\"\"),function(e,t){\"?\"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger(\"unmask\").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(\"\"))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(\"\"),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(\"\"),function(e){return\"?\"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join(\"\")}),x.attr(\"readonly\")||x.one(\"unmask\",function(){x.unbind(\".mask\").removeData(e.mask.dataName)}).bind(\"focus.mask\",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind(\"blur.mask\",function(){y(),x.val()!=S&&x.change()}).bind(\"keydown.mask\",g).bind(\"keypress.mask\",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modules/maskPhone.js?");

/***/ }),

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CustomSelect = (($) => {\r\n\r\n    const defaults = {\r\n        block: 'custom-select',\r\n        hideCallback: false,\r\n        includeValue: false,\r\n        keyboard: true,\r\n        modifier: false,\r\n        placeholder: false,\r\n        search: false,\r\n        showCallback: false,\r\n        transition: 0\r\n    };\r\n\r\n    class CustomSelect {\r\n\r\n        /**\r\n         * Custom Select\r\n         *\r\n         * @param {Element} select Original `<select>` DOM element to customize.\r\n         * @param {(Object|string)=} options Settings object or method name.\r\n         * @param {string=} options.block Custom select BEM block name.\r\n         * @param {Function=} options.hideCallback Fires after dropdown closes.\r\n         * @param {boolean=} options.includeValue Adds chosen value option to\r\n         *     dropdown. If enabled also cancels dropdown options rerender.\r\n         * @param {boolean=} options.keyboard Enables keyboard control.\r\n         * @param {string=} options.modifier Custom select block BEM modifier.\r\n         * @param {string=} options.placeholder Placeholder hint, can be an HTML\r\n         *     string (appears only if there is no explicitly selected options).\r\n         * @param {boolean=} options.search Adds input to filter options.\r\n         * @param {Function=} options.showCallback Fires after dropdown opens.\r\n         * @param {(number|string)=} options.transition jQuery slideUp/Down param.\r\n         */\r\n        constructor(select, options) {\r\n            this._$select = $(select);\r\n            this._options = {\r\n                ...defaults,\r\n                ...typeof options === 'object' ? options : {}\r\n            };\r\n\r\n            // Modifiers\r\n            this._activeModifier = `${this._options.block}--active`;\r\n            this._dropupModifier = `${this._options.block}--dropup`;\r\n            this._optionSelectedModifier = `${this._options.block}__option--selected`;\r\n\r\n            // Event handlers that can be removed\r\n            this._keydown = this._keydown.bind(this);\r\n            this._dropup = this._dropup.bind(this);\r\n            this._outside = this._outside.bind(this);\r\n\r\n            this._init();\r\n        }\r\n\r\n        /**\r\n         * Resets custom select options.\r\n         *\r\n         * @public\r\n         */\r\n        reset() {\r\n            this._$dropdown.hide().empty();\r\n            this._$value.off('click');\r\n\r\n            this._fill();\r\n        }\r\n\r\n        /**\r\n         * Renders initial state of custom select & sets\r\n         * options click event listeners.\r\n         *\r\n         * @private\r\n         */\r\n        _init() {\r\n            this._$element = $(\r\n                `<div class=\"${this._options.block}\">\r\n           <button class=\"${this._options.block}__option ${this._options.block}__option--value\" type=\"button\"></button>\r\n           <div class=\"${this._options.block}__dropdown\" style=\"display: none;\"></div>\r\n         </div>`\r\n            );\r\n\r\n            this._$select\r\n                .hide()\r\n                .after(this._$element);\r\n\r\n            if (this._options.modifier) {\r\n                this._$element.addClass(this._options.modifier);\r\n            }\r\n\r\n            this._$value = this._$element.find(`.${this._options.block}__option--value`);\r\n            this._$dropdown = this._$element.find(`.${this._options.block}__dropdown`);\r\n\r\n            this._fill();\r\n        }\r\n\r\n        /**\r\n         * Renders custom select options by original\r\n         * select element options.\r\n         *\r\n         * @private\r\n         */\r\n        _fill() {\r\n            this._$values = this._$select.find('option');\r\n            this._values = [];\r\n\r\n            let placeholder = this._options.placeholder;\r\n\r\n            $.each(this._$values, (i, option) => {\r\n                const el = $(option).text().trim();\r\n                this._values.push(el);\r\n            });\r\n\r\n            if (placeholder) {\r\n                // Check explicitly selected option\r\n                if (this._$select.find('[selected]').length) {\r\n                    placeholder = false;\r\n                } else {\r\n                    this._$value.html(placeholder);\r\n                    // Set select value to null\r\n                    this._$select.prop('selectedIndex', -1);\r\n                }\r\n            }\r\n\r\n            $.each(this._values, (i, el) => {\r\n                const cssClass = this._$values.eq(i).attr('class');\r\n                const $option = $(\r\n                    `<button class=\"${this._options.block}__option\" type=\"button\">${el}</button>`\r\n                );\r\n                const $selected = this._$select.find(':selected');\r\n\r\n                if (this._$values.eq(i).attr('disabled')) {\r\n                    $option.prop('disabled', true);\r\n                }\r\n\r\n                if ((!$selected.length && i === 0) || el === $selected.text().trim()) {\r\n                    if (!placeholder) {\r\n                        this._$value\r\n                            .text(el)\r\n                            .removeClass(this._$value.data('class')).removeData('class')\r\n                            .addClass(cssClass).data('class', cssClass);\r\n                    }\r\n\r\n                    if (this._options.includeValue || placeholder) {\r\n                        $option.addClass(cssClass);\r\n                        $option.toggleClass(this._optionSelectedModifier, this._$values.eq(i).is('[selected]'));\r\n                        this._$dropdown.append($option);\r\n                    }\r\n                } else {\r\n                    $option.addClass(cssClass);\r\n                    this._$dropdown.append($option);\r\n                }\r\n            });\r\n\r\n            this._$options = this._$dropdown.find(`.${this._options.block}__option`);\r\n\r\n            if (this._options.search) {\r\n                this._search();\r\n            }\r\n\r\n            this._$value.one('click', event => {\r\n                this._show(event);\r\n            });\r\n\r\n            this._$value.prop('disabled', !this._$options.length);\r\n\r\n            this._$options.on('click', event => {\r\n                this._select(event);\r\n            });\r\n        }\r\n\r\n        /**\r\n         * Shows custom select dropdown & sets outside\r\n         * click listener to hide.\r\n         *\r\n         * @param {Object} event Value click jQuery event.\r\n         * @private\r\n         */\r\n        _show(event) {\r\n            event.preventDefault();\r\n\r\n            this._dropup();\r\n            $(window).on('resize scroll', this._dropup);\r\n\r\n            this._$element.addClass(this._activeModifier);\r\n\r\n            this._$dropdown.slideDown(this._options.transition, () => {\r\n                if (this._options.search) {\r\n                    this._$input.focus();\r\n\r\n                    if (this._options.includeValue) {\r\n                        this._scroll();\r\n                    }\r\n                }\r\n\r\n                // Open callback\r\n                if (typeof this._options.showCallback === 'function') {\r\n                    this._options.showCallback.call(this._$element[0]);\r\n                }\r\n            });\r\n\r\n            setTimeout(() => {\r\n                $(document).on('touchstart click', this._outside);\r\n            }, 0);\r\n\r\n            this._$value.one('click', event => {\r\n                event.preventDefault();\r\n\r\n                this._hide();\r\n            });\r\n\r\n            if (this._options.keyboard) {\r\n                this._options.index = -1;\r\n                $(window).on('keydown', this._keydown);\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Hides custom select dropdown & resets events\r\n         * listeners to initial.\r\n         *\r\n         * @private\r\n         */\r\n        _hide() {\r\n            if (this._options.search) {\r\n                this._$input.val('').blur();\r\n                this._$options.show();\r\n                this._$wrap.scrollTop(0);\r\n            }\r\n\r\n            this._$dropdown.slideUp(this._options.transition, () => {\r\n                this._$element\r\n                    .removeClass(this._activeModifier)\r\n                    .removeClass(this._dropupModifier);\r\n\r\n                // Close callback\r\n                if (typeof this._options.hideCallback === 'function') {\r\n                    this._options.hideCallback.call(this._$element[0]);\r\n                }\r\n\r\n                this._$value\r\n                    .off('click')\r\n                    .one('click', event => {\r\n                        this._show(event);\r\n                    });\r\n                $(document).off('touchstart click', this._outside);\r\n                $(window).off('resize scroll', this._dropup);\r\n            });\r\n\r\n            if (this._options.keyboard) {\r\n                this._$options.blur();\r\n                $(window).off('keydown', this._keydown);\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Centers chosen option in scrollable element\r\n         * of dropdown.\r\n         *\r\n         * @private\r\n         */\r\n        _scroll() {\r\n            $.each(this._$options, (i, option) => {\r\n                const $option = $(option);\r\n\r\n                if ($option.text() === this._$value.text()) {\r\n                    const top = $option.position().top;\r\n                    const height = this._$wrap.outerHeight();\r\n                    const center = height / 2 - $option.outerHeight() / 2;\r\n\r\n                    if (top > center) {\r\n                        this._$wrap.scrollTop(top - center);\r\n                    }\r\n\r\n                    return false;\r\n                }\r\n            });\r\n        }\r\n\r\n        /**\r\n         * Changes value of custom select & `<select>`\r\n         * by chosen option.\r\n         *\r\n         * @param {Object} event Option click jQuery event.\r\n         * @private\r\n         */\r\n        _select(event) {\r\n            event.preventDefault();\r\n\r\n            const choice = $(event.currentTarget).text().trim();\r\n            const values = [...this._values];\r\n\r\n            this._$value\r\n                .text(choice)\r\n                .removeClass(this._$value.data('class'));\r\n            this._$values.prop('selected', false);\r\n\r\n            $.each(values, (i, el) => {\r\n                if (!this._options.includeValue && el === choice) {\r\n                    values.splice(i, 1);\r\n                }\r\n\r\n                $.each(this._$values, (i, option) => {\r\n                    const $option = $(option);\r\n                    if ($option.text().trim() === choice) {\r\n                        const cssClass = $option.attr('class');\r\n\r\n                        $option.prop('selected', true);\r\n                        this._$value.addClass(cssClass).data('class', cssClass);\r\n                    }\r\n                });\r\n            });\r\n\r\n            this._hide();\r\n\r\n            if (!this._options.includeValue) {\r\n                // Update dropdown options content\r\n                if (this._$options.length > values.length) {\r\n                    const last = this._$options.eq(values.length);\r\n\r\n                    last.remove();\r\n                    this._$options = this._$options.not(last);\r\n\r\n                    if (!this._$options.length) {\r\n                        this._$value.prop('disabled', true);\r\n                    }\r\n                }\r\n\r\n                $.each(this._$options, (i, option) => {\r\n                    const $option = $(option);\r\n                    $option.text(values[i]);\r\n\r\n                    // Reset option class\r\n                    $option.attr('class', `${this._options.block}__option`);\r\n\r\n                    $.each(this._$values, function () {\r\n                        const $this = $(this);\r\n                        if ($this.text().trim() === values[i]) {\r\n                            $option.addClass($this.attr('class'));\r\n                            $option.prop('disabled', $this.prop('disabled'));\r\n                        }\r\n                    });\r\n                });\r\n            } else {\r\n                // Select chosen option\r\n                this._$options.removeClass(this._optionSelectedModifier);\r\n\r\n                $.each(this._$options, (i, option) => {\r\n                    const $option = $(option);\r\n\r\n                    if ($option.text().trim() === choice) {\r\n                        $option.addClass(this._optionSelectedModifier);\r\n\r\n                        return false;\r\n                    }\r\n                });\r\n            }\r\n\r\n            if (typeof event.originalEvent !== 'undefined') {\r\n                this._$select.trigger('change');\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Wraps options by wrap element, adds search\r\n         * input to dropdown.\r\n         *\r\n         * @private\r\n         */\r\n        _search() {\r\n            this._$input = $(`<input class=\"${this._options.block}__input\" autocomplete=\"off\">`);\r\n            this._$dropdown.prepend(this._$input);\r\n\r\n            // Add scrollable wrap\r\n            this._$options.wrapAll(`<div class=\"${this._options.block}__option-wrap\"></div>`);\r\n            this._$wrap = this._$element.find(`.${this._options.block}__option-wrap`);\r\n\r\n            this._$input.on('focus', () => {\r\n                this._options.index = -1;\r\n            });\r\n\r\n            this._$input.on('keyup', () => {\r\n                const query = this._$input.val().trim();\r\n\r\n                if (query.length) {\r\n                    this._$wrap.scrollTop(0);\r\n\r\n                    setTimeout(() => {\r\n                        if (query === this._$input.val().trim()) {\r\n                            $.each(this._$options, (i, option) => {\r\n                                const $option = $(option);\r\n                                const text = $option.text().trim().toLowerCase();\r\n                                const match = text.indexOf(query.toLowerCase()) !== -1;\r\n\r\n                                $option.toggle(match);\r\n                            });\r\n                        }\r\n                    }, 300);\r\n                } else {\r\n                    this._$options.show();\r\n                }\r\n            });\r\n        }\r\n\r\n        /**\r\n         * Toggles custom select dropup modifier based\r\n         * on space for dropdown below.\r\n         *\r\n         * @private\r\n         */\r\n        _dropup() {\r\n            const bottom = this._$element[0].getBoundingClientRect().bottom;\r\n            const up = $(window).height() - bottom < this._$dropdown.height();\r\n\r\n            this._$element.toggleClass(this._dropupModifier, up);\r\n        }\r\n\r\n        /**\r\n         * Hides dropdown if target of event (e.g. click\r\n         * on `$window`) is not custom select.\r\n         *\r\n         * @param {Object} event Outside \"click\" jQuery event.\r\n         * @private\r\n         */\r\n        _outside(event) {\r\n            const $target = $(event.target);\r\n            if (!$target.parents().is(this._$element) && !$target.is(this._$element)) {\r\n                this._hide();\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Controls navigation from keyboard by custom\r\n         * select options.\r\n         *\r\n         * @param {Object} event Keydown jQuery event.\r\n         * @private\r\n         */\r\n        _keydown(event) {\r\n            const $visible = this._$options.filter(':visible').not('[disabled]');\r\n\r\n            switch (event.which) {\r\n                // Down\r\n                case 40:\r\n                    event.preventDefault();\r\n\r\n                    const next = $visible.eq(this._options.index + 1).length;\r\n                    if (next) {\r\n                        this._options.index += 1;\r\n                    } else {\r\n                        this._options.index = 0;\r\n                    }\r\n\r\n                    $visible.eq(this._options.index).focus();\r\n                    break;\r\n\r\n                // Up\r\n                case 38:\r\n                    event.preventDefault();\r\n\r\n                    const prev = $visible.eq(this._options.index - 1).length;\r\n                    if (prev && this._options.index - 1 >= 0) {\r\n                        this._options.index -= 1;\r\n                    } else {\r\n                        this._options.index = $visible.length - 1;\r\n                    }\r\n\r\n                    $visible.eq(this._options.index).focus();\r\n                    break;\r\n\r\n                // Enter\r\n                case 13:\r\n\r\n                // Space\r\n                case 32:\r\n                    if (!this._$input || !this._$input.is(':focus')) {\r\n                        event.preventDefault();\r\n\r\n                        const $option = this._$options.add(this._$value).filter(':focus');\r\n                        $option.trigger('click');\r\n\r\n                        if (!$option.is(this._$value)) {\r\n                            this._$select.trigger('change');\r\n                        }\r\n                        this._$value.focus();\r\n                    }\r\n                    break;\r\n\r\n                // Esc\r\n                case 27:\r\n                    event.preventDefault();\r\n\r\n                    this._hide();\r\n                    this._$value.focus();\r\n                    break;\r\n\r\n                default:\r\n                    break;\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Creates jQuery plugin function.\r\n         *\r\n         * @param {(Object|string)=} config Options or method.\r\n         * @returns {Function} jQuery plugin.\r\n         */\r\n        static _jQueryPlugin(config) {\r\n            return this.each(function () {\r\n                const $this = $(this);\r\n                let data = $this.data('custom-select');\r\n\r\n                if (!data) {\r\n                    if (typeof config !== 'string') {\r\n                        data = new CustomSelect(this, config);\r\n                        $this.data('custom-select', data);\r\n                    }\r\n                } else {\r\n                    if (config === 'reset') {\r\n                        data.reset();\r\n                    }\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    $.fn['customSelect'] = CustomSelect._jQueryPlugin;\r\n    $.fn['customSelect'].noConflict = () => $.fn['customSelect'];\r\n\r\n    return CustomSelect;\r\n\r\n})($);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSelect);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/select.js?");

/***/ }),

/***/ "./src/assets/js/sliders.js":
/*!**********************************!*\
  !*** ./src/assets/js/sliders.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSliders\": function() { return /* binding */ initSliders; }\n/* harmony export */ });\nconst initSliders = () => {\r\n  if ($(\".homeMain__swiper \").length > 0) {\r\n    new Swiper(\".homeMain__swiper\", {\r\n      slidesPerView: 1,\r\n      navigation: {\r\n        nextEl: '.homeMain-next',\r\n        prevEl: '.homeMain-prev',\r\n      },\r\n      pagination: {\r\n        el: \".homeMain-pagination\",\r\n        clickable: true,\r\n      },\r\n    });\r\n  }\r\n\r\n  if ($(\".reviews__swiper \").length > 0) {\r\n    new Swiper(\".reviews__swiper\", {\r\n      slidesPerView: 1,\r\n      spaceBetween: 30,\r\n      autoHeight: true,\r\n      navigation: {\r\n        nextEl: '.reviews-next',\r\n        prevEl: '.reviews-prev',\r\n      },\r\n      pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n      },\r\n      breakpoints: {\r\n        // when window width is <= 999px\r\n        1200: {\r\n          slidesPerView: 2,\r\n\r\n        },\r\n      }\r\n    });\r\n  }\r\n  if ($(\".reviews__swiper-product \").length > 0) {\r\n    new Swiper(\".reviews__swiper-product\", {\r\n      slidesPerView: 1,\r\n      spaceBetween: 30,\r\n      autoHeight: true,\r\n      navigation: {\r\n        nextEl: '.reviews-next',\r\n        prevEl: '.reviews-prev',\r\n      },\r\n      pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n      },\r\n      breakpoints: {\r\n        // when window width is <= 999px\r\n\r\n      }\r\n    });\r\n  }\r\n\r\n\r\n  if ($(\".video__swiper \").length > 0) {\r\n    new Swiper(\".video__swiper\", {\r\n      slidesPerView: 1,\r\n      spaceBetween: 40,\r\n      autoHeight: true,\r\n      navigation: {\r\n        nextEl: '.video-next',\r\n        prevEl: '.video-prev',\r\n      },\r\n      pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n      },\r\n      breakpoints: {\r\n        // when window width is <= 999px\r\n        900: {\r\n          slidesPerView: 2,\r\n          spaceBetween: 30,\r\n        },\r\n        1300: {\r\n          slidesPerView: 2,\r\n          spaceBetween: 88,\r\n        },\r\n      }\r\n    });\r\n  }\r\n\r\n  if ($(\".equipment__wrp \").length > 0) {\r\n    new Swiper(\".equipment__wrp.onMob\", {\r\n      slidesPerView: 1,\r\n      spaceBetween: 52,\r\n      autoHeight: true,\r\n      navigation: {\r\n        nextEl: '.eq-next',\r\n        prevEl: '.eq-prev',\r\n      },\r\n    });\r\n  }\r\n  if ($(\".tempIt__swiper \").length > 0) {\r\n    new Swiper(\".tempIt__swiper\", {\r\n      slidesPerView: 1,\r\n      effect: 'fade',\r\n      navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n      },\r\n    });\r\n  }\r\n  if ($(\".product__slider \").length > 0) {\r\n    const mainItemSlider  = new Swiper(\".product__slider\", {\r\n      slidesPerView: 1,\r\n      navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n      },\r\n    });\r\n    new Swiper(\".product__slider_mini\", {\r\n      slidesPerView: 3,\r\n      spaceBetween: 24,\r\n    });\r\n    $('.product__slider_mini').on('click', 'li', function () {\r\n      const index = $(this).data('index')\r\n      mainItemSlider.slideTo(index - 1)\r\n    });\r\n  }\r\n\r\n\r\n  if ($(\".cases__swiper\").length > 0) {\r\n    new Swiper(\".cases__swiper\", {\r\n      spaceBetween: 50,\r\n      slidesPerView: 1,\r\n      loop: true,\r\n      navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n      },\r\n      breakpoints: {\r\n        // when window width is <= 999px\r\n        700: {\r\n          slidesPerView: 2,\r\n          spaceBetween: 32,\r\n        },\r\n        840: {\r\n          slidesPerView: 3,\r\n        },\r\n        1200: {\r\n          slidesPerView: \"auto\",\r\n          freeMode: true,\r\n          centeredSlides: true,\r\n        },\r\n      }\r\n    });\r\n  }\r\n  if ($(\".assort\").length > 0) {\r\n    new Swiper(\".assort\", {\r\n      spaceBetween: 50,\r\n      slidesPerView: 1.75,\r\n      centeredSlides: true,\r\n      loop: true,\r\n      navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n      },\r\n      pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n      },\r\n      breakpoints: {\r\n        // when window width is <= 999px\r\n        840: {\r\n          spaceBetween: 40,\r\n\r\n          slidesPerView: 3,\r\n        },\r\n        1300: {\r\n          slidesPerView:  5.71,\r\n          spaceBetween: 0,\r\n        },\r\n      }\r\n    });\r\n  }\r\n  if ($(\".styles__swiper\").length > 0) {\r\n    new Swiper(\".styles__swiper\", {\r\n      spaceBetween: 32,\r\n      slidesPerView: \"auto\",\r\n      freeMode: true,\r\n      loop: true,\r\n      centeredSlides: true,\r\n    });\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/sliders.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/select.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/sliders.js");
/******/ 	
/******/ })()
;