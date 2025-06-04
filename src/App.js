import React, { useState } from "react";
import {
  Layout,
  Menu,
  Drawer,
  Button as AntButton,
} from "antd";
import {
  FaScroll,
  FaCalendarAlt,
  FaMapMarked,
  FaInfoCircle,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MenuOutlined } from "@ant-design/icons";
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

function LayoutWrapper({ isModalVisible, setIsModalVisible, page }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getMenuKey = (path) => {
    if (path.startsWith("/Meny")) return "2";
    if (path.startsWith("/Hitta")) return "4";
    if (path.startsWith("/OmOss")) return "5";
    return "";
  };

  return (
    <Layout>
      <div style={{ backgroundColor: "#1f1f1f", padding: "5px 0", textAlign: "center" }}>
        <Link to="/">
          <img src="logo2.png" alt="Lilla Köpenhamn" style={{ maxHeight: "100px" }} />
        </Link>
      </div>

      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          backgroundColor: "#1f1f1f",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <img src="logo3.png" alt="Lilla Köpenhamn logotyp" style={{ height: "50px", objectFit: "contain" }} />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ flex: 1, marginLeft: 24 }}>
            <Menu
              className="custom-menu"
              theme="dark"
              mode="horizontal"
              selectedKeys={[getMenuKey(currentPath)]}
              style={{ backgroundColor: "#1f1f1f", borderBottom: "none" }}
            >
              <Menu.Item key="2" icon={<FaScroll />}><Link to="/Meny">Meny</Link></Menu.Item>
              <Menu.Item key="3" icon={<FaCalendarAlt />} onClick={() => setIsModalVisible(true)}>Boka bord</Menu.Item>
              <Menu.Item key="4" icon={<FaMapMarked />}><Link to="/Hitta">Hitta hit</Link></Menu.Item>
              <Menu.Item key="5" icon={<FaInfoCircle />}><Link to="/OmOss">Om oss</Link></Menu.Item>
            </Menu>
          </div>

          {/* Mobile Button */}
          <AntButton
            className="mobile-menu-button"
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24, color: "#fff" }} />}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
  title="Meny"
  placement="right"
  onClose={() => setMobileMenuOpen(false)}
  open={mobileMenuOpen}
  bodyStyle={{ backgroundColor: "#1f1f1f", padding: 0 }} // set drawer background
  headerStyle={{ backgroundColor: "#1f1f1f", color: "#fff" }} // header background
>
  <Menu
    theme="dark"
    mode="vertical"
    selectedKeys={[getMenuKey(currentPath)]}
    style={{ backgroundColor: "#1f1f1f", color: "#fff" }} // this line fixes the blue
  >
    <Menu.Item key="2" icon={<FaScroll />}>
      <Link to="/Meny" onClick={() => setMobileMenuOpen(false)}>Meny</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<FaCalendarAlt />} onClick={() => { setIsModalVisible(true); setMobileMenuOpen(false); }}>
      Boka bord
    </Menu.Item>
    <Menu.Item key="4" icon={<FaMapMarked />}>
      <Link to="/Hitta" onClick={() => setMobileMenuOpen(false)}>Hitta hit</Link>
    </Menu.Item>
    <Menu.Item key="5" icon={<FaInfoCircle />}>
      <Link to="/OmOss" onClick={() => setMobileMenuOpen(false)}>Om oss</Link>
    </Menu.Item>
  </Menu>
</Drawer>

        <BokaBordModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      </Header>

      <Content style={{ background: "#141414" }}>{page}</Content>

      <Footer style={{ background: "#1f1f1f", color: "#ccc", padding: "32px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a href="https://www.facebook.com/lillakopenhamn" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", fontSize: "20px" }}><FaFacebookF /></a>
              <a href="https://www.instagram.com/lillakopenhamn" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", fontSize: "22px" }}><FaInstagram /></a>
              <span style={{ color: "#ccc", marginLeft: 8 }}>Följ oss i sociala medier för erbjudanden och andra nyheter.</span>
            </div>
            <div style={{ textAlign: "right" }}>
              <Link to="/Personuppgifter" style={{ color: "#ccc" }}>Personuppgifter</Link>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: "#999" }}>
            © 2025 Lilla Köpenhamn · Org. nr: 556789-1234
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<StartSida onBokaClick={() => setIsModalVisible(true)} />} />} />
        <Route path="/Meny" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<Meny />} />} />
        <Route path="/Hitta" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<HittaHit />} />} />
        <Route path="/OmOss" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<OmOss />} />} />
        <Route path="/Personuppgifter" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<Personuppgifter />} />} />
      </Routes>
    </Router>
  );
}
