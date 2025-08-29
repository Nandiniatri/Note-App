import { useState , useEffect} from "react";
import Button from "../Components/button";
import Modal from "../Components/modal";

export default function PG({children , flatData , fetchData , maleData}){
    const [openModal ,  setOpenModal] = useState(false);
    const [pos , setPos] = useState({x: null, y: null});
    const [data , setData] = useState([]); 
    const [data1 , setData1] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('public/data/pg.json');
            console.log(response);
            const data = await response.json();
            console.log(data);
            setData(data.DropDownData);
        }
        fetchData(); 
    }, [])

    function modalData(event , items){
        setOpenModal(!openModal);
        console.log(event);
        const rect = event.target.getBoundingClientRect();
        setPos({x:rect.x , y:rect.y});
        setData1(items);
    }
    
    // function handleHello(){
    //     alert('jnjnj')
    // }

    return (
        <>
            <div className="Pg-Container">
                <div>
                   <a href="#Stanza Living">Stanza Living</a> / <span> PG in Gurgaon</span>
                </div>
                <div className="Pg-ContainerBtnDiv">
                    <div className="Pg-innerBtn-Div">
                        <Button handleClick={fetchData}><i className="fa fa-bed"></i> {''} PG / Hostels</Button>

                        <Button handleClick={flatData}> <i class="fa fa-building"></i> {''} Flats</Button>

                        {data.map((items , index) =>{
                        return (
                            <div key={items.id} >
                                <button onClick={(event) => modalData(event , items , index)}>{' '}{items.name}<i class="fa fa-angle-down"></i></button>
                            </div>
                        )
                    })}
                    </div>
                </div> 

                <Modal isOpen={openModal} onClose={() => setOpenModal(false)} pos = {pos} children={children} maleData={maleData}>
                    
                {data1.type === 'search' ? (
                <div className="modal-div1-Maincontainer">
                    <input type={data1.type} value={data1.value}/>
                        <div className="modal-div1-Maincontainer-btnDiv">
                            {data1.buttons.map((btnItem , index) => {
                                console.log(btnItem);
                                return (
                                    <div>
                                        <button key={index}>{btnItem.text}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div> 
            ): data1.type === 'range' ? (
                <div className="modal-div2-Maincontainer">
                <input type={data1.type} value={data1.value} min={data1.min} max={data1.max}/>
                    <div  className="modal-div1-Maincontainer-btnDiv">
                        {data1.buttons.map((btnItem , index) => {
                            console.log(btnItem);
                            return (
                                <div>
                                    <button key={index}>{btnItem.text}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ): data1.type === 'button' ? (
                <div className="modal-div2-Maincontainer">
                    <div>
                        {data1.buttons.map((btnItem , index , maleData) => {
                            console.log(btnItem);
                            return (
                                <div>
                                    <Button handleClick={maleData} key={index}>{btnItem.text}</Button>     
                                </div>
                            )
                        })}
                    </div>
                </div>
            ): null} 
                </Modal> 
            </div>
        </>
    )
} 
