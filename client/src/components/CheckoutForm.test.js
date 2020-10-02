import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CheckoutForm from './CheckoutForm'

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />)
	const header = screen.getByText(/checkout form/i)
	expect(header).toBeInTheDocument()
})

test('form shows success message on submit with form details', () => {
	render(<CheckoutForm />)

	const firstName = screen.getByLabelText(/first name:/i)
	expect(firstName).toBeTruthy()
	const lastName = screen.getByLabelText(/last name:/i)
	expect(lastName).toBeTruthy()
	const address = screen.getByLabelText(/address:/i)
	expect(address).toBeTruthy()
	const city = screen.getByLabelText(/city:/i)
	expect(city).toBeTruthy()
	const state = screen.getByLabelText(/state:/i)
	expect(state).toBeTruthy()
	const zip = screen.getByLabelText(/zip:/i)
	expect(zip).toBeTruthy()

	fireEvent.change(firstName, { target: { value: 'John' } })
	fireEvent.change(lastName, { target: { value: 'Paul' } })
	fireEvent.change(address, { target: { value: '123 Ringo Street' } })
	fireEvent.change(city, { target: { value: 'George Town' } })
	fireEvent.change(state, { target: { value: 'Chicago' } })
	fireEvent.change(zip, { target: { value: '60622' } })

	const submitButton = screen.getByTestId(/formSubmit/i)
	expect(submitButton).toBeTruthy()
	fireEvent.click(submitButton)

	const successOnSubmit = screen.getByTestId(/successMessage/i)
	expect(successOnSubmit).toBeTruthy()
	expect(successOnSubmit).toBeInTheDocument()
})
