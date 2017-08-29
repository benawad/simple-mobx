import React from "react";
import { observer } from "mobx-react";

export default observer(({ store }) =>
  <div>
    <h1>
      {store.count}
    </h1>
    <button onClick={store.increment}>increment</button>
  </div>
);
