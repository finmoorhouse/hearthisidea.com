import React from "react"

const HeaderScroll = () => {
    //This is still a work in progress; it is currently broken!
    let myHeaders = document.getElementsByTagName("h2");
    const headerList = [];
    var i;
    for (i=1;i<myHeaders.length;i++){
    headerList.push(
        <button onClick={jumpToHeader()}>
        <li key={i}>
            {myHeaders[i].innerHTML}
        </li>
        </button>)
    }
    function jumpToHeader(){
        console.log("Hello World");
    }
    return(
    <div>{headerList}</div>
    )
}
export default HeaderScroll