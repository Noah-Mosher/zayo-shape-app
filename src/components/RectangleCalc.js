import { Button, Form, Modal, Row, Col, Input, Typography } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/RectangleCalc.module.scss'


const RectangleCalc = () => {
    const[area, setArea] = useState(0)
    const[length, setLength] = useState(0)
    const[width, setWidth] = useState(0)
    const[shapeModalVisible, setshapeModalVisible] = useState(false)

    const onFinish = (values) => {
        const areaCalced = +values.width * +values.length 
        setLength(+values.length)
        setWidth(+values.width)
        const formattedArea = areaCalced.toFixed(3)
        setArea(formattedArea)
        setshapeModalVisible(true)
    }

  return <div className={styles.RCContainer}>
      <Form name='AreaCalc' onFinish={onFinish}>
        <div className={styles.FormRow}>
            <Typography.Text>Width: </Typography.Text>
            <Form.Item name='width' rules={[{required: true, message: 'Width must be a positive number', pattern: new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/) }]}>
             <Input />
            </Form.Item>
        </div>
        <div className={styles.FormRow}>
            <Typography.Text>Length: </Typography.Text>
            <Form.Item name='length' rules={[{required: true, message: 'Length must be a positive number', pattern: new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/) }]}>
             <Input />
            </Form.Item>
        </div>
        <Button htmlType='submit'> Calculate </Button>
      </Form>
      <Modal className={styles.Modal} visible={shapeModalVisible} width={500} footer={null} closable onCancel={() => setshapeModalVisible(false)}>
            <div className={styles.ModalContents}>
            <Row>
                <Col>
                    <Typography.Text>Width: {width}</Typography.Text></Col>
                <Col>
                <div className={styles.imageHolder}>
                <svg width="200" height="100">
                    <rect width="200" height="100" style={{fill:'#FE5F55', strokeWidth: 3,  stroke: "#FE5F55"}} />
                    <line x1="0" y1="100" x2="200" y2="100" style={{stroke: 'black', strokeWidth: 5}}/>
                    <line x1="0" y1="0" x2="0" y2="100" style={{stroke: 'black', strokeWidth: 5}}/>
                </svg>
                </div>
                <Typography.Text>Length: {length}</Typography.Text>
                </Col>
                <Col>
            <div className={styles.ResultContainer}> <Typography.Text>Area: {area} sq units</Typography.Text></div></Col>
            </Row>
            
            </div>
        </Modal>
  </div>
};

export default RectangleCalc