class Api::HomesController < ApplicationController


  def categories
    render json: Home::CATEGORIES
end

def index
    @homes = Home.all
    render :index
end

def show
    @home = Home.find_by(id: params[:id])
    if @home
        render :show
    else
        render json: { errors: ["Oops... No house with those values"] }, status: 404
    end
end
end
