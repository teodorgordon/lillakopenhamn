import React from "react";
import { Typography, Layout, Card } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function Personuppgifter() {
  return (
    <Content style={{ background: "#141414", padding: "48px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
        <Title level={2} style={{ color: "white", marginBottom: "32px" }}>
          Personuppgifter
        </Title>

<div></div>
        <Card
          style={{
            backgroundColor: "#716559",
            color: "white",
            marginBottom: "24px",
            border: "none",
          }}
          bordered={false}
        >
          <Paragraph style={{ color: "white", marginBottom: 0 }}>
            Din integritet är viktig för oss på Lilla Köpenhamn. Vi vill att du ska känna dig trygg när du besöker vår webbplats. <br/><br/>
          </Paragraph>
          <Paragraph style={{ color: "white", marginBottom: 0 }}>
            Vi samlar inte in, lagrar eller behandlar några personuppgifter via vår webbplats. Det finns inga kontaktformulär, bokningssystem med databaskoppling eller cookies som används för att spara personlig information. <br/><br/>
          </Paragraph>
          <Paragraph style={{ color: "white", marginBottom: 0 }}>
            Du kan därför använda vår webbplats anonymt och utan att dina uppgifter lagras eller spåras. <br/><br/>
          </Paragraph>
          <Paragraph style={{ color: "white", marginBottom: 0 }}>
            Har du några frågor? Tveka inte att kontakta oss direkt på plats i restaurangen eller via våra sociala medier. <br/><br/>
          </Paragraph>
        </Card>

     
      </div>
    </Content>
  );
}
