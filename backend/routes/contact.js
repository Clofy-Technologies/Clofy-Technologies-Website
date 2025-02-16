router.post('/contact', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    
    // Temporary: Just log instead of sending email
    console.log('Would send email:', {
      to: 'your@company.com',
      subject: `New contact from ${req.body.name}`,
      text: req.body.message
    });

    res.status(200).json({ message: 'Message received' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
}); 