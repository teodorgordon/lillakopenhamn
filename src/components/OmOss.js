import React from "react";
import { Typography, Card, Row, Col, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function OmOss() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", color: "black" }}>
        <Title level={2} style={{ color: "black" }}>Om oss</Title>
        <Paragraph style={{ color: "#000", fontSize: "16px" }}>
          Lilla Köpenhamn är en danskinspirerad restaurang med hjärtat i Göteborg. En plats att trivas på, skapa gemenskap, äta och dricka gott med smaker från både det nordiska köket och kontinenten. 
        </Paragraph>
        <Paragraph style={{ color: "#000", fontSize: "16px" }}>
          Hos oss hittar du klassiska smørrebrød, ostron, varmrätter, desserter och goda drycker till det. Vi fokuserar på råvaror i säsong ocean atmosfär som bjuder in till både fest och vardag. 
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
            <Card style={{ backgroundColor: "#cbc2b8", color: "black" }} bordered={false}>
              <Title level={4} style={{ color: "black" }}>Vår filosofi</Title>
              <Paragraph style={{ color: "#000" }}>
                Maten ska vara ärlig, vacker och inspirerande. Vi tror på kvalitet före kvantitet, nära relationer till våra leverantörer och ett varmt välkomnande till varje gäst.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
