import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Dashboard from "../src/components/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return <Dashboard/>;
}

export default App;