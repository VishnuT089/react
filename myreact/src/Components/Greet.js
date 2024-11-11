import React from 'react'

// function Greet() {
//     return <h1>Hello Vish</h1>

// }

// export const Greet = () => <h1> Hello vishnu</h1> 

//   const Greet = props => {

//     console.log(props)
//     return (
//     <div>
//        <h1>
//        Hello {props.name} a.k.a {props.heroname}
//        </h1>
//        {props.children}
//     </div>
//     )

//    }


   //destructing props 
   const Greet = ({name,heroname}) => {
      return (
         <div>
            <h1>
               Hello {name} a.k.a {heroname}
            </h1>
         </div>
      )
   }

export default Greet