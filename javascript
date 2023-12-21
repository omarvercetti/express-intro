const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Include student route
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});const express = require('express');
const router = express.Router();

// Example data
const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // Add more students as needed
];

router.get('/', (req, res) => {
  res.render('students/index', { students });
});

router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  res.render('students/show', { student });
});

module.exports = router;