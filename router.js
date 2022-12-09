import Router from 'express'
import ActivityController from "./ActivityController.js";

const router = new Router()

router.post('/activity', ActivityController.create);
router.get('/activity', ActivityController.getAll)
router.get('/activity/:id', ActivityController.getOne)

export default router;
