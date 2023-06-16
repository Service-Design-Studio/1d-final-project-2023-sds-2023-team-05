# Backend FAQAPI

This is the backend for team 05 faq service. It's built on Ruby on Rails and delivers RESTful API's to be consumed by our frontends.

## Prerequisites

1. Make sure Ruby is installed. You can run `ruby --version` to check if you have an appropriate version installed. Currently, I'm using 2.7.8
2. Bundler. Check bundler is installed by  `bundler -v`. I'm using 2.1.4
3. Postgres should be installed. `postgres -V`
4. Rails. `rails -v`. I'm using 7.0.2.2

## Setting up

1. Clone the repo and cd into this directory
2. Install the required gems. `bundle install`
3. Set up the database, load the schemas and seed the database. `bundle e rails db:setup`
4. Run `bundle e rails db:migrate` if there are necessary migrations
5. `rails server` to start the server

