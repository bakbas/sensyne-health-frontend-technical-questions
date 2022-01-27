import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    input: {
        width: 300,
    },
}));

const TimerControl = ({ setTime }) => {
    const classes = useStyles();

    const onChangeHandler = (event) => {
        setTime(event.target);
    };

    return (
        <TextField
            className={classes.input}
            label="Enter seconds to count down"
            variant="outlined"
            onChange={onChangeHandler}
            type="number"
        />
    );
};

export default TimerControl;
