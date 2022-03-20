import React from 'react';
//import 
function CalculatorComp() {
    const handleClick=(n1,n2)=>{
        // const sum=add(n1,n2)
        // console.log('Sum',sum);

        //dynamic import
        //code splitting

        import ('../utils/calculator').then((calci)=>{
            const sum=calci.add(n1,n2)
            console.log('Sum',sum);
        })
        import ('../utils/calculator').then((mult)=>{
            const multiple=mult.multi(n1,n2)
            console.log('multi',multiple);
        })

    }
  return <div>
      <button onClick={()=>{handleClick(10,20)}}>Add</button>
  </div>;
}

export default CalculatorComp;
