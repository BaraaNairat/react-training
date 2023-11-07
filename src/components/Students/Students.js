import { useState } from "react";
import {
  Button,
  FlexboxGrid,
  Input,
  Panel,
  Table,
  Calendar,
  DatePicker,
  Divider,
  Dropdown,
} from "rsuite";

const Students = (props) => {
  const [studentNameInput, setStudentNameInput] = useState("");
  const [studnetDateOfBirthInput, setStudnetDateOfBirthInput] = useState();
  const [studentClass, setStudentClass] = useState({});

  const onStudnetNameInputChange = (value) => {
    setStudentNameInput(value);
  };

  const onSaveNewStudent = () => {
    if (studentNameInput === "" || studnetDateOfBirthInput == null) return;
    const students = [...props.students];
    const newStudent = {
      studentName: studentNameInput,
      dateOfBirth: studnetDateOfBirthInput,
      class: [],
    };
    students.push(newStudent);
    props.setSelectedStudent(newStudent);
    props.setSelectedStudentClass(newStudent.class);
    props.setStudents(students);
  };

  const onSelectStudent = (student) => {
    props.setSelectedStudent(student);
    props.setSelectedStudentClass(student.class);
  };

  const onSaveNewStudentClass = () => {
    if (props.selectedStudent == null) return;
    if (studentClass == null) return;
    if (
      studentClass.id == null ||
      studentClass.id === "" ||
      studentClass.className == null ||
      studentClass.className === "" ||
      studentClass.mark <= 0
    )
      return;
    const _selectedStudent = { ...props.selectedStudent };
    _selectedStudent.class.push(studentClass);
    props.setSelectedStudentClass(_selectedStudent.class);
    props.setSelectedStudent(_selectedStudent);
  };

  const onChangeNewStudentClassValue = (value, ref, index) => {
    const _studentClass = { ...studentClass };
    switch (ref) {
      case "id":
        _studentClass.id = value;
        break;
      case "className":
        _studentClass.className = value;
        break;
      case "mark":
        _studentClass.mark = value;
        break;
    }

    setStudentClass(_studentClass);
  };

  const { Column, HeaderCell, Cell } = Table;

  return (
    <Panel>
      <Panel header="Students Defintion">
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={5}>
            <Input
              value={studentNameInput}
              placeholder="Student Name..."
              onChange={onStudnetNameInputChange}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
            <DatePicker
              style={{ width: "100%" }}
              oneTap
              size="md"
              onSelect={(date) => {
                setStudnetDateOfBirthInput(
                  date.getFullYear() +
                    "/" +
                    date.getMonth() +
                    "/" +
                    date.getDate()
                );
              }}
              placeholder="Enter Student Date Of Birth"
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
            <Button
              onClick={() => {
                onSaveNewStudent();
              }}
            >
              New Students
            </Button>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
      <Divider />
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <Panel header="Students">
            <Table
              data={props.students}
              height={500}
              onRowClick={(rowDate) => {
                onSelectStudent(rowDate);
              }}
            >
              <Column flexGrow={true} align="center" fixed>
                <HeaderCell>Student Name</HeaderCell>
                <Cell dataKey="studentName" />
              </Column>
              <Column flexGrow={true} align="center" fixed>
                <HeaderCell>Date Of Birth</HeaderCell>
                <Cell dataKey="dateOfBirth" />
              </Column>
            </Table>
          </Panel>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item colspan={12}>
          <Panel header="Student Class">
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
                <Input
                  placeholder="Student Id.."
                  value={studentClass.id}
                  onChange={(value) => {
                    onChangeNewStudentClassValue(value, "id");
                  }}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
                <Dropdown
                  style={{ width: "100%" }}
                  title={
                    studentClass.className
                      ? studentClass.className
                      : "Select Class"
                  }
                >
                  {props.classes.map((value, index) => (
                    <Dropdown.Item
                      style={{ width: "100%" }}
                      key={index}
                      onSelect={() => {
                        onChangeNewStudentClassValue(value, "className");
                      }}
                    >
                      {value}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
                <Input
                  type="number"
                  style={{ width: "100%" }}
                  placeholder="Mark"
                  value={studentClass.mark}
                  onChange={(value) => {
                    onChangeNewStudentClassValue(value, "mark");
                  }}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
                <Button
                  onClick={() => {
                    onSaveNewStudentClass();
                  }}
                >
                  Save Student Class
                </Button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
            <br />
            <Table
              data={props.selectedStudentClass}
              style={{ width: "100%" }}
              height={500}
            >
              <Column flexGrow={true} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>
              <Column flexGrow={true} align="center" fixed>
                <HeaderCell>Class</HeaderCell>
                <Cell dataKey="className" />
              </Column>
              <Column flexGrow={true} align="center" fixed>
                <HeaderCell>Mark</HeaderCell>
                <Cell dataKey="mark" />
              </Column>
            </Table>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
};

export default Students;
