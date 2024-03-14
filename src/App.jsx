import { Content, Hero , Productsales, Stories} from "./Components";
import { heroapi,toprateslaes ,popularsales , highlight,sneaker, story ,} from "./data/Data";
import React from "react";


function App() {
  return (
    <>
    <main className="flex flex-col gap-16 relative">

    <Hero   heroapi ={heroapi} />
    <Productsales endepoint={popularsales} iFexist />
    <Content endepoint={highlight} iFexist/>
    <Productsales endepoint={toprateslaes}/>
    <Content endepoint={sneaker}/>
    <Stories Stories={story} />
    </main>
    </>
  );
}

export default App;
