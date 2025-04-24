



// import { useState } from 'react';
// import Button from '../components/Button';
// import './Note.css';
// import ReactQuill from 'react-quill';
// import Image from '../components/Image';
// import { GoPlus } from "react-icons/go";
// import Draggable from 'react-draggable';

// const Note = () => {
//     const [notes, setNotes] = useState([]);

//     const modules = {
//         toolbar: [
//             ['bold', 'italic', 'underline'],
//             [{ list: 'bullet' }]
//         ]
//     }

//     const handleReactQuillValue = (note) => {
//         console.log(note);

//     }

//     const handleAddNote = () => {
//         const newNote = { id: Date.now(), content: "" };
//         setNotes((prev) => [...prev, newNote])
//     }

//     return (
//         <div className='note-Main-Container'>
//             <div>
//                 <Button className="custom-note-button" onClick={handleAddNote}> <GoPlus size={20} /> Note</Button>
//             </div>

//             <div className='notes-container'>
//                 {notes.map((note) => {
//                     return (
//                         <Draggable>
//                             <div key={note.id} className='sticky-note'>
//                                 <ReactQuill modules={modules} theme='snow' onChange={() => handleReactQuillValue(note)} placeholder='Add your notes...' />
//                             </div>
//                         </Draggable>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Note;



import { useContext, useState } from 'react';
import Button from '../components/Button';
import './Note.css';
import ReactQuill from 'react-quill';
import Image from '../components/Image';
import { GoPlus } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { Resizable } from 'react-resizable';
import { RxDotsVertical } from "react-icons/rx";
import { allDataContext } from '../contextApi/AllDataContextApi';


const Note = () => {
    const [notes, setNotes] = useState([]);
    const [dragged, setDragged] = useState(null);
    const { bgColor, setShowModal, showModal } = useContext(allDataContext);

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'bullet' }]
        ]
    }

    const handleBgColors = (bg, id) => {
        console.log(bg, id);

        setNotes(notes.map(itm =>
            itm.id === id ? { ...itm, bgColor: bg } : itm
        ))
    }

    const handleThree = () => {
        setShowModal(!showModal);
    }

    const handleDel = (note) => {
        // console.log(note.id);
        setNotes(notes.filter((i) => i.id !== note.id));

    }

    const handleMouseMove = (event) => { //isme mouse event ke accroding hmra notes move krega
        // console.log(event);

        setNotes((prevNote) =>
            prevNote.map((item) =>
                item.id === dragged ? { ...item, x: event.clientX, y: event.clientY } : item
            ))
    }

    const handleMouseUp = () => {
        setDragged(null);
    }


    const handleMouseDown = (event, note) => {   //yha par mouse down hone ki position le raha hai.
        // console.log(note.id);
        // console.log(event);
        // console.log("X", event.clientX);
        // console.log("Y", event.clientY);
        setDragged(note.id);
    }

    const handleReactQuillValue = (note) => {
        console.log(note);

    }

    const handleAddNote = () => {
        const newNote = { id: Date.now(), content: "", x: 100, y: 100, bgColor: '#F7E999' };
        setNotes((prev) => [...prev, newNote])
    }

    return (
        <div className='note-Main-Container' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div>
                <Button className="custom-note-button" onClick={handleAddNote}> <GoPlus size={20} /> Note</Button>
            </div>

            <div className='notes-container'>
                {notes.map((note) => {
                    return (
                        // <Resizable
                        //     width='20px'
                        //     height='20px'
                        //     resizeHandles={['se']}>
                        <div key={note.id} className='sticky-note' onMouseDown={(event) => handleMouseDown(event, note)} style={{
                            position: 'absolute',
                            top: note.y,
                            left: note.x,
                            width: '220px',
                            cursor: 'grab',
                            backgroundColor: note.bgColor
                        }}>
                            <div className='note-del-div'>
                                <RxDotsVertical size={18} onClick={handleThree} className='threeDot' />
                                <MdDeleteOutline size={19} onClick={() => handleDel(note)} className='del-class' />
                            </div>
                            <div>
                                {showModal && (
                                    <div className="color-picker">
                                        {bgColor.map((item) => {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="color-box"
                                                    style={{ backgroundColor: item.bg }}
                                                    onClick={() => handleBgColors(item.bg, note.id)}
                                                ></div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>

                            <div style={{ backgroundColor: note.bgColor }}>
                                <ReactQuill modules={modules} theme='snow' onChange={() => handleReactQuillValue(note)} placeholder='Add your notes...' className='quill-container' />
                            </div>
                        </div>
                        // </Resizable>
                    )
                })}
            </div>
        </div>
    )
}

export default Note;