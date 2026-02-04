import React, { useEffect, useRef, useState } from "react";
import { Typography, Row, Col, Card, Image } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function StartSida({ onBokaClick }) {
  const images = ["Banner2.jpeg", "Banner1.jpg", "Banner3.jpeg"];

  const [showFirst, setShowFirst] = useState(true);
  const [firstSrc, setFirstSrc] = useState(`${process.env.PUBLIC_URL}/${images[0]}`);
  const [secondSrc, setSecondSrc] = useState(`${process.env.PUBLIC_URL}/${images[1]}`);
  const index = useRef(1);

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

  const modernButtonStyle = {
    primary: {
      background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
      border: "none",
      color: "#fff",
      fontSize: "16px",
      padding: "13px 32px",
      fontWeight: "600",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      letterSpacing: "0.5px",
    },
    secondary: {
      background: "transparent",
      border: "2px solid #fff",
      color: "#fff",
      fontSize: "16px",
      padding: "12px 30px",
      fontWeight: "600",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      boxShadow: "0 2px 10px rgba(255, 255, 255, 0.1)",
      letterSpacing: "0.5px",
    },
    special: {
      background: "linear-gradient(135deg, #d81b60 0%, #e91e63 100%)",
      border: "none",
      color: "#fff",
      fontSize: "15px",
      padding: "12px 28px",
      fontWeight: "600",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      boxShadow: "0 6px 20px rgba(233, 30, 99, 0.3)",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    },
  };

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Hero Banner */}
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
        {/* Background Images */}
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

        {/* Overlay Gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)",
            zIndex: 2,
          }}
        />

        {/* Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/logowhite.png`}
          alt="Hos Per-Jönson"
          style={{
            maxWidth: "85%",
            maxHeight: "180px",
            marginBottom: "50px",
            zIndex: 3,
          }}
        />

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
            zIndex: 3,
            maxWidth: "100%",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <a
              href="https://app.bokabord.se/reservation/?hash=376d46c6f948c6345441bd2b6368a8ec"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...modernButtonStyle.secondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#2c3e50";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(255, 255, 255, 0.1)";
              }}
            >
              Boka bord
            </a>

            <button
              style={{
                ...modernButtonStyle.primary,
              }}
              onClick={onBokaClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              Meny
            </button>
          </div>

          <Link to="/AllaHjartansDag" style={{ width: "auto" }}>
            <button
              style={{
                ...modernButtonStyle.special,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(233, 30, 99, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(233, 30, 99, 0.3)";
              }}
            >
              ♥ Erbjudande
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: "80px 24px", background: "#fafafa" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            { icon: "🍽️", title: "Klassisk & Modern", desc: "Från rustika rätter till eleganta tilltugg" },
            { icon: "🌟", title: "Atmosfär", desc: "Gemytlig miljö för alla tillfällen" },
            { icon: "🎭", title: "Dansk Inspiration", desc: "Autentiska smaker från Köpenhamn" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
                padding: "24px",
                borderRadius: "12px",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>{item.icon}</div>
              <Title level={4} style={{ margin: "12px 0", color: "#2c3e50" }}>
                {item.title}
              </Title>
              <Paragraph style={{ color: "#666", fontSize: "14px", margin: 0 }}>
                {item.desc}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div style={{ padding: "60px 0" }}>
        <ContentSection
          image="servering.png"
          title="En bit av Köpenhamn – mitt i stan"
          text="Hos Per-Jönson är mer än en restaurang, det är ett hem för matglädje, vänner och upplevelser. Från rustika rätter till eleganta tilltugg, blandat med dejlig atmosfär och trivsam miljö, skapar vi upplevelser du minns och vill återkomma till."
          reverse={false}
        />

        <ContentSection
          image="ostronLK.jpg"
          title="Färska ostron varje dag"
          text="Det är alltid tid för ostron. Vi serverar färska ostron direkt från västkusten, med citron, vinägrett och kärlek. Avnjut med ett glas bubbel för en smakupplevelse utöver det vanliga."
          reverse={true}
        />

        <ContentSection
          image="smorrebrod.jpg"
          title="Smørrebrød – En klassiker i ny tappning"
          text="Våra smørrebrød är en hyllning till det danska arvet, vackert upplagda, rikligt toppade och med moderna smaker. Blanda själv vilka du vill ha och hur många. En öl och en 'lille en' till det är perfekt som lunch, brunch, tilltugg eller som helst när suget infaller sig."
          reverse={false}
        />

        <ContentSection
          image="uteservering.jpeg"
          title="Skön uteservering för alla stunder"
          text="Vasagatans bästa uteservering med bar, sköna platser och eftermiddagssol. Kom förbi och slå dig ner. Lyssna på musik och stadens puls. Beställ det du vill ha, njut och koppla av."
          reverse={true}
        />
      </div>
    </div>
  );
}

function ContentSection({ image, title, text, reverse }) {
  return (
    <div style={{ margin: "0 0 40px 0" }}>
      <Row gutter={0} style={{ minHeight: "500px" }}>
        {reverse ? (
          <>
            <Col xs={24} md={12} style={{ padding: 0, overflow: "hidden" }}>
              <Image
                src={`${process.env.PUBLIC_URL}/${image}`}
                alt={title}
                width="100%"
                preview={false}
                style={{
                  display: "block",
                  objectFit: "cover",
                  height: "100%",
                  transition: "transform 0.6s ease",
                }}
              />
            </Col>
            <Col xs={24} md={12} style={{ padding: 0, display: "flex" }}>
              <TextCard title={title} text={text} />
            </Col>
          </>
        ) : (
          <>
            <Col xs={24} md={12} style={{ padding: 0, display: "flex" }}>
              <TextCard title={title} text={text} />
            </Col>
            <Col xs={24} md={12} style={{ padding: 0, overflow: "hidden" }}>
              <Image
                src={`${process.env.PUBLIC_URL}/${image}`}
                alt={title}
                width="100%"
                preview={false}
                style={{
                  display: "block",
                  objectFit: "cover",
                  height: "100%",
                  transition: "transform 0.6s ease",
                }}
              />
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}

function TextCard({ title, text }) {
  return (
    <Card
      style={{
        backgroundColor: "#f9f7f4",
        color: "black",
        margin: 0,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        borderRadius: 0,
        padding: "60px 40px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
      bordered={false}
    >
      <div style={{ maxWidth: "600px", textAlign: "center" }}>
        <Title
          level={2}
          style={{
            color: "#2c3e50",
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          {title}
        </Title>
        <Paragraph
          style={{
            color: "#555",
            fontSize: "17px",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          {text}
        </Paragraph>
      </div>
    </Card>
  );
}