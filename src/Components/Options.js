import React from "react";


export const Options = () => {

    return (

        <div className="home__options">
            <a
                className={`bx bxs-cloud-download change-theme`}
                title="downloadcv"
                id="downloadButton"
                href="/cv/cv.pdf"
                target="_blank"
            ><small>Download</small></a>
        </div>
    );
};
