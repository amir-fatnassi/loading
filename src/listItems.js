import React from 'react'
import Item from './item';
import SpinHoc from './spinHoc'

function Listitems({newArray, clickNumber}) {
        return (
            <div className="loed">
                {newArray.map((el,i)=><Item key={i} el={el} clicked={(val)=>clickNumber(val)}/>)}
            </div>
        )
}
export default SpinHoc(Listitems)

