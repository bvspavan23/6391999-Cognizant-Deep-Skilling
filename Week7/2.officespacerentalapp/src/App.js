import React from "react";

function App() {
  const heading = <h1>Office Space Rental App</h1>;
  const imageUrl = "https://as2.ftcdn.net/v2/jpg/03/84/55/29/1000_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg";
  const officeImage = <img src={imageUrl} alt="Office Space" height={200} width={300}/>;

  const officeList = [
    { name: "office1", rent: 55000, address: "chennai" },
    { name: "office2", rent: 75000, address: "bangalore" },
    { name: "office3", rent: 60000, address: "hyderabad" },
  ];

  const officeItems = officeList.map((item, index) => (
    <div key={index} style={{ marginBottom: "20px" }}>
      <h2>{item.name}</h2>
      <p>Address: {item.address}</p>
      <p style={{ color: item.rent > 60000 ? "green" : "red" }}>
        Rent: ₹{item.rent}
      </p>
    </div>
  ));

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}
      {officeImage}
      <hr />
      {officeItems}
    </div>
  );
}

export default App;
