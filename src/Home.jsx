import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Home=()=>{

const {user} = useContext(UserContext);

    return(
        <>
        <h2>Home Page...<small> </small></h2>        

    {/* Stringify porque no puedo imprimir un objeto directamente */}
    <code>
        {JSON.stringify(user,null,3)}
    </code>

        </>
    )
}
export default Home;