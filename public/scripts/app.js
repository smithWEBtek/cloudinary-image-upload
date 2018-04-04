const API_KEY = '777466575657829'
const API_SECRET = 'g7KcOFtLuC_0ZK5HMKNl3c48AJI'
const CLOUD_NAME = 'smithwebtek'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/smithwebtek'
const CLOUDINARY_UPLOAD_PRESET = 'eeyeq0g6'
var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');
var browseFiles = document.getElementById('browse-files');

fileUpload.addEventListener('change', function (event) {
	var file = event.target.files[0]
	var formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

	axios({
		url: `${CLOUDINARY_URL}` + '/upload',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: formData
	}).then(function (res) {
		imgPreview.src = res.data.secure_url
		console.log(res)
	}).catch(function (err) {
		console.log(err);
	});
});
