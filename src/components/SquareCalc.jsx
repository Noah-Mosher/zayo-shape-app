import { Button, Col, Form, Input, Modal, Row, Typography } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/SquareCalc.module.scss'
import squareSvg from '../assets/shapesvgs/square-svgrepo-com.svg'


const SquareCalc = () => {
    const[area, setArea] = useState(0)
    const[length, setLength] = useState()
    const[shapeModalVisible, setshapeModalVisible] = useState(false)

    const onFinish = (values) => {
        const areaCalced = 4 * +values.length 
        const formattedArea = areaCalced.toFixed(3)
        setArea(formattedArea)
        setLength(+values.length)
        setshapeModalVisible(true)
    }

  return <div className={styles.SCContainer}>
      <Form name='AreaCalc' onFinish={onFinish}>
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
                    <Typography.Text>Side Length: {length}</Typography.Text></Col>
                <Col>
                <img src={squareSvg} alt='square'></img>
                <Typography.Text>Side Length: {length}</Typography.Text>
                </Col>
                <Col>
            <div className={styles.ResultContainer}> <Typography.Text>Area: {area} sq units</Typography.Text></div></Col>
            </Row>
            
            </div>
        </Modal>
  </div>
};

export default SquareCalc