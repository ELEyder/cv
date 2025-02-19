import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../views/Home";
import Error from "../views/Error";
import Blog from "../views/Blog";
import BlogDetail from "../views/BlogDetail";

const Routing = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default Routing