import React from 'react'
import '../../../../public/css/templateOperation/webContentEditArea/webContentEditArea.pcss'
import style from '../../../../public/css/templateOperation/webContentEditArea/webContentEditArea.pcss.json'

class WebContentEditArea extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.editArea}>
                <div className={style.operationArea}>

                </div>
            </div>
        );
    }
}

export default WebContentEditArea