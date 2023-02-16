export const sessionCompleteEvent = {
	id: 'evt_1MjrHhHuLckLJ6RiS3wphBhf',
	object: 'event',
	api_version: '2020-08-27',
	created: 1678398361,
	data: {
		object: {
			id: 'cs_test_a1sgpcjseba6oJIldGwpae7P17E8vd6vplaOwrSXn6NszqSIn4CFcfKiVa',
			object: 'checkout.session',
			after_expiration: null,
			allow_promotion_codes: null,
			amount_subtotal: 30000,
			amount_total: 40000,
			automatic_tax: {
				enabled: false,
				status: null,
			},
			billing_address_collection: null,
			cancel_url: 'http://localhost:5000/api/v1/payments/cancel',
			client_reference_id: null,
			consent: null,
			consent_collection: null,
			created: 1678398275,
			currency: 'rwf',
			custom_fields: [],
			custom_text: {
				shipping_address: null,
				submit: null,
			},
			customer: 'cus_NUqyftlQtRJVVV',
			customer_creation: null,
			customer_details: {
				address: {
					city: 'Kigali',
					country: 'RW',
					line1: 'KN 235 ST 5',
					line2: null,
					postal_code: null,
					state: null,
				},
				email: 'irakozeyves9@gmail.com',
				name: 'Irakoze Yves',
				phone: '+250786227542',
				tax_exempt: 'none',
				tax_ids: [],
			},
			customer_email: null,
			expires_at: 1678484675,
			invoice: null,
			invoice_creation: {
				enabled: false,
				invoice_data: {
					account_tax_ids: null,
					custom_fields: null,
					description: null,
					footer: null,
					metadata: {},
					rendering_options: null,
				},
			},
			livemode: false,
			locale: null,
			metadata: {},
			mode: 'payment',
			payment_intent: 'pi_3MjrGJHuLckLJ6Ri1lBdMQR3',
			payment_link: null,
			payment_method_collection: 'always',
			payment_method_options: {},
			payment_method_types: ['card'],
			payment_status: 'paid',
			phone_number_collection: {
				enabled: true,
			},
			recovered_from: null,
			setup_intent: null,
			shipping: {
				address: {
					city: 'Kigali',
					country: 'RW',
					line1: 'KN 235 ST 5',
					line2: null,
					postal_code: '',
					state: '',
				},
				name: 'Irakoze Yves',
			},
			shipping_address_collection: {
				allowed_countries: ['RW', 'UG'],
			},
			shipping_options: [
				{
					shipping_amount: 0,
					shipping_rate: 'shr_1MjrGJHuLckLJ6RiDiQRw7h8',
				},
				{
					shipping_amount: 10000,
					shipping_rate: 'shr_1MjrGJHuLckLJ6RiuWsODw33',
				},
			],
			shipping_rate: 'shr_1MjrGJHuLckLJ6RiuWsODw33',
			status: 'complete',
			submit_type: null,
			subscription: null,
			success_url: 'http://localhost:5000/api/v1/payments/success',
			total_details: {
				amount_discount: 0,
				amount_shipping: 10000,
				amount_tax: 0,
			},
			url: null,
		},
	},
	livemode: false,
	pending_webhooks: 2,
	request: {
		id: null,
		idempotency_key: null,
	},
	type: 'checkout.session.completed',
};


export const differentEvent = {
	id: 'evt_1MjrHhHuLckLJ6RiS3wphBhf',
	object: 'event',
	api_version: '2020-08-27',
	created: 1678398361,
	data: {
		object: {
			id: 'cs_test_a1sgpcjseba6oJIldGwpae7P17E8vd6vplaOwrSXn6NszqSIn4CFcfKiVa',
			object: 'checkout.session',
			after_expiration: null,
			allow_promotion_codes: null,
			amount_subtotal: 30000,
			amount_total: 40000,
			automatic_tax: {
				enabled: false,
				status: null,
			},
			billing_address_collection: null,
			cancel_url: 'http://localhost:5000/api/v1/payments/cancel',
			client_reference_id: null,
			consent: null,
			consent_collection: null,
			created: 1678398275,
			currency: 'rwf',
			custom_fields: [],
			custom_text: {
				shipping_address: null,
				submit: null,
			},
			customer: 'cus_NUqyftlQtRJVVV',
			customer_creation: null,
			customer_details: {
				address: {
					city: 'Kigali',
					country: 'RW',
					line1: 'KN 235 ST 5',
					line2: null,
					postal_code: null,
					state: null,
				},
				email: 'irakozeyves9@gmail.com',
				name: 'Irakoze Yves',
				phone: '+250786227542',
				tax_exempt: 'none',
				tax_ids: [],
			},
			customer_email: null,
			expires_at: 1678484675,
			invoice: null,
			invoice_creation: {
				enabled: false,
				invoice_data: {
					account_tax_ids: null,
					custom_fields: null,
					description: null,
					footer: null,
					metadata: {},
					rendering_options: null,
				},
			},
			livemode: false,
			locale: null,
			metadata: {},
			mode: 'payment',
			payment_intent: 'pi_3MjrGJHuLckLJ6Ri1lBdMQR3',
			payment_link: null,
			payment_method_collection: 'always',
			payment_method_options: {},
			payment_method_types: ['card'],
			payment_status: 'paid',
			phone_number_collection: {
				enabled: true,
			},
			recovered_from: null,
			setup_intent: null,
			shipping: {
				address: {
					city: 'Kigali',
					country: 'RW',
					line1: 'KN 235 ST 5',
					line2: null,
					postal_code: '',
					state: '',
				},
				name: 'Irakoze Yves',
			},
			shipping_address_collection: {
				allowed_countries: ['RW', 'UG'],
			},
			shipping_options: [
				{
					shipping_amount: 0,
					shipping_rate: 'shr_1MjrGJHuLckLJ6RiDiQRw7h8',
				},
				{
					shipping_amount: 10000,
					shipping_rate: 'shr_1MjrGJHuLckLJ6RiuWsODw33',
				},
			],
			shipping_rate: 'shr_1MjrGJHuLckLJ6RiuWsODw33',
			status: 'complete',
			submit_type: null,
			subscription: null,
			success_url: 'http://localhost:5000/api/v1/payments/success',
			total_details: {
				amount_discount: 0,
				amount_shipping: 10000,
				amount_tax: 0,
			},
			url: null,
		},
	},
	livemode: false,
	pending_webhooks: 2,
	request: {
		id: null,
		idempotency_key: null,
	},
	type: 'application_fee.refunded',
};
