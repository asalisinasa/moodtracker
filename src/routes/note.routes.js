const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth.middleware')
const Note = require('../models/Note')
const router = Router()

const DEFAULT_ERR_MESSAGE = 'Что-то пошло не так, попробуйте снова'

// /api/note/create
router.post(
  '/create',
  auth,
  async (req, res) => {

    try {
      const baseUrl = process.env.BASE_ULI
      const { mood, comment, userId: owner } = req.body
      const note = new Note({ mood, comment, owner: req.user.userId })

      await note.save()
      res.status(201).json({ note })
    } catch (e) {
      res.status(500).json({ message: DEFAULT_ERR_MESSAGE })
    }
  })

// /api/note
router.get(
  '/',
  auth,
  async (req, res) => {
    debugger
    try {
      const notes = await Note.find({ owner: req.user.userId }) // TODO
      res.json(notes)
    } catch (e) {
      res.status(500).json({ message: DEFAULT_ERR_MESSAGE })
    }
  })


// /api/note/:id/
router.get(
  '/:id',
  auth,
  async (req, res) => {
    try {
      const note = await Note.findById(req.params.id)
      res.json(note)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: DEFAULT_ERR_MESSAGE })
    }
  })


module.exports = router
