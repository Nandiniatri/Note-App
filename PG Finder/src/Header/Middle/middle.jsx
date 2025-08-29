import { useEffect, useState } from "react";
import Button from "../../Components/button";
import Input from "../../Components/input";

export default function MiddleSide({onHandleSearch}){
    // const [data , setData] = useState([]);

    // async function fetchData(){
    //     const response = await fetch('/public/data/PgData.json');
    //     console.log(response); 
    //     const data = await response.json();
    //     console.log(data);
    //     setData(data.PGRoomInfo);
    // }

    // useEffect(() =>{ 
    //     fetchData();
    // },[])

    // function handleChangeInput(e){
    //     const eventTarget = e.target.value;
    //     console.log(eventTarget);
    //     const filterData = data.filter((item) =>{
    //         return item.title.toLowerCase().includes(eventTarget);
    //     })
    //     setData(filterData);
    // }

    return (
        <div className="middle">
            <Input handleInput={onHandleSearch} className="header-MiddleInput" type="search" placeholder="Find in and around..." />
            <Button className="header-MiddleBtn">Search</Button>
        </div>
    ) 
}