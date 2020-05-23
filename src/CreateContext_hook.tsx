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
  // hookを使用
  const resourceName = React.useContext(ResourceContext);

  return <div style={{ color: "blue" }}>{resourceName}</div>;
};
