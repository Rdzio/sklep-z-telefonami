import React, { Component, lazy, Suspense } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const Slide = lazy(() => import("./components/Slide/Slide"));
const RecommendedList = lazy(() =>
  import("./components/Product/RecommendedList")
);
const BrandList = lazy(() => import("./components/Brand/BrandList"));
const Advertisement = lazy(() => import("./components/Advertisement"));
const CustomerList = lazy(() => import("./components/Customer/CustomerList"));

// const RecommendedList = lazy(() =>
//   import("./components/Product/RecommendedList")
// );

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <Slide />
          </Suspense>
        </div>
        <div className="glowna">
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <RecommendedList />
            <BrandList />
            <Advertisement />
            <CustomerList />
          </Suspense>
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
