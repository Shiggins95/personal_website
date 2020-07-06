import nfm_react from '../assets/images/nfm/nfm_react.png';
import nfm_logo from '../assets/images/nfm/nfm_logo.png';
import pokemon_store from '../assets/images/pokemon_store/pokemon_store.png';
import personal_website from '../assets/images/personal_website/personal_website.png';
import checkout_screen from '../assets/images/pokemon_store/checkout_screen.png';
import login_screen from '../assets/images/pokemon_store/login_screen.png';
import logged_in_screen from '../assets/images/pokemon_store/logged_in_screen.png';
import shopping_cart from '../assets/images/pokemon_store/shopping_cart.png';
import signup_screen from '../assets/images/pokemon_store/signup_screen.png';
import pokeball from '../assets/images/pokemon_store/pokeball.png';
import contact_me from '../assets/images/personal_website/contact_me.png';
import image_showcase from '../assets/images/personal_website/image_showcase.png';
import my_experience from '../assets/images/personal_website/my_experience.png';
import projects_image from '../assets/images/personal_website/projects.png';
import responsive_menu from '../assets/images/personal_website/responsive_menu.png';
import responsive_project from '../assets/images/personal_website/responsive_project.png';
import responsive_projects from '../assets/images/personal_website/responsive_projects.png';
import sh_logo from '../assets/images/personal_website/sh_logo.png';
import managers_view from '../assets/images/nfm/managers_view.png';
import players_view from '../assets/images/nfm/players_view.png';
import team_players_view from '../assets/images/nfm/team_players_view.png';
import transfer_players_view from '../assets/images/nfm/transfer_players_view.png';

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
      { image: personal_website, title: 'Main Display (With filters applied' },
      { image: contact_me, title: 'Contact Me' },
      { image: image_showcase, title: 'Image Showcase' },
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
    title: 'Pokemon Store',
    url_front: 'https://github.com/Shiggins95/pokemon_store_frontend',
    url_back: 'https://github.com/Shiggins95/pokemon_store_backend',
    url_live: 'http://139.162.211.53:3000/',
    stack: 'React, CSS, Redux, Java, Spring, Hibernate, PostgreSQL, JWT, Stripe',
    image_title: pokemon_store,
    logo_title: pokeball,
    images: [
      { image: pokemon_store, title: 'Main Display (With filters applied)' },
      { image: checkout_screen, title: 'Checkout Screen' },
      { image: login_screen, title: 'Login Screen' },
      { image: logged_in_screen, title: 'Logged In Screen' },
      { image: shopping_cart, title: 'Shopping Cart (With items)' },
      { image: signup_screen, title: 'Signup Screen' }
    ],
    description_s:
      'The reason I wanted to learn web development. I wanted to build a Pokemon store. ' +
      'I started this as a way to learn Redux and how to implement the Stripe API for payment processing. I still ' +
      'have some work to do on this. At present the payment processing works but there is no feedback for declined payments ' +
      'or successful ones. The filters were a challenge here as getting them to work with Redux, to store its state when ' +
      'using different parts of the app was difficult. It was a challenge I enjoyed though as learning Redux has been incredibly ' +
      'useful.',
    time_estimate: 'This took approx. 5 days to build',
    optimised: false
  },
  {
    id: 3,
    title: 'Not Football Manager',
    url_front: 'https://github.com/Shiggins95/notFootballManager_react',
    url_back: 'https://github.com/Shiggins95/notFootballManager_java_backend',
    url_live: 'http://139.162.211.53/',
    stack: 'React, Java, CSS, Spring, Hibernate, PostgreSQL',
    image_title: nfm_react,
    logo_title: nfm_logo,
    images: [
      { image: nfm_react, title: 'Teams Screen' },
      { image: managers_view, title: 'Managers Screen' },
      { image: players_view, title: 'Players Screen' },
      { image: team_players_view, title: 'Players in a Team (Sorted by value)' },
      { image: transfer_players_view, title: 'List of all players that can be transferred from a selected team' }
    ],
    description_s:
      'This was my final project at CodeClan. I wanted to build a full stack application that would connect ' +
      'retrieve data from a Java backend and display it using React. I think my most satisfying part of this is the ' +
      'sort functions when in team view. I worked a lot on the different routes in the backend, and although I know ' +
      'that this wasnt the most efficient way of getting data, I wanted practice with the backend API routes. ',
    time_estimate:
      "This took approx. 6 days to complete, and although it still isn't complete, I still think it gives a good " +
      'representation of what I can do in a short period of time.',
    optimised: false
  }
];
