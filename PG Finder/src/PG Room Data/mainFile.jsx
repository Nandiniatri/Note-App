import { useState , useEffect} from "react";
import PGRoomData from "./pgRoomData";
import PG from "../PG/pg";

export default function MainFileOFPGRoomData(){
    const [PGData , setPGData] = useState([]);

    async function maleData(){
        const response = await fetch('public/data/Male.json');
        console.log(response);
        const data = await response.json(); 
        console.log(data);
        setPGData(data.flatInfo);
    }

    async function flatData(){ 
        const response = await fetch('public/data/flat.json');
        console.log(response);
        const data = await response.json(); 
        console.log(data);
        setPGData(data.flatInfo);
    }

    async function fetchData(){
        const response = await fetch('public/data/pgData.json');
        console.log(response);
        const data = await response.json();
        console.log(data);
        setPGData(data.PGRoomInfo);
    }

    useEffect(() => {
        fetchData();
    } ,[])

    return (
        <>
            <PG flatData={flatData} fetchData={fetchData} maleData={maleData} /> 
            <PGRoomData PGData={PGData} /> 
        </>
    )
}