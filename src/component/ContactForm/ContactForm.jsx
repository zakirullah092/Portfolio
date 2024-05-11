import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import './ContactForm.css';

const ContactForm = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to track form submission success
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Send form data to the PHP file for processing
      const response = await fetch('/submit_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Check if the response is successful
      if (response.ok) {
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setSubmissionSuccess(true);
      } else {
        // Handle errors if the response is not successful
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      // Handle errors during form submission
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <form id='contactme-section' className='contactForm' onSubmit={handleSubmit} action="/submit_form.php" method="post">
      <FormControl isRequired isInvalid={!formData.name.trim()}>
        <FormLabel className='formLabel'  htmlFor="name">Name</FormLabel>
        <Input className='formInput'
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FormErrorMessage>Name is required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired mt={4} isInvalid={!/^\S+@\S+\.\S+$/.test(formData.email)}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input className='formInput'
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormErrorMessage>Invalid email address</FormErrorMessage>
      </FormControl>

      <FormControl isRequired mt={4} isInvalid={!formData.message.trim()}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Input className='formInputTextArea'
          as="textarea"
          id="message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <FormErrorMessage>Message is required</FormErrorMessage>
      </FormControl>

      <Button className='formBtn' mt={4} colorScheme="teal" type="submit" isLoading={isSubmitting}>
        Submit
      </Button>

      {submissionSuccess && (
        <p style={{ marginTop: '10px', color: 'green' }}>Form submitted successfully!</p>
      )}
    </form>
  );
};

export default ContactForm;
