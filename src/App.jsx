import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 second splash screen timer as defined in the original application
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return <Dashboard />;
}
