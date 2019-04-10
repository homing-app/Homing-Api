const ItemLog = require('../models/itemLog.model')


module.exports.create = (req, res, next) => {
  const itemLog = new ItemLog(req.body)
  itemLog.save()
    .then(itemLog => res.status(201).json(itemLog))
    .catch(error => next(error))
}

// module.exports.list = (req, res, next) => {
//   Item.find()
//     .then(items => {
//       res.json(items)
//     })
//     .catch(error => next(error))
// }

// module.exports.details = (req, res, next) => {
//   Item.findById(req.params.id)
//     .then(item => {
//       if(!item) {
//         throw createError(404, 'Item not found!')
//       } else {
//         res.json(item)
//       }
//     })
//     .catch(error => next(error))
// }

// module.exports.edit = (req, res, next) => {
//   Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then(item => {
//       if(!item) {
//         throw createError(404, 'Item not found!')
//       } else {
//         res.json(item)
//       }
//     })
// }

// module.exports.delete = (req, res, next) => {
//   Item.findByIdAndDelete(req.params.id)
//     .then(item => {
//       if(!item) {
//         throw createError(404, 'Item not found!')
//       } else {
//         res.json("Item deleted!")
//       }
//     })
// }