# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  namespace :api, defaults: { format: :json } do
    resources :checklists, only: [:index, :create, :destroy]
  end
end
