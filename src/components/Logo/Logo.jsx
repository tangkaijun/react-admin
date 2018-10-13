import React from 'react';
import styles from './Logo.less';

class Logo extends React.PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className = {styles.logo}>{"React Admin"}</div>
        );
    }

}

export default Logo;