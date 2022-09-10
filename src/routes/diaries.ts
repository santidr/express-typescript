import { Router } from 'express'
import * as diaryServices from '../services/diaryServices'
import convertToNewDiary from '../utils'

const router = Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getDiariesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.getOneDiary(+req.params.id) // + sign converts string id param to number

    return (diary !== null) 
        ? res.send(diary) 
        : res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const newDiary = convertToNewDiary(req.body)
    
        const addedNewDiary = diaryServices.addDiary(newDiary)
    
        res.json(addedNewDiary)

    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

export default router