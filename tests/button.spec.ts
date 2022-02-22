/*
 * @Author: yuguangzhou
 * @Date: 2022-02-21 21:34:14
 * @LastEditTime: 2022-02-22 10:20:36
 * @LastEditors: yuguangzhou
 * @Description: 
 */

import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Button from '@/Button/Button.vue'

describe('Button.vue', () => {
    test('button class', () => {
        const wrapper = mount(Button)
        // 非完整匹配会报错
        expect(wrapper.classes()).toContain('t-button')
    }),
        test('button size', () => {
            const wrapper = mount(Button, {
                props: {
                    size: 'large'
                }
            })
            expect(wrapper.classes()).toContain('t-button-large')
        })


    test('button disabled', () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
        expect(wrapper.emitted().click).toBeFalsy()
    })
    test('触发click事件', async () => {
        const wrapper = mount(Button)
        wrapper.trigger('click')
        await wrapper.vm.$nextTick() // 等待事件处理完成
        expect(wrapper.emitted().click).toBeTruthy()
    })
})