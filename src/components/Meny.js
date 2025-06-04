import React from "react";
import { Typography, Card, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export default function Meny() {
  return (
    <div style={{ background: "#141414", minHeight: "100vh", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", color: "white" }}>
        <Title level={2} style={{ color: "white", marginBottom: 24 }}>Vår meny</Title>

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={4} style={{ color: "white" }}>Smørrebrød</Title>
              <Paragraph style={{color: "white"}}>
                - Räk- och äggsmörrebröd<br />
                - Rostbiff med remoulad<br />
                - Lax & färskost
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} sm={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={4} style={{ color: "white" }}>Små rätter & snacks</Title>
              <Paragraph style={{color: "white"}}>
                - Friterad torsk<br />
                - Ostbricka<br />
                - Ostron med citron & vinägrett
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} sm={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={4} style={{ color: "white" }}>Dryck</Title>
              <Paragraph style={{color: "white"}}>
                - Cava & mousserande vin<br />
                - Danska ölsorter<br />
                - Alkoholfritt
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
