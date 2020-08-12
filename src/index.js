/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars  */

const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
