import "./Form.css";

const Form = () => {
    return (
        <section id="contact" className="container-xxl d-flex justify-content-center">
            <form /* onSubmit={sendEmail} */ className="speaker-form container">
                <div className="row">
                    <div className="form-row col-5">
                        <label htmlFor="line">
                            <h3 className="form-title">CONTACTANOS</h3>
                        </label>
                        <input id="line" name="line" type="text" disabled />
                    </div>
                    <div className="form-row col-5">
                        <label htmlFor="name">Nombre</label>
                        <input id="name" name="name" type="text" required />
                    </div>
                    <div className="form-row col-5">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" name="email" type="email" required />
                    </div>
                    <div className="form-row col-5">
                        <label htmlFor="tel">Teléfono</label>
                        <input id="tel" name="tel" type="tel" />
                    </div>
                    <div className="form-row col-5">
                        <label htmlFor="abstract">Consulta</label>
                        <textarea id="abstract" name="textarea" required></textarea>
                    </div>
                    <div className="form-row col-5">
                        <button type="submit">ENVIAR</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Form;
