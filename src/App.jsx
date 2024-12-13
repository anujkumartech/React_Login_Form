import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/input-field';
import { Card } from './components/card';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [userNameFocus, setUserNameFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    if (formData.username === '') {
      setUserNameFocus(true);
      // console.error('username is mandatory');
    }
  };

  const handleReset = () => {
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  const setFormFromChildComponent = (fieldValue, value) =>  {
    console.log(`Field Value was ${fieldValue} and actual value was ${value}`);
    setFormData({
      ...formData,
      [fieldValue]: value
    })
  }

  return (
    <div className="flex-center">
      <div>
      <Card>
          <p>First Card Component </p>
      </Card>
        <h2>User Registration</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <InputField
            id="username" 
            labelValue="Username"
            type="text"
            fieldValue={formData.username}
            setFormData={setFormFromChildComponent}
            isFocus={userNameFocus}
          />

          <InputField
            id="email" 
            labelValue="Email Address"
            type="email"
            fieldValue={formData.email}
            setFormData={setFormFromChildComponent}
            isFocus={false}
          />

          <InputField
            id="password" 
            labelValue="Password"
            type="password"
            fieldValue={formData.password}
            setFormData={setFormFromChildComponent}
            isFocus={false}
          />
          {/* <div className="input-label-container">
            <label htmlFor="username" className="label font-yellow">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({
                ...formData,
                username: e.target.value
              })}
              autoFocus
            />
          </div> */}

          {/* Email Field */}
          {/* <div className="input-label-container">
            <label htmlFor="email"  className="label font-yellow">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({
                ...formData,
                email: e.target.value
              })}
            />
          </div> */}

          {/* Password Field */}
          {/* <div className="input-label-container">
            <label htmlFor="password" className="label font-yellow">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({
                ...formData,
                password: e.target.value
              })}
            />
          </div> */}

          {/* Form Buttons */}
          <Card>
            <div>
              <button type="submit">
                Register
              </button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </Card>

        </form>
      </div>
    </div>
  );
};

export default App;
