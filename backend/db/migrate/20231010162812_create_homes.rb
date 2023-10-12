class CreateHomes < ActiveRecord::Migration[7.0]
  def change
    create_table :homes do |t|
      t.bigint :host_id, null: false
      t.string :title, null: false
      t.text :description
      t.decimal :price_per_night, null: false
      t.string :location
      t.string :property_type
      t.integer :number_of_bedrooms
      t.integer :number_of_bathrooms
      t.integer :maximum_guests
      t.text :availability_calendar
      t.timestamps
    end
    add_index :homes, :title
    add_index :homes, :host_id
  end
end
