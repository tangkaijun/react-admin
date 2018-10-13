import React from 'react';
import { HashRouter, Route, Switch ,Redirect} from 'react-router-dom';
import lazyComponent from '@/utils/lazyLoad';
import { Button, Row, Input , Form ,Checkbox ,Icon, message } from 'antd';
import Logo from '@/components/Logo/Logo';
import SiderMenu from '@/components/SiderMenu/SiderMenu';
import FooterView from '@/layouts/FooterView';
class Routes extends React.Component{

    constructor(props){
       super(props)
    }

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} render={()=><Redirect to="/login" push/>}/>
                    <Route path={"/login"} component = { lazyComponent(()=>import('@/pages/login/Login')) }/>
                    <Route path={"/home"} component = {lazyComponent(() => import('@/layouts/BasicLayout'))}/>
                    <Route path={"/logo"} component = { FooterView }/>
                </Switch>
           </HashRouter>
        )
    }
}

export default Routes;