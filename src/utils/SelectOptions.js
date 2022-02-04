import { shapes}  from '../helpers/constants/ShapeOptions'
export const buildShapeOptions = () => {
    const shapeOptions = shapes.map(shape => {
        return{label: shape.label, value: shape.type}
    })
    return shapeOptions
}