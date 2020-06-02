import React from 'react';
import Button from '../components/atoms/Button';
import Back from '../components/atoms/Back';
import Card from '../components/organisms/Card-resent';


const Start = () => {
    return (
        <div className="container">
            <div className="start">
                <div className="start__content-wrapper">
                    <div className="start__head-wrapper">
                        <h1>
                            I.L.G.
                        </h1>
                        <h3>
                            Interactive Leeromgeving Geneeskunde
                        </h3>
                    </div>
                    <div className="start__button-container">
                        <div className="start__button-wrapper">
                            <Button disabled={false} link="/interactive" text="Import dicom" />
                        </div>
                        <div className="start__button-wrapper">
                            <Button disabled={false} link="/model" text="Selecteer lichaams onderdeel" />
                        </div>
                        <div className="start__button-wrapper">
                            <Button disabled={false} link="/model" text="Recent geopend" />
                        </div>
                        <div className="start__button-wrapper">
                            <Button disabled={false} link="/model" text="Afsluiten" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Start;
