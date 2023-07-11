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
        session = session_params
        render json: session, include: [:faqs]
    end


    private
    def session_params
        params.require(:session).permit(:title, :faqs)
        faqs = params[:faqs]
        session = Session.create!(title: params[:title])
        faqs.each do |faq_id|
            FaqSession.create!(session_id: session.id, faq_id: faq_id)
        end
        return session
    end
end
