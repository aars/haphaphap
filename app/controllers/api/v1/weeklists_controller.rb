class Api::V1::WeeklistsController < ApplicationController
    def index
      render json: Weeklist.all
    end
  
    def create
      weeklist = Weeklist.create(weeklist_params)
      render json: weeklist
    end
  
    def destroy
      Weeklist.destroy(params[:id])
    end
  
    def update
      weeklist = Weeklist.find(params[:id])
      weeklist.update_attributes(weeklist_params)
      render json: weeklist
    end
  
    private
  
    def weeklist_params
      params.require(:weeklist).permit(:id, :name)
    end
  end