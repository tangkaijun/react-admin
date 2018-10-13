import React,{ PureComponent } from 'react';
import { Layout, message } from 'antd';
import { connect } from 'dva';
import TopNavHeader from '@/components/TopNavHeader';

const { Header } = Layout;

class HeaderView extends PureComponent{
   
    render(){
        const { isMobile,handleMenuCollapse,setting } = this.props;
        const { visible } = this.state;
        const HeaderDom = visible ? (
            <Header>
               {true?(<TopNavHeader
                mode="horizontal"
                onCollapse={handleMenuCollapse}
                {...this.props}/>
                 ):(
                    <GlobalHeader
                    onCollapse={handleMenuCollapse}
                    onNoticeClear={this.handleNoticeClear}
                    onMenuClick={this.handleMenuClick}
                    onNoticeVisibleChange={this.handleNoticeVisibleChange}
                    {...this.props}
                   />
               )}
            </Header>
        ):null;

        return {HeaderDom}
    }
}

export default connect(({ user, global, setting, loading }) => ({
    currentUser: user.currentUser,
    collapsed: global.collapsed,
    //fetchingNotices: loading.effects['global/fetchNotices'],
    notices: global.notices,
    setting,
  }))(HeaderView);