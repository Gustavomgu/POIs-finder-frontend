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

    const URL = process.env.REACT_APP_API_URL;

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

    const handleSearch = () => {
        const params = new URLSearchParams({
            pointX: pointX,
            pointY: pointY,
            radius: raio
        });

        console.log('URL de consulta : ' + `${URL}/GetAllClose?${params.toString()}`)
        axios.get(`${URL}/GetAllClose?${params.toString()}`)
            .then(response => {
                console.log("Resposta da API ", response.data);
                setPoints(response.data);
            })
            .catch(error => {
                message.error('Ocorreu um erro ao buscar pontos próximos! ' + error,1).then(r => {});
                console.log(error);
            });
    };

    const handleNewPoint = (name, pointX, pointY) => {
        const data = {
            name: name,
            pointX: pointX,
            pointY: pointY,
        }

        axios.post(URL,data)
            .then(response => {
                console.log(response.data);
                message.success(`Cadastro realizado com sucesso! Nome: ${name}, X: ${pointX}, Y: ${pointY}`).then(r => {});
            })
            .catch(error => {
                message.error('Ocorreu um erro ao tentar cadastrar! ' + error,1).then(r => {});
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
                    Ache o seus pontos de interesse favoritos
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;