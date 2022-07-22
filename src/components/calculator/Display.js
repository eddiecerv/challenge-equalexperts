import { useSelector } from 'react-redux'
import { Styles } from "../../shared/core/Styles";

export default function Display() {
    const displayText = useSelector((state) => state.calculator.value)

    return (
        <div>
            <div className="shadow-sm" style={Styles.Display.main}>
                <span data-testid="displayText" style={Styles.Display.text}>{ displayText }</span>
            </div>
        </div>
    )
}