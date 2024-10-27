// app/page.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import Productpage from '../components/Productpage';
import BasketPage from '../components/Basketpage';
import WhoWeAre from '../components/WhoWeAre';

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Image Section */}
      <ImageSection />

       {/* Product Section */}
       <Productpage />
      {/* Basket Section */}

       <BasketPage />

      {/* WhoWeAre Section */}
      <WhoWeAre />
      
      {/* Rest of the page */}
    </div>
  );
}
