import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const About=()=>{

    const {user} = useContext(UserContext);

    return(
        <>
        <h2>
            Acerca de...
        </h2>

        <code>
        {JSON.stringify(user,null,3)}
       </code>

        </>
    )
}
export default About;