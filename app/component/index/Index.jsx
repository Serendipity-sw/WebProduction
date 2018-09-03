import React from 'react'
import '../../public/css/common.pcss'
import style from '../../public/css/common.pcss.json'
import Header from "../common/Header";

class Index extends React.Component {
    render() {
        return (
            <div className={style.allHeight}>
                <Header/>
            </div>
        )
    }
}

export default Index