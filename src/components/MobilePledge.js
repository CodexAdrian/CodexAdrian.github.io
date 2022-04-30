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
import Confirmation from "./Confirmation";
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import PhonelinkOffIcon from '@mui/icons-material/PhonelinkOff';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AirIcon from '@mui/icons-material/Air';
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import CachedIcon from "@mui/icons-material/Cached";
import FlatwareIcon from '@mui/icons-material/Flatware';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SetMealIcon from '@mui/icons-material/SetMeal';
import BlockIcon from '@mui/icons-material/Block';
import NoFoodIcon from "@mui/icons-material/NoFood";
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import GrassIcon from '@mui/icons-material/Grass';
import ParkIcon from '@mui/icons-material/Park';
import ForestIcon from '@mui/icons-material/Forest';
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

export default class MobilePledge extends Component {

    state = {
        step: 1,
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        occupation: "",
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

    skipToEnd = () => {
        this.setState({step: 8});
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
        const {email, firstName, lastName, country, occupation, pledgeLevel} = this.state;
        const values = {email, firstName, lastName, country, occupation, pledgeLevel};
        const iconSx = {fontSize: 70, padding: 1};

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
                        wasteIcon={<CachedIcon sx={iconSx}/>}
                        wasteTitle={"Watch your Waste!"}
                        wasteDescription={"Pay more attention to how you're recycling by throwing out waste correctly."}
                        energyIcon={<FlashlightOffIcon sx={iconSx}/>}
                        energyTitle={"Dim the Lights"}
                        energyDescription={"Turn off the lights when you exit a room to conserve energy"}
                        transportationIcon={<DirectionsBusIcon sx={iconSx}/>}
                        transportationTitle={"Public Transportation"}
                        transportationDescription={"Take the bus or the subway instead of driving at least twice a week."}
                        foodIcon={<NoFoodIcon sx={iconSx}/>}
                        foodTitle={"\"Clear Your Plate\" Week"}
                        foodDescription={"If leftovers are inevitable, make a meal out of the leftovers!"}
                        hasNoThanks={false}
                    />
                )
            case 4:
                return (
                    <TierPage
                        tier={2}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        skipToEnd={this.skipToEnd}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={48}
                        wasteIcon={<FlatwareIcon sx={iconSx}/>}
                        wasteTitle={"Cut out the Plastic"}
                        wasteDescription={"Lessen your use of plastic utensils or use reusable and/or biodegradable options instead."}
                        energyIcon={<PhonelinkOffIcon sx={iconSx}/>}
                        energyTitle={"Unplugged"}
                        energyDescription={"Unplug your chargers to all your devices when not in use."}
                        transportationIcon={<DirectionsBikeIcon sx={iconSx}/>}
                        transportationTitle={"Get some Exercise"}
                        transportationDescription={"Bike or walk instead of driving to your locations at least twice a week."}
                        foodIcon={<TakeoutDiningIcon sx={iconSx}/>}
                        foodTitle={"\"Takeout-Free\" Week"}
                        foodDescription={"Avoid getting takeout for 1 week out of the month."}
                        hasNoThanks={true}
                    />
                )
            case 5:
                return (
                    <TierPage
                        tier={3}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        skipToEnd={this.skipToEnd}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={64}
                        wasteIcon={<CheckroomIcon sx={iconSx}/>}
                        wasteTitle={"Go Thrift Shopping!"}
                        wasteDescription={"Recycle used clothes and prevent them from going into landfills!"}
                        energyIcon={<LightbulbIcon sx={iconSx}/>}
                        energyTitle={"Enlighten the Lights"}
                        energyDescription={"Retrofit your house to use all High Efficiency LED light bulbs."}
                        transportationIcon={<AirportShuttleIcon sx={iconSx}/>}
                        transportationTitle={"Catch a Ride"}
                        transportationDescription={"Carpool instead of driving to your location at least twice a week"}
                        foodIcon={<GrassIcon sx={iconSx}/>}
                        foodTitle={"\"Plant-based\" Weekend"}
                        foodDescription={"Replace a majority of your food intake with plant-based alternatives"}
                        hasNoThanks={true}
                    />
                )
            case 6:
                return (
                    <TierPage
                        tier={4}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        skipToEnd={this.skipToEnd}
                        incrementPledgeLevel={this.incrementPledgeLevel}
                        progressBar={80}
                        wasteIcon={<SetMealIcon sx={iconSx}/>}
                        wasteTitle={"Waste Management"}
                        wasteDescription={"Start composting! Every little bit counts"}
                        energyIcon={<AirIcon sx={iconSx}/>}
                        energyTitle={"Take a \"Chill-Pill\""}
                        energyDescription={"Restrict usage of A/C during the summer to at max 4 hours per day, and reduce gas heater usage in the winter"}
                        transportationIcon={<CarCrashIcon sx={iconSx}/>}
                        transportationTitle={"No More Cars!"}
                        transportationDescription={"Cut driving out of your routine in any ways you can"}
                        foodIcon={<ParkIcon sx={iconSx}/>}
                        foodTitle={"\"Meatless\" Weekend"}
                        foodDescription={"Exclude all meat, poultry or fish products on your weekends (dairy and eggs okay)"}
                        hasNoThanks={true}
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
                        wasteIcon={<BlockIcon sx={iconSx}/>}
                        wasteTitle={"Zero Waste"}
                        wasteDescription={"Completely eliminate all waste from your lifestyle"}
                        energyIcon={<EnergySavingsLeafIcon sx={iconSx}/>}
                        energyTitle={"Peak Efficiency"}
                        energyDescription={"If you must drive, drive in ECO mode to reduce your car's carbon emissions and improve fuel efficiency"}
                        transportationIcon={<DirectionsWalkIcon sx={iconSx}/>}
                        transportationTitle={"'Ey, Im walkin' here!"}
                        transportationDescription={"Walk wherever possible instead of using cars or public transport"}
                        foodIcon={<ForestIcon sx={iconSx}/>}
                        foodTitle={"Literally become Vegan"}
                        foodDescription={"Become a vegan! Exclude all meat, poultry, fish, eggs and dairy products from your diet entirely."}
                        hasNoThanks={true}
                    />
                )
            case 8:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            default:
                return (
                    <MainPage
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
        }
    }
}