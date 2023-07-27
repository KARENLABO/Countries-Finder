# B2B frontend take home assignment

This is a take home assignment to show your frontend skills, the api provided simulates real-world conditions, please code accordingly.

## Deliverable

We want you to create a country listing page with a search box that will filter the list.
- Search input box and button to trigger search
- List of countries based on the search input
  - Each country should show it's name, capital and their flag
  - Pagination of results
- Page contents should be in a horizontally centered container

The styling is up to you, please use your judgement.
Please use your own css classes, but you are allowed to use a minimal prebuilt sheet like [normalize.css](https://necolas.github.io/normalize.css/).

## Guidelines

**Please spend max 4 hours in this assesment**

Prerequisites:
  - [NodeJS](https://nodejs.org/)

This template provided has everything you need to get started.
- `npm install` should install all dependencies
- `npm start` should start your local environment

Your react code starting point is `src/App.jsx`

### `/countries` endpoint
The API endpoint for querying countries is available at `http://localhost:5173//countries`.
It supports the following query search parameters:
  - `query`: optional, default value: `""`, to filter the countries
  - `page`: optional, default value: `1`, this helps to select the desired page
  - `page_size`: optional, default value: `10`, set the max amount of countries
#### Example
```
GET /countries?query=us&page_size=2 HTTP/1.1
Host: localhost:5173
```
Response
```json
{
    "page": 1,
    "page_size": "2",
    "results": [
        {
            "capital": "Canberra",
            "code": "au",
            "continent": "Oceania",
            "flag_1x1": "flags/1x1/au.svg",
            "flag_4x3": "flags/4x3/au.svg",
            "iso": true,
            "name": "Australia"
        },
        {
            "capital": "Vienna",
            "code": "at",
            "continent": "Europe",
            "flag_1x1": "flags/1x1/at.svg",
            "flag_4x3": "flags/4x3/at.svg",
            "iso": true,
            "name": "Austria"
        }
    ],
    "total": 8
}
```

## Evaluation criteria

- html: Use of appropriate html elements and behaviors.
- css: Layout of elements and information being easy to understand. We will not judge the design aesthetics.
  **You must write your own css classes**
- js: Familiarity with ReactJS and ability to use REST Apis and handling real world conditions (errors, slow responses etc).
