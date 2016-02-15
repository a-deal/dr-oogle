import Xray from 'x-ray';
// import Osmosis from 'osmosis';

let parseReviews = (reviews) => {
	return {
		name    : parseDentistName(reviews[0].text),
		reviews : formatReviews(reviews)
	}
}

let parseDentistName = (text) => {
	let name = text.match(/Dr.(.*?):/);
	return name === null ? null : name[1];
}

let parseDate = (text) => {
	let dateRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
	return text.match(dateRegex) === null ? null : (text.match(dateRegex)[0] || text.match(dateRegex)[1]);
}

let parseAuthor = (text) => {
	let author = text.match(/by\s(.*?)[0-9]/);
	return author === null ? null : author[1].trim();
}

let parseRating = (text) => {
	let rating = text.match(/\s[[0-9].[0-9]\sstars|\s[0-9]\sstars/);
	return rating === null ? null : rating[0].match(/[0-9].[0-9]|([0-9]{1})/)[0];
}

let parseComment = (text) => {
	let dateRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
	return text.slice((text.search(dateRegex)+11)) || null;
}

let formatReviews = (reviews) => {
	return reviews.map((review) => {
			return {
				 date   : parseDate(review.text),
				 author : parseAuthor(review.text),
				 rating : parseRating(review.text),
				 comment : parseComment(review.text)
			 }
		})
}

let cleanReviews = (reviews) => {
	return reviews.filter((review) => {
			review.text = review.text.replace(/\s\s+/g, ' ');
			return review.text.length > 50 && review.text.match(/Review/);
	});
}

export function findAndParseReviews (url) {
	return new Promise((resolve, reject) => {
		let x  = Xray();
		x(url, '#copyreviews', [{
			'text' : '@text'
		}])
		.paginate('#copyheade11:last-child@href')
		.limit(10)
		((err, results) => {
			if (err || results.length < 1) {
				reject(err)
			} else {
				resolve(parseReviews(cleanReviews(results)));
			}
		})
	})
}
