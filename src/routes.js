import React from "react";
import { Switch, Route } from "react-router-dom";
import presentational from "./Components/Presentational/presentational";
import HOCDisplay from "./Components/HOC/HOCDisplay";
import DataFetcher from "./Components/RenderProps/DataFetcher";
import ShoeRender from "./Components/RenderProps/ShoeRender";

export default (
  <Switch>
    <Route exact path="/" component={presentational} />
    <Route path="/hoc" component={HOCDisplay} />
    <Route
      path="/render-props"
      render={() => {
        return (
          <DataFetcher
            url="/api/products"
            renderShoes={data => {
              return <ShoeRender shoes={data} />;
            }}
          />
        );
      }}
    />
  </Switch>
);
