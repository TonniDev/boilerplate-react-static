import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import FormInput from './form.input'
import FormSelect from './form.select'
import FormRadio from './form.radio'
import FormCheck from './form.check'


const FormWrapper = styled.form`
    padding: 15px;
`


class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FormWrapper {...this.props}
                onSubmit={this.props.onSubmit}>
                {this.props.children}
            </FormWrapper>
        )

    }
}


export {Form, FormInput, FormSelect, FormRadio, FormCheck}
export default Form
