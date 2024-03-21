import WithCounter from './WithCounter'


const ClickCounter = (props) => {
    const {count,increment} = props
  return (
    <div style={{margin:'50px 0 0 100px'}}>
        <h1>Click Counter</h1> 
        <h2>{count} </h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default WithCounter(ClickCounter,10)
    
    




