import "./ModalAction.scss"

export default function modalAction(props) {
    if(props.open){
        return (
        <div className="modal">
            <h1>modalAction</h1>
            <button onClick={() => props.setClose(false)}>OPEN-MODAL</button>
      
        </div>
      )
    }
}
