import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Page from "./pages/Page";
import Hero from "./components/Hero";
import Category from "./components/Categories";


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/new/*" element={<Page></Page>}></Route>
      </Routes>
    </>
  );
}

export default App;
