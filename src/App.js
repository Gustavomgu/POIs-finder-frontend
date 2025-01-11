import React, {useState} from 'react';
import {Button, Input, Layout, message, theme} from 'antd';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import CadastroModal from "./Component/Cadastro/ModalCadastro";

const { Header, Content, Footer} = Layout;

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [points, setPoints] = useState([]);

    const [pointX, setPointX] = useState('');
    const [pointY, setPointY] = useState('');
    const [raio, setRaio] = useState('');

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        console.log('Cadastro realizado com sucesso!');
    };

    const handleSearch = () => {
        const params = new URLSearchParams({
            pointX: pointX,
            pointY: pointY,
            radius: raio
        });

        axios.get(`http://localhost:3000/GetAllClose?${params.toString()}`)
            .then(response => {
                console.log("Resposta da API ", response.data);
                setPoints(response.data);
            })
            .catch(error => {
                message.error(`Ocorreu um erro ao buscar pontos próximos! %s`,error).then(r => {});
                console.log(error);
            });
    };

    const handleNewPoint = (name, pointX, pointY) => {
        const data = {
            name: name,
            pointX: pointX,
            pointY: pointY,
        }

        axios.post('http://localhost:3000/',data)
            .then(response => {
                console.log(response.data);
                message.success(`Cadastro realizado com sucesso! Nome: ${name}, X: ${pointX}, Y: ${pointY}`).then(r => {});
            })
            .catch(error => {
                message.error(`Ocorreu um erro ao tentar cadastrar! %s`,error).then(r => {});
                console.log(error);
            });

        setIsModalVisible(false);
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
                        <CadastroModal
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            onOk={handleNewPoint}
                        />
                        <Row gutter={16} style={{ padding: '16px' }}>
                            <Col span={8}>
                                <Card
                                    onClick={showModal}
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
                            {points.map((item, index) => (
                                <Col key={index} span={8}>
                                    <Card
                                        style={{ margin: '5px', backgroundColor: '#FFDDC1', color: 'white' }}
                                        title={item.name} bordered={false}
                                    >
                                        <p style={{fontWeight: 'bold', color: 'black'}} >Ponto X: {item.pointX}</p>
                                        <p style={{fontWeight: 'bold', color: 'black'}}>Ponto Y: {item.pointY}</p>
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