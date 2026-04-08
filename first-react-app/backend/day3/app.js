const express     = require('express');
const postsRouter = require('./routes/posts.routes.js');
const usersRouter = require('./routes/users.routes.js');

const app = express();

// ─── Global middleware
app.use(express.json());

// Request logger — runs on every request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ─── Routes ──────────────────────────────────────────────
// Mount the posts router — all routes inside get the /posts prefix
app.use('/posts', postsRouter);


app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ success: false, error: `Cannot ${req.method} ${req.url}` });
});

module.exports = app;