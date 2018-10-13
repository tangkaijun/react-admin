import Loadable from 'react-loadable';
import React from 'react';
import Loading from './Loading';

/**
 * 第一种方案（使用react-loadable）
 */
export default (loadComponent)=>{

    const LoadableComponent = Loadable({
        timeout: 5000,
        loader: () => loadComponent(),
        loading: (props)=>{
            console.log("error=",props.error);
            return <div>加载组件中...</div>
        },
      });

    class LazyComponent extends React.Component{
        render() {
            return <LoadableComponent/>;
        }
    } 
    
    return LazyComponent
}


/** 
 * 第二种方案（使用async和await）
 * 使用范例:LazyComponent(()=>import("@/pages/login/Login"))
 * */
/**
export default (loadComponent)=>{
    class LazyComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                component:null
            };
        }

        async componentDidMount(){
            const {default:component}=await loadComponent();

            this.setState({
                component:component
            });
        }

        render(){
            const Com=this.state.component;
            if(Com==null){
                return null;
            }
            return <Com {...this.props}/>
        }
    }

    return LazyComponent;
}; 
*/