const Brigade = require('../models/Brigade');
const Area = require('../models/Area');
const Schedule = require('../models/Schedule');

class allController {
    async getAll(req, res) {
        try {
            const data = await Brigade.find().populate('area').populate('schedule');

            return res.json({ data: data, message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async create(req, res) {
        try {
            const element = req.body.element;

            const area = new Area ({
                title: element.area
            });

            await area.save();

            const schedule = new Schedule ({
                title: element.schedule
            })

            await schedule.save();

            const brigade = new Brigade({
                title: element.brigade,
                area: area._id,
                schedule: schedule._id
            })

            await brigade.save();

            const createdBrigade = await Brigade.findById(brigade._id).populate('area schedule');
            return res.json({ brigade: createdBrigade, message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async update(req, res) {
        try {
            const newElement = req.body.element;
            const id = newElement._id;

            await Area.findByIdAndUpdate(newElement.area._id, newElement.area)
            await Schedule.findByIdAndUpdate(newElement.schedule._id, newElement.schedule)

            await Brigade.findByIdAndUpdate(id, newElement)

            return res.json({ message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            await Brigade.findByIdAndDelete(id);
            return res.json({ message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }
}

module.exports = allController;