# Planedemic
[Our submission](https://devpost.com/software/planedemic) for MLH's 2020 Winter Hacklympics.


## About
With COVID-19 vaccine availability in sight, people will be traveling regardless of potential risks. Planedemic is a flight recommendation engine that combats this by generating the lowest-risk routes between two locations using live case numbers and historical flight path data.


## Instructions
To run this web application, you must first instantiate the front-end and back-end services.
For the frontend, navigate to the [WinterHacklympics-2020/planedemic](planedemic/) subdirectory, install prerequisite packages with `npm install`, then start the node server with `npm start`. 
For the backend, navigate to the [WinterHacklympics-2020/planedemic/backend](planedemic/backend/) subdirectory and run `index.js` with your preferred process manager (or simply `node index.js`).

After starting your instance of the servers, you can navigate to `localhost:3000` to view the live web app. To use the app, input a US IATA airport code for both the `Start` and `Destination` input boxes and select `Submit`. The app will display the best routes it calculates, color coded based on COVID risk.


Demo video:

[![Demo video](https://img.youtube.com/vi/d-fTVRaD4ns/0.jpg)](https://www.youtube.com/watch?v=d-fTVRaD4ns "Planedemic Demo [Winter Hacklympics 2020]")


## Description
In the back-end, Planedemic generates a graph network (from data stored in Firebase) of airport connections. The graph uses historical flight routes, weighted by live COVID data per state sourced from [the COVID Tracking Project API](https://covidtracking.com/) and airport metadata (i.e. the number of connections).
When an input is submitted from the website to the backend, the backend executes Djikstra's algorithm on the graph network to find up to six of the lowest-weighted paths, then sends the paths & their costs to the frontend to be classified & displayed for the user.

## Future Improvements
- Make the frontend look more appealing & improve the UX
- Improve code quality & efficiency in the backend
- Improve algorithms to use modern research on COVID spread to improve accuracy of predictions
- Implement current flight data & allow for booking of flights through the website
- Include non-US airports in flight route generation

## Contributors
Made for the Winter Hacklympics hackathon by [Himanshu Biradar](https://github.com/himanshubir), [Shravan Ravi](https://github.com/shravanravi2002), and [Akshin Vemana](https://github.com/AkshinVemana).
