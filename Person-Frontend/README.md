# Person Management System

A modern, clean Angular application for managing contact information. This project demonstrates component-based architecture, reactive programming with RxJS, and contemporary styling practices.

## Screenshots

### Add Person Form
![Add Person Form](./screenshots/add-person-form.png)

The application features an intuitive form for adding new people to your contact list with fields for ID, Name, and Age.

### Person Cards Display
![Person Cards](./screenshots/person-cards.png)

Contacts are displayed in clean, card-based layouts with easy-to-use remove functionality.

## Features

- **Add Contacts**: Simple form interface to add new people with ID, name, and age information
- **View Contacts**: Display all contacts in an organized card-based grid layout
- **Remove Contacts**: One-click removal of contacts from your list
- **Responsive Design**: Works seamlessly across different screen sizes
- **Real-time Updates**: Immediate UI updates using RxJS observables
- **Clean UI**: Natural, human-made styling that's both professional and approachable

## Technology Stack

- **Framework**: Angular 21.2.0
- **Language**: TypeScript
- **Styling**: CSS3 with TailwindCSS
- **State Management**: RxJS BehaviorSubject
- **Architecture**: Standalone Components

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

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v11.2.0 or higher)
- Angular CLI (v21.2.0)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Person-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## Usage

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
- Handles remove operations

## Styling Philosophy

The application uses a natural, human-made design approach:
- **Simple color palette**: Blues and grays for a professional look
- **Subtle effects**: Minimal animations and hover states
- **Clean layouts**: Card-based design with proper spacing
- **Readable typography**: System fonts for native feel
- **Responsive grids**: Adapts to different screen sizes

## Building for Production

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. The production build is optimized for performance.

## Testing

Run unit tests using:

```bash
ng test
```

## Development

### Code Scaffolding

Generate new components:
```bash
ng generate component component-name
```

Generate new services:
```bash
ng generate service service-name
```

### Code Style

The project uses:
- Prettier for code formatting
- TypeScript strict mode
- Angular style guide conventions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Developed as a demonstration of Angular best practices and modern web development.

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev)
