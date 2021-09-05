<!-- 
Todo list
Add remaining locations
Update distances, location info, etc
Improve css design
Media quieries
README
Code cleanup
 -->

# Game Of Thrones Interactive Map Game

![4 size view of the website's home page]()

## User Experience (UX)

### User Stories           
- First time visitor goals:
  - To find an interesting, interactive map of the world of Game of Thrones containing accurate information and locations.

- Returning visitor goals:
  - To test and improve trivial knowledge of the world and locations.

- Frequent user goals:
  - To see the map be updated with more locations over time, perhaps separated into larger, main locations, and smaller, world-building locations.

- Site owner goals: 
  - To provide a fun, interactive, informative map depicting the world of Game of Thrones, and continue to update the map with more locations and to make those updates easy to impliment.

### Design
- Color Scheme
  - Old, worn, rustic design in keeping with the age of the world.

- Typography
  - Hina Mincho used primarily as due to its old, worn, but still formal typeface.

- Imagery
  - The map used is of the fictional world of Westeros and Essos created by author George R. R. Martin and is the copywrite material of said author and HBO.

- Wireframes 

<!-- HTML used instead of markdown to control image size as images were very large when testing. -->

## Features

### Existing features
- Interactive elements.
- Responsive design for all screen sizes.

### Landing Page

## Features to be implimented

## Languages Used

- HTML5
- CSS3
- JavaScript

## Frameworks used

- [Google Fonts](https://fonts.google.com/)
- Git
- GitHub
- [PicResize](https://picresize.com/)

## Adding a new location 

- To add a new location all three files need to be updated.
  - HTML
    - < div id="location-name-locator" class="locator hover">Location Name< /div ></br>
      < div id="location-name" class="location">< /div >
  - CSS
    - #location-name {</br>
      top: (num)px;</br>
      left: (num)px;</br>
      }

    - #location-name-locator {</br>
      top: (num)px;</br>
      left: (num)px;</br>
      }
  
    - The CSS top and left coordinates must be static (px). Relative units will alter location and distances as the screen size changes.

  - JavaScript
    - In the locations array, add an object containing:
      - {</br>
        index: x,
        </br></br>
        function: 'LocationName', </br>
        *in camelCase assuming starting at the second word
        </br></br>
        name: 'location-name',
        </br></br>
        house: '',
        </br></br>
        information: 'Lorem ipsum',
        </br></br>
        currentlyLocated: false,
        </br></br>
        discovered: false,</br>
        },</br></br>

    - In the open functions section, add:</br></br>
      - function openLocationNameInfo() {</br>
        openInfo(x);</br>
        }
        </br></br>
        function closeLocationName() {</br>
        closeInfo(x);</br>
        }</br>
    
    - In the event Listener section, add:</br>
      - document.getElementById('location-name-locator').addEventListener('click',          openLocationNameInfo);

## Testing

- The original project was constructed on a laptop with a screen size of 12.3 inches. The code was also put through W3C validators and passed through without any issues.

  - [W3C Markup Validator]()

  - [W3C CSS Validator]()

### Known bugs

## Further testing
- The site was tested on Google Chrome using their developer tools and viewed on Firefox and Microsoft Edge to ensure it worked across multiple platforms. The site was also viewed on multiple devices of varying screen sizes.

- Google Chrome's DevTools Lighthouse:
  - Desktop
        ![Lighthouse score for desktop]()
  - Mobile
        ![Lighthouse score for mobile]()

## Deployment 
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab.
  - Open the pages tab on the left hand side of the page.
  - From the source section drop-down menu, select the Master Branch.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
<!-- Deployment code and content taken straight from Code Institutes README template -->

- You can view the live site [here]().

## Credits 

### Code
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

### Content
- Code
  - All code was written by the developer.

- Content
  - The world map was created by author George R. R. Martin and is the copywrite material of said author and HBO. The specific map used was sourced from [A Wiki of Ice and Fire](https://awoiaf.westeros.org/index.php/World_Map_(HBO_Game_Of_Thrones)) and all information was sourced from this [Game of Thrones Wiki](https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki).

### Artists:

### Acknowledgements
    
- Tutor support at Code Institute for all their support throughout.

- Friends and family for viewing the site and giving feedback.