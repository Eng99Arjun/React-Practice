import { createRoot } from 'react-dom/client'
import './style.css';

const h1 = <h1>Hello World</h1>

function Card(){
    return (<div className='card'>
    <img src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jessbaileydesign-788946.jpg&fm=jpg' alt='Iphone Image'/>

    <div className='card-content'>
        <h3>IPhone 13</h3>
        <p>Apple</p>
        <p><b>$ 1000</b></p>
    </div>

</div>)
}

const container = [
    card, card, card, card
]

const root = createRoot(document.getElementById('root'))

root.render(<div className='container'>{container}</div>);
console.log('Hello world!!!');