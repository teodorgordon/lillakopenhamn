import React from "react";
import { Card, Typography, Collapse } from "antd";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export default function HittaHit() {
    return (
        <div style={{ background: "#fff", minHeight: "100vh", padding: "48px 24px" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", color: "white" }}>

                <Title level={2} style={{ color: "black", marginBottom: 24 }}>Hitta hit</Title>

                <Card style={{ marginBottom: 24 }}>
                    <Collapse defaultActiveKey={["1"]}>
                        <Panel header="Adress & öppettider" key="1">
                            <Paragraph><strong>Adress:</strong> Vasagatan 9, 411 24 Göteborg</Paragraph>
                            <Paragraph><strong>Telefonnummer:</strong> 031-762 61 50</Paragraph>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.1108361612473!2d11.962336177226073!3d57.69758674054842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff36c27ffc5a7%3A0xc543e9af05c868b5!2sVasagatan%209%2C%20411%2024%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1750192634654!5m2!1ssv!2sse"
                        width="100%"
                        height="500"
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
