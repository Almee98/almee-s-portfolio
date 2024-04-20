import './index.scss'
import Logo from '../../assets/images/logo_ottr.jpeg'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Contribution = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // after 3s, set the class to text-animate-hover
        // empty array for dependencies so that this runs only once
        return () => {setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)}
    }, [])

    return (
        <>
            <div className="container contribution-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'r', 'i', 'b', 'u', 't', 'i', 'o', 'n', 's']}
                        idx={15} 
                        />
                    </h1>
                    <div className='cards'>
                        {/* Card 1 */}
                        <div className="card">
                            <img src={Logo} alt="Organization 1" className="org-image" />
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="card">
                            <img src={Logo} alt="Organization 1" className="org-image" />
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="card">
                            <img src={Logo} alt="Organization 1" className="org-image" />
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="card">
                            <img src={Logo} alt="Organization 1" className="org-image" />
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Contribution