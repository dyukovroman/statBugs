import React from 'react';

import DataGrid, { Column, FilterRow, Scrolling } from 'devextreme-react/data-grid';

export default class GridBugs extends React.Component {
    render() {
        return (
            <DataGrid
                id="gridContainer"
                dataSource={this.props.data}
                columnAutoWidth={true}
                showBorders={true}
                showColumnLines={true}
                showRowLines={true}
                rowAlternationEnabled={true}
                columnHidingEnabled={true}>
                <FilterRow visible={true} />
                <Scrolling mode="infinite" />
                <Column
                    dataField="ID" />
                <Column
                    dataField="System" />
                <Column
                    dataField="Состояние" />
                <Column
                    dataField="Найдено при" />
                <Column
                    dataField="Критичность" />
                <Column
                    dataField="Тип Дефекта" />
                <Column
                    dataField="Дата создания"
                    dataType="date"
                    format="shortDate" />
                <Column
                    dataField="Дата изменения"
                    dataType="date" />
                <Column
                    dataField="Дата закрытия"
                    dataType="date" />
                <Column
                    dataField="Метод обнаружения" />
                <Column
                    dataField="reopens_amount"
                    dataType="number" />
            </DataGrid>
        );
    }
}
