import React, { Component } from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";

import Counters from "./containers/countersContainer";

import store from "./store";
import "./App.css";
import "antd/dist/antd.css";

const { Content, Header, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Counters />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Provider>
    );
  }
}

export default App;
