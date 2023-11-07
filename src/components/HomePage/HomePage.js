import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FlexboxGrid, Panel } from "rsuite";

const HomePage = (props) => {
  return (
    <Panel style={{zoom:1.8,textAlign:"center"}}>
      <FlexboxGrid>
        <FlexboxGrid.Item>
          <Panel header="Number Of Students">
            <h2>{props.students.length}</h2>
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item>
          <Panel header="Number Of Classes">
            <h2>{props.classes.length}</h2>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
};

export default HomePage;
