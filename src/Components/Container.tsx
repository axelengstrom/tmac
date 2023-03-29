import { Component } from "../Types/common";

const Container = ({ children }: Component) => {
  return <div className="container mx-auto px-4 py-8">{children}</div>;
};

export default Container;
