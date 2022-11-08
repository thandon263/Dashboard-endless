import React from "react";
import SideBar from "./components/SideBar";
import Content from "./components/DashboardContent";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <SideBar />
      {/* <Menu /> */}
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
