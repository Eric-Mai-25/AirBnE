# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "faker"

CATEGORIES = ["beachfront", "countryside", "cabin", "mansion", "lakefront", "amazing views", "tiny home", "modern", "barn", "omg"]
PROPERTY_TYPES = ["House", "Apartment", "Studio", "Cabin", "Private Room"]
PROFILE_PICTURES = ["https://xsgames.co/randomusers/avatar.php?g=male", "https://xsgames.co/randomusers/avatar.php?g=female"]

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!("users")

  puts "Creating users..."
  User.create!(
    username: "demo",
    email: "demo1@user.io",
    password: "password",
    phone_number: "1-510-932-3092",
    profile_picture: PROFILE_PICTURES.sample,
  )

  User.create!(
    username: "Demo-lition",
    email: "demo@user.io",
    password: "password",
    phone_number: "1-510-933-3092",
    profile_picture: PROFILE_PICTURES.sample,
  )

  30.times do
    User.create(
      username: Faker::Internet.username(specifier: 5..10),
      phone_number: Faker::PhoneNumber.cell_phone,
      email: Faker::Internet.email,
      password: "password",
      profile_picture: PROFILE_PICTURES.sample,
    )
  end

  # Clear existing data
  # This will delete all records from the corresponding table.
  Home.destroy_all

  ApplicationRecord.connection.reset_pk_sequence!("homes")

  20.times do
    Home.create(
      host_id: Faker::Number.between(from: 1, to: 2),
      property_type: PROPERTY_TYPES.sample,
      address: Faker::Address.street_address,
      apt_num: Faker::Lorem.word,
      city: Faker::Address.city,
      state: Faker::Address.state,
      country: Faker::Address.country,
      title: Faker::Lorem.sentence,
      description: Faker::Lorem.paragraph,
      num_beds: Faker::Number.between(from: 1, to: 6),
      num_bedrooms: Faker::Number.between(from: 1, to: 4),
      num_bathrooms: Faker::Number.between(from: 1, to: 3),
      night_price: Faker::Number.between(from: 50, to: 300).to_f,
      cleaning_fee: Faker::Number.between(from: 20, to: 100).to_f,
      latitude: Faker::Address.latitude,
      longitude: Faker::Address.longitude,
      created_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
      updated_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
      category: CATEGORIES.sample,
      has_wifi: Faker::Boolean.boolean(true_ratio: 0.8), # 80% chance of being true
      has_pets: Faker::Boolean.boolean(true_ratio: 0.2), # 20% chance of being true
      has_kitchen: Faker::Boolean.boolean(true_ratio: 0.9), # 90% chance of being true
      has_ac: Faker::Boolean.boolean(true_ratio: 0.7), # 70% chance of being true
      has_heat: Faker::Boolean.boolean(true_ratio: 0.7), # 70% chance of being true
      has_tv: Faker::Boolean.boolean(true_ratio: 0.8), # 80% chance of being true
      has_parking: Faker::Boolean.boolean(true_ratio: 0.6), # 60% chance of being true
      has_fireplace: Faker::Boolean.boolean(true_ratio: 0.3), # 30% chance of being true
    )
  end

  Review.destroy_all

  50.times do
    Review.create(
      author_id: Faker::Number.between(from: 1, to: 20), # Assuming user IDs are between 1 and 30
      home_id: Faker::Number.between(from: 1, to: 20), # Assuming home IDs are between 1 and 20
      cleanliness: Faker::Number.between(from: 1, to: 5),
      communication: Faker::Number.between(from: 1, to: 5),
      check_in: Faker::Number.between(from: 1, to: 5),
      accuracy: Faker::Number.between(from: 1, to: 5),
      location: Faker::Number.between(from: 1, to: 5),
      value: Faker::Number.between(from: 1, to: 5),
      public_comment: Faker::Lorem.paragraph,
      private_comment: Faker::Lorem.paragraph,
      review_date: Faker::Date.between(from: 2.years.ago, to: Date.today),
      created_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
      updated_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
    )
  end
end
