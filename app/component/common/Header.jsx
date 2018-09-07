import React from 'react'
import '@/css/common/head.pcss'
import style from '@/css/common/head.pcss.json'
import {Button} from "antd";
import IconFont from "./IconFont";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnAreaList: [
                {
                    iconStyle: style.contentIcon,
                    iconName: 'icon-wenben',
                    btnName: '文本',
                },
                {
                    iconStyle: style.pictureIcon,
                    iconName: 'icon-tupian',
                    btnName: '图片',
                },
                {
                    iconStyle: style.backgroundIcon,
                    iconName: 'icon-tupian',
                    btnName: '背景',
                },
                {
                    iconStyle: style.musicIcon,
                    iconName: 'icon-yinyue',
                    btnName: '音乐',
                },
                {
                    iconStyle: style.shapeIcon,
                    iconName: 'icon-xingzhuang',
                    btnName: '形状',
                },
                {
                    iconStyle: style.componentIcon,
                    iconName: 'icon-wenben',
                    btnName: '组件',
                },
                {
                    iconStyle: style.formIcon,
                    iconName: 'icon-biaodan',
                    btnName: '表单',
                },
                {
                    iconStyle: style.specialEffectsIcon,
                    iconName: 'icon-texiao',
                    btnName: '特效',
                },
            ]
        }
    }

    render() {
        return (
            <header>
                {
                    this.state.btnAreaList.map((item, index) =>
                        <div className={style.btnArea} key={index}>
                            <IconFont classArray={[style.icon, style.iconStyle]} iconName={item.iconName}/>
                            <span className={style.content}>{item.btnName}</span>
                        </div>
                    )
                }
                <div className={style.operatingArea}>
                    <Button type="primary">预览和设置</Button>
                    <Button type="primary">保存</Button>
                    <Button type="primary">发布</Button>
                    <Button className={style.exitBtn}>退出</Button>
                </div>
            </header>
        );
    }
}

export default Header