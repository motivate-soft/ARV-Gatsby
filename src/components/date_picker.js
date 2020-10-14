import React, { Component } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const getFormattedDate = (date) => {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [(mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
    date.getFullYear()
    ].join('/');
}

class CDatePicker extends Component {
    state = {
        selDate: null
    };

    constructor(){
        super();
        this.getDate = this.getDate.bind(this);
    }

    handleChange = date => {
        this.setState({
            selDate: date
        });
    };

    getDate(){
        return getFormattedDate(this.state.selDate);
    }

    render() {
        return (
            <DatePicker
                selected={this.state.selDate}
                onChange={this.handleChange}
                minDate={new Date()}
                className="form-input w-full"
                placeholderText="PICK-UP DATE"
                required
            />
        );
    }
}

export default CDatePicker;