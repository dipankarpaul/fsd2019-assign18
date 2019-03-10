import app from './app';
import { env } from './config/environment/environment';
const PORT = env.port;

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});
