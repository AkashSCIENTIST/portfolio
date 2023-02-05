import Navbar from "./Navbar";
import "./App.css";
import Contacts from "./Contacts";
import PageLoading from "./PageLoading";
import { useEffect, useState } from "react";

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
    <Contacts/>
  </>
}

export default App;