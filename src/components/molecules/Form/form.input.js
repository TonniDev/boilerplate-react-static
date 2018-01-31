import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'
import Grid from './../../atoms/Grid'
import Text from './../../atoms/Text'
import * as styles from './form.styles'
import * as v from './validator'

console.log(v)


const StyledInput = styled.input`
    ${styles.InputDefault}
    ${styles.InputHover}
    ${styles.InputFocus}
    ${styles.InputDisabled}
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 15px;
`

class FormInput extends Component {
    constructor(props){
        super(props)
        this.formatarValidar = this.formatarValidar.bind(this)
        this.state = {
            status: null,
            notice: null
        }
    }

    formatarValidar(event) {
        let {validationType} = this.props
        event.preventDefault();
        let idInput = event.target.id
        let valInput = event.target.value
        let size = 0
        let inputLength = valInput.length


        if(valInput == ''){
            return false;
        }

        else if (validationType == 'cpf'){
            size = 11
            v.formatarCPF(idInput, valInput)
            console.log(v.formatarCPF(idInput, valInput))

            if(!v.isIncomplete(inputLength, size))
                v.validarCPF(valInput)

        }
        else if (validationType == 'cnpj'){
            size = 14
            v.formatarCNPJ(idInput, valInput)

            if(!v.isIncomplete(inputLength, size))
                v.validarCNPJ(valInput)
        }
    }


    showNotice (props, status, notice) {
        if(notice)
            return <Text
                type='span'
                fontSize={props.noticeFont.fontSize}
                fontWeight={props.noticeFont.fontWeight}
                themeColor={status}>{notice}</Text>
    }

    render() {
        let p = this.props
        let st = this.state.status ? this.state.status : p.status.notice
        let ntText = this.state.notice ? this.state.notice : p.notice
        return (
            <InputWrapper>
                <Text
                type='label'
                htmlFor={p.id}
                fontFamily={p.labelFont.fontFamily}
                fontSize={p.labelFont.fontSize}
                fontWeight={p.labelFont.fontWeight}
                themeColor={this.state.status ? this.state.status : p.status.label}>{p.label}{}</Text>
                <StyledInput
                    status={this.state.status ? this.state.status : p.status.input}
                    ref={(input) => this.input = input}
                    onKeyUp={this.formatarValidar}
                    {...p}
                />
                {this.showNotice(p, st, ntText)}
            </InputWrapper>
        )
    }

}

FormInput.PropTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    onKeyUp: PropTypes.func,
    onBlur: PropTypes.func,
    validationType: PropTypes.oneOf(['cpf', 'cnpj']),
    labelFont: PropTypes.shape({
        fontFamily: PropTypes.string,
        fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
        fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold'])
    }),
    inputFont: PropTypes.shape({
        fontFamily: PropTypes.string,
        fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
        fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold'])
    }),
    noticeFont: PropTypes.shape({
        fontFamily: PropTypes.string,
        fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
        fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold'])
    }),
    status: PropTypes.shape({
        label: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
        input: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
        notice: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black'])
    })
}

FormInput.defaultProps = {
    type: 'text',
    status: {
        label: 'black',
        input: 'link',
        notice: 'dark'
    },
    labelFont: {
        fontFamily: 'Simplon',
        fontSize: -2,
        fontWeight: 'Medium'
    },
    inputFont: {
        fontFamily: 'Simplon',
        fontSize: -1,
        fontWeight: 'Medium'
    },
    noticeFont: {
        fontFamily: 'Simplon',
        fontSize: -2,
        fontWeight: 'Regular'
    }
}

export {FormInput}
export default FormInput
