const db = require('../configuration/config');
const Assessment = require('../models/assessment.model');
const assessmentApi = {};
assessmentApi.saveAssessment = (req,res) => {
    try{
        Assessment.create({
            reg_id: req.body.reg_id,
            tamil: req.body.tamil,
            english: req.body.english,
            mathematics: req.body.mathematics,
            science: req.body.science,
            social: req.body.social,
            exam_name: req.body.exam_name
        }).then(() => {
            console.log('Created', res);
        }).catch((error) => {
            console.log(error);
        })
    res.status(201).json({ error: false, message: 'Assessment created successfully' });
    }catch(error){
        res.status(401).json({error:true, message: 'Cannot Store Data'});
    }
}; 

assessmentApi.getStudentMarks = async(req,res) => {
    const data = await(Assessment.findAll({
        where:{reg_id: req.params.reg_id}
    }));
    console.log('data : ',data.dataValues);
    res.status(200).json({ error: false, message: 'Data details fetched successfully', result: data });
};

assessmentApi.updateStudentMarks = async(req,res) => {
    const data = await(Assessment.update(
        {
            reg_id: req.body.reg_id,
            tamil: req.body.tamil,
            english: req.body.english,
            mathematics: req.body.mathematics,
            science: req.body.science,
            social: req.body.social,
            exam_name: req.body.exam_name
        },
        {
        where:{reg_id: req.params.reg_id}
    }));
    res.status(200).json({ error: false, message: 'Data details updated successfully', result: data });
};

module.exports = assessmentApi;