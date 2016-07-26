
;(function ($, window, document, undefined) {

  'use strict'

  var pluginName = 'activelink',
    defaults = {
      classname: 'active',
      parent: null,
    }

  function Plugin(element, options) {
    this.element = $(element)
    this.settings = $.extend({}, defaults, options)
    this._defaults = defaults
    this._name = pluginName
    this.init()
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var thi = this
      this.element.find('a').each(function () {
        var ele = $(this)
        if (thi.inPage(ele.attr('href'))) {
          thi.setClass(ele)
        }
      })
    },

    data: function (key) {
      return this.element.data(key) || this.settings[key]
    },

    inPage: function (url) {
      var pathname = window.location.pathname
      url = (url === '') ? undefined : url
      return (url !== '/' && pathname.indexOf(url) === 0) || pathname === url
    },

    setClass: function (ele) {
      var parent = this.data('parent')
      ele = parent ? ele.parent(parent) : ele
      ele.addClass(this.data('classname'))
    }
  })

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' +
          pluginName, new Plugin(this, options))
      }
    })
  }

})(jQuery, window, document)

