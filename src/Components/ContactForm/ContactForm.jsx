import { useState } from 'react'
import styles from './contactForm.module.css'

const initialForm = { name: '', email: '', orderNumber: '', message: '' }

const ContactForm = () => {
	const [form, setForm] = useState(initialForm)

	const contactInputData = [
		{
			name: 'name',
			type: 'text',
			label: 'NAME *',
			tag: 'input',
			value: form.name,
		},
		{
			name: 'email',
			type: 'email',
			label: 'EMAIL *',
			tag: 'input',
			value: form.email,
		},
		{
			name: 'orderNumber',
			type: 'text',
			label: 'ORDER NUMBER',
			tag: 'input',
			value: form.orderNumber,
		},
		{
			name: 'message',
			type: '',
			label: 'MESSAGE *',
			tag: 'textarea',
			value: form.message,
		},
	]

	const updateFormHandler = (value, name) => {
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}))
	}

	const submitFormHandler = (e) => {
		e.preventDefault()
		const { name, email, message } = form

		if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
			alert('Please fill in all the required fields!')
			return
		}

		setForm(initialForm)
		alert('We have received your message!')

		// Send form to backend, but we don't have one :(
		console.log(form)
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Contact Us</h2>
			<h5>SEND A MESSAGE</h5>
			<form onSubmit={submitFormHandler}>
				{contactInputData.map((data) => {
					const { name, type, label, tag, value } = data

					return (
						<div key={name}>
							<label htmlFor={name}>{label}</label>
							<br />
							{tag === 'input' ? (
								<input
									type={type}
									id={name}
									className={styles.inputField}
									value={value}
									onChange={(e) => updateFormHandler(e.target.value, name)}
								/>
							) : (
								<textarea
									type={type}
									id={name}
									className={styles.inputField}
									value={value}
									onChange={(e) => updateFormHandler(e.target.value, name)}
								/>
							)}
							<br />
						</div>
					)
				})}

				<button className={styles.sendButton} type="submit">
					SUBMIT
				</button>
			</form>
		</div>
	)
}

export default ContactForm
