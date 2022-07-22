import Display from "./Display";
import Heads from "./buttons/Heads";
import Numbers from "./buttons/Numbers";
import Operators from "./buttons/Operators";

export default function Calculator() {
    return (
        <div className="card-body bg-secondary">
            <Display />
            <Heads />
            <div className="row">
                <Numbers />
                <Operators />
            </div>
        </div>
    )
}