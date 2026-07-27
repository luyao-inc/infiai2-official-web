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
    'position:fixed;right:18px;bottom:18px;width:76px;height:76px;border:0;background:transparent;z-index:2147483000;color-scheme:light;'
  document.body.appendChild(frame)

  var position = 'bottom-right'
  var opened = false

  function applyPosition(isMobile) {
    frame.style.left = position === 'bottom-left' && !isMobile ? '18px' : 'auto'
    frame.style.right = position === 'bottom-left' && !isMobile ? 'auto' : isMobile ? '0' : '18px'
    frame.style.bottom = isMobile ? '0' : '18px'
  }

  function applySize() {
    var isMobile = window.matchMedia('(max-width: 640px)').matches
    if (opened) {
      frame.style.width = isMobile ? '100vw' : '410px'
      frame.style.height = isMobile ? '100dvh' : '680px'
      applyPosition(isMobile)
      return
    }
    frame.style.width = '76px'
    frame.style.height = '76px'
    applyPosition(false)
  }

  function resize(event) {
    if (event.source !== frame.contentWindow || !event.data || event.data.source !== 'infiai-widget') return
    position = event.data.position === 'bottom-left' ? 'bottom-left' : 'bottom-right'
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
})()
