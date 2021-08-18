import './BoxList.css';
import {useState} from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const createBox = (newBoxData) => {
    setBoxes(boxes => [...boxes, newBoxData]);
  };
  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };
  
  const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      height={box.height}
      width={box.width}
      backgroundColor={box.backgroundColor}
      removeBox={removeBox}
    />
  ));

  return (
    <div className="BoxList">
      <NewBoxForm createBox={createBox} />
      {boxComponents}
    </div>
  );
};

export default BoxList;