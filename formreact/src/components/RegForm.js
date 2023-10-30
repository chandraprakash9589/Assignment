import React, { useState } from 'react';

const RegForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation rules
    if (formData.fullName.trim() === '') {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Registration successful!');
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="Container">
    <h2>Registration Form</h2>
    {successMessage && <div className='success-message'>{successMessage}</div>}
    <form onSubmit={handleSubmit}>
        <div className='row'> 
            <label>Full Name: </label>
            <input type="text" name='fullName' className='rowlabel' value={formData.fullName} onChange={handleChange} />
            {errors.fullName && <div className='error-message'>{errors.fullName}</div>}
        </div>
        <div className='row'>
            <label>Email: </label>
            <input type="email" name='email'className='rowlabel' value={formData.email} onChange={handleChange} />
            {errors.email && <div className='error-message'>{errors.email}</div>}
            
        </div>
        <div className='row'>
            <label>Password: </label>
            <input type="password" name='password' className='rowlabel' value={formData.password} onChange={handleChange} />
            {errors.password && <div className='error-message'>{errors.password}</div>}
        </div>
        <div className='row'>
            <label>Confirm Password: </label>
            <input type="password" name='confirmPassword' className='rowlabel' value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <div className='error-message'>{errors.confirmPassword}</div>}
        </div>
        <button type='submit' onClick={handleSubmit}>Register</button>
    </form>
</div>
  );
};

export default RegForm;
