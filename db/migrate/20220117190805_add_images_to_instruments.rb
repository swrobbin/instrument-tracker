class AddImagesToInstruments < ActiveRecord::Migration[6.1]
  def change
    add_column :instruments, :images, :string
  end
end
