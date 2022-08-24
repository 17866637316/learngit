import { Button, Form, Input, message, Modal } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface AddModalProps {
    //currentOrg?: IOrg;
    isModalVisible: boolean;
    setIsModalVisible: Dispatch<SetStateAction<boolean>>;
    //tableReload: () => void;
}
const AddModal: React.FC<AddModalProps> = (props) => {
    //const [isModalVisible, setIsModalVisible] = useState(false);
    const {
        //currentOrg,
        isModalVisible,
        setIsModalVisible,
        //tableReload,
    } = props;
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
        message.success('ok');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Modal
            title="添加租户"
            visible={isModalVisible}
            destroyOnClose={true}
            maskClosable={false}
            centered
            //onOk={handleOk} 
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    取消
                </Button>,
                <Button key="confirm" type="primary" htmlType="submit" form="modal" onClick={handleOk}>
                    确定
                </Button>,
            ]}
        >
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="租户名称"
                    name="tenant1name"
                    rules={[
                        {
                            required: true
                        },
                        {
                            validator: async (_, names) => {
                                if (names && names.length && names.length < 2) {
                                    return Promise.reject(new Error("最少两个字符"));
                                }
                            },
                        }
                    ]}
                >
                    <Input placeholder="长度2~255" autoComplete="off" />
                </Form.Item>

                <Form.Item
                    label="租户标识"
                    name="tenantidentification"
                    rules={[
                        {
                            required: true
                        },
                        {
                            validator: async (_, names) => {
                                if (names && names.length && names.length < 2) {
                                    return Promise.reject(new Error("最少两个字符"));
                                }
                            },
                        }
                    ]}
                >
                    <Input placeholder="长度2~24，必须为英文字母" />
                </Form.Item>

                <Form.Item
                    label="gOS工作空间ID"
                    name="workId"
                //rules={[{ required: true, message: 'Please input your workId!' }]}
                >
                    <Input placeholder="请输入" />
                </Form.Item>
            </Form>
        </Modal>

    );
};
export default AddModal;