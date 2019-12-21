import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Loader from "../Loader";
const SideBarCard = ({ title, data = [], href, loading }) => {
  const renderList = () => (
    <ul>
      {data.map(({ name = "", id }, i) => (
        <li key={i}>
          <Link to={`/${href}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>{loading ? <Loader /> : renderList()}</CardBody>
    </Card>
  );
};

export default SideBarCard;
