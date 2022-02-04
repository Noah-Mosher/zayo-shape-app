import { Button, Form, Input, Modal, Row, Col, Typography } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/TriangleCalc.module.scss'


const TriangleCalc = () => {
    const[area, setArea] = useState(0)
    const[base, setBase] = useState(0)
    const[height, setHeight] = useState(0)
    const[shapeModalVisible, setshapeModalVisible] = useState(false)

    const onFinish = (values) => {
        const areaCalced = +values.height * +values.base / 2
        const formattedArea = areaCalced.toFixed(3)
        setBase(+values.base)
        setHeight(+values.height)
        setArea(formattedArea)
        setshapeModalVisible(true)
    }

  return <div className={styles.TCContainer}>
      <Form name='AreaCalc' onFinish={onFinish}>
        <div className={styles.FormRow}>
            <Typography.Text>Base Length: </Typography.Text>
            <Form.Item name='base' rules={[{required: true, message: 'Height must be a positive number', pattern: new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/) }]}>
             <Input />
            </Form.Item>
        </div>
        <div className={styles.FormRow}>
            <Typography.Text>Height Length: </Typography.Text>
            <Form.Item name='height' rules={[{required: true, message: 'Height must be a positive number', pattern: new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/) }]}>
             <Input />
            </Form.Item>
        </div>
        <Button htmlType='submit'> Calculate </Button>
      </Form>
      <Modal className={styles.Modal} visible={shapeModalVisible} width={500} footer={null} closable onCancel={() => setshapeModalVisible(false)}>
            <div className={styles.ModalContents}>
            <Row>
                <Col>
                    <Typography.Text>Height: {height}</Typography.Text></Col>
                <Col>
                <div className={styles.imageHolder}>
                <svg width="150" height="150">
                <polygon points="75,0 0,150 150,150" style={{fill:'#FE5F55'}} class="triangle" />
                <line x1="75" y1="150" x2="75" y2="3" style={{stroke: 'black', strokeWidth: 3}}/>
                <line x1="2" y1="149" x2="148" y2="149" style={{stroke: 'black', strokeWidth: 5}}/>
                </svg>
                </div>
                <Typography.Text>Base: {base}</Typography.Text>
                </Col>
                <Col>
            <div className={styles.ResultContainer}> <Typography.Text>Area: {area} sq units</Typography.Text></div></Col>
            </Row>
            
            </div>
        </Modal>
  </div>
};

export default TriangleCalc;
