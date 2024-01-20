const fs = require('fs');
const path = require('path');

class allController {
    async getAll(req, res) {
        try {
            const rawData = fs.readFileSync('../server/data/data.json');
            const jsonData = JSON.parse(rawData);

            return res.json({ data: jsonData, message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async create(req, res) {
        try {
            const newElement = req.body.element;
            const uniqueId = Date.now();

            newElement.id = uniqueId;

            const rawData = fs.readFileSync(path.join(__dirname, '../data/data.json'));
            const jsonData = JSON.parse(rawData);

            jsonData.push(newElement);

            fs.writeFileSync(path.join(__dirname, '../data/data.json'), JSON.stringify(jsonData, null, 2));
            return res.json({ message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async update(req, res) {
        try {
            const newElement = req.body.element;
            const id = newElement.id;

            const rawData = fs.readFileSync(path.join(__dirname, '../data/data.json'));
            let jsonData = JSON.parse(rawData);

            const index = jsonData.findIndex(element => element.id === id);
            if (index !== -1) {
                jsonData[index] = newElement;

                fs.writeFileSync(path.join(__dirname, '../data/data.json'), JSON.stringify(jsonData, null, 2));

                return res.json({ message: "Success" });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const rawData = fs.readFileSync(path.join(__dirname, '../data/data.json'));
            let jsonData = JSON.parse(rawData);

            const indexToDelete = jsonData.findIndex(element => element.id === Number(id));
            
            console.log(indexToDelete)
            if (indexToDelete !== -1) {
                jsonData.splice(indexToDelete, 1);
    
                fs.writeFileSync(path.join(__dirname, '../data/data.json'), JSON.stringify(jsonData, null, 2));
                return res.json({ message: "Success" });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }
}

module.exports = allController;