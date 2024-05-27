import { win,avg_daily_profit,price,names,rank,calmar_ratio,overall_profit,Action } from "./calculation";

function App() {
  return (
    <div className="  ">
    <div className=" font-mono text-4xl font-medium mt-2 text-pink-400 underline ml-16 ">
    LeaderBoard


    </div>

    <div className=" flex justify-center mt-4">
      <div className="border p-4 w-11/12 rounded-lg shadow-lg shadow-pink-300  ">

      <div className="flex justify-between">
      <div className="text-2xl font-mono font-semibold ml-4  ">Basic BackTest</div>
      <div className=" "><span className="border rounded-md bg-slate-300 font-mono p-2">Slippage</span><span className="border rounded-md font-mono p-2">0%</span></div>

      </div>
      
      <div className="flex justify-between mt-2">
      <div className="font-mono ml-4 ">
     
      <h1 className=" font-semibold text-xl">Rank</h1>
        {
          rank.map((item,index)=>(
            <div className="mt-2 p-2 flex justify-center font-light">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono">
      <h1 className=" font-semibold text-xl">Name</h1>
        {
          names.map((item,index)=>(
            <div className="mt-2 p-2 flex font-light ">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono">
      <h1 className=" font-semibold text-xl">Calmar Ratio</h1>
        {
          calmar_ratio.map((item,index)=>(
            <div className="mt-2 p-2 flex justify-center font-light">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono">
      <h1 className=" font-semibold text-xl">Overall Profit</h1>
        {
          overall_profit.map((item,index)=>(
            <div className="mt-2 flex p-2 justify-center font-light">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono">
      <h1 className=" font-semibold text-xl">Avg Daily Profit</h1>
        {
          avg_daily_profit.map((item,index)=>(
            <div className="mt-2 flex p-2 justify-center font-light">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono">
      <h1 className=" font-semibold text-xl">Win%</h1>
        {
          win.map((item,index)=>(
            <div className="mt-2 p-2 flex justify-center font-light">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono">
      <h1 className=" font-semibold text-xl">Price</h1>
        {
          price.map((item,index)=>(
            <div className="mt-2 flex justify-center font-light border-none p-2">
              {item}
            </div>
            
          ))
        }
      </div>
      <div className="font-mono mr-2">
      <h1 className=" font-semibold text-xl">Action</h1>
        {
          Action.map((item,index)=>(
            <div className="mt-2 flex justify-center font-light border border-pink-400 p-2 rounded-md hover:bg-pink-400 hover:text-white cursor-pointer">
              {item}
            </div>
            
          ))
        }
      </div>
      </div>



      </div>
    </div>
      
    </div>
  );
}

export default App;
