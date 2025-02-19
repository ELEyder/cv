import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import { Home, Blog, BlogDetail, Error } from "../views";
import { Loading } from "../components";

const Routing = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Routing;
