import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./views/Home";
import Error from "./views/Error";
import Blog from "./views/Blog";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Routing