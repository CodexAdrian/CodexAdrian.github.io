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

export default class Pledge extends Component {

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
        const { step } = this.state;
        this.setState({step: step - 1});
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }



    render() {
        const { step } = this.state;
        const { email, firstName, lastName, country, profession, pledgeLevel } = this.state;
        const values = { email, firstName, lastName, country, profession, pledgeLevel }

        switch (step) {
            case 1: return(
                <MainPage
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
            )
            case 2: return (
                <UserDetails
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                />
            )
            default: return(
                <MainPage
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                />
            )
        }
    }
}