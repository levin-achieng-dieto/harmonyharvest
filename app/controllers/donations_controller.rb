class DonationsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    def index
        render json: Donation.all, status: :ok
    end

    def show
        donation = Donation.find_by(id:params[:id])
        if donation
            render json: donation, status: :ok
        else
            render json: {error: "donation not found"}
        end
    end

    def create
        donation = Donation.create!(donation_params)
        render json: register, status: :created
    end

    private

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_record_not_found
        render json: {error: "member not found"}, status: :not_found
    end

    def donation_params
        params.permit(:name, :phone, :location, :delivery)
    end
end
