import earth from './globe.png';
import regis from './Wordmark.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobilePledge from "./components/MobilePledge";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {red} from "@mui/material/colors";


function App() {
    const theme = createTheme({
        palette: {
            primary: {
              main: '#d31145',
            },
        }
    })

    if(window.innerHeight > window.innerWidth) {
        return(
            <ThemeProvider theme={theme}>
                <MobilePledge/>
            </ThemeProvider>
        );
    } else {
        return(
            <div className="App">

            </div>
        );
    }
}

export default App;
