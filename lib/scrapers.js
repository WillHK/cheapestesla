const axios = require('axios');
const cheerio = require('cheerio');

module.exports.autotrader = () => {
    let cars = [];
    axios.get('https://www.autotrader.com/cars-for-sale/Tesla/Seattle+WA-98117?startYear=1981&makeCodeList=TESLA&searchRadius=0&zip=98117&endYear=2020&marketExtension=true&sortBy=derivedpriceASC&numRecords=25&firstRecord=0')
        .then((res) => {
            if(res.status === 200) {
                const html = res.data;
                const $ = cheerio.load(html);
                console.log($('.inventory-listing').find('img').html());
                $('.inventory-listing').each(function(i, elem) {
                    // console.log($(this).find('img').html());
                    cars[i] = {
                        price: $(this).find('.first-price').text().trim(),
                        img: $(this).find('img.image-responsive-scale').attr('src')
                    }
                })
            }
        })
        .then(() => {
            console.log(cars);
        })
        .catch(err => {
            throw err;
        });
}