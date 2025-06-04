import React from "react";
import { Typography, Card, Row, Col, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function OmOss() {
  return (
    <div style={{ background: "#141414", minHeight: "100vh", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", color: "white" }}>
        <Title level={2} style={{ color: "white" }}>Om oss</Title>
        <Paragraph style={{ color: "#ccc", fontSize: "16px" }}>
          Lilla Köpenhamn är en dansk-inspirerad restaurang med hjärtat i Göteborg. Vi grundades av en familj med passion för smaker från både det nordiska köket och kontinenten.
        </Paragraph>
        <Paragraph style={{ color: "#ccc", fontSize: "16px" }}>
          Hos oss hittar du klassiska smørrebrød, ostron, bubbel och andra små men stora upplevelser. Vi fokuserar på råvaror i säsong och en atmosfär som bjuder in till både fest och vardag.
        </Paragraph>

        <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
          <Col xs={24} md={12}>
            <Image
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Restaurangmiljö"
              width="100%"
              preview={false}
              style={{ borderRadius: "8px" }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#716559", color: "white" }} bordered={false}>
              <Title level={4} style={{ color: "white" }}>Vår filosofi</Title>
              <Paragraph style={{ color: "#ddd" }}>
                Maten ska vara ärlig, vacker och inspirerande. Vi tror på kvalitet före kvantitet, nära relationer till våra leverantörer och ett varmt välkomnande till varje gäst.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
