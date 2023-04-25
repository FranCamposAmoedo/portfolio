import "./Btn.css";

const Btn = ({ name, path }) => {
    return (
        <a href={path} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-light my-btn">
                {name}
            </button>
        </a>
    );
};

export default Btn;
