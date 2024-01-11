import express from 'express'
import puppeteer from 'puppeteer'

const app = express()
app.set('port', 9101)
app.use(express.json())

app.get('/', async (req, res) => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 200,
	})
	const page = await browser.newPage()
	await page.goto('https://www.example.com')
	await browser.close()
	res.send()
})

app.listen(app.get('port'), () =>
	console.log('app running on port', app.get('port'))
)
