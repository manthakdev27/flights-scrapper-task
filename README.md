# Google Flights Clone - Responsive Version

This project is a responsive clone of Google Flights built using **React** and **Material UI**. It fetches flight data using the **Sky Scrapper API** from RapidAPI, which provides flight search and booking information.

---

## Project Info

### **Technologies Used**

- **React**: For building the UI and managing state
- **Material UI**: For responsive and modern UI components
- **Sky Scrapper API** (from [RapidAPI](https://rapidapi.com/apiheya/api/sky-scrapper)): Provides flight search data
- **Axios**: For making HTTP requests
- **CSS**: For custom styling (additional customizations made to enhance responsiveness)

### **Features**

- **Flight Search**: Users can search for flights by inputting departure and destination locations, as well as travel dates.
- **Responsive Design**: The interface adjusts seamlessly across various screen sizes (desktop, tablet, and mobile).
- **Flight Details**: Displays available flights, airlines, prices, and other relevant information from the Sky Scrapper API.
- **Flight Filters**: Allows users to filter results based on criteria like price, airlines, etc.
- **Interactive UI**: Modern, user-friendly interface powered by Material UI components.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/manthakdev27/flights-scrapper-task.git
   cd flights-scrapper-task
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Get an API Key**

   - Go to [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper) and sign up for a RapidAPI account.
   - Get your API key from the [Sky Scrapper API page](https://rapidapi.com/apiheya/api/sky-scrapper).

4. **Set up Environment Variables**
   ```bash
   Update .env file in the root of your project and update your API key like this:

   REACT_APP_API_KEY=your-rapidapi-key
   ```
5. **Start the Application**
   ```bash
   npm start
   ```

---
## UI

1. **Flight Search UI**
![Screenshot_1](https://github.com/user-attachments/assets/8113320e-ec28-4590-90f2-7ae17ab97089)

2. **Flight Result UI**
![Screenshot_2](https://github.com/user-attachments/assets/01d83600-1c2f-4c1a-8957-5d296d844ca4)
