import React from "react";

const ResourceContext = React.createContext("");

export const ParentComponent = () => {
  const resource = { name: "yamada" };

  return (
    <>
      <div style={{ color: "red" }}>{resource.name}</div>
      <ResourceContext.Provider value={resource.name}>
        <ChildComponent />
      </ResourceContext.Provider>
    </>
  );
};

export const ChildComponent = () => {
  return (
    <ResourceContext.Consumer>
      {(resourceName) => <div style={{ color: "blue" }}>{resourceName}</div>}
    </ResourceContext.Consumer>
  );
};
