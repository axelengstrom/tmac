import { Component } from "../Types/common";

const List = ({ children }: Component) => {
  return <ul className="mb-6 last:mb-0">{children}</ul>;
};

export default List;
