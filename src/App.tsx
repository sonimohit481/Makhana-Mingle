import { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";

const GOOGLE_ANALYTICS_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
const ENV = import.meta.env.VITE_ENV;

if (ENV === "production" && GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
}

function logPageView() {
  if (ENV === "production") {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

function App() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <div>
      <Helmet>
        <title>MakhanaMingle - Buy Premium Makhana Online</title>
        <meta
          name="description"
          content="Shop the best quality Makhana at MakhanaMingle. Healthy, delicious, and delivered to your doorstep."
        />
        <meta property="og:title" content="MakhanaMingle" />
        <meta property="og:description" content="Buy Premium Makhana Online" />
        <meta property="og:image" content="/images/makhana.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1 className="text-4xl font-bold">Welcome to MakhanaMingle</h1>
      <p>Buy the best quality Makhana here!</p>
    </div>
  );
}

export default App;
