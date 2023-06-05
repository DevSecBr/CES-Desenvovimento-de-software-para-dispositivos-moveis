const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');

let db = new sqlite3.Database('./mydb.sqlite3');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        
        req.userId = decoded.id;
        next();
    });
};

const createEvent = (req, res) => {
    const { name, location, time, date } = req.body;
    const sql = 'INSERT INTO Events (name, location, time, date, userId) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [name, location, time, date, req.userId], function (err) {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        return res.status(201).send({ id: this.lastID });
    });
};

const getEvents = (req, res) => {
    const sql = 'SELECT * FROM Events';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        return res.status(200).send({ events: rows });
    });
};

const getUserEvents = (req, res) => {
    const userId = req.userId;
    const sql = 'SELECT * FROM Events WHERE userId = ?';
    db.all(sql, [userId], (err, rows) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        return res.status(200).send({ events: rows });
    });
};

const updateEvent = (req, res) => {
    const eventId = req.params.eventId;
    const { name, location, time, date } = req.body;
    db.get('SELECT userId FROM Events WHERE id = ?', [eventId], (err, row) => {
        if (err) return res.status(500).send("There was a problem finding the event.");
        if (!row) return res.status(404).send("No event found.");
        if (row.userId !== req.userId) return res.status(403).send("You are not authorized to update this event.");

        const sql = 'UPDATE Events SET name = ?, location = ?, time = ?, date = ? WHERE id = ?';
        db.run(sql, [name, location, time, date, eventId], function (err) {
            if (err) {
                return res.status(500).send({ error: err.message });
            }
            return res.status(200).send({ changes: this.changes });
        });
    });
};

const deleteEvent = (req, res) => {
    const eventId = req.params.eventId;
    db.get('SELECT userId FROM Events WHERE id = ?', [eventId], (err, row) => {
        if (err) return res.status(500).send("There was a problem finding the event.");
        if (!row) return res.status(404).send("No event found.");
        if (row.userId !== req.userId) return res.status(403).send("You are not authorized to delete this event.");

        const sql = 'DELETE FROM Events WHERE id = ?';
        db.run(sql, [eventId], function (err) {
            if (err) {
                return res.status(500).send({ error: err.message });
            }
            return res.status(200).send({ changes: this.changes });
        });
    });
};

module.exports = { verifyToken, createEvent, getEvents, getUserEvents, updateEvent, deleteEvent };
