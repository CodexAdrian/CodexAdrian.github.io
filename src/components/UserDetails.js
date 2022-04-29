import RegisHeader from "./RegisHeader";
import {Alert, Button, Fab, LinearProgress, TextField, ThemeProvider, Zoom} from "@mui/material";

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
                <LinearProgress variant="determinate" value={16}/>
                <div className="pageContents">
                    <p className={"subTitleText"}>Personal Info</p>
                    <TextField id="filled-basic" label="First Name" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('firstName')}/>
                    <TextField id="filled-basic" label="Last Name" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('lastName')}/>
                    <TextField id="filled-basic" label="Email" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('email')}/>
                    <TextField id="filled-basic" label="Country" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('country')}/>
                    <TextField id="filled-basic" label="Occupation" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('profession')}/>
                    <Button variant={"contained"} sx={{width:"min-content", whiteSpace:"nowrap", marginLeft: "auto", marginRight: "auto", marginTop:"auto"}} size={"large"} onClick={Continue}>Next</Button>
                </div>
            </div>
        </>
    )
}

export default UserDetails;