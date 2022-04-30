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
                    <form onSubmit={Continue}>
                    <TextField id="firstName" label="First Name" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('firstName')} defaultValue={values.firstName} required={true}/>
                    <TextField id="lastName" label="Last Name" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('lastName')} defaultValue={values.lastName} required={true}/>
                    <TextField id="email" label="Email" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('email')} defaultValue={values.email} required={true}/>
                    <TextField id="country" label="Country" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('country')} defaultValue={values.country} required={true} />
                    <TextField id="occupation" label="Occupation" variant="standard" fullWidth={true} className="textBox" onChange={handleChange('occupation')} defaultValue={values.occupation} />
                    <Button variant={"contained"} sx={{width:"min-content", whiteSpace:"nowrap", marginLeft: "auto", marginRight: "auto", marginTop:"auto"}} size={"large"} type={"submit"}>Next</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDetails;