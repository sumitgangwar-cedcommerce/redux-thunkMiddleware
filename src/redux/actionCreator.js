
export const fetchData = ()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(res => {dispatch({type:'saveData' , payload : res})}) 
    }
}

