class ChangeColumnNamesInInstruments < ActiveRecord::Migration[6.1]
  def change
    rename_column :instruments, :model_name, :name
    rename_column :instruments, :brand_name, :brand
  end
end
