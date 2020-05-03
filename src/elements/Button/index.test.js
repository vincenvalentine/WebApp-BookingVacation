import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom'
import Button from './index'

test("setelah diklik harus disable", () => {
    const {container} = render(<Button isDisable></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
})

test("cek isLoading", () => {
    const {container , getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument
    expect(container.querySelector('span')).toBeInTheDocument();
})

test("cek render tag <a>", () => {
    const {container} = render(<Button type='link' isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
})

test("cek render 'Link' ", () => {
    const {container} = render(<Router><Button href="" type='link'></Button></Router>)

    expect(container.querySelector('a')).toBeInTheDocument()
})
