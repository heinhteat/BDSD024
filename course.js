const express = require('express');
const router = express.Router();
const db = require('./db');

// REQ# 101: Display all course information (GET course/list)
router.get('/list', (req, res) => {
    const sqlText = 'SELECT * FROM course';
    db.query(sqlText, (err, result) => {
        if (!err) {
            res.status(200).json({ data: result });
        } else {
            res.status(500).json({ data: null });
        }
    });
});

// REQ# 102: Search for a course by Course ID (GET course/search/id)
router.get('/search/id', (req, res) => {
    const courseId = req.query.courseId || req.query.courseld;
    const sqlText = 'SELECT * FROM course WHERE course_id = ?';

    db.query(sqlText, [courseId], (err, result) => {
        if (!err) {
            if (result.length > 0) {
                res.status(200).json({ data: result[0] });
            } else {
                res.status(404).json({ data: null, message: 'Not found.' });
            }
        } else {
            res.status(500).json({ data: null });
        }
    });
});

// REQ# 103: Display only courses designated for special promotion (GET course/promote)
router.get('/promote', (req, res) => {
    const sqlText = 'SELECT * FROM course WHERE promote = 1';

    db.query(sqlText, (err, result) => {
        if (!err) {
            res.status(200).json({ data: result });
        } else {
            res.status(500).json({ data: null });
        }
    });
});

// REQ# 104: Add new course information (POST course/create)
router.post('/create', (req, res) => {
    const { title, description, duration, lecturer, category, promote, courseImage, courselmage } = req.body;
    const image = courseImage || courselmage || '';
    const promoteValue = promote ? 1 : 0;

    const sqlText = 'INSERT INTO course (title, description, duration, lecturer, category, promote, course_image) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [title, description, duration, lecturer, category, promoteValue, image];

    db.query(sqlText, params, (err, result) => {
        if (err) {
            res.json({ result: 0 });
        } else {
            if (result.affectedRows > 0) {
                res.json({ result: 1 });
            } else {
                res.json({ result: 0 });
            }
        }
    });
});

// REQ# 105: Update existing course information (PUT course/update)
router.put('/update', (req, res) => {
    const { courseId, courseld, title, description, duration, lecturer, category, promote, courseImage, courselmage } = req.body;
    const id = courseId || courseld;
    const image = courseImage || courselmage || '';
    const promoteValue = promote ? 1 : 0;

    const sqlText = 'UPDATE course SET title = ?, description = ?, duration = ?, lecturer = ?, category = ?, promote = ?, course_image = ? WHERE course_id = ?';
    const params = [title, description, duration, lecturer, category, promoteValue, image, id];

    db.query(sqlText, params, (err, result) => {
        if (err) {
            res.json({ result: 0 });
        } else {
            if (result.affectedRows > 0) {
                res.json({ result: 1 });
            } else {
                res.json({ result: 0 });
            }
        }
    });
});

// REQ# 106: Delete specified course information (DELETE course/delete)
router.delete('/delete', (req, res) => {
    const courseId = req.body.courseId || req.body.courseld || req.query.courseId || req.query.courseld;
    const sqlText = 'DELETE FROM course WHERE course_id = ?';

    db.query(sqlText, [courseId], (err, result) => {
        if (err) {
            res.json({ result: 0 });
        } else {
            if (result.affectedRows > 0) {
                res.json({ result: 1 });
            } else {
                res.json({ result: 0 });
            }
        }
    });
});

module.exports = router;