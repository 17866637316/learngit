import { PlusOutlined } from '@ant-design/icons';
import React, { Component, useState } from "react";
import { Row, Col, Button, Input } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
import NavLeft from "../components/navleft";
import './home.less'
import HomeForm from "../components/baseform/homeform";
import { relative } from 'path';
import AddModal from '../components/addModal';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const Home: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div /* className="main" */>
            <Header />
            <Row /* className="container" */>
                <Col span={4} /* className="nav-left" */>
                    <NavLeft />
                </Col>
                <Col span={20}>
                    {/* <Row className="content"> */}
                    {/* <Search placeholder="input search text" style={{width:250, marginBottom:20 }} onSearch={onSearch} enterButton /> */}
                    <Button type="primary" style={{ marginTop: 20, marginBottom: 20 }} onClick={showModal}  icon={<PlusOutlined />}>添加租户</Button>
                    <AddModal
                        //currentOrg={currentOrg}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                    //tableReload={getOrgListRequest}
                    ></AddModal>
                    {/* <br /> */}
                    <HomeForm />
                    {/* </Row> */}
                    <Footer />
                </Col>
            </Row>
        </div>
    );
}
export default Home;