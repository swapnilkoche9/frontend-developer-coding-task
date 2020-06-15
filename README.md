# Moebel.de Frontend developer coding task

## Brief

Build an weather app shows weather forecast for given city. You can either use https://openweathermap.org/api or you can create your own mock api by using this https://github.com/typicode/json-server or similar tool of your choice.

Please fork this repository and apply your solution into it. Once you are done you can share it with us. We are expecting you to finish this task in one week. Please read this document before starting to work on your solution. If you think you will not be able to deliver the solution in time, you can contact us and ask for more time.

**Details**

- You can hardcode initial city or you can use the browser api to get location
- The days should start with the current day and in design there are only weekdays, we want you to show weekends too.
- Background gradient color should change based on the current tempreture, teal shades for less than 15°C and orange shades for greater then 15°C.
- When city input is focused, the content should have blur filter
- If there is no result for given city name, there should be an error message. We deliberately did not add this part to the design, we are expecting you to fill this gap.

## Design

Abstract: https://share.goabstract.com/d9d21d66-c748-4877-adf2-7c511d0812d7

Icons: https://github.com/erikflowers/weather-icons/tree/master/svg

Font: https://fonts.google.com/specimen/Roboto?query=roboto

## Tech Stack

- React (UI Library)
- Typescript (Language)
- Styled Components (Styling)
- Jest (Test runner)
- React Testing Library (Testing)
- Rxjs (Optional)
- Ramda (Optional)
- Storybook (Optional)

> Note: Please stick with React's internal APIs to handle state management. And you will not need class components for this task, prefer function components and hooks.

## Checklist

- [ ] Create a background component that changes based on given tempreture
- [ ] Create icon components out of svgs
- [ ] Create ui components for the rest
- [ ] Setup weather api (or implement a mock server)
- [ ] Wire city input with the api

## Acceptance Criteria

- Using Typescript is mandatory.
- Test coverage should be above 90%.
- The app should be working and buildable with no errors.
- There should be individual commits with meaningful commit messages for every step. (Not for every change/update)
