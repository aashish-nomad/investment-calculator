import SiteHeader from "./components/SiteHeader";
import UserInput from "./components/UserInput";
import InputField from "./components/InputField";
import { useState } from "react";
import Results from "./components/Results";

function App() {

  const [investmentFields, setInvestmentFields] = useState({
    initialInvestment: 15000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10
  });

  function handleChangeOnInvestmentFields(identifier, newValue) {
    setInvestmentFields((prevValue) => {
      return {
        ...prevValue,
        [identifier]: +newValue // Adding this plus will convert string type to integer type.
      }
    });
  }

  return (
    <>
      <SiteHeader title="Investment App" />
      <UserInput>
        <div className="input-group">
          <InputField id='initialInvestment' label='Initial Investment' value={investmentFields.initialInvestment} handleChange={handleChangeOnInvestmentFields} />
          <InputField id='annualInvestment' label='Annual Investment' value={investmentFields.annualInvestment} handleChange={handleChangeOnInvestmentFields} />
        </div>
        <div className="input-group">
          <InputField id='expectedReturn' label='Expected Returns' value={investmentFields.expectedReturn} handleChange={handleChangeOnInvestmentFields} />
          <InputField id='duration' label='Duration' value={investmentFields.duration} handleChange={handleChangeOnInvestmentFields} />
        </div>
      </UserInput>
      <Results input={investmentFields} />
    </>
  )
}

export default App
