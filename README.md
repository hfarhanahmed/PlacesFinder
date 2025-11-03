# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Project Structure

```bash
Places_Finder/
├── app.json
├── package.json
├── tsconfig.json
├── babel.config.js
├── node_modules
├── README.md
└── src/
    └── app
        ├── screens/
            └── HomeScreen.tsx
    ├── assets/
        └── Images/ 
            ├── android-icon-background.png
            ├── android-icon-foreground.png
            ├── android-icon-monochrome.png
            ├── favicon.png
            ├── icon.png
            ├── partial-react-logo.png
            ├── react-logo.png
            ├── react-logo@2x.png
            ├── react-logo@3x.png
            └── splash-icon.png
    ├── config.ts
    ├── api/
        └── googlePlaces.ts
    ├── components/
        ├── SearchBar.tsx
        ├── MapViewComponent.tsx
        └── HistoryList.tsx
    ├── store/
        ├── store.ts
        ├── placesSlice.ts
        └── epics.ts
    ├── hooks/
        ├── use-color-scheme.ts
        ├── use-color-scheme-web.ts
        └── use-theme-color.ts
    ├── constants/
        ├── theme.ts
```
    

## Introduction
Expo + TypeScript sample app built for the take-home assessment.
In this project we used:

- expo-router routing
- Redux for global state management
- Redux Observable (Epics) for async operations

## Installation Instructions

Run the following commands in the project folder

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Start the Android app

   ```bash
   npx expo start --android
   ```

4. Start the IOS app

   ```bash
   npx expo start --ios
   ```


## Github Repository Details

To check the project code please refer to this github repository:

- [Github Repo](https://github.com/hfarhanahmed/PlacesFinder#)

