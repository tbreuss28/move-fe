import Router from "next/router";
import { useEffect } from "react";

import SplashScreen from "../components/splash-screen/SplashScreen";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/login");
    }, 3000);
  }, []);

  return <SplashScreen />;
};

export default Home;
