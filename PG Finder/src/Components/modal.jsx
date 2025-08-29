import Button from "./button"

const Modal = ({children , isOpen , onClose , pos}) => {
    
    function HandleClose(){
        onClose();
    }

    return (isOpen &&(
        <div className="react-modal-overlay" onClick={onClose} style={{left:pos.x}}>
            <div className="react-modal-wrapper" onClick={e => e.stopPropagation()}>
                <div className="react-modal-content">
                    {children}
                    <Button className="modal-Close-Btn" handleClick={HandleClose}>close</Button>
                </div>
            </div>
        </div>
    ))
}

export default Modal  