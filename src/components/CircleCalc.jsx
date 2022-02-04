import { Button, Form, Modal, Row, Col, Input, Typography } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/CircleCalc.module.scss'


const CircleCalc = () => {
    const[area, setArea] = useState(0)
    const[radius, setRadius] = useState(0)
    const[shapeModalVisible, setshapeModalVisible] =useState(false)

    const onFinish = (values) => {
        const areaCalced = +values.radius * +values.radius * Math.PI
        const formattedArea = areaCalced.toFixed(3) 
        setRadius(+values.radius)
        setArea(formattedArea)
        setshapeModalVisible(true)
    }

  return <div className={styles.CCContainer}>
      <Form name='AreaCalc' onFinish={onFinish}>
        <div className={styles.FormRow}>
            <Typography.Text>Radius: </Typography.Text>
            <Form.Item name='radius' rules={[{required: true, message: 'Radius must be a positive number', pattern: new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/) }]}>
             <Input />
            </Form.Item>
        </div>
        <Button htmlType='submit'> Calculate </Button>
      </Form>
      <Modal className={styles.Modal} visible={shapeModalVisible} width={500} footer={null} closable onCancel={() => setshapeModalVisible(false)}>
            <div className={styles.ModalContents}>
            <Row>
                <Col>
                    <Typography.Text>Radius: {radius}</Typography.Text></Col>
                <Col>
                <svg width="140" height="140">
                    <circle cx="70" cy="70" r="70" style={{fill:'#FE5F55'}}/>
                    <line x1="0" y1="70" x2="70" y2="70" style={{stroke: 'black', strokeWidth: 3}}/>
                </svg>
                </Col>
                <Col>
            <div className={styles.ResultContainer}> <Typography.Text>Area: {area} sq units</Typography.Text></div></Col>
            </Row>
            
            </div>
        </Modal>
  </div>
};

export default CircleCalc