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

ActiveRecord::Schema.define(version: 2020_01_05_123930) do

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description", default: "Insert dish description"
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
    t.integer "quantity"
    t.string "unit"
  end

  create_table "recipe_ingredients", force: :cascade do |t|
    t.string "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "recipe_id"
    t.integer "ingredient_id"
    t.integer "quantity"
  end

  create_table "recipe_step_ingredients", force: :cascade do |t|
    t.integer "recipe_step_id"
    t.integer "ingredient_id"
    t.integer "quantity"
    t.string "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipe_steps", force: :cascade do |t|
    t.text "instruction"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "is_recipe_id"
    t.integer "recipe_id"
    t.string "title"
  end

  create_table "recipe_steps_recipes", id: false, force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.integer "recipe_step_id", null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "dish_id"
  end

  create_table "weeklists", force: :cascade do |t|
    t.integer "weeknr"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
