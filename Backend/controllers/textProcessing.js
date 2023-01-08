const {	Configuration, OpenAIApi } = require("openai")

const textProcessing = require('express').Router()
const config = require('../util/config')

textProcessing.post('/', async (req, res) => {
	
	const {notes} = req.body
	// console.log(notes)

	const configuration = new Configuration({
		apiKey: config.apiKey,
	});

	const openai = new OpenAIApi(configuration);

	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Summarize the important points from the paragraph in points. Also sugggest title and keywords for the following context\n\nText: In February 2021, the IOC began releasing "playbooks" containing details on planned COVID-19 biosecurity protocols for athletes, officials, the press, and other staff, including standard protocols such as practicing social distancing, hygiene, the wearing of face masks (outside of training and competition for athletes), and being restricted from visiting bars, restaurants, shops, and other tourist areas around Greater Tokyo Area, or using public transport unless otherwise permitted. The prefectures of Fukushima, Hokkaido and Ibaraki announced that they would prohibit spectators at events held in the areas. The opening ceremony was expected to be limited to fewer than 1,000 VIP guests, including IOC representatives and dignitaries, while some events did allow members of other competing delegations to occupy spectator seats as well. School students were invited to watch football matches in Ibaraki.On 16 July, it was reported that Bach had asked Prime Minister Suga about the possibility that restrictions on spectators could be eased later on if COVID-19 conditions were to improve in Tokyo.\nKeywords: COVID-19, biosecurity, athletes, officials, press, staff, social distancing, hygiene, face masks, restricted, spectators, Prime Minister Suga\n###\n
		Text: Stripe provides APIs that web developers can use to integrate payment processing into their websites and mobile applications. In April 2018, the company released anti-fraud tools, branded "Radar", that block fraudulent transactions. In 2018, the company expanded its services to include a billing product for online businesses, allowing businesses to manage subscription recurring revenue and invoicing. On June 11, 2019, Stripe\'s point of sale service, called Terminal, was made available to U.S. users. Terminal had previously been invite-only.[15] The service offers physical credit card readers designed to work with Stripe. As of July 2020, Terminal supports two card readers: Verifone P400 and BBPOS Chipper 2X BT. On September 5, 2019, Stripe launched a merchant cash advance scheme called Stripe Capital. The scheme allows Stripe merchants to request an advance on expected future payments they will process through their Stripe merchant account.\nKeywords: Stripe, API, Web developer, Fraud prevention, Billing, Subscription, Invoicing, Terminal, Credit card reader, Merchant cash advance\n###\nText: ${notes}\nTitle:\nPoints:\nKeywords:\n
		${notes}`,
		temperature: 0.7,
		max_tokens: 300,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});

	// console.log(response.data.choices[0].text)
	res.json(response.data.choices[0].text)

})

module.exports = textProcessing 