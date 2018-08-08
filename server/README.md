#Reports backend application

written by Adeyinka Micheal Olaoluwa
08 August 2018

Run API by typing the command "npm run api" from the server directory

Run Test by typing the command "npm run test" from the server directory

Run Lint check by typing the command "npm run lint" from the server directory

To post reports input the Url - localhost:3000/reports
with the method post and body Json of
{
	"title": "test",
	"time": "12:30",
	"position": {
		"latitude": 123,
		"longitude": 124
	}
}

To get reports close to 10km
GET /
URL - localhost:3000/reports/:lat/:long