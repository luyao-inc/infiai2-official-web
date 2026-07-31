;(function () {
  'use strict'

  var script = document.currentScript
  if (!script || script.dataset.infiaiMounted === 'true') return
  script.dataset.infiaiMounted = 'true'

  var widgetId = (script.dataset.widgetId || '').trim()
  if (!widgetId || widgetId.indexOf('%VITE_') === 0) return

  var scriptUrl = new URL(script.src, window.location.href)
  var apiBase = (script.dataset.apiBase || '').trim()
  if (!apiBase || apiBase.indexOf('%VITE_') === 0) {
    apiBase = scriptUrl.origin
  }

  var MOBILE_BREAKPOINT = 640
  var DESKTOP_MAX_WIDTH = 410
  var DESKTOP_MAX_HEIGHT = 680
  var DESKTOP_GAP = 16
  var LAUNCHER_SIZE = 64
  var LAUNCHER_GAP = 18

  var frame = document.createElement('iframe')
  var params = new URLSearchParams({
    widgetId: widgetId,
    apiBase: apiBase.replace(/\/$/, ''),
    origin: window.location.origin,
    label: script.dataset.label || '',
  })
  frame.src = scriptUrl.origin + '/widget/embed/?' + params.toString()
  frame.title = script.dataset.label || '嵌入网站'
  frame.setAttribute('aria-label', frame.title)
  frame.setAttribute('allow', 'clipboard-write')
  frame.style.cssText =
    'position:fixed;display:block;left:auto;top:auto;right:18px;bottom:18px;width:64px;height:64px;max-width:none;max-height:none;border:0;border-radius:50%;overflow:hidden;background:transparent;box-shadow:0 12px 30px rgba(109,93,251,.32),0 4px 12px rgba(15,23,42,.2);z-index:2147483000;color-scheme:light;'
  document.body.appendChild(frame)

  var position = 'bottom-right'
  var opened = false
  var themeColor = '#6d5dfb'

  function viewportBounds() {
    var viewport = window.visualViewport
    return {
      left: viewport ? viewport.offsetLeft : 0,
      top: viewport ? viewport.offsetTop : 0,
      width: viewport ? viewport.width : window.innerWidth,
      height: viewport ? viewport.height : window.innerHeight,
    }
  }

  function hexToRgba(color, alpha) {
    var normalized = color.replace('#', '')
    var red = parseInt(normalized.slice(0, 2), 16)
    var green = parseInt(normalized.slice(2, 4), 16)
    var blue = parseInt(normalized.slice(4, 6), 16)
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')'
  }

  function setFrameRect(left, top, width, height) {
    frame.style.left = Math.round(left) + 'px'
    frame.style.top = Math.round(top) + 'px'
    frame.style.right = 'auto'
    frame.style.bottom = 'auto'
    frame.style.width = Math.max(1, Math.round(width)) + 'px'
    frame.style.height = Math.max(1, Math.round(height)) + 'px'
  }

  function applyFrameChrome(mode) {
    if (!opened) {
      frame.style.borderRadius = '50%'
      frame.style.background = 'transparent'
      frame.style.boxShadow =
        '0 12px 30px ' + hexToRgba(themeColor, 0.32) + ',0 4px 12px rgba(15,23,42,.2)'
      return
    }
    if (mode === 'mobile') {
      frame.style.borderRadius = '0'
      frame.style.background = '#fff'
      frame.style.boxShadow = 'none'
      return
    }
    frame.style.borderRadius = '22px'
    frame.style.background = '#fff'
    frame.style.boxShadow =
      '0 0 0 1px rgba(15,23,42,.08),0 0 24px rgba(15,23,42,.12),0 12px 42px rgba(15,23,42,.2),0 28px 72px rgba(15,23,42,.12)'
  }

  function sendLayout(mode, bounds, width, height) {
    if (!frame.contentWindow) return
    frame.contentWindow.postMessage({
      source: 'infiai-widget-host',
      type: 'layout',
      mode: mode,
      availableWidth: Math.round(bounds.width),
      availableHeight: Math.round(bounds.height),
      frameWidth: Math.round(width),
      frameHeight: Math.round(height),
    }, scriptUrl.origin)
  }

  function applySize() {
    var bounds = viewportBounds()
    var mode = bounds.width <= MOBILE_BREAKPOINT ? 'mobile' : 'desktop'
    var width
    var height
    var left
    var top

    if (opened) {
      if (mode === 'mobile') {
        width = bounds.width
        height = bounds.height
        left = bounds.left
        top = bounds.top
      } else {
        width = Math.min(DESKTOP_MAX_WIDTH, Math.max(1, bounds.width - DESKTOP_GAP * 2))
        height = Math.min(DESKTOP_MAX_HEIGHT, Math.max(1, bounds.height - DESKTOP_GAP * 2))
        left = position === 'bottom-left'
          ? bounds.left + DESKTOP_GAP
          : bounds.left + bounds.width - DESKTOP_GAP - width
        top = bounds.top + bounds.height - DESKTOP_GAP - height
      }
      setFrameRect(left, top, width, height)
      applyFrameChrome(mode)
      sendLayout(mode, bounds, width, height)
      return
    }

    width = LAUNCHER_SIZE
    height = LAUNCHER_SIZE
    left = position === 'bottom-left'
      ? bounds.left + LAUNCHER_GAP
      : bounds.left + bounds.width - LAUNCHER_GAP - width
    top = bounds.top + bounds.height - LAUNCHER_GAP - height
    setFrameRect(left, top, width, height)
    applyFrameChrome(mode)
    sendLayout(mode, bounds, width, height)
  }

  function resize(event) {
    if (
      event.source !== frame.contentWindow ||
      event.origin !== scriptUrl.origin ||
      !event.data ||
      event.data.source !== 'infiai-widget'
    ) return
    position = event.data.position === 'bottom-left' ? 'bottom-left' : 'bottom-right'
    if (/^#[0-9a-f]{6}$/i.test(event.data.themeColor || '')) {
      themeColor = event.data.themeColor
    }
    if (event.data.label) {
      frame.title = event.data.label
      frame.setAttribute('aria-label', event.data.label)
    }
    if (event.data.type === 'open') {
      opened = true
      applySize()
    } else if (event.data.type === 'close') {
      opened = false
      applySize()
    }
  }

  window.addEventListener('message', resize)
  window.addEventListener('resize', applySize)
  window.addEventListener('orientationchange', applySize)
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', applySize)
    window.visualViewport.addEventListener('scroll', applySize)
  }
  frame.addEventListener('load', applySize)
  applySize()
})()
