export default function Test(props){


    var a = 321;
    var b = "Accenture"
    return(
    <div>
        
        my Test file {a} and {b} and mobile is {props.mobile} and version is {props.version1} 
    </div>
    )
}

export function Test2({mobile, version1, add1}){

    return(
    <div>
        My Test2 file {mobile} and {version1}
        <button onClick = {add1}>click me</button>
    </div>
    )
}