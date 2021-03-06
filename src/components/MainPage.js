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
import RegisHeader from "./RegisHeader";
import {Button, Typography} from "@mui/material";


const MainPage = ({ prevStep, nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return(
        <>
        <style>
            {`
            .btn-flat {
            background-color: #d31145;
            color: white;
            }
            `}
        </style>
        <div className="appMobile">
            <RegisHeader/>
            <div className="appHeader">
                <div className="earthDiv">
                    <img src={earth} className="mobileAppLogo" alt="logo" />
                </div>
                <div className="titleTextDiv">
                    <div className="innerTextDiv">
                        <Typography variant={"h4"}>
                            Cool-16 Pledge!
                        </Typography>
                        <Typography>
                            Take the Cool 16 Pledge to help protect our environment
                        </Typography>
                    </div>
                </div>
                <div className="buttons">

                    <Button variant="contained" onClick={Continue} size="large">Take the Pledge</Button>
                    <div className="shareButtons">
                        <TwitterShareButton className="shareButton" url={"https://regis.org"}><TwitterIcon size={48} round={true}/></TwitterShareButton>
                        <FacebookShareButton className="shareButton" url={"https://regis.org"}><FacebookIcon size={48} round={true}/></FacebookShareButton>
                        <WhatsappShareButton className="shareButton" url={"https://regis.org"}><WhatsappIcon size={48} round={true}/></WhatsappShareButton>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage;