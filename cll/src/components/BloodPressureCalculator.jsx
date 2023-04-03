import { useState } from "react";
/* Systolic and diastolic blood pressure make up the two numbers in a blood pressure reading (e.g., 120/80).
Systolic blood pressure, or the top number, is the amount of pressure experienced by the
arteries while the heart is beating. Diastolic blood pressure (the bottom number)
is the amount of pressure in the arteries while the heart is resting in between heart beats.
hhhhh */ 
export default function BloodPressureCalculator() {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);

    if (isNaN(sys) || isNaN(dia)) {
      setResult("Please enter valid readings");
      return;
    }

    if (sys < 90 || sys > 140 || dia < 60 || dia > 90) {
      setResult("Your blood pressure is abnormal");
      return;
    }

    if (sys > 120 && dia > 80) {
      setResult("Your blood pressure is elevated");
      return;
    }

    setResult("Your blood pressure is normal");
  };

  return (
    <div>
       <div className="heading w-full bg-blue-400 rounded text-center text-lg">
       Blood Pressure Calculator
      </div>
    
      <label  className="block text-sm font-medium leading-6 text-gray-900" htmlFor="systolic">Systolic Reading:</label>
      <input
        type="number"
        id="systolic"
        className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value)}
      />
      <br />
      <label className="block text-sm font-medium leading-6 text-gray-900"  htmlFor="diastolic">Diastolic Reading:</label>
      <input
        type="number"
        className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="diastolic"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value)}
      />
      <br />
      <button  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={calculate}>Calculate</button>
      <br />
      <p className="result mt-2 bg-blue-400 py-3 rounded text-center">{result}</p>
    </div>
  );
}
