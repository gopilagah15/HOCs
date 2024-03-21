import WithCounter from './WithCounter'


const HoverCounter = (props) => {
    const {count,increment} = props
  return (
    <div style={{margin:'50px 0 0 100px'}}>
        <h1>Click Counter</h1> 
        <h2>{count} </h2>
      <button onMouseOver={increment}>Increment</button>
    </div>
  )
}

export default WithCounter(HoverCounter,10)
    
    




