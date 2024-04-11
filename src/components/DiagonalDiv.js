import { useState } from 'react';

function DiagonalDiv() {

    return (
        <div className="diagonal-div">
            <div className="ml-5 pt-5">
                <div className="row text-center ">

                    <div className="col">
                        <figure className="wpb_wrapper vc_figure">
                            <a href="/instructions" target="_self"
                               className="vc_single_image-wrapper   vc_box_border_grey">
                                <img width="72" height="72"
                                     src="https://www.24x7.rs/wp-content/uploads/2016/02/asseco-24x7-upustva.png"
                                     className="vc_single_image-img attachment-full"
                                     alt=""/>
                            </a>
                        </figure>
                        <div>
                            <p style={{textAlign:"center"}}><a
                                href="/instructions" className="text-center fw-semibold">Упатство</a>
                            </p>
                        </div>
                    </div>

                    <div className="col">
                        <figure className="wpb_wrapper vc_figure">
                            <a href="/drivers" target="_self"
                               className="vc_single_image-wrapper   vc_box_border_grey">
                                <img width="72" height="72"
                                     src="https://www.24x7.rs/wp-content/uploads/2016/02/asseco-24x7-drajveri.png"
                                     className="vc_single_image-img attachment-full"
                                     alt=""/>
                            </a>
                        </figure>
                        <div>
                            <p style={{textAlign:"center"}}><a
                                href="/drivers" className="text-center fw-semibold">Драјвери</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div>

                </div>

            </div>
        </div>
    );
}

export default DiagonalDiv;