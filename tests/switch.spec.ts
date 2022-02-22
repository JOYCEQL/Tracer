/*
 * @Author: yuguangzhou
 * @Date: 2022-02-21 21:34:14
 * @LastEditTime: 2022-02-22 14:12:51
 * @LastEditors: yuguangzhou
 * @Description: Switch组件
 */

import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Switch from '@/Switch/Switch.vue'

describe('Switch.vue', () => {
    test('button class', () => {
        const wrapper = mount(Switch)
        // 非完整匹配会报错
        expect(wrapper.classes()).toContain('t-switch')
    }),
        test('switch size', () => {
            const wrapper = mount(Switch, {
                props: {
                    size: 'large'
                }
            })
            expect(wrapper.classes()).toContain('t-switch-large')
        })


    test('switch disabled', () => {
        const wrapper = mount(Switch, {
            props: {
                disabled: true
            }
        })
        expect(wrapper.classes()).toContain('t-switch-disabled')
    })
    // disabled情况
    test('触发click事件,存在disabled', async () => {
        const wrapper = mount(Switch, {
            props: {
                disabled: true
            },
            data() {
                return {
                    checked: true
                }
            }
        })
        await wrapper.vm.$nextTick() // 等待事件处理完成
        expect(wrapper.vm.checked).toBeTruthy()
    })
    // 普通情况
    test('触发click事件', async () => {
        const wrapper = mount(Switch)
        wrapper.trigger('click')
        await wrapper.vm.$nextTick() // 等待事件处理完成
        expect(wrapper.emitted().click).toBeTruthy()
    })

})