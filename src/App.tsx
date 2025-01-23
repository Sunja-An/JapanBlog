import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./views/main/MainPage";

import { CustomLayout } from "./shared/layout";
import BlogListView from "./views/blog/BlogListView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<CustomLayout isHamburger={true} />}>
          <Route path="blog" element={<BlogListView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
