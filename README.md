# Admin Cookie Fortune

`AdminCookieFortune` is an admin component for managing fortune phrases in an e-commerce application using the VTEX IO platform. It allows administrators to add, delete, and view fortune phrases, with support for pagination and state control.

![Screenshot 2025-04-14 194730](https://github.com/user-attachments/assets/ec520785-add9-4ee7-b5ea-6ea6e77c226e)

## Features

- **Manage Fortune Phrases**: Add and delete phrases with ease.
- **Pagination**: Navigate through the list of fortune phrases using pagination controls.
- **VTEX IO Integration**: Seamless integration with VTEX IO projects.

## Requirements

- **Node.js**: Version 14.x or higher.
- **VTEX IO**: Ensure you have VTEX IO configured in your project.
- **Dependencies**: `@vtex/admin-ui`, `react`, `react-intl`.

## Installation

To install and configure the component in your VTEX IO project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository URL>
   cd <repository name>
   ```

2. **Install dependencies**:

   Make sure you have `Yarn` installed and run:

   ```bash
   yarn install
   ```

3. **Configure in VTEX IO**:

   Ensure that `AdminCookieFortune` is registered and configured in your VTEX IO project.

## Components

### `AdminCookieFortune`

This component manages fortune phrases and provides the following functionalities:

- **Add a new fortune phrase**: Use the input field and "Add Fortune" button to add new phrases.
- **Delete a fortune phrase**: Use the trash icon button to remove specific phrases.
- **Pagination**: Navigate between pages of fortune phrases using the pagination controls.

## Hooks

### `useCookieFortunes`

A custom hook for handling the business logic associated with fortune phrases.

- **`cookieFortunes`**: Array of fortune phrases.
- **`isLoading`**: Loading state for data requests.
- **`isAddLoading`**: Loading state for adding a new phrase.
- **`isDeleteLoading`**: Loading state for deleting a phrase.
- **`isError`**: Indicates if an error occurred during requests.
- **`getCookieFortunePhrase`**: Function to fetch a fortune phrase.
- **`addCookieFortune`**: Function to add a new fortune phrase.
- **`deleteCookieFortune`**: Function to delete a fortune phrase.

<hr>

# Cookie Fortune Landing Page

The `CookieFortune` component is a storefront feature that provides users with a fun and interactive experience by displaying a fortune cookie phrase and a lucky number. It allows users to open a fortune cookie and try another one if they wish.

![Screenshot 2025-04-14 194618](https://github.com/user-attachments/assets/bb9031ca-fec3-4e34-881e-4cab7569e273)
![Screenshot 2025-04-14 195243](https://github.com/user-attachments/assets/448320b8-f069-49cb-a12e-bdb2281b6b48)
![Screenshot 2025-04-14 194640](https://github.com/user-attachments/assets/87dbb90d-bd14-4b86-b95f-5112108022b8)


## Features

- **Displays a fortune cookie phrase and a lucky number**
- **Interactive button to open a fortune cookie**
- **Retry button to get a new fortune**
- **Loading spinner and error handling**

## Dependencies

- `vtex.styleguide`
- `react`

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository URL>
   cd <repository name>
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Add the component to your VTEX IO store**:

   Make sure to integrate the `CookieFortune` component into your VTEX IO storefront as per your project requirements.

## Usage

To use the `CookieFortune` component in your VTEX store, import and include it in your page or layout as follows:

```jsx
import CookieFortune from './components/CookieFortune'

// Within your component or page:
;<CookieFortune />
```

## Component Details

### Props

The `CookieFortune` component does not require any props.

### State Management

- **`isOpen`**: Tracks whether the fortune cookie has been opened.
- **`cookieFortunePhrase`**: Holds the current fortune cookie phrase.
- **`luckyNumber`**: Holds the lucky number associated with the current fortune.
- **`isLoading`**: Indicates whether data is being fetched.
- **`isError`**: Indicates whether an error occurred during data fetch.

### Methods

- **`handleClick`**: Triggers the fetching of a new fortune cookie phrase and sets `isOpen` to true.
- **`handleClickAgain`**: Fetches a new fortune cookie phrase when the user wants to try again.

### Rendering

- **Loading State**: Displays a spinner while data is being fetched.
- **Content**: Displays the fortune cookie phrase and lucky number when available.
- **Error State**: Displays an error message if fetching the fortune fails.
- **Buttons**: Allows users to open a fortune cookie or try another one.

## Styles

Styles are defined in `styles/global.css`. Customize them as needed to fit the visual design of your storefront.

<hr>

## Contributing

If you would like to contribute to this project, please open a pull request with your changes and ensure you follow the project's guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or support, contact luisjavier_tovar@outlook.com
