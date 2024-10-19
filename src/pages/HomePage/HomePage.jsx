import { Banner } from "../../components/Banner/Banner";
import { SliderElem } from "../../components/SliderElem/SliderElem";
import s from './HomePage.module.css'

export function HomePage() {
    return (
        <section className={s.background}>
            <Banner />

            <div className={s.section}>
                <h2>Новинки месяца</h2>

                <SliderElem />
            </div>
        </section>
    )
}