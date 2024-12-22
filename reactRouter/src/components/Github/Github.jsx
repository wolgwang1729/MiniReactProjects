import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github() {
    const data=useLoaderData();
    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/karpathy`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data);
    //         });
    // }, []);
    const { userid } = useParams();
    return (
        <div className="flex justify-center">Github Followers : {data.followers}</div>
    );
}

export default Github;

export const githubInfoLoader=async()=>{
    const response= await fetch(`https://api.github.com/users/karpathy`);
    const data= await response.json();
    return data;
}