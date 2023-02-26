import Navbar from "./Navbar";
import "./App.css";
import Contacts from "./Contacts";
import PageLoading from "./PageLoading";
import { useEffect, useState } from "react";
import Skills from "./Skills";

function App(){
  const [loaded, isLoaded] = useState();
  return <>
  {!isLoaded &&<PageLoading/>}
  {isLoaded && <Page isLoaded={isLoaded}/>}
  </>
}

function Page({isLoaded}){
  useEffect(() => {
    isLoaded(true);
  }, []);
  return <>
    <Navbar/>
    <Skills/>
    <Contacts/>
  </>
}

export default App;