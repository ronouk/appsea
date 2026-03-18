import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Root from "../components/root/Root";
import AllApps from "../pages/all-apps/AllApps";
import AppDetails from "../pages/single-app/AppDetails";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import AppNotFound from "../pages/app-not-found/AppNotFound";
import Installation from "../pages/Installation/Installation";

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
                errorElement: <AppNotFound></AppNotFound>,
                loader:
                    async ({ params }) => {
                        const response = await fetch("/appsData.json");

                        if (!response.ok) {
                            throw new Error("Failed to fetch data");
                        }

                        const allApps = await response.json();
                        // Find the specific app by ID before it even reaches the component
                        const selectedApp = allApps.find(app => app.id === parseInt(params.id));

                        if (!selectedApp) {
                            throw new Error("App not found", { status: 404 })
                        }
                        return selectedApp
                    }
            },

            {
                path: "/installation",
                Component: Installation,
                loader:
                    async () => {
                        const response = await fetch("/appsData.json");

                        if (!response.ok) {
                            throw new Error("Failed to fetch data");
                        }

                        return await response.json();

                    }
            },

            // if page not found
            {
                path: "*",
                Component: PageNotFound
            }
        ]
    },
]);