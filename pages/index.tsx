import Router from 'next/router'
import { useEffect } from 'react'

import SplashScreen from '../components/splash-screen'

export default function Home () {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/moves')
    }, 3000)
  }, [])

  return <SplashScreen />
}
