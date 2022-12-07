import React, { Component } from "react";
import LeftMenu from "./left";
import RightMenu from "./right";
import { Drawer, Button } from "antd";
// import "antd/dist/antd.css";
import 'antd/dist/reset.css'
import style from '../styles/app.module.css'
// import "../src/components/app.css";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <nav className={style.menuBar}>
        <div className={style.logo}>
          <a href="www.marca.com">logo</a>
        </div>
        <div className={style.menuCon}>
          <div className={style.leftMenu}>
            <LeftMenu />
          </div>
          <div className={style.rightMenu}>
            <RightMenu />
          </div>
          <Button className={style.barsMenu} type="primary" onClick={this.showDrawer}>
            <span className={style.barsBtn} />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navbar;