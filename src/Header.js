import React from "react";

// class Header extends Component{      ------> Class component
//     render(){
//         return (
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// }

// ------> Functional component
const Header= ()=>{
    const headerStyle ={textAlign:'center', padding:20, background: 'black', color: 'white', textTransform: 'uppercase'}; 
    return (
        <div className="header" style={headerStyle}>
                Phone Directory
            </div>
    )
}
export default Header;