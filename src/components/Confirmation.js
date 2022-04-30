import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RegisHeader from "./RegisHeader";
import {Button, LinearProgress} from "@mui/material";

const Confirmation = ({prevStep, nextStep, values}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Revert = e => {
        e.preventDefault();
        prevStep();
    }

    return(
        <div>
            <RegisHeader/>
            <LinearProgress variant="determinate" value={100}/>
                <div className="pageContents">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Personal Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Name: {values.lastName != null && values.firstName != null ? values.lastName + ", " + values.firstName : "Undefined"}
                        </Typography>
                        <Typography>
                            Email: {values.email != null ? values.email : "Undefined"}
                        </Typography>
                        <Typography>
                            Country: {values.country != null ? values.country : "Undefined"}
                        </Typography>
                        <Typography>
                            Occupation: {values.occupation != null ? values.occupation : "Undefined"}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Pledge Level</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Pledge Level {values.pledgeLevel != null ? values.pledgeLevel : "Undefined"}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Newsletter: Coming Soon</Typography>
                    </AccordionSummary>
                </Accordion>
                <Button variant={"contained"} sx={{width:"min-content", whiteSpace:"nowrap", marginLeft: "auto", marginRight: "auto", marginTop:"auto"}} size={"large"} onClick={Continue}>Next</Button>
            </div>
        </div>
    )
}

export default Confirmation;