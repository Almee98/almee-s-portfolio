import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    // This will set the initial value for our classes.
    const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect hook - in which we use the setTimeout() to update classes after 3s are done.
    useEffect(() => {
        // after 3s, set the class to text-animate-hover
        // empty array for dependencies so that this runs only once
        return () => {setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)}
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hello! This is Almee Christian. I am the worst developer ever! I don't know shit and so I am jobless.
                </p>
                <p>
                    No one is willing to take a chance on me. I must suffer on the sidelines while the talented people bask in the glory of recognition.
                </p>
                <p>
                    But I build projects like this to make myself happy, and I am somewhat satisfied by my efforts. If no one sees it, I don't care lol. I have accepted that this is my life and I must live like dirt.
                </p>
            </div>

            {/* cube with the logos of the skills that I possess, and it will be rotating */}
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About