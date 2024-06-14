import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axiosClient from '../service/axios';

const { Title } = Typography;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (values) => {
        console.log('Form submitted with values:', values); // Debug statement
        try {
            const { data } = await axiosClient.post('/api/users/login', values);
            console.log('Login response:', data); // Debug statement
            if (data.role === 'admin') {
                // window.location.href = '/admin/dashboard';
                console.log("Logged in as admin")
            } else {
                // window.location.href = '/client/dashboard';
                console.log("Logged in as user")

            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Form
                name="login"
                onFinish={handleSubmit}
                style={{ width: 300, padding: 24, background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
            >
                <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', marginBottom: '10px' }}>
                        Login
                    </Button>
                    <Button type="default" style={{ width: '100%' }} href="/signup">
                        Signup
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
