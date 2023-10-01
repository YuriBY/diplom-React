import { useState } from "react";
import { bookData } from "../../pages/SingleBook";


type TabsProps = Pick<bookData, "desc" | "authors" | 'subtitle'>;

export const Tabs = ({desc, authors, subtitle} : TabsProps) => {
    const [descState, setDescState] = useState(true);
    const [authState, setAuthState] = useState(false);
    const [subState, setSubState] = useState(false);
    const changeStatesFirst = () => {
        setDescState((prev) => !prev);
        setAuthState(false);
        setSubState(false)
    }
    const changeStatesSecond = () => {
        setDescState(false);
        setAuthState((prev) => !prev);
        setSubState(false)
    }
    const changeStatesThird = () => {
        setDescState(false);
        setAuthState(false);
        setSubState((prev) => !prev)
    }
  return (
    <div className="relative mt-8">
        <table>
      <thead className=''>
        <tr>
          <th colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-bebas text-[#A8A8A8] pl-8 cursor-pointer" onClick={changeStatesFirst}>Description</td>
          <td className='font-bebas text-[#A8A8A8] pl-8 cursor-pointer' onClick={changeStatesSecond}>Authors</td>
          <td className='font-bebas text-[#A8A8A8] pl-8 cursor-pointer' onClick={changeStatesThird}>Reviews</td>
        </tr>
      </tbody>
    </table>
    <div className="absolute h-px w-full bg-[#A8A8A8] -bottom-8"></div>
    <div>
        { descState ? 
        <>
            <div className="absolute h-1 w-32 bg-[black] top-14"></div>
            <div className="absolute top-20">{desc}</div>
        </>
         : ''    
        }
        { authState ? 
        <>
            <div className="absolute h-1 w-24 bg-[black] left-32 top-14"></div>
            <div className="absolute top-20">{authors}</div>
        </>
         : ''    
        }
        { subState ? 
        <>
            <div className="absolute h-1 w-24 bg-[black] left-56 top-14"></div>
            <div className="absolute top-20">{subtitle}</div>
        </>
         : ''    
        }
    </div>
    



    </div>
    
  );
};
