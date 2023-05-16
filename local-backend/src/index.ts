import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  // Handle the contact form submission here.
  // You can access the form data using req.body.
  console.log(req.body);
  res.status(200).send({ message: 'Form submitted successfully!' });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});