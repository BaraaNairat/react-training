import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import ClassMgmt from "./components/ClassMgmt/ClassMgmt.js";
import Students from "./components/Students/Students.js";
import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const App = () => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState("home");
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState();
  const [selectedStudentClass, setSelectedStudentClass] = useState([]);
  return (
    <>
      <Nav
        appearance="tabs"
        activeKey={active}
        style={{ marginLeft: 10, marginTop: 10, zoom: 1.4 }}
      >
        <Nav.Item
          eventKey="home"
          icon={<HomeIcon />}
          onSelect={() => {
            navigate("/");
            setActive("home");
          }}
        >
          Home Page
        </Nav.Item>
        <Nav.Item
          eventKey="class"
          onSelect={() => {
            navigate("/classes");
            setActive("class");
          }}
        >
          Classes
        </Nav.Item>
        <Nav.Item
          eventKey="students"
          onSelect={() => {
            navigate("/students");
            setActive("students");
          }}
        >
          Students
        </Nav.Item>
      </Nav>
      <Routes>
        <Route
          path="/"
          element={<HomePage classes={classes} students={students} />}
        ></Route>
        <Route
          path="classes"
          element={<ClassMgmt classes={classes} setClasses={setClasses} />}
        />
        <Route
          path="students"
          element={
            <Students
              students={students}
              setStudents={setStudents}
              selectedStudent={selectedStudent}
              setSelectedStudent={setSelectedStudent}
              selectedStudentClass={selectedStudentClass}
              setSelectedStudentClass={setSelectedStudentClass}
              classes={classes}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
