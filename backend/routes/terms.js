import express from 'express';
import TermsContent from '../models/TermsContent';

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const terms = await TermsContent.findAll({
            where: { is_active: true},
            order: [['order', 'ASC']]
        })
        res.json(terms)
    }
    catch(err){
        console.error('error fetching terms:', err);
    }
})