import { Rnd } from "react-rnd";

function MyResizableComponent() {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      style={{ border: '1px solid black' }}
    >
      <div>Resizable and Draggable</div>
    </Rnd>
  );
}

export default MyResizableComponent;