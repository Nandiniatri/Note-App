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
//                         <Draggable key={note.id}>
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
import { GoPlus } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";
import { allDataContext } from '../contextApi/AllDataContextApi';
// import { Resizable, ResizableBox } from 'react-resizable';
// import 'react-resizable/css/styles.css';
import 'react-quill/dist/quill.snow.css';
import { Rnd } from 'react-rnd';



const Note = () => {
    const [notes, setNotes] = useState([]);
    const [dragged, setDragged] = useState(null);
    const { bgColor } = useContext(allDataContext);

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


    const handleThree = (id) => {
        setNotes(notes.map((itm) =>
            itm.id === id ? { ...itm, showModal: !itm.showModal } : itm))
    }


    const handleDel = (note) => {
        setNotes(notes.filter((i) => i.id !== note.id));
    }


    const handleMouseMove = (event) => { //isme mouse event ke accroding hmra notes move krega
        setNotes((prevNote) =>
            prevNote.map((item) =>
                item.id === dragged ? { ...item, x: event.clientX, y: event.clientY } : item
            ))
    }


    const handleMouseUp = () => {
        setDragged(null);
    }


    const handleMouseDown = (event, note) => {   //yha par mouse down hone ki position le raha hai.
        setDragged(note.id);
    }


    const handleReactQuillValue = (note) => {
        // console.log(note);
    }

    const handleAddNote = () => {
        const offset = notes.length * 25;
        // console.log(offset);

        const newNote = { id: Date.now(), content: "", x: 10 + offset, y: 10 + offset, bgColor: '#9E9E9E', showModal: false, width: 200, height: 200 };
        setNotes((prev) => [...prev, newNote]);
    }

    const updatedAllPosition = (id, itm) => {
        console.log(itm);
        setNotes(prevNotes => prevNotes.map(note =>
            note.id === id ? { ...note, ...itm } : note
        )
        )
    }

    return (
        <div className='note-Main-Container' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div>
                <Button className="custom-note-button" onClick={handleAddNote}> <GoPlus size={20} /> Note</Button>
            </div>

            <div className='notes-container'>
                {notes.map((note) => {
                    return (
                        <Rnd key={note.id}
                            size={{ width: note.width, height: note.height }}
                            position={{ x: note.x, y: note.y }}
                            onDragStop={(e, d) => {
                                updatedAllPosition(note.id, { x: d.x, y: d.y })
                            }}
                            onResizeStop={(e, direction, ref, delta, position) => {
                                updatedAllPosition(note.id, {
                                    width: parseInt(ref.style.width),
                                    height: parseInt(ref.style.height),
                                    ...position,
                                })
                            }}
                            minWidth={200}
                            minHeight={150}
                            bounds="window"
                            enableResizing={{
                                top: true,
                                right: true,
                                bottom: true,
                                left: true,
                            }}
                        >
                            <div key={note.id} className='sticky-note' onMouseDown={(event) => handleMouseDown(event, note)} style={{
                                height: '122%',
                                width: '130%',
                                display: 'flex',
                                // flexDirection: 'column',
                                backgroundColor: note.bgColor,
                                // borderRadius: '8px',
                                // boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                overflow: 'hidden'
                            }}>
                                <div className='note-del-div' style={{ display: 'flex', justifyContent: 'flex-end', padding: '4px' }}>
                                    <RxDotsVertical size={18} onClick={() => handleThree(note.id)} className='threeDot' />
                                    <MdDeleteOutline size={19} onClick={() => handleDel(note)} className='del-class' />
                                </div>

                                <div>
                                    {note.showModal && (
                                        <div className="color-picker" style={{ display: 'flex', padding: '4px', gap: '5px', flexWrap: 'wrap' }}>
                                            {bgColor.map((item) => {
                                                return (
                                                    <div
                                                        key={item.id}
                                                        className="color-box"
                                                        style={{
                                                            backgroundColor: item.bg,
                                                            // width:'20%',
                                                            // display:'flex',
                                                            // flexDirection:'row'
                                                        }}
                                                        onClick={() => handleBgColors(item.bg, note.id)}
                                                    ></div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>

                                <div style={{ backgroundColor: note.bgColor, flexGrow: 1, overflow: 'auto' }}>
                                    <ReactQuill modules={modules} theme='snow' onChange={() => handleReactQuillValue(note)} placeholder='Add your notes...' className='quill-container' style={{
                                        height: '100%',
                                        border: 'none',
                                        backgroundColor: note.bgColor
                                    }} />
                                </div>
                            </div>
                        </Rnd>
                    )
                })}
            </div>
        </div>
    )
}

export default Note;



