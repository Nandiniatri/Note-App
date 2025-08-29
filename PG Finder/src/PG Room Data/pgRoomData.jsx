import Image from "../Components/img";
// import { useEffect, useState } from "react";
import Button from "../Components/button";

export default function PGRoomData({PGData}){
    //const [PGData , setPGData] = useState([]);

    // async function fetchData(){
    //     const response = await fetch('public/data/pgData.json');
    //     console.log(response);
    //     const data = await response.json();
    //     console.log(data);
    //     setPGData(data.PGRoomInfo);
    // }

    // useEffect(() => {
    //     fetchData();
    // } ,[])


    return (
        <>
            <div className="pgRoom-Container">
                <div>
                    <h2>PGs waiting for you ..........................</h2>
                </div>

                <div>
                    {
                       PGData.map((item) =>{
                            console.log(item);
                            return (
                                <div className="pgRoomDatas-Container" key={item.id}>
                                    <div key={item.id}>
                                        <Image src={item.img}/>
                                    </div> 
                    
                                    <div className="pgRoomDatas-Container-div2">
                    
                    {/* 1st inner */}
                                        <div className="pgRoomDatas-Container-div2-inner"> 
                                            <div key={item.id}>
                                                <span>{item.title}</span>
                                                <p>{item.subTitle}</p>
                                            </div>
                                            <div>
                                                <Button className="pgRoomDatas-Container-div2-inner-Btn">{item.gender}<i class="fa fa-female"></i><i class="fa fa-male"></i></Button>
                                            </div>
                                        </div>
                    {/* end inner */}
                    
                    {/* start inner1 */}
                                        <div className="pgRoomDatas-Container-div2-inner1">
                                            <Button className="pgRoomDatas-Container-div2-inner1-Btn1"><i class="fa fa-bath"></i>{item.bathRoom}</Button>
                                            <Button className="pgRoomDatas-Container-div2-inner1-Btn2"><i class="fa fa-bed"></i>{item.bad}</Button>
                                        </div>
                    {/* end inner1 */}
                    
                    {/* start inner2 */}
                                        <div className="pgRoomDatas-Container-div2-inner2">
                                           <div>
                                                <span>{item.start}</span>
                                                <p>{item.money}</p>
                                           </div> 
                                           <div className="pgRoomDatas-Container-div2-inner2-Btn">
                                                <Button className='btn1'>SCHEDULE A VISIT</Button>
                                                <Button className='btn2'>REQUEST A CALLBACK</Button>
                                           </div>
                                        </div>
                                    </div>
                    {/* end inner2 */}
                                </div>
                            )
                        } )
                    }
                </div>

                
                <div>
                    <div className="pg-Div2">
                        <Image src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1693466683%2FWebsite%2520v5%2Flisting-banners%2FBanners_Desktop-SV_02.jpg&w=1200&q=75"/>
                    </div>
                </div>
            </div>
        </>
    )
}