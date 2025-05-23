import { useContext, useState } from "react";
import Button from "../components/Button";
import './Notes.css';
import { allDataContext } from "../contextApi/AllDataContextApi";
import { TiDelete } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdCheck } from "react-icons/md";


const Notes = () => {
    const [notes, setNotes] = useState([]);
    const { bgColor, setShowModal, showModal } = useContext(allDataContext);
    const [saveNote, setSaveNote] = useState([]);

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'bullet' }]
        ]
    }


    const handleQuillValue = (value, id) => {
        // console.log(value);
        // setNotes(prev => pre)
        // setQuillValue(value);

        setNotes(prev =>
            prev.map((item) =>
                item.id === id ? { ...item, quill: value } : item)
        )
    }


    const handleSaveNote = () => {
        // setSaveNote(notes);
        setSaveNote((prev) => [...prev, ...notes]);
    }


    const handleNotesAdd = () => {
        const newNote = [{
            id: Date.now(), bgColor: "gray", quill: ""
        }]

        setNotes(newNote);
    };

    const handleNoteDel = (id) => {
        setNotes(notes.filter((i) => i.id !== id));
    };

    const handleThreeDot = () => {
        setShowModal(!showModal);
    };

    const handleBgColor = (color, id) => {
        console.log(color);
        setNotes(notes.map(note =>
            note.id === id ? { ...note, bgColor: color } : note
        ));
    };

    return (
        <div className="note-main-container-div">
            <div className="div1">
                <Button onClick={handleNotesAdd} className="noteBtn">+ Note</Button>
                <div className="notes-main-container">
                    {notes.map((note) => {
                        return (
                            <div
                                key={note.id}
                                className="notes-inside-div"
                            >
                                <div className="quill-container-div" style={{ backgroundColor: note.bgColor }} draggable><ReactQuill theme="snow" modules={modules} onChange={(value) => handleQuillValue(value, note.id)} /></div>

                                <div className="button-div">
                                    <p onClick={() => handleThreeDot(note.id)} className="btn-div1"> <FiMoreHorizontal size={20} /></p>

                                    <p onClick={() => handleNoteDel(note.id)} className="btn-div2"><TiDelete size={23} /></p>

                                    <p onClick={handleSaveNote}><MdCheck size={24} /></p>
                                </div>

                                <div>
                                    {showModal && (
                                        <div className="showModal-div">
                                            {bgColor.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="color-box"
                                                    style={{ backgroundColor: item.backgroundColor }}
                                                    onClick={() => handleBgColor(item.backgroundColor, note.id)}
                                                ></div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    );
};

export default Notes;
