import React, {useState} from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {Button, Input, Layout, Menu, theme} from 'antd';
import { Card, Col, Row } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }),
);

const data = [
    { nome: 'Ponto A', pointx: 10, pointy: 20 },
    { nome: 'Ponto B', pointx: 30, pointy: 40 },
    { nome: 'Ponto C', pointx: 50, pointy: 60 },
];

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [pointX, setPointX] = useState('');
    const [pointY, setPointY] = useState('');
    const [raio, setRaio] = useState('');

    const handleSearch = () => {
        console.log('Pesquisando com:', { pointX, pointY, raio });
    };

    const handleNewPoint = () => {
        console.log("Criando um novo card");
    }

    return (
         <Layout style={{ minHeight: '100vh' }}>
            <Layout>
                <Header
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Row gutter={16} style={{ padding: '16px' }}>
                        <Col span={6}>
                            <Input
                                placeholder="Ponto X"
                                value={pointX}
                                onChange={(e) => setPointX(e.target.value)}
                                type="number"
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                placeholder="Ponto Y"
                                value={pointY}
                                onChange={(e) => setPointY(e.target.value)}
                                type="number"
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                placeholder="Raio"
                                value={raio}
                                onChange={(e) => setRaio(e.target.value)}
                                type="number"
                            />
                        </Col>
                        <Col span={6}>
                            <Button type="primary" onClick={handleSearch} style={{ width: '100%' }}>
                                Pesquisar
                            </Button>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Row gutter={16} style={{ padding: '16px' }}>
                            <Col span={8}>
                                <Card
                                    onClick={handleNewPoint}
                                    className="card-hover"
                                    style={{ backgroundColor: '#FFDDC1', color: 'white' }}
                                    title="Clique para adicionar novo ponto" bordered={false}
                                >
                                    <p style={{fontWeight: 'bold', color: 'black'}} >Ponto X: 10</p>
                                    <p style={{fontWeight: 'bold', color: 'black'}}>Ponto Y: 10</p>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ padding: '16px' }}>
                            {data.map((item, index) => (
                                <Col key={index} span={8}>
                                    <Card
                                        style={{ backgroundColor: '#FFDDC1', color: 'white' }}
                                        title={item.nome} bordered={false}
                                    >
                                        <p style={{fontWeight: 'bold', color: 'black'}} >Ponto X: {item.pointx}</p>
                                        <p style={{fontWeight: 'bold', color: 'black'}}>Ponto Y: {item.pointy}</p>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;