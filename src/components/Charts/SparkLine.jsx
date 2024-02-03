import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

function SparkLine({ id, currentColor, type, color, width, height, data }) {
    return (
        <SparklineComponent
            id={id}
            width={width}
            height={height}
            lineWidth={1}
            valueType='Numeric'
            fill={color}
            border={{ color: currentColor, width: 2 }}
            dataSource={data}
            xName='x'
            yName='y'
            type={type}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    )
}

export default SparkLine