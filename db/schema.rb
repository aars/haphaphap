# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_14_142633) do

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dishes_ingredients", id: false, force: :cascade do |t|
    t.integer "dish_id", null: false
    t.integer "ingredient_id", null: false
  end

  create_table "dishes_weeklists", id: false, force: :cascade do |t|
    t.integer "weeklist_id", null: false
    t.integer "dish_id", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weeklists", force: :cascade do |t|
    t.integer "weeknr"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
