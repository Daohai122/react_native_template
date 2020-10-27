import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const index = forwardRef((props, ref) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDate, setSelectDate] = useState(props.date)
    useImperativeHandle(
        ref,
        () => ({
            showDatePicker() {
                setDatePickerVisibility(true);
            }
        })
    )

    useEffect(() => {
        if(props.date != selectDate) {
            setSelectDate(props.date);
        }
    }, [props.date]);

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectDate(date);
        props.selectDate(date);
        hideDatePicker();
    };
    return (
        <DateTimePickerModal
            maximumDate={new Date()}
            isVisible={isDatePickerVisible}
            mode= {props.mode??"date"}
            date={selectDate}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
      />
    )
 });
 export default index;