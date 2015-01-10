class TodosController < ApplicationController
  before_action :find_todo, only: [:show, :update, :destroy]

  def index
    @todos = Todo.all
  end

  def show
  end

  def create
    @todo = Todo.create(todo_params)
  end

  def update
    @todo.update(todo_params)
  end

  def destroy
    @todo.destroy
  end

  private

  def find_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:text, :completed)
  end
end
