import React, { useState,useEffect} from "react";
import './assets/app.css';
import Cover from './Componentes/cover/Cover';
import Navbar from './Componentes/navbar/Navbar';
import About from './Componentes/about/About';
import Slider from './Componentes/slider/Slider';
import Info from "./Componentes/info/Info";
import Footer from "./Componentes/footer/Footer";
//Importar componentes


function App() {
  const [scrollHeight, setScrollHeight] = useState(0); //Guardamos la posicion del scroll

  const handleScroll = () => { //Esta funcion controla la posicion del scroll
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => { //Cuando hacemos Scroll se actualizara.
    window.addEventListener("scroll",handleScroll); 
  }, [scrollHeight])

  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight}/>
     <Cover />
     <About/>
     <Slider/>
     <Info/>
     <Footer/>
     
    </div>
  );
}

export default App;