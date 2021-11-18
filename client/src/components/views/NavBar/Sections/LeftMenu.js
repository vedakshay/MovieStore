import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">Favorite</a>
      </Menu.Item>
      <Menu.Item style={{ fontWeight: 'bold', fontSize: '30px' }}>
        <a href="/">Movie Catalogue Application using Cassandra</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
