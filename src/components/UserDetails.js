import RegisHeader from "./RegisHeader";
import {ProgressBar, Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import {Fab, ThemeProvider, Zoom} from "@mui/material";
import {Next} from "react-bootstrap/PageItem";

const UserDetails = (nextStep, handleChange, values) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const sx = {
        position: "absolute",
        bottom: 16,
        right: 16
    }
    return(
        <>
            <style>
                {`
                 .textBox {
                    margin-bottom: 2%;
                 }
                `}
            </style>
            <div>
                <RegisHeader/>
                <ProgressBar variant={"success"} now={25}></ProgressBar>
                <div className="pageContents">
                    <p className={"subTitleText"}>Personal Info</p>
                    <TextField id="filled-basic" label="First Name" variant="standard" fullWidth={true} className="textBox"/>
                    <TextField id="filled-basic" label="Last Name" variant="standard" fullWidth={true} className="textBox"/>
                    <TextField id="filled-basic" label="Email" variant="standard" fullWidth={true} className="textBox" />
                </div>
                <Fab color={"primary"} sx={sx} onClick={Continue}>></Fab>
            </div>
        </>
    )
}

export default UserDetails;