function AboutSection() {

    const date = new Date().getFullYear();
    const dateOfBirth = 1991;
    const age = date - dateOfBirth;


    return (
        <section className="about" id="about">

            <h1 className="heading"> <span>about</span> me </h1>

            <div className="row">

                <div className="info">
                    <h3> <span> name : </span> safar abbas </h3>
                    <h3> <span> age : </span> {age} </h3>
                    <h3> <span> qualification : </span> B.tech </h3>
                    <h3> <span> post : </span> full stack web developer </h3>
                    <h3> <span> language : </span> english, urdu and punjabi(native) </h3>
                    <a href="https://wa.me/+923016005735" target="_blank"><button className="btn w3-text-green"> whatsapp me! <i className="fa fa-brand fa-whatsapp"></i> </button></a>
                </div>

                <div className="counter">

                    <div className="box">
                        <span>10+</span>
                        <h3>years of experience</h3>
                    </div>

                    <div className="box">
                        <span>40+</span>
                        <h3>porject completed</h3>
                    </div>

                    <div className="box">
                        <span>100+</span>
                        <h3>happy clients</h3>
                    </div>

                    <div className="box">
                        <span>5+</span>
                        <h3>awards won</h3>
                    </div>

                </div>

            </div>

        </section>
    )
}


export default AboutSection;