import React from "react";
import { Card, Typography, Collapse } from "antd";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export default function HittaHit() {
    return (
        <div style={{ background: "#141414", minHeight: "100vh", padding: "48px 24px" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", color: "white" }}>

                <Title level={2} style={{ color: "white", marginBottom: 24 }}>Hitta hit</Title>

                <Card style={{ marginBottom: 24 }}>
                    <Collapse defaultActiveKey={["1"]}>
                        <Panel header="Adress & öppettider" key="1">
                            <Paragraph><strong>Adress:</strong> Vasagatan 9, 411 24 Göteborg</Paragraph>
                            <Paragraph><strong>Telefonnummer:</strong> 031–123 456</Paragraph>
                            <Paragraph><strong>Öppettider:</strong></Paragraph>
                            <ul>
                                <li>Torsdag: 16:00 – sent</li>
                                <li>Fredag: 16:00 – sent</li>
                                <li>Lördag: 12:00 – sent</li>
                                <li>Söndag - Onsdag: Stängt</li>
                            </ul>
                        </Panel>
                    </Collapse>
                </Card>

                <Card>
                    <iframe
                        title="Karta till Lilla Köpenhamn"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.345341215108!2d11.968483915979983!3d57.707232581107846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDQyJzI2LjAiTiAxMcKwNTgnMDYuNiJF!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Card>

            </div>


        </div>
    );
}
