class GamesController < ApplicationController
  include Broadcastable

  def show
    @game = Game.find(params[:id])

    unless @game.players.include?(current_user)
      Participation.create(user: current_user, game: @game, ready: false)
    end

    broadcast_players_list
  end

  def create
    @game = Game.new
    @game.questions = Question.all.sample(20)
    @game.save

    redirect_to game_path(@game)
  end
end