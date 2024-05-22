import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const[count,setCount]=useState<number>(0);
  const [name,setName]=useState<string>("");
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState({})
  useEffect(()=>{
    console.log("Effect được gọi");
  },[cart])
  const handleClick=()=>{
    setCount(count+1)
    
  }
    useEffect(()=>{
      console.log("useEffect được ");
      
    })
    //đoạn đi xử lí logic 

  return (
    <div>
      UseEffect
      {
        /*
            UseHook :là hook 
            sinh ra để làm gì?
                - giải quyết các vấn đề side efect (tác dụng phụ bên cạnh tác động chính)
            CÚ PHÁP
            3 cú pháp useEffect 
            useEffect tương tự componentDidMount
            cú pháp như thê nao?
            useEffect là 1 cái hàm 
            useEffect nhận vào 2 cái tham số 
            1 nhận vào 1 tham số là CallBack function (arrow function)
                  +Khi component dduoejc mount vaof DOM thif useEffect được gọi 
                  + Khi mỗi lần component re-render thì useEffect được gọi
            2 nhận vào 1 tham số là callback function (arrow function ) và tham số thứ 2 là một mảng rỗng[]
                  + khi Components được mount vào Dom thì useEffect được gọi
                  + khi mỗi lần component re-render thì useEffect không đuoẹc gọi 
            3.nhận vào 1 tham số là callback function (arrow function ) và tham số thứ 2 là một mảng [dêpndency](sự phụ thuốc)
                  +useEffect được gọi khi component được mount vào DOM
                  + KHi Denpentdent thay đổi thì useEffect được gọi
            cách dùng như thê nào?

        */
      }
      <p>Gía trị biến count:{count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
