import React, { useEffect, useState } from "react";
import { Layout, Menu, Drawer, Button as AntButton, Grid } from "antd";
import { FaFacebookF, FaInstagram, FaBars } from "react-icons/fa";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
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
    >
      <Menu.Item key="2">
        <Link to="/Meny" onClick={() => setIsDrawerOpen(false)}>Meny</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => {
          setIsModalVisible(true);
          setIsDrawerOpen(false);
        }}
      >
        Boka bord
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/Hitta" onClick={() => setIsDrawerOpen(false)}>Hitta hit</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/OmOss" onClick={() => setIsDrawerOpen(false)}>Om oss</Link>
      </Menu.Item>
    </Menu>
  );

  const SocialIcons = (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "20px" }}><FaFacebookF /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "22px" }}><FaInstagram /></a>
    </div>
  );

  return (
    <Layout>
      <Header className="custom-header">
<Link to="/" className="logo-container">
  <img src={`${process.env.PUBLIC_URL}/logowhite.png`} alt="Logo" className="logo-image" />
</Link>
        {screens.md ? (
          <>
            <div className="menu-container">{MenuItems}</div>
            <div>{SocialIcons}</div>
          </>
        ) : (
          <>
            <AntButton icon={<FaBars />} type="text" onClick={() => setIsDrawerOpen(true)} style={{ color: "white" }} />
            <Drawer title="Meny" placement="right" onClose={() => setIsDrawerOpen(false)} open={isDrawerOpen} bodyStyle={{ padding: 0, background: "#000" }} headerStyle={{ background: "#000", color: "#fff" }}>
              {MenuItems}
              <div style={{ padding: "16px 24px", borderTop: "1px solid #333" }}>{SocialIcons}</div>
            </Drawer>
          </>
        )}
        <BokaBordModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      </Header>
      <Content>{page}</Content>
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
        <Route path="/" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<StartSida onBokaClick={() => setIsModalVisible(true)} />} />} />
        <Route path="/Meny" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<Meny />} />} />
        <Route path="/Hitta" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<HittaHit />} />} />
        <Route path="/OmOss" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<OmOss />} />} />
        <Route path="/Personuppgifter" element={<LayoutWrapper isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} page={<Personuppgifter />} />} />
      </Routes>
    </Router>
  );
}
