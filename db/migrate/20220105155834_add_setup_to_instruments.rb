class AddSetupToInstruments < ActiveRecord::Migration[6.1]
  def change
    add_column :instruments, :setup_id, :integer
  end
end
