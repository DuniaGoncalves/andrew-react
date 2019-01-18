/* Notes

JSX doesn't have built in data binding
didn't want to delete
Challege Only render subtitle if exsists

JSX- Javascript XML

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
);

Instead of using static data

const userName = 'Dunia Goncalves';
const userAge = 31;
const userLocation = 'Boston';

Can also use objects

const user = {
  // name: 'Dunia Goncalves',
  age: 31,
  location: 'Boston'
};

functions
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

ternary operaters
if one of you expressions resolves to undefined nothing will show up ie getLocation

Challenge Creat own template and render it
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

*/
