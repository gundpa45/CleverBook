import { useState , useRef} from "react";

function Profile(){
    const menus=["profile","setting","apps","logout"]

    const [opean,setOpean] =useState(false) 
    const menuRef = useRef();
    const imgRef = useRef();

        window.addEventListener('click',(e)=> {
            console.log(e.target===menuRef.current)
        } )


    return(
        <div className="relative cursor-pointer">
             <h1
              ref={imgRef}
              onClick={()=>setOpean(!opean)}
             >
                Product
             </h1>

            {
              opean &&  (
                <div 
                ref={menuRef}
                className="flex flex-col justify-center items-center">
                <ul className="  mx-auto bg-white p-4 w-52 rounded-lg shadow-lg absolute  top-16 ">
                {
                    menus.map((menu)=>(
                            <li
                            onClick={()=> setOpean(false)}
                            className="p-2 text-lg text-black capitalize cursor-pointer
                             rounded hover:bg-blue-100" key={menu}>{menu}

                            </li>

                    ))
                }                    
                </ul>
            </div>
              ) 
            }
          
             
          
            
        </div>
    )
}

export default Profile;