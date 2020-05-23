import React from "react";

export const ParentComponent = () => {
  const resource = { name: "yamada" };

  return (
    <>
      <div style={{ color: "red" }}>{resource.name}</div>
      <ChildComponent resourceName={resource.name} />
    </>
  );
};

export const ChildComponent = (props: any) => {
  return <div style={{ color: "blue" }}>{props.resourceName}</div>;
};
