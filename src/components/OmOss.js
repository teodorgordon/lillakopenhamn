import React from "react";
import { Typography, Card, Row, Col, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function OmOss() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "76px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", color: "black" }}>

        <Title level={2} style={{ color: "black", fontSize: "32px" }}>
          Om oss
        </Title>
        <Paragraph style={{ color: "#000", fontSize: "18px" }}>
          Hos Per-Jönson är en danskinspirerad restaurang med hjärtat i Göteborg. En plats att trivas på, skapa gemenskap, äta och dricka gott med smaker från både det nordiska köket och kontinenten.
        </Paragraph>
        <Paragraph style={{ color: "#000", fontSize: "18px" }}>
          Hos oss hittar du klassiska smørrebrød, ostron, varmrätter, desserter och goda drycker till det. Vi fokuserar på råvaror i säsong och en atmosfär som bjuder in till både fest och vardag.
        </Paragraph>
      </div>

      <div style={{ margin: "24px 0", padding: "48px 8px" }}>


        <Row gutter={0} style={{ marginBottom: "24px" }}>
          <Col xs={24} md={12} style={{ padding: 0 }}>
            <Image
              src={`${process.env.PUBLIC_URL}/torskrygg.jpg`}
              alt="Torskrygg"
              width="100%"
              height="100%"
              preview={false}
              style={{ display: "block", objectFit: "cover", height: "100%" }}
            />
          </Col>
          <Col xs={24} md={12} style={{ padding: 0, display: "flex" }}>
            <Card
              style={{
                backgroundColor: "#cbc2b8",
                color: "black",
                margin: 0,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                borderRadius: 0,
                padding: "40px",
              }}
              bordered={false}
            >
              <div style={{ maxWidth: "650px", textAlign: "center" }}>
                <Title level={2} style={{ color: "black", fontSize: "32px" }}>
                  Vår filosofi
                </Title>
                <Paragraph style={{ color: "black", fontSize: "18px" }}>
                  Maten ska vara ärlig, vacker och inspirerande.
                  Vi tror på kvalitet före kvantitet, nära relationer
                  till våra leverantörer och ett varmt välkomnande
                  till varje gäst. Här ska du känna dig som hemma,
                  en plats du vill återkomma till och där du bemöts med värme.
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
