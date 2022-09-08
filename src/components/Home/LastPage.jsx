import React from 'react'
import style from "./Home.module.scss"
export default function LastPage() {
    return (
        <section className={`${style.banner} d-flex justify-content-center align-items-center`} style={{ backgroundImage: "url(./img/banner.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "100vh", width: "100%", position: "relative" }}>
            <div className="container">
                <h1 className='text-center'> ANKETİMİZE KATILDIĞINIZ İÇİN TEŞEKKÜR EDERİZ :) </h1>
            </div>
        </section>
    )
}
