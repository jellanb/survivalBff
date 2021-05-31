import express from 'express';

const router = express.Router();

router.get('/users/getUserByUsername', async (req, res) =>{
    res.status(200).json('successfully');
});

export = router
