import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";

function FoodFind(){
    const [fd,setFd]=useState('마포')
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    /*
        View              Model                       Controller
       React =====> (actions ====== reducer) ========= store
             dispatch(배달)  dispatch                     |
                                                       react => useSelector
     */
    useEffect(() => {

    }, [fd,curpage]);
    return (
        <Fragment>
            <div className={"row"}>
                <input type={"text"} size={"20"} className={"input-sm"}/>
                <input type={"button"} value={"검색"} className={"btn-sm btn-primary"}/>
            </div>
            <div style={{"height":"10px"}}></div>
            <div className={"row"}>

            </div>
            <div className={"row"}>
                <div className={"text-center"}>

                </div>
            </div>
        </Fragment>
    )
}
export default FoodFind