🌱 What is Grow A Pear?

When preparing for my first garden last spring, I found that it was really hard to find accurate information on what plants would work in my backyard. Answer a few simple questions about where you live and how much sun you get in your backyard – Grow a Pear will give you a list of plants that will thrive in your care!!

There are no websites with accurate & easy-to-read data on what plants you can grow. Lots of bloggers will write about their own experiences gardening, but the plants they grow are very specific to the climate & sun exposure their plants are getting. Alternatively, there are lots of plant stores – but all of them are built with the purpose of selling you a product, not necessarily providing you with the information you need to choose the perfect product for you.

This website will help gardeners (from complete newcomers to pros) plan out their outdoor gardens with accurate information on what plants will thrive in their environments. They will use this application at some point ahead of their outdoor gardening season to plan out what they’ll need to purchase & when it’s time to start planting their seeds for the next year.

The most important design feature is to make sure that the content on Grow a Pear is straightforward and easy to understand without overwhelming new gardeners with too much information.

🌱 Tech Stack and APIs

HTML5
CSS
SASS
React.js
Node.js
Express
Knex.js
MySQL
Lottie-React Library (for animations)
Plotly.js Library (for the purposes of creating a map with plant hardiness zone data)
JWT Auth (for the purposes of finishing a demo version, the website will already be logged into. As a diving deeper, I will work on account creation.)
Geoapify API (generate GPS coordinates for user’s city so that the coordinates can be sent to Plotly.js map, which will confirm which plant hardiness zone users live in)

🌱 Server End Points


<img width="678" alt="image" src="https://user-images.githubusercontent.com/112671806/205554145-054c0f52-ff94-4228-afef-5724750d885f.png">

🌱 How to run

- add your information to .env file (for BrainStation - an API key has been sent to you for the Google Maps API)

in terminal:
- install packages: npm i
- run database migrations: npx knex migrate:latest
- seed database: npx knex seed:run

🌱 Client Side Implementation --> See my frontend Github folder for more information! https://github.com/meredith-j/meredith-jonatan-grow-a-pear-frontend
