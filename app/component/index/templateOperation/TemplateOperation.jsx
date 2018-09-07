import React from 'react'
import '@/css/templateOperation/templateOperation.pcss'
import style from '@/css/templateOperation/templateOperation.pcss.json'
import TemplateMenu from "./templateMenu/TemplateMenu";
import WebContentEditArea from "./webContentEditArea/WebContentEditArea";
import WebManagement from "./webManagement/WebManagement";

class TemplateOperation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.templateOperation}>
                <TemplateMenu/>
                <div className={style.operationArea}>
                    <WebContentEditArea/>
                </div>
                <WebManagement/>
            </div>
        );
    }
}

export default TemplateOperation