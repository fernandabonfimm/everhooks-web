import React from 'react';
import 'antd/dist/antd.css';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Layout, Row, Col, Card } from "antd";

const BreadcrumbComponent = ({ children }) => {
    
    return (
        <>
            <Row gutter={[32, 22]}>
                <Col xs={24} xl={24}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <UserOutlined />
                            <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Application</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            
            </Row>
        </>
    );
}

export default BreadcrumbComponent;