import '../styles/App.less'
import styles from '../styles/App.module.scss';
import { Select } from 'antd';
import { useState } from 'react';
import { buildShapeOptions } from '../utils/SelectOptions';
import ShapeGen from '../components/ShapeGen';


const App = () => {
  const shapeOptions = buildShapeOptions()
  const [shape, setShape] = useState('')

  const handleChangeShape = (value) => {
    console.log(value)
      setShape(value)
  }

  return (
    <div className={styles.AppContainer}>
      <Select placeholder="Select a shape" options={shapeOptions} style={{width: 180}}  onChange={handleChangeShape}/>
      <div className={styles.ShapeContainer}>
        {shape === '' ? null : (
          <ShapeGen shape={shape}></ShapeGen>
        )}
      </div>
    </div>
  );
}

export default App;
