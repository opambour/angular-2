# angular-2
This is angular-2.0 final release

# Guideline For Starters
  <ol>
  <li>Install Node.js and npm on your machine</li>
  </ol>
  
  Download this repo or clone to your project
  Install packages: npm install
  Note: If you don't know how to install through the terminal, right-click on the package.json and click install. Some editors 
        like Webstorm and Netbeans offer this option. npm install will install all the necessary files and dependencies needed
        to run agular-2.
        It will take a while for the installation. After installation, you'll see two (2) new folder or directory in your project.
        i. node_modules
        ii. typings
        
        If the typings folder doesn't show up after running npm install, you'll need to install it manually with the command:
        npm run typings install

# Little Explanation
   package.json identifies npm package dependencies for the project.
   tsconfig.json defines how the TypeScript compiler generates JavaScript from the project's files.
   typings.json provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
   systemjs.config.js provides information to a module loader about where to find application modules, and registers 
   all the necessary packages. 
   It also contains other packages that will be needed by later documentation examples.
   
For more information and documentation, go to: https://angular.io/docs/ts/latest/quickstart.html
