import React, { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}
  
  return <div>Contact</div>;
};

export default Contact;
