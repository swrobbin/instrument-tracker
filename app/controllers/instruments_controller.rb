class InstrumentsController < ApplicationController
    before_action :authorize 

    def index
       instruments = current_user.instruments
       render json: instruments
    end

    def create
        instrument = current_user.instruments.create(instrument_params)
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
        instrument.update(name: params[:name], brand: params[:brand],  description: params[:description] )

         if params[:category_attributes]
            c = Category.create(name: params[:category_attributes][:name])
            instrument.category_id = c.id
         else
            instrument.category_id = params[:category_id]
         end
         instrument.save
        if instrument.valid?
            render json: instrument
        else
            render json: { errors: instrument.errors.full_messages}, status: :unprocessable_entity
    
        end
    end

    def destroy
        instrument = current_user.instruments.find_by(id: params[:id])
        current_user.instruments.destroy(instrument)
    end

    private
    def current_user
        user = User.find_by(id: session[:user_id])
    end

    def instrument_params
        params.require(:instrument).permit(:brand, :name, :description, :category_id, category_attributes: [:name])
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
