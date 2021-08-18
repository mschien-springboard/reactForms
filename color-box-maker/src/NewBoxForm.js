import './NewBoxForm.css';
import {useState} from 'react';
import {v4 as uuid} from 'uuid';

const NewBoxForm = ({ createBox }) => {
  const initialState = {
    height: "",
    width: "",
    backgroundColor: ""
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({...formData, id: uuid()});
    setFormData(initialState);
  };

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            id="height"
            name="height"
            type="text"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            name="width"
            type="text"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            name="backgroundColor"
            type="text"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <button id="NewBoxForm-btn">Add Box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;