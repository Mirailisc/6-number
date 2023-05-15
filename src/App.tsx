import { ConfigProvider, theme } from 'antd'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { Gradient } from './utils/Gradient'

function App() {
  const gradient: any = new Gradient()

  useEffect(() => {
    gradient.initGradient('#gradient-canvas')
  }, [gradient])

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#e84749',
          colorLink: '#e84749',
          colorLinkHover: '#92292b',
        },
      }}
    >
      <canvas id="gradient-canvas" data-transition-in></canvas>
      <div className="App">
        <Main />
        <Footer />
      </div>
    </ConfigProvider>
  )
}

export default App
