import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Trending from "../Components/Trending";
import Footer from "../Components/Footer";
function Home(props) {
  const homeStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };
  const homeContentStyle = {
    flex: 1,
  };
  return (
    <div style={homeStyle}>
      <Navbar />
      <div style={homeContentStyle}>
        <Hero />
        <Trending />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
