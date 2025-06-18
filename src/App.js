import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Drawer,
  Button as AntButton,
  Grid,
} from "antd";
import {
  FaScroll,
  FaCalendarAlt,
  FaMapMarked,
  FaInfoCircle,
  FaFacebookF,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import BokaBordModal from "./components/BokaBord";
import StartSida from "./components/StartSida";
import Meny from "./components/Meny";
import HittaHit from "./components/HittaHit";
import OmOss from "./components/OmOss";
import Personuppgifter from "./components/Personuppgifter";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

function LayoutWrapper({ isModalVisible, setIsModalVisible, page }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const screens = useBreakpoint();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSmallLogo, setShowSmallLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSmallLogo(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMenuKey = (path) => {
    if (path.startsWith("/Meny")) return "2";
    if (path.startsWith("/Hitta")) return "4";
    if (path.startsWith("/OmOss")) return "5";
    return "";
  };

  const MenuItems = (
  <Menu
    mode={screens.md ? "horizontal" : "vertical"}
    className="custom-menu"
    selectedKeys={[getMenuKey(currentPath)]}
    style={{
      backgroundColor: "#ffffff",
      borderBottom: "none",
    }}
  >
    <Menu.Item key="2" icon={<FaScroll />}>
      <Link to="/Meny" onClick={() => setIsDrawerOpen(false)}>Meny</Link>
    </Menu.Item>
    <Menu.Item
      key="3"
      icon={<FaCalendarAlt />}
      onClick={() => {
        setIsModalVisible(true);
        setIsDrawerOpen(false);
      }}
    >
      Boka bord
    </Menu.Item>
    <Menu.Item key="4" icon={<FaMapMarked />}>
      <Link to="/Hitta" onClick={() => setIsDrawerOpen(false)}>Hitta hit</Link>
    </Menu.Item>
    <Menu.Item key="5" icon={<FaInfoCircle />}>
      <Link to="/OmOss" onClick={() => setIsDrawerOpen(false)}>Om oss</Link>
    </Menu.Item>
  </Menu>
);


  return (
    <Layout>
      {/* Stor logga */}
      <div style={{ backgroundColor: "#FFFFFF", padding: "30px", textAlign: "center" }}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Lilla Köpenhamn" style={{ maxHeight: "100px" }} />
        </Link>
      </div>

      {/* Header med lilla loggan */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        {/* Lilla loggan */}
        <Link
          to="/"
          style={{
            marginRight: 25,
            display: "flex",
            alignItems: "center",
            height: "100%",
            opacity: showSmallLogo ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/logo3.png`} alt="Lilla Köpenhamn logotyp" style={{ height: "50px", objectFit: "contain" }} />
        </Link>

        {/* Meny */}
        {screens.md ? (
          <div style={{ flex: 1 }}>{MenuItems}</div>
        ) : (
          <>
            <AntButton
              icon={<FaBars />}
              type="text"
              style={{ marginLeft: "auto", color: "black" }}
              onClick={() => setIsDrawerOpen(true)}
            />
            <Drawer
              title="Meny"
              placement="right"
              onClose={() => setIsDrawerOpen(false)}
              open={isDrawerOpen}
              bodyStyle={{ padding: 0, background: "#fff" }}
              headerStyle={{ background: "#fff", color: "#fff" }}
            >
              {MenuItems}
            </Drawer>
          </>
        )}

        <BokaBordModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      </Header>

      <Content style={{ background: "#141414" }}>{page}</Content>

      {/* Footer */}
      <Footer style={{ background: "#1f1f1f", color: "#ccc", padding: "32px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a href="https://www.facebook.com/profile.php?id=61576269208161" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", fontSize: "20px" }}><FaFacebookF /></a>
              <a href="https://www.instagram.com/lillakopenhamn" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", fontSize: "22px" }}><FaInstagram /></a>
              <span style={{ color: "#ccc", marginLeft: 8 }}>Följ oss i sociala medier för erbjudanden och andra nyheter.</span>
            </div>
            <div style={{ textAlign: "right" }}>
              <Link to="/Personuppgifter" style={{ color: "#ccc" }}>Personuppgifter</Link>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: "#999" }}>
            © 2025 Lilla Köpenhamn · Org. nr: 556733-7851
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<StartSida onBokaClick={() => setIsModalVisible(true)} />} />}
        />
        <Route path="/Meny" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<Meny />} />} />
        <Route path="/Hitta" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<HittaHit />} />} />
        <Route path="/OmOss" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<OmOss />} />} />
        <Route path="/Personuppgifter" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<Personuppgifter />} />} />
      </Routes>
    </Router>
  );
}
