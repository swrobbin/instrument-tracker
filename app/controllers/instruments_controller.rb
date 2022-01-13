class InstrumentsController < ApplicationController
    before_action :authorize 

    def index
       instruments = current_user.instruments
       render json: instruments
    end

    def create
        instrument = current_user.instruments.create(instrument_params)
        # category = instrument.create_category()
        instrument.create_category
        if instrument.valid?
            render json: instrument
        else
            render json: { errors: instrument.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        instrument = current_user.instruments.find_by(id: params[:id])
        if instrument
            render json: instrument
        else
            render json: {error: "Not Found"}, status: :unauthorized
        end
    end

    def update
        instrument = current_user.instruments.find_by(id: params[:id])
        instrument.update(instrument_params)
        if instrument.valid?
            render json: book
        else
            render json: { errors: instrument.errors.full_messages}, status: :unprocessable_entity
    
        end
    end

    def destroy
        instrument = current_user.instruments.find_by(id: params[:id])
        current_user.books.destroy(instrument)
    end

    private
    def current_user
        user = User.find_by(id: session[:user_id])
    end

    def instrument_params
        # binding.pry
        params.require(:instrument).permit(:brand, :name, :description, :category_id)
        # category_attributes: [:name]
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
