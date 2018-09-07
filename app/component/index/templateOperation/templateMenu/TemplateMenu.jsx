import React from 'react'
import '@/css/templateOperation/templateMenu/templateMenu.pcss'
import style from '@/css/templateOperation/templateMenu/templateMenu.pcss.json'
import IconFont from "../../../common/IconFont";

class TemplateMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }

    menuRowsClick=({target})=>{
        let selectClick = parseInt(target.parentElement.getAttribute('tabIndex'))
        this.setState({tabIndex:this.state.tabIndex===selectClick?0:selectClick})
    }

    render() {
        return (
            <div className={style.menuArea} onClick={this.menuRowsClick}>
                <div tabIndex={1}  className={[style.menuRows,this.state.tabIndex===1?style.select:''].join(' ')}>
                    <IconFont classArray={[style.iconStyle]} iconName={'icon-danyemoban'}/>
                    <span className={style.content}>单页模板</span>
                </div>
                <div tabIndex={2}  className={[style.menuRows,this.state.tabIndex===2?style.select:''].join(' ')}>
                    <IconFont classArray={[style.iconStyle]} iconName={'icon-fangkuai'}/>
                    <span className={style.content}>功能模板</span>
                </div>
            </div>
        );
    }
}

export default TemplateMenu