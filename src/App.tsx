import { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";
// import MakhanaList from "./components/MakhanaList";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import { ProductInfo } from "./components/ProductInfo";
import { ProductReview } from "./components/ProductReview";
import { ProductsCard } from "./components/ProductsCard";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";

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
      <Navbar />
      {/* <MakhanaList /> */}
      <ProductDetail />
      <ProductInfo />
      <ProductReview />
      <ProductsCard />
      <CategorySection />
      <Footer />
    </div>
  );
}

export default App;
