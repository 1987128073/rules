const domain = 'dyxs28.com';

const url = $request.url;
const method = $request.method;

if (!$response.body) {
    $done({});
}

let body = $response.body;

if (method === "GET") {
	if (url.includes(domain + "/statics/js/main.js")) {
		body = body.replace(/<div.*\/div>/, '');
	}
	if (url.includes(domain + "/paly")) {
		body = body.replace('class="player-rm rm-two rm-list"', 'style="visibility:hidden;"');
		body = body.replace('id="rm-float"', 'style="visibility:hidden;"');
		body = body.replace('at.umtrack.com', '');
	}
	if (url.includes(domain + "/show")) {
		body = body.replace('class="module-domain-prompt"', 'style="visibility:hidden;"');
		body = body.replace('class="player-rm rm-two rm-list"', 'style="visibility:hidden;"');
	}
}

$done({
    body
});