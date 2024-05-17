import { observer } from 'mobx-react-lite';
import { Button, Form, Input, message } from 'antd';
import RoutesStore from '../store/RoutesStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginReq {
    username: string,
    password: string
}

function A8Login() {
    function onFinish(values: LoginReq) {
        RoutesStore.login(values)
    }
    const nav = useNavigate() // 得到导航函数
    useEffect(() => {
        if (RoutesStore.state === 'done') {
            // 跳转至主页
            nav('/')
        } else if (RoutesStore.state === 'error') {
            message.error(RoutesStore.message)
        }
    }, [RoutesStore.state])
    return (
        <div style={{ paddingTop: 200 }}>
            <Form
                name='basic'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                onFinish={onFinish}>
                <Form.Item
                    label='用户名'
                    name='username'
                    rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input autoComplete='off' />
                </Form.Item>

                <Form.Item
                    label='密码'
                    name='password'
                    rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input.Password autoComplete='off' />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 6 }}>
                    <Button type='primary' htmlType='submit'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default observer(A8Login)