import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    gender: "",
    dob: "",
    nationality: "",
    idNumber: ""
  });

  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      phone: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
      gender: "",
      dob: "",
      nationality: "",
      idNumber: ""
    });
    setShowData(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required /><br />

          <label>Phone-Number:</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} required /><br />

          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required /><br />

          <label>Address1:</label>
          <input type="text" name="address1" value={form.address1} onChange={handleChange} required /><br />

          <label>Address2:</label>
          <input type="text" name="address2" value={form.address2} onChange={handleChange} /><br />

          <label>City:</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} required /><br />

          <label>State:</label>
          <input type="text" name="state" value={form.state} onChange={handleChange} required /><br />

          <label>Pincode:</label>
          <input type="text" name="pincode" value={form.pincode} onChange={handleChange} required /><br />

          <label>Gender:</label>
          <input type="text" name="gender" value={form.gender} onChange={handleChange} required /><br />

          <label>D.O.B:</label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} required /><br />

          <label>Nationality:</label>
          <input type="text" name="nationality" value={form.nationality} onChange={handleChange} required
          /><br />

          <label>Id Number:</label>
          <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} required /><br />

          <button type="submit">Submit</button>
          <button type="delete" onClick={handleClearAll} style={{ marginLeft: "8px" }}>Delete</button>
        </div>
      </form>

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid", padding: "8px" }}>NAME</th>
            <th style={{ border: "1px solid", padding: "8px" }}>PHONE</th>
            <th style={{ border: "1px solid", padding: "8px" }}>E-MAIL</th>
            <th style={{ border: "1px solid", padding: "8px" }}>ADDRESS1</th>
            <th style={{ border: "1px solid", padding: "8px" }}>ADDRESS2</th>
            <th style={{ border: "1px solid", padding: "8px" }}>CITY</th>
            <th style={{ border: "1px solid", padding: "8px" }}>STATE</th>
            <th style={{ border: "1px solid", padding: "8px" }}>PINCODE</th>
            <th style={{ border: "1px solid", padding: "8px" }}>GENDER</th>
            <th style={{ border: "1px solid", padding: "8px" }}>D.O.B</th>
            <th style={{ border: "1px solid", padding: "8px" }}>NATIONALITY</th>
            <th style={{ border: "1px solid", padding: "8px" }}>ID-NUMBER</th>



          </tr>
        </thead>
        <tbody>

          <tr>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.name}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.phone}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.email}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.address1}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.address2}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.city}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.state}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.pincode}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.gender}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.dob}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.nationality}</td>
            <td style={{ border: "1px solid", padding: "50px" }}>{form.idNumber}</td>


          </tr>

        </tbody>
      </table>


    </>
  );
}

export default App;