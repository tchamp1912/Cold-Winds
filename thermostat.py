import socket
from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask.ext.jsonpify import jsonify

db_connect = create_engine('sqlite:///Thermostat.db')
app = Flask(__name__)
api = Api(app)



class Thermostat(Resource):

    """This Class will interpret and store current thermostat conditions"""

    # initialize the conditions at the beginning
    def __init__(self):
        # current temperature value and corresponding voltages
        self.temp = 70
        self.l_red = 0
        self.l_blue = 0
        self.l_yellow = 0

    # request current conditions from arduino
    def request_conditions(self, arduinoConnection):
        pass
        # waits for requested conditions from arduino
    def listen_conditions(self, arduinoConnection):
        pass
        # send conditions to web app
    def send_conditions(self, appConnection):
        pass
        #
    def listen_new_conditions(self, appConnection):
        pass
        # sets new conditions to arduino
    def setNewConditions(self, arduinoConnection):
        pass
        # converts new temperature into lead values
    def tempConversion(self, temp):
