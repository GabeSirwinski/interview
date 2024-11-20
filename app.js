// app.js
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Serve static files from 'public' directory
app.use(express.static('public'))
app.use(express.urlencoded())

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post("/form", (req, res) => {
	// Todo:
  // implement form on frontend that posts to this endpoint
  // client-side validation on form
  // if all okay client-side, send form data to this endpoint
  // server-side validation on form
	// If passwords don't match send error response otherwise send thank you response
})

app.get("/data", (req, res) => {
  // Todo:
  // have client make a request to this endpoint
  // Fetch data from https://dummyjson.com/products
  // Send data to client

  // Display data on client:
	// Create a responsive card component that:
	// Displays a title, description, and button
	// Stacks vertically on mobile (<768px)
	// Shows inline on desktop
	// Uses Flexbox or Grid
	// Includes hover states

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
