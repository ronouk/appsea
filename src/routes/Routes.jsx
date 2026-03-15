import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Root from "../components/root/Root";
import AllApps from "../pages/all-apps/AllApps";
import ErrorPage from "../pages/error-page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/allapps",
            Component: AllApps
        },
        {
            path: "*",
            Component: ErrorPage
        }
    ]
  },
]);