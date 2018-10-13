import React from 'react';
import { Button, Row, Input , Form ,Checkbox ,Icon, message } from 'antd';
import styles from './Login.less';

class Login extends React.PureComponent{

    constructor(props){
        super(props)
    }

    render(){
       const FormItem = Form.Item;
       const { getFieldDecorator } = this.props.form;
       return (
        <div className={styles.loginWrapper}>
          <div className="login-form">
            <div className="login-logo">
                 <span>React Admin</span>
            </div>
            <Form onSubmit={this.handleSubmit} >
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </FormItem>
            </Form>
            </div>
        </div>
        )
    }

}

Login = Form.create()(Login);
export default Login;