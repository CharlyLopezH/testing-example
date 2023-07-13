import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Login=()=>{

    const {user,setUser} =useContext(UserContext);    

    const onHandleClick = ()=>{setUser({id: 123, name:'Juanito'})};

return(
    <>
    <h2>Login Page... </h2>
    <hr/>
    {/* Stringify porque no puedo imprimir un objeto directamente */}
    <pre>
        {JSON.stringify(user,null,3)}
    </pre>
    <button className="btn btn-primary mt-2"
            onClick={onHandleClick}>
        Set usuario
    </button>
    </>
)

}
export default Login;