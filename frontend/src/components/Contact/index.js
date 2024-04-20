import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    // This will set the initial value for our classes.
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    // useEffect hook - in which we use the setTimeout() to update classes after 3s are done.
    useEffect(() => {
        // after 3s, set the class to text-animate-hover
        // empty array for dependencies so that this runs only once
        return () => {setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)}
    }, [])

    const SendEmail = (e) => {
        e.preventDefault()

        // this will send the email
        // we call sendForm to send the email.
        // sendForm will take service ID as the first argument : gmail
        // second argument : template ID
        emailjs
        .sendForm('service_b470p4b', 'template_so5hv75', refForm.current, {
            publicKey: 'QBFW6i_koX44gE4Au',
          })
            // after our email has been successfully sent, we want to send a message to the user
            // the easiest way to do that is to use window alert
            // and then we want to reload the page so that our form is reset.
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message. Please try again.')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} 
                        />
                    </h1>
                    <p>
                        I am interested in full-time opportunities. I like taking on challenges. I'm still training myself to remain calm and composed and approach new challenges with a clear mind, instead of a cluttered up mind. This helps me stay concentrated and complete the challenge with 99% success rate.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={SendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Almee Christian,
                    <br />
                    USA,
                    7450 Crescent Ave, 90620<br />
                    Buena Park <br />
                    <span>almeechristian53@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[33.839168, -118.002671]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.839168, -118.002671]}>
                            <Popup>Almee lives here. Come over for a cup of coffee :) </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact