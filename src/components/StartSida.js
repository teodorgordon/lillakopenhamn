import React from "react";
import { Typography, Button, Row, Col, Card, Image } from "antd";



const { Title, Paragraph } = Typography;

export default function StartSida({ onBokaClick }) {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Title
          style={{
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px"
          }}
        >
          Välkommen till Lilla Köpenhamn
        </Title>

        <Button
          className="boka-bord-knapp"
          onClick={onBokaClick}
        >
          Boka bord
        </Button>
      </div>

      {/* Inläggssektion */}
      <div style={{ padding: "48px 24px", maxWidth: 1200, margin: "0 auto" }}>
        {/* Inlägg 1 */}
        <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
          <Col xs={24} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/lillakopenhamn.jpg`}
              alt="Bordsdukning"
              width="100%"
              preview={false}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#cbc2b8", color: "black" }} bordered={false}>
              <Title level={3} style={{ color: "black" }}>En bit av Köpenhamn – mitt i stan</Title>
              <Paragraph style={{ color: "#black" }}>
                Lilla Köpenhamn är mer än en restaurang - det är ett hem för matglädje, vänner och upplevelser. Från rustika rätter till eleganta tilltugg, blandat med dejlig atmosfär och trivsam miljö, skapar vi upplevelser du minns och vill återkomma till. 
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Inlägg 2 */}
        <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#cbc2b8", color: "black" }} bordered={false}>
              <Title level={3} style={{ color: "black" }}>Färska ostron varje dag</Title>
              <Paragraph style={{ color: "#black" }}>
                Det är alltid tid för ostron. Vi serverar färska ostron direkt från västkusten - med citron, vinägrett och kärlek. Avnjut med ett glas bubbel för en smakupplevelse utöver det vanliga. 
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/ostronLK.jpg`}
              alt="Ostron"
              width="100%"
              preview={false}
            />
          </Col>
        </Row>

        {/* Inlägg 3 */}
        <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
          <Col xs={24} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/smorrebrod.jpg`}
              alt="Smörrebröd"
              width="100%"
              preview={false}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#cbc2b8", color: "black" }} bordered={false}>
              <Title level={3} style={{ color: "black" }}>Smørrebrød – En klassiker i ny tappning</Title>
              <Paragraph style={{ color: "#black" }}>
                Våra smørrebrød är en hyllning till det danska arvet - vackert upplagda, rikligt toppade och med moderna smaker. Blanda själv vilka du vill ha och hur många. En öl och en ”lille en” till det är perfekt som lunch, brunch, tilltugg eller som helst när suget infaller sig.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}
