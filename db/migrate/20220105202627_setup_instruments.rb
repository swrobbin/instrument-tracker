class SetupInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :setups_instruments, id: false do |t|
      t.belongs_to :setup
      t.belongs_to :instrument
    end
  end
end
