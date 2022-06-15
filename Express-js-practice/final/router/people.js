const express = require('express');
const router = express.Router();

// const {people} = require('../data');

const { getPeople,
    getSinglePeople,
    newPeople,
    updatePeople,
    deletePeople} = require('../controller/people')




//HTTP GET Method 
// router.get('/',getPeople);
 
//  router.get('/:peopleID', getSinglePeople );
//  //end

// router.post('/',newPeople);

// // router.post('/postman', (req, res) => {
// //  const { name } = req.body
// //  if (!name) {
// //    return res
// //      .status(400)
// //      .json({ success: false, msg: 'please provide name value' })
// //  }
// //  res.status(201).json({ success: true, data: [...people, name] })
// // })

// //END

// //HTTP PUT METHOD TO UPDATE THE DATA

// router.put('/:id',updatePeople)

// //END
// //HTTP DELETE METHOD
// router.delete('/:id', deletePeople);


//another method

router.route('/').get(getPeople).post(newPeople)
// router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePeople).delete(deletePeople)

module.exports = router;