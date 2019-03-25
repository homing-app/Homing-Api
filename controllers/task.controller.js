const Task = require('../models/task.model')

module.exports.list = (req, res, next) => {
  Task.find()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
  const task = new Task(req.body)
  
  task.save()
    .then(task => res.status(201).json(task))
    .catch(error => next(error))
}

module.exports.details = (req, res, next) => {
  Task.findById(req.params.id)
    .then(task => {
      if(!task) {
        throw createError(404, 'Task not found!')
      } else {
        res.json(task)
      }
    })
}

module.exports.edit = (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(task => {
      if(!task) {
        throw createError(404, 'Task not found!')
      } else {
        res.json(task)
      }
    })
}

// module.exports.delete = (req, res, next) => {
//   Task.findByIdAndDelete(req.params.id)
//     .then(task => {
//       if(!task) {
//         throw createError(404, 'Task not found!')
//       } else {
//         res.json("Task deleted!")
//       }
//     })
// }