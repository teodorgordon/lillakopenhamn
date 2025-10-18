import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, Row, Col, Card, Image } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function StartSida({ onBokaClick }) {
 const images = ["Banner2.jpeg", "Banner1.jpg", "Banner3.jpeg"];

  const [showFirst, setShowFirst] = useState(true);
  const [firstSrc, setFirstSrc] = useState(`${process.env.PUBLIC_URL}/${images[0]}`);
  const [secondSrc, setSecondSrc] = useState(`${process.env.PUBLIC_URL}/${images[1]}`);
  const index = useRef(1); // next index


 useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % images.length;

      if (showFirst) {
        setSecondSrc(`${process.env.PUBLIC_URL}/${images[index.current]}`);
      } else {
        setFirstSrc(`${process.env.PUBLIC_URL}/${images[index.current]}`);
      }

      setShowFirst((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [showFirst]);


  return (
    <div style={{ background: "#ffffff" }}>
      {/* Banner */}
<div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Lager 1 */}
      <img
        src={firstSrc}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 2s ease-in-out",
          opacity: showFirst ? 1 : 0,
        }}
      />

      {/* Lager 2 */}
      <img
        src={secondSrc}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 2s ease-in-out",
          opacity: showFirst ? 0 : 1,
        }}
      />

      {/* Fadead ram */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle, transparent 60%, black 100%)",
          zIndex: 2,
        }}
      ></div>

      {/* Logotyp */}
      <img
        src={`${process.env.PUBLIC_URL}/logowhite.png`}
        alt="Hos Per-Jönson"
        style={{
          maxWidth: "80%",
          maxHeight: "200px",
          marginBottom: "40px",
          zIndex: 3,
        }}
      />

      {/* Knappar */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <Button
          as="a"
          href="https://app.bokabord.se/reservation/?hash=376d46c6f948c6345441bd2b6368a8ec"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            border: "2px solid #cbc2b8",
            color: "#fff",
            fontSize: "18px",
            padding: "20px 40px",
            fontWeight: "500",
            borderRadius: "0",
          }}
        >
          Boka bord
        </Button>

        <Button
          style={{
            background: "transparent",
            border: "2px solid #cbc2b8",
            color: "#fff",
            fontSize: "18px",
            padding: "20px 40px",
            fontWeight: "500",
            borderRadius: "0",
          }}
          onClick={onBokaClick}
        >
          Meny
        </Button>




        {/* <Link to="/Meny">
          <Button
            style={{
              background: "transparent",
              border: "2px solid #cbc2b8",
              color: "#fff",
              fontSize: "18px",
              padding: "20px 40px",
              fontWeight: "500",
              borderRadius: "0",
            }}
          >
            Meny
          </Button>
        </Link> */}
      </div>
    </div>



      {/* Posts */}
      <div style={{ margin: "24px 0" }}>
  <Row gutter={0} style={{ marginBottom: "24px" }}>
    <Col xs={24} md={12} style={{ padding: 0 }}>
      <Image
        src={`${process.env.PUBLIC_URL}/servering.png`}
        alt="Bordsdukning"
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
            En bit av Köpenhamn – mitt i stan
          </Title>
          <Paragraph style={{ color: "black", fontSize: "18px" }}>
            Hos Per-Jönson är mer än en restaurang, det är ett hem för
            matglädje, vänner och upplevelser. Från rustika rätter till
            eleganta tilltugg, blandat med dejlig atmosfär och trivsam
            miljö, skapar vi upplevelser du minns och vill återkomma till.
          </Paragraph>
        </div>
      </Card>
    </Col>
  </Row>

  <Row gutter={0} style={{ marginBottom: "24px" }}>
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
            Färska ostron varje dag
          </Title>
          <Paragraph style={{ color: "black", fontSize: "18px" }}>
            Det är alltid tid för ostron. Vi serverar färska ostron direkt
            från västkusten, med citron, vinägrett och kärlek. Avnjut med
            ett glas bubbel för en smakupplevelse utöver det vanliga.
          </Paragraph>
        </div>
      </Card>
    </Col>
    <Col xs={24} md={12} style={{ padding: 0 }}>
      <Image
        src={`${process.env.PUBLIC_URL}/ostronLK.jpg`}
        alt="Ostron"
        width="100%"
        height="100%"
        preview={false}
        style={{ display: "block", objectFit: "cover", height: "100%" }}
      />
    </Col>
  </Row>

  <Row gutter={0} style={{ marginBottom: "24px" }}>
    <Col xs={24} md={12} style={{ padding: 0 }}>
      <Image
        src={`${process.env.PUBLIC_URL}/smorrebrod.jpg`}
        alt="Smörrebröd"
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
            Smørrebrød – En klassiker i ny tappning
          </Title>
          <Paragraph style={{ color: "black", fontSize: "18px" }}>
            Våra smørrebrød är en hyllning till det danska arvet, vackert
            upplagda, rikligt toppade och med moderna smaker. Blanda själv
            vilka du vill ha och hur många. En öl och en ”lille en” till
            det är perfekt som lunch, brunch, tilltugg eller som helst när
            suget infaller sig.
          </Paragraph>
        </div>
      </Card>
    </Col>
  </Row>

<Row gutter={0} style={{ marginBottom: "24px" }}>
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
            Skön uteservering för alla stunder
          </Title>
          <Paragraph style={{ color: "black", fontSize: "18px" }}>
            Vasagatans bästa uteservering med bar, sköna platser och 
            eftermiddagssol. Kom förbi och slå dig ner. Lyssna på musik 
            och stadens puls. Beställ det du vill ha, njut och koppla av. 
          </Paragraph>
        </div>
      </Card>
    </Col>
    <Col xs={24} md={12} style={{ padding: 0 }}>
      <Image
        src={`${process.env.PUBLIC_URL}/uteservering.jpeg`}
        alt="Uteservering"
        width="100%"
        height="100%"
        preview={false}
        style={{ display: "block", objectFit: "cover", height: "100%" }}
      />
    </Col>
  </Row>


</div>

    </div>
  );
}
