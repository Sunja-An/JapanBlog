import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./views";
import { CustomLayout } from "./shared";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/blog" element={<CustomLayout isHamburger={true} />}>
          {/* <Route element />
          <Route path="/:id" element /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
