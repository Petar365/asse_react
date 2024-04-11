import { useState } from 'react';

function Instructions() {

    return (
        <div className="wrapper ">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span>Internet Banking</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>

            <div className="wrapper pt-3 pb-5 back_color">
                <div className="wrapper-content-inner">

                    <p>Прашање</p>
                    <p>ОДГОВОР</p>

                </div>
            </div>
        </div>
    );
}

export default Instructions;