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

    def add_faq
        # take in question and create and add to session
        faq = Faq.create!(question: params[:question], answer: params[:answer], author: params[:author], tag: params[:tag])
        FaqSession.create!(session_id: params[:id], faq_id: faq.id)
        session = Session.find(params[:id])
        render json: session, include: [:faqs], status: 201 
    end

    def add_faq_to_session
        # take in faq_id and add to session
        # an array of faq_ids
        for faq_id in params[:faq_ids]
            FaqSession.create!(session_id: params[:id], faq_id: faq_id)
        end
        session = Session.find(params[:id])
        render json: session, include: [:faqs], status: 201
    end

    private
    def session_params
        params.require(:session).permit(:title, :faqs, :author)
        faqs = params[:faqs]
        session = Session.create!(title: params[:title], author: params[:author])
        faqs.each do |faq_id|
            FaqSession.create!(session_id: session.id, faq_id: faq_id)
        end
        return session
    end
end
