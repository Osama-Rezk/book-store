import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import { Button } from "../../components";
import "./book.css";
const BookInfoCard = ({
  book: {
    id,
    title,
    image,
    description,
    isbn,
    pagesNumber,
    publishYear,
    author
  } = {},
  navigate,
  showButton
}) => {
  return (
    <Col xs="12" md="12">
      <Card>
        <CardBody>
          <div className="img-info-container">
            <div>
              <div className="title-edit-container">
                <h6>title :{title}</h6>
                {showButton && (
                  <Button
                    text="Edit"
                    onClick={() => navigate(id, "editbook")}
                  />
                )}
              </div>
              <h6>By :{author}</h6>
              <h6>Pages .No :{pagesNumber}</h6>
              <h6>Publish Year :{publishYear}</h6>
              <h6>ISBN :{isbn}</h6>
              <h6>Classification :{"Classification"}</h6>
            </div>
            <CardImg
              src={image}
              alt="Card image cap"
              className="card-img"
              onClick={() => navigate(id)}
            />
          </div>
          <p>{description}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BookInfoCard;
