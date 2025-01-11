import React, { useState } from 'react';
import { Modal, Input, Button, Form, InputNumber } from 'antd';

const CadastroModal = ({ visible, onCancel, onOk }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form
            .validateFields()
            .then(values => {
                console.log(values);
                onOk(values.nome, values.x, values.y);
                onOk();
                form.resetFields();
            })
            .catch(info => {
                console.log('Erro na validação do formulário:', info);
            });
    };

    return (
        <Modal
            title="Cadastrar"
            open={visible}
            onOk={handleOk}
            onCancel={onCancel}
            okText="Cadastrar"
            cancelText="Cancelar"
        >
            <Form
                form={form}
                layout="vertical"
                name="cadastro"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Nome"
                    name="nome"
                    rules={[{ required: true, message: 'Por favor, insira o nome!' }]}
                >
                    <Input placeholder="Digite seu nome" />
                </Form.Item>
                <Form.Item
                    label="X"
                    name="x"
                    rules={[{ required: true, message: 'Por favor, insira um valor para X!' }]}
                >
                    <InputNumber placeholder="Digite o valor de X" min={0} />
                </Form.Item>
                <Form.Item
                    label="Y"
                    name="y"
                    rules={[{ required: true, message: 'Por favor, insira um valor para Y!' }]}
                >
                    <InputNumber placeholder="Digite o valor de Y" min={0} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CadastroModal;
