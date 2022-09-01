import Form from './form';

function ContactMe() {
    return (
        <section className="contact" id="contact">

            <h1 className="heading"> <span>contact</span> me </h1>

            <div className="row">

                <div className="content">

                    <h3 className="title">contact me</h3>

                    <div className="info">
                        <a href="mailto: safarabbas_2010@hotmail.com" target="_blank"><h3> <i className="fas fa-envelope"></i> click to email me! </h3></a>
                        <a href="https://wa.me/+923016005735" target="_blank"><h3 > <i className="fa fa-brand fa-whatsapp"></i> click to whatsapp! </h3></a>


                        <h3> <i className="fas fa-map-marker-alt"></i> bhera, sargodha, Pakistan. </h3>
                    </div>

                    {/* social media links */}
                    <h4 style={{ color: "white", paddingTop: "3rem" }}>Find me on social media.</h4>
                    <a href="https://www.facebook.com/profile.php?id=100063868455987" target="_blank"><i className="w3-margin-right fa fa-facebook-official w3-hover-opacity"></i></a>
                    <a href="https://www.instagram.com/safarabbas_2010/" target="_blank"><i className="fa fa-instagram w3-hover-opacity w3-margin-right"></i></a>


                    <a href="https://www.linkedin.com/in/safar-abbas-a91090103" target="_blank"><i className="fa fa-linkedin w3-hover-opacity w3-margin-right"></i></a>
                    <a href="https://twitter.com/safarabbas_sk" target="_blank"><i className="fa fa-twitter w3-hover-opacity w3-margin-right"></i></a>


                </div>

                <Form />

            </div>

        </section>
    )
}

export default ContactMe;