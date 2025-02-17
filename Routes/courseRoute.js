const express = require("express");
const {
  getAllCourses,
  getCourse,
  deleteCourse,
  createCourse,
  getByCat,
  rateCourse,
  filterCourses,
  createrCourses,
  getSpecificUserRating,
  deleteAllCourse,
  alreadyRated,
  getLatestCourse,
  getPopularCourse,
} = require("../Controllers/courseControl");
const router = express.Router();

router.get("/find/all", getAllCourses);
router.get("/getByid/:id", getCourse);
router.delete("find/:id", deleteCourse);
router.post("/create", createCourse);
router.get("/category", getByCat);
router.post("/ratings", rateCourse);
router.get("/latest", getLatestCourse);
router.get("/popular", getPopularCourse);
router.get("/createrCourse/:id", createrCourses);
router.get("/filterCourses", filterCourses);
router.get("/userRating/:userId/:courseId", getSpecificUserRating);
router.get("/haveUserRated/:id/:courseId", alreadyRated);
router.delete("/all", deleteAllCourse);

module.exports = router;
