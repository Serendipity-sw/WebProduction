import React from 'react'
import '../../public/css/common.pcss'
import '../../public/css/iconFont.pcss'
import style from '../../public/css/common.pcss.json'
import Header from "../common/Header"
import TemplateOperation from "./templateOperation/TemplateOperation";

//加载阿里矢量图图标
require('../../public/js/iconFont/iconFont')

class Index extends React.Component {
    render() {
        return (
            <div className={style.allHeight}>
                <Header/>
                <div className={style.contentArea}>
                    <TemplateOperation />
                </div>
            </div>
        )
    }
}

export default Index