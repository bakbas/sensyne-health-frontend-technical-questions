import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TimerControl from "./timerControl";

const styles = {
    "@keyframes alert": {
        "0%": {
            backgroundColor: "red",
        },
        "100%": {
            backgroundColor: "white",
        },
    },
    container: {
        paddingTop: 48,
        height: "100%",
    },
    alert: {
        animation: "$alert 1s infinite",
    },
};

const QuestionFour = () => {
    const [time, setTime] = useState(0);
    const { classes } = this.props;

    const timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
        } else {
            setTime(Number(time) - 1);
        }
    }, 1000);

    return (
        <div
            className={`${classes.container} ${
                time === 0 ? classes.alert : ""
            }`}
        >
            <TimerControl setTime={setTime} />
            <Typography variant="h2">{time}</Typography>
        </div>
    );
};

export default withStyles(styles)(QuestionFour);
