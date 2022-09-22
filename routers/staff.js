const express = require('express');
const routers = express.Router();
const staffApi = require('../controllers/staffs.controller');
const studentApi = require('../controllers/students.controller');
const assessmentApi = require('../controllers/assessment.controller');

routers.post('/staff/save', staffApi.saveStaff);
routers.post('/student/save', studentApi.saveStudent);
routers.post('/assessment/save', assessmentApi.saveAssessment);
routers.get('/staff/get/:email/:password', staffApi.getStaff);
routers.get('/student/get/:email/:password', studentApi.getStudent);
routers.get('/student/get/:reg_id', studentApi.getStudentById);
routers.get('/student/all/get', studentApi.getAllStudent);
routers.get('/assessment/get/:reg_id', assessmentApi.getStudentMarks);
routers.put('/assessment/update/:reg_id', assessmentApi.updateStudentMarks);

module.exports = routers;