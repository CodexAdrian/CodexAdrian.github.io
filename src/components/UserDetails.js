import RegisHeader from "./RegisHeader";
import {Alert, Fab, LinearProgress, TextField, ThemeProvider, Zoom} from "@mui/material";

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
                    <Alert severity={"error"}></Alert>
                    <TextField id="filled-basic" label="First Name" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('firstName')}/>
                    <TextField id="filled-basic" label="Last Name" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('lastName')}/>
                    <TextField id="filled-basic" label="Email" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('email')}/>
                    <TextField id="filled-basic" label="Country" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('country')}/>
                    <TextField id="filled-basic" label="Occupation" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('profession')}/>
                    <Fab sx={sx} color={"primary"} onClick={Continue}/>
                </div>
            </div>
        </>
    )
}

export default UserDetails;