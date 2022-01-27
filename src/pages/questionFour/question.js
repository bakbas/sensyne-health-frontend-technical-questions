import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import solution from "./images/solution.webm";

const question = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Question Four
            </Typography>
            <Typography variant="h5" gutterBottom>
                Timer handling problem
            </Typography>
            <Typography variant="body1" gutterBottom>
                There's a problem with the USS Enterprise NCC-1701 alarm system.
                The captain sets the countdown and the alarm should work after
                the countdown is complete. Countdown should not run immediately
                while the captain is typing the time, it should wait for 1
                second
            </Typography>
            <Typography variant="body1" gutterBottom>
                Your task if you choose to accept it, is to resolve this bug
                (displayed on the right and in the console) .
            </Typography>
            <Typography variant="body1" gutterBottom>
                As with all the questions in this tech test, you may or may not
                wish to refactor some of the code.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Below is what the final solution should look like.
            </Typography>
            <CardMedia
                component="video"
                image={solution}
                style={{
                    width: "100%",
                    height: 500,
                }}
                title="The Solution"
                autoPlay
                loop
                muted
            />
        </div>
    );
};

export default question;
