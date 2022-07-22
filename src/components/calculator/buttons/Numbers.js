import { useDispatch } from 'react-redux'
import Button from "../../../shared/components/Button";
import { add } from '../../../store/calculator/reducer';

export default function Numbers() {    
    const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, '', 0, '.'];
    const dispatch = useDispatch()

    const buttonClick = (character) => {
        const buttonChar = character;
        dispatch(add(buttonChar))
    }

    return (
        <section className="col-9">
            <div className="row">
                { digits.map( (d, index) => {
                    return <Button key={index} text={d} size={4} onClick={() => buttonClick(d)} />
                }) }
            </div>
        </section>
    )
}