import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section id="about">
            <img className="bgAbout" src="../images/background/BgAbout.png" alt="" />
            <div className="container">
                <h2>Acerca de mi</h2>
                <hr />
                <div className="container-about">
                    <img src="../images/pictures/DeveloperPopUps.png" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                        wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et accum.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
