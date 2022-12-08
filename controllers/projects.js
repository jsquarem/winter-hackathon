const Project = require('../models/project');
const WishListItem = require('../models/wishListItem');
const TeacherProfile = require('../models/teacherProfile');
const User = require('../models/user');

const create = async (req, res) => {
  console.log(req.body, ' req.body in create Project');
  const projectObject = req.body.projectObject;
  const userEmail = req.body.userEmail;
  const wishListItem = projectObject.wishList[0].result[0];
  const wishListTitle = wishListItem.title;
  const wishListPrice = wishListItem.price.current_price;
  const wishListDescription = wishListItem.description;
  const wishListProductURL = wishListItem.url;
  const wishListImageURL = wishListItem.main_image;
  const wishListObject = {
    title: wishListTitle,
    price: wishListPrice,
    description: wishListDescription,
    productURL: wishListProductURL,
    imageURL: wishListImageURL
  };
  const wishListDocument = new WishListItem(wishListObject);
  wishListDocument.save();

  projectObject.wishList = [wishListDocument._id];
  const projectDocument = new Project(projectObject);
  const projectID = projectDocument._id;

  const userDocument = await User.findOne({ email: userEmail });
  console.log(userDocument, '<-userDocument');
  const teacherProfileID = userDocument.teacherProfile;
  console.log(teacherProfileID, '<-teacherProfileID');
  const teacherProfileDocument = await TeacherProfile.findOne({
    _id: teacherProfileID
  });

  // const existingProjects = teacherProfileDocument.projects.;
  // existingProjects.push(projectID);
  teacherProfileDocument.projects.push(projectID);
  teacherProfileDocument.save();

  try {
    await projectDocument.save();
    console.log('success');
    return res.status(200).json(projectDocument);
  } catch (err) {
    console.log(err, '<-err');
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
  create
};
