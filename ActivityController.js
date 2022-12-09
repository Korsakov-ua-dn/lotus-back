import ActivityService from "./ActivityService.js";

class ActivityController {
    async create(req, res) {
        try {
            const act = await ActivityService.create(req.body)
            res.json({
                "RequestId": act._id
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const activity = await ActivityService.getAll();
            return res.json(activity);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const activity = await ActivityService.getOne(req.params.id)
            return res.json(activity)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ActivityController();
