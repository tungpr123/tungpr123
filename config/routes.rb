Rails.application.routes.draw do
resources :programms
root "programms#index"
get "/catalog" => "programms#catalog"
end
