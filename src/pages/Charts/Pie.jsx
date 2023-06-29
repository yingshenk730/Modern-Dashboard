import React from 'react'
import { Header } from '../../components'
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  Inject,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts'
import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Pie = () => {
  const { currentMode } = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Project Cost Breakdown" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pie-chart"
          legendSettings={{ visible: true, background: 'white' }}
          height="full"
          background={currentMode === 'Dark' ? '#33373e' : '#FFF'}
          tooltip={{ enable: true }}>
          <Inject
            services={[
              PieSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Sale"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="80%"
              explode
              explodeOffset="15%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff',
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pie
