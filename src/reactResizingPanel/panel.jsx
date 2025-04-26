import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableDiv = () => {
    return (
        <div>
            <ResizableBox
                width={200}
                height={200}
                minConstraints={[10, 10]}
                maxConstraints={[1000, 600]}
                resizeHandles={['s', 'e', 'n', 'w', 'ne', 'nw', 'se', 'sw']}
                style={{
                    border: '2px solid #007bff',
                    padding: '20px',
                    background: '#f0f0f0',
                    boxSizing: 'border-box',
                }}
            >
                Resizable Box
            </ResizableBox>
        </div>
    );
};
 
export default ResizableDiv;
