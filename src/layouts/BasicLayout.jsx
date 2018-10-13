import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './BasicLayout.less';
import SiderMenu from '@/components/SiderMenu/SiderMenu';
import FooterView from './FooterView';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class BasicLayout extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    toggleCollapse = () => {
      this.setState({ collapsed: !this.state.collapsed});
    }

    render(){
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <SiderMenu collapsed = {this.state.collapsed}/>
          <Layout>
             <Header style={{ background: '#fff', padding: 0 }}>
               <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggleCollapse}
              />
             </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <FooterView />
          </Layout>
        </Layout>
      );
    }

}

export default BasicLayout;