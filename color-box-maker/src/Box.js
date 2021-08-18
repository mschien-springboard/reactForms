import './Box.css';
const Box = ({
  id,
  removeBox,
  width = 1,
  height = 1,
  backgroundColor = 'black'
}) => {
  const remove = () => removeBox(id);

  return (
    <div className="Box">
      <div
        className="Box"
        style={{
          height: `${height}rem`,
          width: `${width}rem`,
          backgroundColor
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;