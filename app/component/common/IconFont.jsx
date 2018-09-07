import React from 'react'
import iconStyle from '@/css/iconFont.pcss.json'

class IconFont extends React.Component{

    render() {
        return (
            <svg className={[iconStyle.icon, ...this.props.classArray].join(' ')}
                 aria-hidden="true">
                <use xlinkHref={"#"+this.props.iconName}></use>
            </svg>
        );
    }
}

export default IconFont