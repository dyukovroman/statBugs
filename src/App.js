import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.css';

import { SelectBox, DateBox } from 'devextreme-react';

import Box, {
  Item
} from 'devextreme-react/box';


import DataBugs from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStart: null,
      dateEnd: null,
      System: "Все",
      Критичность: "Все"
    };
  }

  changeCrit = (e) => {
    this.setState({ Критичность: e.value });
  };
  changeSystem = (e) => {
    this.setState({ System: e.value });
  };
  changeDateStart = (e) => {
    this.setState({ dateStart: e.value });
  };
  changeDateEnd = (e) => {
    this.setState({ dateEnd: e.value });
  };
  render() {
    let data = DataBugs;
    let crit = [...new Set(DataBugs.map(item => item.Критичность))];
    let systems = [...new Set(DataBugs.map(item => item.System))];
    crit.unshift('Все')
    systems.unshift('Все')

    if (this.state.System && this.state.System !== 'Все') {
      data = data.filter(d => d.System === this.state.System);
    }
    if (this.state.Критичность && this.state.Критичность !== 'Все') {
      data = data.filter(d => d.Критичность === this.state.Критичность);
    }
    if (this.state.dateStart) {
      data = data.filter(d => new Date(d['Дата создания']) >= new Date(this.state.dateStart));
    }
    if (this.state.dateEnd) {
      data = data.filter(d => new Date(d['Дата создания']) <= new Date(this.state.dateEnd));
    }
    console.log(data)
    return (
      <React.Fragment>
        <Box
          direction="row"
          width="100%">
          <Item ratio={1}
          baseSize={150}>
            <div className="options">
              <div className="fix-options">
                <div className="caption">Фильтр</div>
                <div className="option">
                  <span>С</span>
                  <DateBox
                    id="selected-date"
                    value={this.state.dateStart}
                    width='100%'
                    onValueChanged={this.changeDateStart}
                    showClearButton={true} />
                </div>
                <div className="option">
                  <span>До</span>
                  <DateBox
                    id="selected-date"
                    value={this.state.dateEnd}
                    width='100% ' onValueChanged={this.changeDateEnd}
                    showClearButton={true} />
                </div>
                <div className="option">
                  <span>Критичность</span>
                  <SelectBox
                    id="choose-crit"
                    dataSource={crit}
                    width='100%'
                    onValueChanged={this.changeCrit} />
                </div>
                <div className="option">
                  <span>Система</span>
                  <SelectBox
                    id="choose-systems"
                    dataSource={systems}
                    width='100%'
                    onValueChanged={this.changeSystem} />
                </div>
              </div >
            </div>
          </Item>
          <Item ratio={5}>
            <div className="content">
             Content
            </div>
          </Item>
        </Box>
      </React.Fragment>
    );
  }
}

export default App;
