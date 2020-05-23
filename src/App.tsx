import React from "react";
// import { ParentComponent } from "./Standard"; // バケツリレー
// import { ParentComponent } from "./CreateContext"; // createContext
import { ParentComponent } from "./CreateContext_hook"; // createContext + useContext

class App extends React.Component {
  render() {
    return <ParentComponent />;
  }
}

export default App;
