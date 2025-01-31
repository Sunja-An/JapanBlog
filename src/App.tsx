import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views

// Layout
import { CustomLayout } from "./shared/layout";
import {
  BlogListView,
  IntroduceView,
  MainPage,
  PortFolioView,
  SingleBlogView,
} from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="blog" element={<CustomLayout isHamburger={true} />}>
          <Route index element={<BlogListView />} />
          <Route path=":id" element={<SingleBlogView />} />
        </Route>
        <Route path="introduce" element={<CustomLayout isHamburger={true} />}>
          <Route index element={<IntroduceView />} />
        </Route>
        <Route path="portfolio" element={<CustomLayout isHamburger={true} />}>
          <Route index element={<PortFolioView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
