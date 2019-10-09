import { generatePath } from "react-router";

export const baseRoute: String = "http://localhost:3000/api/registry";

type NavigationFunction = (id: string) => string;

interface BaseRoutes {
  registerCollection: string;
  registerEntry: string;
  registerExit: string;
}

interface AppBaseRoutes extends BaseRoutes {}

interface RoutesLinks extends BaseRoutes {}

type RouterSwitchRoutes = AppBaseRoutes;

const appBaseRoutes: AppBaseRoutes = {
  registerCollection: "/",
  registerEntry: "/register-entry",
  registerExit: "/register-exit"
};

export const routerSwitchRoutes: RouterSwitchRoutes = {
  ...appBaseRoutes
};

export const routesLinks: RoutesLinks = {
  ...appBaseRoutes
};
