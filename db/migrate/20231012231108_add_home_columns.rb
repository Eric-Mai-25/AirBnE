class AddHomeColumns < ActiveRecord::Migration[7.0]
  def change
    add_column  :homes, :category, :string, null: false
    add_column  :homes, :has_wifi, :boolean, null:false, default: false
    add_column  :homes, :has_pets, :boolean, null:false, default: false
    add_column  :homes, :has_kitchen, :boolean, null:false, default: false
    add_column  :homes, :has_ac, :boolean, null:false, default: false
    add_column  :homes, :has_heat, :boolean, null:false, default: false
    add_column  :homes, :has_tv, :boolean, null:false, default: false
    add_column  :homes, :has_parking, :boolean, null:false, default: false
    add_column  :homes, :has_fireplace, :boolean, null:false, default: false
  end
end
