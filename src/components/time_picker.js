import React, { Component } from "react"
import TimePicker from 'react-times';
import 'react-times/css/material/default.css';


const getFormattedTime = (hour, min) => {
    const h = Number(hour);
    const m = Number(min);
    const str = [(h > 9 ? '' : '0') + h,
    (m > 9 ? '' : '0') + m].join(':');
    console.log(str);
    return str;
}

class CTimePicker extends Component {
    
    constructor(){
        super();
        this.getTime = this.getTime.bind(this);
        
        const now = new Date();
        
        this.state = {
            selTime: getFormattedTime(now.getUTCHours(), now.getUTCMinutes())
        }
    }

    handleChange = time => {
        this.setState({
            selTime: time
        });
    };

    onTimeChange(options) {
        this.setState({
            selTime: getFormattedTime(options.hour, options.minute)
        });
    }

    getTime(){
        return this.state.selTime;
    }

    onFocusChange(focusStatue) {
        // do something
        console.log(focusStatue);
    }

    render() {
        return (
            <TimePicker
                minuteStep={1}
                timeFormat='HH:MM'
                timezone="Europe/London"
                time={this.state.selTime}
                withoutIcon // whether to has time icon on button, default false
                onFocusChange={this.onFocusChange.bind(this)}
                onTimeChange={this.onTimeChange.bind(this)}
                className="form-input"
            />
        );
    }
}

export default CTimePicker;