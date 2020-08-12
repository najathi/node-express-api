/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars  */

const express = require('express');
const router = express.Router();
const monk = require('monk');
const joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URL);
const faqs = db.get('faqs');

const schema = joi.object({
    question: joi.string().trim().required(),
    answer: joi.string().trim().required(),
    video_url: joi.string().uri(),
});

// Get All
router.get('/', async (req, res, next) => {

    try {

        const items = await faqs.find({});

        res.json(items);

    } catch (error) {

        next(error);

    }

});

// Get One
router.get('/:id', async (req, res, next) => {

    try {

        const item = await faqs.findOne({ _id: req.params.id });

        if (!item) return next();

        res.json(item);

    } catch (error) {

        next(error);

    }

});

// Create One
router.post('/', async (req, res, next) => {

    try {

        const value = await schema.validateAsync(req.body);

        const inserted = await faqs.insert(value);

        res.json(inserted);

    } catch (error) {

        next(error);

    }

});

// Update One
router.put('/:id', async (req, res, next) => {

    try {

        const value = await schema.validateAsync(req.body);

        const updated = await faqs.findOneAndUpdate({ _id: req.params.id }, { $set: value });

        res.json(updated);

    } catch (error) {

        next(error);

    }

});

// Delete One
router.delete('/:id', async (req, res, next) => {

    try {

        const deleted = await faqs.findOneAndDelete({ _id: req.params.id });

        res.json(deleted);

    } catch (error) {

        next(error);

    }

});

module.exports = router;