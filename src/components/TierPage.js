import RegisHeader from "./RegisHeader";

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
        </div>
    )
}

export default TierPage;