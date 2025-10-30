import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");
  const [contactInfo, setContactInfo] = useState("");

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);

  const handleSizeChange = (e) => setSize(e.target.value);

  const handleContactInfoChange = (e) => setContactInfo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Size: ${size}, Pepperoni: ${pepperoniIsChecked ? "Yes" : "No"}, Contact: ${contactInfo}`);
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Size</h3>
          <select id="size" value={size} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>
        <div>
          <h3>Contact Info</h3>
          <input
            type="text"
            id="contact-info"
            value={contactInfo}
            onChange={handleContactInfoChange}
            placeholder="Enter your contact information"
          />
        </div>
        <div>
          <h3>Your Selection</h3>
          <p>Size: {size}</p>
          <p>Toppings: {pepperoniIsChecked ? "Pepperoni" : "None"}</p>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;
