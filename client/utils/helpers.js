import axios from 'axios'

export function scrapeLink(link) {
	console.log('link:', link)
	return axios({
		method: 'post',
		url: '/dentists',
		data: {
			url: link
		}
	})
}

export function getDentistReviews(dentistId) {
	return axios({
		method: 'get',
		url: `/dentists/${dentistId}`
	})
}

export function getAllDentists() {
	return axios({
		method: 'get',
		url: '/dentists'
	})
}