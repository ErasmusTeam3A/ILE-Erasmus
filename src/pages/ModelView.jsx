import React, { Suspense } from 'react';
import ModelTest from '../components/organisms/Test';
// import Mode from '../components/organisms/Model'
import Mode from '../components/organisms/Model.jsx'
import Test from "../components/atoms/Test"


const ModelView = () => {
    return(
        <div>
            dit is de view pagina
            <Suspense fallback={<Test />}>
                <Mode/>
          </Suspense>
        </div>
    )
};

export default ModelView;