require 'sinatra'
require 'mongoid'
require 'oj'
require "sinatra/reloader" if development?

Mongoid.load!("mongoid.yml") 

class Doc
  include Mongoid::Document  

  field :name_first,  type: String 
  field :name_middle, type: String 
  field :name_last,   type: String
  field :phone,     type: String
  field :email,     type: String 
  field :linked_in,   type: String 
  field :website,   type: String
  field :twitter,   type: String

  embeds_many :street_address
end

class StreetAddress
  include Mongoid::Document

  field :street,  type: String
  field :city,    type: String
  field :state,   type: String
  field :zip_code type: String

  embedded_in :doc
end

class Experience
  include Mongoid::Document

  field :location, type: String
  field :employer, type: String
  field :date,     type: String
  field :responsibilities, type: String
  field :position,  type: String

  embedded_in: doc
end

class Education
  include Mongoid::Document

  field :school,    type: String
  field :focus,     type: String
  field :activities,type: String
  field :respon

  embedded_in: doc
end

get '/' do 
  content_type :json
  docs = Doc.all
  docs.to_json
end

get '/:id' do
  content_type :json
  doc = Doc.find params[:id]
  doc.to_json
end

# implement POST, PUT, and DELETE
var data = {"resume":{"name_first":"Bob"}}

$.ajax({
    method: 'POST',
    url: '/',
    data: JSON.stringify(data)
  });

get '/' do
  content_type: json
  

post '/' do
  data = JSON.parse(request.body.read)["resume"]
  doc = Doc.create!(data)
end

put'/' do
  data = JSON.parse(request.body.read)["resume"]
  doc = Doc.find params[:id]
  doc.update_attributes!(data)
end

delete '/' do
  data = JSON.parse(request.body.read)["resume"]
  doc = Doc.destroy
  {"success":true, "message": "Deleted resume with id = #{params[:id]}"}.to_json
end

# create:
# data = JSON.parse(request.body.read)["resume"]
# id = Doc.create!(data)

# update:
# data = JSON.parse(request.body.read)["resume"]
# doc = Doc.find params[:id]
# doc.update_attributes!(data)

# destroy:
# data = JSON.parse(request.body.ready)["resume"]
# doc.destroy