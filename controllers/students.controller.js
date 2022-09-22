const db = require('../configuration/config');
const Students = require('../models/student.model');
const studentApi = {};
studentApi.saveStudent = (req,res) => {
    try{
        Students.create({
            reg_id: req.body.reg_id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            class: req.body.class,
            mobile: req.body.mobile,
            gender: req.body.gender
        }).then(() => {
            console.log('Created', res);
        }).catch((error) => {
            console.log(error);
        })
    res.status(201).json({ error: false, message: 'Student created successfully' });
    }catch(error){
        res.status(401).json({error:true, message: 'Cannot Store Data'});
    }
}; 
studentApi.getStudent = async(req,res) => {
    const studentData = await(Students.findOne({
        where:{email: req.params.email, password: req.params.password}
    }));
    console.log('data : ',studentData.dataValues);
    res.status(200).json({ error: false, message: 'Users details fetched successfully', result: studentData });
};

studentApi.getAllStudent = async(req,res) => {
    const studentAll = await(Students.findAll());
    console.log('data : ',studentAll.dataValues);
    res.status(200).json({ error: false, message: 'Users details fetched successfully', result: studentAll });
};

studentApi.getStudentById = async(req,res) => {
    const studentById = await(Students.findOne({
        where:{reg_id: req.params.reg_id}
    }));
    console.log('data : ',studentById.dataValues);
    res.status(200).json({ error: false, message: 'Users details fetched successfully', result: studentById });
};

module.exports = studentApi;