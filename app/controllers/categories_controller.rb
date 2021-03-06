class CategoriesController < ApplicationController


    def index
        categories = current_user.categories.uniq
        render json: categories 
    end

    
    
    private

    def current_user
        user = User.find_by(id: session[:user_id])
    end
  
    
end
