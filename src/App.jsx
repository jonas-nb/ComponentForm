import React from 'react'
import Articles from './components/Articles'
import FormContainer from './components/FormContainer'
import InfoContainer from './components/InfoContainer'

const App = () => {
    return (
        <div className="w-full h-[60rem] xl:h-screen bg-[#ff7a7a] xl:flex xl:items-center xl:justify-center">
            <div className="h-full bg-[url('src/assets/images/bg-intro-mobile.png')] xl:flex xl:items-center xl:justify-center">
                <Articles />
                <div className="w-full xl:w-[35rem] xl:ml-28">
                    <InfoContainer />
                    <FormContainer />
                </div>
            </div>
        </div>
    )
}

export default App
