class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.bigint :author_id, null: false
      t.bigint :home_id, null: false
      t.integer :cleanliness, null: false
      t.integer :communication, null: false
      t.integer :check_in, null: false
      t.integer :accuracy, null: false
      t.integer :location, null: false
      t.integer :value, null: false
      t.text :public_comment, null: false 
      t.text :private_comment
      t.float :rating, null:false
      t.date :review_date, null: false 
      t.timestamps
    end

    add_index :reviews, :author_id
    add_index :reviews, :home_id

    add_foreign_key :reviews, :users, column: :author_id
    add_foreign_key :reviews, :users, column: :home_id
  end
end
