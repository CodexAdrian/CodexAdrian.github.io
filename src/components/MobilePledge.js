import {Component} from "react";
import regis from "../Wordmark.png";
import earth from "../globe.png";
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import MainPage from "./MainPage";
import UserDetails from "./UserDetails";
import TierPage from "./TierPage";
import CachedIcon from "@mui/icons-material/Cached";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import NoFoodIcon from "@mui/icons-material/NoFood";

export default class MobilePledge extends Component {

    state = {
        step: 1,
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        profession: "",
        pledgeLevel: 0,
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step - 1});
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step + 1});
    }

    incrementPledgeLevel = () => {
        const {pledgeLevel} = this.state;
        this.setState({pledgeLevel: pledgeLevel + 1});
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const {step} = this.state;
        const {email, firstName, lastName, country, profession, pledgeLevel} = this.state;
        const values = {email, firstName, lastName, country, profession, pledgeLevel}

        switch (step) {
            case 1:
                return (
                    <MainPage
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <TierPage
                        tier={1}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={32}
                        wasteIcon={<CachedIcon sx={{fontSize: 70, padding: 1}}/>}
                        wasteTitle={"Waste Management"}
                        wasteDescription={"Pay more attention to how you're recycling by throwing out waste correctly."}
                        energyIcon={<EnergySavingsLeafIcon sx={{fontSize: 70, padding: 1}}/>}
                        energyTitle={"Energy Savings"}
                        energyDescription={"Turn off the lights when you exit a room to conserve energy"}
                        transportationIcon={<DirectionsBusIcon sx={{fontSize: 70, padding: 1}}/>}
                        transportationTitle={"Public Transportation"}
                        transportationDescription={"Take the bus or the subway instead of driving at least twice a week."}
                        foodIcon={<NoFoodIcon sx={{fontSize: 70, padding: 1}}/>}
                        foodTitle={"Food"}
                        foodDescription={"If leftovers are inevitable, make a meal out of the leftovers!"}
                        hasNoThank={false}
                    />
                )
            case 4:
                return (
                    <TierPage
                        tier={2}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={48}
                        wasteIcon={<CachedIcon sx={{fontSize: 70, padding: 1}}/>}
                        wasteTitle={"Waste Management"}
                        wasteDescription={"Pay more attention to how you're recycling by throwing out waste correctly."}
                        energyIcon={<EnergySavingsLeafIcon sx={{fontSize: 70, padding: 1}}/>}
                        energyTitle={"Energy Savings"}
                        energyDescription={"Turn off the lights when you exit a room to conserve energy"}
                        transportationIcon={<DirectionsBusIcon sx={{fontSize: 70, padding: 1}}/>}
                        transportationTitle={"Public Transportation"}
                        transportationDescription={"Take the bus or the subway instead of driving at least twice a week."}
                        foodIcon={<NoFoodIcon sx={{fontSize: 70, padding: 1}}/>}
                        foodTitle={"Food"}
                        foodDescription={"If leftovers are inevitable, make a meal out of the leftovers!"}
                        hasNoThank={true}
                    />
                )
            case 5:
                return (
                    <TierPage
                        tier={3}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={64}
                        wasteIcon={<CachedIcon sx={{fontSize: 70, padding: 1}}/>}
                        wasteTitle={"Waste Management"}
                        wasteDescription={"Pay more attention to how you're recycling by throwing out waste correctly."}
                        energyIcon={<EnergySavingsLeafIcon sx={{fontSize: 70, padding: 1}}/>}
                        energyTitle={"Energy Savings"}
                        energyDescription={"Turn off the lights when you exit a room to conserve energy"}
                        transportationIcon={<DirectionsBusIcon sx={{fontSize: 70, padding: 1}}/>}
                        transportationTitle={"Public Transportation"}
                        transportationDescription={"Take the bus or the subway instead of driving at least twice a week."}
                        foodIcon={<NoFoodIcon sx={{fontSize: 70, padding: 1}}/>}
                        foodTitle={"Food"}
                        foodDescription={"If leftovers are inevitable, make a meal out of the leftovers!"}
                        hasNoThank={true}
                    />
                )
            case 6:
                return (
                    <TierPage
                        tier={4}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={80}
                        wasteIcon={<CachedIcon sx={{fontSize: 70, padding: 1}}/>}
                        wasteTitle={"Waste Management"}
                        wasteDescription={"Pay more attention to how you're recycling by throwing out waste correctly."}
                        energyIcon={<EnergySavingsLeafIcon sx={{fontSize: 70, padding: 1}}/>}
                        energyTitle={"Energy Savings"}
                        energyDescription={"Turn off the lights when you exit a room to conserve energy"}
                        transportationIcon={<DirectionsBusIcon sx={{fontSize: 70, padding: 1}}/>}
                        transportationTitle={"Public Transportation"}
                        transportationDescription={"Take the bus or the subway instead of driving at least twice a week."}
                        foodIcon={<NoFoodIcon sx={{fontSize: 70, padding: 1}}/>}
                        foodTitle={"Food"}
                        foodDescription={"If leftovers are inevitable, make a meal out of the leftovers!"}
                        hasNoThank={true}
                    />
                )
            case 7:
                return (
                    <TierPage
                        tier={5}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={96}
                        wasteIcon={<CachedIcon sx={{fontSize: 70, padding: 1}}/>}
                        wasteTitle={"Waste Management"}
                        wasteDescription={"Pay more attention to how you're recycling by throwing out waste correctly."}
                        energyIcon={<EnergySavingsLeafIcon sx={{fontSize: 70, padding: 1}}/>}
                        energyTitle={"Energy Savings"}
                        energyDescription={"Turn off the lights when you exit a room to conserve energy"}
                        transportationIcon={<DirectionsBusIcon sx={{fontSize: 70, padding: 1}}/>}
                        transportationTitle={"Public Transportation"}
                        transportationDescription={"Take the bus or the subway instead of driving at least twice a week."}
                        foodIcon={<NoFoodIcon sx={{fontSize: 70, padding: 1}}/>}
                        foodTitle={"Food"}
                        foodDescription={"If leftovers are inevitable, make a meal out of the leftovers!"}
                        hasNoThank={true}
                    />
                )
            default:
                return (
                    <MainPage
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )
        }
    }
}