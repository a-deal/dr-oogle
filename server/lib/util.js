import Xray from 'x-ray';
// import Osmosis from 'osmosis';

export function findAndParseReviews (url) {
	return new Promise((resolve, reject) => {
		let x  = Xray();
		x(url, '#copyreviews', [{
			'text' : '@text'
		}])
		.paginate('#copyheade11:last-child@href')
		.limit(10)
		((err, results) => {
			if (err) {
				reject(err)
			} else {
				let comments = results.filter((review) => {
						review.text = review.text.replace(/\s\s+/g, ' ');
						return review.text.length > 35 && review.text.match(/Review/);
				})
				resolve(parseReviews(comments))
			}
		})
	})
}

function parseReviews (reviews) {
	let name = reviews[0].text.match(/Dr.(.*?):/)[1].trim();
	reviews = reviews.map((review) => {
	 let dateRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
	 let comment = {
		  date   : review.text.match(dateRegex)[0],
		  author : review.text.match(/by\s(.*?)[0-9]/)[1].trim(),
		  rating : review.text.match(/\s[[0-9].[0-9]\sstars|\s[0-9]\sstars/)[0].match(/[0-9].[0-9]|([0-9]{1})/)[0],
			comment : review.text.slice((review.text.search(dateRegex)+11))
		}
		return comment;
	})
	return { name : name, reviews : reviews };
}
