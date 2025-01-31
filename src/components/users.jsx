import { data } from "react-router-dom";

const User =(props)=>{
    const {data} = props
    console.log(props.data.name,"props");
    return(<>
    <h1>User Component</h1>
    <h4>{data.name}</h4>
    </>)
}
export default User