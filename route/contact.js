import express from 'express';
import Contact from '../model/contact.model.js'; // Adjusted import path

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });
  
    await newContact.save();
  
    res.status(201).json({ message: 'Message received and saved!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
  
});

export default router;
