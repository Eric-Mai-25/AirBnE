# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_10_15_215414) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.bigint "host_id", null: false
    t.string "property_type", null: false
    t.string "address", null: false
    t.string "apt_num", default: "", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.integer "num_beds", null: false
    t.integer "num_bedrooms", null: false
    t.integer "num_bathrooms", null: false
    t.float "night_price", null: false
    t.float "cleaning_fee", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category", null: false
    t.boolean "has_wifi", default: false, null: false
    t.boolean "has_pets", default: false, null: false
    t.boolean "has_kitchen", default: false, null: false
    t.boolean "has_ac", default: false, null: false
    t.boolean "has_heat", default: false, null: false
    t.boolean "has_tv", default: false, null: false
    t.boolean "has_parking", default: false, null: false
    t.boolean "has_fireplace", default: false, null: false
    t.index ["address", "apt_num", "city"], name: "index_homes_on_address_and_apt_num_and_city", unique: true
    t.index ["country"], name: "index_homes_on_country"
    t.index ["host_id"], name: "index_homes_on_host_id"
    t.index ["night_price"], name: "index_homes_on_night_price"
    t.index ["num_bathrooms"], name: "index_homes_on_num_bathrooms"
    t.index ["num_bedrooms"], name: "index_homes_on_num_bedrooms"
    t.index ["num_beds"], name: "index_homes_on_num_beds"
    t.index ["property_type"], name: "index_homes_on_property_type"
    t.index ["state"], name: "index_homes_on_state"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "guest_id", null: false
    t.bigint "home_id", null: false
    t.date "check_in_date"
    t.date "check_out_date"
    t.float "total_price"
    t.integer "guests"
    t.string "reservation_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_reservations_on_guest_id"
    t.index ["home_id"], name: "index_reservations_on_home_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.bigint "home_id", null: false
    t.integer "cleanliness", null: false
    t.integer "communication", null: false
    t.integer "check_in", null: false
    t.integer "accuracy", null: false
    t.integer "location", null: false
    t.integer "value", null: false
    t.text "public_comment", null: false
    t.text "private_comment"
    t.date "review_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["home_id"], name: "index_reviews_on_home_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "phone_number", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_picture", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "homes", "users", column: "host_id"
  add_foreign_key "reservations", "users", column: "guest_id"
  add_foreign_key "reservations", "users", column: "home_id"
  add_foreign_key "reviews", "users", column: "author_id"
  add_foreign_key "reviews", "users", column: "home_id"
end