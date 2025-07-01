import SiteHeader from "./components/SiteHeader";
import UserInput from "./components/UserInput";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {

  const [investmentFields, setInvestmentFields] = useState({
    initialInvestment: 15000,
    annualInvestment: 1500,
    expectedReturns: 6,
    duration: 10
  });

  function handleChangeOnInvestmentFields(identifier, newValue) {
    setInvestmentFields((prevValue) => {
      return {
        ...prevValue,
        [identifier]: newValue
      }
    });
  }

  return (
    <>
      <SiteHeader title="Investment Course" />
      <UserInput>
        <div className="input-group">
          <InputField id='initialInvestment' label='Initial Investment' value={investmentFields.initialInvestment} handleChange={handleChangeOnInvestmentFields} />
          <InputField id='annualInvestment' label='Annual Investment' value={investmentFields.annualInvestment} handleChange={handleChangeOnInvestmentFields} />
        </div>
        <div className="input-group">
          <InputField id='expectedReturns' label='Expected Investment' value={investmentFields.expectedReturns} handleChange={handleChangeOnInvestmentFields} />
          <InputField id='duration' label='Duration' value={investmentFields.duration} handleChange={handleChangeOnInvestmentFields} />
        </div>
      </UserInput>
    </>
  )
}

export default App
