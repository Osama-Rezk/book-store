import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import { Button } from "../../components";

const Book = ({
  book: { id, title, image, description } = {},
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
              onClick={() => navigate(id, "bookdetails")}
            />
            <div className="card-content">
              <div className="title-edit-container">
                <h1>{title}</h1>

                {showButton && (
                  <Button
                    text="Edit"
                    onClick={() => navigate(id, "editbook")}
                  />
                )}
              </div>
              <p>{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Book;
