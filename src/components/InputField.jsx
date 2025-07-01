export default function InputField({ id, label, value, handleChange }) {
  return <p>
    <label htmlFor={id}>{label}</label>
    <input type="number" id={id} required value={value} onChange={(e) => handleChange(id, e.target.value)} />
  </p>
}