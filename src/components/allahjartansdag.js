import React from "react";
import { Typography, Card, Row, Col, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function AllaHjartansDag() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "76px 24px" }}>
      {/* Rubrik */}
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", marginBottom: "40px" }}>
        <Title level={1} style={{ color: "#d81b3aff", fontSize: "48px", fontWeight: "700" }}>
          ❤️ Alla hjärtans dag ❤️
        </Title>
        <Paragraph style={{ color: "#666", fontSize: "18px", fontStyle: "italic" }}>
          Fira kärleken tillsammans med oss på Hos Per-Jönson
        </Paragraph>
      </div>

      {/* Bild och beskrivning */}
      <div style={{ margin: "24px 0" }}>
        <Row gutter={0} style={{ marginBottom: "24px" }}>
          <Col xs={24} md={12} style={{ padding: 0 }}>
            <Image
              src={`${process.env.PUBLIC_URL}/allahjartansdag.jpg`}
              alt="Alla hjärtans dag erbjudande"
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
                color: "white",
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
                  En dag för kärleken
                </Title>
                <Paragraph style={{ color: "black", fontSize: "18px", lineHeight: "1.6" }}>
                  Gör Alla hjärtans dag oförglömlig tillsammans med din älskade! 
                  Vi har skapat ett speciellt erbjudande för dem som vill 
                  fira kärleken tillsammans på vår restaurang.
                </Paragraph>
                <Paragraph style={{ color: "black", fontSize: "16px", marginTop: "20px", marginBottom: "20px" }}>
                  Boka ert bord idag och gör Alla hjärtans dag till något verkligt speciellt!
                </Paragraph>
                <a
                  href="https://app.bokabord.se/reservation/?hash=376d46c6f948c6345441bd2b6368a8ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#d81b3aff",
                    color: "white",
                    padding: "11px 28px",
                    fontSize: "15px",
                    fontWeight: "500",
                    textDecoration: "none",
                    borderRadius: "2px",
                    marginTop: "20px",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.25)";
                    e.currentTarget.style.background = "#c2185b";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.2)";
                    e.currentTarget.style.background = "#d81b60";
                  }}
                >
                  Boka bord
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
