import React from 'react'
import FormSubvey from '../Form/FormSurvey'
import style from "./Home.module.scss"

export default function Home() {
    return (
        <>
            <section className={`${style.banner} d-flex justify-content-center align-items-center`} style={{ backgroundImage: "url(./img/banner.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "100vh", width: "100%", position: "relative" }}>
                <div className="container">
                    <h1 className='text-center'> 2022 YILI HAKKINDA </h1>
                    <FormSubvey />
                </div>
            </section>
           
        </>
    )
}
