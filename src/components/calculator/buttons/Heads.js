import { useDispatch } from 'react-redux'
import Button from "../../../shared/components/Button";
import { remove, clear, operate } from '../../../store/calculator/reducer';

export default function Heads() {
    const heads = ['C', 'CE', '', '/'];
    const dispatch = useDispatch()

    const buttonClick = (character) => {
        const buttonChar = character;
        if(buttonChar === 'CE') {
            dispatch(remove(buttonChar))
        } else if(buttonChar === 'C') {
            dispatch(clear())
        } else {
            dispatch(operate({value: buttonChar}))
        }
    }

    return (
        <div className="row">
            { heads.map( (d, index) => {
                return <Button key={index} text={d} size={3} onClick={() => buttonClick(d)} />
            }) }
        </div>
    )
}