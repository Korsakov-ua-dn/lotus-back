import Activity from "./Activity.js";

class ActivityService {
    async create(act) {
        const createdAct = await Activity.create({...act});
        return createdAct;
    }

    async getAll() {
        const activity = await Activity.find();
        return activity;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const activity = await Activity.findById(id);
        return activity;
    }
}


export default new ActivityService();
