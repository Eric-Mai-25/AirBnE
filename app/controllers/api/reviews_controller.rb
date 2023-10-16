class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else 
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review
            @review.delete
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: 422
        end

    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review
            @review.update(review_params)
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: 422
        end

    end

    private 

    def review_params
        params.require(:review).permit(:author_id, :home_id, :cleanliness, :communication, :check_in :accuracy, :location, :value, :public_comment, :private_comment, :review_date)
      end
end
