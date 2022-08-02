import React from 'react'
import Articles from './components/Articles'
import FormContainer from './components/FormContainer'
import InfoContainer from './components/InfoContainer'

const App = () => {
    return (
        <div className="w-full h-screen bg-[#ff7a7aaf]">
            <div className="h-full bg-[url('src/assets/images/bg-intro-mobile.png')]">
                <Articles />
                <InfoContainer />
                <FormContainer />
            </div>
        </div>
    )
}

export default App
