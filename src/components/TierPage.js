import RegisHeader from "./RegisHeader";
import {Button} from "@mui/material";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import NoFoodIcon from '@mui/icons-material/NoFood';
import CachedIcon from '@mui/icons-material/Cached';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import TierCard from "./TierCard";

const TierPage = ({ prevStep, nextStep, handleChange, values}) => {
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
            <div className="pageContents">
                <TierCard
                    title={"Food"}
                    description={"If leftovers are inevitable, make a meal out of the leftovers!"}
                    color={"#a31000"}
                    textColor={"#FFFFFF"}
                >
                    <NoFoodIcon sx={{fontSize: 70, padding: 1}}/>
                </TierCard>
                <TierCard
                    title={"Public Transportation"}
                    description={"Take the bus or the subway instead of driving at least twice a week."}
                    color={"#006fa3"}
                    textColor={"#FFFFFF"}
                >
                    <DirectionsBusIcon sx={{fontSize: 70, padding: 1}}/>
                </TierCard>
                <TierCard
                    title={"Waste Management"}
                    description={"Pay may more attention to how you're recycling by throwing out waste correctly."}
                    color={"#e89f00"}
                >
                    <CachedIcon sx={{fontSize: 70, padding: 1}}/>
                </TierCard>
                <TierCard
                    title={"Energy Savings"}
                    description={"Turn off the lights when you exit a room to conserve energy"}
                    color={"#006622"}
                    textColor={"#FFFFFF"}
                >
                    <EnergySavingsLeafIcon sx={{fontSize: 70, padding: 1}}/>
                </TierCard>
                <Button variant={"contained"} style={{position:"absolute", bottom: 40, left:"25%"}} size={"large"} onClick={Continue}>Pledge to Tier 1</Button>
            </div>
        </div>
    )
}

export default TierPage;