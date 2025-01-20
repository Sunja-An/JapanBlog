import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogListView, MainPage, SingleBlogView } from "./views";
import { CustomLayout } from "./shared";
import { Introduce } from "./views/introduce/Introduce";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<CustomLayout isHamburger={true} />}>
          <Route index path="introduce" element={<Introduce />} />
          <Route path="blog" element={<BlogListView />}>
            <Route path=":id" element={<SingleBlogView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
