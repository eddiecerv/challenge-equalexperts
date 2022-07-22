import { Provider } from 'react-redux'
import store from '../store';
import Calculator from "./calculator";

export default function Main () {
    return (
        <main className="card shadow">
            <Provider store={store}>
                <Calculator />
            </Provider>  
        </main>
    )
}