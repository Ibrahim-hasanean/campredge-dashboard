import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import DashboardPage from "./pages/Home";
import Orders from "./pages/Orders/Orders";
import Packages from "./pages/Packages/Packages";
import User from "./pages/Users/User";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/orders" component={Orders} />
        <ContentRoute path="/users" component={User} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/packages" component={Packages} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
