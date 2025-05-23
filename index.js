const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let invoices = [];
let id = 1;

// Create Invoice
app.post('/invoices', (req, res) => {
  const invoice = { id: id++, ...req.body };
  invoices.push(invoice);
  res.status(201).json(invoice);
});

// List Invoices
app.get('/invoices', (req, res) => {
  res.json(invoices);
});

// Get Invoice by ID
app.get('/invoices/:id', (req, res) => {
  const invoice = invoices.find(inv => inv.id == req.params.id);
  if (invoice) res.json(invoice);
  else res.status(404).json({ message: 'Not found' });
});

// Update Invoice
app.put('/invoices/:id', (req, res) => {
  const index = invoices.findIndex(inv => inv.id == req.params.id);
  if (index > -1) {
    invoices[index] = { ...invoices[index], ...req.body };
    res.json(invoices[index]);
  } else res.status(404).json({ message: 'Not found' });
});

// Delete Invoice
app.delete('/invoices/:id', (req, res) => {
  invoices = invoices.filter(inv => inv.id != req.params.id);
  res.json({ message: 'Deleted' });
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));