import './Contact.css'

export const Contact = () => {

    return (
        <div className="contact-page">
            <section>
                <div className="form-container">
                    <h2>Get in touch</h2>
                    <form method="post" action="https://formsubmit.co/e0d65407cee9bc287c37dda4baa92104" >
                        <div className="fields">
                            <div className="field half">
                                <input type="text" name="name" placeholder="Name" id="name" value="" />
                            </div>
                            <div className="field half">
                                <input type="email" name="email" placeholder="Email" id="email" value="" />
                            </div>
                            <div className="field">
                                <textarea name="message" id="message" placeholder="Message" rows="6"></textarea>
                            </div>
                        </div>
                        <input type="submit" name="submit" id="submit" value="Send Message" />
                    </form>
                </div>
            </section>
        </div>
    )
}