import React from "react";
import { Row, Col } from "react-bootstrap";
import s from "./Header.module.css";
const Header = () => {
  return (
    <Row>
      <Col>
        <div className={s.headerTitle}>My Todo List</div>
      </Col>
    </Row>
  );
};

export default Header;
