import React from 'react'
import '../../../../public/css/templateOperation/webManagement/webManagement.pcss'
import style from '../../../../public/css/templateOperation/webManagement/webManagement.pcss.json'
import {Tabs} from 'antd'

const TabPane = Tabs.TabPane

class WebManagement extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.managementArea}>
                <Tabs defaultActiveKey="1" className={style.tabs}>
                    <TabPane tab="图层管理" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="页面管理" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default WebManagement