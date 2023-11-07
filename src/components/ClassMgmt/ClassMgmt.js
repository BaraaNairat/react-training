import { useEffect, useState } from "react";
import { Button, FlexboxGrid, Input, Panel, List } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
const ClassMgmt = (props) => {
  const [newClassNameInput, setNewClassNameInput] = useState("");

  const newClass = () => {
    if (newClassNameInput === "") return;
    const _classes = [...props.classes];
    _classes.push(newClassNameInput);
    props.setClasses(_classes);
    setNewClassNameInput("");
  };

  const newClassNameInputChange = (value) => {
    setNewClassNameInput(value);
  };
  return (
    <div>
      <Panel>
        <div className="show-grid">
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={5}>
              <Input
                value={newClassNameInput}
                placeholder="Enter Class Description..."
                onChange={newClassNameInputChange}
                style={{ width: "100%" }}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={5} style={{ marginLeft: 10 }}>
              <Button
                style={{ width: "50%" }}
                onClick={() => {
                  newClass();
                }}
              >
                <PlusIcon style={{ position: "relative", right: 20 }} />
                Create New Class
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
        <br />
        <Panel header={props.classes.length === 0 ? "" : "Classes"}>
          {props.classes.length === 0 ? (
            ""
          ) : (
            <List hover>
              {props.classes.map((value, index) => (
                <List.Item key={index} style={{ padding: 10, paddingLeft: 20 }}>
                  {value}
                </List.Item>
              ))}
            </List>
          )}
        </Panel>
      </Panel>
    </div>
  );
};

export default ClassMgmt;
