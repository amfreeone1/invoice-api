# Invoice API

Sadə Node.js REST API fakturaların (invoice) idarə edilməsi üçün (CRUD əməliyyatları).

## Texnologiyalar
- Node.js
- Express.js
- body-parser
- cors

## Necə işə salınır

```bash
npm install
node index.js

API Endpoints
POST /invoices — Create new invoice

GET /invoices — List all invoices

GET /invoices/:id — Get invoice by ID

PUT /invoices/:id — Update invoice

DELETE /invoices/:id — Delete invoice
