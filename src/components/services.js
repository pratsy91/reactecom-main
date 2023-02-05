import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const Services = () => {
  return (
    <Container className="mt-5" fluid>
      <Row className="justify-content-center">
        <Col lg={3} xs={3} className="me-3">
          <Card className=" mb-5 " bg="light" style={{ height: "200px" }}>
            <div className="offset-2 text-wrap" style={{ marginTop: "70px" }}>
              <div className="offset-3 text-primary">
                <TbTruckDelivery />
              </div>
              <p className="mt-4 lh-1">super fast and free delivery</p>
            </div>
          </Card>
        </Col>
        <Col lg={3} xs={3} className="mt-1">
          <Row>
            <Card bg="light" style={{ height: "80px" }}>
              <div className="offset-3 mt-3">
                <div className="offset-3 text-primary">
                  <MdOutlineSecurity />
                </div>
                <p className="d-none  d-lg-block">non contact shipping</p>
              </div>
            </Card>
          </Row>
          <Row className="mt-4">
            <Card bg="light" style={{ height: "80px" }}>
              <div className="offset-3 mt-3">
                <div className="offset-3 text-primary">
                  <GiTakeMyMoney />
                </div>
                <p>money back gurantee</p>
              </div>
            </Card>
          </Row>
        </Col>
        <Col className="ms-3 " lg={3} xs={3}>
          <Card className=" mb-5 " bg="light" style={{ height: "200px" }}>
            <div className="offset-2" style={{ marginTop: "70px" }}>
              <div className="offset-3 text-primary">
                <RiSecurePaymentFill />
              </div>
              <p className="mt-4">super secure payment system</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
