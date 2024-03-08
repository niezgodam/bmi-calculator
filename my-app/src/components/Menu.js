import React, { useState } from 'react';

const Menu = () => {
  const [weight,setWeight] = useState('');
  const [height,setHeight] = useState('');
  const [submits,setSubmits] = useState(false);
  const [entering,setEntering] = useState(false);
  const [correctData,setCorrectData] = useState(true);

  let bmi = (weight.replace(/,/gm,".")/(height.replace(/,/gm,".")*2))*100;
  let state,color;
  

  if(bmi < 18.5){
    state = "Underweight";
    color = "text-blue-500";
  }else if(bmi >= 18.5 && bmi <= 24.9){
    state = "Normal";
    color = "text-green-600";
  }else if(bmi >= 25 && bmi <= 29.9){
    state = "Overweight";
    color = "text-yellow-400";
  }else if(bmi > 30){
    state = "Obese";
    color = "text-red-600";
  }


  const writeHeight = (e) => {
      setHeight(e.target.value);
      setEntering(true);
  }

  const writeWeight = (e) => {
    setWeight(e.target.value)
    setEntering(true);
}

const handleSubmit = (e) => {
  if((weight.trim() === '' || height.trim() === '') || isNaN(bmi)){
    setCorrectData(false);
  }else{
    setCorrectData(true);
    setSubmits(true);
    setEntering(false);
    e.preventDefault();
  }
}

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="max-w-[1200px] mx-auto bg-slate-200 shadow-xl shadow-black flex rounded-md items-center justify-center py-8 px-[64px]">
            <div>
              <div className="text-center">
                <h1 className="pt-2 pb-8 text-2xl font-bold uppercase">BMI Calculator</h1>
              </div>
              <div className="max-w-[500px] mx-auto py-4">
                <h6 className="w-full text-xl font-bold">Weight[kg]</h6>
                  <input className="w-full text-xl rounded-md outline-1 outline" type='text' onChange={writeWeight}/>
              </div>
              <div className="max-w-[500px] mx-auto">
                <h6 className="w-full text-xl font-bold">Height[m]</h6>
                  <input className="w-full text-xl rounded-md outline-1 outline" type='text' onChange={writeHeight}/>
              </div>
              <div className="pt-4">
                <button className="flex justify-center w-full p-2 mx-auto text-center text-white bg-gray-700 border-gray-500 rounded-md hover:bg-gray-900" onClick={handleSubmit}>Submit</button>
              </div>
              <div className="flex justify-center pt-4 font-bold">
                <h1 className="text-2xl ">Your bmi is:</h1>
              </div>
              
              {correctData ? 
                  <div className="w-full h-[100px] flex justify-center items-center">
                      <h1 className={(submits === true && entering === false) ? `fixed text-2xl uppercase font-bold pb-8 ${color}`:"hidden"}>{bmi.toPrecision(4)}</h1>
                      {(submits === true && entering === false) ? <h6 className={`pt-8 uppercase font-bold ${color}`}>{state}</h6> : <h1 className="hidden"></h1>}
                  </div>    :
                  
                  <div className='flex justify-center p-4 bg-red-600'>
                    <h1 className='text-2xl font-bold text-white'>Incorrect data entered</h1>
                  </div>  
            }

            </div>
        </div>
    </div>
  )

}

export default Menu;
