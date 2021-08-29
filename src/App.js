import React from 'react';
 
function App() {
  const Users = [
  {
    id: 1,
    name: "Polen Patowary",
    designation: "Software Developer",
    company: "ABC Pvt. Ltd."
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Senior Software Developer",
    company: "ABC Pvt. Ltd."
  }
  ];
 
return (
  <div>
  <h4>List of employees</h4>
<ul>
{Users.map(data => (
<li key={data.id}>
<div>{data.name}</div>
<div>{data.designation}</div>
<div>{data.company}</div>
</li>
))}
</ul>
</div>
);
}
export default App;