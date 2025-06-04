import React from "react";
import { Typography, Button, Row, Col, Card, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function StartSida({ onBokaClick }) {
  return (
    <div style={{ background: "#141414" }}>
      {/* Banner */}
      <div
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
              src="https://media.istockphoto.com/id/2019308975/sv/foto/table-setting.jpg?s=612x612&w=0&k=20&c=A-HiUzCKuAkRhFKpWiYdmhM9OJ_BvixKj2SEG1WVGxo="
              alt="Bordsdukning"
              width="100%"
              preview={false}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={3} style={{ color: "white" }}>En bit av Köpenhamn – mitt i stan</Title>
              <Paragraph style={{ color: "#ccc" }}>
                Lilla Köpenhamn är mer än en restaurang – det är ett hem för dansk matglädje. Från rustika rätter till eleganta tilltugg, skapar vi upplevelser du minns.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Inlägg 2 */}
        <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={3} style={{ color: "white" }}>Färska ostron varje helg</Title>
              <Paragraph style={{ color: "#ccc" }}>
                Helgen närmar sig? Vi serverar färska ostron direkt från västkusten – med citron, vinägrett och kärlek. Avnjut med ett glas bubbel för en smakupplevelse utöver det vanliga.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Image
              src="https://receptfavoriter.se/sites/default/files/ostron_1060.jpg"
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
              src="https://media.istockphoto.com/id/1131977929/sv/foto/upps%C3%A4ttning-av-skandinaviska-mellanm%C3%A5l-mer-fr%C3%A5n-smorrebrod-traditionella-danska-%C3%B6ppna.jpg?s=612x612&w=0&k=20&c=WnOQlTOKpvutnOUIO0ggF-BWrnRLjPqa9yhrZ358YmI="
              alt="Smörrebröd"
              width="100%"
              preview={false}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={3} style={{ color: "white" }}>Smørrebrød – En klassiker i ny tappning</Title>
              <Paragraph style={{ color: "#ccc" }}>
                Våra smørrebrød är en hyllning till det danska arvet – vackert upplagda, rikligt toppade och med moderna smaker. Perfekt till lunch, brunch eller som del av en avsmakningsmeny.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}
