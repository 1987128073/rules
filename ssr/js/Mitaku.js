const url = $request.url;
const method = $request.method;
if (!$response.body) {
    $done({});
}

let body = $response.body;

if (method === "GET") {
	if (url.includes("mitaku.net")) {
		body = body.replace(/<style>.*<\/style>/, '');
	}
}
$done({
    body
});