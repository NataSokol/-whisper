const { configureApp, PORT } = require('./configs/serverConfig');
const apiRouter = require('./routers/api.routes');

const app = configureApp();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { router } = require('./routers/api.routes');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', router);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });