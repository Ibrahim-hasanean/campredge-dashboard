import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import City from "./pages/City/City";
import DashboardPage from "./pages/Home";
import Orders from "./pages/Orders/Orders";
import Packages from "./pages/Packages/Packages";
import Products from "./pages/Products/Products";
import Shipments from "./pages/Shipments/Shipments";
import Specialists from "./pages/Specialists/Specialists";
import User from "./pages/Users/User";
import ProductTypes from "./pages/ProductTypes/ProductTypes";

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
        <ContentRoute path="/cities" component={City} />
        <ContentRoute path="/specialists" component={Specialists} />
        <ContentRoute path="/shipments" component={Shipments} />
        <ContentRoute path="/products" component={Products} />
        <ContentRoute path="/productstypes" component={ProductTypes} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
