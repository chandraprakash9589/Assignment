import { useParams } from "react-router-dom";

function User(){
  const param = useParams();
  const {name} = param;
  return(
    <div>
      <h1>this is {name}'s page...</h1>
    </div>
  )
}

export default User;