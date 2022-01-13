class ChangeInstrumentNameInInstruments < ActiveRecord::Migration[6.1]
  def change
    rename_column :instruments, :instrument_name, :name
  end
end
