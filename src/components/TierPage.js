import RegisHeader from "./RegisHeader";
import {Button, LinearProgress} from "@mui/material";
import TierCard from "./TierCard";

const TierPage = ({
                      prevStep,
                      nextStep,
                      incrementPledgeLevel,
                      progressBar,
                      tier,
                      wasteIcon,
                      wasteTitle,
                      wasteDescription,
                      energyIcon,
                      energyTitle,
                      energyDescription,
                      transportationIcon,
                      transportationTitle,
                      transportationDescription,
                      foodIcon,
                      foodTitle,
                      foodDescription,
                      hasNoThanks
                  }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
        incrementPledgeLevel();
    }

    const Revert = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div>
            <RegisHeader/>
            <LinearProgress variant="determinate" value={progressBar}/>
            <div className="pageContents">
                <TierCard
                    title={wasteTitle}
                    description={wasteDescription}
                    color={"#ff821a"}
                    textColor={"white"}
                >
                    {wasteIcon}
                </TierCard>
                <TierCard
                    title={energyTitle}
                    description={energyDescription}
                    color={"#69a115"}
                    textColor={"white"}
                >
                    {energyIcon}
                </TierCard>
                <TierCard
                    title={transportationTitle}
                    description={transportationDescription}
                    color={"#1569a4"}
                    textColor={"white"}
                >
                    {transportationIcon}
                </TierCard>
                <TierCard
                    title={foodTitle}
                    description={foodDescription}
                    color={"#e73352"}
                    textColor={"white"}
                >
                    {foodIcon}
                </TierCard>
                <Button variant={"contained"} sx={{
                    width: "min-content",
                    whiteSpace: "nowrap",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto"
                }} size={"large"} onClick={Continue}>Pledge to Tier {tier}</Button>
                <div style={{display: "flex"}}>
                    <Button sx={{width: "min-content", whiteSpace: "nowrap", marginLeft: "auto", marginTop: 1}}
                            size={"large"} onClick={Revert}>Back</Button>
                    {hasNoThanks ? (<Button variant={"text"} sx={{
                        width: "min-content",
                        whiteSpace: "nowrap",
                        marginRight: "auto",
                        marginTop: 1
                    }} size={"large"} onClick={Continue}>No Thanks</Button>) : (<p style={{marginRight: "auto"}}></p>)}
                </div>
            </div>
        </div>
    )
}

export default TierPage;