import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import FirstText from './components/FirstText';
import SecondText from './components/SecondText';
import Card from './components/Card';
import lightning from './images/icon-snappy-process.svg';
import money from './images/icon-affordable-prices.svg';
import people from './images/icon-people-first.svg';
import Add from './components/Add';
import FooterHead from './components/FooterHead';
import Footer from './components/Footer';

function App() {
  const [data,setData]=useState([
    {
        icon:lightning,
        name:'Snappy Proces',
        description:"Our application process can be completed in minutes,not hours.Don't get stuck filling in tedious forms."
    },
    {
      icon:money,
      name:'Affordable Prices',
      description:'We dont want you to worry about high monthly costs.Our prices might be low but,we still offer the best coverage possible.'
  },
  {
    icon:lightning,
    name:'People First',
    description:"Our plans aren't full of conditions and clausses to prevent payouts.We make sure you're covered when you need it. "
}
]);
  return (
    <div className="App">
     <Header/>
     <FirstText/>
     <SecondText/>
     {data.map((datas) => (
            <Card
              icon={datas.icon}
              name={datas.name}
              description={datas.description}/>
     ))}
     <Add/>
     <FooterHead/>
    </div>
  );
}

export default App;
