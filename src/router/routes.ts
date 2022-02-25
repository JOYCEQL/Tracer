


import Introduce from '@/docs/introduce.md'
import Install from '@/docs/install.md'
import Use from '@/docs/use.md'
import Button from '/packages/Button/docs/zh-CN.md'
import Switch from '/packages/Switch/docs/zh-CN.md'
import Dialog from '/packages/Dialog/docs/zh-CN.md'

export default {
    文档: [
        {

            title: '介绍',
            name: 'introduce',
            path: '/components/introduce',
            meta: {
                "compZhName": "介绍",
                "compClassName": "introduce",
            },
            component: Introduce,
        },
        {

            title: '安装',
            name: 'install',
            path: '/components/install',
            meta: {
                "compZhName": "安装",
                "compClassName": "install",
            },
            component: Install,
        },
        {

            title: '使用',
            name: 'use',
            path: '/components/use',
            meta: {
                "compZhName": "使用",
                "compClassName": "use",
            },
            component: Use,
        },
    ],
    组件: [
        {

            title: '按钮',
            name: 'button',
            path: '/components/button',
            meta: {
                "compZhName": "按钮",
                "compClassName": "button",
            },
            component: Button,
        },
        {

            title: '开关',
            name: 'switch',
            path: '/components/switch',
            meta: {
                "compZhName": "开关",
                "compClassName": "switch",
            },
            component: Switch,
        },
        {

            title: '对话框',
            name: 'dialog',
            path: '/components/dialog',
            meta: {
                "compZhName": "开关",
                "compClassName": "dialog",
            },
            component: Dialog,
        },
    ],
};