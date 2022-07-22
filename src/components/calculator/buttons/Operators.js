import { useDispatch } from 'react-redux'
import Button from "../../../shared/components/Button";
import { operate, submit } from '../../../store/calculator/reducer';

export default function Operators() {    
    const operations = ['*', '-', '+', '='];    
    const dispatch = useDispatch()

    const buttonClick = (character) => {
        const buttonChar = character;
        if( buttonChar === '=') {
            dispatch(submit())
        } else {
            dispatch(operate({value: buttonChar}))
        }
    }

    return (
        <aside className="col-3">
            <div className="row">
                { operations.map( (o, index) => {
                    return <Button key={index} text={o} size={12} onClick={() => buttonClick(o)} />
                }) }
            </div>
        </aside>
    )
}