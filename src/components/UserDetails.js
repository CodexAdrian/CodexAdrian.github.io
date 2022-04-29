import RegisHeader from "./RegisHeader";
import {Fab, LinearProgress, TextField, ThemeProvider, Zoom} from "@mui/material";

const UserDetails = ({nextStep, handleChange, values}) => {
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
                <LinearProgress variant="determinate" value={20}/>
                <div className="pageContents">
                    <p className={"subTitleText"}>Personal Info</p>
                    <TextField id="filled-basic" label="First Name" variant="standard" fullWidth={true} className="textBox"/>
                    <TextField id="filled-basic" label="Last Name" variant="standard" fullWidth={true} className="textBox"/>
                    <TextField id="filled-basic" label="Email" variant="standard" fullWidth={true} className="textBox" />
                </div>
            </div>
        </>
    )
}

export default UserDetails;