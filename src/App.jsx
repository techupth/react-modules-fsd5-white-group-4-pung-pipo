import "./App.css";
import Header from "./Component/Header";
import MainContent from "./Component/MainContent";
import ProductSection from "./Component/ProductSection";
import Footer from "./Component/Footer";
import FAQ from "./Component/FAQ";
/* import Button from "./Component/Button"; */

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
