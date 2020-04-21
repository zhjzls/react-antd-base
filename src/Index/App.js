import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  // VideoCameraOutlined,
  TeamOutlined
} from '@ant-design/icons';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import routeConfig from '../route/index'

const { Header, Sider, Content } = Layout;
// function getDataType(params) {
//   return Object.prototype.toString.call(params).slice(1, -7).toLowerCase()
// }
function getLinks(routeConfig) {
  return routeConfig.map(item => {
    if (item.children) {
      return <Menu.SubMenu
        key={item.name}
        title={
          <span>
            <TeamOutlined />
            <span>nav 2</span>
          </span>
        }>
        {getLinks(item.children)}
      </Menu.SubMenu>
    } else {
      return <Menu.Item key={item.name}>
        <Link to={item.path}>
          <UserOutlined />
          <span>
            {item.name}
          </span>
        </Link>
      </Menu.Item>
    }
  })
}
// 拍扁路由数组方案1
function flatten(array) {
  return array.reduce((init, cur)=> init.concat(Array.isArray(cur.children)? flatten(cur.children): cur), [])
}
// 拍扁路由数组方案2
// function getRoutes(routeConfig) {
//   // const spreadArray = flatten(routeConfig)
//   let spreadRoutes = []
//   routeConfig.forEach(route=>{
//     if(route.children){
//       spreadRoutes = spreadRoutes.concat(getRoutes(route.children))
//     }else{
//       spreadRoutes.push(route)
//     }
//   })
//   return spreadRoutes
// }

function App() {
  const [collapsed, toggleCollapsed] = useState(false)
  function toggle() {
    toggleCollapsed(!collapsed)
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultOpenKeys={["tab3"]} defaultSelectedKeys={window.location.pathname}>
              {getLinks(routeConfig)}
              {/* <Menu.Item key="1">
                <Link to="/tab1">
                  <UserOutlined />
                  <span>
                    nav 1
                </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/tab2">
                  <VideoCameraOutlined />
                  <span>nav 2</span>
                </Link>
              </Menu.Item>
              <Menu.SubMenu
                key="3"
                title={
                  <span>
                    <TeamOutlined />
                    <span>nav 2</span>
                  </span>
                }
              >
                <Menu.Item key="6">
                  <Link to="/tab3/child1">child1</Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/tab3/child2">child2</Link>
                </Menu.Item>
                <Menu.SubMenu
                  key="9"
                  title={
                    <span>
                      <TeamOutlined />
                      <span>nav 3-3</span>
                    </span>
                  }
                >
                  <Menu.Item key="10">
                    <Link to="/tab3/child3/content">child1</Link>
                  </Menu.Item>
                </Menu.SubMenu>
              </Menu.SubMenu> */}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> : <MenuFoldOutlined className="trigger" onClick={toggle} />}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                {flatten(routeConfig).map(item=><Route key={item.name} path={item.path}>
                  {item.component}
                </Route>)}
                {/* <Route path="/" exact>
                  <h1>default</h1>
                </Route>
                <Route path="/tab1">
                  <h1>这是渲染在Switch下的tab1路径下的内容</h1>
                </Route>
                <Route path="/tab2">
                  <h2>Switch下tab2路径下的内容</h2>
                </Route>
                <Route path="/tab3/child1">
                  <h2>子内容1</h2>
                </Route>
                <Route path="/tab3/child2">
                  <h2>子内容2</h2>
                </Route>
                <Route path="/tab3/child3/content">
                  <h2>内容3-3-content</h2>
                </Route> */}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
