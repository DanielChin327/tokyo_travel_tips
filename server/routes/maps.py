# Example usage in a route (e.g., in routes/maps.py)
from flask import Blueprint, jsonify, current_app

maps_bp = Blueprint('maps', __name__, url_prefix='/maps')

@maps_bp.route('/get_token', methods=['GET'])
def get_mapbox_token():
    # Access the Mapbox token from the app configuration
    mapbox_token = current_app.config['MAPBOX_TOKEN']
    return jsonify({"mapbox_token": mapbox_token})
