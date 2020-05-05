import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Clock extends React.PureComponent {

    beginDate = new Date();
    
    state = {
        date: new Date()
      };

    public currentTime(): Date {
        return this.state.date;
    }

    public totalTime(): string {
        // https://stackoverflow.com/questions/18623783/get-the-time-difference-between-two-datetimes
        let ms = moment(this.state.date).diff(moment(this.beginDate));
        let d = moment.duration(ms);
        return Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    }

    constructor(props: Readonly<{}>) {
        super(props);
    
        this.updateDate = this.updateDate.bind(this);
    }

    public componentDidMount() {
        setInterval(this.updateDate, 1000);
    }

    updateDate() {
        this.setState({'date': new Date()});
    }

    public render() {
        return (
            <React.Fragment>
                <div>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    <h2>Total time: {this.totalTime()}</h2>
                </div>
            </React.Fragment>
        );
    }
};

export default connect()(Clock);