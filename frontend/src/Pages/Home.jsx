import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Jayadeva Hospital"
        }
        imageUrl={"/jayadevaLogo.png"}
      />
      {/* <Biography imageUrl={"/about.png"} /> */}
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
