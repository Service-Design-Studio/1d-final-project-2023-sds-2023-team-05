class SessionsController < ApplicationController
    def index
        sessions = Session.all
        render json: sessions
    end

    def show
        session = Session.find(params[:id])
        render json: session, include: [:faqs]
    end

    def create
        session = Session.create(session_params)
        render json: session
    end
end
