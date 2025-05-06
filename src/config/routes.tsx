import { createBrowserRouter } from "react-router-dom";
import HomeView from "../domain/home/view/home_view";
import GalleryView from "../domain/gallery/view/gallery_view";
import BlogView from "../domain/blog/view/blog_view";
import AboutView from "../domain/about/view/about_view";
import ContactView from "../domain/contact/view/contact_view";
import Layout from "../layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeView /> },
      { path: "/gallery", element: <GalleryView /> },
      { path: "/blog", element: <BlogView /> },
      { path: "/about", element: <AboutView /> },
      { path: "/contact", element: <ContactView /> },
    ],
  },
]);

export default router;
