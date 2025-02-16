const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Mailtrap configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'mowsikan02@gmail.com',
    pass: 'cfwl ouzh zswz djle'
  }
});

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Save to database
    const contact = new Contact({ name, email, phone, company, subject, message });
    await contact.save();

    // Send email
    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.SUPPORT_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `Plain text version: ${message}`,
      html: `
        <h3>New Contact Request</h3>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Send error:', error);
        res.status(500).json({ message: 'Error sending message' });
      } else {
        console.log('Message sent:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
        res.status(200).json({ message: 'Message sent successfully' });
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
};