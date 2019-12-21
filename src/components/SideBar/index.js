import React from "react";

import SideBarCard from "./SideBarCard";

const SideBar = ({ items = [] }) => {
  const renderItem = () =>
    items.map((item, i) => <SideBarCard key={i} {...item} />);
  return <div>{renderItem()}</div>;
};

export default SideBar;
