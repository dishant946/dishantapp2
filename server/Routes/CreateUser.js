const express = require('express');
const router = express.Router();
const User = require('../Models/User.js');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
router.post('/CreateUser', [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);
        try {

            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            })

            res.json({ sucess: true });
        }
        catch (e) {
            console.log(e);
            res.json({ sucess: false });
        }
    })


router.post('/LoginUser', [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })], async (req, res) => {
        let email = req.body.email;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let userdata = await User.findOne({ email: email });
            if (!userdata) {
                return res.status(400).json({ error: "Try login with correct user" });
            }
            const comparePassword = await bcrypt.compare(req.body.password, userdata.password);
            if (!comparePassword) {
                return res.status(400).json({ error: "Password didn't match" });
            }
            const data = {
                user: {
                    id: userdata.id
                }
            }
            const jwtsecret = "mynameisdishantsoni";
            const authToken = jwt.sign(data, jwtsecret);
            return res.json({ success: true, authToken: authToken });
        }
        catch (e) {
            console.log(e);
            res.json({ sucess: false });
        }
    })

module.exports = router;
