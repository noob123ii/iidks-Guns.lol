from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

VISITORS_FILE = 'visitors.json'

def get_visitor_data():
    if os.path.exists(VISITORS_FILE):
        try:
            with open(VISITORS_FILE, 'r') as f:
                return json.load(f)
        except:
            pass
    return {"count": 1, "ips": []}

def save_visitor_data(data):
    with open(VISITORS_FILE, 'w') as f:
        json.dump(data, f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/views')
def get_views():
    data = get_visitor_data()
    visitor_ip = request.headers.get('CF-Connecting-IP', request.remote_addr)
    user_agent = request.headers.get('User-Agent', 'unknown')
    unique_id = f"{visitor_ip}|{user_agent}"
    
    if 'unique_ids' not in data:
        data['unique_ids'] = []
    
    if unique_id not in data['unique_ids']:
        data['unique_ids'].append(unique_id)
        data['count'] += 1
        save_visitor_data(data)
        
    return jsonify({"count": data['count']})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)