import React ,{useState} from "react";
import useInputChange from "./InputChange";
function CustomHooks() {
  const [fname,bname,rname] = useInputChange("")
  const [lname,blname,rlname] = useInputChange("")

 const handleSubmit = (e)=>{
   e.preventDefault()

   alert(fname + " "+ lname)
   rname()
   rlname()
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname"{...bname} />
        <input type="text" name="lname" {...blname} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default CustomHooks;
