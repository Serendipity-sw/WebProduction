import React from 'react'
import '../../../public/css/templateOperation/templateOperation.pcss'
import style from '../../../public/css/templateOperation/templateOperation.pcss.json'
import TemplateMenu from "./templateMenu/TemplateMenu";

class TemplateOperation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.templateOperation}>
                <TemplateMenu/>
                <div className={style.operationArea}>

                </div>
            </div>
        );
    }
}

export default TemplateOperation