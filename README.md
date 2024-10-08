
# Reeple - Currency Exchange Rate Viewer

Reeple is a mobile application built using Expo and React Native that allows users to view the current exchange rate between two currencies. The app provides an intuitive interface for selecting currencies and displays real-time conversion rates.

## Features

- **Real-time Currency Exchange Rates**: Fetch the latest exchange rates for various currency pairs.
- **Currency Selection**: Users can easily select the base and target currencies from a list of available options.
- **Responsive UI**: The app is optimized for both Android and iOS devices, ensuring a smooth user experience.
- **Offline Mode**: The app notifies users when there is no internet connection and provides an option to retry fetching the latest exchange rates.

## Screenshot 



<p align="center">
  <img src="https://github.com/user-attachments/assets/249d3693-68dc-4d3c-8017-7f10a43f65b6" alt="Splash Screen" width="150">
  <img src="https://github.com/user-attachments/assets/5a2e481f-743f-42b9-b241-ffa2788a762f" alt="Onboarding Screen" width="150">
  <img src="https://github.com/user-attachments/assets/dfa82520-c1b7-4cdf-9826-e2c0a6c85396" alt="Home Screen" width="150">
  <img src="https://github.com/user-attachments/assets/b1dc81c5-0fe8-4790-b17c-327843ba42cc" alt="Select Currency Screen" width="150">
  <img src="https://github.com/user-attachments/assets/dcfa9cc2-5ce1-4eee-95f4-592661287284" alt="No Network Screen" width="150">
</p>



_(App UI screenshots)_

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Expo CLI (v51.0.28)

### Clone the Repository

```bash
git clone https://github.com/arinze96/reeple-assessment-arinze-edmund.git
cd reeple-assessment-arinze-edmund

```

### Intall Dependency

```bash
npm install

```
### Run the App

```bash
npx expo start -c

```

### Usage

1. Launch the app on your device or emulator.
2. Select the base currency from the list.
3. Select the target currency.
4. Enter the amount you wish to convert.
5. View the converted amount based on the latest exchange rate.

### API

Reeple uses a currency exchange rate API to fetch the latest rates. 
Technologies Used

1. React Native: A framework for building native apps using React.
2. Expo: A platform for making universal React applications.
3. Redux Toolkit: For state management.
4. TypeScript: For static type checking.
5. NetInfo: For detecting network status and handling offline scenarios. 
6. React Query for API Calls



## Folder Structure
This project is structure in such a way that api calls are done used react-query and data is returned and saved in a state which are used 
to calculate the exchange rate
every essential part of the project frontend lives in the src folder

- **component folder**  
  This holds all the custom components that are reused in the project.

- **constants folder**  
  This holds all the constant data that is reused and does not change for the entirety of the project.

- **mock folder**  
  This holds all the mock data used in place of data meant to come from an API endpoint.

- **navigation**  
  This section contains all the navigation code from the React Navigation library, which controls how you move around the app.

- **screens**  
  This folder contains all the frontend screens and the implementation of business logic for the app.

- **store**  
  This contains the Redux store, all the reducers, and other technologies for persisting data.

- **theme**  
  This folder contains style parameters such as colors, shadows, etc.

- **types**  
  This folder is used for setting TypeScript types.

- **utils**  
  This holds vital custom functions used for various tasks.





This project is licensed under the MIT License - see the LICENSE file for details.
Contact

For any inquiries, you can reach me at:
Email: edmund10arinze@gmail.com
GitHub: arinzeEdmund
Portfolio: arinzeedmund.online/mobile.html