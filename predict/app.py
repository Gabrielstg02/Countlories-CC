import io
# from pprint import pprint
import numpy as np
import tensorflow as tf
from PIL import Image
from flask import Flask, jsonify, request

# Import Model and Labels
model = tf.keras.models.load_model('model')
labels = np.loadtxt('labels.txt', dtype=str)

#  Preprocess Image
def prepare_image(img):
    img = Image.open(io.BytesIO(img))
    img = img.resize((224, 224))
    img = np.array(img) / 255.0
    img = img.reshape(-1, 224, 224, 3)
    return img

# Predict Image
def predict_result(img):
    threshold = 0.5
    predict_output = model.predict(img)
    predict_output = np.squeeze(predict_output)
    predict_output = dict(zip(labels, predict_output))
    # pprint(predict_output)
    # filter output that have probability > threshold
    filtered_output = {k: v for k,
                       v in predict_output.items() if v > threshold}
    if (len(filtered_output) == 0):
        return 'No Result'
    return max(filtered_output, key=filtered_output.get)


app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def infer_image():
    # check if image is present in request
    if 'image' not in request.files:
        res = {'code': 400, 'message': 'image is required'}
        return jsonify(res)

    image = request.files.get('image')

    if not image:
        return

    # read image as bytes
    img_bytes = image.read()
    img = prepare_image(img_bytes)

    res = {'code': 200, 'message': 'success',
           'prediction': predict_result(img)}
    return jsonify(res)


@app.route('/', methods=['GET'])
def index():
    return 'Machine Learning Inference'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
