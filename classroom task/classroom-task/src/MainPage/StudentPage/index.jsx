import React, { useState } from 'react';
import {
    CalendarFilled,
    DownloadOutlined,
    HomeFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingFilled
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HomeStudent from '../../HomeStudent';

const { Header, Sider, Content } = Layout;



const StudentPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const[selectedMenu,setSelectedMenu]=useState('1');
    const[task,setTask]=useState('');
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
      onClick={(e)=>{
        setSelectedMenu(e.key)
      }}
      style={{height:'100vh'}}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <HomeFilled />,
            label: 'Home(Student)',
          },
          {
            key: '2',
            icon: <CalendarFilled />,
            label: 'Grades',
          },
          {
            key: '3',
            icon: <DownloadOutlined />,
            label: 'Archived',
          },
          {
            key: '4',
            icon: <SettingFilled />,
            label: 'Settings',
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {selectedMenu==='1'? <HomeStudent/> : selectedMenu=='2' ? 'Grades' :selectedMenu=='3' ? 'archived' : 'settings'}
      </Content>
    </Layout>
  </Layout>
  );
};

export default StudentPage;
