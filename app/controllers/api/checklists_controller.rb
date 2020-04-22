# frozen_string_literal: true

module Api
  # API class for checklist.
  class ChecklistsController < ApiController
    # GET /api/checklists
    def index
      @checklists = Checklist.order(id: :asc)
      render json: @checklists
    end

    # POST /api/checklists
    def create
      @checklist = Checklist.create!(checklist_params)
      render json: @checklist
    end

    # DELETE /api/checklists/:id
    def destroy
      @checklist = Checklist.find(params[:id])
      @checklist.destroy!
      render json: @checklist.id
    end

    private

    def checklist_params
      params.require(:checklist).permit(:title)
    end
  end
end
