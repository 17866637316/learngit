import React from 'react'
import { Row,Col } from "antd"
import './index.less'

class Header extends React.Component{
    /* state={}
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
            let sysTime = new Date().getTime();
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    } */
    render(){
        /* const { menuName, menuType } = this.props; */
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎 xxx</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        导航栏
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{new Date().getTime()}</span>
                        <span className="weather-img">
                            <img src={'image/dog.png'} alt="" />
                        </span>
                        <span className="weather-detail">
                            多云转晴
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;