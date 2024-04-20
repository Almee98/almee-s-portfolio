import './index.scss'

// Arguments:
// 1 - class that we want to apply to our characters
// 2 - array of the characters itself
// 3 - index, starting point, which will basically set the delay of our letters and the animation
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    // The type of letters that we want to return is going to be a span,
    // as we want it to be an inline element,
    // as these individual elements need to form a letter and a word.
    return (
        <span>
            {
                // map through the array of the letters that we received
                strArray.map((char, i) => (
                    <span key={char+i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters