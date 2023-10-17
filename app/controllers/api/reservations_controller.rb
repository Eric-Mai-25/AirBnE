class Api::ReservationsController < ApplicationController


    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save!
            render :show
        else 
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation
            @reservation.delete
            render :show
        else
            render json: {errors: @reservation.errors.full_messages}, status: 422
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:guest_id, :home_id, :check_in_date, :check_out_date, :guests, :total_price, :reservation_status)
    end
end
