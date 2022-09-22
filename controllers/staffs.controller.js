const db = require('../configuration/config');
const Staffs = require('../models/table.model');
const staffApi = {};
staffApi.getStaff = async(req,res) => {
    const staffData = await(Staffs.findOne({
        where:{email: req.params.email, password: req.params.password}
    }));
    console.log('data : ',staffData);
    res.status(200).json({ error: false, message: 'Users details fetched successfully', result: staffData });
};

staffApi.saveStaff = (req,res) => {
    try{
        let object = {
            params:{
                email: req.body.email,
                password: req.body.password
            }
        };
        const getUser = staffApi.getStaff(object);
        console.log(getUser);
        if(!getUser) {
        Staffs.create({
            employee_id: req.body.employee_id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            mobile: req.body.mobile,
            gender: req.body.gender
        }).then(() => {
            console.log('Created', res);
        }).catch((error) => {
            console.log(error);
        });
        res.status(201).json({ error: false, message: 'Staff created successfully' });
    }else {
        res.status(201).json({ error: false, message: 'User Already Exist' });
    }
    }catch(error){
        res.status(401).json({error:true, message: 'Cannot Store Data'});
    }
}; 

module.exports = staffApi;