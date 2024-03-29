class ChatsController < ApplicationController
  before_action :set_chat, only: %i[ show update destroy ]

  # GET /chats
  def index
    @chats = Chat.all

    render json: @chats.reverse
  end

  # GET /chats/1
  def show
    render json: @chat
  end

  # POST /chats
  def create
    @chat = Chat.new(chat_params)

    if @chat.save
      render json: @chat, status: :created, location: @chat
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chats/1
  def update
    if @chat.update(chat_params)
      render json: @chat
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chats/1
  def destroy
    @chat.destroy
  end

  def flagged
    @chats = Chat.where(flagged: true)
    render json: @chats
  end

  def unflag
    @chat = Chat.find(params[:id])
    @chat.update(flagged: false)
    render json: @chat
  end

  def train
    @chat = Chat.find(params[:id])
    # if flagged
    if @chat.flagged
      @chat.update(trained_response: params[:trained_response])
    end
    render json: @chat
  end

  def trained
    @chats = Chat.where.not(trained_response: nil)
    render json: @chats
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chat
      @chat = Chat.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def chat_params
      params.require(:chat).permit(:flagged, :question, :answer, :id, :reason, :comment, :trained_response, :learner)
    end
end
