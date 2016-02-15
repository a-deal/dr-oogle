import { findAndParseReviews } from './util.js';
import { addDentistAndReview } from '../dentists/model.js';
import cron from 'cron';
import Promise from 'bluebird';

let dentistURLs = ['https://www.doctor-oogle.com/650-san-francisco-dentist-dr-melissa-maus',
                   'https://www.doctor-oogle.com/1184135538-san-francisco-prosthodontist-dr-aparna-subramanian',
                   'https://www.doctor-oogle.com/641-san-francisco-dentist-dr-george-markle']

let updateReviews = () => {
 return Promise.map(dentistURLs,(url) => findAndParseReviews(url))
               .then(function(fetches){
                 let savedReviews = fetches.reduce((acc, dentist) => {
                   acc.push(addDentistAndReview(dentist));
                   return acc;
                 }, [])
                 return Promise.all(savedReviews);
               })
               .catch((err) => console.log(err))
}

let j = new cron.CronJob({
	cronTime : '0 0 */3 * * *',
	onTick : () => updateReviews(),
	start: true,
	timeZone: 'America/Los_Angeles'
});
