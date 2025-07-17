const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  const PORT = 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});

