'use strict';

module.exports = function (router) {
    router.post('/', async function (req, res) {
        let mapInfo = req.body, field = [];
        const airportsY = [], airportsX = [], cloudsY = [], cloudsX = [];

        for (let airport = 0; airport < mapInfo.airports; airport++) {
            let y = Math.floor(Math.random() * (mapInfo.map - 0)) + 0;
            let x = Math.floor(Math.random() * (mapInfo.map - 0)) + 0;

            if (!airportsX.includes(x)) {
                airportsX.push(x);
            } else {
                airportsX.push(x + 1);
            }

            if (!airportsY.includes(y)) {
                airportsY.push(y);
            } else {
                airportsY.push(y + 1);
            }
        }

        for (let cloud = 0; cloud < mapInfo.clouds; cloud++) {
            let y = Math.floor(Math.random() * (mapInfo.map - 0)) + 0;
            let x = Math.floor(Math.random() * (mapInfo.map - 0)) + 0;
            if (!cloudsX.includes(x)) {
                cloudsX.push(x);
            } else {
                cloudsX.push(x + 1);
            }

            if (!cloudsY.includes(y)) {
                cloudsY.push(y);
            } else {
                cloudsY.push(x + 1);
            }
        }

        for (var y = 0; y <= mapInfo.map; y++) { 
            let lines = [];
            for (let x = 0; x <= mapInfo.map; x++) {
                if (airportsY.includes(y) && airportsX[airportsY.indexOf(y)] == x) {
                    lines.push('apartment');
                } else if (cloudsY.includes(y) && cloudsX[cloudsY.indexOf(y)] == x) {
                    lines.push('cloud');
                } else {
                    lines.push('text-align-justify');
                }
            }
            field.push(lines);
        }


        let newPlot = [];
        for (let i = 0; i < field.length; i++) {
            if (typeof field[i] === 'object') {
                newPlot.push(field[i].slice(0, mapInfo.map));
            } else {
                newPlot.push(field[i]);
            }
        }


        let countDays = 0;
        let firstAirportCovered = 0; 
        let allAirportsCovered = 0; 

        while (allAirportsCovered == 0) {
            const getClouds = newPlot.map(e => ( 
                e.indexOf('cloud')
            ));

            const currentAirports = [...newPlot.map(element => ( 
                element.indexOf('apartment')
            )).filter(element => {
                return element != -1;
            })];


            getClouds.forEach((e, index) => {
                if (e != -1) {
                    if (newPlot[index - 1] != undefined) {
                        newPlot[index - 1][e] = 'cloud';
                    }

                    if (newPlot[index][e + 1] != undefined) {
                        newPlot[index][e + 1] = 'cloud';
                    }

                    if (newPlot[index][e - 1] != undefined) {
                        newPlot[index][e - 1] = 'cloud';
                    }

                    if (newPlot[index + 1] != undefined) {
                        newPlot[index + 1][e] = 'cloud';
                    }

                    if (firstAirportCovered == 0 && currentAirports.length < mapInfo.airports) {
                        firstAirportCovered = countDays;
                    }


                    if (countDays == mapInfo.map) {
                        allAirportsCovered = countDays;
                    } else {
                        allAirportsCovered = currentAirports.length < 1 && countDays;
                    }
                }
            });

            countDays++
        }

        res.json({
            error: 'false',
            plot: field,
            novo: newPlot,
            firstAirportCovered: firstAirportCovered,
            allAirportsCovered: allAirportsCovered
        })
    });
};
