import {Routes, Route} from 'react-router-dom';
import './style.css';

function News() {
    return (
        <p><h1>News</h1></p>
    )
}

function About() {
    return (
        <h1>Южный Федеральный Университет</h1>
    )
}

function Contacts() {
    return (
        <h2>8 (982) 800 67-82</h2>
    )
}

export function Main() {
    return (
    <div class='main'>
        <div class='main_container'>
            <section className="flex-center"> <img src="https://i.pinimg.com/originals/4a/85/7f/4a857fb809e9d78242f81ebc04cfdca9.png?nii=t" width={200} alt='kitten' /> </section>
            <article className="flex-center">
                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<h3>Некорректная ссылка</h3>} />
                </Routes>
            </article>
            <aside className="flex-center">Sidorova Revekka Vyacheslavovna</aside>
        </div>
    </div>
    )
}

export default Main;