import { useEffect } from 'react'

function loadTradingViewScript() {
  return new Promise((resolve, reject) => {
    if (window.TradingView) return resolve(window.TradingView)
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => resolve(window.TradingView)
    script.onerror = reject
    document.body.appendChild(script)
  })
}

function Trading() {
  useEffect(() => {
    let mounted = true
    loadTradingViewScript()
      .then(() => {
        if (!mounted || !window.TradingView) return
        try {
          new window.TradingView.widget({
            autosize: true,
            symbol: 'AAPL',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'tradingview_aapl',
          })

          new window.TradingView.widget({
            autosize: true,
            symbol: 'GOOG',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'tradingview_goog',
          })
        } catch (e) {
          // ignore widget errors in dev
          console.warn('TradingView widget failed to initialize', e)
        }
      })
      .catch((err) => console.warn('Failed to load TradingView script', err))

    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="trading" className="py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Trading</h2>
      <p className="text-lg mb-8 text-center">I've been actively trading in the stock market for over 5 years, focusing on tech stocks and cryptocurrencies.</p>
      {/* Attached chart image */}
      <div className="max-w-4xl mx-auto mb-8">
        <img src="/trading-chart.png" alt="Trading performance chart" className="w-full rounded shadow" />
      </div>
      <h3 className="text-3xl mb-4 text-center">Real-time Stock Updates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4>AAPL</h4>
          <div className="tradingview-widget-container">
            <div id="tradingview_aapl" style={{ height: 400 }}></div>
          </div>
        </div>
        <div>
          <h4>GOOG</h4>
          <div className="tradingview-widget-container">
            <div id="tradingview_goog" style={{ height: 400 }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trading
