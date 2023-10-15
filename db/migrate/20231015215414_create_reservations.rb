class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.bigint :guest_id, null: false
      t.bigint :home_id, null: false
      t.date :check_in_date
      t.date :check_out_date
      t.float :total_price
      t.string :reservation_status
      t.timestamps
    end

    add_index :reservations, :guest_id
    add_index :reservations, :home_id

    add_foreign_key :reservations, :users, column: :guest_id
    add_foreign_key :reservations, :users, column: :home_id
  end
end
