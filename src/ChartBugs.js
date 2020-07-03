import React from 'react';
import Chart, {
    Series,
    ArgumentAxis,
    Aggregation,
    AggregationInterval,
    ValueAxis,
    Export,
    ScrollBar,
    ZoomAndPan,
    Legend,
    Tooltip
} from 'devextreme-react/chart';



export default class ChartBugs extends React.Component {
    render() {
        return (
            <Chart
                id="chart"
                dataSource={this.props.data}
                title="Количество зарегестрированных дефектов по месяцам">
                <Series
                    argumentField="Дата создания"
                    valueField="ID"
                    type="bar">
                    <Aggregation
                        enabled={true}
                        method="count" />
                </Series>
                <ArgumentAxis
                    argumentType="datetime">
                    <AggregationInterval
                        months={1} />
                </ArgumentAxis>
                <ValueAxis title="Количество" />

                <Export enabled={true} />
                <ScrollBar visible={true} />
                <Legend visible={false} />
                <ZoomAndPan argumentAxis="both" />
                <Tooltip
                    enabled={true}
                    location="edge"
                    customizeTooltip={this.customizeTooltip}
                />
            </Chart>
        );
    }
}
