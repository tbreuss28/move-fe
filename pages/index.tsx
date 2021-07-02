import Router from 'next/router'
import { useEffect } from 'react'

import SplashScreen from '../components/splash-screen'

function Home () {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/moves')
    }, 3000)
  }, [])

  return <SplashScreen />
}

export default Home
