import React from 'react';
import ProjectCard from '../sub/ProjectCards';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20' id='projects'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Screenshot (5).png"
          title="Canvas Game"
          description="This project is a simple HTML5 canvas-based game built with JavaScript. Here's a summary of what the code does: The code sets up a canvas element and initializes its width and height to match the window size. It defines classes for the Player, Projectiles (bullets), Enemies, and Particles (for explosions)."
          link='https://canvas-frolic.netlify.app/'
        />
        <ProjectCard
          src="/Screenshot (10).png"
          title="Weather app using API Integration"
          description="This is a weather web application that I have developed in HTML, CSS, and integrated APIs. It allows users to gradually enter the name of the city, view the current weather conditions for this place, such as temperature, humidity, and wind speed. concerning the functional aspect, the app retrieves data from the OpenWeatherMap API and presents the data in a friendly and appealing manner. It’s a handy app, if nothing else, for looking up the weather anywhere on the globe."
          link='https://weather-routine.netlify.app/'
        />
        <ProjectCard
          src="/Screenshot (18).png"
          title="TO-DO list using Javascript"
          description="This is how the web application looks, a basic yet very elegant To-Do List developed in HTML, CSS and JavaScript. Has a clean UI with input field to Add Task, on hitting 'Add' button it adds task and show as list of tasks that gets updated automatically. CSS for layout and presentation, JavaScript to add behavior. Type in the input field to add more tasks using Add. There is a delete button (“✗”) for each task and the possibility to line-through the text by doing it. This method saves current tasks in the file using saveData() function, then shows them when called by showTask(), which provided a seamless user experience."
          link='https://to-do-catalouge.netlify.app/'
        />
        <ProjectCard
          src="/Screenshot (19).png"
          title="QR Code generator using API Integration"
          description="This QR Code Generator web application, developed with HTML, CSS, and JS, is useful for generating QR codes. The interface includes an input field for text or URL and a `Generate QR Code button`. Clicking the button generates a QR code via an API, displayed at the bottom. The CSS provides an appealing, flexible layout with centred elements, proper fonts, and smooth transitions. It also features error handling with a shake animation for empty input fields. Compared to other complex QR code generators, this application is very easy to use, making it highly convenient."
          link='https://qr-developer.netlify.app/'
        />
        <ProjectCard
          src="/Screenshot (20).png"
          title="Quiz website using HTML & CSS"
          description="In this application users will get a quiz form of questions for testing interactivity. Multiple-Choice quizzes with instant results and scores (with timer for added difficulty). There are endless questions, from which a group of preselected questions is hand-picked each time users take the quiz. Supports all kinds of portable and desktop devices natively. It helps students for study, professionals for work and trivia enthusiasts, just to have fun. The dynamic nature of the application and its user-friendly interface makes learning and testing knowledge interesting as well."
          link='https://quiz-software.netlify.app/'
        />
      </div>
    </div>
  );
}

export default Projects;
