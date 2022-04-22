import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/products">
        Products Manager
      </a>
      <a className="menu-item" href="/invoices">
        Invoices Manager
      </a>
      <a className="menu-item" href="/news">
        News Manager
      </a>
      <a className="menu-item" href="/users">
        Users Manager
      </a>
      <a className="menu-item" href="/silder">
        Slider Manager
      </a>
      <a className="menu-item" href="/voucher">
        Voucher Manager
      </a>
      <a className="menu-item" href="/hotproducts">
        Hot Products Manager
      </a>
    </Menu>
  );
};