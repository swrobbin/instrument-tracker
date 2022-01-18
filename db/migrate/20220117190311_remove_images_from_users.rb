class RemoveImagesFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :images, :string
  end
end
