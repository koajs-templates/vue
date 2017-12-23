import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import historyApiFallback from 'koa2-history-api-fallback';
import bodyparser from 'koa-bodyparser';

import api from './routes/api';

const app = new Koa();

const PORT = process.env.HTTP_PORT || 4000;
const IP = process.env.HTTP_IP || undefined;

app.use(
  serve(path.resolve(__dirname, '../public'), {
    maxage: 1000 * 60 * 60 * 24 * 30, // a month
  }),
);
app.use(bodyparser());
app.use(api());
app.use(historyApiFallback());

app.listen(PORT, IP, () => {
  console.log(`app started at http://${IP || 'localhost'}:${PORT}`);
});

export default app;
