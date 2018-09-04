import React from 'react'
import '../../../../public/css/templateOperation/templateMenu/templateMenu.pcss'
import style from '../../../../public/css/templateOperation/templateMenu/templateMenu.pcss.json'
import IconFont from "../../../common/IconFont";

class TemplateMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.menuArea}>
                <div className={style.menuRows}>
                    <IconFont classArray={[style.iconStyle]} iconName={'icon-danyemoban'}/>
                    <span className={style.content}>单页模板</span>
                </div>
                <div className={style.menuRows}>
                    <IconFont classArray={[style.iconStyle]} iconName={'icon-fangkuai'}/>
                    <span className={style.content}>功能模板</span>
                </div>
            </div>
        );
    }
}

export default TemplateMenu