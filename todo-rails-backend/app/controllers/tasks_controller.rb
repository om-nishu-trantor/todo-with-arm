class TasksController < ApplicationController
  def index
    user = User.find(params[:user_id])
    if user
      tasks = user.tasks
      render json: tasks
    else
      render json: { message: 'User not found' }.to_json, status: :not_found
    end
  end

  def show
    user = User.find(params[:user_id])
    if user
      task = user.tasks.find(params[:id])
      if task
        render json: task, status: :ok
      else
        render json: { message: 'Task not found' }.to_json, status: :not_found
      end
    else
      render json: { message: 'User not found' }.to_json, status: :not_found
    end
  end

  def create
    user_id = params[:user_id]
    task = User.find(user_id).tasks.new(task_params[:task])
    if task.save
      render json: task, status: :created
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:user_id])
    if user
      task = user.tasks.find(params[:id])
      if task && task.update(task_update_params[:task])
        render json: task, status: :ok
      else
        render json: { message: 'Task not found' }.to_json, status: :not_found
      end
    else
      render json: { message: 'User not found' }.to_json, status: :not_found
    end
  end

  def destroy
    user = User.find(params[:user_id])
    if user
      task = user.tasks.find(params[:id])
      if task && task.delete
        render json: task, status: :ok
      else
        render json: { message: 'Task not found' }.to_json, status: :not_found
      end
    else
      render json: { message: 'User not found' }.to_json, status: :not_found
    end
  end

  private

  def task_params
    params.permit(:user_id, task: [:title, :description, :complete_till])
  end

  def task_update_params
    params.permit(:user_id, :id, task: [:title, :description, :complete_till])
  end
end