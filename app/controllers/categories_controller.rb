class CategoriesController < ApplicationController

    # create and read only here

    def index
        categories = Category.all
        render json: categories
    end

    # def create
    #     category = current_user.instruments.category.create(instrument_params)
    #     if category.valid?
    #         render json: category
    #     else
    #         render json: { errors: category.errors.full_messages}, status: :unprocessable_entity
    #     end
    # end

    # def show
    #     category = current_user.instruments.category.find_by(id: params[:id])
    #     if category
    #         render json: category
    #     else
    #         render json: {error: "Not Found"}, status: :unauthorized
    #     end
    # end

    # private

    # def current_user
    #     user = User.find_by(id: session[:user_id])
    # end

    
end
