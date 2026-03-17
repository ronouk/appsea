import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Root from "../components/root/Root";
import AllApps from "../pages/all-apps/AllApps";
import ErrorPage from "../pages/error-page/ErrorPage";
import AppDetails from "../pages/single-app/AppDetails";

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
                path: "/appdetails/:id",
                Component: AppDetails,
                loader:
                    async ({ params }) => {
                        const response = await fetch("/appsData.json");
                        const allApps = await response.json();
                        // Find the specific app by ID before it even reaches the component
                        return allApps.find(app => app.id === parseInt(params.id));
                    }
            },
            {
                path: "*",
                Component: ErrorPage
            }
        ]
    },
]);