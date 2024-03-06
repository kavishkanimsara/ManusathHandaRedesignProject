import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Page from "./pages/Page";
// import Category from "./components/Categories";
import Category from "./pages/Category";
import { CategoryPath } from "./firebase";
import TeamPage from "./pages/TeamPage";

function App() {


  return (
    <>

          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path={"/"+CategoryPath+"/*"} element={<Category></Category>}></Route>
            <Route path="/new" element={<Page></Page>}></Route>
            <Route path="/team" element={<TeamPage/>}></Route>
          </Routes>
    </>
  );
}

export default App;
