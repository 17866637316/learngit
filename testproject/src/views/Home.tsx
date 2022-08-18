import { AudioOutlined } from '@ant-design/icons';
import React, { Component } from "react";
import { Row, Col, Image, Input} from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
import NavLeft from "../components/navleft";
import './home.less'
import HomeForm from "../components/baseform/homeform";
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default class Home extends Component {
  render() {
    return (
       <div>
    
       
       <div  className="main">
        <Header/>
       </div>
        <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/> 
                </Col>
                <Col span={20}>
                     
                    <Row className="content">
                    <div className="logo">
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        <HomeForm/>
                    </div>
                    </Row>
                    <Footer/> 
                </Col>
            </Row>
            
        </div>
    );
  }
}
