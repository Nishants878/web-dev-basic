const express = require("express"); // import
const app = express();
const path = require("path");
let courses = require("./model/courses.model");
app.use(express.json());
// app.get("/", (req, res) => res.sendFile("Index.html",{root:__dirname}));
//app.get("/", (req, res) => res.json([{ id: 1, title: "React", price: 5000 }]));
app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => res.sendFile("Courses.html", { root: __dirname }));
app.get("/addcourse", (req, res) =>
  res.sendFile("NewCourse.html", { root: __dirname })
);

app.post("/newcourse", (req, res) => {
  let newCourse = req.body;
  // functional prog -> [...courses,newCourse]

  // object oriented -> courses.push(newCourse)
  console.log(courses.length);

  res.json({ msg: "success" });
});

app.get("/courses", (req, res) => {
  // this will come from db
  res.json(courses);
});

app.delete("/courses/:id", (req, res) => {
  // functional prog -> filter method (immutability)
  //   let newCourseList = courses.filter((course) => course.id !== +req.params.id);
  //   courses = newCourseList;

  // object oriented -> splice
  let theIndex = courses.findIndex((course) => course.id === +req.params.id);
  courses.splice(theIndex, 1);

  res.json({ msg: "success" });
});
app.listen(5000, () => console.log("Server running at port 5000 !"));
