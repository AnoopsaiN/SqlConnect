const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");

router.get("/StudentbillFall2020", (req, res) => {
  var query = db.query(
    'SELECT * FROM student_bills WHERE student_bills.student_id = 800101100 AND student_bills.term = "Fall 2020";', 
      (error, results, fields) => {
      if (error) throw error;
      res.render("one", { data: results});
    }
  );
});

router.get("/CourseRoaster", (req, res) => {
  var query = db.query(
    "SELECT * FROM course_roster WHERE course_id = 'ITCS-6112';",
    (error, results, fields) => {
         console.log(results);
      if (error) throw error;
      res.render("samples", { data: results});
      
    }
  );
});

router.get("/StudentInfo", (req, res) => {
  var query = db.query(
    "SELECT * FROM student_info;",
    (error, results, fields) => {
      if (error) throw error;
      res.render("update", { data: results});
      console.log(results);
    }
  );
});

router.get("/UpdateCreditAmount", (req, res) => {
  var query = db.query(
    "CALL update_price_per_course(1000);",
    (error, results, fields) => {
      if (error) throw error;
    }
  );
  var query = db.query(
    "SELECT * FROM prices;",
    (error, results, fields) => {
      if (error) throw error;
      res.render("update1", { data: results});
      console.log(results);
    }
  );
});

router.get("/storedFunc", (req, res) => {
  var query = db.query(
    "SELECT get_student_bill_total(800101100, '*') as price;",
    (error, results, fields) => {
      if (error) throw error;
      res.render("update1", { data: results});
    }
  );
});

module.exports = router;
