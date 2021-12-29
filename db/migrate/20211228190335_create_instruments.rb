class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :brand_name
      t.string :model_name
      t.integer :category_id
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
