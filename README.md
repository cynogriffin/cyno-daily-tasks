# Cyno Daily Tasks

## Description

This poject is an attempt at building a dynamic daily task tracker. Upon page load, the current date and weekday will be displayed at the top of the page. Under that, the user is presented with hourly task boxes for each business hour. Each line contains the hour time for that task, a text box to write the tasks, and a save button. Upon clicking the save button, the content of the textbox for that hour will be saved into local storage so that when the page is reloaded, the content will remain. The background color of each hour's text box is dynamically updated based on the current time. If the task is in the past, the box will be grey, if in the present, red, and if in the future, green. The app as it appears in the browser is seen below for reference:

![screenshot of task tracker](assets/images/app-screenshot.png) 

In this project, I learned how to functionally utilize Bootstrap, Moment.js, and JQuery in addition to the base HTML, CSS, and JavaScript. Through this project I learned how to develop strong skills in referencing documentation and other online resources when using these tools to build functional, dynamic web applications. I learned how to properly use third-party APIs in applications and combine them to create real-world web apps. I also learned the importance of using console.log as you go to constatly test your code and outputs so you know exactly what your code is doing at each step, as well as referencing adn utilizing Chrome DevTools to test and track the application.

The live site with the completed and functional app can be found [here](https://cynogriffin.github.io/cyno-daily-tasks/). Please feel free to use and test the application and let me know of any possible improvements or suggestions.

## Installation and Usage

As an in-browser web application, there is no environment setup or installation needed. Simply load the page in your browser and the app should be fully functional.

To use, you can follow the steps listed below:

1. To enter a task, simply click on the text box for the desired hour and enter your task description. Then click the blue save button on the right of the task to save the task.

    ![saved task](assets/images/saved-task.png)

2. The tasks are highlighted based on the current time on page load.

    Tasks in the past will appear grey.
        ![past task](assets/images/past-task.png)

    Tasks in the present will be highlighted red, for urgency.
        ![present task](assets/images/present-task.png)

    Tasks in the future will be highlighted green.
        ![future task](assets/images/future-task.png)

3. Upon page load/reload, entered tasks will remain until cleared (pulling from local storage), the background colors will highlight according to the current hour, and the current date and weekday will show at the top of the page.

## Credits

I mainly referenced the documentation for the APIs used: [JQuery](https://api.jquery.com/), [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) and [Moment.js](https://momentjs.com/docs/).

---
Copyright &copy; 2021 Cody Griffin. All rights reserved.

Licensed under the [MIT License](LICENSE.txt).