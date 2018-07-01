import 'babel-polyfill';
import Router from 'koa-router';
import getSystemData from '../models/getSystemData';

const webhookRouter = new Router();

webhookRouter
  .get('/', async ctx => {  
    const req = ctx.request;
    const res = ctx.response;

    let data = await getSystemData(-1);  
    res.body = data;
  })
  .get('/:id(\\d+)', async ctx => {  
    const req = ctx.request;
    const res = ctx.response;

    let data = await getSystemData(parseInt(ctx.params.id, 10));  
    res.body = data;
  })
  .get('/all', async ctx => {  
    const req = ctx.request;
    const res = ctx.response;

    let data = await getSystemData('all');  
    res.body = data;
  })
  .get('/getfinal2718', async ctx => {  
    const req = ctx.request;
    const res = ctx.response;

    let data = await getSystemData('getfinal2718');  
    res.body = data;
  })
export default webhookRouter;
