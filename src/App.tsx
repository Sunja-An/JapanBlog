import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views

// Layout
import { CustomLayout } from "./shared/layout";
import { BlogListView, IntroduceView, MainPage, PortFolioView } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<CustomLayout isHamburger={true} />}>
          <Route path="blog" element={<BlogListView />}></Route>
          <Route path="introduce" element={<IntroduceView />} />
          <Route path="portfolio" element={<PortFolioView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
