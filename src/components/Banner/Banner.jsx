import React from 'react'
import style from "./banner.module.scss"

export default function Banner() {
    return (
        <section className={`${style.banner} d-flex justify-content-center align-items-center`} style={{ backgroundImage: "url(./img/banner.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "35vh", width: "100%", position: "relative" }}>
            <div className="container">
                <h1 className='text-center'> 2022 YILI HAKKINDA </h1>

            </div>
        </section>
    )
}
