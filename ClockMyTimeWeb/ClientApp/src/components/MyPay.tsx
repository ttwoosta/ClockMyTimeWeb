import * as React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import Utils from '../utils';
import Spinner from './Spinner';
import { Button } from 'reactstrap';

class MyPay extends React.Component {

    state = {
        event: "initial",
        myPay: null
    }

    constructor(props: Readonly<{}>) {
        super(props);

        this.onDeleteTimeButtonClick = this.onDeleteTimeButtonClick.bind(this);
    }

    public componentDidMount() {
        this.fetchData();
      
    }

    fetchData() {
      const self = this;
      self.setState({ event: "beginFetchData" });

      const transport = Utils.createApiClient();

      transport.get('/my-pay/')
      .then(function (response: any) {
        self.setState({ 
            event: "endedFetchData",
            myPay: response.data
        });
      })
      .catch(function (error: any) {
          console.error(error);
          self.setState({ event: "failFetchData" });
      })
    }

    render() {

        switch(this.state.event) {
            case "beginFetchData":
            case "beginDeleteItem":
                return (
                    <div className="spinner-parent">
                        <h1>Loading...</h1>
                        <Spinner></Spinner>
                    </div>
                );

            case "endedFetchData":
                return (
                    <div>
                        <h1>My Table place holder</h1>
                        {this.renderMyPayTable()}
                    </div>
                );

            case "failFetchData":
                return (<h1>An error occurs during request data</h1>);

            case "failDeleteItem":
                return (<h1>Unable to delete item</h1>);
                
        }
        
        return (<h1>Hello</h1>)
    }

    private renderMyPayTable() {
        return (
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Hours</th>
                <th>Base Rate</th>
                <th>Rate</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {this.state.myPay.items.map((item: PayCheckItem) =>
                <tr key={item.schedule_id}>
                  <td>{item.date}</td>
                  <td>{item.timeIn}</td>
                  <td>{item.timeOut}</td>
                  <td>{item.hours}</td>
                  <td className="currency-cell">${item.base_rate}</td>
                  <td className="currency-cell">${item.total}</td>
                  <td><Button color='link' onClick={this.onDeleteTimeButtonClick} data-item-id={item.schedule_id}>Remove</Button></td>
                </tr>
              )}
              <tr className="paycheck-row-total">
                  <td colSpan={5}>Total:</td>
                  <td className="currency-cell">${this.state.myPay.total}</td>
              </tr>
            </tbody>
          </table>
        );
      }

      onDeleteTimeButtonClick(e) {
          let scheduleId = e.currentTarget.dataset.itemId;
          
            if (window.confirm("You are about to remove a time. Are you sure?")) {
                const self = this;
                self.setState({ event: "beginDeleteItem" });
            
                const transport = Utils.createApiClient();
            
                transport.delete('/schedules/' + scheduleId + "/")
                .then(function (response: any) {
                    self.fetchData();
                })
                .catch(function (error: any) {
                    console.error(error);
                    self.setState({ event: "failDeleteItem" });
                }) 
            }
      }
}

export interface PayCheckItem {
    user_id: number;
    schedule_id: number;
    date: string;
    timeIn: string;
    timeOut: string;
    hours: number;
    base_rate: number;
    total: number;
}

export interface PayCheck {
    total: number;
    email: string;
}

export default connect()(MyPay);