export default function disabling(req, res) {
  res.clearPreviewData();
  res.send("Preview data disabled");
}
