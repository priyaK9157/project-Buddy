const express = require('express');
const router = express.Router();
const projectController = require('../controller/Projects');


router.get('/projects/findProjects', projectController.findProjects);

router.post('/projects/findProjectByProjectName', projectController.findProjectByProjectName);

router.put('/projects/updateProject', projectController.updatedProject);

router.post('/projects/deleteProject', projectController.deleteProject);

router.get('/projects/listProjects', projectController.list);

router.post('/projects/addProject', projectController.AddProject);

router.post('/projects/findProjectById', projectController.findProjectById);

router.post('/projects/AppliedProject', projectController.AppliedProject);

router.post('/projects/findProjectByEmail', projectController.findProjectByEmail);

module.exports = router;

