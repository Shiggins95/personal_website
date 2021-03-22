import personal_website from '../assets/images/personal_website/personal_website.png';
import contact_me from '../assets/images/personal_website/contact_me.png';
import my_experience from '../assets/images/personal_website/my_experience.png';
import projects_image from '../assets/images/personal_website/projects.png';
import responsive_menu from '../assets/images/personal_website/responsive_menu.png';
import responsive_project from '../assets/images/personal_website/responsive_project.png';
import responsive_projects from '../assets/images/personal_website/responsive_projects.png';
import sh_logo from '../assets/images/personal_website/sh_logo.png';
import er_calculator_page from '../assets/images/exchage_rates/er_calculator_page.png';
import er_logo from '../assets/images/exchage_rates/er_logo.png';
import er_home_page from '../assets/images/exchage_rates/er_home_page.png';
import er_home_page_with_date from '../assets/images/exchage_rates/er_home_page_with_date_input.png';
import er_home_page_with_select from '../assets/images/exchage_rates/er_home_page_with_select_input.png';
import er_mobile_home_page from '../assets/images/exchage_rates/er_mobile_home_page.png';
import er_mobile_calculator from '../assets/images/exchage_rates/er_mobile_calculator.png';
import bookings_home_page from '../assets/images/bookings/bookings_home_page.png';
import bookings_availability_filters from '../assets/images/bookings/bookings_availability_filters.png';
import bookings_confirmation from '../assets/images/bookings/bookings_confirmation_popup.png';
import bookings_stripe from '../assets/images/bookings/bookings_stripe.png';
import bookings_availability_services from '../assets/images/bookings/bookings_availability_services.png';
import bookings_availability_with_booking from '../assets/images/bookings/bookings_availability_with_booking.png';

export const projects = [
  {
    id: 1,
    title: 'Personal Website',
    url_front: 'https://github.com/Shiggins95/personal_website',
    url_live: 'http://www.stephen-higgins.co.uk',
    stack: 'React, CSS, Redux',
    image_title: personal_website,
    logo_title: sh_logo,
    images: [
      { image: personal_website, title: 'Home Page' },
      { image: contact_me, title: 'Contact Me' },
      { image: my_experience, title: 'My Experience' },
      { image: projects_image, title: 'Projects' },
      { image: responsive_menu, title: 'Responsive Navigation Menu' },
      { image: responsive_project, title: 'Project Responsive View' },
      { image: responsive_projects, title: 'Projects Responsive View' }
    ],
    description_s:
      'This is a personal project I have just completed. I wanted this to be a beautiful showcase of my work ' +
      'to help me offer my services in building websites for clients and helping them achieve their business goals. This ' +
      'is purely frontend, built using React and it is my first time building a project with mobile optimisation in mind.',
    time_estimate: 'This took approx. 2 days to build.',
    optimised: true
  },
  {
    id: 2,
    title: 'Currency Converter - Custom Inputs',
    url_front: 'https://github.com/Shiggins95/exchange_rates',
    url_live: 'https://reactmap.stephen-higgins.co.uk/exchangerates/',
    stack: 'React, SCSS, Redux. Hosted via a Digital Ocean Linux container using NGINX',
    image_title: er_home_page,
    logo_title: er_logo,
    images: [
      { image: er_home_page, title: 'Home Page' },
      { image: er_calculator_page, title: 'Currency Converter Page' },
      { image: er_home_page_with_date, title: 'Date Input Open' },
      { image: er_home_page_with_select, title: 'Select Input Open' },
      { image: er_mobile_calculator, title: 'Home Page - Mobile' },
      { image: er_mobile_home_page, title: 'Currency Converter Page - Mobile' }
    ],
    description_s:
      'The idea behind this app was that I built some custom inputs and wanted to implement them in a basic web app. The inputs include a date picker, select menu, multiple select menu and a text input. I only implemented the date picker, ' +
      ' select menu and text input, but have plans to include additional pages to allow the use of my other components. The app is very simple and allows you to enter a specific date and currency pair and retrieve their exchange rates against other currencies. ' +
      ' There is also a page that allows you enter a value to exchange.',
    time_estimate: 'This took approx. 3 days to build, including building the custom inputs.',
    optimised: true
  },
  {
    id: 3,
    title: "Shig's Salon Services - Bookings App",
    url_front: 'https://github.com/Shiggins95/booking_system',
    url_live: 'https://reactmap.stephen-higgins.co.uk/bookingsapp/',
    stack: 'TypeScript, React, Nodejs, SCSS, MongoDB, Redux. Hosted via a Digital Ocean Linux container using NGINX',
    image_title: bookings_home_page,
    logo_title: sh_logo,
    images: [
      { image: bookings_home_page, title: 'Home Page' },
      { image: bookings_availability_filters, title: 'Availability Page - Filters' },
      { image: bookings_availability_services, title: 'Availability Page - Services' },
      { image: bookings_availability_with_booking, title: 'Availability Page - With Booking' },
      { image: bookings_confirmation, title: 'Confirmation Popup' },
      { image: bookings_stripe, title: 'Confirmation Popup - Stripe Page' }
    ],
    description_s:
      'This was my first attempt at using TypeScript and it was a fun and challenging learning experience. My main focus here was to build a basic company facing web app to manage client bookings. ' +
      'You can select a stylist, select a category and view a list of services that the stylist provides. The backend was built using nodeJS and MongoDB and although there are routes available to allow a full CRUD app to be built ' +
      'these have not been added to the front end of the app. Using redux to simplify the state management of the app allowed me to pass state to multiple components easily, without having a large complicated dependency tree.' +
      'A main goal of this app was to also solidify my knowledge of deploying to a linux container and setting up a web server using NGINX, also adding multiple routes so that I could display more than one app for the same URL.',
    time_estimate:
      'This took approx. 3 weeks to build. Although actual development time was around 1 week. A lot of the bloated timescale was due to learning TypeScript and implementing types, along with some weird ' +
      'parts where I was having issues with passing the correct types through in functions.',
    optimised: false
  }
];
