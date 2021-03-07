# Coding Challenge - Sport Betting App

![Demo recording](https://github.com/jaydlawrence/coding-test-sports-betting-app/blob/master/public/demo.gif?raw=true)


## Run locally

### `yarn`

Install all the dependencies for this project

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Run tests


## Brief / Instructions

Without sharing the entire brief document for this challenge, here is a summary:

### Data

The brief described the data relationship.

It provided a the relationship as described in `src/app/ResponseTypes.ts`.

It also provided a mock endpoint to fetch the data from:

http://www.mocky.io/v2/59f08692310000b4130e9f71

### Suggested Technology

The brief suggested using the following:

- React
- Redux
- create-react-app (suggested way to set up the above)
- Static type checking (TypeScript or Flow)

### Mock Screens

The brief showed 4 phone mockup screens that had the same layout as my solution.
The mocks where box outlines on white background.

### Functionality

- Display the fetched Events that have at least one market
- When a selection is clicked
  - Make that selection green
  - Add selection to the BetSlip view
  - When clicked again, remove and turn white
- When "delete" is clicked on BetSlip view
  - remove the selection
  - make the main view version turn back to white

## Comments on implementation

### Package choices

#### TypeScript

I haven't used TypeScript for a project before, I have only tinkered with it in the past.
It was a risk throwing it in here as it could have gotten me stuck.
But I do well when thrown in at the deep end and I made it work without too much of a slow-down due to TypeScript.
But... Since this is my first TypeScript app, don't judge me too harshly on my possibly lack of best practices in TypeScript.
I was heavily reliant on eslint and the compiler to guide me on TypeScript usage.

#### Axios

For HTTP requests, I have used axios for a few small projects and it is quick to set up and use, so I grabbed it quickly to get the job done.

#### Material-ui

The brief suggested using Material-ui and I have used it before and it has a large selection of easy to use components, so the choice made sense.

#### Redux

The brief said to use Redux, so I did.
I had used it before, but the new redux-tools package and the Slice functionality was new to me.

#### Styled Components

I have used a few different styling methodologies and I keep coming back to Styled Components unless a project already has a well-established pattern already.
Styled Components are very flexible, keep the CSS as CSS but convert it to a component to keep things in JavaScript as much as possible.
It just seems like a good pattern.


### Design Decisions

This part is more difficult to document as almost everything I did was a design decision, so I will leave this part open to follow-up questions instead.