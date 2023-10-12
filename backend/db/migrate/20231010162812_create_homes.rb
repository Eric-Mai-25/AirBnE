class CreateHomes < ActiveRecord::Migration[7.0]
  def change
    create_table :homes do |t|
      t.bigint :host_id, null: false
      t.string :property_type, null: false
      t.string :address, null: false
      t.string :apt_num, null: false, default: ""
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :num_beds, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_bathrooms, null: false
      t.float :night_price, null: false
      t.float :cleaning_fee, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end
    
    add_index :homes, :host_id
    add_index :homes, :property_type
    add_index :homes, :state
    add_index :homes, :country
    add_index :homes, :num_beds
    add_index :homes, :num_bedrooms
    add_index :homes, :num_bathrooms
    add_index :homes, :night_price
    add_index :homes, [:address, :apt_num, :city], unique: true

    add_foreign_key :homes, :users, column: :host_id
  end
end
