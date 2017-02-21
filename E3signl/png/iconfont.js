;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-yueliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M340.992 39.936q-36.864 31.744-60.928 70.144t-38.912 82.944-20.992 93.184-6.144 100.864q0 84.992 32.768 161.792t89.6 134.656 134.144 92.16 166.4 34.304q52.224 0 101.888-5.12t95.232-18.432 85.504-36.352 71.68-59.904q-27.648 67.584-74.24 124.416t-106.496 97.792-131.072 63.488-148.992 22.528q-103.424 0-194.048-38.912t-158.208-106.496-106.496-158.208-38.912-194.048q0-77.824 22.528-148.992t63.488-131.072 97.792-106.496 124.416-74.24z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-taiyang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.986979 761.601778c-66.934458 0-129.860626-26.065655-177.189561-73.395614-47.327912-47.327912-73.391521-110.25408-73.391521-177.184445 0-66.931389 26.064632-129.857557 73.391521-177.186492 47.328935-47.329958 110.256126-73.395614 177.189561-73.395614 66.926272 0 129.851417 26.065655 177.181375 73.395614 47.332005 47.330982 73.398684 110.25715 73.398684 177.186492S737.500359 640.877229 690.168354 688.207188C642.837372 735.536123 579.913251 761.601778 512.986979 761.601778zM512.986979 301.371862c-115.600855 0-209.648834 94.049003-209.648834 209.649857 0 115.600855 94.047979 209.647811 209.648834 209.647811s209.647811-94.046956 209.647811-209.647811C722.63479 395.420865 628.58681 301.371862 512.986979 301.371862z"  ></path>' +
    '' +
    '<path d="M512.986979 192.962803c-11.30344 0-20.466124-9.162684-20.466124-20.466124L492.520855 92.200912c0-11.30344 9.162684-20.466124 20.466124-20.466124s20.466124 9.162684 20.466124 20.466124l0 80.294744C533.453103 183.80012 524.290419 192.962803 512.986979 192.962803z"  ></path>' +
    '' +
    '<path d="M512.986979 950.288185c-11.30344 0-20.466124-9.162684-20.466124-20.466124l0-80.284511c0-11.30344 9.162684-20.466124 20.466124-20.466124s20.466124 9.162684 20.466124 20.466124l0 80.284511C533.453103 941.125501 524.290419 950.288185 512.986979 950.288185z"  ></path>' +
    '' +
    '<path d="M273.609053 292.120151c-5.238304 0-10.475586-1.998517-14.471596-5.994528L202.367499 229.356688c-7.993045-7.992021-7.993045-20.951171 0-28.943193 7.992021-7.993045 20.951171-7.993045 28.943193 0l56.770981 56.769958c7.993045 7.992021 7.993045 20.951171 0 28.943193C284.085662 290.121634 278.847357 292.120151 273.609053 292.120151z"  ></path>' +
    '' +
    '<path d="M809.114396 827.625494c-5.237281 0-10.475586-1.997494-14.47262-5.993504l-56.770981-56.770981c-7.992021-7.993045-7.992021-20.952194 0-28.944216 7.993045-7.993045 20.952194-7.993045 28.944216 0l56.770981 56.770981c7.992021 7.993045 7.992021 20.952194 0 28.944216C819.589982 825.626977 814.351678 827.625494 809.114396 827.625494z"  ></path>' +
    '' +
    '<path d="M94.159008 531.497053c-11.30344 0.001023-20.467147-9.160637-20.468171-20.464077-0.001023-11.30344 9.160637-20.467147 20.464077-20.468171l80.286558-0.00921c11.30344-0.001023 20.467147 9.160637 20.468171 20.464077 0.001023 11.30344-9.160637 20.467147-20.464077 20.468171L94.159008 531.497053z"  ></path>' +
    '' +
    '<path d="M931.777087 531.487843l-80.284511 0c-11.30344 0-20.466124-9.162684-20.466124-20.466124s9.162684-20.466124 20.466124-20.466124l80.284511 0c11.30344 0 20.466124 9.162684 20.466124 20.466124S943.080527 531.487843 931.777087 531.487843z"  ></path>' +
    '' +
    '<path d="M216.839095 827.634704c-5.238304 0-10.475586-1.997494-14.471596-5.993504-7.993045-7.993045-7.993045-20.952194 0-28.944216l56.770981-56.770981c7.993045-7.993045 20.951171-7.993045 28.943193 0s7.993045 20.952194 0 28.944216l-56.770981 56.770981C227.314681 825.63721 222.0774 827.634704 216.839095 827.634704z"  ></path>' +
    '' +
    '<path d="M752.343415 292.120151c-5.238304 0-10.474562-1.997494-14.47262-5.994528-7.993045-7.993045-7.992021-20.951171 0.001023-28.943193l56.770981-56.769958c7.993045-7.992021 20.951171-7.993045 28.943193 0s7.992021 20.951171-0.001023 28.943193l-56.770981 56.769958C762.819001 290.121634 757.580696 292.120151 752.343415 292.120151z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yueliang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.609756 49.95122C399.609756 22.353171 377.256585 0 349.658537 0 274.606829 0 0 209.845073 0 499.512195 0 789.179317 234.820683 1024 524.487805 1024 814.154927 1024 1024 747.470049 1024 674.341463 1024 646.743415 1001.646829 624.390244 974.04878 624.390244 946.450732 624.390244 672.867902 692.074146 502.034732 521.240976 331.201561 350.407805 399.609756 77.549268 399.609756 49.95122Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)