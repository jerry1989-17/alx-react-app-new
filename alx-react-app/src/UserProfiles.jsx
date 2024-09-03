
import React from 'react';
import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}





const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
