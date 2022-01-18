class RemoveImagesFromInstruments < ActiveRecord::Migration[6.1]
  def change
    remove_column :instruments, :images, :string
  end
end
