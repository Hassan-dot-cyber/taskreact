function Welcome(props){
  return(
    <div>
      <h1>Welcome back {props.username}</h1>
    </div>
  )
}

function App (){
  return(
    <div>
      <Welcome username='Hassan'/>
    </div>
  )
}
export default App;