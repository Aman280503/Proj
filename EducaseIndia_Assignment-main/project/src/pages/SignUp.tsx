import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useUser } from '../context/UserContext';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useUser();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
  });
  
  const [isAgency, setIsAgency] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (value: string): string | null => {
    if (!value) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return null;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const userData = {
        ...formData,
        isAgency,
      };
      
      const success = await signup(userData, formData.password);
      if (success) {
        navigate('/profile');
      }
    } catch (err) {
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Create your PopX account
          </h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <Input
            id="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Mary Doe"
            required
            className={errors.fullName ? 'error' : ''}
          />
          
          <Input
            id="phoneNumber"
            label="Phone number"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="555-123-4567"
            required
            className={errors.phoneNumber ? 'error' : ''}
          />
          
          <Input
            id="email"
            label="Email address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            validate={validateEmail}
            className={errors.email ? 'error' : ''}
          />
          
          <Input
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className={errors.password ? 'error' : ''}
          />
          
          <Input
            id="companyName"
            label="Company name"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Inc."
          />
          
          <div className="mb-6">
            <p className="text-sm font-medium text-purple-600 mb-2">
              Are you an Agency?*
            </p>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="agency"
                  checked={isAgency}
                  onChange={() => setIsAgency(true)}
                  className="form-radio h-4 w-4 text-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="agency"
                  checked={!isAgency}
                  onChange={() => setIsAgency(false)}
                  className="form-radio h-4 w-4 text-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          
          {errors.form && (
            <div className="mb-4 text-red-500 text-sm">{errors.form}</div>
          )}
          
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="mt-4"
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;