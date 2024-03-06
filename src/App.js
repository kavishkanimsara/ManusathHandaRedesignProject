import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Page from "./pages/Page";
import Hero from "./components/Hero";
import Category from "./components/Categories";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <>

          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/new" element={<Page></Page>}></Route>
            <Route path="/team" element={<TeamPage/>}></Route>
          </Routes>
    </>
  );
}

export default App;
