import './message.css'
 
 function Message(props) {
   return (props.trigger)?(
     <div className='message'>
        <div className="m-text">
            {props.children}
        </div>
     </div>
   ) : ''
 }
 
export default Message;
