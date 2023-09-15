'use strict'

const request = require("request");

const ITENS_PER_PAGE = 100;

let initialDateIndex = process.argv.indexOf('--initial_date');
let lastDateIndex = process.argv.indexOf('--last_date');
let pageIndex = process.argv.indexOf('--page');

let initialDateValue = initialDateIndex > -1 ? process.argv[initialDateIndex + 1] : 'Default';
let lastDateValue = lastDateIndex > -1 ? process.argv[lastDateIndex + 1] : 'Default';
let pageValue = pageIndex > -1 ? process.argv[pageIndex + 1] : 1;

var requestQuery = `q=created:${initialDateValue}..${lastDateValue}&page=${pageValue}&per_page=${ITENS_PER_PAGE}`;

var options = {
    uri: 'https://api.github.com/search/repositories?' + requestQuery,
    method: 'GET',
    headers: {'user-agent':'node.js'}
}


request.get(options, (error, response, body) =>{

    if (error) console.log(error);

    let parsedBody = JSON.parse(body);

    parsedBody.items.forEach(element => {
        console.log(element.name);
    });
});


