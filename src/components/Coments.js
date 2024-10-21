import React from "react";
import Style from "./Coments.module.css";

const Coments = () => {


    const comentsData = [
        { 
            videoUrl: "https://www.youtube.com/embed/d_SkspNUE5E?si=jgwwwW9lBJrf1eYp",
           text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            videoUrl: "https://www.youtube.com/embed/qXdSx0MAhxI?si=rXKxopL-1lFvT72u",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            videoUrl: "https://www.youtube.com/embed/BJHkwbGvMfE?si=xLADpz4D3W6nQH9Y",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            videoUrl: "https://www.youtube.com/embed/BJHkwbGvMfE?si=xLADpz4D3W6nQH9Y",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ]

    return (
        <section className={Style.sectionComents}>
            <div className={Style.comentsTitle}>
                <h1>DEPOIMENTOS</h1>
            </div>
            <div className={Style.coments}>
                {comentsData.map((coment, index) => (
                    <div key={index} className={Style.comentWrapper}>
                        <div className={Style.comentIframe}>
                            <iframe
                                src={coment.videoUrl}
                                title={`YouTube video player ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={Style.coment}>
                            <p className={Style.comentText}>{coment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Coments;