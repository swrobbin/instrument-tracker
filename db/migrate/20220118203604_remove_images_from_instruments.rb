class RemoveImagesFromInstruments < ActiveRecord::Migration[6.1]
  def change
    remove_column :instruments, :image, :string
  end
end
