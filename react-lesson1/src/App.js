
import './App.css';

//დავალება ერთი
// const Parent = () =>{
//   const usersArray =[
//     { id: 1, name: "keti"},
//     { id: 2, name: "keti2"},
//   ];
//   return (
//   <>
//   < Child usersArray ={usersArray} isUserLoggedIn={true}/>
//   </>
//   );
// };


// const Child = ({ usersArray,isUserLoggedIn}) =>{
//   //1) if user is not logged in return "you are not autorized"
//   //2) if user is logged in:
//   //2.1) if array is not empty - render array
//   //2.2) if array is emoty - return "aray is empty";
//   if (!isUserLoggedIn){
//     return <h1> you are not autorized</h1>
//   }
//   return (
//      <div>
//     {usersArray.length > 0 ? (
//     <>
//        {usersArray.map((item)=>{
//             return <h1 key={item.id}>{item.name}</h1>;
//     })}
//     </> 
//     ): (
//       <h1> array is empty</h1>
//     )}
//      </div>
//      );
// };



// const App=() =>{
//   return (
//     <div className="App">
//       <Parent/>
//     </div>
//   );
// };


// export default App;




const Wraper =({children}) =>{
  return <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>
};
const Navbar =() =>{
  return <h1>Navbar</h1>
};
const Footer =() =>{
  return <h1>Footer</h1>
};


const App=() =>{
  return (
    <Wraper>
      <h1> keti</h1>
      <h2> nanuashvili</h2>
    </Wraper>
  );
};


export default App;