const { people } = require('../data');


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const getSinglePeople = (req, res) => {
    const { peopleID } = req.params;
    console.log(req.params);
    const singlePeople = people.find((people) =>
        people.id === Number(peopleID)
    );

    if (!singlePeople) {
        res.status(404).send('404 We cannot find the resource');
    }
    res.json(singlePeople);

};

const newPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res
            .status(400)
            .json({ success: false, msg: "Please provide name value" })
    }
    res.status(201).json({ success: true, person: name });
};

const updatePeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
};

const deletePeople = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
};

module.exports = {
    getPeople,
    getSinglePeople,
    newPeople,
    updatePeople,
    deletePeople
}