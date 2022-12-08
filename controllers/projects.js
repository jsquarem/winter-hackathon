const Project = require('../models/project');

const createProject = async (req, res) => {
  console.log(req.body, ' req.body in create Project');
  const project = new Project({ ...req.body });
  try {
    await project.save();
    return res.status(200).json(project);
  } catch (err) {
    res.status(500).json({
      err: err,
      message: 'Internal Server Error, Please try again'
    });
  }
};

// const storage = multer.diskStorage({
//   destination:(req, file, callback) =>{
//       callback(null, '../../public/uploads')
//   },
//   filename:(req, file, callback) =>{
//       callback(null, file.originalname)
//   }
// })

// const upload = multer({storage:storage})

// request get all projects
// router.get('/projects', (req, res) => {
//   Projects.find()
//     .then((project) => res.json(project))
//     .catch((err) => res.status(400).json(`Error:${err}`));
// });

// // request add new project
// router.post('/add', upload.single('imageURL'), (req, res) => {
//   const newProject = new Projects({
//     wishList: req.file.wishList,
//     projectTitle: req.body.projectTitle,
//     projectDescription: req.body.projectDescription,
//     imageURL: req.file.imageURL,
//     subjectArea: req.body.subjectArea
//   });
//   newProject
//     .save()
//     .then(() => res.json('new project posted'))
//     .catch((err) => res.status(400).json(`Error:${err}`));
// });

// // Request Find Project

// router.get('./:id', (req, res) => {
//   Projects.findByID(req.params.id)
//     .then((project) => res.json(project))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

// // request add new project
// router.post('/update/:id', upload.single(' imageName'), (req, res) => {
//   Projects.findById(req.params.id)
//     .then((project) => {
//       (project.wishList = req.file.wishList),
//         (project.projectTitle = req.body.projectTitle),
//         (project.projectDescription = req.body.project.Description),
//         (project.imageURL = req.file.originalname),
//         (project.subjectArea = req.body.subjectArea),
//         project
//           .save()
//           .then(() => res.json('project update'))
//           .catch((err) => res.status(400).json(`Error:${err}`));
//     })
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

module.exports = {
  createProject
};
