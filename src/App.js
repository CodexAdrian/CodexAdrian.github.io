import earth from './globe.png';
import regis from './Wordmark.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pledge from "./components/Pledge";


function App() {
    if(window.innerHeight > window.innerWidth) {
        return(
            <Pledge/>
        );
    } else {
        return(
            <div className="App">
                <header className="regisHeader">
                    <img src={regis} alt="regis logo" className="regisLogo"/>
                </header>
                <div className="appHeader">
                    <div className="titleTextDiv">
                        <div className="innerTextDiv">
                            <p className="titleText">Pledge to the <strong>Cool-16 Pledge!</strong></p>
                            <p>Pledging to the Cool 16 pledge web</p>
                        </div>
                    </div>
                    <div className="earthDiv">
                        <img src={earth} className="App-logo" alt="logo"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
