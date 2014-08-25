document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('authorize').addEventListener('click', authorize);
})

function authorize() {
	window.oauth2.start(); //authorize
}