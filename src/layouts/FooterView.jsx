import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import classNames from 'classnames';
import styles from './FooterView.less';

const { Footer } = Layout;

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = "";// classNames(styles.globalFooter, className);
  return (
    <div className={clsString}>
      {links && (
        <div className={'links'}>
          {links.map(link => (
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className={'aaa'}>{copyright}</div>}
    </div>
  );
};

class FooterView extends React.Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
        <GlobalFooter
            links={[
              {
                key: 'React Admin Home',
                title: 'Home Page',
                href: 'https://kjtang.com.cn',
                blankTarget: true,
              },
              {
                key: 'github',
                title: <Icon type="github" />,
                href: 'https://github.com/tangkaijun/react-admin',
                blankTarget: true,
              },
              {
                key: 'Ant Design',
                title: 'Ant Design',
                href: 'https://ant.design',
                blankTarget: true,
              },
            ]}
            copyright={
              <Fragment>
                  Copyright <Icon type="copyright" /> 技术分享
              </Fragment>
            }
          />
      );
    }

}

export default FooterView;
