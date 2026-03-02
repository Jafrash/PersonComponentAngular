# Person Management System

A modern, clean Angular application for managing contact information.
## Screenshots

### Add Person Form
<img width="1067" height="630" alt="image" src="https://github.com/user-attachments/assets/30e8e1d6-596d-467a-95b8-5d05ff53ede5" />


The application features an intuitive form for adding new people to your contact list with fields for ID, Name, and Age.

### Person Cards Display
<img width="1663" height="404" alt="image" src="https://github.com/user-attachments/assets/5c37e20f-3572-4120-ab76-56b7a85d3f0f" />


Contacts are displayed in clean, card-based layouts with easy-to-use remove functionality.

## Features

- **Add Contacts**: Simple form interface to add new people with ID, name, and age information
- **View Contacts**: Display all contacts in an organized card-based grid layout
- **Remove Contacts**: One-click removal of contacts from your list

## Technology Stack

- **Framework**: Angular 21.2.0
- **Language**: TypeScript
- **Styling**: CSS3 with TailwindCSS


## Project Structure

```
Person-Frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── add-person/           # Form component for adding people
│   │   │   ├── person-component/      # Individual person card display
│   │   │   └── person-list-component/ # Container for person list
│   │   ├── services/
│   │   │   └── person.service.ts      # Data management service
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── styles.css                     # Global styles
│   └── index.html
├── screenshots/                        # Application screenshots
├── angular.json
└── package.json
```


### Adding a Person

1. Fill in the form fields at the top:
   - **ID**: Unique identifier for the person
   - **Name**: Full name of the person
   - **Age**: Age in years

2. Click the "Add Person" button

3. The new person will appear immediately in the grid below

### Removing a Person

Click the "Remove" button below any person card to delete them from the list.

## Component Overview

### PersonService
The core service managing the application state using RxJS:
- Maintains a BehaviorSubject with the current list of people
- Provides methods to add and remove people
- Exposes an observable stream for reactive updates

### AddPersonComponent
Form component that:
- Captures user input for new person data
- Validates and submits data to the PersonService
- Uses Angular Forms with two-way data binding

### PersonComponent
Presentational component that:
- Receives person data via @Input properties
- Displays individual person information in a card format
- Includes styling for hover effects and visual hierarchy

### PersonListComponent
Container component that:
- Subscribes to the people$ observable from PersonService
- Renders the AddPersonComponent
- Maps over people array to display PersonComponent instances

