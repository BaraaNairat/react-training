import { useEffect } from "react";

const DataComponent = (classes, setClasses) => {
  const [_classes, _setClasses] = useState([]);

  useEffect(() => {
    setClasses(_classes);
  },_classes);

  

};
export default DataComponent;
