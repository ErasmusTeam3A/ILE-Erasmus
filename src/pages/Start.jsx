import React from 'react';
import Button from '../components/atoms/Button';
import Back from '../components/atoms/Back';
import Card from '../components/organisms/Card-resent';


const Start = () => {
    return (
        <div className="container">
            <div className="start">
                <div className="start__button-container">
                    <div className="start__button-wrapper">
                        <Button text="Import dicom" />
                    </div>
                    <div className="start__button-wrapper">
                        <Button text="Selecteer lichaams onderdeel" />
                    </div>
                    <div className="start__button-wrapper">
                        <Button text="Recent geopend" />
                    </div>
                    <div className="start__button-wrapper">
                        <Button text="Afsluiten" />
                    </div>
                    <Back></Back>
                    <Card title="Pelvis" opend="1 uur geleden" gender="V"></Card>
                </div>
            </div>
        </div>
    )
};

export default Start;
