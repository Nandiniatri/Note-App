import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer/footer'
import Header from './Header/header'
import MainFileOFPGRoomData from './PG Room Data/mainFile'
import MainFileOFPgLine from './PG/mainFile'
import ReadInfo from './Read Imformation/readInfo'
import StanzaSlider from './StanzaSlider/stanzaSlider'
// import MainFileOfSlider from './Slider/mainFile'


function App() {
  const [data , setData] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      const response = await fetch('public/data/PgData.json');
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.PGRoomInfo);
    }
    fetchData();
  } , [])

  console.log(data);

  function onHandleSearch(e){
    const eventTarget = e.target.value;
    console.log(eventTarget);
    const filterData = data.filter((item) => {
    console.log(item);
    return item.title.toLowerCase().includes(eventTarget)
    });
    setData(filterData);
  }
  

  return (
    <>
      <Header onHandleSearch={onHandleSearch} />
      {/* <MainFileOfSlider /> */}
      <StanzaSlider />
      <MainFileOFPgLine/>
      <MainFileOFPGRoomData data={data} />
      <ReadInfo />
      <Footer />
    </>
  )
}

export default App
