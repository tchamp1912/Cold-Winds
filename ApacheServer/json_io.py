#!flask/bin/python

import sys
from flask import Flask, render_template, request, redirect, Response
import random, json

class Thermostat:

    def __init__():
        self.temperature = 70
        self.setting = "OFF"
        self.connection = Arduino

    def _get_state():
        return self.temperature, self.setting

    def _set_state(temp, set):
        return (True or False)

class Thermostat_API:

    app = None
    
    def __init__(__name__):
        self.app = Flask(__name__)
        self.therm = Thermostat()
    
    def run(self):
        self.app.run()

    @app.route('/')
    def output():
        temp, set = self.therm._get_state()
        # serve index template
        return render_template('index.html', temperature=temp, setting=set)

    @app.route('/receiver', methods = ['POST'])
    def worker():
        # read json + reply
        data = request.get_json()
        result = ''
        
        for item in data:
            # loop over every row
            temp = int(item['temperature'])
            set = str(item['setting'])
            
            if(set == 'HEAT'):
                self.therm._set_state(temp, set)
            
            else if(set == 'OFF'):
                self.therm._set_state(temp, set)
                
            else if(set == 'COOL'):
                self.therm._set_state(temp, set)
                

if __name__ == '__main__':
    # run!
    thermo = Thermostat_API("Run")
    thermo.run()
