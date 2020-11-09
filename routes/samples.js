const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");

router.get("/DeleteCourseITCS-6112", (req, res) => {
  var query = db.query(
    'Delete from student_classes where student_id = "800101200" and course_id = "ITCS-6112";', 
      (error, results, fields) => {
      if (error) throw error;
    }
  );
  var query = db.query(
    "SELECT student.student_id,student.first_name,student_classes.course_id,course.course_name FROM student JOIN student_classes ON student.student_id = student_classes.student_id JOIN course ON student_classes.course_id = course.course_id WHERE student.student_id = '800101200';",
    (error, results, fields) => {
      if (error) throw error;
      res.render("samples", { data: results});
      console.log(results);
    }
  );
});

router.get("/AmountAccordingtoCourses", (req, res) => {
  var query = db.query(
    "SELECT student.student_id, CONCAT(student.first_name,' ', student.last_name) as name, sum(course.credits) as tot, SUM(course.credits)*1000 as Tution_fee FROM student JOIN student_classes ON student.student_id = student_classes.student_id JOIN course ON student_classes.course_id = course.course_id WHERE student.student_id = '800101200';",
    (error, results, fields) => {
         console.log(results);
      if (error) throw error;
      res.render("one", { data: results});
      
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

router.get("/UpdateCreditAmount", (req, res) => {
  var query = db.query(
    "UPDATE prices SET price='800';",
    (error, results, fields) => {
      if (error) throw error;
    }
  );
  var query = db.query(
    "select * from prices;",
    (error, results, fields) => {
      if (error) throw error;
      res.render("update", { data: results});
      console.log(results);
    }
  );
});
module.exports = router;
