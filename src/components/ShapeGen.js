import React from 'react';
import styles from '../styles/ShapeGen.module.scss'
import { Card } from 'antd';
import TriangleCalc from './TriangleCalc';
import SquareCalc from './SquareCalc';
import RectangleCalc from './RectangleCalc';
import CircleCalc from './CircleCalc';

const ShapeTypeMap = new Map([
    ['square', SquareCalc],
    ['rectangle', RectangleCalc],
    ['circle', CircleCalc],
    ['triangle', TriangleCalc],
])

const ShapeGen = ({shape}) => {

    const Child = ShapeTypeMap.get(shape)
  return <div className={styles.CardContainer}>
      <Card bordered={false}>
      <Child />
      </Card>
  </div>;
};

export default ShapeGen;
