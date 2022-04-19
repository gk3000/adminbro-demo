const app = require('express')();
const port = process.env.PORT || 5050;

// CONNECTING TO DB
const mongoose = require('mongoose');
(async function () {
  try {
    await mongoose.connect('mongodb://127.0.0.1/ourDatabase');
    console.log('Your DB is running');
  } catch (error) {
    console.log('your DB is not running. Start it up!');
  }
})();


// ADMIN BRO
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express')
// We have to tell AdminJS that we will manage mongoose resources with it
AdminJS.registerAdapter(require('@adminjs/mongoose'));
// Import all the project's models
const Categories = require('./models/categories'); // replace this for your model
const Products = require('./models/products'); // replace this for your model
// Pass configuration settings  and models to AdminJS
const adminJS = new AdminJS({
  resources: [Categories, Products],
  rootPath: '/admin'
});
// Build and use a router which will handle all AdminJS routes
const router = AdminJSExpress.buildRouter(adminJS);
app.use(adminJS.options.rootPath, router);
// END ADMIN BRO

app.listen(port, () => console.log(`🚀 Server running on port ${port} 🚀`));