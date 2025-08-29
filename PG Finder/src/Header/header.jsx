import LeftSide from "./Left/left";
import MiddleSide from "./Middle/middle";
import Right from "./Right/right";

export default function Header({onHandleSearch}){
    return (
        <div className="header">
            <LeftSide />
            <MiddleSide onHandleSearch={onHandleSearch}/>
            <Right />
        </div>
    ) 
} 