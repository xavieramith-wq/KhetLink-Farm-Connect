from flask import Flask, jsonify
from flask_cors import CORS
import os

from database import init_db

app = Flask(__name__)
# Allow CORS for the frontend
CORS(app)

# Initialize Database connection
try:
    init_db()
except Exception as e:
    print(f"Error connecting to database: {e}")

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "success": True,
        "message": "Backend Connected ✓",
        "data": {}
    }), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
