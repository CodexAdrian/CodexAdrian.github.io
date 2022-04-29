import regis from "../Wordmark.png";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const TierCard = (props) => {
    const bgColor = props.color ?? "white";
    const color = props.textColor ?? "black";
    return(
        <Card sx={{display: "flex", marginTop: 1, backgroundColor: bgColor, color: color}}>
            <CardMedia sx={{alignItems: "center", display: "flex"}}>
                {props.children}
            </CardMedia>
            <CardContent>
                <Typography fontSize={"large"}>
                    {props.title}
                </Typography>
                <Typography fontSize={"small"} >
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TierCard;