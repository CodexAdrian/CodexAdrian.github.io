import './App.css';
import MobilePledge from "./components/MobilePledge";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useEffect, useState} from "react";


function App() {

    const[width, setWidth] = useState(0);
    const[height, setHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", ev => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        })
    }, [])

    const theme = createTheme({
        palette: {
            primary: {
              main: '#d31145',
            },
        }
    })
    //TODO Revert back to if statement later
    return(
        <ThemeProvider theme={theme}>
            <MobilePledge/>
        </ThemeProvider>
    );
}

export default App;
