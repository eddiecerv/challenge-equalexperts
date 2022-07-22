import { Styles } from '../core/Styles';

export default function Button({ color = 'light', text, size, onClick }) {
    return (
        <div className={`col-lg-${size}`}>
            { text !== '' &&
                <button style={Styles.Button.box} className={`btn btn-outline-${color}`} onClick={onClick}>
                    { text }
                </button>
            }
        </div>
    )
}