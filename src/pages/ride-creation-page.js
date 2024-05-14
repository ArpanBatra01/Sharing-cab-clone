import { useState } from "react";

import ReactDOM from "react-dom/client";

function RideCreationPage() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The location you entered was: ${(pickupLocation, dropLocation)}`);
  };

  return (
    <form className="ride-form" onSubmit={handleSubmit}>
      <label>
        Select Pickup location:
        <span>
          <select
            id="location"
            name="Select pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <option value="Yamunanagar">Yamunanagar</option>
            <option value="Ambala">Ambala</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Naraingarh">Naraingarh</option>
          </select>
        </span>
      </label>

      <div>
        <label>
          Select drop location:
          <span>
            <select
              id="location"
              name="select drop location"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
            >
              <option value="Naraingarh">Naraingarh</option>
              <option value="Ambala">Ambala</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Yamunanagar">Yamunanagar</option>
            </select>
          </span>
        </label>
      </div>
      <div>
        <label>
          Select Date:
          <span>
            <input
              type="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
            />
          </span>
        </label>
      </div>
      <div>
        <label>
          Enter no. of seats:
          <span>
            <input
              type="number"
              min="1"
              max="4"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </span>
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default RideCreationPage;
