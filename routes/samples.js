const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");

router.get("/adminB", (req, res) => {
  var query = db.query(
    "SELECT * FROM administrator where admin_type='B'",
    (error, results, fields) => {
      if (error) throw error;
      res.render("one", { data: results});

    }
  );
});

router.get("/studentCourseDetails", (req, res) => {
  var query = db.query(
    "SELECT student.student_id,student.first_name,student_classes.course_id FROM student JOIN student_classes ON student.student_id = student_classes.student_id ;",
    (error, results, fields) => {
         console.log(results);
      if (error) throw error;
      res.render("samples", { data: results});
      
    }
  );
});

router.get("/studentCourseDetailsWithName", (req, res) => {
  var query = db.query(
    "SELECT student.student_id,student.first_name,student_classes.course_id,course.course_name FROM student JOIN student_classes ON student.student_id = student_classes.student_id JOIN course ON student_classes.course_id = course.course_id WHERE student.student_id = '800101200';",
    (error, results, fields) => {
      if (error) throw error;
      res.render("samples", { data: results});
      console.log(results);
    }
  );
});
module.exports = router;
