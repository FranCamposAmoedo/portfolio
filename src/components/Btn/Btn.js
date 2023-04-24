import "./Btn.css"

const Btn = (props) => {
    return (
        <button type="button" className="btn btn-light my-btn">{props.name}</button>
    )
}

export default Btn;