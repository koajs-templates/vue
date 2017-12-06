import Router from 'koa-router';

const router = Router();

router.prefix('/api');

router.get('/hello', async (ctx) => {
  ctx.body = 'hello world';
});

export default router;
