import 'eventsource-polyfill';
import 'babel-polyfill';
import '@/assets/style/base.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import Routes from '@/routes/Routes';


const App = {
    start:function(EntryPoint){
        ReactDOM.render(
          <AppContainer>
              <Provider>
                  <LocaleProvider>
                      <EntryPoint/>
                  </LocaleProvider>
              </Provider>
          </AppContainer>,  
          document.querySelector("#root"),
        )
    }
}

App.start(Routes);

if (module.hot) {
   module.hot.accept()
}