import investmentCourseLogo from '../assets/investment-calculator-logo.png';

export default function SiteHeader({ title = 'Investment Course' }) {
  return <header id="header">
    <img src={investmentCourseLogo} alt="Invetment course logo." />
    <h1>{title}</h1>
  </header>
}