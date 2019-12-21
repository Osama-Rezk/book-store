import React from "react";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import placholder from "../../assets/placeholder.png";
import { Button } from "../../components";

const AuthorCard = ({
  author: { id, name, image = placholder, bio, jobTitle } = {},
  navigate,
  showButton
}) => {
  return (
    <Col xs="12" md="12">
      <Card>
        <CardBody>
          <div className="card-item">
            <CardImg
              src={image}
              alt="Card image cap"
              className="card-img"
              onClick={() => navigate(id)}
            />
            <div className="card-content">
              <Row>
                <h1>{name}</h1>
                {showButton && (
                  <Button
                    text="Edit"
                    onClick={() => navigate(id, "editauthor")}
                  />
                )}
              </Row>
              <h5>{jobTitle}</h5>
              <p>{bio}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AuthorCard;
