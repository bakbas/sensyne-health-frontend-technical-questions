import React, { Fragment, Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
const styles = {
    header: {
        fontWeight: "bold",
        display: "inline",
        marginRight: 4,
    },
    label: {
        display: "inline",
    },
};

class questionListItem extends Component {
    render() {
        const { classes, item, divider } = this.props;
        const { icon, name, species, id, description } = item;
        const Icon = icon;
        return (
            <Fragment>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar>
                            <Icon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        disableTypography
                        primary={`${name}: ${species ? species : "Other"}`}
                        secondary={
                            <Fragment>
                                <div>
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.header}
                                    >
                                        Description:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.label}
                                    >
                                        {description}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.header}
                                    >
                                        Guid:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.label}
                                    >
                                        {id ? id : "ERROR "}
                                    </Typography>
                                </div>
                            </Fragment>
                        }
                    />
                </ListItem>
                {divider && <Divider variant="middle" />}
            </Fragment>
        );
    }
}

export default withStyles(styles)(questionListItem);
