import React, { useContext, useEffect, useState } from 'react';
import { CommentOutlined, UserOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';
import { users } from '../../data/MockUsers';
import { channels } from '../../data/MockChannels';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import ChatWindowView from '../ChatWindowView';
import { messages } from '../../data/mockMessages';


const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, CommentOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    if(index == 0){
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `Users`,
  
        children: users.map((e, j) => {
          const subKey = index * 5 + j + 1;
          return {
            key: subKey,
            label: (
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 8, color: 'black',}}>
                 <Avatar src={e.avatar}  style={{ marginRight: '8px'}}/>
                 <h2>{e.username}</h2>
                 {/* <h5>{e.timestamp}</h5> */}
              </div>
            ),
          };
        }),
      };
    }
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Channels`,
      children: channels.map((e, l) => {
        const subKey = index * 5 + l + 1;
        return {
          key: subKey,
          label: (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: 8, color: 'black',}}>
               <Avatar src={e.avatar}  style={{ marginRight: '8px'}}/>
               <h2>{e.username}</h2>
               {/* <h5>{e.timestamp}</h5> */}
            </div>
          ),
        };
      }),
    };
  },
);

const ChatView = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const loggout = useContext(AppContext)
  

  useEffect(() => {
    
  }, [loggout.data])

  const navigate = useNavigate()

  const changePlaces = () => {
    loggout.logOut()
    navigate('/', { replace: true })
  }
  

  const items = [
    {
      key: '1',
      label: (
        <div onClick={() => changePlaces()}>
          Log out
        </div>
      ),
    },
   
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 15, color: 'white', }}>
        <div>
          <h2>My Test</h2>
          </div>
         <div>
         <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button style={{ backgroundColor: '#4096ff', color: 'white' }} shape="circle">A</Button>
      </Dropdown>
         </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            onClick={({key}) => {
              loggout.setData(messages.find((e) => e.id == key))
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
        <Header style={{ 
             display: 'flex',
             marginTop: 5 ,
             marginBottom: 5,
             borderRadius: borderRadiusLG,
             alignItems: 'center',
             fontSize: 15,
             color: 'white',
             background: '#bfbfbf' }}>
          
          </Header>
          <Content
            style={{
              padding: 15,
              margin: 0,
              minHeight: 460,
              background: '#bfbfbf',
              borderRadius: borderRadiusLG,
            }}
          >
            { loggout.data ? <ChatWindowView data={loggout.data}/> : <></>}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ChatView;
